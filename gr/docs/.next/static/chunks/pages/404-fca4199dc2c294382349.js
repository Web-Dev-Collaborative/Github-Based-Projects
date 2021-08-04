;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [197],
  {
    5687: function (e, t, r) {
      'use strict'
      r.d(t, {
        pY: function () {
          return o
        },
        AG: function () {
          return u
        },
        zb: function () {
          return f
        },
      })
      var s = r(5893),
        n = r(9008),
        l = r(1664),
        c = r(1163),
        i = r(5529),
        a = r(2638)
      function o() {
        var e = (0, a.a)().isEnterprise
        return (0, s.jsxs)('div', {
          className: 'min-h-screen d-flex flex-column',
          children: [
            (0, s.jsx)(n.default, {
              children: (0, s.jsx)('title', { children: 'GitHub Documentation' }),
            }),
            (0, s.jsx)(u, {}),
            (0, s.jsx)('div', {
              className: 'container-xl p-responsive py-9 width-full flex-1',
              children: (0, s.jsxs)('article', {
                className: 'col-md-10 col-lg-7 mx-auto',
                children: [
                  (0, s.jsx)('h1', { className: 'mb-3 pb-3 border-bottom', children: 'Ooops!' }),
                  (0, s.jsx)('p', {
                    className: 'lead-mktg',
                    children: 'It looks like something went wrong.',
                  }),
                  (0, s.jsx)('p', {
                    className: 'lead-mktg',
                    children:
                      'We track these errors automatically, but if the problem persists please feel free to contact us.',
                  }),
                  (0, s.jsxs)('a', {
                    id: 'contact-us',
                    href: e
                      ? 'https://enterprise.github.com/support'
                      : 'https://support.github.com/contact',
                    className: 'btn btn-outline mt-2',
                    children: [
                      (0, s.jsx)(i.DX8, { size: 'small', className: 'octicon mr-1' }),
                      'Contact support',
                    ],
                  }),
                ],
              }),
            }),
            (0, s.jsx)(f, {}),
          ],
        })
      }
      var u = function () {
          var e = (0, c.useRouter)()
          return (0, s.jsx)('div', {
            className: 'border-bottom color-border-secondary no-print',
            children: (0, s.jsx)('header', {
              className: 'container-xl p-responsive py-3 position-relative d-flex width-full',
              children: (0, s.jsxs)('div', {
                className: 'd-flex flex-items-center',
                style: { zIndex: 3 },
                id: 'github-logo-mobile',
                role: 'banner',
                children: [
                  (0, s.jsx)(l.default, {
                    href: '/'.concat(e.locale),
                    children: (0, s.jsx)('a', {
                      'aria-hidden': 'true',
                      tabIndex: -1,
                      children: (0, s.jsx)(i.g_Y, { size: 32, className: 'color-icon-primary' }),
                    }),
                  }),
                  (0, s.jsx)(l.default, {
                    href: '/'.concat(e.locale),
                    children: (0, s.jsx)('a', {
                      className: 'h4-mktg color-text-primary no-underline no-wrap pl-2',
                      children: 'GitHub Docs',
                    }),
                  }),
                ],
              }),
            }),
          })
        },
        f = function () {
          return (0, s.jsx)('footer', {
            className: 'py-6 text-small',
            children: (0, s.jsx)('div', {
              className: 'container-xl d-flex px-3 px-md-6 flex-justify-center',
              children: (0, s.jsxs)('ul', {
                className: 'd-flex list-style-none flex-wrap flex-justify-center',
                children: [
                  (0, s.jsxs)('li', {
                    className: 'd-flex mr-xl-3 color-text-secondary',
                    children: [
                      (0, s.jsx)(i.g_Y, { className: 'mr-2 mr-xl-3', size: 20 }),
                      (0, s.jsxs)('span', {
                        children: ['\xa9 ', new Date().getFullYear(), ' GitHub, Inc.'],
                      }),
                    ],
                  }),
                  (0, s.jsx)('li', {
                    className: 'ml-3',
                    children: (0, s.jsx)('a', {
                      href: '/github/site-policy/github-terms-of-service',
                      children: 'Terms',
                    }),
                  }),
                  (0, s.jsx)('li', {
                    className: 'ml-3',
                    children: (0, s.jsx)('a', {
                      href: '/github/site-policy/github-privacy-statement',
                      children: 'Privacy ',
                    }),
                  }),
                  (0, s.jsx)('li', {
                    className: 'ml-3',
                    children: (0, s.jsx)('a', {
                      href: 'https://github.com/security',
                      children: 'Security',
                    }),
                  }),
                  (0, s.jsx)('li', {
                    className: 'ml-3',
                    children: (0, s.jsx)('a', {
                      href: 'https://www.githubstatus.com/',
                      children: 'Status',
                    }),
                  }),
                  (0, s.jsx)('li', {
                    className: 'ml-3',
                    children: (0, s.jsx)('a', { href: '/', children: 'Help' }),
                  }),
                  (0, s.jsx)('li', {
                    className: 'ml-3',
                    children: (0, s.jsx)('a', {
                      href: 'https://support.github.com',
                      children: 'Contact GitHub',
                    }),
                  }),
                  (0, s.jsx)('li', {
                    className: 'ml-3',
                    children: (0, s.jsx)('a', {
                      href: 'https://github.com/pricing',
                      children: 'Pricing',
                    }),
                  }),
                  (0, s.jsx)('li', {
                    className: 'ml-3',
                    children: (0, s.jsx)('a', { href: '/developers', children: 'Developer API' }),
                  }),
                  (0, s.jsx)('li', {
                    className: 'ml-3',
                    children: (0, s.jsx)('a', {
                      href: 'https://services.github.com/',
                      children: 'Training',
                    }),
                  }),
                  (0, s.jsx)('li', {
                    className: 'ml-3',
                    children: (0, s.jsx)('a', {
                      href: 'https://github.com/about',
                      children: 'About',
                    }),
                  }),
                ],
              }),
            }),
          })
        }
    },
    2638: function (e, t, r) {
      'use strict'
      r.d(t, {
        a: function () {
          return n
        },
      })
      var s = r(1163),
        n = function () {
          var e = (0, s.useRouter)().query.versionId || 'free-pro-team@latest'
          return {
            currentVersion: e,
            isEnterprise: e.includes('enterprise'),
            isEnterpriseServer: e.includes('enterprise-server'),
          }
        }
    },
    2167: function (e, t, r) {
      'use strict'
      var s = r(3848),
        n = r(9448)
      t.default = void 0
      var l = n(r(7294)),
        c = r(9414),
        i = r(4651),
        a = r(7426),
        o = {}
      function u(e, t, r, s) {
        if (e && (0, c.isLocalURL)(t)) {
          e.prefetch(t, r, s).catch(function (e) {
            0
          })
          var n = s && 'undefined' !== typeof s.locale ? s.locale : e && e.locale
          o[t + '%' + r + (n ? '%' + n : '')] = !0
        }
      }
      var f = function (e) {
        var t,
          r = !1 !== e.prefetch,
          n = (0, i.useRouter)(),
          f = l.default.useMemo(
            function () {
              var t = (0, c.resolveHref)(n, e.href, !0),
                r = s(t, 2),
                l = r[0],
                i = r[1]
              return { href: l, as: e.as ? (0, c.resolveHref)(n, e.as) : i || l }
            },
            [n, e.href, e.as]
          ),
          d = f.href,
          h = f.as,
          p = e.children,
          m = e.replace,
          x = e.shallow,
          v = e.scroll,
          j = e.locale
        'string' === typeof p && (p = l.default.createElement('a', null, p))
        var b = (t = l.Children.only(p)) && 'object' === typeof t && t.ref,
          g = (0, a.useIntersection)({ rootMargin: '200px' }),
          N = s(g, 2),
          y = N[0],
          w = N[1],
          k = l.default.useCallback(
            function (e) {
              y(e), b && ('function' === typeof b ? b(e) : 'object' === typeof b && (b.current = e))
            },
            [b, y]
          )
        ;(0, l.useEffect)(
          function () {
            var e = w && r && (0, c.isLocalURL)(d),
              t = 'undefined' !== typeof j ? j : n && n.locale,
              s = o[d + '%' + h + (t ? '%' + t : '')]
            e && !s && u(n, d, h, { locale: t })
          },
          [h, d, w, j, r, n]
        )
        var E = {
          ref: k,
          onClick: function (e) {
            t.props && 'function' === typeof t.props.onClick && t.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, r, s, n, l, i, a) {
                  ;('A' !== e.currentTarget.nodeName ||
                    (!(function (e) {
                      var t = e.currentTarget.target
                      return (
                        (t && '_self' !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      )
                    })(e) &&
                      (0, c.isLocalURL)(r))) &&
                    (e.preventDefault(),
                    null == i && s.indexOf('#') >= 0 && (i = !1),
                    t[n ? 'replace' : 'push'](r, s, { shallow: l, locale: a, scroll: i }))
                })(e, n, d, h, m, x, v, j)
          },
          onMouseEnter: function (e) {
            ;(0, c.isLocalURL)(d) &&
              (t.props && 'function' === typeof t.props.onMouseEnter && t.props.onMouseEnter(e),
              u(n, d, h, { priority: !0 }))
          },
        }
        if (e.passHref || ('a' === t.type && !('href' in t.props))) {
          var _ = 'undefined' !== typeof j ? j : n && n.locale,
            I =
              n &&
              n.isLocaleDomain &&
              (0, c.getDomainLocale)(h, _, n && n.locales, n && n.domainLocales)
          E.href = I || (0, c.addBasePath)((0, c.addLocale)(h, _, n && n.defaultLocale))
        }
        return l.default.cloneElement(t, E)
      }
      t.default = f
    },
    7426: function (e, t, r) {
      'use strict'
      var s = r(3848)
      ;(t.__esModule = !0),
        (t.useIntersection = function (e) {
          var t = e.rootMargin,
            r = e.disabled || !c,
            a = (0, n.useRef)(),
            o = (0, n.useState)(!1),
            u = s(o, 2),
            f = u[0],
            d = u[1],
            h = (0, n.useCallback)(
              function (e) {
                a.current && (a.current(), (a.current = void 0)),
                  r ||
                    f ||
                    (e &&
                      e.tagName &&
                      (a.current = (function (e, t, r) {
                        var s = (function (e) {
                            var t = e.rootMargin || '',
                              r = i.get(t)
                            if (r) return r
                            var s = new Map(),
                              n = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = s.get(e.target),
                                    r = e.isIntersecting || e.intersectionRatio > 0
                                  t && r && t(r)
                                })
                              }, e)
                            return i.set(t, (r = { id: t, observer: n, elements: s })), r
                          })(r),
                          n = s.id,
                          l = s.observer,
                          c = s.elements
                        return (
                          c.set(e, t),
                          l.observe(e),
                          function () {
                            c.delete(e),
                              l.unobserve(e),
                              0 === c.size && (l.disconnect(), i.delete(n))
                          }
                        )
                      })(
                        e,
                        function (e) {
                          return e && d(e)
                        },
                        { rootMargin: t }
                      )))
              },
              [r, t, f]
            )
          return (
            (0, n.useEffect)(
              function () {
                if (!c && !f) {
                  var e = (0, l.requestIdleCallback)(function () {
                    return d(!0)
                  })
                  return function () {
                    return (0, l.cancelIdleCallback)(e)
                  }
                }
              },
              [f]
            ),
            [h, f]
          )
        })
      var n = r(7294),
        l = r(3447),
        c = 'undefined' !== typeof IntersectionObserver
      var i = new Map()
    },
    7348: function (e, t, r) {
      'use strict'
      r.r(t)
      var s = r(5893),
        n = r(5687),
        l = r(9008),
        c = r(5529),
        i = r(2638)
      t.default = function () {
        var e = (0, i.a)().isEnterprise
        return (0, s.jsxs)('div', {
          className: 'min-h-screen d-flex flex-column',
          children: [
            (0, s.jsx)(l.default, {
              children: (0, s.jsx)('title', { children: '404 - Page not found' }),
            }),
            (0, s.jsx)(n.AG, {}),
            (0, s.jsx)('div', {
              className: 'container-xl p-responsive py-6 width-full flex-1',
              children: (0, s.jsxs)('article', {
                className: 'col-md-10 col-lg-7 mx-auto',
                children: [
                  (0, s.jsx)('h1', { className: 'mb-3 pb-3 border-bottom', children: 'Ooops!' }),
                  (0, s.jsx)('p', {
                    className: 'lead-mktg',
                    children: "It looks like this page doesn't exist.",
                  }),
                  (0, s.jsx)('p', {
                    className: 'lead-mktg',
                    children:
                      'We track these errors automatically, but if the problem persists please feel free to contact us.',
                  }),
                  (0, s.jsxs)('a', {
                    id: 'contact-us',
                    href: e
                      ? 'https://enterprise.github.com/support'
                      : 'https://support.github.com/contact',
                    className: 'btn btn-outline mt-2',
                    children: [
                      (0, s.jsx)(c.DX8, { size: 'small', className: 'octicon mr-1' }),
                      'Contact support',
                    ],
                  }),
                ],
              }),
            }),
            (0, s.jsx)(n.zb, {}),
          ],
        })
      }
    },
    9014: function (e, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/404',
        function () {
          return r(7348)
        },
      ])
    },
    1664: function (e, t, r) {
      e.exports = r(2167)
    },
    1163: function (e, t, r) {
      e.exports = r(4651)
    },
  },
  function (e) {
    e.O(0, [547, 774, 888, 179], function () {
      return (t = 9014), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  },
])
