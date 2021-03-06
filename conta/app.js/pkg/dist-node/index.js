"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

var core = require("@octokit/core");
var authApp = require("@octokit/auth-app");
var oauthApp = require("@octokit/oauth-app");
var authUnauthenticated = require("@octokit/auth-unauthenticated");
var webhooks$1 = require("@octokit/webhooks");
var pluginPaginateRest = require("@octokit/plugin-paginate-rest");

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

function _asyncIterator(iterable) {
  var method;

  if (typeof Symbol !== "undefined") {
    if (Symbol.asyncIterator) method = iterable[Symbol.asyncIterator];
    if (method == null && Symbol.iterator) method = iterable[Symbol.iterator];
  }

  if (method == null) method = iterable["@@asyncIterator"];
  if (method == null) method = iterable["@@iterator"];
  if (method == null) throw new TypeError("Object is not async iterable");
  return method.call(iterable);
}

function _AwaitValue(value) {
  this.wrapped = value;
}

function _AsyncGenerator(gen) {
  var front, back;

  function send(key, arg) {
    return new Promise(function (resolve, reject) {
      var request = {
        key: key,
        arg: arg,
        resolve: resolve,
        reject: reject,
        next: null,
      };

      if (back) {
        back = back.next = request;
      } else {
        front = back = request;
        resume(key, arg);
      }
    });
  }

  function resume(key, arg) {
    try {
      var result = gen[key](arg);
      var value = result.value;
      var wrappedAwait = value instanceof _AwaitValue;
      Promise.resolve(wrappedAwait ? value.wrapped : value).then(
        function (arg) {
          if (wrappedAwait) {
            resume(key === "return" ? "return" : "next", arg);
            return;
          }

          settle(result.done ? "return" : "normal", arg);
        },
        function (err) {
          resume("throw", err);
        }
      );
    } catch (err) {
      settle("throw", err);
    }
  }

  function settle(type, value) {
    switch (type) {
      case "return":
        front.resolve({
          value: value,
          done: true,
        });
        break;

      case "throw":
        front.reject(value);
        break;

      default:
        front.resolve({
          value: value,
          done: false,
        });
        break;
    }

    front = front.next;

    if (front) {
      resume(front.key, front.arg);
    } else {
      back = null;
    }
  }

  this._invoke = send;

  if (typeof gen.return !== "function") {
    this.return = undefined;
  }
}

_AsyncGenerator.prototype[
  (typeof Symbol === "function" && Symbol.asyncIterator) || "@@asyncIterator"
] = function () {
  return this;
};

_AsyncGenerator.prototype.next = function (arg) {
  return this._invoke("next", arg);
};

_AsyncGenerator.prototype.throw = function (arg) {
  return this._invoke("throw", arg);
};

_AsyncGenerator.prototype.return = function (arg) {
  return this._invoke("return", arg);
};

function _wrapAsyncGenerator(fn) {
  return function () {
    return new _AsyncGenerator(fn.apply(this, arguments));
  };
}

function _awaitAsyncGenerator(value) {
  return new _AwaitValue(value);
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

const VERSION = "0.0.0-development";

function webhooks(
  appOctokit,
  options // Explict return type for better debugability and performance,
  // see https://github.com/octokit/app.js/pull/201
) {
  return new webhooks$1.Webhooks({
    secret: options.secret,
    transform: async (event) => {
      if (
        !("installation" in event.payload) ||
        typeof event.payload.installation !== "object"
      ) {
        const octokit = new appOctokit.constructor({
          authStrategy: authUnauthenticated.createUnauthenticatedAuth,
          auth: {
            reason: `"installation" key missing in webhook event payload`,
          },
        });
        return _objectSpread2(
          _objectSpread2({}, event),
          {},
          {
            octokit: octokit,
          }
        );
      }

      const installationId = event.payload.installation.id;
      const octokit = await appOctokit.auth({
        type: "installation",
        installationId,

        factory(auth) {
          return new auth.octokit.constructor(
            _objectSpread2(
              _objectSpread2({}, auth.octokitOptions),
              {},
              {
                authStrategy: authApp.createAppAuth,
              },
              {
                auth: _objectSpread2(
                  _objectSpread2({}, auth),
                  {},
                  {
                    installationId,
                  }
                ),
              }
            )
          );
        },
      });
      return _objectSpread2(
        _objectSpread2({}, event),
        {},
        {
          octokit: octokit,
        }
      );
    },
  });
}

async function getInstallationOctokit(app, installationId) {
  return app.octokit.auth({
    type: "installation",
    installationId: installationId,

    factory(auth) {
      const options = _objectSpread2(
        _objectSpread2({}, auth.octokitOptions),
        {},
        {
          authStrategy: authApp.createAppAuth,
        },
        {
          auth: _objectSpread2(
            _objectSpread2({}, auth),
            {},
            {
              installationId: installationId,
            }
          ),
        }
      );

      return new auth.octokit.constructor(options);
    },
  });
}

function eachInstallationFactory(app) {
  return Object.assign(eachInstallation.bind(null, app), {
    iterator: eachInstallationIterator.bind(null, app),
  });
}
async function eachInstallation(app, callback) {
  const i = eachInstallationIterator(app)[Symbol.asyncIterator]();
  let result = await i.next();

  while (!result.done) {
    await callback(result.value);
    result = await i.next();
  }
}
function eachInstallationIterator(app) {
  return {
    [Symbol.asyncIterator]() {
      return _wrapAsyncGenerator(function* () {
        const iterator = pluginPaginateRest.composePaginateRest.iterator(
          app.octokit,
          "GET /app/installations"
        );
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;

        var _iteratorError;

        try {
          for (
            var _iterator = _asyncIterator(iterator), _step, _value;
            (_step = yield _awaitAsyncGenerator(_iterator.next())),
              (_iteratorNormalCompletion = _step.done),
              (_value = yield _awaitAsyncGenerator(_step.value)),
              !_iteratorNormalCompletion;
            _iteratorNormalCompletion = true
          ) {
            const { data: installations } = _value;

            for (const installation of installations) {
              const installationOctokit = yield _awaitAsyncGenerator(
                getInstallationOctokit(app, installation.id)
              );
              yield {
                octokit: installationOctokit,
                installation,
              };
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              yield _awaitAsyncGenerator(_iterator.return());
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      })();
    },
  };
}

function eachRepositoryFactory(app) {
  return Object.assign(eachRepository.bind(null, app), {
    iterator: eachRepositoryIterator.bind(null, app),
  });
}
async function eachRepository(app, queryOrCallback, callback) {
  const i = eachRepositoryIterator(app, callback ? queryOrCallback : undefined)[
    Symbol.asyncIterator
  ]();
  let result = await i.next();

  while (!result.done) {
    if (callback) {
      await callback(result.value);
    } else {
      await queryOrCallback(result.value);
    }

    result = await i.next();
  }
}

function singleInstallationIterator(app, installationId) {
  return {
    [Symbol.asyncIterator]() {
      return _wrapAsyncGenerator(function* () {
        yield {
          octokit: yield _awaitAsyncGenerator(
            app.getInstallationOctokit(installationId)
          ),
        };
      })();
    },
  };
}

function eachRepositoryIterator(app, query) {
  return {
    [Symbol.asyncIterator]() {
      return _wrapAsyncGenerator(function* () {
        const iterator = query
          ? singleInstallationIterator(app, query.installationId)
          : app.eachInstallation.iterator();
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;

        var _iteratorError;

        try {
          for (
            var _iterator = _asyncIterator(iterator), _step, _value;
            (_step = yield _awaitAsyncGenerator(_iterator.next())),
              (_iteratorNormalCompletion = _step.done),
              (_value = yield _awaitAsyncGenerator(_step.value)),
              !_iteratorNormalCompletion;
            _iteratorNormalCompletion = true
          ) {
            const { octokit } = _value;
            const repositoriesIterator =
              pluginPaginateRest.composePaginateRest.iterator(
                octokit,
                "GET /installation/repositories"
              );
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;

            var _iteratorError2;

            try {
              for (
                var _iterator2 = _asyncIterator(repositoriesIterator),
                  _step2,
                  _value2;
                (_step2 = yield _awaitAsyncGenerator(_iterator2.next())),
                  (_iteratorNormalCompletion2 = _step2.done),
                  (_value2 = yield _awaitAsyncGenerator(_step2.value)),
                  !_iteratorNormalCompletion2;
                _iteratorNormalCompletion2 = true
              ) {
                const { data: repositories } = _value2;

                for (const repository of repositories) {
                  yield {
                    octokit: octokit,
                    repository,
                  };
                }
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  yield _awaitAsyncGenerator(_iterator2.return());
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              yield _awaitAsyncGenerator(_iterator.return());
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      })();
    },
  };
}

function onUnhandledRequestDefault(request, response) {
  response.writeHead(404, {
    "content-type": "application/json",
  });
  response.end(
    JSON.stringify({
      error: `Unknown route: ${request.method} ${request.url}`,
    })
  );
}

function noop() {}

function createNodeMiddleware(app, options = {}) {
  const log = Object.assign(
    {
      debug: noop,
      info: noop,
      warn: console.warn.bind(console),
      error: console.error.bind(console),
    },
    options.log
  );

  const optionsWithDefaults = _objectSpread2(
    _objectSpread2(
      {
        onUnhandledRequest: onUnhandledRequestDefault,
        pathPrefix: "/api/github",
      },
      options
    ),
    {},
    {
      log,
    }
  );

  const webhooksMiddleware = webhooks$1.createNodeMiddleware(app.webhooks, {
    path: optionsWithDefaults.pathPrefix + "/webhooks",
    log,
    onUnhandledRequest: optionsWithDefaults.onUnhandledRequest,
  });
  const oauthMiddleware = oauthApp.createNodeMiddleware(app.oauth, {
    pathPrefix: optionsWithDefaults.pathPrefix + "/oauth",
    onUnhandledRequest: optionsWithDefaults.onUnhandledRequest,
  });
  return middleware.bind(null, optionsWithDefaults, {
    webhooksMiddleware,
    oauthMiddleware,
  });
}
async function middleware(
  options,
  { webhooksMiddleware, oauthMiddleware },
  request,
  response,
  next
) {
  const { pathname } = new URL(request.url, "http://localhost");

  if (pathname === `${options.pathPrefix}/webhooks`) {
    return webhooksMiddleware(request, response, next);
  }

  if (pathname.startsWith(`${options.pathPrefix}/oauth/`)) {
    return oauthMiddleware(request, response, next);
  }

  const isExpressMiddleware = typeof next === "function";

  if (isExpressMiddleware) {
    // @ts-ignore `next` must be a function as we check two lines above
    return next();
  }

  return options.onUnhandledRequest(request, response);
}

class App {
  constructor(options) {
    const Octokit = options.Octokit || core.Octokit;
    const authOptions = Object.assign(
      {
        appId: options.appId,
        privateKey: options.privateKey,
      },
      options.oauth
        ? {
            clientId: options.oauth.clientId,
            clientSecret: options.oauth.clientSecret,
          }
        : {}
    );
    this.octokit = new Octokit({
      authStrategy: authApp.createAppAuth,
      auth: authOptions,
      log: options.log,
    });
    this.log = Object.assign(
      {
        debug: () => {},
        info: () => {},
        warn: console.warn.bind(console),
        error: console.error.bind(console),
      },
      options.log
    ); // set app.webhooks depending on whether "webhooks" option has been passed

    if (options.webhooks) {
      // @ts-expect-error TODO: figure this out
      this.webhooks = webhooks(this.octokit, options.webhooks);
    } else {
      Object.defineProperty(this, "webhooks", {
        get() {
          throw new Error("[@octokit/app] webhooks option not set");
        },
      });
    } // set app.oauth depending on whether "oauth" option has been passed

    if (options.oauth) {
      this.oauth = new oauthApp.OAuthApp(
        _objectSpread2(
          _objectSpread2({}, options.oauth),
          {},
          {
            clientType: "github-app",
            Octokit,
          }
        )
      );
    } else {
      Object.defineProperty(this, "oauth", {
        get() {
          throw new Error(
            "[@octokit/app] oauth.clientId / oauth.clientSecret options are not set"
          );
        },
      });
    }

    this.getInstallationOctokit = getInstallationOctokit.bind(null, this);
    this.eachInstallation = eachInstallationFactory(this);
    this.eachRepository = eachRepositoryFactory(this);
  }

  static defaults(defaults) {
    const AppWithDefaults = class extends this {
      constructor(...args) {
        super(_objectSpread2(_objectSpread2({}, defaults), args[0]));
      }
    };
    return AppWithDefaults;
  }
}
App.VERSION = VERSION;

exports.App = App;
exports.createNodeMiddleware = createNodeMiddleware;
//# sourceMappingURL=index.js.map
