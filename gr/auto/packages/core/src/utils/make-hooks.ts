import {
  AsyncParallelHook,
  AsyncSeriesBailHook,
  AsyncSeriesWaterfallHook,
  SyncHook,
  SyncWaterfallHook,
  AsyncSeriesHook
} from 'tapable';
import { IAutoHooks } from '../auto';
import { IChangelogHooks } from '../changelog';
import { ILogParseHooks } from '../log-parse';
import { IReleaseHooks } from '../release';
import { InteractiveInitHooks } from '../init';

/** Make the hooks for "auto" */
export const makeHooks = (): IAutoHooks => ({
  beforeRun: new SyncHook(['config']),
  modifyConfig: new SyncWaterfallHook(['config']),
  beforeShipIt: new AsyncSeriesHook(['context']),
  afterAddToChangelog: new AsyncSeriesHook(['context']),
  beforeCommitChangelog: new AsyncSeriesHook(['context']),
  afterShipIt: new AsyncParallelHook(['version', 'commits', 'context']),
  makeRelease: new AsyncSeriesBailHook(['releaseInfo']),
  afterRelease: new AsyncParallelHook(['releaseInfo']),
  onCreateRelease: new SyncHook(['options']),
  onCreateChangelog: new SyncHook(['changelog', 'version']),
  onCreateLogParse: new SyncHook(['logParse']),
  getAuthor: new AsyncSeriesBailHook(),
  getPreviousVersion: new AsyncSeriesBailHook(),
  getRepository: new AsyncSeriesBailHook(),
  version: new AsyncParallelHook(['version']),
  afterVersion: new AsyncParallelHook(),
  publish: new AsyncParallelHook(['version']),
  afterPublish: new AsyncParallelHook(),
  canary: new AsyncSeriesBailHook(['canaryVersion', 'postFix']),
  next: new AsyncSeriesWaterfallHook(['preReleaseVersions', 'bump'])
});

/** Make the hooks for "Release" */
export const makeReleaseHooks = (): IReleaseHooks => ({
  onCreateChangelog: new SyncHook(['changelog', 'version']),
  createChangelogTitle: new AsyncSeriesBailHook([]),
  onCreateLogParse: new SyncHook(['logParse'])
});

/** Make the hooks for "LogParse" */
export const makeLogParseHooks = (): ILogParseHooks => ({
  parseCommit: new AsyncSeriesWaterfallHook(['commit']),
  omitCommit: new AsyncSeriesBailHook(['commit'])
});

/** Make the hooks for "InteractiveInit" */
export const makeInteractiveInitHooks = (): InteractiveInitHooks => ({
  writeRcFile: new AsyncSeriesBailHook(['rcFile']),
  getRepo: new AsyncSeriesBailHook([]),
  getAuthor: new AsyncSeriesBailHook([]),
  createEnv: new AsyncSeriesWaterfallHook(['vars']),
  configurePlugin: new AsyncSeriesBailHook(['pluginName'])
});

/** Make the hooks for "Changelog" */
export const makeChangelogHooks = (): IChangelogHooks => ({
  addToBody: new AsyncSeriesWaterfallHook(['notes', 'commits']),
  renderChangelogLine: new AsyncSeriesWaterfallHook(['lineData']),
  renderChangelogTitle: new AsyncSeriesBailHook(['commits', 'lineRender']),
  renderChangelogAuthor: new AsyncSeriesBailHook([
    'author',
    'commit',
    'options'
  ]),
  renderChangelogAuthorLine: new AsyncSeriesBailHook(['author', 'user']),
  omitReleaseNotes: new AsyncSeriesBailHook(['commit'])
});
