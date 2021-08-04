;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [344],
  {
    4054: function (e, r, t) {
      'use strict'
      t.d(r, {
        O: function () {
          return o
        },
      })
      var n = t(5893),
        a = t(4184),
        i = t.n(a),
        l = t(1163),
        c = t(1013),
        s = t(6359),
        o = function (e) {
          var r = e.variant,
            t = void 0 === r ? 'default' : r,
            a = (0, l.useRouter)(),
            o = '/'.concat(a.locale).concat(a.asPath.split('?')[0]),
            u = (0, c.Hv)().breadcrumbs
          return (0, n.jsx)('nav', {
            'data-testid': 'breadcrumbs',
            className: 'f5',
            'aria-label': 'Breadcrumb',
            children: Object.values(u).map(function (e, r, a) {
              if (!e) return null
              var l = ''.concat(e.documentType, ': ').concat(e.title)
              return [
                e.href
                  ? (0, n.jsx)(
                      s.r,
                      {
                        'data-testid': 'breadcrumb-link',
                        href: e.href,
                        title: l,
                        className: i()(
                          'd-inline-block px-2',
                          'large' === t && 'text-uppercase text-mono',
                          o === e.href && 'color-text-tertiary'
                        ),
                        children: e.title,
                      },
                      l
                    )
                  : (0, n.jsx)(
                      'span',
                      {
                        'data-testid': 'breadcrumb-title',
                        title: l,
                        className: 'px-2',
                        children: e.title,
                      },
                      l
                    ),
                r !== a.length - 1
                  ? (0, n.jsx)('span', { className: 'color-text-tertiary', children: '/' })
                  : null,
              ]
            }),
          })
        }
    },
    7631: function (e, r, t) {
      'use strict'
      t.r(r),
        t.d(r, {
          __N_SSP: function () {
            return s
          },
          default: function () {
            return o
          },
        })
      var n = t(5893),
        a = t(1013),
        i = t(4054),
        l = t(4130),
        c = t(7294),
        s = !0
      function o(e) {
        var r = e.mainContext,
          t = e.graphqlExplorerUrl,
          s = r.page,
          o = r.airGap,
          u = (0, c.useRef)(null)
        return (
          (0, c.useEffect)(function () {
            var e, r
            window.location.search &&
              (null === (e = u.current) ||
                void 0 === e ||
                null === (r = e.contentWindow) ||
                void 0 === r ||
                r.postMessage(window.location.search, t))
          }, []),
          (0, n.jsx)(a.Tr.Provider, {
            value: r,
            children: (0, n.jsxs)(l.H, {
              children: [
                (0, n.jsxs)('div', {
                  className: 'container-xl px-3 px-md-6 my-4 my-lg-4',
                  children: [(0, n.jsx)(i.O, {}), (0, n.jsx)('h1', { children: s.title })],
                }),
                (0, n.jsx)('div', {
                  children: o
                    ? (0, n.jsx)('p', {
                        children: 'GraphQL explorer is not available on this environment.',
                      })
                    : (0, n.jsx)('iframe', {
                        ref: u,
                        style: { height: 715 },
                        className: 'border width-full',
                        scrolling: 'no',
                        src: t,
                        children: (0, n.jsx)('p', {
                          children: 'You must have iframes enabled to use this feature.',
                        }),
                      }),
                }),
              ],
            }),
          })
        )
      }
    },
    4e3: function (e, r, t) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/[versionId]/graphql/overview/explorer',
        function () {
          return t(7631)
        },
      ])
    },
  },
  function (e) {
    e.O(0, [547, 392, 130, 774, 888, 179], function () {
      return (r = 4e3), e((e.s = r))
      var r
    })
    var r = e.O()
    _N_E = r
  },
])
