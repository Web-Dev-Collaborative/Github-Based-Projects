exports.id = 664
exports.ids = [664]
exports.modules = {
  /***/ 2167: /***/ function (__unused_webpack_module, exports, __webpack_require__) {
    'use strict'
    var __webpack_unused_export__

    var _interopRequireWildcard = __webpack_require__(9448)

    __webpack_unused_export__ = true
    exports.default = void 0

    var _react = _interopRequireWildcard(__webpack_require__(9297))

    var _router = __webpack_require__(9414)

    var _router2 = __webpack_require__(4651)

    var _useIntersection = __webpack_require__(7426)

    const prefetched = {}

    function prefetch(router, href, as, options) {
      if (true) return
      if (!(0, _router.isLocalURL)(href)) return // Prefetch the JSON page if asked (only in the client)
      // We need to handle a prefetch error here since we may be
      // loading with priority which can reject but we don't
      // want to force navigation since this is only a prefetch

      router.prefetch(href, as, options).catch((err) => {
        if (false) {
        }
      })
      const curLocale =
        options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale // Join on an invalid URI character

      prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true
    }

    function isModifiedEvent(event) {
      const { target } = event.currentTarget
      return (
        (target && target !== '_self') ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey || // triggers resource download
        (event.nativeEvent && event.nativeEvent.which === 2)
      )
    }

    function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
      const { nodeName } = e.currentTarget

      if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
        // ignore click for browser’s default behavior
        return
      }

      e.preventDefault() //  avoid scroll for urls with anchor refs

      if (scroll == null && as.indexOf('#') >= 0) {
        scroll = false
      } // replace state instead of push if prop is present

      router[replace ? 'replace' : 'push'](href, as, {
        shallow,
        locale,
        scroll,
      })
    }

    function Link(props) {
      if (false) {
      }

      const p = props.prefetch !== false
      const router = (0, _router2.useRouter)()

      const { href, as } = _react.default.useMemo(() => {
        const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(router, props.href, true)
        return {
          href: resolvedHref,
          as: props.as ? (0, _router.resolveHref)(router, props.as) : resolvedAs || resolvedHref,
        }
      }, [router, props.href, props.as])

      let { children, replace, shallow, scroll, locale } = props // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

      if (typeof children === 'string') {
        children = /*#__PURE__*/ _react.default.createElement('a', null, children)
      } // This will return the first child, if multiple are provided it will throw an error

      let child

      if (false) {
      } else {
        child = _react.Children.only(children)
      }

      const childRef = child && typeof child === 'object' && child.ref
      const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
        rootMargin: '200px',
      })

      const setRef = _react.default.useCallback(
        (el) => {
          setIntersectionRef(el)

          if (childRef) {
            if (typeof childRef === 'function') childRef(el)
            else if (typeof childRef === 'object') {
              childRef.current = el
            }
          }
        },
        [childRef, setIntersectionRef]
      )

      ;(0, _react.useEffect)(() => {
        const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href)
        const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale
        const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')]

        if (shouldPrefetch && !isPrefetched) {
          prefetch(router, href, as, {
            locale: curLocale,
          })
        }
      }, [as, href, isVisible, locale, p, router])
      const childProps = {
        ref: setRef,
        onClick: (e) => {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e)
          }

          if (!e.defaultPrevented) {
            linkClicked(e, router, href, as, replace, shallow, scroll, locale)
          }
        },
      }

      childProps.onMouseEnter = (e) => {
        if (!(0, _router.isLocalURL)(href)) return

        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e)
        }

        prefetch(router, href, as, {
          priority: true,
        })
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (props.passHref || (child.type === 'a' && !('href' in child.props))) {
        const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale // we only render domain locales if we are currently on a domain locale
        // so that locale links are still visitable in development/preview envs

        const localeDomain =
          router &&
          router.isLocaleDomain &&
          (0, _router.getDomainLocale)(
            as,
            curLocale,
            router && router.locales,
            router && router.domainLocales
          )
        childProps.href =
          localeDomain ||
          (0, _router.addBasePath)(
            (0, _router.addLocale)(as, curLocale, router && router.defaultLocale)
          )
      }

      return /*#__PURE__*/ _react.default.cloneElement(child, childProps)
    }

    var _default = Link
    exports.default = _default

    /***/
  },

  /***/ 5965: /***/ function (__unused_webpack_module, exports) {
    'use strict'

    exports.__esModule = true
    exports.removePathTrailingSlash = removePathTrailingSlash
    exports.normalizePathTrailingSlash = void 0
    /**
     * Removes the trailing slash of a path if there is one. Preserves the root path `/`.
     */

    function removePathTrailingSlash(path) {
      return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path
    }
    /**
     * Normalizes the trailing slash of a path according to the `trailingSlash` option
     * in `next.config.js`.
     */

    const normalizePathTrailingSlash = false ? 0 : removePathTrailingSlash
    exports.normalizePathTrailingSlash = normalizePathTrailingSlash

    /***/
  },

  /***/ 3447: /***/ function (__unused_webpack_module, exports) {
    'use strict'

    exports.__esModule = true
    exports.cancelIdleCallback = exports.requestIdleCallback = void 0

    const requestIdleCallback =
      (typeof self !== 'undefined' && self.requestIdleCallback) ||
      function (cb) {
        let start = Date.now()
        return setTimeout(function () {
          cb({
            didTimeout: false,
            timeRemaining: function () {
              return Math.max(0, 50 - (Date.now() - start))
            },
          })
        }, 1)
      }

    exports.requestIdleCallback = requestIdleCallback

    const cancelIdleCallback =
      (typeof self !== 'undefined' && self.cancelIdleCallback) ||
      function (id) {
        return clearTimeout(id)
      }

    exports.cancelIdleCallback = cancelIdleCallback

    /***/
  },

  /***/ 1392: /***/ function (__unused_webpack_module, exports, __webpack_require__) {
    'use strict'

    var _interopRequireDefault = __webpack_require__(2426)

    exports.__esModule = true
    exports.markAssetError = markAssetError
    exports.isAssetError = isAssetError
    exports.getClientBuildManifest = getClientBuildManifest
    exports.default = void 0

    var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(2238))

    var _requestIdleCallback = __webpack_require__(3447) // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
    // considers as "Good" time-to-interactive. We must assume something went
    // wrong beyond this point, and then fall-back to a full page transition to
    // show the user something of value.

    const MS_MAX_IDLE_DELAY = 3800

    function withFuture(key, map, generator) {
      let entry = map.get(key)

      if (entry) {
        if ('future' in entry) {
          return entry.future
        }

        return Promise.resolve(entry)
      }

      let resolver
      const prom = new Promise((resolve) => {
        resolver = resolve
      })
      map.set(
        key,
        (entry = {
          resolve: resolver,
          future: prom,
        })
      )
      return generator // eslint-disable-next-line no-sequences
        ? generator().then((value) => (resolver(value), value))
        : prom
    }

    function hasPrefetch(link) {
      try {
        link = document.createElement('link')
        return (
          // detect IE11 since it supports prefetch but isn't detected
          // with relList.support
          (!!window.MSInputMethodContext && !!document.documentMode) ||
          link.relList.supports('prefetch')
        )
      } catch (_unused) {
        return false
      }
    }

    const canPrefetch = hasPrefetch()

    function prefetchViaDom(href, as, link) {
      return new Promise((res, rej) => {
        if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
          return res()
        }

        link = document.createElement('link') // The order of property assignment here is intentional:

        if (as) link.as = as
        link.rel = `prefetch`
        link.crossOrigin = undefined
        link.onload = res
        link.onerror = rej // `href` should always be last:

        link.href = href
        document.head.appendChild(link)
      })
    }

    const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR') // TODO: unexport

    function markAssetError(err) {
      return Object.defineProperty(err, ASSET_LOAD_ERROR, {})
    }

    function isAssetError(err) {
      return err && ASSET_LOAD_ERROR in err
    }

    function appendScript(src, script) {
      return new Promise((resolve, reject) => {
        script = document.createElement('script') // The order of property assignment here is intentional.
        // 1. Setup success/failure hooks in case the browser synchronously
        //    executes when `src` is set.

        script.onload = resolve

        script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))) // 2. Configure the cross-origin attribute before setting `src` in case the
        //    browser begins to fetch.

        script.crossOrigin = undefined // 3. Finally, set the source and inject into the DOM in case the child
        //    must be appended for fetching to start.

        script.src = src
        document.body.appendChild(script)
      })
    } // Resolve a promise that times out after given amount of milliseconds.

    function resolvePromiseWithTimeout(p, ms, err) {
      return new Promise((resolve, reject) => {
        let cancelled = false
        p.then((r) => {
          // Resolved, cancel the timeout
          cancelled = true
          resolve(r)
        }).catch(reject)
        ;(0, _requestIdleCallback.requestIdleCallback)(() =>
          setTimeout(() => {
            if (!cancelled) {
              reject(err)
            }
          }, ms)
        )
      })
    } // TODO: stop exporting or cache the failure
    // It'd be best to stop exporting this. It's an implementation detail. We're
    // only exporting it for backwards compatibilty with the `page-loader`.
    // Only cache this response as a last resort if we cannot eliminate all other
    // code branches that use the Build Manifest Callback and push them through
    // the Route Loader interface.

    function getClientBuildManifest() {
      if (self.__BUILD_MANIFEST) {
        return Promise.resolve(self.__BUILD_MANIFEST)
      }

      const onBuildManifest = new Promise((resolve) => {
        // Mandatory because this is not concurrent safe:
        const cb = self.__BUILD_MANIFEST_CB

        self.__BUILD_MANIFEST_CB = () => {
          resolve(self.__BUILD_MANIFEST)
          cb && cb()
        }
      })
      return resolvePromiseWithTimeout(
        onBuildManifest,
        MS_MAX_IDLE_DELAY,
        markAssetError(new Error('Failed to load client build manifest'))
      )
    }

    function getFilesForRoute(assetPrefix, route) {
      if (false) {
      }

      return getClientBuildManifest().then((manifest) => {
        if (!(route in manifest)) {
          throw markAssetError(new Error(`Failed to lookup route: ${route}`))
        }

        const allFiles = manifest[route].map((entry) => assetPrefix + '/_next/' + encodeURI(entry))
        return {
          scripts: allFiles.filter((v) => v.endsWith('.js')),
          css: allFiles.filter((v) => v.endsWith('.css')),
        }
      })
    }

    function createRouteLoader(assetPrefix) {
      const entrypoints = new Map()
      const loadedScripts = new Map()
      const styleSheets = new Map()
      const routes = new Map()

      function maybeExecuteScript(src) {
        let prom = loadedScripts.get(src)

        if (prom) {
          return prom
        } // Skip executing script if it's already in the DOM:

        if (document.querySelector(`script[src^="${src}"]`)) {
          return Promise.resolve()
        }

        loadedScripts.set(src, (prom = appendScript(src)))
        return prom
      }

      function fetchStyleSheet(href) {
        let prom = styleSheets.get(href)

        if (prom) {
          return prom
        }

        styleSheets.set(
          href,
          (prom = fetch(href)
            .then((res) => {
              if (!res.ok) {
                throw new Error(`Failed to load stylesheet: ${href}`)
              }

              return res.text().then((text) => ({
                href: href,
                content: text,
              }))
            })
            .catch((err) => {
              throw markAssetError(err)
            }))
        )
        return prom
      }

      return {
        whenEntrypoint(route) {
          return withFuture(route, entrypoints)
        },

        onEntrypoint(route, execute) {
          Promise.resolve(execute)
            .then((fn) => fn())
            .then(
              (exports) => ({
                component: (exports && exports.default) || exports,
                exports: exports,
              }),
              (err) => ({
                error: err,
              })
            )
            .then((input) => {
              const old = entrypoints.get(route)
              entrypoints.set(route, input)
              if (old && 'resolve' in old) old.resolve(input)
            })
        },

        loadRoute(route, prefetch) {
          return withFuture(route, routes, () => {
            return resolvePromiseWithTimeout(
              getFilesForRoute(assetPrefix, route)
                .then(({ scripts, css }) => {
                  return Promise.all([
                    entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)),
                    Promise.all(css.map(fetchStyleSheet)),
                  ])
                })
                .then((res) => {
                  return this.whenEntrypoint(route).then((entrypoint) => ({
                    entrypoint,
                    styles: res[1],
                  }))
                }),
              MS_MAX_IDLE_DELAY,
              markAssetError(new Error(`Route did not complete loading: ${route}`))
            )
              .then(({ entrypoint, styles }) => {
                const res = Object.assign(
                  {
                    styles: styles,
                  },
                  entrypoint
                )
                return 'error' in entrypoint ? entrypoint : res
              })
              .catch((err) => {
                if (prefetch) {
                  // we don't want to cache errors during prefetch
                  throw err
                }

                return {
                  error: err,
                }
              })
          })
        },

        prefetch(route) {
          // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
          // License: Apache 2.0
          let cn

          if ((cn = navigator.connection)) {
            // Don't prefetch if using 2G or if Save-Data is enabled.
            if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve()
          }

          return getFilesForRoute(assetPrefix, route)
            .then((output) =>
              Promise.all(
                canPrefetch ? output.scripts.map((script) => prefetchViaDom(script, 'script')) : []
              )
            )
            .then(() => {
              ;(0, _requestIdleCallback.requestIdleCallback)(() =>
                this.loadRoute(route, true).catch(() => {})
              )
            })
            .catch(
              // swallow prefetch errors
              () => {}
            )
        },
      }
    }

    var _default = createRouteLoader
    exports.default = _default

    /***/
  },

  /***/ 4651: /***/ function (__unused_webpack_module, exports, __webpack_require__) {
    'use strict'

    var _interopRequireWildcard = __webpack_require__(9448)

    var _interopRequireDefault = __webpack_require__(2426)

    exports.__esModule = true
    exports.useRouter = useRouter
    exports.makePublicRouterInstance = makePublicRouterInstance
    exports.createRouter = exports.withRouter = exports.default = void 0

    var _react = _interopRequireDefault(__webpack_require__(9297))

    var _router2 = _interopRequireWildcard(__webpack_require__(9414))

    exports.Router = _router2.default
    exports.NextRouter = _router2.NextRouter

    var _routerContext = __webpack_require__(8417)

    var _withRouter = _interopRequireDefault(__webpack_require__(7413))

    exports.withRouter = _withRouter.default
    /* global window */

    const singletonRouter = {
      router: null,
      // holds the actual router instance
      readyCallbacks: [],

      ready(cb) {
        if (this.router) return cb()

        if (false) {
        }
      },
    } // Create public properties and methods of the router in the singletonRouter

    const urlPropertyFields = [
      'pathname',
      'route',
      'query',
      'asPath',
      'components',
      'isFallback',
      'basePath',
      'locale',
      'locales',
      'defaultLocale',
      'isReady',
      'isPreview',
      'isLocaleDomain',
      'domainLocales',
    ]
    const routerEvents = [
      'routeChangeStart',
      'beforeHistoryChange',
      'routeChangeComplete',
      'routeChangeError',
      'hashChangeStart',
      'hashChangeComplete',
    ]
    const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState'] // Events is a static property on the router, the router doesn't have to be initialized to use it

    Object.defineProperty(singletonRouter, 'events', {
      get() {
        return _router2.default.events
      },
    })
    urlPropertyFields.forEach((field) => {
      // Here we need to use Object.defineProperty because we need to return
      // the property assigned to the actual router
      // The value might get changed as we change routes and this is the
      // proper way to access it
      Object.defineProperty(singletonRouter, field, {
        get() {
          const router = getRouter()
          return router[field]
        },
      })
    })
    coreMethodFields.forEach((field) => {
      // We don't really know the types here, so we add them later instead
      singletonRouter[field] = (...args) => {
        const router = getRouter()
        return router[field](...args)
      }
    })
    routerEvents.forEach((event) => {
      singletonRouter.ready(() => {
        _router2.default.events.on(event, (...args) => {
          const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`
          const _singletonRouter = singletonRouter

          if (_singletonRouter[eventField]) {
            try {
              _singletonRouter[eventField](...args)
            } catch (err) {
              console.error(`Error when running the Router event: ${eventField}`)
              console.error(`${err.message}\n${err.stack}`)
            }
          }
        })
      })
    })

    function getRouter() {
      if (!singletonRouter.router) {
        const message =
          'No router instance found.\n' +
          'You should only use "next/router" on the client side of your app.\n'
        throw new Error(message)
      }

      return singletonRouter.router
    } // Export the singletonRouter and this is the public API.

    var _default = singletonRouter // Reexport the withRoute HOC

    exports.default = _default

    function useRouter() {
      return _react.default.useContext(_routerContext.RouterContext)
    } // INTERNAL APIS
    // -------------
    // (do not use following exports inside the app)
    // Create a router and assign it as the singleton instance.
    // This is used in client side when we are initilizing the app.
    // This should **not** be used inside the server.

    const createRouter = (...args) => {
      singletonRouter.router = new _router2.default(...args)
      singletonRouter.readyCallbacks.forEach((cb) => cb())
      singletonRouter.readyCallbacks = []
      return singletonRouter.router
    } // This function is used to create the `withRouter` router instance

    exports.createRouter = createRouter

    function makePublicRouterInstance(router) {
      const _router = router
      const instance = {}

      for (const property of urlPropertyFields) {
        if (typeof _router[property] === 'object') {
          instance[property] = Object.assign(
            Array.isArray(_router[property]) ? [] : {},
            _router[property]
          ) // makes sure query is not stateful

          continue
        }

        instance[property] = _router[property]
      } // Events is a static property on the router, the router doesn't have to be initialized to use it

      instance.events = _router2.default.events
      coreMethodFields.forEach((field) => {
        instance[field] = (...args) => {
          return _router[field](...args)
        }
      })
      return instance
    }

    /***/
  },

  /***/ 7426: /***/ function (__unused_webpack_module, exports, __webpack_require__) {
    'use strict'

    exports.__esModule = true
    exports.useIntersection = useIntersection

    var _react = __webpack_require__(9297)

    var _requestIdleCallback = __webpack_require__(3447)

    const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined'

    function useIntersection({ rootMargin, disabled }) {
      const isDisabled = disabled || !hasIntersectionObserver
      const unobserve = (0, _react.useRef)()
      const [visible, setVisible] = (0, _react.useState)(false)
      const setRef = (0, _react.useCallback)(
        (el) => {
          if (unobserve.current) {
            unobserve.current()
            unobserve.current = undefined
          }

          if (isDisabled || visible) return

          if (el && el.tagName) {
            unobserve.current = observe(el, (isVisible) => isVisible && setVisible(isVisible), {
              rootMargin,
            })
          }
        },
        [isDisabled, rootMargin, visible]
      )
      ;(0, _react.useEffect)(() => {
        if (!hasIntersectionObserver) {
          if (!visible) {
            const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() =>
              setVisible(true)
            )
            return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback)
          }
        }
      }, [visible])
      return [setRef, visible]
    }

    function observe(element, callback, options) {
      const { id, observer, elements } = createObserver(options)
      elements.set(element, callback)
      observer.observe(element)
      return function unobserve() {
        elements.delete(element)
        observer.unobserve(element) // Destroy observer when there's nothing left to watch:

        if (elements.size === 0) {
          observer.disconnect()
          observers.delete(id)
        }
      }
    }

    const observers = new Map()

    function createObserver(options) {
      const id = options.rootMargin || ''
      let instance = observers.get(id)

      if (instance) {
        return instance
      }

      const elements = new Map()
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const callback = elements.get(entry.target)
          const isVisible = entry.isIntersecting || entry.intersectionRatio > 0

          if (callback && isVisible) {
            callback(isVisible)
          }
        })
      }, options)
      observers.set(
        id,
        (instance = {
          id,
          observer,
          elements,
        })
      )
      return instance
    }

    /***/
  },

  /***/ 7413: /***/ function (__unused_webpack_module, exports, __webpack_require__) {
    'use strict'

    var _interopRequireDefault = __webpack_require__(2426)

    exports.__esModule = true
    exports.default = withRouter

    var _react = _interopRequireDefault(__webpack_require__(9297))

    var _router = __webpack_require__(4651)

    function withRouter(ComposedComponent) {
      function WithRouterWrapper(props) {
        return /*#__PURE__*/ _react.default.createElement(
          ComposedComponent,
          Object.assign(
            {
              router: (0, _router.useRouter)(),
            },
            props
          )
        )
      }

      WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
      WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps

      if (false) {
      }

      return WithRouterWrapper
    }

    /***/
  },

  /***/ 999: /***/ function (__unused_webpack_module, exports) {
    'use strict'
    var __webpack_unused_export__

    __webpack_unused_export__ = true
    exports.D = detectDomainLocale

    function detectDomainLocale(domainItems, hostname, detectedLocale) {
      let domainItem

      if (domainItems) {
        if (detectedLocale) {
          detectedLocale = detectedLocale.toLowerCase()
        }

        for (const item of domainItems) {
          var _item$domain, _item$locales // remove port if present

          const domainHostname =
            (_item$domain = item.domain) == null ? void 0 : _item$domain.split(':')[0].toLowerCase()

          if (
            hostname === domainHostname ||
            detectedLocale === item.defaultLocale.toLowerCase() ||
            ((_item$locales = item.locales) != null &&
              _item$locales.some((locale) => locale.toLowerCase() === detectedLocale))
          ) {
            domainItem = item
            break
          }
        }
      }

      return domainItem
    }

    /***/
  },

  /***/ 6813: /***/ function (__unused_webpack_module, exports) {
    'use strict'

    exports.__esModule = true
    exports.normalizeLocalePath = normalizeLocalePath

    function normalizeLocalePath(pathname, locales) {
      let detectedLocale // first item will be empty string from splitting at first char

      const pathnameParts = pathname.split('/')
      ;(locales || []).some((locale) => {
        if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
          detectedLocale = locale
          pathnameParts.splice(1, 1)
          pathname = pathnameParts.join('/') || '/'
          return true
        }

        return false
      })
      return {
        pathname,
        detectedLocale,
      }
    }

    /***/
  },

  /***/ 8119: /***/ function (__unused_webpack_module, exports) {
    'use strict'

    exports.__esModule = true
    exports.default = mitt
    /*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
    // This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
    // It's been edited for the needs of this script
    // See the LICENSE at the top of the file

    function mitt() {
      const all = Object.create(null)
      return {
        on(type, handler) {
          ;(all[type] || (all[type] = [])).push(handler)
        },

        off(type, handler) {
          if (all[type]) {
            all[type].splice(all[type].indexOf(handler) >>> 0, 1)
          }
        },

        emit(type, ...evts) {
          // eslint-disable-next-line array-callback-return
          ;(all[type] || []).slice().map((handler) => {
            handler(...evts)
          })
        },
      }
    }

    /***/
  },

  /***/ 9414: /***/ function (__unused_webpack_module, exports, __webpack_require__) {
    'use strict'

    exports.__esModule = true
    exports.getDomainLocale = getDomainLocale
    exports.addLocale = addLocale
    exports.delLocale = delLocale
    exports.hasBasePath = hasBasePath
    exports.addBasePath = addBasePath
    exports.delBasePath = delBasePath
    exports.isLocalURL = isLocalURL
    exports.interpolateAs = interpolateAs
    exports.resolveHref = resolveHref
    exports.default = void 0

    var _normalizeTrailingSlash = __webpack_require__(5965)

    var _routeLoader = __webpack_require__(1392)

    var _denormalizePagePath = __webpack_require__(9320)

    var _normalizeLocalePath = __webpack_require__(6813)

    var _mitt = _interopRequireDefault(__webpack_require__(8119))

    var _utils = __webpack_require__(4755)

    var _isDynamic = __webpack_require__(8073)

    var _parseRelativeUrl = __webpack_require__(3900)

    var _querystring = __webpack_require__(8187)

    var _resolveRewrites = _interopRequireDefault(__webpack_require__(9502))

    var _routeMatcher = __webpack_require__(8085)

    var _routeRegex = __webpack_require__(4550)

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule
        ? obj
        : {
            default: obj,
          }
    } // tslint:disable:no-console

    let detectDomainLocale

    if (true) {
      detectDomainLocale = __webpack_require__(999) /* .detectDomainLocale */.D
    }

    const basePath = false || ''

    function buildCancellationError() {
      return Object.assign(new Error('Route Cancelled'), {
        cancelled: true,
      })
    }

    function addPathPrefix(path, prefix) {
      return prefix && path.startsWith('/')
        ? path === '/'
          ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix)
          : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}`
        : path
    }

    function getDomainLocale(path, locale, locales, domainLocales) {
      if (true) {
        locale =
          locale || (0, _normalizeLocalePath.normalizeLocalePath)(path, locales).detectedLocale
        const detectedDomain = detectDomainLocale(domainLocales, undefined, locale)

        if (detectedDomain) {
          return `http${detectedDomain.http ? '' : 's'}://${detectedDomain.domain}${
            basePath || ''
          }${locale === detectedDomain.defaultLocale ? '' : `/${locale}`}${path}`
        }

        return false
      }

      return false
    }

    function addLocale(path, locale, defaultLocale) {
      if (true) {
        const pathname = pathNoQueryHash(path)
        const pathLower = pathname.toLowerCase()
        const localeLower = locale && locale.toLowerCase()
        return locale &&
          locale !== defaultLocale &&
          !pathLower.startsWith('/' + localeLower + '/') &&
          pathLower !== '/' + localeLower
          ? addPathPrefix(path, '/' + locale)
          : path
      }

      return path
    }

    function delLocale(path, locale) {
      if (true) {
        const pathname = pathNoQueryHash(path)
        const pathLower = pathname.toLowerCase()
        const localeLower = locale && locale.toLowerCase()
        return locale &&
          (pathLower.startsWith('/' + localeLower + '/') || pathLower === '/' + localeLower)
          ? (pathname.length === locale.length + 1 ? '/' : '') + path.substr(locale.length + 1)
          : path
      }

      return path
    }

    function pathNoQueryHash(path) {
      const queryIndex = path.indexOf('?')
      const hashIndex = path.indexOf('#')

      if (queryIndex > -1 || hashIndex > -1) {
        path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex)
      }

      return path
    }

    function hasBasePath(path) {
      path = pathNoQueryHash(path)
      return path === basePath || path.startsWith(basePath + '/')
    }

    function addBasePath(path) {
      // we only add the basepath on relative urls
      return addPathPrefix(path, basePath)
    }

    function delBasePath(path) {
      path = path.slice(basePath.length)
      if (!path.startsWith('/')) path = `/${path}`
      return path
    }
    /**
     * Detects whether a given url is routable by the Next.js router (browser only).
     */

    function isLocalURL(url) {
      // prevent a hydration mismatch on href for url with anchor refs
      if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true

      try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)()
        const resolved = new URL(url, locationOrigin)
        return resolved.origin === locationOrigin && hasBasePath(resolved.pathname)
      } catch (_) {
        return false
      }
    }

    function interpolateAs(route, asPathname, query) {
      let interpolatedRoute = ''
      const dynamicRegex = (0, _routeRegex.getRouteRegex)(route)
      const dynamicGroups = dynamicRegex.groups
      const dynamicMatches = // Try to match the dynamic route against the asPath
        (asPathname !== route
          ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname)
          : '') || // Fall back to reading the values from the href
        // TODO: should this take priority; also need to change in the router.
        query
      interpolatedRoute = route
      const params = Object.keys(dynamicGroups)

      if (
        !params.every((param) => {
          let value = dynamicMatches[param] || ''
          const { repeat, optional } = dynamicGroups[param] // support single-level catch-all
          // TODO: more robust handling for user-error (passing `/`)

          let replaced = `[${repeat ? '...' : ''}${param}]`

          if (optional) {
            replaced = `${!value ? '/' : ''}[${replaced}]`
          }

          if (repeat && !Array.isArray(value)) value = [value]
          return (
            (optional || param in dynamicMatches) && // Interpolate group into data URL if present
            (interpolatedRoute =
              interpolatedRoute.replace(
                replaced,
                repeat
                  ? value
                      .map(
                        // these values should be fully encoded instead of just
                        // path delimiter escaped since they are being inserted
                        // into the URL and we expect URL encoded segments
                        // when parsing dynamic route params
                        (segment) => encodeURIComponent(segment)
                      )
                      .join('/')
                  : encodeURIComponent(value)
              ) || '/')
          )
        })
      ) {
        interpolatedRoute = '' // did not satisfy all requirements
        // n.b. We ignore this error because we handle warning for this case in
        // development in the `<Link>` component directly.
      }

      return {
        params,
        result: interpolatedRoute,
      }
    }

    function omitParmsFromQuery(query, params) {
      const filteredQuery = {}
      Object.keys(query).forEach((key) => {
        if (!params.includes(key)) {
          filteredQuery[key] = query[key]
        }
      })
      return filteredQuery
    }
    /**
     * Resolves a given hyperlink with a certain router state (basePath not included).
     * Preserves absolute urls.
     */

    function resolveHref(router, href, resolveAs) {
      // we use a dummy base url for relative urls
      let base
      const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href)

      try {
        base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n')
      } catch (_) {
        // fallback to / for invalid asPath values e.g. //
        base = new URL('/', 'http://n')
      } // Return because it cannot be routed by the Next.js router

      if (!isLocalURL(urlAsString)) {
        return resolveAs ? [urlAsString] : urlAsString
      }

      try {
        const finalUrl = new URL(urlAsString, base)
        finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(
          finalUrl.pathname
        )
        let interpolatedAs = ''

        if (
          (0, _isDynamic.isDynamicRoute)(finalUrl.pathname) &&
          finalUrl.searchParams &&
          resolveAs
        ) {
          const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams)
          const { result, params } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query)

          if (result) {
            interpolatedAs = (0, _utils.formatWithValidation)({
              pathname: result,
              hash: finalUrl.hash,
              query: omitParmsFromQuery(query, params),
            })
          }
        } // if the origin didn't change, it means we received a relative href

        const resolvedHref =
          finalUrl.origin === base.origin
            ? finalUrl.href.slice(finalUrl.origin.length)
            : finalUrl.href
        return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref
      } catch (_) {
        return resolveAs ? [urlAsString] : urlAsString
      }
    }

    function stripOrigin(url) {
      const origin = (0, _utils.getLocationOrigin)()
      return url.startsWith(origin) ? url.substring(origin.length) : url
    }

    function prepareUrlAs(router, url, as) {
      // If url and as provided as an object representation,
      // we'll format them into the string version here.
      let [resolvedHref, resolvedAs] = resolveHref(router, url, true)
      const origin = (0, _utils.getLocationOrigin)()
      const hrefHadOrigin = resolvedHref.startsWith(origin)
      const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin)
      resolvedHref = stripOrigin(resolvedHref)
      resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs
      const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref)
      const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref
      return {
        url: preparedUrl,
        as: asHadOrigin ? preparedAs : addBasePath(preparedAs),
      }
    }

    function resolveDynamicRoute(pathname, pages) {
      const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(
        (0, _denormalizePagePath.denormalizePagePath)(pathname)
      )

      if (cleanPathname === '/404' || cleanPathname === '/_error') {
        return pathname
      } // handle resolving href for dynamic routes

      if (!pages.includes(cleanPathname)) {
        // eslint-disable-next-line array-callback-return
        pages.some((page) => {
          if (
            (0, _isDynamic.isDynamicRoute)(page) &&
            (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)
          ) {
            pathname = page
            return true
          }
        })
      }

      return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname)
    }

    const manualScrollRestoration = /* unused pure expression or super */ null && false && 0
    const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND')

    function fetchRetry(url, attempts) {
      return fetch(url, {
        // Cookies are required to be present for Next.js' SSG "Preview Mode".
        // Cookies may also be required for `getServerSideProps`.
        //
        // > `fetch` won’t send cookies, unless you set the credentials init
        // > option.
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        //
        // > For maximum browser compatibility when it comes to sending &
        // > receiving cookies, always supply the `credentials: 'same-origin'`
        // > option instead of relying on the default.
        // https://github.com/github/fetch#caveats
        credentials: 'same-origin',
      }).then((res) => {
        if (!res.ok) {
          if (attempts > 1 && res.status >= 500) {
            return fetchRetry(url, attempts - 1)
          }

          if (res.status === 404) {
            return res.json().then((data) => {
              if (data.notFound) {
                return {
                  notFound: SSG_DATA_NOT_FOUND,
                }
              }

              throw new Error(`Failed to load static props`)
            })
          }

          throw new Error(`Failed to load static props`)
        }

        return res.json()
      })
    }

    function fetchNextData(dataHref, isServerRender) {
      return fetchRetry(dataHref, isServerRender ? 3 : 1).catch((err) => {
        // We should only trigger a server-side transition if this was caused
        // on a client-side transition. Otherwise, we'd get into an infinite
        // loop.
        if (!isServerRender) {
          ;(0, _routeLoader.markAssetError)(err)
        }

        throw err
      })
    }

    class Router {
      /**
       * Map of all components loaded in `Router`
       */
      // Static Data Cache
      // In-flight Server Data Requests, for deduping
      constructor(
        _pathname,
        _query,
        _as,
        {
          initialProps,
          pageLoader,
          App,
          wrapApp,
          Component,
          err,
          subscription,
          isFallback,
          locale,
          locales,
          defaultLocale,
          domainLocales,
          isPreview,
        }
      ) {
        this.route = void 0
        this.pathname = void 0
        this.query = void 0
        this.asPath = void 0
        this.basePath = void 0
        this.components = void 0
        this.sdc = {}
        this.sdr = {}
        this.sub = void 0
        this.clc = void 0
        this.pageLoader = void 0
        this._bps = void 0
        this.events = void 0
        this._wrapApp = void 0
        this.isSsr = void 0
        this.isFallback = void 0
        this._inFlightRoute = void 0
        this._shallow = void 0
        this.locale = void 0
        this.locales = void 0
        this.defaultLocale = void 0
        this.domainLocales = void 0
        this.isReady = void 0
        this.isPreview = void 0
        this.isLocaleDomain = void 0
        this._idx = 0

        this.onPopState = (e) => {
          const state = e.state

          if (!state) {
            // We get state as undefined for two reasons.
            //  1. With older safari (< 8) and older chrome (< 34)
            //  2. When the URL changed with #
            //
            // In the both cases, we don't need to proceed and change the route.
            // (as it's already changed)
            // But we can simply replace the state with the new changes.
            // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
            // So, doing the following for (1) does no harm.
            const { pathname, query } = this
            this.changeState(
              'replaceState',
              (0, _utils.formatWithValidation)({
                pathname: addBasePath(pathname),
                query,
              }),
              (0, _utils.getURL)()
            )
            return
          }

          if (!state.__N) {
            return
          }

          let forcedScroll
          const { url, as, options, idx } = state

          if (false) {
          }

          this._idx = idx
          const { pathname } = (0, _parseRelativeUrl.parseRelativeUrl)(url) // Make sure we don't re-render on initial load,
          // can be caused by navigating back from an external site

          if (this.isSsr && as === this.asPath && pathname === this.pathname) {
            return
          } // If the downstream application returns falsy, return.
          // They will then be responsible for handling the event.

          if (this._bps && !this._bps(state)) {
            return
          }

          this.change(
            'replaceState',
            url,
            as,
            Object.assign({}, options, {
              shallow: options.shallow && this._shallow,
              locale: options.locale || this.defaultLocale,
            }),
            forcedScroll
          )
        } // represents the current component key

        this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname) // set up the component cache (by route keys)

        this.components = {} // We should not keep the cache, if there's an error
        // Otherwise, this cause issues when when going back and
        // come again to the errored page.

        if (_pathname !== '/_error') {
          this.components[this.route] = {
            Component,
            initial: true,
            props: initialProps,
            err,
            __N_SSG: initialProps && initialProps.__N_SSG,
            __N_SSP: initialProps && initialProps.__N_SSP,
          }
        }

        this.components['/_app'] = {
          Component: App,
          styleSheets: [
            /* /_app does not need its stylesheets managed */
          ],
        } // Backwards compat for Router.router.events
        // TODO: Should be remove the following major version as it was never documented

        this.events = Router.events
        this.pageLoader = pageLoader
        this.pathname = _pathname
        this.query = _query // if auto prerendered and dynamic route wait to update asPath
        // until after mount to prevent hydration mismatch

        const autoExportDynamic =
          (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport

        this.asPath = autoExportDynamic ? _pathname : _as
        this.basePath = basePath
        this.sub = subscription
        this.clc = null
        this._wrapApp = wrapApp // make sure to ignore extra popState in safari on navigating
        // back from external site

        this.isSsr = true
        this.isFallback = isFallback
        this.isReady = !!(
          self.__NEXT_DATA__.gssp ||
          self.__NEXT_DATA__.gip ||
          (!autoExportDynamic && !self.location.search && !true)
        )
        this.isPreview = !!isPreview
        this.isLocaleDomain = false

        if (true) {
          this.locale = locale
          this.locales = locales
          this.defaultLocale = defaultLocale
          this.domainLocales = domainLocales
          this.isLocaleDomain = !!detectDomainLocale(domainLocales, self.location.hostname)
        }

        if (false) {
        }
      }

      reload() {
        window.location.reload()
      }
      /**
       * Go back in history
       */

      back() {
        window.history.back()
      }
      /**
       * Performs a `pushState` with arguments
       * @param url of the route
       * @param as masks `url` for the browser
       * @param options object you can define `shallow` and other options
       */

      push(url, as, options = {}) {
        if (false) {
        }

        ;({ url, as } = prepareUrlAs(this, url, as))
        return this.change('pushState', url, as, options)
      }
      /**
       * Performs a `replaceState` with arguments
       * @param url of the route
       * @param as masks `url` for the browser
       * @param options object you can define `shallow` and other options
       */

      replace(url, as, options = {}) {
        ;({ url, as } = prepareUrlAs(this, url, as))
        return this.change('replaceState', url, as, options)
      }

      async change(method, url, as, options, forcedScroll) {
        if (!isLocalURL(url)) {
          window.location.href = url
          return false
        }

        const shouldResolveHref = url === as || options._h || options._shouldResolveHref // for static pages with query params in the URL we delay
        // marking the router ready until after the query is updated

        if (options._h) {
          this.isReady = true
        }

        let localeChange = options.locale !== this.locale

        if (true) {
          this.locale =
            options.locale === false ? this.defaultLocale : options.locale || this.locale

          if (typeof options.locale === 'undefined') {
            options.locale = this.locale
          }

          const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(
            hasBasePath(as) ? delBasePath(as) : as
          )
          const localePathResult = (0, _normalizeLocalePath.normalizeLocalePath)(
            parsedAs.pathname,
            this.locales
          )

          if (localePathResult.detectedLocale) {
            this.locale = localePathResult.detectedLocale
            parsedAs.pathname = addBasePath(parsedAs.pathname)
            as = (0, _utils.formatWithValidation)(parsedAs)
            url = addBasePath(
              (0, _normalizeLocalePath.normalizeLocalePath)(
                hasBasePath(url) ? delBasePath(url) : url,
                this.locales
              ).pathname
            )
          }

          let didNavigate = false // we need to wrap this in the env check again since regenerator runtime
          // moves this on its own due to the return

          if (true) {
            var _this$locales // if the locale isn't configured hard navigate to show 404 page

            if (!((_this$locales = this.locales) != null && _this$locales.includes(this.locale))) {
              parsedAs.pathname = addLocale(parsedAs.pathname, this.locale)
              window.location.href = (0, _utils.formatWithValidation)(parsedAs) // this was previously a return but was removed in favor
              // of better dead code elimination with regenerator runtime

              didNavigate = true
            }
          }

          const detectedDomain = detectDomainLocale(this.domainLocales, undefined, this.locale) // we need to wrap this in the env check again since regenerator runtime
          // moves this on its own due to the return

          if (true) {
            // if we are navigating to a domain locale ensure we redirect to the
            // correct domain
            if (
              !didNavigate &&
              detectedDomain &&
              this.isLocaleDomain &&
              self.location.hostname !== detectedDomain.domain
            ) {
              const asNoBasePath = delBasePath(as)
              window.location.href = `http${detectedDomain.http ? '' : 's'}://${
                detectedDomain.domain
              }${addBasePath(
                `${this.locale === detectedDomain.defaultLocale ? '' : `/${this.locale}`}${
                  asNoBasePath === '/' ? '' : asNoBasePath
                }` || '/'
              )}` // this was previously a return but was removed in favor
              // of better dead code elimination with regenerator runtime

              didNavigate = true
            }
          }

          if (didNavigate) {
            return new Promise(() => {})
          }
        }

        if (!options._h) {
          this.isSsr = false
        } // marking route changes as a navigation start entry

        if (_utils.ST) {
          performance.mark('routeChange')
        }

        const { shallow = false } = options
        const routeProps = {
          shallow,
        }

        if (this._inFlightRoute) {
          this.abortComponentLoad(this._inFlightRoute, routeProps)
        }

        as = addBasePath(
          addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale)
        )
        const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale)
        this._inFlightRoute = as // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.

        if (!options._h && this.onlyAHashChange(cleanedAs)) {
          this.asPath = cleanedAs
          Router.events.emit('hashChangeStart', as, routeProps) // TODO: do we need the resolved href when only a hash change?

          this.changeState(method, url, as, options)
          this.scrollToHash(cleanedAs)
          this.notify(this.components[this.route], null)
          Router.events.emit('hashChangeComplete', as, routeProps)
          return true
        }

        let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url)
        let { pathname, query } = parsed // The build manifest needs to be loaded before auto-static dynamic pages
        // get their query parameters to allow ensuring they can be parsed properly
        // when rewritten to

        let pages, rewrites

        try {
          pages = await this.pageLoader.getPageList()
          ;({ __rewrites: rewrites } = await (0, _routeLoader.getClientBuildManifest)())
        } catch (err) {
          // If we fail to resolve the page list or client-build manifest, we must
          // do a server-side transition:
          window.location.href = as
          return false
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url

        if (!this.urlIsNew(cleanedAs) && !localeChange) {
          method = 'replaceState'
        } // we need to resolve the as value using rewrites for dynamic SSG
        // pages to allow building the data URL correctly

        let resolvedAs = as // url and as should always be prefixed with basePath by this
        // point by either next/link or router.push/replace so strip the
        // basePath from the pathname to match the pages dir 1-to-1

        pathname = pathname
          ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname))
          : pathname

        if (shouldResolveHref && pathname !== '/_error') {
          options._shouldResolveHref = true

          if (true && as.startsWith('/')) {
            const rewritesResult = (0, _resolveRewrites.default)(
              addBasePath(addLocale(cleanedAs, this.locale)),
              pages,
              rewrites,
              query,
              (p) => resolveDynamicRoute(p, pages),
              this.locales
            )
            resolvedAs = rewritesResult.asPath

            if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
              // if this directly matches a page we need to update the href to
              // allow the correct page chunk to be loaded
              pathname = rewritesResult.resolvedHref
              parsed.pathname = addBasePath(pathname)
              url = (0, _utils.formatWithValidation)(parsed)
            }
          } else {
            parsed.pathname = resolveDynamicRoute(pathname, pages)

            if (parsed.pathname !== pathname) {
              pathname = parsed.pathname
              parsed.pathname = addBasePath(pathname)
              url = (0, _utils.formatWithValidation)(parsed)
            }
          }
        }

        const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname)

        if (!isLocalURL(as)) {
          if (false) {
          }

          window.location.href = as
          return false
        }

        resolvedAs = delLocale(delBasePath(resolvedAs), this.locale)

        if ((0, _isDynamic.isDynamicRoute)(route)) {
          const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs)
          const asPathname = parsedAs.pathname
          const routeRegex = (0, _routeRegex.getRouteRegex)(route)
          const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname)
          const shouldInterpolate = route === asPathname
          const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {}

          if (!routeMatch || (shouldInterpolate && !interpolatedAs.result)) {
            const missingParams = Object.keys(routeRegex.groups).filter((param) => !query[param])

            if (missingParams.length > 0) {
              if (false) {
              }

              throw new Error(
                (shouldInterpolate
                  ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(
                      ', '
                    )}) to be interpolated properly. `
                  : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) +
                  `Read more: https://nextjs.org/docs/messages/${
                    shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'
                  }`
              )
            }
          } else if (shouldInterpolate) {
            as = (0, _utils.formatWithValidation)(
              Object.assign({}, parsedAs, {
                pathname: interpolatedAs.result,
                query: omitParmsFromQuery(query, interpolatedAs.params),
              })
            )
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch)
          }
        }

        Router.events.emit('routeChangeStart', as, routeProps)

        try {
          var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2, _options$scroll

          let routeInfo = await this.getRouteInfo(
            route,
            pathname,
            query,
            as,
            resolvedAs,
            routeProps
          )
          let { error, props, __N_SSG, __N_SSP } = routeInfo // handle redirect on client-transition

          if ((__N_SSG || __N_SSP) && props) {
            if (props.pageProps && props.pageProps.__N_REDIRECT) {
              const destination = props.pageProps.__N_REDIRECT // check if destination is internal (resolves to a page) and attempt
              // client-navigation if it is falling back to hard navigation if
              // it's not

              if (destination.startsWith('/')) {
                const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination)
                parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages)
                const { url: newUrl, as: newAs } = prepareUrlAs(this, destination, destination)
                return this.change(method, newUrl, newAs, options)
              }

              window.location.href = destination
              return new Promise(() => {})
            }

            this.isPreview = !!props.__N_PREVIEW // handle SSG data 404

            if (props.notFound === SSG_DATA_NOT_FOUND) {
              let notFoundRoute

              try {
                await this.fetchComponent('/404')
                notFoundRoute = '/404'
              } catch (_) {
                notFoundRoute = '/_error'
              }

              routeInfo = await this.getRouteInfo(
                notFoundRoute,
                notFoundRoute,
                query,
                as,
                resolvedAs,
                {
                  shallow: false,
                }
              )
            }
          }

          Router.events.emit('beforeHistoryChange', as, routeProps)
          this.changeState(method, url, as, options)

          if (false) {
          }

          if (
            options._h &&
            pathname === '/_error' &&
            ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null
              ? void 0
              : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null
              ? void 0
              : _self$__NEXT_DATA__$p2.statusCode) === 500 &&
            props != null &&
            props.pageProps
          ) {
            // ensure statusCode is still correct for static 500 page
            // when updating query information
            props.pageProps.statusCode = 500
          } // shallow routing is only allowed for same page URL changes.

          const isValidShallowRoute = options.shallow && this.route === route
          const shouldScroll =
            (_options$scroll = options.scroll) != null ? _options$scroll : !isValidShallowRoute
          const resetScroll = shouldScroll
            ? {
                x: 0,
                y: 0,
              }
            : null
          await this.set(
            route,
            pathname,
            query,
            cleanedAs,
            routeInfo,
            forcedScroll != null ? forcedScroll : resetScroll
          ).catch((e) => {
            if (e.cancelled) error = error || e
            else throw e
          })

          if (error) {
            Router.events.emit('routeChangeError', error, cleanedAs, routeProps)
            throw error
          }

          if (true) {
            if (this.locale) {
              document.documentElement.lang = this.locale
            }
          }

          Router.events.emit('routeChangeComplete', as, routeProps)
          return true
        } catch (err) {
          if (err.cancelled) {
            return false
          }

          throw err
        }
      }

      changeState(method, url, as, options = {}) {
        if (false) {
        }

        if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
          this._shallow = options.shallow
          window.history[method](
            {
              url,
              as,
              options,
              __N: true,
              idx: (this._idx = method !== 'pushState' ? this._idx : this._idx + 1),
            }, // Most browsers currently ignores this parameter, although they may use it in the future.
            // Passing the empty string here should be safe against future changes to the method.
            // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
            '',
            as
          )
        }
      }

      async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
        if (err.cancelled) {
          // bubble up cancellation errors
          throw err
        }

        if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
          Router.events.emit('routeChangeError', err, as, routeProps) // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.

          window.location.href = as // Changing the URL doesn't block executing the current code path.
          // So let's throw a cancellation error stop the routing logic.

          throw buildCancellationError()
        }

        try {
          let Component
          let styleSheets
          let props

          if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
            ;({ page: Component, styleSheets } = await this.fetchComponent('/_error'))
          }

          const routeInfo = {
            props,
            Component,
            styleSheets,
            err,
            error: err,
          }

          if (!routeInfo.props) {
            try {
              routeInfo.props = await this.getInitialProps(Component, {
                err,
                pathname,
                query,
              })
            } catch (gipErr) {
              console.error('Error in error page `getInitialProps`: ', gipErr)
              routeInfo.props = {}
            }
          }

          return routeInfo
        } catch (routeInfoErr) {
          return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true)
        }
      }

      async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
        try {
          const existingRouteInfo = this.components[route]

          if (routeProps.shallow && existingRouteInfo && this.route === route) {
            return existingRouteInfo
          }

          const cachedRouteInfo =
            existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo
          const routeInfo = cachedRouteInfo
            ? cachedRouteInfo
            : await this.fetchComponent(route).then((res) => ({
                Component: res.page,
                styleSheets: res.styleSheets,
                __N_SSG: res.mod.__N_SSG,
                __N_SSP: res.mod.__N_SSP,
              }))
          const { Component, __N_SSG, __N_SSP } = routeInfo

          if (false) {
          }

          let dataHref

          if (__N_SSG || __N_SSP) {
            dataHref = this.pageLoader.getDataHref(
              (0, _utils.formatWithValidation)({
                pathname,
                query,
              }),
              resolvedAs,
              __N_SSG,
              this.locale
            )
          }

          const props = await this._getData(() =>
            __N_SSG
              ? this._getStaticData(dataHref)
              : __N_SSP
              ? this._getServerData(dataHref)
              : this.getInitialProps(
                  Component, // we provide AppTree later so this needs to be `any`
                  {
                    pathname,
                    query,
                    asPath: as,
                    locale: this.locale,
                    locales: this.locales,
                    defaultLocale: this.defaultLocale,
                  }
                )
          )
          routeInfo.props = props
          this.components[route] = routeInfo
          return routeInfo
        } catch (err) {
          return this.handleRouteInfoError(err, pathname, query, as, routeProps)
        }
      }

      set(route, pathname, query, as, data, resetScroll) {
        this.isFallback = false
        this.route = route
        this.pathname = pathname
        this.query = query
        this.asPath = as
        return this.notify(data, resetScroll)
      }
      /**
       * Callback to execute before replacing router state
       * @param cb callback to be executed
       */

      beforePopState(cb) {
        this._bps = cb
      }

      onlyAHashChange(as) {
        if (!this.asPath) return false
        const [oldUrlNoHash, oldHash] = this.asPath.split('#')
        const [newUrlNoHash, newHash] = as.split('#') // Makes sure we scroll to the provided hash if the url/hash are the same

        if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
          return true
        } // If the urls are change, there's more than a hash change

        if (oldUrlNoHash !== newUrlNoHash) {
          return false
        } // If the hash has changed, then it's a hash only change.
        // This check is necessary to handle both the enter and
        // leave hash === '' cases. The identity case falls through
        // and is treated as a next reload.

        return oldHash !== newHash
      }

      scrollToHash(as) {
        const [, hash] = as.split('#') // Scroll to top if the hash is just `#` with no value or `#top`
        // To mirror browsers

        if (hash === '' || hash === 'top') {
          window.scrollTo(0, 0)
          return
        } // First we check if the element by id is found

        const idEl = document.getElementById(hash)

        if (idEl) {
          idEl.scrollIntoView()
          return
        } // If there's no element with the id, we check the `name` property
        // To mirror browsers

        const nameEl = document.getElementsByName(hash)[0]

        if (nameEl) {
          nameEl.scrollIntoView()
        }
      }

      urlIsNew(asPath) {
        return this.asPath !== asPath
      }
      /**
       * Prefetch page code, you may wait for the data during page rendering.
       * This feature only works in production!
       * @param url the href of prefetched page
       * @param asPath the as path of the prefetched page
       */

      async prefetch(url, asPath = url, options = {}) {
        let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url)
        let { pathname } = parsed

        if (true) {
          if (options.locale === false) {
            pathname = (0, _normalizeLocalePath.normalizeLocalePath)(
              pathname,
              this.locales
            ).pathname
            parsed.pathname = pathname
            url = (0, _utils.formatWithValidation)(parsed)
            let parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(asPath)
            const localePathResult = (0, _normalizeLocalePath.normalizeLocalePath)(
              parsedAs.pathname,
              this.locales
            )
            parsedAs.pathname = localePathResult.pathname
            options.locale = localePathResult.detectedLocale || this.defaultLocale
            asPath = (0, _utils.formatWithValidation)(parsedAs)
          }
        }

        const pages = await this.pageLoader.getPageList()
        let resolvedAs = asPath

        if (true && asPath.startsWith('/')) {
          let rewrites
          ;({ __rewrites: rewrites } = await (0, _routeLoader.getClientBuildManifest)())
          const rewritesResult = (0, _resolveRewrites.default)(
            addBasePath(addLocale(asPath, this.locale)),
            pages,
            rewrites,
            parsed.query,
            (p) => resolveDynamicRoute(p, pages),
            this.locales
          )
          resolvedAs = delLocale(delBasePath(rewritesResult.asPath), this.locale)

          if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
            // if this directly matches a page we need to update the href to
            // allow the correct page chunk to be loaded
            pathname = rewritesResult.resolvedHref
            parsed.pathname = pathname
            url = (0, _utils.formatWithValidation)(parsed)
          }
        } else {
          parsed.pathname = resolveDynamicRoute(parsed.pathname, pages)

          if (parsed.pathname !== pathname) {
            pathname = parsed.pathname
            parsed.pathname = pathname
            url = (0, _utils.formatWithValidation)(parsed)
          }
        }

        const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname) // Prefetch is not supported in development mode because it would trigger on-demand-entries

        if (false) {
        }

        await Promise.all([
          this.pageLoader._isSsg(route).then((isSsg) => {
            return isSsg
              ? this._getStaticData(
                  this.pageLoader.getDataHref(
                    url,
                    resolvedAs,
                    true,
                    typeof options.locale !== 'undefined' ? options.locale : this.locale
                  )
                )
              : false
          }),
          this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route),
        ])
      }

      async fetchComponent(route) {
        let cancelled = false

        const cancel = (this.clc = () => {
          cancelled = true
        })

        const componentResult = await this.pageLoader.loadPage(route)

        if (cancelled) {
          const error = new Error(`Abort fetching component for route: "${route}"`)
          error.cancelled = true
          throw error
        }

        if (cancel === this.clc) {
          this.clc = null
        }

        return componentResult
      }

      _getData(fn) {
        let cancelled = false

        const cancel = () => {
          cancelled = true
        }

        this.clc = cancel
        return fn().then((data) => {
          if (cancel === this.clc) {
            this.clc = null
          }

          if (cancelled) {
            const err = new Error('Loading initial props cancelled')
            err.cancelled = true
            throw err
          }

          return data
        })
      }

      _getStaticData(dataHref) {
        const { href: cacheKey } = new URL(dataHref, window.location.href)

        if (true && !this.isPreview && this.sdc[cacheKey]) {
          return Promise.resolve(this.sdc[cacheKey])
        }

        return fetchNextData(dataHref, this.isSsr).then((data) => {
          this.sdc[cacheKey] = data
          return data
        })
      }

      _getServerData(dataHref) {
        const { href: resourceKey } = new URL(dataHref, window.location.href)

        if (this.sdr[resourceKey]) {
          return this.sdr[resourceKey]
        }

        return (this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr)
          .then((data) => {
            delete this.sdr[resourceKey]
            return data
          })
          .catch((err) => {
            delete this.sdr[resourceKey]
            throw err
          }))
      }

      getInitialProps(Component, ctx) {
        const { Component: App } = this.components['/_app']

        const AppTree = this._wrapApp(App)

        ctx.AppTree = AppTree
        return (0, _utils.loadGetInitialProps)(App, {
          AppTree,
          Component,
          router: this,
          ctx,
        })
      }

      abortComponentLoad(as, routeProps) {
        if (this.clc) {
          Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps)
          this.clc()
          this.clc = null
        }
      }

      notify(data, resetScroll) {
        return this.sub(data, this.components['/_app'].Component, resetScroll)
      }
    }

    exports.default = Router
    Router.events = (0, _mitt.default)()

    /***/
  },

  /***/ 2960: /***/ function (__unused_webpack_module, exports, __webpack_require__) {
    'use strict'

    exports.__esModule = true
    exports.formatUrl = formatUrl

    var querystring = _interopRequireWildcard(__webpack_require__(8187))

    function _getRequireWildcardCache() {
      if (typeof WeakMap !== 'function') return null
      var cache = new WeakMap()

      _getRequireWildcardCache = function () {
        return cache
      }

      return cache
    }

    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj
      }

      if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
        return {
          default: obj,
        }
      }

      var cache = _getRequireWildcardCache()

      if (cache && cache.has(obj)) {
        return cache.get(obj)
      }

      var newObj = {}
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor

      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null

          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc)
          } else {
            newObj[key] = obj[key]
          }
        }
      }

      newObj.default = obj

      if (cache) {
        cache.set(obj, newObj)
      }

      return newObj
    } // Format function modified from nodejs
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.

    const slashedProtocols = /https?|ftp|gopher|file/

    function formatUrl(urlObj) {
      let { auth, hostname } = urlObj
      let protocol = urlObj.protocol || ''
      let pathname = urlObj.pathname || ''
      let hash = urlObj.hash || ''
      let query = urlObj.query || ''
      let host = false
      auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : ''

      if (urlObj.host) {
        host = auth + urlObj.host
      } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname)

        if (urlObj.port) {
          host += ':' + urlObj.port
        }
      }

      if (query && typeof query === 'object') {
        query = String(querystring.urlQueryToSearchParams(query))
      }

      let search = urlObj.search || (query && `?${query}`) || ''
      if (protocol && protocol.substr(-1) !== ':') protocol += ':'

      if (urlObj.slashes || ((!protocol || slashedProtocols.test(protocol)) && host !== false)) {
        host = '//' + (host || '')
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname
      } else if (!host) {
        host = ''
      }

      if (hash && hash[0] !== '#') hash = '#' + hash
      if (search && search[0] !== '?') search = '?' + search
      pathname = pathname.replace(/[?#]/g, encodeURIComponent)
      search = search.replace('#', '%23')
      return `${protocol}${host}${pathname}${search}${hash}`
    }

    /***/
  },

  /***/ 8073: /***/ function (__unused_webpack_module, exports) {
    'use strict'

    exports.__esModule = true
    exports.isDynamicRoute = isDynamicRoute // Identify /[param]/ in route string

    const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/

    function isDynamicRoute(route) {
      return TEST_ROUTE.test(route)
    }

    /***/
  },

  /***/ 3900: /***/ function (__unused_webpack_module, exports, __webpack_require__) {
    'use strict'

    exports.__esModule = true
    exports.parseRelativeUrl = parseRelativeUrl

    var _utils = __webpack_require__(4755)

    var _querystring = __webpack_require__(8187)
    /**
     * Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
     * (e.g. `./hello`) then at least base must be.
     * Absolute urls are rejected with one exception, in the browser, absolute urls that are on
     * the current origin will be parsed as relative
     */

    function parseRelativeUrl(url, base) {
      const globalBase = new URL(true ? 'http://n' : 0)
      const resolvedBase = base ? new URL(base, globalBase) : globalBase
      const { pathname, searchParams, search, hash, href, origin } = new URL(url, resolvedBase)

      if (origin !== globalBase.origin) {
        throw new Error(`invariant: invalid relative URL, router received ${url}`)
      }

      return {
        pathname,
        query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
        search,
        hash,
        href: href.slice(globalBase.origin.length),
      }
    }

    /***/
  },

  /***/ 3685: /***/ function (__unused_webpack_module, exports, __webpack_require__) {
    'use strict'

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object)
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object)
        if (enumerableOnly)
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable
          })
        keys.push.apply(keys, symbols)
      }
      return keys
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {}
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key])
          })
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key))
          })
        }
      }
      return target
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      } else {
        obj[key] = value
      }
      return obj
    }

    exports.__esModule = true
    exports.pathToRegexp =
      exports.default =
      exports.customRouteMatcherOptions =
      exports.matcherOptions =
        void 0

    var pathToRegexp = _interopRequireWildcard(__webpack_require__(4329))

    exports.pathToRegexp = pathToRegexp

    function _getRequireWildcardCache() {
      if (typeof WeakMap !== 'function') return null
      var cache = new WeakMap()

      _getRequireWildcardCache = function () {
        return cache
      }

      return cache
    }

    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj
      }

      if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
        return {
          default: obj,
        }
      }

      var cache = _getRequireWildcardCache()

      if (cache && cache.has(obj)) {
        return cache.get(obj)
      }

      var newObj = {}
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor

      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null

          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc)
          } else {
            newObj[key] = obj[key]
          }
        }
      }

      newObj.default = obj

      if (cache) {
        cache.set(obj, newObj)
      }

      return newObj
    }

    const matcherOptions = {
      sensitive: false,
      delimiter: '/',
    }
    exports.matcherOptions = matcherOptions

    const customRouteMatcherOptions = _objectSpread(
      _objectSpread({}, matcherOptions),
      {},
      {
        strict: true,
      }
    )

    exports.customRouteMatcherOptions = customRouteMatcherOptions

    var _default = (customRoute = false) => {
      return (path) => {
        const keys = []
        const matcherRegex = pathToRegexp.pathToRegexp(
          path,
          keys,
          customRoute ? customRouteMatcherOptions : matcherOptions
        )
        const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys)
        return (pathname, params) => {
          const res = pathname == null ? false : matcher(pathname)

          if (!res) {
            return false
          }

          if (customRoute) {
            for (const key of keys) {
              // unnamed params should be removed as they
              // are not allowed to be used in the destination
              if (typeof key.name === 'number') {
                delete res.params[key.name]
              }
            }
          }

          return _objectSpread(_objectSpread({}, params), res.params)
        }
      }
    }

    exports.default = _default

    /***/
  },

  /***/ 1005: /***/ function (__unused_webpack_module, exports, __webpack_require__) {
    'use strict'

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object)
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object)
        if (enumerableOnly)
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable
          })
        keys.push.apply(keys, symbols)
      }
      return keys
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {}
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key])
          })
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key))
          })
        }
      }
      return target
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      } else {
        obj[key] = value
      }
      return obj
    }

    exports.__esModule = true
    exports.matchHas = matchHas
    exports.compileNonPath = compileNonPath
    exports.default = prepareDestination
    exports.getSafeParamName = void 0

    var _querystring = __webpack_require__(8187)

    var _parseRelativeUrl = __webpack_require__(3900)

    var pathToRegexp = _interopRequireWildcard(__webpack_require__(4329))

    function _getRequireWildcardCache() {
      if (typeof WeakMap !== 'function') return null
      var cache = new WeakMap()

      _getRequireWildcardCache = function () {
        return cache
      }

      return cache
    }

    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj
      }

      if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
        return {
          default: obj,
        }
      }

      var cache = _getRequireWildcardCache()

      if (cache && cache.has(obj)) {
        return cache.get(obj)
      }

      var newObj = {}
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor

      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null

          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc)
          } else {
            newObj[key] = obj[key]
          }
        }
      }

      newObj.default = obj

      if (cache) {
        cache.set(obj, newObj)
      }

      return newObj
    } // ensure only a-zA-Z are used for param names for proper interpolating
    // with path-to-regexp

    const getSafeParamName = (paramName) => {
      let newParamName = ''

      for (let i = 0; i < paramName.length; i++) {
        const charCode = paramName.charCodeAt(i)

        if (
          (charCode > 64 && charCode < 91) || // A-Z
          (charCode > 96 && charCode < 123) // a-z
        ) {
          newParamName += paramName[i]
        }
      }

      return newParamName
    }

    exports.getSafeParamName = getSafeParamName

    function matchHas(req, has, query) {
      const params = {}
      let initialQueryValues = []

      if (true) {
        initialQueryValues = Object.values(req.__NEXT_INIT_QUERY)
      }

      if (false) {
      }

      const allMatch = has.every((hasItem) => {
        let value
        let key = hasItem.key

        switch (hasItem.type) {
          case 'header': {
            key = key.toLowerCase()
            value = req.headers[key]
            break
          }

          case 'cookie': {
            value = req.cookies[hasItem.key]
            break
          }

          case 'query': {
            // preserve initial encoding of query values
            value = query[key]

            if (initialQueryValues.includes(value || '')) {
              value = encodeURIComponent(value)
            }

            break
          }

          case 'host': {
            const { host } = (req == null ? void 0 : req.headers) || {} // remove port from host if present

            const hostname = host == null ? void 0 : host.split(':')[0].toLowerCase()
            value = hostname
            break
          }

          default: {
            break
          }
        }

        if (!hasItem.value && value) {
          params[getSafeParamName(key)] = value
          return true
        } else if (value) {
          const matcher = new RegExp(`^${hasItem.value}$`)
          const matches = value.match(matcher)

          if (matches) {
            if (matches.groups) {
              Object.keys(matches.groups).forEach((groupKey) => {
                params[groupKey] = matches.groups[groupKey]
              })
            } else if (hasItem.type === 'host' && matches[0]) {
              params.host = matches[0]
            }

            return true
          }
        }

        return false
      })

      if (allMatch) {
        return params
      }

      return false
    }

    function compileNonPath(value, params) {
      if (!value.includes(':')) {
        return value
      }

      for (const key of Object.keys(params)) {
        if (value.includes(`:${key}`)) {
          value = value
            .replace(new RegExp(`:${key}\\*`, 'g'), `:${key}--ESCAPED_PARAM_ASTERISKS`)
            .replace(new RegExp(`:${key}\\?`, 'g'), `:${key}--ESCAPED_PARAM_QUESTION`)
            .replace(new RegExp(`:${key}\\+`, 'g'), `:${key}--ESCAPED_PARAM_PLUS`)
            .replace(new RegExp(`:${key}(?!\\w)`, 'g'), `--ESCAPED_PARAM_COLON${key}`)
        }
      }

      value = value
        .replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1')
        .replace(/--ESCAPED_PARAM_PLUS/g, '+')
        .replace(/--ESCAPED_PARAM_COLON/g, ':')
        .replace(/--ESCAPED_PARAM_QUESTION/g, '?')
        .replace(/--ESCAPED_PARAM_ASTERISKS/g, '*') // the value needs to start with a forward-slash to be compiled
      // correctly

      return pathToRegexp
        .compile(`/${value}`, {
          validate: false,
        })(params)
        .substr(1)
    }

    function prepareDestination(destination, params, query, appendParamsToQuery) {
      let parsedDestination = {} // clone query so we don't modify the original

      query = Object.assign({}, query)
      const hadLocale = query.__nextLocale
      delete query.__nextLocale
      delete query.__nextDefaultLocale

      if (destination.startsWith('/')) {
        parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination)
      } else {
        const { pathname, searchParams, hash, hostname, port, protocol, search, href } = new URL(
          destination
        )
        parsedDestination = {
          pathname,
          query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
          hash,
          protocol,
          hostname,
          port,
          search,
          href,
        }
      }

      const destQuery = parsedDestination.query
      const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`
      const destPathParamKeys = []
      pathToRegexp.pathToRegexp(destPath, destPathParamKeys)
      const destPathParams = destPathParamKeys.map((key) => key.name)
      let destinationCompiler = pathToRegexp.compile(
        destPath, // we don't validate while compiling the destination since we should
        // have already validated before we got to this point and validating
        // breaks compiling destinations with named pattern params from the source
        // e.g. /something:hello(.*) -> /another/:hello is broken with validation
        // since compile validation is meant for reversing and not for inserting
        // params from a separate path-regex into another
        {
          validate: false,
        }
      )
      let newUrl // update any params in query values

      for (const [key, strOrArray] of Object.entries(destQuery)) {
        let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray

        if (value) {
          // the value needs to start with a forward-slash to be compiled
          // correctly
          value = compileNonPath(value, params)
        }

        destQuery[key] = value
      } // add path params to query if it's not a redirect and not
      // already defined in destination query or path

      let paramKeys = Object.keys(params) // remove internal param for i18n

      if (hadLocale) {
        paramKeys = paramKeys.filter((name) => name !== 'nextInternalLocale')
      }

      if (appendParamsToQuery && !paramKeys.some((key) => destPathParams.includes(key))) {
        for (const key of paramKeys) {
          if (!(key in destQuery)) {
            destQuery[key] = params[key]
          }
        }
      }

      try {
        newUrl = destinationCompiler(params)
        const [pathname, hash] = newUrl.split('#')
        parsedDestination.pathname = pathname
        parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`
        delete parsedDestination.search
      } catch (err) {
        if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
          throw new Error(
            `To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match`
          )
        }

        throw err
      } // Query merge order lowest priority to highest
      // 1. initial URL query values
      // 2. path segment values
      // 3. destination specified query values

      parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query)
      return {
        newUrl,
        parsedDestination,
      }
    }

    /***/
  },

  /***/ 8187: /***/ function (__unused_webpack_module, exports) {
    'use strict'

    exports.__esModule = true
    exports.searchParamsToUrlQuery = searchParamsToUrlQuery
    exports.urlQueryToSearchParams = urlQueryToSearchParams
    exports.assign = assign

    function searchParamsToUrlQuery(searchParams) {
      const query = {}
      searchParams.forEach((value, key) => {
        if (typeof query[key] === 'undefined') {
          query[key] = value
        } else if (Array.isArray(query[key])) {
          query[key].push(value)
        } else {
          query[key] = [query[key], value]
        }
      })
      return query
    }

    function stringifyUrlQueryParam(param) {
      if (
        typeof param === 'string' ||
        (typeof param === 'number' && !isNaN(param)) ||
        typeof param === 'boolean'
      ) {
        return String(param)
      } else {
        return ''
      }
    }

    function urlQueryToSearchParams(urlQuery) {
      const result = new URLSearchParams()
      Object.entries(urlQuery).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((item) => result.append(key, stringifyUrlQueryParam(item)))
        } else {
          result.set(key, stringifyUrlQueryParam(value))
        }
      })
      return result
    }

    function assign(target, ...searchParamsList) {
      searchParamsList.forEach((searchParams) => {
        Array.from(searchParams.keys()).forEach((key) => target.delete(key))
        searchParams.forEach((value, key) => target.append(key, value))
      })
      return target
    }

    /***/
  },

  /***/ 9502: /***/ function (__unused_webpack_module, exports, __webpack_require__) {
    'use strict'

    exports.__esModule = true
    exports.default = resolveRewrites

    var _pathMatch = _interopRequireDefault(__webpack_require__(3685))

    var _prepareDestination = _interopRequireWildcard(__webpack_require__(1005))

    var _normalizeTrailingSlash = __webpack_require__(5965)

    var _normalizeLocalePath = __webpack_require__(6813)

    var _parseRelativeUrl = __webpack_require__(3900)

    var _router = __webpack_require__(9414)

    function _getRequireWildcardCache() {
      if (typeof WeakMap !== 'function') return null
      var cache = new WeakMap()

      _getRequireWildcardCache = function () {
        return cache
      }

      return cache
    }

    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj
      }

      if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
        return {
          default: obj,
        }
      }

      var cache = _getRequireWildcardCache()

      if (cache && cache.has(obj)) {
        return cache.get(obj)
      }

      var newObj = {}
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor

      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null

          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc)
          } else {
            newObj[key] = obj[key]
          }
        }
      }

      newObj.default = obj

      if (cache) {
        cache.set(obj, newObj)
      }

      return newObj
    }

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule
        ? obj
        : {
            default: obj,
          }
    }

    const customRouteMatcher = (0, _pathMatch.default)(true)

    function resolveRewrites(asPath, pages, rewrites, query, resolveHref, locales) {
      let matchedPage = false
      let parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(asPath)
      let fsPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(
        (0, _normalizeLocalePath.normalizeLocalePath)(
          (0, _router.delBasePath)(parsedAs.pathname),
          locales
        ).pathname
      )
      let resolvedHref

      const handleRewrite = (rewrite) => {
        const matcher = customRouteMatcher(rewrite.source)
        let params = matcher(parsedAs.pathname)

        if (rewrite.has && params) {
          const hasParams = (0, _prepareDestination.matchHas)(
            {
              headers: {
                host: document.location.hostname,
              },
              cookies: document.cookie.split('; ').reduce((acc, item) => {
                const [key, ...value] = item.split('=')
                acc[key] = value.join('=')
                return acc
              }, {}),
            },
            rewrite.has,
            parsedAs.query
          )

          if (hasParams) {
            Object.assign(params, hasParams)
          } else {
            params = false
          }
        }

        if (params) {
          if (!rewrite.destination) {
            // this is a proxied rewrite which isn't handled on the client
            return true
          }

          const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true)
          parsedAs = destRes.parsedDestination
          asPath = destRes.newUrl
          Object.assign(query, destRes.parsedDestination.query)
          fsPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(
            (0, _normalizeLocalePath.normalizeLocalePath)((0, _router.delBasePath)(asPath), locales)
              .pathname
          )

          if (pages.includes(fsPathname)) {
            // check if we now match a page as this means we are done
            // resolving the rewrites
            matchedPage = true
            resolvedHref = fsPathname
            return true
          } // check if we match a dynamic-route, if so we break the rewrites chain

          resolvedHref = resolveHref(fsPathname)

          if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
            matchedPage = true
            return true
          }
        }
      }

      let finished = false

      for (let i = 0; i < rewrites.beforeFiles.length; i++) {
        // we don't end after match in beforeFiles to allow
        // continuing through all beforeFiles rewrites
        handleRewrite(rewrites.beforeFiles[i])
      }

      matchedPage = pages.includes(fsPathname)

      if (!matchedPage) {
        if (!finished) {
          for (let i = 0; i < rewrites.afterFiles.length; i++) {
            if (handleRewrite(rewrites.afterFiles[i])) {
              finished = true
              break
            }
          }
        } // check dynamic route before processing fallback rewrites

        if (!finished) {
          resolvedHref = resolveHref(fsPathname)
          matchedPage = pages.includes(resolvedHref)
          finished = matchedPage
        }

        if (!finished) {
          for (let i = 0; i < rewrites.fallback.length; i++) {
            if (handleRewrite(rewrites.fallback[i])) {
              finished = true
              break
            }
          }
        }
      }

      return {
        asPath,
        parsedAs,
        matchedPage,
        resolvedHref,
      }
    }

    /***/
  },

  /***/ 8085: /***/ function (__unused_webpack_module, exports) {
    'use strict'

    exports.__esModule = true
    exports.getRouteMatcher = getRouteMatcher

    function getRouteMatcher(routeRegex) {
      const { re, groups } = routeRegex
      return (pathname) => {
        const routeMatch = re.exec(pathname)

        if (!routeMatch) {
          return false
        }

        const decode = (param) => {
          try {
            return decodeURIComponent(param)
          } catch (_) {
            const err = new Error('failed to decode param')
            err.code = 'DECODE_FAILED'
            throw err
          }
        }

        const params = {}
        Object.keys(groups).forEach((slugName) => {
          const g = groups[slugName]
          const m = routeMatch[g.pos]

          if (m !== undefined) {
            params[slugName] = ~m.indexOf('/')
              ? m.split('/').map((entry) => decode(entry))
              : g.repeat
              ? [decode(m)]
              : decode(m)
          }
        })
        return params
      }
    }

    /***/
  },

  /***/ 4550: /***/ function (__unused_webpack_module, exports) {
    'use strict'

    exports.__esModule = true
    exports.getRouteRegex = getRouteRegex // this isn't importing the escape-string-regex module
    // to reduce bytes

    function escapeRegex(str) {
      return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&')
    }

    function parseParameter(param) {
      const optional = param.startsWith('[') && param.endsWith(']')

      if (optional) {
        param = param.slice(1, -1)
      }

      const repeat = param.startsWith('...')

      if (repeat) {
        param = param.slice(3)
      }

      return {
        key: param,
        repeat,
        optional,
      }
    }

    function getRouteRegex(normalizedRoute) {
      const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/')
      const groups = {}
      let groupIndex = 1
      const parameterizedRoute = segments
        .map((segment) => {
          if (segment.startsWith('[') && segment.endsWith(']')) {
            const { key, optional, repeat } = parseParameter(segment.slice(1, -1))
            groups[key] = {
              pos: groupIndex++,
              repeat,
              optional,
            }
            return repeat ? (optional ? '(?:/(.+?))?' : '/(.+?)') : '/([^/]+?)'
          } else {
            return `/${escapeRegex(segment)}`
          }
        })
        .join('') // dead code eliminate for browser since it's only needed
      // while generating routes-manifest

      if (true) {
        let routeKeyCharCode = 97
        let routeKeyCharLength = 1 // builds a minimal routeKey using only a-z and minimal number of characters

        const getSafeRouteKey = () => {
          let routeKey = ''

          for (let i = 0; i < routeKeyCharLength; i++) {
            routeKey += String.fromCharCode(routeKeyCharCode)
            routeKeyCharCode++

            if (routeKeyCharCode > 122) {
              routeKeyCharLength++
              routeKeyCharCode = 97
            }
          }

          return routeKey
        }

        const routeKeys = {}
        let namedParameterizedRoute = segments
          .map((segment) => {
            if (segment.startsWith('[') && segment.endsWith(']')) {
              const { key, optional, repeat } = parseParameter(segment.slice(1, -1)) // replace any non-word characters since they can break
              // the named regex

              let cleanedKey = key.replace(/\W/g, '')
              let invalidKey = false // check if the key is still invalid and fallback to using a known
              // safe key

              if (cleanedKey.length === 0 || cleanedKey.length > 30) {
                invalidKey = true
              }

              if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
                invalidKey = true
              }

              if (invalidKey) {
                cleanedKey = getSafeRouteKey()
              }

              routeKeys[cleanedKey] = key
              return repeat
                ? optional
                  ? `(?:/(?<${cleanedKey}>.+?))?`
                  : `/(?<${cleanedKey}>.+?)`
                : `/(?<${cleanedKey}>[^/]+?)`
            } else {
              return `/${escapeRegex(segment)}`
            }
          })
          .join('')
        return {
          re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
          groups,
          routeKeys,
          namedRegex: `^${namedParameterizedRoute}(?:/)?$`,
        }
      }

      return {
        re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
        groups,
      }
    }

    /***/
  },

  /***/ 4755: /***/ function (__unused_webpack_module, exports, __webpack_require__) {
    'use strict'

    exports.__esModule = true
    exports.execOnce = execOnce
    exports.getLocationOrigin = getLocationOrigin
    exports.getURL = getURL
    exports.getDisplayName = getDisplayName
    exports.isResSent = isResSent
    exports.loadGetInitialProps = loadGetInitialProps
    exports.formatWithValidation = formatWithValidation
    exports.ST = exports.SP = exports.urlObjectKeys = void 0

    var _formatUrl = __webpack_require__(2960)
    /**
     * Utils
     */

    function execOnce(fn) {
      let used = false
      let result
      return (...args) => {
        if (!used) {
          used = true
          result = fn(...args)
        }

        return result
      }
    }

    function getLocationOrigin() {
      const { protocol, hostname, port } = window.location
      return `${protocol}//${hostname}${port ? ':' + port : ''}`
    }

    function getURL() {
      const { href } = window.location
      const origin = getLocationOrigin()
      return href.substring(origin.length)
    }

    function getDisplayName(Component) {
      return typeof Component === 'string'
        ? Component
        : Component.displayName || Component.name || 'Unknown'
    }

    function isResSent(res) {
      return res.finished || res.headersSent
    }

    async function loadGetInitialProps(App, ctx) {
      if (false) {
        var _App$prototype
      } // when called from _app `ctx` is nested in `ctx`

      const res = ctx.res || (ctx.ctx && ctx.ctx.res)

      if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
          // @ts-ignore pageProps default
          return {
            pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx),
          }
        }

        return {}
      }

      const props = await App.getInitialProps(ctx)

      if (res && isResSent(res)) {
        return props
      }

      if (!props) {
        const message = `"${getDisplayName(
          App
        )}.getInitialProps()" should resolve to an object. But found "${props}" instead.`
        throw new Error(message)
      }

      if (false) {
      }

      return props
    }

    const urlObjectKeys = [
      'auth',
      'hash',
      'host',
      'hostname',
      'href',
      'path',
      'pathname',
      'port',
      'protocol',
      'query',
      'search',
      'slashes',
    ]
    exports.urlObjectKeys = urlObjectKeys

    function formatWithValidation(url) {
      if (false) {
      }

      return (0, _formatUrl.formatUrl)(url)
    }

    const SP = typeof performance !== 'undefined'
    exports.SP = SP
    const ST =
      SP && typeof performance.mark === 'function' && typeof performance.measure === 'function'
    exports.ST = ST

    /***/
  },

  /***/ 4329: /***/ function (__unused_webpack_module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', { value: true })
    /**
     * Tokenize input string.
     */
    function lexer(str) {
      var tokens = []
      var i = 0
      while (i < str.length) {
        var char = str[i]
        if (char === '*' || char === '+' || char === '?') {
          tokens.push({ type: 'MODIFIER', index: i, value: str[i++] })
          continue
        }
        if (char === '\\') {
          tokens.push({ type: 'ESCAPED_CHAR', index: i++, value: str[i++] })
          continue
        }
        if (char === '{') {
          tokens.push({ type: 'OPEN', index: i, value: str[i++] })
          continue
        }
        if (char === '}') {
          tokens.push({ type: 'CLOSE', index: i, value: str[i++] })
          continue
        }
        if (char === ':') {
          var name = ''
          var j = i + 1
          while (j < str.length) {
            var code = str.charCodeAt(j)
            if (
              // `0-9`
              (code >= 48 && code <= 57) ||
              // `A-Z`
              (code >= 65 && code <= 90) ||
              // `a-z`
              (code >= 97 && code <= 122) ||
              // `_`
              code === 95
            ) {
              name += str[j++]
              continue
            }
            break
          }
          if (!name) throw new TypeError('Missing parameter name at ' + i)
          tokens.push({ type: 'NAME', index: i, value: name })
          i = j
          continue
        }
        if (char === '(') {
          var count = 1
          var pattern = ''
          var j = i + 1
          if (str[j] === '?') {
            throw new TypeError('Pattern cannot start with "?" at ' + j)
          }
          while (j < str.length) {
            if (str[j] === '\\') {
              pattern += str[j++] + str[j++]
              continue
            }
            if (str[j] === ')') {
              count--
              if (count === 0) {
                j++
                break
              }
            } else if (str[j] === '(') {
              count++
              if (str[j + 1] !== '?') {
                throw new TypeError('Capturing groups are not allowed at ' + j)
              }
            }
            pattern += str[j++]
          }
          if (count) throw new TypeError('Unbalanced pattern at ' + i)
          if (!pattern) throw new TypeError('Missing pattern at ' + i)
          tokens.push({ type: 'PATTERN', index: i, value: pattern })
          i = j
          continue
        }
        tokens.push({ type: 'CHAR', index: i, value: str[i++] })
      }
      tokens.push({ type: 'END', index: i, value: '' })
      return tokens
    }
    /**
     * Parse a string for the raw tokens.
     */
    function parse(str, options) {
      if (options === void 0) {
        options = {}
      }
      var tokens = lexer(str)
      var _a = options.prefixes,
        prefixes = _a === void 0 ? './' : _a
      var defaultPattern = '[^' + escapeString(options.delimiter || '/#?') + ']+?'
      var result = []
      var key = 0
      var i = 0
      var path = ''
      var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type) return tokens[i++].value
      }
      var mustConsume = function (type) {
        var value = tryConsume(type)
        if (value !== undefined) return value
        var _a = tokens[i],
          nextType = _a.type,
          index = _a.index
        throw new TypeError('Unexpected ' + nextType + ' at ' + index + ', expected ' + type)
      }
      var consumeText = function () {
        var result = ''
        var value
        // tslint:disable-next-line
        while ((value = tryConsume('CHAR') || tryConsume('ESCAPED_CHAR'))) {
          result += value
        }
        return result
      }
      while (i < tokens.length) {
        var char = tryConsume('CHAR')
        var name = tryConsume('NAME')
        var pattern = tryConsume('PATTERN')
        if (name || pattern) {
          var prefix = char || ''
          if (prefixes.indexOf(prefix) === -1) {
            path += prefix
            prefix = ''
          }
          if (path) {
            result.push(path)
            path = ''
          }
          result.push({
            name: name || key++,
            prefix: prefix,
            suffix: '',
            pattern: pattern || defaultPattern,
            modifier: tryConsume('MODIFIER') || '',
          })
          continue
        }
        var value = char || tryConsume('ESCAPED_CHAR')
        if (value) {
          path += value
          continue
        }
        if (path) {
          result.push(path)
          path = ''
        }
        var open = tryConsume('OPEN')
        if (open) {
          var prefix = consumeText()
          var name_1 = tryConsume('NAME') || ''
          var pattern_1 = tryConsume('PATTERN') || ''
          var suffix = consumeText()
          mustConsume('CLOSE')
          result.push({
            name: name_1 || (pattern_1 ? key++ : ''),
            pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
            prefix: prefix,
            suffix: suffix,
            modifier: tryConsume('MODIFIER') || '',
          })
          continue
        }
        mustConsume('END')
      }
      return result
    }
    exports.parse = parse
    /**
     * Compile a string to a template function for the path.
     */
    function compile(str, options) {
      return tokensToFunction(parse(str, options), options)
    }
    exports.compile = compile
    /**
     * Expose a method for transforming tokens into the path function.
     */
    function tokensToFunction(tokens, options) {
      if (options === void 0) {
        options = {}
      }
      var reFlags = flags(options)
      var _a = options.encode,
        encode =
          _a === void 0
            ? function (x) {
                return x
              }
            : _a,
        _b = options.validate,
        validate = _b === void 0 ? true : _b
      // Compile all the tokens into regexps.
      var matches = tokens.map(function (token) {
        if (typeof token === 'object') {
          return new RegExp('^(?:' + token.pattern + ')$', reFlags)
        }
      })
      return function (data) {
        var path = ''
        for (var i = 0; i < tokens.length; i++) {
          var token = tokens[i]
          if (typeof token === 'string') {
            path += token
            continue
          }
          var value = data ? data[token.name] : undefined
          var optional = token.modifier === '?' || token.modifier === '*'
          var repeat = token.modifier === '*' || token.modifier === '+'
          if (Array.isArray(value)) {
            if (!repeat) {
              throw new TypeError('Expected "' + token.name + '" to not repeat, but got an array')
            }
            if (value.length === 0) {
              if (optional) continue
              throw new TypeError('Expected "' + token.name + '" to not be empty')
            }
            for (var j = 0; j < value.length; j++) {
              var segment = encode(value[j], token)
              if (validate && !matches[i].test(segment)) {
                throw new TypeError(
                  'Expected all "' +
                    token.name +
                    '" to match "' +
                    token.pattern +
                    '", but got "' +
                    segment +
                    '"'
                )
              }
              path += token.prefix + segment + token.suffix
            }
            continue
          }
          if (typeof value === 'string' || typeof value === 'number') {
            var segment = encode(String(value), token)
            if (validate && !matches[i].test(segment)) {
              throw new TypeError(
                'Expected "' +
                  token.name +
                  '" to match "' +
                  token.pattern +
                  '", but got "' +
                  segment +
                  '"'
              )
            }
            path += token.prefix + segment + token.suffix
            continue
          }
          if (optional) continue
          var typeOfMessage = repeat ? 'an array' : 'a string'
          throw new TypeError('Expected "' + token.name + '" to be ' + typeOfMessage)
        }
        return path
      }
    }
    exports.tokensToFunction = tokensToFunction
    /**
     * Create path match function from `path-to-regexp` spec.
     */
    function match(str, options) {
      var keys = []
      var re = pathToRegexp(str, keys, options)
      return regexpToFunction(re, keys, options)
    }
    exports.match = match
    /**
     * Create a path match function from `path-to-regexp` output.
     */
    function regexpToFunction(re, keys, options) {
      if (options === void 0) {
        options = {}
      }
      var _a = options.decode,
        decode =
          _a === void 0
            ? function (x) {
                return x
              }
            : _a
      return function (pathname) {
        var m = re.exec(pathname)
        if (!m) return false
        var path = m[0],
          index = m.index
        var params = Object.create(null)
        var _loop_1 = function (i) {
          // tslint:disable-next-line
          if (m[i] === undefined) return 'continue'
          var key = keys[i - 1]
          if (key.modifier === '*' || key.modifier === '+') {
            params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
              return decode(value, key)
            })
          } else {
            params[key.name] = decode(m[i], key)
          }
        }
        for (var i = 1; i < m.length; i++) {
          _loop_1(i)
        }
        return { path: path, index: index, params: params }
      }
    }
    exports.regexpToFunction = regexpToFunction
    /**
     * Escape a regular expression string.
     */
    function escapeString(str) {
      return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
    }
    /**
     * Get the flags for a regexp from the options.
     */
    function flags(options) {
      return options && options.sensitive ? '' : 'i'
    }
    /**
     * Pull out keys from a regexp.
     */
    function regexpToRegexp(path, keys) {
      if (!keys) return path
      // Use a negative lookahead to match only capturing groups.
      var groups = path.source.match(/\((?!\?)/g)
      if (groups) {
        for (var i = 0; i < groups.length; i++) {
          keys.push({
            name: i,
            prefix: '',
            suffix: '',
            modifier: '',
            pattern: '',
          })
        }
      }
      return path
    }
    /**
     * Transform an array into a regexp.
     */
    function arrayToRegexp(paths, keys, options) {
      var parts = paths.map(function (path) {
        return pathToRegexp(path, keys, options).source
      })
      return new RegExp('(?:' + parts.join('|') + ')', flags(options))
    }
    /**
     * Create a path regexp from string input.
     */
    function stringToRegexp(path, keys, options) {
      return tokensToRegexp(parse(path, options), keys, options)
    }
    /**
     * Expose a function for taking tokens and returning a RegExp.
     */
    function tokensToRegexp(tokens, keys, options) {
      if (options === void 0) {
        options = {}
      }
      var _a = options.strict,
        strict = _a === void 0 ? false : _a,
        _b = options.start,
        start = _b === void 0 ? true : _b,
        _c = options.end,
        end = _c === void 0 ? true : _c,
        _d = options.encode,
        encode =
          _d === void 0
            ? function (x) {
                return x
              }
            : _d
      var endsWith = '[' + escapeString(options.endsWith || '') + ']|$'
      var delimiter = '[' + escapeString(options.delimiter || '/#?') + ']'
      var route = start ? '^' : ''
      // Iterate over the tokens and create our regexp string.
      for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i]
        if (typeof token === 'string') {
          route += escapeString(encode(token))
        } else {
          var prefix = escapeString(encode(token.prefix))
          var suffix = escapeString(encode(token.suffix))
          if (token.pattern) {
            if (keys) keys.push(token)
            if (prefix || suffix) {
              if (token.modifier === '+' || token.modifier === '*') {
                var mod = token.modifier === '*' ? '?' : ''
                route +=
                  '(?:' +
                  prefix +
                  '((?:' +
                  token.pattern +
                  ')(?:' +
                  suffix +
                  prefix +
                  '(?:' +
                  token.pattern +
                  '))*)' +
                  suffix +
                  ')' +
                  mod
              } else {
                route += '(?:' + prefix + '(' + token.pattern + ')' + suffix + ')' + token.modifier
              }
            } else {
              route += '(' + token.pattern + ')' + token.modifier
            }
          } else {
            route += '(?:' + prefix + suffix + ')' + token.modifier
          }
        }
      }
      if (end) {
        if (!strict) route += delimiter + '?'
        route += !options.endsWith ? '$' : '(?=' + endsWith + ')'
      } else {
        var endToken = tokens[tokens.length - 1]
        var isEndDelimited =
          typeof endToken === 'string'
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
              endToken === undefined
        if (!strict) {
          route += '(?:' + delimiter + '(?=' + endsWith + '))?'
        }
        if (!isEndDelimited) {
          route += '(?=' + delimiter + '|' + endsWith + ')'
        }
      }
      return new RegExp(route, flags(options))
    }
    exports.tokensToRegexp = tokensToRegexp
    /**
     * Normalize the given path string, returning a regular expression.
     *
     * An empty array can be passed in for the keys, which will hold the
     * placeholder key descriptions. For example, using `/user/:id`, `keys` will
     * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
     */
    function pathToRegexp(path, keys, options) {
      if (path instanceof RegExp) return regexpToRegexp(path, keys)
      if (Array.isArray(path)) return arrayToRegexp(path, keys, options)
      return stringToRegexp(path, keys, options)
    }
    exports.pathToRegexp = pathToRegexp
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 9320: /***/ function (__unused_webpack_module, exports) {
    'use strict'
    exports.__esModule = true
    exports.normalizePathSep = normalizePathSep
    exports.denormalizePagePath = denormalizePagePath
    function normalizePathSep(path) {
      return path.replace(/\\/g, '/')
    }
    function denormalizePagePath(page) {
      page = normalizePathSep(page)
      if (page.startsWith('/index/')) {
        page = page.slice(6)
      } else if (page === '/index') {
        page = '/'
      }
      return page
    }
    //# sourceMappingURL=denormalize-page-path.js.map

    /***/
  },

  /***/ 1664: /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    module.exports = __webpack_require__(2167)

    /***/
  },

  /***/ 2426: /***/ function (module) {
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule
        ? obj
        : {
            default: obj,
          }
    }

    module.exports = _interopRequireDefault

    /***/
  },

  /***/ 9448: /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    var _typeof = __webpack_require__(7917)

    function _getRequireWildcardCache() {
      if (typeof WeakMap !== 'function') return null
      var cache = new WeakMap()

      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache
      }

      return cache
    }

    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj
      }

      if (obj === null || (_typeof(obj) !== 'object' && typeof obj !== 'function')) {
        return {
          default: obj,
        }
      }

      var cache = _getRequireWildcardCache()

      if (cache && cache.has(obj)) {
        return cache.get(obj)
      }

      var newObj = {}
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor

      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null

          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc)
          } else {
            newObj[key] = obj[key]
          }
        }
      }

      newObj['default'] = obj

      if (cache) {
        cache.set(obj, newObj)
      }

      return newObj
    }

    module.exports = _interopRequireWildcard

    /***/
  },

  /***/ 7917: /***/ function (module) {
    function _typeof(obj) {
      '@babel/helpers - typeof'

      if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
        module.exports = _typeof = function _typeof(obj) {
          return typeof obj
        }
      } else {
        module.exports = _typeof = function _typeof(obj) {
          return obj &&
            typeof Symbol === 'function' &&
            obj.constructor === Symbol &&
            obj !== Symbol.prototype
            ? 'symbol'
            : typeof obj
        }
      }

      return _typeof(obj)
    }

    module.exports = _typeof

    /***/
  },
}
