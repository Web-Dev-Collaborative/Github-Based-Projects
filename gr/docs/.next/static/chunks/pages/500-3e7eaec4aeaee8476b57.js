;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [573],
  {
    5687: function (e, r, t) {
      'use strict'
      t.d(r, {
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
      var n = t(5893),
        s = t(9008),
        l = t(1664),
        i = t(1163),
        c = t(5529),
        a = t(2638)
      function o() {
        var e = (0, a.a)().isEnterprise
        return (0, n.jsxs)('div', {
          className: 'min-h-screen d-flex flex-column',
          children: [
            (0, n.jsx)(s.default, {
              children: (0, n.jsx)('title', { children: 'GitHub Documentation' }),
            }),
            (0, n.jsx)(u, {}),
            (0, n.jsx)('div', {
              className: 'container-xl p-responsive py-9 width-full flex-1',
              children: (0, n.jsxs)('article', {
                className: 'col-md-10 col-lg-7 mx-auto',
                children: [
                  (0, n.jsx)('h1', { className: 'mb-3 pb-3 border-bottom', children: 'Ooops!' }),
                  (0, n.jsx)('p', {
                    className: 'lead-mktg',
                    children: 'It looks like something went wrong.',
                  }),
                  (0, n.jsx)('p', {
                    className: 'lead-mktg',
                    children:
                      'We track these errors automatically, but if the problem persists please feel free to contact us.',
                  }),
                  (0, n.jsxs)('a', {
                    id: 'contact-us',
                    href: e
                      ? 'https://enterprise.github.com/support'
                      : 'https://support.github.com/contact',
                    className: 'btn btn-outline mt-2',
                    children: [
                      (0, n.jsx)(c.DX8, { size: 'small', className: 'octicon mr-1' }),
                      'Contact support',
                    ],
                  }),
                ],
              }),
            }),
            (0, n.jsx)(f, {}),
          ],
        })
      }
      var u = function () {
          var e = (0, i.useRouter)()
          return (0, n.jsx)('div', {
            className: 'border-bottom color-border-secondary no-print',
            children: (0, n.jsx)('header', {
              className: 'container-xl p-responsive py-3 position-relative d-flex width-full',
              children: (0, n.jsxs)('div', {
                className: 'd-flex flex-items-center',
                style: { zIndex: 3 },
                id: 'github-logo-mobile',
                role: 'banner',
                children: [
                  (0, n.jsx)(l.default, {
                    href: '/'.concat(e.locale),
                    children: (0, n.jsx)('a', {
                      'aria-hidden': 'true',
                      tabIndex: -1,
                      children: (0, n.jsx)(c.g_Y, { size: 32, className: 'color-icon-primary' }),
                    }),
                  }),
                  (0, n.jsx)(l.default, {
                    href: '/'.concat(e.locale),
                    children: (0, n.jsx)('a', {
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
          return (0, n.jsx)('footer', {
            className: 'py-6 text-small',
            children: (0, n.jsx)('div', {
              className: 'container-xl d-flex px-3 px-md-6 flex-justify-center',
              children: (0, n.jsxs)('ul', {
                className: 'd-flex list-style-none flex-wrap flex-justify-center',
                children: [
                  (0, n.jsxs)('li', {
                    className: 'd-flex mr-xl-3 color-text-secondary',
                    children: [
                      (0, n.jsx)(c.g_Y, { className: 'mr-2 mr-xl-3', size: 20 }),
                      (0, n.jsxs)('span', {
                        children: ['\xa9 ', new Date().getFullYear(), ' GitHub, Inc.'],
                      }),
                    ],
                  }),
                  (0, n.jsx)('li', {
                    className: 'ml-3',
                    children: (0, n.jsx)('a', {
                      href: '/github/site-policy/github-terms-of-service',
                      children: 'Terms',
                    }),
                  }),
                  (0, n.jsx)('li', {
                    className: 'ml-3',
                    children: (0, n.jsx)('a', {
                      href: '/github/site-policy/github-privacy-statement',
                      children: 'Privacy ',
                    }),
                  }),
                  (0, n.jsx)('li', {
                    className: 'ml-3',
                    children: (0, n.jsx)('a', {
                      href: 'https://github.com/security',
                      children: 'Security',
                    }),
                  }),
                  (0, n.jsx)('li', {
                    className: 'ml-3',
                    children: (0, n.jsx)('a', {
                      href: 'https://www.githubstatus.com/',
                      children: 'Status',
                    }),
                  }),
                  (0, n.jsx)('li', {
                    className: 'ml-3',
                    children: (0, n.jsx)('a', { href: '/', children: 'Help' }),
                  }),
                  (0, n.jsx)('li', {
                    className: 'ml-3',
                    children: (0, n.jsx)('a', {
                      href: 'https://support.github.com',
                      children: 'Contact GitHub',
                    }),
                  }),
                  (0, n.jsx)('li', {
                    className: 'ml-3',
                    children: (0, n.jsx)('a', {
                      href: 'https://github.com/pricing',
                      children: 'Pricing',
                    }),
                  }),
                  (0, n.jsx)('li', {
                    className: 'ml-3',
                    children: (0, n.jsx)('a', { href: '/developers', children: 'Developer API' }),
                  }),
                  (0, n.jsx)('li', {
                    className: 'ml-3',
                    children: (0, n.jsx)('a', {
                      href: 'https://services.github.com/',
                      children: 'Training',
                    }),
                  }),
                  (0, n.jsx)('li', {
                    className: 'ml-3',
                    children: (0, n.jsx)('a', {
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
    2638: function (e, r, t) {
      'use strict'
      t.d(r, {
        a: function () {
          return s
        },
      })
      var n = t(1163),
        s = function () {
          var e = (0, n.useRouter)().query.versionId || 'free-pro-team@latest'
          return {
            currentVersion: e,
            isEnterprise: e.includes('enterprise'),
            isEnterpriseServer: e.includes('enterprise-server'),
          }
        }
    },
    2167: function (e, r, t) {
      'use strict'
      var n = t(3848),
        s = t(9448)
      r.default = void 0
      var l = s(t(7294)),
        i = t(9414),
        c = t(4651),
        a = t(7426),
        o = {}
      function u(e, r, t, n) {
        if (e && (0, i.isLocalURL)(r)) {
          e.prefetch(r, t, n).catch(function (e) {
            0
          })
          var s = n && 'undefined' !== typeof n.locale ? n.locale : e && e.locale
          o[r + '%' + t + (s ? '%' + s : '')] = !0
        }
      }
      var f = function (e) {
        var r,
          t = !1 !== e.prefetch,
          s = (0, c.useRouter)(),
          f = l.default.useMemo(
            function () {
              var r = (0, i.resolveHref)(s, e.href, !0),
                t = n(r, 2),
                l = t[0],
                c = t[1]
              return { href: l, as: e.as ? (0, i.resolveHref)(s, e.as) : c || l }
            },
            [s, e.href, e.as]
          ),
          d = f.href,
          h = f.as,
          p = e.children,
          m = e.replace,
          x = e.shallow,
          v = e.scroll,
          j = e.locale
        'string' === typeof p && (p = l.default.createElement('a', null, p))
        var b = (r = l.Children.only(p)) && 'object' === typeof r && r.ref,
          g = (0, a.useIntersection)({ rootMargin: '200px' }),
          y = n(g, 2),
          N = y[0],
          w = y[1],
          E = l.default.useCallback(
            function (e) {
              N(e), b && ('function' === typeof b ? b(e) : 'object' === typeof b && (b.current = e))
            },
            [b, N]
          )
        ;(0, l.useEffect)(
          function () {
            var e = w && t && (0, i.isLocalURL)(d),
              r = 'undefined' !== typeof j ? j : s && s.locale,
              n = o[d + '%' + h + (r ? '%' + r : '')]
            e && !n && u(s, d, h, { locale: r })
          },
          [h, d, w, j, t, s]
        )
        var k = {
          ref: E,
          onClick: function (e) {
            r.props && 'function' === typeof r.props.onClick && r.props.onClick(e),
              e.defaultPrevented ||
                (function (e, r, t, n, s, l, c, a) {
                  ;('A' !== e.currentTarget.nodeName ||
                    (!(function (e) {
                      var r = e.currentTarget.target
                      return (
                        (r && '_self' !== r) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      )
                    })(e) &&
                      (0, i.isLocalURL)(t))) &&
                    (e.preventDefault(),
                    null == c && n.indexOf('#') >= 0 && (c = !1),
                    r[s ? 'replace' : 'push'](t, n, { shallow: l, locale: a, scroll: c }))
                })(e, s, d, h, m, x, v, j)
          },
          onMouseEnter: function (e) {
            ;(0, i.isLocalURL)(d) &&
              (r.props && 'function' === typeof r.props.onMouseEnter && r.props.onMouseEnter(e),
              u(s, d, h, { priority: !0 }))
          },
        }
        if (e.passHref || ('a' === r.type && !('href' in r.props))) {
          var _ = 'undefined' !== typeof j ? j : s && s.locale,
            I =
              s &&
              s.isLocaleDomain &&
              (0, i.getDomainLocale)(h, _, s && s.locales, s && s.domainLocales)
          k.href = I || (0, i.addBasePath)((0, i.addLocale)(h, _, s && s.defaultLocale))
        }
        return l.default.cloneElement(r, k)
      }
      r.default = f
    },
    7426: function (e, r, t) {
      'use strict'
      var n = t(3848)
      ;(r.__esModule = !0),
        (r.useIntersection = function (e) {
          var r = e.rootMargin,
            t = e.disabled || !i,
            a = (0, s.useRef)(),
            o = (0, s.useState)(!1),
            u = n(o, 2),
            f = u[0],
            d = u[1],
            h = (0, s.useCallback)(
              function (e) {
                a.current && (a.current(), (a.current = void 0)),
                  t ||
                    f ||
                    (e &&
                      e.tagName &&
                      (a.current = (function (e, r, t) {
                        var n = (function (e) {
                            var r = e.rootMargin || '',
                              t = c.get(r)
                            if (t) return t
                            var n = new Map(),
                              s = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var r = n.get(e.target),
                                    t = e.isIntersecting || e.intersectionRatio > 0
                                  r && t && r(t)
                                })
                              }, e)
                            return c.set(r, (t = { id: r, observer: s, elements: n })), t
                          })(t),
                          s = n.id,
                          l = n.observer,
                          i = n.elements
                        return (
                          i.set(e, r),
                          l.observe(e),
                          function () {
                            i.delete(e),
                              l.unobserve(e),
                              0 === i.size && (l.disconnect(), c.delete(s))
                          }
                        )
                      })(
                        e,
                        function (e) {
                          return e && d(e)
                        },
                        { rootMargin: r }
                      )))
              },
              [t, r, f]
            )
          return (
            (0, s.useEffect)(
              function () {
                if (!i && !f) {
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
      var s = t(7294),
        l = t(3447),
        i = 'undefined' !== typeof IntersectionObserver
      var c = new Map()
    },
    8608: function (e, r, t) {
      'use strict'
      t.r(r),
        t.d(r, {
          default: function () {
            return l
          },
        })
      var n = t(5893),
        s = t(5687)
      function l() {
        return (0, n.jsx)(s.pY, {})
      }
    },
    662: function (e, r, t) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/500',
        function () {
          return t(8608)
        },
      ])
    },
    1664: function (e, r, t) {
      e.exports = t(2167)
    },
    1163: function (e, r, t) {
      e.exports = t(4651)
    },
  },
  function (e) {
    e.O(0, [547, 774, 888, 179], function () {
      return (r = 662), e((e.s = r))
      var r
    })
    var r = e.O()
    _N_E = r
  },
])
