import envCi from 'env-ci';
import * as fs from 'fs';
import parseAuthor from 'parse-author';
import path from 'path';
import { Memoize as memoize } from 'typescript-memoize';
import { ReposCreateReleaseResponse, Response } from '@octokit/rest';

import {
  Auto,
  determineNextVersion,
  getCurrentBranch,
  getLernaPackages,
  inFolder,
  execPromise,
  ILogger,
  IPlugin,
  InteractiveInit,
  SEMVER
} from '@auto-it/core';
import getPackages from 'get-monorepo-packages';
import { gt, gte, inc, ReleaseType } from 'semver';

import getConfigFromPackageJson from './package-config';
import setTokenOnCI from './set-npm-token';
import { loadPackageJson, writeFile } from './utils';

const { isCi } = envCi();
const VERSION_COMMIT_MESSAGE = '"Bump version to: %s [skip ci]"';

/** Check if the project is a monorepo */
const isMonorepo = () => fs.existsSync('lerna.json');

/** Get the last published version for a npm package */
async function getPublishedVersion(name: string) {
  try {
    return await execPromise('npm', ['view', name, 'version']);
  } catch (error) {}
}

/**
 * Determine the greatest version between last published version of a
 * package and the version in the package.json.
 */
export async function greaterRelease(
  prefixRelease: (release: string) => string,
  name: string,
  packageVersion: string,
  prereleaseBranch?: string
) {
  const publishedVersion = await getPublishedVersion(name);

  if (!publishedVersion) {
    return packageVersion;
  }

  const publishedPrefixed = prefixRelease(publishedVersion);
  // The branch (ex: next) is also the --preid
  const baseVersion =
    prereleaseBranch && packageVersion.includes(prereleaseBranch)
      ? inc(packageVersion, 'patch') || packageVersion
      : packageVersion;

  return gte(baseVersion, publishedPrefixed)
    ? packageVersion
    : publishedPrefixed;
}

interface IMonorepoPackage {
  /** Path to the monorepo package */
  path: string;
  /** Name to the monorepo package */
  name: string;
  /** Version to the monorepo package */
  version: string;
}

interface ChangedPackagesArgs {
  /** Commit hash to find changes for */
  sha: string;
  /** All of the packages in the monorepo */
  packages: IMonorepoPackage[];
  /** The lerna.json for the monorepo */
  lernaJson: {
    /** The version of the monorepo */
    version?: string;
  };
  /** An "auto" logger to use for loggin */
  logger: ILogger;
  /** The semver bump being applied */
  version?: SEMVER;
}

/**
 * Determine what packages in a monorepo have git changes.
 * We are specifically not using `lerna changed` here because
 * we only care about the package that changed, not what other
 * packages that might effect.
 */
export async function changedPackages({
  sha,
  packages,
  lernaJson,
  logger,
  version
}: ChangedPackagesArgs) {
  const changed = new Set<string>();
  const changedFiles = await execPromise('git', [
    'show',
    '--first-parent',
    sha,
    '--name-only',
    '--pretty='
  ]);

  changedFiles.split('\n').forEach(filePath => {
    const monorepoPackage = packages.find(subPackage =>
      inFolder(subPackage.path, filePath)
    );

    if (!monorepoPackage) {
      return;
    }

    changed.add(
      lernaJson.version === 'independent'
        ? `${monorepoPackage.name}@${inc(
            monorepoPackage.version,
            version as ReleaseType
          )}`
        : monorepoPackage.name
    );
  });

  if (changed.size > 0) {
    logger.veryVerbose.info(`Got changed packages for ${sha}:\n`, changed);
  }

  return [...changed];
}

/** Get the package with the greatest version in a monorepo */
export function getMonorepoPackage() {
  const packages = getPackages(process.cwd());

  return packages.reduce((greatest, subPackage) => {
    if (subPackage.package.version) {
      if (!greatest.version) {
        return subPackage.package;
      }

      if (subPackage.package.private) {
        return greatest;
      }

      return gt(greatest.version, subPackage.package.version)
        ? greatest
        : subPackage.package;
    }

    return greatest;
  }, {} as IPackageJSON);
}

/** Get all of the packages+version in the lerna monorepo */
async function getPackageList() {
  return getLernaPackages().then(packages =>
    packages.map(p => `${p.name}@${p.version.split('+')[0]}`)
  );
}

/**
 * Increment the version number of a package based the bigger
 * release between the last published version and the version
 * in the package.json.
 */
async function bumpLatest(
  { version: localVersion, name }: IPackageJSON,
  version: SEMVER
) {
  const latestVersion = localVersion
    ? await greaterRelease(s => s, name, localVersion)
    : undefined;

  return latestVersion ? inc(latestVersion, version as ReleaseType) : version;
}

const verbose = ['--loglevel', 'silly'];

interface INpmConfig {
  /** Whether to create sub-package changelogs */
  subPackageChangelogs?: boolean;
  /** Whether to set the npm token on CI */
  setRcToken?: boolean;
  /** Whether to force publish all the packages in a monorepo */
  forcePublish?: boolean;
  /** A scope to publish canary versions under */
  canaryScope?: string;
  /** Publish a monorepo with the lerna --exact flag */
  exact?: boolean;
}

/** Parse the lerna.json file. */
const getLernaJson = () => {
  try {
    return JSON.parse(fs.readFileSync('lerna.json', 'utf8'));
  } catch (error) {
    return {};
  }
};

/** Render a list of string in markdown */
const markdownList = (lines: string[]) =>
  lines.map(line => `- \`${line}\``).join('\n');

/** Get the previous version. Typically from a package distribution description file. */
async function getPreviousVersion(auto: Auto, prereleaseBranch: string) {
  let previousVersion = '';

  if (isMonorepo()) {
    auto.logger.veryVerbose.info(
      'Using monorepo to calculate previous release'
    );
    const monorepoVersion = getLernaJson().version;

    if (monorepoVersion === 'independent') {
      previousVersion =
        'dryRun' in auto.options && auto.options.dryRun
          ? markdownList(await getPackageList())
          : '';
    } else {
      const releasedPackage = getMonorepoPackage();

      if (!releasedPackage.name && !releasedPackage.version) {
        previousVersion = auto.prefixRelease(monorepoVersion);
      } else {
        previousVersion = await greaterRelease(
          auto.prefixRelease,
          releasedPackage.name,
          auto.prefixRelease(monorepoVersion),
          prereleaseBranch
        );
      }
    }
  } else if (fs.existsSync('package.json')) {
    auto.logger.veryVerbose.info(
      'Using package.json to calculate previous version'
    );
    const { version, name } = await loadPackageJson();

    previousVersion = version
      ? await greaterRelease(
          auto.prefixRelease,
          name,
          auto.prefixRelease(version),
          prereleaseBranch
        )
      : '0.0.0';
  }

  auto.logger.verbose.info(
    'NPM: Got previous version from package.json',
    previousVersion
  );

  return previousVersion;
}

/** Remove the @ sign */
const sanitizeScope = (canaryScope: string) => canaryScope.replace('@', '');

/** Add a npm scope to a package name. Can have leading @ or not. */
const addCanaryScope = (canaryScope: string, name: string) =>
  `@${sanitizeScope(canaryScope)}/${name}`;

/** Change the scope of all the packages to the canary scope */
async function setCanaryScope(canaryScope: string, paths: string[]) {
  const packages = await Promise.all(
    paths.map(async p => [p, await loadPackageJson(p)] as const)
  );
  const names = packages.map(([, p]) => p.name);

  await Promise.all(
    packages.map(async ([p, packageJson]) => {
      const newJson = { ...packageJson };
      const name = packageJson.name.match(/@\S+\/\S+/)
        ? packageJson.name.split('/')[1]
        : packageJson.name;

      newJson.name = addCanaryScope(canaryScope, name);

      if (newJson.dependencies) {
        Object.keys(newJson.dependencies).forEach(d => {
          if (names.includes(d)) {
            const depName = d.match(/@\S+\/\S+/) ? d.split('/')[1] : d;

            newJson.dependencies![
              addCanaryScope(canaryScope, depName)
            ] = newJson.dependencies![d];
            delete newJson.dependencies![d];
          }
        });
      }

      await writeFile(
        path.join(p, 'package.json'),
        JSON.stringify(newJson, null, 2)
      );
    })
  );
}

/** Reset the scope changes of all the packages  */
async function gitReset() {
  await execPromise('git', ['reset', '--hard', 'HEAD']);
}

/** Make install instructions for multiple repos */
const makeMonorepoInstallList = (packageList: string[]) =>
  [
    ':sparkles: Test out this PR locally via:\n',
    '```sh',
    ...packageList.map(p => `npm install ${p}`),
    '# or ',
    ...packageList.map(p => `yarn add ${p}`),
    '```'
  ].join('\n');

/** Publish to NPM. Works in both a monorepo setting and for a single package. */
export default class NPMPlugin implements IPlugin {
  /** The name of the plugin */
  name = 'NPM';

  /** Whether to render a changelog like a monorepo's */
  private renderMonorepoChangelog: boolean;

  /** Whether to create sub-package changelogs */
  private readonly subPackageChangelogs: boolean;
  /** Whether to set the npm token in CI */
  private readonly setRcToken: boolean;
  /** Whether to always publish all packages in a monorepo */
  private readonly forcePublish: boolean;
  /** Publish a monorepo with the lerna --exact flag */
  private readonly exact: boolean;
  /** A scope to publish canary versions under */
  private readonly canaryScope: string | undefined;

  /** Initialize the plugin with it's options */
  constructor(config: INpmConfig = {}) {
    this.exact = Boolean(config.exact);
    this.renderMonorepoChangelog = true;
    this.subPackageChangelogs = config.subPackageChangelogs || true;
    this.setRcToken =
      typeof config.setRcToken === 'boolean' ? config.setRcToken : true;
    this.forcePublish =
      typeof config.forcePublish === 'boolean' ? config.forcePublish : true;
    this.canaryScope = config.canaryScope || undefined;
  }

  /** A memoized version of getLernaPackages */
  @memoize()
  private async getLernaPackages() {
    return getLernaPackages();
  }

  /** Custom initialization for this plugin */
  init(initializer: InteractiveInit) {
    initializer.hooks.createEnv.tap(this.name, vars => [
      ...vars,
      {
        variable: 'NPM_TOKEN',
        message: `Enter a npm token for publishing packages https://docs.npmjs.com/creating-and-viewing-authentication-tokens`
      }
    ]);

    initializer.hooks.getAuthor.tapPromise(this.name, async () => {
      const packageJson = await loadPackageJson();

      if (packageJson.author) {
        return true;
      }

      const author = await initializer.getAuthorInformation();
      const newPackageJson = { ...packageJson };
      newPackageJson.author = `${author.name} <${author.email}>`;
      await writeFile('package.json', JSON.stringify(newPackageJson, null, 2));

      return true;
    });

    initializer.hooks.getRepo.tapPromise(this.name, async () => {
      const packageJson = await loadPackageJson();

      if (packageJson.repository) {
        return true;
      }

      const repository = await initializer.getRepoInformation();
      const newPackageJson = { ...packageJson };
      newPackageJson.repository = `${repository.owner}/${repository.repo}`;
      await writeFile('package.json', JSON.stringify(newPackageJson, null, 2));

      return true;
    });

    initializer.hooks.writeRcFile.tapPromise(this.name, async rc => {
      const packageJson = await loadPackageJson();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((packageJson as any).auto) {
        initializer.logger.log.note(
          'Would have wrote configuration:\n',
          JSON.stringify(rc, null, 2)
        );
        initializer.logger.log.warn(
          'Found auto configuration in package.json. Doing nothing.'
        );
      } else {
        await writeFile(
          'package.json',
          JSON.stringify({ ...packageJson, auto: rc }, null, 2)
        );
        initializer.logger.log.success('Wrote configuration to package.json');
      }

      return true;
    });
  }

  /** Tap into auto plugin points. */
  apply(auto: Auto) {
    const isVerbose =
      auto.logger.logLevel === 'verbose' ||
      auto.logger.logLevel === 'veryVerbose';
    const verboseArgs = isVerbose ? verbose : [];
    const prereleaseBranches = auto.config?.prereleaseBranches!;
    const branch = getCurrentBranch();
    // if ran from master we publish the prerelease to the first
    // configured prerelease branch
    const prereleaseBranch =
      branch && prereleaseBranches.includes(branch)
        ? branch
        : prereleaseBranches[0];

    auto.hooks.beforeShipIt.tap(this.name, async context => {
      const isIndependent = getLernaJson().version === 'independent';

      // In independent mode it's possible that no changes to packages have been
      // made, so no release will be made.
      if (isIndependent && context.releaseType === 'latest') {
        try {
          await execPromise('yarn', ['lerna', 'updated']);
        } catch (error) {
          auto.logger.log.warn(
            'Lerna detected no changes in project. Aborting release since nothing would be published.'
          );
          process.exit(0);
        }
      }

      if (!isCi) {
        return;
      }

      auto.checkEnv(this.name, 'NPM_TOKEN');
    });

    auto.hooks.getAuthor.tapPromise(this.name, async () => {
      auto.logger.verbose.info(
        'NPM: Getting repo information from package.json'
      );
      const packageJson = await loadPackageJson();

      if (!packageJson.author) {
        return;
      }

      const { author } = packageJson;

      if (typeof author === 'string') {
        return parseAuthor(author);
      }

      return author;
    });

    auto.hooks.getPreviousVersion.tapPromise(this.name, () =>
      getPreviousVersion(auto, prereleaseBranch)
    );

    auto.hooks.getRepository.tapPromise(this.name, async () => {
      auto.logger.verbose.info(
        'NPM: getting repo information from package.json'
      );
      return getConfigFromPackageJson();
    });

    auto.hooks.onCreateRelease.tap(this.name, release => {
      release.hooks.createChangelogTitle.tap(
        `${this.name} - lerna independent`,
        () => {
          if (isMonorepo() && getLernaJson().version === 'independent') {
            return '';
          }
        }
      );
    });

    auto.hooks.onCreateChangelog.tap(
      this.name,
      (changelog, version = SEMVER.patch) => {
        changelog.hooks.renderChangelogLine.tapPromise(
          'NPM - Monorepo',
          async ([commit, line]) => {
            if (!isMonorepo() || !this.renderMonorepoChangelog) {
              return [commit, line];
            }

            const lernaPackages = await this.getLernaPackages();
            const lernaJson = getLernaJson();
            const packages = await changedPackages({
              sha: commit.hash,
              packages: lernaPackages,
              lernaJson,
              logger: auto.logger,
              version
            });

            const section = packages?.length
              ? packages.map(p => `\`${p}\``).join(', ')
              : 'monorepo';

            if (section === 'monorepo') {
              return [commit, line];
            }

            return [commit, [`- ${section}`, `  ${line}`].join('\n')];
          }
        );
      }
    );

    auto.hooks.beforeCommitChangelog.tapPromise(
      this.name,
      async ({ commits, bump }) => {
        if (!isMonorepo() || !auto.release || !this.subPackageChangelogs) {
          return;
        }

        const lernaPackages = await getLernaPackages();
        const changelog = await auto.release.makeChangelog(bump);

        this.renderMonorepoChangelog = false;

        // Cannot run git operations in parallel
        await lernaPackages.reduce(async (last, lernaPackage) => {
          await last;

          auto.logger.verbose.info(
            `Updating changelog for: ${lernaPackage.name}`
          );

          const includedCommits = commits.filter(commit =>
            commit.files.some(file => inFolder(lernaPackage.path, file))
          );
          const title = `v${inc(lernaPackage.version, bump as ReleaseType)}`;
          const releaseNotes = await changelog.generateReleaseNotes(
            includedCommits
          );

          if (releaseNotes.trim()) {
            await auto.release!.updateChangelogFile(
              title,
              releaseNotes,
              path.join(lernaPackage.path, 'CHANGELOG.md')
            );
          }
        }, Promise.resolve());

        this.renderMonorepoChangelog = true;
      }
    );

    auto.hooks.version.tapPromise(this.name, async version => {
      const isBaseBranch = branch === auto.baseBranch;

      if (isMonorepo()) {
        auto.logger.verbose.info('Detected monorepo, using lerna');
        const isIndependent = getLernaJson().version === 'independent';
        const monorepoBump =
          isIndependent || !isBaseBranch
            ? undefined
            : await bumpLatest(getMonorepoPackage(), version);

        await execPromise('npx', [
          'lerna',
          'version',
          monorepoBump || version,
          !isIndependent && this.forcePublish && '--force-publish',
          '--no-commit-hooks',
          '--yes',
          '--no-push',
          '-m',
          isIndependent
            ? '"Bump independent versions [skip ci]"'
            : VERSION_COMMIT_MESSAGE,
          this.exact && '--exact',
          ...verboseArgs
        ]);
        auto.logger.verbose.info('Successfully versioned repo');
        return;
      }

      const latestBump = isBaseBranch
        ? await bumpLatest(await loadPackageJson(), version)
        : version;

      await execPromise('npm', [
        'version',
        latestBump || version,
        '-m',
        VERSION_COMMIT_MESSAGE,
        ...verboseArgs
      ]);
      auto.logger.verbose.info('Successfully versioned repo');
    });

    auto.hooks.canary.tapPromise(this.name, async (bump, postFix) => {
      if (this.setRcToken) {
        await setTokenOnCI(auto.logger);
        auto.logger.verbose.info('Set CI NPM_TOKEN');
      }

      const lastRelease = await auto.git!.getLatestRelease();
      const latestTag = (await auto.git?.getLatestTagInBranch()) || lastRelease;
      const inPrerelease = prereleaseBranches.some(b =>
        latestTag.includes(`-${b}.`)
      );

      if (isMonorepo()) {
        const isIndependent = getLernaJson().version === 'independent';
        auto.logger.verbose.info('Detected monorepo, using lerna');

        const packagesBefore = await getLernaPackages();
        const preid = `canary${postFix}`;
        const next =
          (isIndependent && `pre${bump}`) ||
          determineNextVersion(
            lastRelease,
            inPrerelease ? latestTag : packagesBefore[0].version,
            bump,
            preid
          );

        if (this.canaryScope) {
          await setCanaryScope(
            this.canaryScope,
            packagesBefore.map(p => p.path)
          );
        }

        await execPromise('npx', [
          'lerna',
          'publish',
          next,
          '--dist-tag',
          'canary',
          '--force-publish', // you always want a canary version to publish
          '--yes', // skip prompts,
          '--no-git-reset', // so we can get the version that just published
          '--no-git-tag-version', // no need to tag and commit,
          '--exact', // do not add ^ to canary versions, this can result in `npm i` resolving the wrong canary version
          ...(isIndependent ? ['--preid', preid] : []),
          ...verboseArgs
        ]);

        auto.logger.verbose.info('Successfully published canary version');
        const packages = await getLernaPackages();
        const packageList = await getPackageList();
        // Reset after we read the packages from the system!
        await gitReset();

        if (isIndependent) {
          if (!packageList.some(p => p.includes('canary'))) {
            return { error: 'No packages were changed. No canary published.' };
          }

          return {
            newVersion: 'Canary Versions',
            details: makeMonorepoInstallList(packageList)
          };
        }

        const versioned = packages.find(p => p.version.includes('canary'));

        if (!versioned) {
          return { error: 'No packages were changed. No canary published.' };
        }

        const version = versioned.version.split('+')[0];

        return {
          newVersion: this.canaryScope
            ? `under canary scope @${sanitizeScope(
                this.canaryScope
              )}@${version}`
            : version,
          details: makeMonorepoInstallList(packageList)
        };
      }

      auto.logger.verbose.info('Detected single npm package');
      const current = await auto.getCurrentVersion(lastRelease);
      const canaryVersion = determineNextVersion(
        lastRelease,
        current,
        bump,
        `canary${postFix}`
      );

      if (this.canaryScope) {
        await setCanaryScope(this.canaryScope, ['./']);
      }

      await execPromise('npm', [
        'version',
        canaryVersion,
        '--no-git-tag-version',
        ...verboseArgs
      ]);

      const publishArgs = ['--tag', 'canary'];
      await execPromise('npm', ['publish', ...publishArgs, ...verboseArgs]);

      if (this.canaryScope) {
        await gitReset();
      }

      const { name } = await loadPackageJson();
      auto.logger.verbose.info('Successfully published canary version');

      return {
        newVersion: canaryVersion,
        details: makeMonorepoInstallList([`${name}@${canaryVersion}`])
      };
    });

    auto.hooks.next.tapPromise(this.name, async (preReleaseVersions, bump) => {
      if (this.setRcToken) {
        await setTokenOnCI(auto.logger);
        auto.logger.verbose.info('Set CI NPM_TOKEN');
      }

      const lastRelease = await auto.git!.getLatestRelease();
      const latestTag =
        (await auto.git?.getLastTagNotInBaseBranch(prereleaseBranch)) ||
        (await getPreviousVersion(auto, prereleaseBranch));

      if (isMonorepo()) {
        auto.logger.verbose.info('Detected monorepo, using lerna');
        const isIndependent = getLernaJson().version === 'independent';
        // It's hard to accurately predict how we should bump independent versions.
        // So we just prerelease most of the time. (independent only)
        const next = isIndependent
          ? 'prerelease'
          : determineNextVersion(
              lastRelease,
              latestTag,
              bump,
              prereleaseBranch
            );

        auto.logger.verbose.info({
          lastRelease,
          latestTag,
          bump,
          prereleaseBranch,
          next
        });

        await execPromise('npx', [
          'lerna',
          'publish',
          next,
          '--dist-tag',
          prereleaseBranch,
          '--preid',
          prereleaseBranch,
          '--no-push',
          // you always want a next version to publish
          '--force-publish',
          // skip prompts
          '--yes',
          // do not add ^ to next versions, this can result in `npm i` resolving the wrong next version
          '--exact',
          ...verboseArgs
        ]);

        // we do not want to commit the next version. this causes
        // merge conflicts when merged into master. We also do not want
        // to re-implement the magic lerna does. So instead we let lerna
        // commit+tag the new version and roll back all the tags to the
        // previous commit.
        const tags = (
          await execPromise('git', ['tag', '--points-at', 'HEAD'])
        ).split('\n');
        await Promise.all(
          // Move tags back one commit
          tags.map(tag => execPromise('git', ['tag', tag, '-f', 'HEAD^']))
        );
        // Move branch back one commit
        await execPromise('git', ['reset', '--hard', 'HEAD~1']);

        auto.logger.verbose.info('Successfully published next version');

        preReleaseVersions = [
          ...preReleaseVersions,
          ...tags.map(auto.prefixRelease)
        ];
      } else {
        auto.logger.verbose.info('Detected single npm package');

        await execPromise('npm', [
          'version',
          determineNextVersion(lastRelease, latestTag, bump, prereleaseBranch),
          // we do not want to commit the next version. this causes
          // merge conflicts when merged into master
          '--no-git-tag-version',
          ...verboseArgs
        ]);

        const { version } = await loadPackageJson();
        await execPromise('git', ['tag', auto.prefixRelease(version!)]);

        await execPromise('npm', [
          'publish',
          '--tag',
          prereleaseBranch,
          ...verboseArgs
        ]);

        auto.logger.verbose.info('Successfully published next version');
        preReleaseVersions.push(auto.prefixRelease(version!));
      }

      await execPromise('git', ['push', '--tags']);
      return preReleaseVersions;
    });

    auto.hooks.publish.tapPromise(this.name, async () => {
      const status = await execPromise('git', ['status', '--porcelain']);
      const isBaseBranch = branch === auto.baseBranch;
      // The only other time this hook is called is when creating a version
      // branch. So when on one of those branches publish to a tag of the same
      // name
      const tag = isBaseBranch
        ? []
        : [isMonorepo() ? '--dist-tag' : '--tag', branch];

      if (isVerbose && status) {
        auto.logger.log.error('Changed Files:\n', status);
      }

      if (this.setRcToken) {
        await setTokenOnCI(auto.logger);
        auto.logger.verbose.info('Set CI NPM_TOKEN');
      }

      if (isMonorepo()) {
        auto.logger.verbose.info('Detected monorepo, using lerna');

        if (auto.options?.verbose) {
          await execPromise('git', ['status', '--short']);
        }

        await execPromise('npx', [
          'lerna',
          'publish',
          ...tag,
          '--yes',
          // Plugins can add as many commits as they want, lerna will still
          // publish the changed package versions. from-git broke when HEAD
          // didn't contain the tags
          'from-package',
          ...verboseArgs
        ]);
      } else {
        await execPromise('npm', ['publish', ...tag, ...verboseArgs]);
      }

      await execPromise('git', [
        'push',
        '--follow-tags',
        '--set-upstream',
        'origin',
        branch || auto.baseBranch
      ]);
      auto.logger.verbose.info('Successfully published repo');
    });

    auto.hooks.makeRelease.tapPromise(this.name, async options => {
      const isIndependent = getLernaJson().version === 'independent';

      // Independent mode will create multiple releases on Github.
      // Each release will only contain the release notes for the
      // package + global changes.
      if (!options.dryRun && isIndependent) {
        auto.logger.log.info(`Releasing ${options.newVersion} to GitHub.`);

        const changelog = await auto.release!.makeChangelog();
        const lernaPackages = await getLernaPackages();
        // Go through each new tag:
        const newTags = (
          await execPromise('git', ['tag', '--points-at', 'HEAD'])
        ).split('\n');

        this.renderMonorepoChangelog = false;

        const packagePaths = lernaPackages.map(p => p.path);
        const commitsAtRoot = options.commits.filter(
          commit =>
            !commit.files.some(file =>
              packagePaths.some(p => inFolder(p, file))
            )
        );

        const releases = await Promise.all(
          newTags.map(async tag => {
            const lernaPackage = lernaPackages.find(p => tag.includes(p.name));

            if (!lernaPackage) {
              return;
            }

            auto.logger.log.info(`Releasing ${tag}...`);

            // 1. generate release notes for just the commits for the package
            const includedCommits = options.commits.filter(commit =>
              commit.files.some(file => inFolder(lernaPackage.path, file))
            );
            const releaseNotes = await changelog.generateReleaseNotes([
              ...commitsAtRoot,
              ...includedCommits
            ]);

            auto.logger.log.info(`Using release notes:\n${releaseNotes}`);

            // 2. make a release for just that package
            if (releaseNotes.trim()) {
              return auto.git?.publish(releaseNotes, tag, options.isPrerelease);
            }
          })
        );

        this.renderMonorepoChangelog = false;

        return releases.filter((release): release is Response<
          ReposCreateReleaseResponse
        > => Boolean(release));
      }
    });
  }
}
