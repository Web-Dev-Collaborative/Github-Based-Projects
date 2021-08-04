import {
  Auto,
  IPlugin,
  execPromise,
  getLernaPackages,
  inFolder
} from '@auto-it/core';
import fs from 'fs';
import path from 'path';
import match from 'anymatch';
import { execSync } from 'child_process';
import { IExtendedCommit } from '@auto-it/core/src/log-parse';

const contributionTypes = [
  'blog',
  'bug',
  'business',
  'code',
  'content',
  'design',
  'doc',
  'eventOrganizing',
  'example',
  'financial',
  'fundingFinding',
  'ideas',
  'infra',
  'maintenance',
  'platform',
  'plugin',
  'projectManagement',
  'question',
  'review',
  'security',
  'talk',
  'test',
  'tool',
  'translation',
  'tutorial',
  'userTesting',
  'video;'
] as const;
type Contribution = typeof contributionTypes[number];

/** Get an rc file if there is one. */
function getRcFile() {
  try {
    const rcFile = path.join(process.cwd(), '.all-contributorsrc');
    const config: AllContributorsRc = JSON.parse(
      fs.readFileSync(rcFile, 'utf8')
    );

    return config;
  } catch (error) {}
}

type IAllContributorsPluginOptions = {
  /** Usernames to exclude from the contributors */
  exclude?: string[];
  /** Globs to detect change types by */
  types?: Partial<Record<Contribution, string | string[]>>;
};

interface Contributor {
  /** GitHub username */
  login: string;
  /** Types of contributions they've made */
  contributions: Contribution[];
}

interface AllContributorsRc {
  /** All of the current contributors */
  contributors: Contributor[];
}

const defaultOptions: IAllContributorsPluginOptions = {
  exclude: [
    'dependabot-preview[bot]',
    'greenkeeper[bot]',
    'dependabot[bot]',
    'fossabot',
    'renovate',
    'renovate-bot',
    'renovate[bot]',
    'renovate-approve'
  ],
  types: {
    doc: ['**/*.mdx', '**/*.md', '**/docs/**/*', '**/documentation/**/*'],
    example: ['**/*.stories*', '**/*.story.*'],
    infra: ['**/.circle/**/*', '**/.github/**/*', '**/travis.yml'],
    test: ['**/*.test.*', '**/test/**', '**/__tests__/**'],
    code: ['**/src/**/*', '**/lib/**/*', '**/package.json', '**/tsconfig.json']
  }
};

/** Automatically add contributors as changelogs are produced. */
export default class AllContributorsPlugin implements IPlugin {
  /** The name of the plugin */
  name = 'All Contributors';

  /** The options of the plugin */
  readonly options: Required<IAllContributorsPluginOptions>;

  /** Initialize the plugin with it's options */
  constructor(options: IAllContributorsPluginOptions = {}) {
    this.options = {
      exclude: [...(defaultOptions.exclude || []), ...(options.exclude || [])],
      types: { ...defaultOptions.types, ...options.types }
    };
  }

  /** Tap into auto plugin points. */
  apply(auto: Auto) {
    auto.hooks.afterAddToChangelog.tapPromise(
      this.name,
      async ({ commits }) => {
        await this.updateContributors(auto, commits);
        const rootDir = process.cwd();

        const lernaPackages = await getLernaPackages();

        // Cannot run git operations in parallel
        await lernaPackages.reduce(async (last, lernaPackage) => {
          await last;

          auto.logger.verbose.info(
            `Updating contributors for: ${lernaPackage.name}`
          );

          const includedCommits = commits.filter(commit =>
            commit.files.some(file => inFolder(lernaPackage.path, file))
          );

          if (includedCommits.length > 0) {
            auto.logger.verbose.success(
              `${lernaPackage.name} has ${includedCommits.length} new commits.`
            );
            auto.logger.veryVerbose.info(
              `With commits: ${JSON.stringify(includedCommits, null, 2)}`
            );

            process.chdir(lernaPackage.path);
            await this.updateContributors(auto, includedCommits);
          }
        }, Promise.resolve());

        process.chdir(rootDir);
        const changedFiles = await execPromise('git', [
          'status',
          '--porcelain'
        ]);

        if (changedFiles) {
          await execPromise('git', ['add', 'README.md']);
          await execPromise('git', ['add', '.all-contributorsrc']);
          await execPromise('git', ['add', '**/README.md']);
          await execPromise('git', ['add', '**/.all-contributorsrc']);
          await execPromise('git', [
            'commit',
            '--no-verify',
            '-m',
            '"Update contributors [skip ci]"'
          ]);
        }
      }
    );
  }

  /** Update the contributors rc for a package. */
  private async updateContributors(auto: Auto, commits: IExtendedCommit[]) {
    const config = getRcFile();

    if (!config) {
      return;
    }

    const authorContributions: Record<string, Set<Contribution>> = {};
    let didUpdate = false;

    const commitsWithAllChangedFiles = await Promise.all(
      commits.map(async commit => {
        const extra = await execPromise('git', [
          'show',
          '--pretty=""',
          '--name-only',
          '--first-parent',
          '-m',
          commit.hash
        ]);

        commit.files = [...new Set([...commit.files, ...extra.split('\n')])];

        return commit;
      })
    );

    // 1. Find all the authors and their contribution types
    commitsWithAllChangedFiles.forEach(commit => {
      const { authors } = commit;
      let { files } = commit;

      Object.keys(this.options.types || {})
        .filter((type): type is Contribution => {
          /** Determine if path is the contribution type */
          const isType = (file: string) =>
            match(this.options.types[type as Contribution] || [], file);
          const isMatch = files.some(isType);
          files = files.filter(file => !isType(file));

          return isMatch;
        })
        .forEach(contribution => {
          authors.forEach(({ username, hash }) => {
            if (!username) {
              return;
            }

            if (commit.hash !== hash) {
              return;
            }

            if (!authorContributions[username]) {
              authorContributions[username] = new Set();
            }

            authorContributions[username].add(contribution);
          });
        });
    });

    auto.logger.verbose.info('Found contributions:', authorContributions);

    // 2. Determine if contributor has update
    Object.entries(authorContributions).forEach(([username, contributions]) => {
      const { contributions: old = [] } =
        config.contributors.find(
          contributor => contributor.login === username
        ) || {};
      const hasNew = [...contributions].find(
        contribution => !old.includes(contribution)
      );

      if (hasNew && !this.options.exclude.includes(username)) {
        const newContributions = new Set([...old, ...contributions]);

        didUpdate = true;
        auto.logger.log.info(`Adding "${username}"'s contributions...`);

        execSync(
          `npx all-contributors-cli add ${username} ${[
            ...newContributions
          ].join(',')}`,
          { stdio: 'inherit' }
        );
      } else {
        auto.logger.verbose.warn(`"${username}" had no new contributions...`);
      }
    });

    if (didUpdate) {
      auto.logger.log.success('Updated contributors!');
    }
  }
}
