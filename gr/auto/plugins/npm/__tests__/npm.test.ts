import * as Auto from '@auto-it/core';
import { dummyLog } from '@auto-it/core/dist/utils/logger';
import { makeHooks } from '@auto-it/core/dist/utils/make-hooks';
import NPMPlugin, {
  changedPackages,
  getMonorepoPackage,
  greaterRelease
} from '../src';
import { IExtendedCommit } from '@auto-it/core/dist/log-parse';

const exec = jest.fn();
const getLernaPackages = jest.fn();
const monorepoPackages = jest.fn();
const existsSync = jest.fn();
const readFileSync = jest.fn();
const writeSpy = jest.fn();

jest.spyOn(Auto, 'getCurrentBranch').mockReturnValue('master');

let readResult = '{}';
readFileSync.mockReturnValue('{}');

// @ts-ignore
jest.spyOn(Auto, 'execPromise').mockImplementation(exec);
jest.spyOn(Auto, 'getLernaPackages').mockImplementation(getLernaPackages);
jest.mock('env-ci', () => () => ({ isCi: false }));
jest.mock('get-monorepo-packages', () => () => monorepoPackages());
jest.mock('fs', () => ({
  // @ts-ignore
  existsSync: (...args) => existsSync(...args),
  // @ts-ignore
  readFile: (a, b, cb) => {
    cb(undefined, readResult);
  },
  // @ts-ignore
  readFileSync: (...args) => readFileSync(...args),
  ReadStream: function() {},
  WriteStream: function() {},
  // @ts-ignore
  closeSync: () => undefined,
  // @ts-ignore
  writeFile: (file, data, cb) => {
    cb(undefined, writeSpy(file, data));
  }
}));

const monorepoPackagesResult = [
  { path: 'packages/a', name: '@packages/a', package: { version: '0.1.1' } },
  { path: 'packages/b', name: '@packages/b', package: {} },
  { path: 'packages/c', name: '@packages/c', package: { version: '0.1.2' } },
  { path: 'packages/d', name: '@packages/d', package: { version: '0.1.1' } }
];

describe('changedPackages ', () => {
  test('should return nothing without a package directory', async () => {
    exec.mockReturnValueOnce(`packages/README.md\npackage.json`);

    expect(
      await changedPackages({
        sha: 'sha',
        packages: [],
        lernaJson: {},
        logger: dummyLog()
      })
    ).toStrictEqual([]);
  });

  test('should match files in package directory', async () => {
    exec.mockReturnValueOnce(
      `packages/foo/README.md\npackages/bar/package.json`
    );

    expect(
      await changedPackages({
        sha: 'sha',
        packages: [
          {
            name: 'foo',
            path: 'packages/foo',
            version: '1.0.0'
          },
          {
            name: 'bar',
            path: 'packages/bar',
            version: '1.0.0'
          }
        ],
        lernaJson: {},
        logger: dummyLog()
      })
    ).toStrictEqual(['foo', 'bar']);
  });

  test('should match files in package directory with @scope/ names', async () => {
    exec.mockReturnValueOnce(
      `packages/@scope/foo/README.md\npackages/@scope/bar/package.json`
    );

    expect(
      await changedPackages({
        sha: 'sha',
        packages: [
          {
            name: '@scope/foo',
            path: 'packages/@scope/foo',
            version: '1.0.0'
          },
          {
            name: '@scope/bar',
            path: 'packages/@scope/bar',
            version: '1.0.0'
          }
        ],
        lernaJson: {},
        logger: dummyLog()
      })
    ).toStrictEqual(['@scope/foo', '@scope/bar']);
  });
});

describe('getMonorepoPackage', () => {
  test('should default to 0.0.0', () => {
    monorepoPackages.mockReturnValueOnce([]);
    expect(getMonorepoPackage()).toStrictEqual({});
  });

  test('should find greatest package version', () => {
    monorepoPackages.mockReturnValueOnce(monorepoPackagesResult);
    expect(getMonorepoPackage()).toStrictEqual({ version: '0.1.2' });
  });
});

const prefixRelease = (str: string) => str;

describe('greaterRelease', () => {
  test('should default to packageVersion if not published', async () => {
    exec.mockImplementationOnce(() => {
      throw new Error('could not find name');
    });
    expect(
      await greaterRelease(prefixRelease, 'test-package-name', '1.0.0')
    ).toBe('1.0.0');
  });
  test('should default to packageVersion if greatest', async () => {
    exec.mockReturnValueOnce('0.5.0');
    expect(
      await greaterRelease(prefixRelease, 'test-package-name', '1.0.0')
    ).toBe('1.0.0');
  });
  test('should default to publishedVersion if greatest', async () => {
    exec.mockReturnValueOnce('1.0.1');
    expect(
      await greaterRelease(prefixRelease, 'test-package-name', '1.0.0')
    ).toBe('1.0.1');
  });
});

describe('getAuthor', () => {
  test('should do nothing if no author', async () => {
    const plugin = new NPMPlugin();
    const hooks = makeHooks();

    plugin.apply({
      config: { prereleaseBranches: ['next'] },
      hooks,
      baseBranch: 'master',
      logger: dummyLog()
    } as Auto.Auto);

    readResult = `
      {
        "name": "test"
      }
    `;
    expect(await hooks.getAuthor.promise()).toBeUndefined();
  });

  test('should get author object from package.json', async () => {
    const plugin = new NPMPlugin();
    const hooks = makeHooks();

    plugin.apply({
      config: { prereleaseBranches: ['next'] },
      hooks,
      baseBranch: 'master',
      logger: dummyLog()
    } as Auto.Auto);

    readResult = `
      {
        "name": "test",
        "author": {
          "name": "Adam",
          "email": "adam@email.com"
        }
      }
    `;
    expect(await hooks.getAuthor.promise()).toStrictEqual({
      name: 'Adam',
      email: 'adam@email.com'
    });
  });

  test('should get parse author as string', async () => {
    const plugin = new NPMPlugin();
    const hooks = makeHooks();

    plugin.apply({
      config: { prereleaseBranches: ['next'] },
      hooks,
      baseBranch: 'master',
      logger: dummyLog()
    } as Auto.Auto);

    readResult = `
      {
        "name": "test",
        "author": "Adam<adam@email.com>"
      }
    `;
    expect(await hooks.getAuthor.promise()).toStrictEqual({
      name: 'Adam',
      email: 'adam@email.com'
    });
  });
});

describe('getRepository', () => {
  test('should get package config', async () => {
    const plugin = new NPMPlugin();
    const hooks = makeHooks();

    plugin.apply({
      config: { prereleaseBranches: ['next'] },
      hooks,
      baseBranch: 'master',
      logger: dummyLog()
    } as Auto.Auto);

    readResult = `
      {
        "name": "test",
        "repository": "black-panther/operation-foo",
        "author": {
          "name": "Adam",
          "email": "adam@email.com"
        }
      }
    `;
    expect(await hooks.getRepository.promise()).toStrictEqual({
      owner: 'black-panther',
      repo: 'operation-foo'
    });
  });
});

describe('getPreviousVersion', () => {
  test('should get use 0 if not version in package.json', async () => {
    const plugin = new NPMPlugin();
    const hooks = makeHooks();

    existsSync.mockReturnValueOnce(false);
    existsSync.mockReturnValueOnce(true);
    plugin.apply({
      config: { prereleaseBranches: ['next'] },
      hooks,
      baseBranch: 'master',
      logger: dummyLog(),
      prefixRelease: str => str
    } as Auto.Auto);

    readResult = `
      {
        "name": "test"
      }
    `;
    expect(await hooks.getPreviousVersion.promise()).toBe('0.0.0');
  });

  test('should get version from the package.json', async () => {
    const plugin = new NPMPlugin();
    const hooks = makeHooks();

    existsSync.mockReturnValueOnce(false);
    existsSync.mockReturnValueOnce(true);
    plugin.apply({
      config: { prereleaseBranches: ['next'] },
      hooks,
      baseBranch: 'master',
      logger: dummyLog(),
      prefixRelease: str => str
    } as Auto.Auto);

    readResult = `
      {
        "name": "test",
        "version": "1.0.0"
      }
    `;
    expect(await hooks.getPreviousVersion.promise()).toBe('1.0.0');
  });

  test('should get version from the lerna.json', async () => {
    const plugin = new NPMPlugin();
    const hooks = makeHooks();

    existsSync.mockReturnValueOnce(true);
    monorepoPackages.mockReturnValueOnce([]);
    plugin.apply({
      config: { prereleaseBranches: ['next'] },
      hooks,
      baseBranch: 'master',
      logger: dummyLog(),
      prefixRelease: str => str
    } as Auto.Auto);

    readFileSync.mockReturnValueOnce(`
      {
        "name": "test",
        "version": "2.0.0"
      }
    `);
    expect(await hooks.getPreviousVersion.promise()).toBe('2.0.0');
  });

  test('should get version greatest published monorepo package', async () => {
    const plugin = new NPMPlugin();
    const hooks = makeHooks();

    // isMonorepo
    existsSync.mockReturnValueOnce(true);
    monorepoPackages.mockReturnValueOnce(monorepoPackagesResult);
    readFileSync.mockReturnValueOnce(`
      {
        "name": "test",
        "version": "0.0.1"
      }
    `);
    // published version of test package
    exec.mockReturnValueOnce('0.1.2');

    plugin.apply({
      config: { prereleaseBranches: ['next'] },
      hooks,
      baseBranch: 'master',
      logger: dummyLog(),
      prefixRelease: str => str
    } as Auto.Auto);

    expect(await hooks.getPreviousVersion.promise()).toBe('0.1.2');
  });
});

test('should use string semver if no published package', async () => {
  const plugin = new NPMPlugin({ setRcToken: false });

  expect(plugin).toStrictEqual(
    expect.objectContaining({
      forcePublish: true,
      name: 'NPM',
      setRcToken: false
    })
  );
});

describe('publish', () => {
  beforeEach(() => {
    exec.mockClear();
  });

  test('should use silly logging in verbose mode', async () => {
    const plugin = new NPMPlugin();
    const hooks = makeHooks();
    const logger = dummyLog();
    logger.logLevel = 'veryVerbose';

    plugin.apply({
      config: { prereleaseBranches: ['next'] },
      hooks,
      baseBranch: 'master',
      logger
    } as Auto.Auto);

    readResult = `
      {
        "name": "test"
      }
    `;

    await hooks.version.promise(Auto.SEMVER.patch);
    expect(exec).toHaveBeenCalledWith('npm', [
      'version',
      Auto.SEMVER.patch,
      '-m',
      '"Bump version to: %s [skip ci]"',
      '--loglevel',
      'silly'
    ]);
  });

  test('should use string semver if no published package', async () => {
    const plugin = new NPMPlugin();
    const hooks = makeHooks();

    plugin.apply({
      config: { prereleaseBranches: ['next'] },
      hooks,
      baseBranch: 'master',
      logger: dummyLog()
    } as Auto.Auto);

    readResult = `
      {
        "name": "test"
      }
    `;

    await hooks.version.promise(Auto.SEMVER.patch);
    expect(exec).toHaveBeenCalledWith('npm', [
      'version',
      Auto.SEMVER.patch,
      '-m',
      '"Bump version to: %s [skip ci]"'
    ]);
  });

  test('monorepo - should use start version at 0 if no published package', async () => {
    const plugin = new NPMPlugin();
    const hooks = makeHooks();

    plugin.apply({
      config: { prereleaseBranches: ['next'] },
      hooks,
      baseBranch: 'master',
      logger: dummyLog()
    } as Auto.Auto);

    existsSync.mockReturnValueOnce(true);
    monorepoPackages.mockReturnValueOnce([]);

    readResult = `
      {
        "name": "test"
      }
    `;

    await hooks.version.promise(Auto.SEMVER.patch);
    expect(exec).toHaveBeenCalledWith('npx', [
      'lerna',
      'version',
      'patch',
      '--force-publish',
      '--no-commit-hooks',
      '--yes',
      '--no-push',
      '-m',
      '"Bump version to: %s [skip ci]"',
      false
    ]);
  });

  test('monorepo - should be able to not force publish all packages', async () => {
    const plugin = new NPMPlugin({ forcePublish: false });
    const hooks = makeHooks();

    plugin.apply({
      config: { prereleaseBranches: ['next'] },
      hooks,
      baseBranch: 'master',
      logger: dummyLog()
    } as Auto.Auto);

    existsSync.mockReturnValueOnce(true);
    monorepoPackages.mockReturnValueOnce([]);

    readResult = `
      {
        "name": "test"
      }
    `;

    await hooks.version.promise(Auto.SEMVER.patch);
    expect(exec).toHaveBeenCalledWith('npx', [
      'lerna',
      'version',
      'patch',
      false,
      '--no-commit-hooks',
      '--yes',
      '--no-push',
      '-m',
      '"Bump version to: %s [skip ci]"',
      false
    ]);
  });

  test('monorepo - should be able to publish exact packages', async () => {
    const plugin = new NPMPlugin({ exact: true });
    const hooks = makeHooks();

    plugin.apply({
      config: { prereleaseBranches: ['next'] },
      hooks,
      baseBranch: 'master',
      logger: dummyLog()
    } as Auto.Auto);

    existsSync.mockReturnValueOnce(true);
    monorepoPackages.mockReturnValueOnce([]);

    readResult = `
      {
        "name": "test"
      }
    `;

    await hooks.version.promise(Auto.SEMVER.patch);
    expect(exec).toHaveBeenCalledWith('npx', [
      'lerna',
      'version',
      'patch',
      '--force-publish',
      '--no-commit-hooks',
      '--yes',
      '--no-push',
      '-m',
      '"Bump version to: %s [skip ci]"',
      '--exact'
    ]);
  });

  test('monorepo - should publish', async () => {
    const plugin = new NPMPlugin();
    const hooks = makeHooks();

    plugin.apply({
      config: { prereleaseBranches: ['next'] },
      hooks,
      baseBranch: 'master',
      logger: dummyLog()
    } as Auto.Auto);

    existsSync.mockReturnValueOnce(true);

    await hooks.publish.promise(Auto.SEMVER.patch);
    expect(exec).toHaveBeenCalledWith('npx', [
      'lerna',
      'publish',
      '--yes',
      'from-package'
    ]);
  });

  test('should bump published version', async () => {
    const plugin = new NPMPlugin();
    const hooks = makeHooks();

    plugin.apply({
      config: { prereleaseBranches: ['next'] },
      hooks,
      baseBranch: 'master',
      logger: dummyLog()
    } as Auto.Auto);

    exec.mockReturnValueOnce('1.0.0');

    readResult = `
      {
        "name": "test",
        "version": "0.0.0"
      }
    `;

    await hooks.version.promise(Auto.SEMVER.patch);
    expect(exec).toHaveBeenCalledWith('npm', [
      'version',
      '1.0.1',
      '-m',
      '"Bump version to: %s [skip ci]"'
    ]);
  });

  test('monorepo - should bump published version', async () => {
    const plugin = new NPMPlugin();
    const hooks = makeHooks();

    plugin.apply({
      config: { prereleaseBranches: ['next'] },
      hooks,
      baseBranch: 'master',
      logger: dummyLog()
    } as Auto.Auto);

    existsSync.mockReturnValueOnce(true);
    monorepoPackages.mockReturnValueOnce(monorepoPackagesResult);
    exec.mockReturnValueOnce('1.0.0');

    readResult = `
      {
        "name": "test"
      }
    `;

    await hooks.version.promise(Auto.SEMVER.patch);
    expect(exec).toHaveBeenNthCalledWith(2, 'npx', [
      'lerna',
      'version',
      '1.0.1',
      '--force-publish',
      '--no-commit-hooks',
      '--yes',
      '--no-push',
      '-m',
      '"Bump version to: %s [skip ci]"',
      false
    ]);
  });

  test('should publish private scoped packages to private', async () => {
    const plugin = new NPMPlugin();
    const hooks = makeHooks();

    plugin.apply({
      config: { prereleaseBranches: ['next'] },
      hooks,
      baseBranch: 'master',
      logger: dummyLog()
    } as Auto.Auto);

    readResult = `
      {
        "name": "@scope/test",
        "private": true
      }
    `;

    await hooks.publish.promise(Auto.SEMVER.patch);
    expect(exec).toHaveBeenCalledWith('npm', ['publish']);
  });
});

describe('canary', () => {
  beforeEach(() => {
    exec.mockClear();
  });

  test('use npm for normal package', async () => {
    const plugin = new NPMPlugin();
    const hooks = makeHooks();

    plugin.apply(({
      config: { prereleaseBranches: ['next'] },
      hooks,
      baseBranch: 'master',
      logger: dummyLog(),
      getCurrentVersion: () => '1.2.3',
      git: {
        getLatestRelease: () => '1.2.3',
        getLatestTagInBranch: () => '1.2.3'
      }
    } as unknown) as Auto.Auto);

    readResult = `
      {
        "name": "test"
      }
    `;

    await hooks.canary.promise(Auto.SEMVER.patch, '.123.1');
    expect(exec.mock.calls[0]).toContain('npm');
    expect(exec.mock.calls[0][1]).toContain('1.2.4-canary.123.1.0');
  });

  test('use lerna for monorepo package', async () => {
    const plugin = new NPMPlugin();
    const hooks = makeHooks();

    plugin.apply({
      config: { prereleaseBranches: ['next'] },
      hooks,
      baseBranch: 'master',
      logger: dummyLog(),
      git: {
        getLatestRelease: () => Promise.resolve('1.2.3'),
        getLatestTagInBranch: () => '1.2.3'
      }
    } as any);
    existsSync.mockReturnValueOnce(true);

    readResult = `
      {
        "name": "test"
      }
    `;

    getLernaPackages.mockImplementation(async () =>
      Promise.resolve([
        {
          path: 'path/to/package',
          name: '@foobar/app',
          version: '1.2.3-canary.0+abcd'
        },
        {
          path: 'path/to/package',
          name: '@foobar/lib',
          version: '1.2.3-canary.0+abcd'
        }
      ])
    );

    const value = await hooks.canary.promise(Auto.SEMVER.patch, '');
    expect(exec.mock.calls[0][1]).toContain('lerna');
    // @ts-ignore
    expect(value.newVersion).toBe('1.2.3-canary.0');
  });

  test('error when no canary release found', async () => {
    const plugin = new NPMPlugin();
    const hooks = makeHooks();

    plugin.apply({
      config: { prereleaseBranches: ['next'] },
      hooks,
      baseBranch: 'master',
      logger: dummyLog(),
      git: {
        getLatestRelease: () => Promise.resolve('1.2.3'),
        getLatestTagInBranch: () => '1.2.3'
      }
    } as any);
    existsSync.mockReturnValueOnce(true);

    readResult = `
      {
        "name": "test"
      }
    `;

    getLernaPackages.mockImplementation(async () =>
      Promise.resolve([
        {
          path: 'path/to/package',
          name: '@foobar/app',
          version: '1.2.3'
        },
        {
          path: 'path/to/package',
          name: '@foobar/lib',
          version: '1.2.3'
        }
      ])
    );

    const value = await hooks.canary.promise(Auto.SEMVER.patch, '');
    expect(value).toStrictEqual({
      error: 'No packages were changed. No canary published.'
    });
  });

  test("doesn't force publish in independent mode", async () => {
    const plugin = new NPMPlugin();
    const hooks = makeHooks();

    plugin.apply({
      config: { prereleaseBranches: ['next'] },
      hooks,
      baseBranch: 'master',
      logger: dummyLog()
    } as Auto.Auto);
    existsSync.mockReturnValueOnce(true);
    readFileSync.mockReturnValue('{ "version": "independent" }');

    readResult = `
      {
        "name": "test"
      }
    `;

    getLernaPackages.mockImplementation(async () =>
      Promise.resolve([
        {
          path: 'path/to/package',
          name: '@foobar/app',
          version: '1.2.4-canary.0'
        },
        {
          path: 'path/to/package',
          name: '@foobar/lib',
          version: '1.1.0-canary.0'
        }
      ])
    );

    await hooks.version.promise(Auto.SEMVER.patch);
    expect(exec).toHaveBeenNthCalledWith(1, 'npx', [
      'lerna',
      'version',
      'patch',
      false,
      '--no-commit-hooks',
      '--yes',
      '--no-push',
      '-m',
      '"Bump independent versions [skip ci]"',
      false
    ]);
  });

  test('error when no canary release found - independent', async () => {
    const plugin = new NPMPlugin();
    const hooks = makeHooks();

    plugin.apply({
      config: { prereleaseBranches: ['next'] },
      hooks,
      baseBranch: 'master',
      logger: dummyLog(),
      git: {
        getLatestRelease: () => Promise.resolve('@foo/lib:1.1.0'),
        getLatestTagInBranch: () => '1.2.3'
      }
    } as any);
    existsSync.mockReturnValueOnce(true);
    readFileSync.mockReturnValue('{ "version": "independent" }');

    readResult = `
      {
        "name": "test"
      }
    `;

    getLernaPackages.mockImplementation(async () =>
      Promise.resolve([
        {
          path: 'path/to/package',
          name: '@foobar/app',
          version: '1.2.4'
        },
        {
          path: 'path/to/package',
          name: '@foobar/lib',
          version: '1.1.0'
        }
      ])
    );

    const value = await hooks.canary.promise(Auto.SEMVER.patch, '');
    expect(value).toStrictEqual({
      error: 'No packages were changed. No canary published.'
    });
  });
});

describe('next', () => {
  beforeEach(() => {
    exec.mockClear();
  });

  test('works in single package', async () => {
    const plugin = new NPMPlugin();
    const hooks = makeHooks();

    plugin.apply(({
      config: { prereleaseBranches: ['next'] },
      hooks,
      baseBranch: 'master',
      logger: dummyLog(),
      getCurrentVersion: () => '1.2.3',
      prefixRelease: (v: string) => v,
      git: {
        getLatestRelease: () => '1.0.0',
        getLastTagNotInBaseBranch: () => '1.2.3'
      }
    } as unknown) as Auto.Auto);

    readResult = `
      {
        "name": "test",
        "version": "1.2.4-next.0"
      }
    `;

    expect(await hooks.next.promise([], Auto.SEMVER.patch)).toStrictEqual([
      '1.2.4-next.0'
    ]);

    expect(exec).toHaveBeenCalledWith('npm', [
      'version',
      '1.2.4-next.0',
      '--no-git-tag-version'
    ]);
    expect(exec).toHaveBeenCalledWith('git', ['tag', '1.2.4-next.0']);
    expect(exec).toHaveBeenCalledWith('git', ['push', '--tags']);
    expect(exec).toHaveBeenCalledWith('npm', ['publish', '--tag', 'next']);
  });

  test('works in monorepo', async () => {
    const plugin = new NPMPlugin();
    const hooks = makeHooks();

    // isMonorepo
    existsSync.mockReturnValueOnce(true);
    readFileSync.mockReturnValue('{ "version": "1.2.3" }');
    exec.mockReturnValueOnce('');
    exec.mockReturnValueOnce('1.2.4-next.0');

    plugin.apply(({
      config: { prereleaseBranches: ['next'] },
      hooks,
      baseBranch: 'master',
      logger: dummyLog(),
      getCurrentVersion: () => '1.2.3',
      prefixRelease: (v: string) => v,
      git: {
        getLatestRelease: () => '1.0.0',
        getLastTagNotInBaseBranch: () => '1.2.3'
      }
    } as unknown) as Auto.Auto);

    expect(await hooks.next.promise([], Auto.SEMVER.patch)).toStrictEqual([
      '1.2.4-next.0'
    ]);

    expect(exec).toHaveBeenCalledWith(
      'npx',
      expect.arrayContaining(['lerna', 'publish', '1.2.4-next.0'])
    );
    expect(exec).toHaveBeenCalledWith('git', ['push', '--tags']);
  });

  test('works in monorepo - independent', async () => {
    const plugin = new NPMPlugin();
    const hooks = makeHooks();

    // isMonorepo
    existsSync.mockReturnValueOnce(true);
    readFileSync.mockReturnValue('{ "version": "independent" }');
    exec.mockReturnValueOnce('');
    exec.mockReturnValueOnce('@foo/1@1.0.0-next.0\n@foo/2@2.0.0-next.0');

    plugin.apply(({
      config: { prereleaseBranches: ['next'] },
      hooks,
      baseBranch: 'master',
      logger: dummyLog(),
      prefixRelease: (v: string) => v,
      git: {
        getLatestRelease: () => '@foo/1@0.1.0',
        getLastTagNotInBaseBranch: () => '@foo/1@1.0.0-next.0'
      }
    } as unknown) as Auto.Auto);

    expect(await hooks.next.promise([], Auto.SEMVER.patch)).toStrictEqual([
      '@foo/1@1.0.0-next.0',
      '@foo/2@2.0.0-next.0'
    ]);

    expect(exec).toHaveBeenCalledWith(
      'npx',
      expect.arrayContaining(['lerna', 'publish', 'prerelease'])
    );
    expect(exec).toHaveBeenCalledWith('git', ['push', '--tags']);
  });
});

describe('makeRelease', () => {
  test('publish release for each package', async () => {
    const plugin = new NPMPlugin();
    const hooks = makeHooks();

    // isMonorepo
    exec.mockReturnValue('@packages/a\n@packages/b');
    getLernaPackages.mockReturnValueOnce(monorepoPackagesResult);
    readFileSync.mockReturnValue(
      '{ "name": "test", "version": "independent" }'
    );

    const publish = jest.fn();
    plugin.apply({
      config: { prereleaseBranches: ['next'] },
      hooks,
      baseBranch: 'master',
      logger: dummyLog(),
      prefixRelease: str => str,
      git: { publish } as any,
      release: {
        makeChangelog: () => ({
          generateReleaseNotes: (commits: IExtendedCommit[]) =>
            Promise.resolve(commits.map(c => c.subject).join('\n'))
        })
      } as any
    } as Auto.Auto);

    await hooks.makeRelease.promise({
      newVersion: '0.1.2',
      from: '',
      isPrerelease: false,
      fullReleaseNotes: '',
      commits: [
        {
          subject: 'update package 1',
          hash: '123',
          labels: [],
          files: ['packages/a/package.json'],
          authors: [{ username: 'Jeff', hash: '123' }]
        },
        {
          subject: 'update package 2',
          hash: '124',
          labels: [],
          files: ['packages/b/package.json'],
          authors: [{ username: 'Andrew', hash: '124' }]
        }
      ]
    });

    expect(publish).toHaveBeenCalledWith(
      'update package 1',
      '@packages/a',
      false
    );
    expect(publish).toHaveBeenCalledWith(
      'update package 2',
      '@packages/b',
      false
    );
  });
});
