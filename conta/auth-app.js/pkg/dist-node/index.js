"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

function _interopDefault(ex) {
  return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}

var universalUserAgent = require("universal-user-agent");
var request = require("@octokit/request");
var authOauthApp = require("@octokit/auth-oauth-app");
var deprecation = require("deprecation");
var universalGithubAppJwt = require("universal-github-app-jwt");
var LRU = _interopDefault(require("lru-cache"));
var authOauthUser = require("@octokit/auth-oauth-user");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

async function getAppAuthentication({ appId, privateKey, timeDifference }) {
  try {
    const appAuthentication = await universalGithubAppJwt.githubAppJwt({
      id: +appId,
      privateKey,
      now: timeDifference && Math.floor(Date.now() / 1000) + timeDifference,
    });
    return {
      type: "app",
      token: appAuthentication.token,
      appId: appAuthentication.appId,
      expiresAt: new Date(appAuthentication.expiration * 1000).toISOString(),
    };
  } catch (error) {
    if (privateKey === "-----BEGIN RSA PRIVATE KEY-----") {
      throw new Error(
        "The 'privateKey` option contains only the first line '-----BEGIN RSA PRIVATE KEY-----'. If you are setting it using a `.env` file, make sure it is set on a single line with newlines replaced by '\n'"
      );
    } else {
      throw error;
    }
  }
}

// https://github.com/isaacs/node-lru-cache#readme
function getCache() {
  return new LRU({
    // cache max. 15000 tokens, that will use less than 10mb memory
    max: 15000,
    // Cache for 1 minute less than GitHub expiry
    maxAge: 1000 * 60 * 59,
  });
}
async function get(cache, options) {
  const cacheKey = optionsToCacheKey(options);
  const result = await cache.get(cacheKey);

  if (!result) {
    return;
  }

  const [
    token,
    createdAt,
    expiresAt,
    repositorySelection,
    permissionsString,
    singleFileName,
  ] = result.split("|");
  const permissions =
    options.permissions ||
    permissionsString.split(/,/).reduce((permissions, string) => {
      if (/!$/.test(string)) {
        permissions[string.slice(0, -1)] = "write";
      } else {
        permissions[string] = "read";
      }

      return permissions;
    }, {});
  return {
    token,
    createdAt,
    expiresAt,
    permissions,
    repositoryIds: options.repositoryIds,
    repositoryNames: options.repositoryNames,
    singleFileName,
    repositorySelection: repositorySelection,
  };
}
async function set(cache, options, data) {
  const key = optionsToCacheKey(options);
  const permissionsString = options.permissions
    ? ""
    : Object.keys(data.permissions)
        .map(
          (name) => `${name}${data.permissions[name] === "write" ? "!" : ""}`
        )
        .join(",");
  const value = [
    data.token,
    data.createdAt,
    data.expiresAt,
    data.repositorySelection,
    permissionsString,
    data.singleFileName,
  ].join("|");
  await cache.set(key, value);
}

function optionsToCacheKey({
  installationId,
  permissions = {},
  repositoryIds = [],
  repositoryNames = [],
}) {
  const permissionsString = Object.keys(permissions)
    .sort()
    .map((name) => (permissions[name] === "read" ? name : `${name}!`))
    .join(",");
  const repositoryIdsString = repositoryIds.sort().join(",");
  const repositoryNamesString = repositoryNames.join(",");
  return [
    installationId,
    repositoryIdsString,
    repositoryNamesString,
    permissionsString,
  ]
    .filter(Boolean)
    .join("|");
}

function toTokenAuthentication({
  installationId,
  token,
  createdAt,
  expiresAt,
  repositorySelection,
  permissions,
  repositoryIds,
  repositoryNames,
  singleFileName,
}) {
  return Object.assign(
    {
      type: "token",
      tokenType: "installation",
      token,
      installationId,
      permissions,
      createdAt,
      expiresAt,
      repositorySelection,
    },
    repositoryIds
      ? {
          repositoryIds,
        }
      : null,
    repositoryNames
      ? {
          repositoryNames,
        }
      : null,
    singleFileName
      ? {
          singleFileName,
        }
      : null
  );
}

const _excluded = ["type", "factory", "oauthApp"];
async function getInstallationAuthentication(state, options, customRequest) {
  const installationId = Number(options.installationId || state.installationId);

  if (!installationId) {
    throw new Error(
      "[@octokit/auth-app] installationId option is required for installation authentication."
    );
  }

  if (options.factory) {
    const _state$options = _objectSpread2(_objectSpread2({}, state), options),
      { type, factory, oauthApp } = _state$options,
      factoryAuthOptions = _objectWithoutProperties(_state$options, _excluded); // @ts-expect-error if `options.factory` is set, the return type for `auth()` should be `Promise<ReturnType<options.factory>>`

    return factory(factoryAuthOptions);
  }

  const optionsWithInstallationTokenFromState = Object.assign(
    {
      installationId,
    },
    options
  );

  if (!options.refresh) {
    const result = await get(
      state.cache,
      optionsWithInstallationTokenFromState
    );

    if (result) {
      const {
        token,
        createdAt,
        expiresAt,
        permissions,
        repositoryIds,
        repositoryNames,
        singleFileName,
        repositorySelection,
      } = result;
      return toTokenAuthentication({
        installationId,
        token,
        createdAt,
        expiresAt,
        permissions,
        repositorySelection,
        repositoryIds,
        repositoryNames,
        singleFileName,
      });
    }
  }

  const appAuthentication = await getAppAuthentication(state);
  const request = customRequest || state.request;
  const {
    data: {
      token,
      expires_at: expiresAt,
      repositories,
      permissions: permissionsOptional,
      repository_selection: repositorySelectionOptional,
      single_file: singleFileName,
    },
  } = await request("POST /app/installations/{installation_id}/access_tokens", {
    installation_id: installationId,
    repository_ids: options.repositoryIds,
    repositories: options.repositoryNames,
    permissions: options.permissions,
    mediaType: {
      previews: ["machine-man"],
    },
    headers: {
      authorization: `bearer ${appAuthentication.token}`,
    },
  });
  /* istanbul ignore next - permissions are optional per OpenAPI spec, but we think that is incorrect */

  const permissions = permissionsOptional || {};
  /* istanbul ignore next - repositorySelection are optional per OpenAPI spec, but we think that is incorrect */

  const repositorySelection = repositorySelectionOptional || "all";
  const repositoryIds = repositories ? repositories.map((r) => r.id) : void 0;
  const repositoryNames = repositories
    ? repositories.map((repo) => repo.name)
    : void 0;
  const createdAt = new Date().toISOString();
  await set(state.cache, optionsWithInstallationTokenFromState, {
    token,
    createdAt,
    expiresAt,
    repositorySelection,
    permissions,
    repositoryIds,
    repositoryNames,
    singleFileName,
  });
  return toTokenAuthentication({
    installationId,
    token,
    createdAt,
    expiresAt,
    repositorySelection,
    permissions,
    repositoryIds,
    repositoryNames,
    singleFileName,
  });
}

async function auth(state, authOptions) {
  switch (authOptions.type) {
    case "app":
      return getAppAuthentication(state);
    // @ts-expect-error "oauth" is not supperted in types

    case "oauth":
      state.log.warn(
        // @ts-expect-error `log.warn()` expects string
        new deprecation.Deprecation(
          `[@octokit/auth-app] {type: "oauth"} is deprecated. Use {type: "oauth-app"} instead`
        )
      );

    case "oauth-app":
      return state.oauthApp({
        type: "oauth-app",
      });

    case "installation":
      return getInstallationAuthentication(
        state,
        _objectSpread2(
          _objectSpread2({}, authOptions),
          {},
          {
            type: "installation",
          }
        )
      );

    case "oauth-user":
      // @ts-expect-error TODO: infer correct auth options type based on type. authOptions should be typed as "WebFlowAuthOptions | OAuthAppDeviceFlowAuthOptions | GitHubAppDeviceFlowAuthOptions"
      return state.oauthApp(authOptions);

    default:
      // @ts-expect-error type is "never" at this point
      throw new Error(`Invalid auth type: ${authOptions.type}`);
  }
}

const PATHS = [
  "/app",
  "/app/hook/config",
  "/app/hook/deliveries",
  "/app/hook/deliveries/{delivery_id}",
  "/app/hook/deliveries/{delivery_id}/attempts",
  "/app/installations",
  "/app/installations/{installation_id}",
  "/app/installations/{installation_id}/access_tokens",
  "/app/installations/{installation_id}/suspended",
  "/marketplace_listing/accounts/{account_id}",
  "/marketplace_listing/plan",
  "/marketplace_listing/plans",
  "/marketplace_listing/plans/{plan_id}/accounts",
  "/marketplace_listing/stubbed/accounts/{account_id}",
  "/marketplace_listing/stubbed/plan",
  "/marketplace_listing/stubbed/plans",
  "/marketplace_listing/stubbed/plans/{plan_id}/accounts",
  "/orgs/{org}/installation",
  "/repos/{owner}/{repo}/installation",
  "/users/{username}/installation",
]; // CREDIT: Simon Grondin (https://github.com/SGrondin)
// https://github.com/octokit/plugin-throttling.js/blob/45c5d7f13b8af448a9dbca468d9c9150a73b3948/lib/route-matcher.js

function routeMatcher(paths) {
  // EXAMPLE. For the following paths:

  /* [
      "/orgs/{org}/invitations",
      "/repos/{owner}/{repo}/collaborators/{username}"
  ] */
  const regexes = paths.map((p) =>
    p
      .split("/")
      .map((c) => (c.startsWith("{") ? "(?:.+?)" : c))
      .join("/")
  ); // 'regexes' would contain:

  /* [
      '/orgs/(?:.+?)/invitations',
      '/repos/(?:.+?)/(?:.+?)/collaborators/(?:.+?)'
  ] */

  const regex = `^(?:${regexes.map((r) => `(?:${r})`).join("|")})[^/]*$`; // 'regex' would contain:

  /*
    ^(?:(?:\/orgs\/(?:.+?)\/invitations)|(?:\/repos\/(?:.+?)\/(?:.+?)\/collaborators\/(?:.+?)))[^\/]*$
       It may look scary, but paste it into https://www.debuggex.com/
    and it will make a lot more sense!
  */

  return new RegExp(regex, "i");
}

const REGEX = routeMatcher(PATHS);
function requiresAppAuth(url) {
  return !!url && REGEX.test(url);
}

const FIVE_SECONDS_IN_MS = 5 * 1000;

function isNotTimeSkewError(error) {
  return !(
    error.message.match(
      /'Expiration time' claim \('exp'\) must be a numeric value representing the future time at which the assertion expires/
    ) ||
    error.message.match(
      /'Issued at' claim \('iat'\) must be an Integer representing the time that the assertion was issued/
    )
  );
}

async function hook(state, request, route, parameters) {
  const endpoint = request.endpoint.merge(route, parameters);
  const url = endpoint.url; // Do not intercept request to retrieve a new token

  if (/\/login\/oauth\/access_token$/.test(url)) {
    return request(endpoint);
  }

  if (requiresAppAuth(url.replace(request.endpoint.DEFAULTS.baseUrl, ""))) {
    const { token } = await getAppAuthentication(state);
    endpoint.headers.authorization = `bearer ${token}`;
    let response;

    try {
      response = await request(endpoint);
    } catch (error) {
      // If there's an issue with the expiration, regenerate the token and try again.
      // Otherwise rethrow the error for upstream handling.
      if (isNotTimeSkewError(error)) {
        throw error;
      } // If the date header is missing, we can't correct the system time skew.
      // Throw the error to be handled upstream.

      if (typeof error.response.headers.date === "undefined") {
        throw error;
      }

      const diff = Math.floor(
        (Date.parse(error.response.headers.date) -
          Date.parse(new Date().toString())) /
          1000
      );
      state.log.warn(error.message);
      state.log.warn(
        `[@octokit/auth-app] GitHub API time and system time are different by ${diff} seconds. Retrying request with the difference accounted for.`
      );
      const { token } = await getAppAuthentication(
        _objectSpread2(
          _objectSpread2({}, state),
          {},
          {
            timeDifference: diff,
          }
        )
      );
      endpoint.headers.authorization = `bearer ${token}`;
      return request(endpoint);
    }

    return response;
  }

  if (authOauthUser.requiresBasicAuth(url)) {
    const authentication = await state.oauthApp({
      type: "oauth-app",
    });
    endpoint.headers.authorization = authentication.headers.authorization;
    return request(endpoint);
  }

  const { token, createdAt } = await getInstallationAuthentication(
    state, // @ts-expect-error TBD
    {},
    request
  );
  endpoint.headers.authorization = `token ${token}`;
  return sendRequestWithRetries(state, request, endpoint, createdAt);
}
/**
 * Newly created tokens might not be accessible immediately after creation.
 * In case of a 401 response, we retry with an exponential delay until more
 * than five seconds pass since the creation of the token.
 *
 * @see https://github.com/octokit/auth-app.js/issues/65
 */

async function sendRequestWithRetries(
  state,
  request,
  options,
  createdAt,
  retries = 0
) {
  const timeSinceTokenCreationInMs = +new Date() - +new Date(createdAt);

  try {
    return await request(options);
  } catch (error) {
    if (error.status !== 401) {
      throw error;
    }

    if (timeSinceTokenCreationInMs >= FIVE_SECONDS_IN_MS) {
      if (retries > 0) {
        error.message = `After ${retries} retries within ${
          timeSinceTokenCreationInMs / 1000
        }s of creating the installation access token, the response remains 401. At this point, the cause may be an authentication problem or a system outage. Please check https://www.githubstatus.com for status information`;
      }

      throw error;
    }

    ++retries;
    const awaitTime = retries * 1000;
    state.log.warn(
      `[@octokit/auth-app] Retrying after 401 response to account for token replication delay (retry: ${retries}, wait: ${
        awaitTime / 1000
      }s)`
    );
    await new Promise((resolve) => setTimeout(resolve, awaitTime));
    return sendRequestWithRetries(state, request, options, createdAt, retries);
  }
}

const VERSION = "0.0.0-development";

function createAppAuth(options) {
  if (!options.appId) {
    throw new Error("[@octokit/auth-app] appId option is required");
  }

  if (!options.privateKey) {
    throw new Error("[@octokit/auth-app] privateKey option is required");
  }

  if ("installationId" in options && !options.installationId) {
    throw new Error(
      "[@octokit/auth-app] installationId is set to a falsy value"
    );
  }

  const log = Object.assign(
    {
      warn: console.warn.bind(console),
    },
    options.log
  );
  const request$1 =
    options.request ||
    request.request.defaults({
      headers: {
        "user-agent": `octokit-auth-app.js/${VERSION} ${universalUserAgent.getUserAgent()}`,
      },
    });
  const state = Object.assign(
    {
      request: request$1,
      cache: getCache(),
    },
    options,
    options.installationId
      ? {
          installationId: Number(options.installationId),
        }
      : {},
    {
      log,
      oauthApp: authOauthApp.createOAuthAppAuth({
        clientType: "github-app",
        clientId: options.clientId || "",
        clientSecret: options.clientSecret || "",
        request: request$1,
      }),
    }
  ); // @ts-expect-error not worth the extra code to appease TS

  return Object.assign(auth.bind(null, state), {
    hook: hook.bind(null, state),
  });
}

Object.defineProperty(exports, "createOAuthUserAuth", {
  enumerable: true,
  get: function () {
    return authOauthUser.createOAuthUserAuth;
  },
});
exports.createAppAuth = createAppAuth;
//# sourceMappingURL=index.js.map
