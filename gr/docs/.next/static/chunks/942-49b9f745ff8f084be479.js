;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [942],
  {
    7484: function (e) {
      e.exports = (function () {
        'use strict'
        var e = 1e3,
          t = 6e4,
          r = 36e5,
          l = 'millisecond',
          n = 'second',
          o = 'minute',
          i = 'hour',
          s = 'day',
          a = 'week',
          c = 'month',
          d = 'quarter',
          u = 'year',
          f = 'date',
          m = 'Invalid Date',
          h =
            /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
          x = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          p = {
            name: 'en',
            weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
            months:
              'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                '_'
              ),
          },
          _ = function (e, t, r) {
            var l = String(e)
            return !l || l.length >= t ? e : '' + Array(t + 1 - l.length).join(r) + e
          },
          g = {
            s: _,
            z: function (e) {
              var t = -e.utcOffset(),
                r = Math.abs(t),
                l = Math.floor(r / 60),
                n = r % 60
              return (t <= 0 ? '+' : '-') + _(l, 2, '0') + ':' + _(n, 2, '0')
            },
            m: function e(t, r) {
              if (t.date() < r.date()) return -e(r, t)
              var l = 12 * (r.year() - t.year()) + (r.month() - t.month()),
                n = t.clone().add(l, c),
                o = r - n < 0,
                i = t.clone().add(l + (o ? -1 : 1), c)
              return +(-(l + (r - n) / (o ? n - i : i - n)) || 0)
            },
            a: function (e) {
              return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
            },
            p: function (e) {
              return (
                { M: c, y: u, w: a, d: s, D: f, h: i, m: o, s: n, ms: l, Q: d }[e] ||
                String(e || '')
                  .toLowerCase()
                  .replace(/s$/, '')
              )
            },
            u: function (e) {
              return void 0 === e
            },
          },
          v = 'en',
          y = {}
        y[v] = p
        var j = function (e) {
            return e instanceof A
          },
          b = function (e, t, r) {
            var l
            if (!e) return v
            if ('string' == typeof e) y[e] && (l = e), t && ((y[e] = t), (l = e))
            else {
              var n = e.name
              ;(y[n] = e), (l = n)
            }
            return !r && l && (v = l), l || (!r && v)
          },
          N = function (e, t) {
            if (j(e)) return e.clone()
            var r = 'object' == typeof t ? t : {}
            return (r.date = e), (r.args = arguments), new A(r)
          },
          L = g
        ;(L.l = b),
          (L.i = j),
          (L.w = function (e, t) {
            return N(e, { locale: t.$L, utc: t.$u, x: t.$x, $offset: t.$offset })
          })
        var A = (function () {
            function p(e) {
              ;(this.$L = b(e.locale, null, !0)), this.parse(e)
            }
            var _ = p.prototype
            return (
              (_.parse = function (e) {
                ;(this.$d = (function (e) {
                  var t = e.date,
                    r = e.utc
                  if (null === t) return new Date(NaN)
                  if (L.u(t)) return new Date()
                  if (t instanceof Date) return new Date(t)
                  if ('string' == typeof t && !/Z$/i.test(t)) {
                    var l = t.match(h)
                    if (l) {
                      var n = l[2] - 1 || 0,
                        o = (l[7] || '0').substring(0, 3)
                      return r
                        ? new Date(Date.UTC(l[1], n, l[3] || 1, l[4] || 0, l[5] || 0, l[6] || 0, o))
                        : new Date(l[1], n, l[3] || 1, l[4] || 0, l[5] || 0, l[6] || 0, o)
                    }
                  }
                  return new Date(t)
                })(e)),
                  (this.$x = e.x || {}),
                  this.init()
              }),
              (_.init = function () {
                var e = this.$d
                ;(this.$y = e.getFullYear()),
                  (this.$M = e.getMonth()),
                  (this.$D = e.getDate()),
                  (this.$W = e.getDay()),
                  (this.$H = e.getHours()),
                  (this.$m = e.getMinutes()),
                  (this.$s = e.getSeconds()),
                  (this.$ms = e.getMilliseconds())
              }),
              (_.$utils = function () {
                return L
              }),
              (_.isValid = function () {
                return !(this.$d.toString() === m)
              }),
              (_.isSame = function (e, t) {
                var r = N(e)
                return this.startOf(t) <= r && r <= this.endOf(t)
              }),
              (_.isAfter = function (e, t) {
                return N(e) < this.startOf(t)
              }),
              (_.isBefore = function (e, t) {
                return this.endOf(t) < N(e)
              }),
              (_.$g = function (e, t, r) {
                return L.u(e) ? this[t] : this.set(r, e)
              }),
              (_.unix = function () {
                return Math.floor(this.valueOf() / 1e3)
              }),
              (_.valueOf = function () {
                return this.$d.getTime()
              }),
              (_.startOf = function (e, t) {
                var r = this,
                  l = !!L.u(t) || t,
                  d = L.p(e),
                  m = function (e, t) {
                    var n = L.w(r.$u ? Date.UTC(r.$y, t, e) : new Date(r.$y, t, e), r)
                    return l ? n : n.endOf(s)
                  },
                  h = function (e, t) {
                    return L.w(
                      r
                        .toDate()
                        [e].apply(r.toDate('s'), (l ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)),
                      r
                    )
                  },
                  x = this.$W,
                  p = this.$M,
                  _ = this.$D,
                  g = 'set' + (this.$u ? 'UTC' : '')
                switch (d) {
                  case u:
                    return l ? m(1, 0) : m(31, 11)
                  case c:
                    return l ? m(1, p) : m(0, p + 1)
                  case a:
                    var v = this.$locale().weekStart || 0,
                      y = (x < v ? x + 7 : x) - v
                    return m(l ? _ - y : _ + (6 - y), p)
                  case s:
                  case f:
                    return h(g + 'Hours', 0)
                  case i:
                    return h(g + 'Minutes', 1)
                  case o:
                    return h(g + 'Seconds', 2)
                  case n:
                    return h(g + 'Milliseconds', 3)
                  default:
                    return this.clone()
                }
              }),
              (_.endOf = function (e) {
                return this.startOf(e, !1)
              }),
              (_.$set = function (e, t) {
                var r,
                  a = L.p(e),
                  d = 'set' + (this.$u ? 'UTC' : ''),
                  m = ((r = {}),
                  (r[s] = d + 'Date'),
                  (r[f] = d + 'Date'),
                  (r[c] = d + 'Month'),
                  (r[u] = d + 'FullYear'),
                  (r[i] = d + 'Hours'),
                  (r[o] = d + 'Minutes'),
                  (r[n] = d + 'Seconds'),
                  (r[l] = d + 'Milliseconds'),
                  r)[a],
                  h = a === s ? this.$D + (t - this.$W) : t
                if (a === c || a === u) {
                  var x = this.clone().set(f, 1)
                  x.$d[m](h), x.init(), (this.$d = x.set(f, Math.min(this.$D, x.daysInMonth())).$d)
                } else m && this.$d[m](h)
                return this.init(), this
              }),
              (_.set = function (e, t) {
                return this.clone().$set(e, t)
              }),
              (_.get = function (e) {
                return this[L.p(e)]()
              }),
              (_.add = function (l, d) {
                var f,
                  m = this
                l = Number(l)
                var h = L.p(d),
                  x = function (e) {
                    var t = N(m)
                    return L.w(t.date(t.date() + Math.round(e * l)), m)
                  }
                if (h === c) return this.set(c, this.$M + l)
                if (h === u) return this.set(u, this.$y + l)
                if (h === s) return x(1)
                if (h === a) return x(7)
                var p = ((f = {}), (f[o] = t), (f[i] = r), (f[n] = e), f)[h] || 1,
                  _ = this.$d.getTime() + l * p
                return L.w(_, this)
              }),
              (_.subtract = function (e, t) {
                return this.add(-1 * e, t)
              }),
              (_.format = function (e) {
                var t = this,
                  r = this.$locale()
                if (!this.isValid()) return r.invalidDate || m
                var l = e || 'YYYY-MM-DDTHH:mm:ssZ',
                  n = L.z(this),
                  o = this.$H,
                  i = this.$m,
                  s = this.$M,
                  a = r.weekdays,
                  c = r.months,
                  d = function (e, r, n, o) {
                    return (e && (e[r] || e(t, l))) || n[r].substr(0, o)
                  },
                  u = function (e) {
                    return L.s(o % 12 || 12, e, '0')
                  },
                  f =
                    r.meridiem ||
                    function (e, t, r) {
                      var l = e < 12 ? 'AM' : 'PM'
                      return r ? l.toLowerCase() : l
                    },
                  h = {
                    YY: String(this.$y).slice(-2),
                    YYYY: this.$y,
                    M: s + 1,
                    MM: L.s(s + 1, 2, '0'),
                    MMM: d(r.monthsShort, s, c, 3),
                    MMMM: d(c, s),
                    D: this.$D,
                    DD: L.s(this.$D, 2, '0'),
                    d: String(this.$W),
                    dd: d(r.weekdaysMin, this.$W, a, 2),
                    ddd: d(r.weekdaysShort, this.$W, a, 3),
                    dddd: a[this.$W],
                    H: String(o),
                    HH: L.s(o, 2, '0'),
                    h: u(1),
                    hh: u(2),
                    a: f(o, i, !0),
                    A: f(o, i, !1),
                    m: String(i),
                    mm: L.s(i, 2, '0'),
                    s: String(this.$s),
                    ss: L.s(this.$s, 2, '0'),
                    SSS: L.s(this.$ms, 3, '0'),
                    Z: n,
                  }
                return l.replace(x, function (e, t) {
                  return t || h[e] || n.replace(':', '')
                })
              }),
              (_.utcOffset = function () {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
              }),
              (_.diff = function (l, f, m) {
                var h,
                  x = L.p(f),
                  p = N(l),
                  _ = (p.utcOffset() - this.utcOffset()) * t,
                  g = this - p,
                  v = L.m(this, p)
                return (
                  (v =
                    ((h = {}),
                    (h[u] = v / 12),
                    (h[c] = v),
                    (h[d] = v / 3),
                    (h[a] = (g - _) / 6048e5),
                    (h[s] = (g - _) / 864e5),
                    (h[i] = g / r),
                    (h[o] = g / t),
                    (h[n] = g / e),
                    h)[x] || g),
                  m ? v : L.a(v)
                )
              }),
              (_.daysInMonth = function () {
                return this.endOf(c).$D
              }),
              (_.$locale = function () {
                return y[this.$L]
              }),
              (_.locale = function (e, t) {
                if (!e) return this.$L
                var r = this.clone(),
                  l = b(e, t, !0)
                return l && (r.$L = l), r
              }),
              (_.clone = function () {
                return L.w(this.$d, this)
              }),
              (_.toDate = function () {
                return new Date(this.valueOf())
              }),
              (_.toJSON = function () {
                return this.isValid() ? this.toISOString() : null
              }),
              (_.toISOString = function () {
                return this.$d.toISOString()
              }),
              (_.toString = function () {
                return this.$d.toUTCString()
              }),
              p
            )
          })(),
          w = A.prototype
        return (
          (N.prototype = w),
          [
            ['$ms', l],
            ['$s', n],
            ['$m', o],
            ['$H', i],
            ['$W', s],
            ['$M', c],
            ['$y', u],
            ['$D', f],
          ].forEach(function (e) {
            w[e[1]] = function (t) {
              return this.$g(t, e[0], e[1])
            }
          }),
          (N.extend = function (e, t) {
            return e.$i || (e(t, A, N), (e.$i = !0)), N
          }),
          (N.locale = b),
          (N.isDayjs = j),
          (N.unix = function (e) {
            return N(1e3 * e)
          }),
          (N.en = y[v]),
          (N.Ls = y),
          (N.p = {}),
          N
        )
      })()
    },
    8674: function (e) {
      e.exports = function (e) {
        return function (t) {
          return null == e ? void 0 : e[t]
        }
      }
    },
    9464: function (e, t, r) {
      var l = r(8674)({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })
      e.exports = l
    },
    7187: function (e, t, r) {
      var l = r(9464),
        n = r(9833),
        o = /[&<>"']/g,
        i = RegExp(o.source)
      e.exports = function (e) {
        return (e = n(e)) && i.test(e) ? e.replace(o, l) : e
      }
    },
    4054: function (e, t, r) {
      'use strict'
      r.d(t, {
        O: function () {
          return c
        },
      })
      var l = r(5893),
        n = r(4184),
        o = r.n(n),
        i = r(1163),
        s = r(1013),
        a = r(6359),
        c = function (e) {
          var t = e.variant,
            r = void 0 === t ? 'default' : t,
            n = (0, i.useRouter)(),
            c = '/'.concat(n.locale).concat(n.asPath.split('?')[0]),
            d = (0, s.Hv)().breadcrumbs
          return (0, l.jsx)('nav', {
            'data-testid': 'breadcrumbs',
            className: 'f5',
            'aria-label': 'Breadcrumb',
            children: Object.values(d).map(function (e, t, n) {
              if (!e) return null
              var i = ''.concat(e.documentType, ': ').concat(e.title)
              return [
                e.href
                  ? (0, l.jsx)(
                      a.r,
                      {
                        'data-testid': 'breadcrumb-link',
                        href: e.href,
                        title: i,
                        className: o()(
                          'd-inline-block px-2',
                          'large' === r && 'text-uppercase text-mono',
                          c === e.href && 'color-text-tertiary'
                        ),
                        children: e.title,
                      },
                      i
                    )
                  : (0, l.jsx)(
                      'span',
                      {
                        'data-testid': 'breadcrumb-title',
                        title: i,
                        className: 'px-2',
                        children: e.title,
                      },
                      i
                    ),
                t !== n.length - 1
                  ? (0, l.jsx)('span', { className: 'color-text-tertiary', children: '/' })
                  : null,
              ]
            }),
          })
        }
    },
    3718: function (e, t, r) {
      'use strict'
      r.d(t, {
        P: function () {
          return n
        },
      })
      var l = r(7294)
      function n(e) {
        var t = e.children
        return l.cloneElement(l.Children.only(t), {
          onClick: function () {
            try {
              document.execCommand('print', !1)
            } catch (e) {
              window.print()
            }
          },
        })
      }
    },
    1541: function (e, t, r) {
      'use strict'
      r.d(t, {
        u: function () {
          return s
        },
      })
      var l = r(5893),
        n = r(5988),
        o = (r(7294), r(4184)),
        i = r.n(o),
        s = function (e) {
          var t = e.as,
            r = e.maxLines,
            o = e.className,
            s = e.children,
            a = t || 'div'
          return (0, l.jsxs)(a, {
            className: n.default.dynamic([['2740265995', [r]]]) + ' ' + (i()('root', o) || ''),
            children: [
              s,
              (0, l.jsx)(n.default, {
                id: '2740265995',
                dynamic: [r],
                children: [
                  '.root.__jsx-style-dynamic-selector{display:-webkit-box;-webkit-line-clamp:'.concat(
                    r,
                    ';-webkit-box-orient:vertical;overflow:hidden;}'
                  ),
                ],
              }),
            ],
          })
        }
    },
    5201: function (e, t, r) {
      'use strict'
      r.d(t, {
        w: function () {
          return u
        },
      })
      var l = r(5893),
        n = r(4184),
        o = r.n(n),
        i = r(7484),
        s = r.n(i),
        a = r(6359),
        c = r(5529),
        d = r(1541),
        u = function (e) {
          var t = e.title,
            r = e.viewAllHref,
            n = e.articles,
            i = e.variant,
            u = void 0 === i ? 'compact' : i,
            f = e.titleVariant,
            m = void 0 === f ? 'default' : f
          return (0, l.jsxs)(l.Fragment, {
            children: [
              t &&
                (0, l.jsxs)('div', {
                  className: 'mb-4 d-flex flex-items-baseline',
                  children: [
                    (0, l.jsx)('h3', {
                      className: o()(
                        'large' === m
                          ? 'f4 text-normal text-mono text-uppercase'
                          : 'f5 text-normal text-mono underline-dashed color-text-secondary'
                      ),
                      children: t,
                    }),
                    r &&
                      (0, l.jsxs)(a.r, {
                        href: r,
                        className: 'ml-4',
                        children: [
                          'View all ',
                          (0, l.jsx)(c.LZ3, { size: 14, className: 'v-align-middle' }),
                        ],
                      }),
                  ],
                }),
              (0, l.jsx)('ul', {
                className: 'list-style-none',
                'data-testid': 'article-list',
                children: n.map(function (e) {
                  return (0,
                  l.jsx)('li', { className: o()('compact' === u && 'border-top'), children: (0, l.jsxs)(a.r, { href: e.href, className: 'link-with-intro Bump-link--hover no-underline d-block py-3', children: [(0, l.jsxs)('h4', { className: 'link-with-intro-title', children: [(0, l.jsx)('span', { dangerouslySetInnerHTML: { __html: e.title } }), (0, l.jsx)('span', { className: 'Bump-link-symbol', children: '\u2192' })] }), !e.hideIntro && e.intro && (0, l.jsx)(d.u, { as: 'p', maxLines: 'spaced' === u ? 6 : 2, className: 'link-with-intro-intro color-text-secondary mb-0 mt-1', children: (0, l.jsx)('span', { dangerouslySetInnerHTML: { __html: e.intro } }) }), e.date && (0, l.jsx)('time', { className: 'tooltipped tooltipped-n color-text-tertiary text-mono mt-1', 'aria-label': s()(e.date).format('LLL'), children: s()(e.date).format('MMMM DD') })] }) }, e.href)
                }),
              }),
            ],
          })
        }
    },
    8942: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          __N_SSP: function () {
            return Ie
          },
          default: function () {
            return Ze
          },
        })
      var l = r(5893),
        n = r(809),
        o = r.n(n),
        i = r(2447)
      var s = r(7547),
        a = ['mac', 'windows', 'linux'],
        c = new Set()
      function d() {
        var e =
          (function () {
            var e = document.querySelector('[data-default-platform]')
            if (e) return e.dataset.defaultPlatform
          })() || (0, s.Z)().os
        e || (e = 'linux'), 'ios' === e && (e = 'mac')
        var t =
          (Array.from(document.querySelectorAll('.extended-markdown'))
            .filter(function (e) {
              return a.some(function (t) {
                return e.classList.contains(t)
              })
            })
            .forEach(function (e) {
              return m(e)
            }),
          Array.from(
            document.querySelectorAll('.platform-mac, .platform-windows, .platform-linux')
          ).forEach(function (e) {
            return m(e)
          }),
          Array.from(c))
        t.includes(e) ||
          (e = a.filter(function (e) {
            return t.includes(e)
          })[0]),
          f(e),
          (function (e) {
            Array.from(document.querySelectorAll('a.platform-switcher')).forEach(function (t) {
              e.includes(t.dataset.platform || '') || (t.style.display = 'none')
            })
          })(t),
          u(e),
          h().forEach(function (e) {
            e.addEventListener('click', function (e) {
              e.preventDefault()
              var t = e.target
              u(t.dataset.platform || ''), f(t.dataset.platform || '')
            })
          })
      }
      function u(e) {
        h().forEach(function (t) {
          t.dataset.platform === e ? t.classList.add('selected') : t.classList.remove('selected')
        })
      }
      function f(e) {
        Array.from(document.querySelectorAll('.extended-markdown'))
          .filter(function (e) {
            return a.some(function (t) {
              return e.classList.contains(t)
            })
          })
          .forEach(function (t) {
            t.style.display = t.classList.contains(e) ? '' : 'none'
          }),
          Array.from(
            document.querySelectorAll('.platform-mac, .platform-windows, .platform-linux')
          ).forEach(function (t) {
            t.style.display = t.classList.contains('platform-' + e) ? '' : 'none'
          })
      }
      function m(e) {
        e.classList.forEach(function (e) {
          var t = e.replace(/platform-/, '')
          a.includes(t) && c.add(t)
        })
      }
      function h() {
        return Array.from(document.querySelectorAll('a.platform-switcher'))
      }
      var x = r(6258)
      function p(e, t) {
        return (function (e, t) {
          var r = e
          if (!r) return Promise.resolve(t())
          var l = r.ownerDocument.documentElement
          function n(e) {
            for (var t = []; e; ) {
              var r = e.getBoundingClientRect(),
                l = r.top,
                n = r.left
              t.push({ element: e, top: l, left: n }), (e = e.parentElement)
            }
            return t
          }
          function o(e) {
            for (var t = 0; t < e.length; t++) {
              var r = e[t]
              if (l.contains(r.element)) return r
            }
          }
          var i = n(r)
          return Promise.resolve(t()).then(function (e) {
            var t = o(i)
            if (t) {
              r = t.element
              var l = t.top,
                n = t.left,
                s = r.getBoundingClientRect(),
                a = s.top,
                c = s.left
              !(function (e, t, r) {
                var l = e.ownerDocument,
                  n = l.defaultView
                function o(e) {
                  return e.offsetParent
                    ? { top: e.scrollTop, left: e.scrollLeft }
                    : { top: n.pageYOffset, left: n.pageXOffset }
                }
                function i(e, t, r) {
                  if (0 === t && 0 === r) return [0, 0]
                  var i = o(e),
                    s = i.top + r,
                    a = i.left + t
                  e === l || e === n || e === l.documentElement || e === l.body
                    ? l.defaultView.scrollTo(a, s)
                    : ((e.scrollTop = s), (e.scrollLeft = a))
                  var c = o(e)
                  return [c.left - i.left, c.top - i.top]
                }
                function s(e) {
                  var t = e
                  if (t.offsetParent && t !== l.body) {
                    for (; t !== l.body; ) {
                      if (!t.parentElement) return
                      t = t.parentElement
                      var r = n.getComputedStyle(t),
                        o = r.position,
                        i = r.overflowY,
                        s = r.overflowX
                      if (
                        'fixed' === o ||
                        'auto' === i ||
                        'auto' === s ||
                        'scroll' === i ||
                        'scroll' === s
                      )
                        break
                    }
                    return t
                  }
                }
                var a = s(e),
                  c = 0,
                  d = 0
                for (; a; ) {
                  var u = i(a, t - c, r - d)
                  if (((c += u[0]), (d += u[1]), c === t && d === r)) break
                  a = s(a)
                }
              })(r, c - n, a - l)
            }
            return e
          })
        })(
          (function (e) {
            if (e.activeElement !== e.body) return e.activeElement
            var t = e.querySelectorAll(':hover'),
              r = t.length
            if (r) return t[r - 1]
          })(e),
          t
        )
      }
      var _ = r(3169),
        g = ['cli', 'desktop', 'webui', 'curl']
      function v() {
        var e = Array.from(document.querySelectorAll('.extended-markdown')).filter(function (e) {
          return g.some(function (t) {
            return e.classList.contains(t)
          })
        })
        if (e.length) {
          var t = e.flatMap(function (e) {
              return Array.from(e.classList).filter(function (e) {
                return g.includes(e)
              })
            }),
            r = (function (e) {
              var t = x.Z.get('toolPreferred')
              if (t && e.includes(t)) return t
              var r = document.querySelector('[data-default-tool]'),
                l = r ? r.dataset.defaultTool : ''
              if (l && e.includes(l)) return l
              return e.includes('webui') ? 'webui' : e.includes('cli') ? 'cli' : e[0]
            })(t)
          j(r, e),
            (function (e) {
              Array.from(document.querySelectorAll('a.tool-switcher')).forEach(function (t) {
                e.includes(t.dataset.tool || '') || (t.style.display = 'none')
              })
            })(t),
            y(r),
            b().forEach(function (t) {
              t.addEventListener('click', function (t) {
                t.preventDefault()
                var r = t.target
                y(r.dataset.tool || ''),
                  p(document, function () {
                    j(r.dataset.tool || '', e)
                  }),
                  x.Z.set('toolPreferred', r.dataset.tool || '', {
                    sameSite: 'strict',
                    secure: !0,
                  }),
                  (0, _.qP)({
                    type: _.tw.preference,
                    preference_name: 'application',
                    preference_value: r.dataset.tool,
                  })
              })
            })
        }
      }
      function y(e) {
        b().forEach(function (t) {
          t.dataset.tool === e ? t.classList.add('selected') : t.classList.remove('selected')
        })
      }
      function j(e, t) {
        t.filter(function (e) {
          return g.some(function (t) {
            return e.classList.contains(t)
          })
        }).forEach(function (t) {
          t.style.display = t.classList.contains(e) ? '' : 'none'
        })
      }
      function b() {
        return Array.from(document.querySelectorAll('a.tool-switcher'))
      }
      var N = r(7187),
        L = r.n(N),
        A = /[\S]{18,}/g,
        w = /([a-z])([A-Z])/g,
        k = /([\w:]{12}[^_]*?)_/g,
        G = /([/\\])/g
      var S = r(1013),
        $ = r(7294)
      r(8718)
      var M = (0, $.createContext)(null),
        T = function () {
          var e = (0, $.useContext)(M)
          if (!e)
            throw new Error(
              '"useProductLandingContext" may only be used inside "ProductLandingContext.Provider"'
            )
          return e
        }
      var P = (0, $.createContext)(null),
        C = function () {
          var e = (0, $.useContext)(P)
          if (!e)
            throw new Error(
              '"useProductSubLandingContext" may only be used inside "ProductSubLandingContext.Provider"'
            )
          return e
        },
        E = (0, $.createContext)(null),
        H = r(4184),
        D = r.n(H),
        O = r(4130),
        I = r(4054),
        Z = r(9163),
        U = r(1163),
        q = r(9433),
        B = r(6359),
        Y = r(2638),
        R = r(8558),
        z = function () {
          var e = (0, U.useRouter)(),
            t = (0, Y.a)().currentVersion,
            r = (0, S.Hv)(),
            n = r.allVersions,
            o = r.page,
            i = r.enterpriseServerVersions,
            s = (0, R.$)('pages').t
          return o.permalinks && o.permalinks.length <= 1
            ? null
            : (0, l.jsxs)(W, {
                'data-testid': 'article-version-picker',
                children: [
                  (0, l.jsxs)('summary', {
                    className: 'f4 h5-mktg btn-outline-mktg btn-mktg p-2',
                    children: [
                      (0, l.jsx)('span', {
                        className: 'd-md-none d-xl-inline-block',
                        children: s('article_version'),
                      }),
                      ' ',
                      n[t].versionTitle,
                      (0, l.jsx)(q.Z.Caret, {}),
                    ],
                  }),
                  (0, l.jsxs)(q.Z.Menu, {
                    direction: 'sw',
                    children: [
                      (o.permalinks || []).map(function (e) {
                        return (0,
                        l.jsx)(q.Z.Item, { children: (0, l.jsx)(B.r, { href: e.href, children: e.pageVersionTitle }) }, e.href)
                      }),
                      (0, l.jsx)('div', {
                        className: 'pb-1',
                        children: (0, l.jsx)(B.r, {
                          href: '/'.concat(e.locale, '/').concat(i[0], '/admin/all-releases'),
                          className: 'f6 no-underline color-text-tertiary pl-3 pr-2 no-wrap',
                          children: 'See all Enterprise releases',
                        }),
                      }),
                    ],
                  }),
                ],
              })
        },
        W = (0, Z.ZP)(q.Z).withConfig({
          displayName: 'ArticleVersionPicker___StyledDropdown',
          componentId: 'sc-5dcjuc-0',
        })(['ul{width:unset;}']),
        V = function () {
          return (0, l.jsxs)('div', {
            className: 'd-lg-flex flex-justify-between',
            children: [
              (0, l.jsx)('div', {
                className: 'd-block d-lg-none mb-2',
                children: (0, l.jsx)(z, {}),
              }),
              (0, l.jsx)('div', {
                className: 'd-flex flex-items-center',
                children: (0, l.jsx)(I.O, {}),
              }),
              (0, l.jsx)('div', { className: 'd-none d-lg-block', children: (0, l.jsx)(z, {}) }),
            ],
          })
        },
        F = r(1397),
        J = r(3205)
      function X() {
        return (X =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t]
              for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l])
            }
            return e
          }).apply(this, arguments)
      }
      const K = Z.ZP.span.withConfig({
        displayName: 'Tooltip__TooltipBase',
        componentId: 'kp39nc-0',
      })(
        [
          'position:relative;&::before{position:absolute;z-index:1000001;display:none;width:0px;height:0px;color:',
          ";pointer-events:none;content:'';border:6px solid transparent;opacity:0;}&::after{position:absolute;z-index:1000000;display:none;padding:0.5em 0.75em;font:normal normal 11px/1.5 ",
          ';-webkit-font-smoothing:subpixel-antialiased;color:',
          ';text-align:center;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-wrap:break-word;white-space:pre;pointer-events:none;content:attr(aria-label);background:',
          ';border-radius:',
          ';opacity:0;}@keyframes tooltip-appear{from{opacity:0;}to{opacity:1;}}&:hover,&:active,&:focus{&::before,&::after{display:inline-block;text-decoration:none;animation-name:tooltip-appear;animation-duration:0.1s;animation-fill-mode:forwards;animation-timing-function:ease-in;animation-delay:0.4s;}}&.tooltipped-no-delay:hover,&.tooltipped-no-delay:active,&.tooltipped-no-delay:focus{&::before,&::after{animation-delay:0s;}}&.tooltipped-multiline:hover,&.tooltipped-multiline:active,&.tooltipped-multiline:focus{&::after{display:table-cell;}}&.tooltipped-s,&.tooltipped-se,&.tooltipped-sw{&::after{top:100%;right:50%;margin-top:6px;}&::before{top:auto;right:50%;bottom:-7px;margin-right:-6px;border-bottom-color:',
          ';}}&.tooltipped-se{&::after{right:auto;left:50%;margin-left:-',
          ';}}&.tooltipped-sw::after{margin-right:-',
          ';}&.tooltipped-n,&.tooltipped-ne,&.tooltipped-nw{&::after{right:50%;bottom:100%;margin-bottom:6px;}&::before{top:-7px;right:50%;bottom:auto;margin-right:-6px;border-top-color:',
          ';}}&.tooltipped-ne{&::after{right:auto;left:50%;margin-left:-',
          ';}}&.tooltipped-nw::after{margin-right:-',
          ';}&.tooltipped-s::after,&.tooltipped-n::after{transform:translateX(50%);}&.tooltipped-w{&::after{right:100%;bottom:50%;margin-right:6px;transform:translateY(50%);}&::before{top:50%;bottom:50%;left:-7px;margin-top:-6px;border-left-color:',
          ';}}&.tooltipped-e{&::after{bottom:50%;left:100%;margin-left:6px;transform:translateY(50%);}&::before{top:50%;right:-7px;bottom:50%;margin-top:-6px;border-right-color:',
          ';}}&.tooltipped-multiline{&::after{width:max-content;max-width:250px;word-wrap:break-word;white-space:pre-line;border-collapse:separate;}&.tooltipped-s::after,&.tooltipped-n::after{right:auto;left:50%;transform:translateX(-50%);}&.tooltipped-w::after,&.tooltipped-e::after{right:100%;}}&.tooltipped-align-right-2::after{right:0;margin-right:0;}&.tooltipped-align-right-2::before{right:15px;}&.tooltipped-align-left-2::after{left:0;margin-left:0;}&.tooltipped-align-left-2::before{left:10px;}',
          ';',
          ';',
        ],
        (0, F.U2)('colors.tooltip.bg'),
        (0, F.U2)('fonts.normal'),
        (0, F.U2)('colors.tooltip.text'),
        (0, F.U2)('colors.tooltip.bg'),
        (0, F.U2)('radii.1'),
        (0, F.U2)('colors.tooltip.bg'),
        (0, F.U2)('space.3'),
        (0, F.U2)('space.3'),
        (0, F.U2)('colors.tooltip.bg'),
        (0, F.U2)('space.3'),
        (0, F.U2)('space.3'),
        (0, F.U2)('colors.tooltip.bg'),
        (0, F.U2)('colors.tooltip.bg'),
        F.CW,
        J.Z
      )
      function Q({
        direction: e = 'n',
        children: t,
        className: r,
        text: l,
        noDelay: n,
        align: o,
        wrap: i,
        ...s
      }) {
        const a = D()(
          r,
          `tooltipped-${e}`,
          o && `tooltipped-align-${o}-2`,
          n && 'tooltipped-no-delay',
          i && 'tooltipped-multiline'
        )
        return $.createElement(K, X({ role: 'tooltip', 'aria-label': l }, s, { className: a }), t)
      }
      ;(Q.displayName = 'Tooltip'),
        (Q.alignments = ['left', 'right']),
        (Q.directions = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'])
      var ee = Q,
        te = function () {
          return (0, l.jsx)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            height: 18,
            width: 18,
            fill: 'none',
            viewBox: '0 0 24 24',
            stroke: 'currentColor',
            children: (0, l.jsx)('path', {
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: 2,
              d: 'M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z',
            }),
          })
        },
        re = r(3718),
        le = function (e) {
          var t = e.children
          return (0, l.jsxs)('div', {
            className: 'd-flex flex-items-baseline flex-justify-between',
            children: [
              (0, l.jsx)('h1', { className: 'my-4 border-bottom-0', children: t }),
              (0, l.jsx)('div', {
                className: 'd-none d-lg-block ml-2',
                children: (0, l.jsx)(ee, {
                  'aria-label': 'Print this article',
                  noDelay: !0,
                  direction: 'n',
                  children: (0, l.jsx)(re.P, {
                    children: (0, l.jsx)('button', {
                      className: 'btn-link Link--muted',
                      children: (0, l.jsx)(te, {}),
                    }),
                  }),
                }),
              }),
            ],
          })
        },
        ne = r(5529)
      function oe(e) {
        var t = e.track,
          r = (0, R.$)('learning_track_nav').t,
          n = t.prevGuide,
          o = t.nextGuide,
          i = t.trackName
        return (0, l.jsxs)('div', {
          className:
            'py-3 px-4 rounded color-bg-primary border-gradient--purple-pink d-flex flex-justify-between learning-track-nav',
          children: [
            (0, l.jsx)('span', {
              className: 'd-flex flex-column',
              children:
                n &&
                (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)('span', {
                      className: 'f6 color-text-secondary',
                      children: r('prevGuide'),
                    }),
                    (0, l.jsx)('a', {
                      href: ''.concat(n.href, '?learn=').concat(i),
                      className: 'text-bold color-text-secondary',
                      children: n.title,
                    }),
                  ],
                }),
            }),
            (0, l.jsx)('span', {
              className: 'd-flex flex-column flex-items-end',
              children:
                o &&
                (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)('span', {
                      className: 'f6 color-text-secondary',
                      children: r('nextGuide'),
                    }),
                    (0, l.jsx)('a', {
                      href: ''.concat(o.href, '?learn=').concat(i),
                      className: 'text-bold color-text-secondary text-right f4',
                      children: o.title,
                    }),
                  ],
                }),
            }),
          ],
        })
      }
      var ie = function (e) {
          var t = e.children
          return (0, l.jsx)('div', {
            id: 'article-contents',
            className: 'markdown-body',
            dangerouslySetInnerHTML: { __html: t },
          })
        },
        se = r(7570),
        ae = r.n(se),
        ce = function (e) {
          var t = e.head,
            r = e.toc,
            n = e.children,
            o = e.className
          return (0, l.jsxs)('div', {
            className: D()(ae().container, o),
            children: [
              t && (0, l.jsx)('div', { className: ae().head, children: t }),
              r &&
                (0, l.jsx)('div', {
                  className: D()(
                    ae().sidebar,
                    'border-bottom border-xl-0 pb-4 mb-5 pb-xl-0 mb-xl-0'
                  ),
                  children: (0, l.jsx)('div', { className: ae().sidebarContent, children: r }),
                }),
              (0, l.jsx)('div', { className: ae().content, children: n }),
            ],
          })
        },
        de = function () {
          var e = (function () {
              var e = (0, $.useContext)(E)
              if (!e)
                throw new Error(
                  '"useArticleContext" may only be used inside "ArticleContext.Provider"'
                )
              return e
            })(),
            t = e.title,
            r = e.intro,
            n = e.renderedPage,
            o = e.contributor,
            i = e.permissions,
            s = e.includesPlatformSpecificContent,
            a = e.defaultPlatform,
            c = e.product,
            d = e.miniTocItems,
            u = e.currentLearningTrack,
            f = (0, R.$)('pages').t
          return (0, l.jsx)(O.H, {
            children: (0, l.jsxs)('div', {
              className: 'container-xl px-3 px-md-6 my-4 my-lg-4',
              children: [
                (0, l.jsx)(V, {}),
                (0, l.jsx)(ce, {
                  className: 'mt-7',
                  head: (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(le, { children: t }),
                      o &&
                        (0, l.jsx)('div', {
                          className:
                            'contributor-callout border rounded-1 mb-4 p-3 color-border-info color-bg-info f5',
                          children: (0, l.jsxs)('p', {
                            children: [
                              (0, l.jsx)('span', {
                                className: 'mr-2',
                                children: (0, l.jsx)(ne.szr, {}),
                              }),
                              f('contributor_callout'),
                              ' ',
                              (0, l.jsx)('a', { href: o.URL, children: o.name }),
                              '.',
                            ],
                          }),
                        }),
                      r &&
                        (0, l.jsx)('div', {
                          className: 'lead-mktg',
                          dangerouslySetInnerHTML: { __html: r },
                        }),
                      i &&
                        (0, l.jsx)('div', {
                          className: 'permissions-statement',
                          dangerouslySetInnerHTML: { __html: i },
                        }),
                      s &&
                        (0, l.jsx)('nav', {
                          className: 'UnderlineNav my-3',
                          'data-default-platform': a || void 0,
                          children: (0, l.jsxs)('div', {
                            className: 'UnderlineNav-body',
                            children: [
                              (0, l.jsx)('a', {
                                href: '#',
                                className: 'UnderlineNav-item platform-switcher',
                                'data-platform': 'mac',
                                children: 'Mac',
                              }),
                              (0, l.jsx)('a', {
                                href: '#',
                                className: 'UnderlineNav-item platform-switcher',
                                'data-platform': 'windows',
                                children: 'Windows',
                              }),
                              (0, l.jsx)('a', {
                                href: '#',
                                className: 'UnderlineNav-item platform-switcher',
                                'data-platform': 'linux',
                                children: 'Linux',
                              }),
                            ],
                          }),
                        }),
                      c &&
                        (0, l.jsx)('div', {
                          className:
                            'product-callout border rounded-1 mb-4 p-3 color-border-success color-bg-success',
                          dangerouslySetInnerHTML: { __html: c },
                        }),
                    ],
                  }),
                  toc:
                    d.length > 1 &&
                    (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)('h2', {
                          id: 'in-this-article',
                          className: 'f5 mb-2',
                          children: (0, l.jsx)('a', {
                            className: 'Link--primary',
                            href: '#in-this-article',
                            children: f('miniToc'),
                          }),
                        }),
                        (0, l.jsx)('ul', {
                          className: 'list-style-none pl-0 f5 mb-0',
                          children: d.map(function (e) {
                            return (0,
                            l.jsx)('li', { className: D()('ml-'.concat(3 * e.indentationLevel), e.platform, 'mb-2 lh-condensed'), dangerouslySetInnerHTML: { __html: e.contents } }, e.contents)
                          }),
                        }),
                      ],
                    }),
                  children: (0, l.jsx)(ie, { children: n }),
                }),
                null !== u && void 0 !== u && u.trackName
                  ? (0, l.jsx)('div', { className: 'mt-4', children: (0, l.jsx)(oe, { track: u }) })
                  : null,
              ],
            }),
          })
        },
        ue = r(9227),
        fe = function () {
          var e = (0, S.Hv)().airGap,
            t = T(),
            r = t.product_video,
            n = t.shortTitle,
            o = t.beta_product,
            i = t.intro,
            s = t.introLinks,
            a = (0, R.$)('product_landing').t,
            c = (0, $.useState)(!1),
            d = c[0],
            u = c[1]
          return (
            (0, $.useEffect)(function () {
              u(!0)
            }, []),
            (0, l.jsxs)('header', {
              className: 'd-lg-flex gutter-lg mb-6',
              children: [
                (0, l.jsxs)('div', {
                  className: D()(r && 'col-12 col-lg-6 mb-3 mb-lg-0'),
                  children: [
                    (0, l.jsx)('span', {
                      className: 'text-mono color-text-secondary',
                      children: 'Product',
                    }),
                    (0, l.jsxs)('h1', {
                      className: 'mb-3 font-mktg',
                      children: [
                        n,
                        ' ',
                        o &&
                          (0, l.jsx)('span', {
                            className: 'Label Label--success v-align-middle',
                            children: 'Beta',
                          }),
                      ],
                    }),
                    (0, l.jsx)('div', {
                      className: 'lead-mktg color-text-secondary',
                      dangerouslySetInnerHTML: { __html: i },
                    }),
                    s &&
                      Object.entries(s)
                        .filter(function (e) {
                          var t = (0, ue.Z)(e, 2),
                            r = t[0]
                          return t[1] && !r.includes('raw')
                        })
                        .map(function (e, t) {
                          var r = (0, ue.Z)(e, 2),
                            n = r[0],
                            o = r[1]
                          return o
                            ? (0, l.jsx)(
                                me,
                                {
                                  href: o,
                                  className: D()(
                                    'btn-mktg bt-large f4 mt-3 mr-3',
                                    0 !== t && 'btn-outline-mktg'
                                  ),
                                  children: a(n),
                                },
                                o
                              )
                            : null
                        }),
                  ],
                }),
                r &&
                  (0, l.jsx)('div', {
                    className: 'col-12 col-lg-6',
                    children: (0, l.jsx)('div', {
                      className: 'position-relative',
                      style: { paddingBottom: '56.25%' },
                      children:
                        !e &&
                        (0, l.jsx)('iframe', {
                          title: ''.concat(n, ' Video'),
                          className:
                            'top-0 left-0 position-absolute color-shadow-large rounded-1 width-full height-full',
                          src: d ? r : '',
                          frameBorder: '0',
                          allow:
                            'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
                          allowFullScreen: !0,
                        }),
                    }),
                  }),
              ],
            })
          )
        },
        me = function (e) {
          var t = e.href,
            r = e.children,
            n = e.className,
            o = (0, U.useRouter)(),
            i = (0, Y.a)().currentVersion,
            s = o.locale || 'en',
            a = '/'
              .concat(s)
              .concat('free-pro-team@latest' !== i ? '/'.concat(i) : '')
              .concat(t)
          return (0, l.jsx)(B.r, { href: a, className: n, children: r })
        },
        he = r(5201),
        xe = function () {
          var e = T(),
            t = e.featuredArticles,
            r = void 0 === t ? [] : t,
            n = e.whatsNewChangelog,
            o = e.changelogUrl,
            i = n && n.length > 0,
            s = (0, R.$)('toc').t
          return (0, l.jsxs)('div', {
            className: 'd-lg-flex gutter my-6 py-6',
            children: [
              r.map(function (e, t) {
                return (0,
                l.jsx)('div', { className: D()('col-12 mb-4 mb-lg-0', i ? 'col-lg-4' : 'col-lg-6'), children: (0, l.jsx)(he.w, { title: e.label, titleVariant: 'large', viewAllHref: e.viewAllHref, articles: e.articles }) }, e.label + t)
              }),
              i &&
                (0, l.jsx)('div', {
                  className: D()('col-12 mb-4 mb-lg-0 col-lg-4'),
                  children: (0, l.jsx)(he.w, {
                    title: s('whats_new'),
                    titleVariant: 'large',
                    viewAllHref: o,
                    articles: (n || []).map(function (e) {
                      return { title: e.title, date: e.date, href: e.href }
                    }),
                  }),
                }),
            ],
          })
        },
        pe = function (e) {
          var t = e.guide,
            r = t.authors && t.authors.length > 0 ? t.authors : ['GitHub'],
            n = '@'.concat(r.join(', @'))
          return (0, l.jsx)('div', {
            className: 'col-lg-4 col-12 mb-4',
            children: (0, l.jsxs)('a', {
              className:
                'Box color-shadow-medium height-full d-block hover-shadow-large no-underline color-text-primary p-5',
              href: t.href,
              children: [
                (0, l.jsx)('h2', { dangerouslySetInnerHTML: { __html: t.title } }),
                (0, l.jsx)('p', { className: 'mt-2 mb-4 color-text-tertiary', children: t.intro }),
                (0, l.jsxs)('footer', {
                  className: 'd-flex',
                  children: [
                    (0, l.jsx)('div', {
                      className: 'mr-1',
                      children:
                        1 === r.length
                          ? (0, l.jsx)('img', {
                              className: 'avatar avatar-2 circle mr-1',
                              src: 'https://github.com/'.concat(r[0], '.png'),
                              alt: '@'.concat(r[0]),
                            })
                          : (0, l.jsx)('div', {
                              className: 'AvatarStack AvatarStack--three-plus',
                              children: (0, l.jsx)('div', {
                                className:
                                  'AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1',
                                'aria-label': n,
                                children: r.map(function (e) {
                                  return (0,
                                  l.jsx)('img', { className: 'avatar circle', alt: '@'.concat(e), src: 'https://github.com/'.concat(e, '.png') })
                                }),
                              }),
                            }),
                    }),
                    (0, l.jsx)('div', { children: n }),
                  ],
                }),
              ],
            }),
          })
        },
        _e = function () {
          var e = (0, U.useRouter)(),
            t = (0, S.Hv)().currentCategory,
            r = T(),
            n = r.featuredLinks,
            o = r.hasGuidesPage,
            i = '/'.concat(e.locale).concat(e.asPath.split('?')[0])
          return n.guideCards
            ? (0, l.jsxs)('div', {
                children: [
                  (0, l.jsx)('div', {
                    className: 'd-lg-flex gutter-lg flex-items-stretch',
                    children: (n.guideCards || []).map(function (e) {
                      return (0, l.jsx)(pe, { guide: e }, e.href)
                    }),
                  }),
                  !t &&
                    o &&
                    (0, l.jsxs)(B.r, {
                      href: ''.concat(i, '/guides'),
                      className: 'btn btn-outline float-right',
                      children: ['Explore guides ', (0, l.jsx)(ne.LZ3, {})],
                    }),
                ],
              })
            : null
        },
        ge = function (e) {
          var t = e.user,
            r = e.href
          return (0, l.jsxs)('a', {
            className:
              'Box d-flex height-full color-shadow-medium hover-shadow-large no-underline color-text-primary p-4',
            href: r || 'https://github.com/'.concat(t.username),
            children: [
              (0, l.jsx)('div', {
                className: 'flex-shrink-0 mr-3',
                children: (0, l.jsx)('img', {
                  src: 'https://github.com/'.concat(t.username, '.png'),
                  alt: t.username,
                  className: 'avatar avatar-8 circle',
                }),
              }),
              (0, l.jsxs)('div', {
                className: 'flex-auto',
                children: [
                  (0, l.jsx)('h4', { children: t.username }),
                  (0, l.jsx)('p', {
                    className: 'mt-1 color-text-tertiary',
                    children: t.description,
                  }),
                ],
              }),
            ],
          })
        },
        ve = function () {
          var e = T().productUserExamples,
            t = (0, R.$)('product_landing').t
          return e
            ? (0, l.jsxs)('div', {
                children: [
                  (0, l.jsx)('div', {
                    className: 'd-flex flex-wrap gutter',
                    children: e.slice(0, 6).map(function (e) {
                      return (0,
                      l.jsx)('div', { className: 'col-12 col-xl-4 col-lg-6 mb-4', children: (0, l.jsx)(ge, { href: 'https://github.com/sponsors/'.concat(e.username), user: e }) }, e.username)
                    }),
                  }),
                  (0, l.jsxs)(B.r, {
                    href: 'https://github.com/sponsors/community',
                    className: 'btn btn-outline float-right',
                    children: [t('explore_people_and_projects'), ' ', (0, l.jsx)(ne.LZ3, {})],
                  }),
                ],
              })
            : null
        },
        ye = function (e) {
          var t = e.repo,
            r = e.href
          return (0, l.jsxs)('a', {
            className:
              'Box d-flex height-full color-shadow-medium hover-shadow-large no-underline color-text-primary p-4',
            href: r || 'https://github.com/'.concat(t.repo),
            children: [
              (0, l.jsx)('div', {
                className: 'flex-shrink-0 mr-3',
                children: (0, l.jsx)('img', {
                  src: 'https://github.com/'.concat(t.repo.split('/')[0], '.png'),
                  alt: t.repo,
                  className: 'avatar avatar-8',
                }),
              }),
              (0, l.jsxs)('div', {
                className: 'flex-auto',
                children: [
                  (0, l.jsx)('h4', { children: t.repo }),
                  (0, l.jsx)('p', {
                    className: 'mt-1 color-text-tertiary',
                    children: t.description,
                  }),
                ],
              }),
            ],
          })
        },
        je = function () {
          var e = T().productCommunityExamples,
            t = (0, R.$)('product_landing').t,
            r = (0, $.useState)(6),
            n = r[0],
            o = r[1]
          return e
            ? (0, l.jsxs)('div', {
                children: [
                  (0, l.jsx)('div', {
                    className: 'd-flex flex-wrap gutter',
                    children: e.slice(0, n).map(function (e) {
                      return (0,
                      l.jsx)('div', { className: 'col-12 col-xl-4 col-lg-6 mb-4', children: (0, l.jsx)(ye, { repo: e }) }, e.repo)
                    }),
                  }),
                  n < e.length &&
                    (0, l.jsxs)('button', {
                      className: 'btn btn-outline float-right',
                      onClick: function () {
                        return o(e.length)
                      },
                      children: [t('show_more'), ' ', (0, l.jsx)(ne.LZ3, {})],
                    }),
                ],
              })
            : null
        },
        be = r(1541),
        Ne = function (e) {
          var t = e.example
          return (0, l.jsxs)('a', {
            className:
              'Box d-flex flex-column flex-justify-between height-full color-shadow-medium hover-shadow-large no-underline color-text-primary',
            'data-testid': 'code-example-card',
            href: 'https://github.com/'.concat(t.href),
            children: [
              (0, l.jsxs)('div', {
                className: 'p-4',
                children: [
                  (0, l.jsx)('h4', { dangerouslySetInnerHTML: { __html: t.title } }),
                  (0, l.jsx)('p', {
                    className: 'mt-2 mb-4 color-text-tertiary',
                    children: t.description,
                  }),
                  (0, l.jsx)('div', {
                    className: 'd-flex flex-wrap',
                    children: t.tags.map(function (e) {
                      return (0,
                      l.jsx)('span', { className: 'IssueLabel color-text-inverse color-bg-info-inverse mr-2 mb-1', children: e }, e)
                    }),
                  }),
                ],
              }),
              (0, l.jsxs)('footer', {
                className: 'border-top p-4 color-text-secondary d-flex flex-items-center',
                children: [
                  (0, l.jsx)(ne.H0r, { className: 'flex-shrink-0' }),
                  (0, l.jsx)(be.u, {
                    as: 'span',
                    maxLines: 1,
                    className: 'ml-2 text-mono text-small color-text-link line-break-anywhere',
                    children: t.href,
                  }),
                ],
              }),
            ],
          })
        },
        Le = function () {
          var e = T().productCodeExamples,
            t = (0, R.$)('product_landing').t,
            r = (0, $.useState)(6),
            n = r[0],
            o = r[1],
            i = (0, $.useState)(''),
            s = i[0],
            a = i[1],
            c = !!s,
            d = []
          if (c) {
            var u = new RegExp(s, 'i')
            d = e.filter(function (e) {
              var t = ''.concat(e.tags.join(' '), ' ').concat(e.title, ' ').concat(e.description)
              return u.test(t)
            })
          }
          return (0, l.jsxs)('div', {
            children: [
              (0, l.jsx)('div', {
                className: 'pr-lg-3 mb-5 mt-3',
                children: (0, l.jsx)('input', {
                  'data-testid': 'code-examples-input',
                  className: 'input-lg py-2 px-3 col-12 col-lg-8 form-control',
                  placeholder: t('search_code_examples'),
                  type: 'search',
                  autoComplete: 'off',
                  'aria-label': t('search_code_examples'),
                  onChange: function (e) {
                    a(e.target.value), o(6)
                  },
                }),
              }),
              (0, l.jsx)('div', {
                className: 'd-flex flex-wrap gutter',
                children: (c ? d : e.slice(0, n)).map(function (e) {
                  return (0,
                  l.jsx)('div', { className: 'col-12 col-xl-4 col-lg-6 mb-4', children: (0, l.jsx)(Ne, { example: e }) }, e.href)
                }),
              }),
              n < e.length &&
                !c &&
                (0, l.jsxs)('button', {
                  'data-testid': 'code-examples-show-more',
                  className: 'btn btn-outline float-right',
                  onClick: function () {
                    return o(n + 6)
                  },
                  children: [t('show_more'), ' ', (0, l.jsx)(ne.LZ3, {})],
                }),
              c &&
                0 === d.length &&
                (0, l.jsxs)('div', {
                  'data-testid': 'code-examples-no-results',
                  className: 'py-4 text-center color-text-secondary font-mktg',
                  children: [
                    (0, l.jsxs)('div', {
                      className: 'mb-3',
                      children: [(0, l.jsx)(ne.W1M, { size: 24 }), ' '],
                    }),
                    (0, l.jsxs)('h3', {
                      className: 'text-normal',
                      children: [t('sorry'), ' ', (0, l.jsx)('strong', { children: s })],
                    }),
                    (0, l.jsxs)('p', {
                      className: 'my-3 f4',
                      children: [t('no_example'), ' ', (0, l.jsx)('br', {}), ' ', t('try_another')],
                    }),
                    (0, l.jsxs)(B.r, {
                      href: 'https://github.com/github/docs/blob/main/data/variables/actions_code_examples.yml',
                      children: [t('learn'), ' ', (0, l.jsx)(ne.LZ3, {})],
                    }),
                  ],
                }),
            ],
          })
        },
        Ae = function (e) {
          var t = e.title,
            r = e.children,
            n = e.className,
            o = e.sectionLink,
            i = e.description
          return (0, l.jsxs)('div', {
            className: D()('container-xl px-3 px-md-6', n),
            id: o,
            children: [
              t &&
                (0, l.jsx)('h2', {
                  className: D()('font-mktg h1 color-text-primary', i ? 'mb-4' : 'mb-3'),
                  children: o
                    ? (0, l.jsx)('a', {
                        className: 'color-unset',
                        href: '#'.concat(o),
                        children: t,
                      })
                    : t,
                }),
              i &&
                (0, l.jsx)('div', {
                  className: 'lead-mktg color-text-secondary f4 description-text',
                  dangerouslySetInnerHTML: { __html: i },
                }),
              r,
            ],
          })
        },
        we = function () {
          var e = (0, S.Hv)().currentProductTree
          return e
            ? (0, l.jsx)('div', {
                className: 'd-flex gutter flex-wrap',
                'data-testid': 'product-articles-list',
                children: e.childPages.map(function (e, t) {
                  return 'article' === e.page.documentType
                    ? null
                    : (0, l.jsx)(ke, { treeNode: e }, e.href + t)
                }),
              })
            : null
        },
        ke = function (e) {
          var t = e.treeNode,
            r = (0, $.useState)(!1),
            n = r[0],
            o = r[1]
          return (0, l.jsxs)('div', {
            className: 'col-12 col-lg-4 mb-6 height-full',
            children: [
              (0, l.jsx)('h4', {
                className: 'mb-3',
                children: (0, l.jsx)(B.r, {
                  className: 'color-unset',
                  href: t.href,
                  children: t.renderedFullTitle,
                }),
              }),
              (0, l.jsx)('ul', {
                className: 'list-style-none',
                children: t.childPages.map(function (e, r) {
                  return 'mapTopic' === t.childPages[0].page.documentType && e.page.hidden
                    ? null
                    : (0, l.jsxs)(
                        'li',
                        {
                          className: D()('mb-3', !n && r >= 10 ? 'd-none' : null),
                          children: [
                            (0, l.jsx)(B.r, { href: e.href, children: e.page.title }),
                            'mapTopic' === e.page.documentType
                              ? (0, l.jsxs)('small', {
                                  className: 'color-text-secondary d-inline-block',
                                  children: ['\xa0\u2022 ', e.childPages.length, ' articles'],
                                })
                              : null,
                          ],
                        },
                        e.href + r
                      )
                }),
              }),
              !n &&
                t.childPages.length > 10 &&
                (0, l.jsxs)('button', {
                  onClick: function () {
                    return o(!0)
                  },
                  className: 'btn-link Link--secondary',
                  children: [
                    'Show ',
                    t.childPages.length - 10,
                    ' more',
                    ' ',
                    (0, l.jsx)(ne.v4q, { className: 'v-align-text-bottom' }),
                  ],
                }),
            ],
          })
        }
      function Ge() {
        var e = (0, R.$)('product_landing').t,
          t = (0, U.useRouter)(),
          r = (0, S.Hv)(),
          n = r.enterpriseServerReleases,
          o = r.allVersions,
          i = T().releases,
          s = t.asPath.split('?')[0]
        return (0, l.jsxs)('div', {
          children: [
            (0, l.jsx)('div', {
              className: 'd-lg-flex gutter-lg flex-items-stretch',
              children: i.map(function (r) {
                var i = r.version
                if (!n.supported.includes(i)) return null
                var s = 'enterprise-server@'.concat(i),
                  a = r.patches[0],
                  c = 'enterprise-server@'.concat(r.firstPreviousRelease),
                  d = 'enterprise-server@'.concat(r.secondPreviousRelease)
                return (0,
                l.jsx)('div', { className: 'col-lg-4 col-12 mb-4', children: (0, l.jsxs)('div', { className: 'Box color-shadow-medium height-full d-block hover-shadow-large no-underline color-text-primary p-5', children: [(0, l.jsx)('h2', { children: o[s].versionTitle }), (0, l.jsxs)('p', { className: 'mt-2 mb-4 color-text-tertiary', children: [(0, l.jsx)(ne.ASI, {}), ' ', (0, l.jsxs)(B.r, { href: '/'.concat(t.locale, '/').concat(s, '/admin/release-notes#').concat(a.version), children: [e('release_notes_for'), ' ', a.version] }), ' ', '(', a.date, ')'] }), (0, l.jsxs)('p', { className: 'mt-2 mb-4 color-text-tertiary', children: [(0, l.jsx)(ne.Hf3, {}), ' ', e('upgrade_from'), ' ', (0, l.jsx)(B.r, { href: '/'.concat(t.locale, '/').concat(c, '/admin/enterprise-management/upgrading-github-enterprise-server'), children: r.firstPreviousRelease }), ' ', 'or', ' ', (0, l.jsx)(B.r, { href: '/'.concat(t.locale, '/').concat(d, '/admin/enterprise-management/upgrading-github-enterprise-server'), children: r.secondPreviousRelease })] }), (0, l.jsxs)('p', { className: 'mt-2 mb-4 color-text-tertiary', children: [(0, l.jsx)(ne.aAW, {}), ' ', (0, l.jsx)(B.r, { href: '/'.concat(t.locale, '/').concat(s), children: e('browse_all_docs') })] })] }) }, i)
              }),
            }),
            (0, l.jsxs)(B.r, {
              href: ''.concat(s, '/release-notes'),
              className: 'btn btn-outline float-right',
              children: [e('explore_release_notes'), ' ', (0, l.jsx)(ne.LZ3, {})],
            }),
          ],
        })
      }
      var Se = function () {
          var e,
            t = (0, U.useRouter)(),
            r = (0, Y.a)().isEnterpriseServer,
            n = T(),
            o = n.shortTitle,
            i = n.featuredLinks,
            s = n.productUserExamples,
            a = n.productCommunityExamples,
            c = n.productCodeExamples,
            d = (0, R.$)('product_landing').t
          return (0, l.jsxs)(O.H, {
            children: [
              (0, l.jsx)(Ae, { className: 'pt-3', children: (0, l.jsx)(fe, {}) }),
              (0, l.jsx)(Ae, { children: (0, l.jsx)(xe, {}) }),
              c.length > 0 &&
                (0, l.jsx)(Ae, {
                  title: d('code_examples'),
                  sectionLink: 'code-examples',
                  className: 'my-6 pb-6',
                  children: (0, l.jsx)(Le, {}),
                }),
              a.length > 0 &&
                (0, l.jsx)(Ae, {
                  title: d('communities_using_discussions'),
                  className: 'my-6 pb-6',
                  children: (0, l.jsx)(je, {}),
                }),
              s.length > 0 &&
                (0, l.jsx)(Ae, {
                  title: d('sponsor_community'),
                  className: 'my-6 pb-6',
                  children: (0, l.jsx)(ve, {}),
                }),
              'admin' === t.query.productId &&
                r &&
                (0, l.jsx)(Ae, {
                  title: d('supported_releases'),
                  className: 'my-6 pb-6',
                  children: (0, l.jsx)(Ge, {}),
                }),
              (null === (e = i.guideCards) || void 0 === e ? void 0 : e.length) > 0 &&
                (0, l.jsx)('div', {
                  className: 'color-bg-tertiary py-6',
                  children: (0, l.jsx)(Ae, {
                    title: d('guides'),
                    sectionLink: 'guides-2',
                    className: 'my-6',
                    children: (0, l.jsx)(_e, {}),
                  }),
                }),
              (0, l.jsx)(Ae, {
                title: 'All '.concat(o, ' docs'),
                sectionLink: 'all-docs',
                className: 'pt-9',
                children: (0, l.jsx)(we, {}),
              }),
            ],
          })
        },
        $e = function () {
          var e,
            t = C(),
            r = t.title,
            n = t.intro,
            o = t.featuredTrack,
            i = (0, R.$)('product_sublanding').t,
            s =
              null === o || void 0 === o || null === (e = o.guides) || void 0 === e
                ? void 0
                : e.map(function (e) {
                    var t, r
                    return (0,
                    l.jsx)('li', { className: 'px-2 d-flex flex-shrink-0', children: (0, l.jsxs)(B.r, { href: ''.concat(e.href, '?learn=').concat(o.trackName), className: 'd-inline-block Box p-5 color-bg-primary color-border-primary no-underline', children: [(0, l.jsxs)('div', { className: 'd-flex flex-justify-between flex-items-center', children: [(0, l.jsx)('div', { className: 'circle color-bg-primary color-text-link border-gradient--pink-blue-dark d-inline-flex', children: o.guides && (0, l.jsx)('span', { className: 'm-2 f2 lh-condensed-ultra text-center text-bold step-circle-text', style: { width: '24px', height: '24px' }, children: (null === (t = o.guides) || void 0 === t ? void 0 : t.indexOf(e)) + 1 }) }), (0, l.jsx)('div', { className: 'color-text-tertiary h6 text-uppercase', children: i('guide_types')[(null === (r = e.page) || void 0 === r ? void 0 : r.type) || ''] })] }), (0, l.jsx)('h3', { className: 'font-mktg h3-mktg my-4 color-text-primary', children: e.title }), (0, l.jsx)('div', { className: 'lead-mktg color-text-secondary f5 my-4 truncate-overflow-8', children: e.intro })] }) }, e.href)
                  })
          return (0, l.jsxs)('div', {
            children: [
              (0, l.jsx)('header', {
                className: 'd-flex gutter mb-6',
                children: (0, l.jsxs)('div', {
                  className: 'col-12',
                  children: [
                    (0, l.jsx)(I.O, { variant: 'large' }),
                    (0, l.jsxs)('h1', { className: 'my-3 font-mktg', children: [r, ' guides'] }),
                    (0, l.jsx)('div', {
                      className: 'lead-mktg color-text-secondary f4 description-text',
                      dangerouslySetInnerHTML: { __html: n },
                    }),
                  ],
                }),
              }),
              o &&
                (0, l.jsxs)('div', {
                  className: 'mb-6 position-relative overflow-hidden mr-n3 ml-n3 px-3',
                  children: [
                    (0, l.jsxs)('ul', {
                      className:
                        'list-style-none d-flex flex-nowrap overflow-x-scroll px-2 feature-track',
                      children: [
                        (0, l.jsx)('li', {
                          className: 'px-2 d-flex flex-shrink-0',
                          children: (0, l.jsxs)('div', {
                            className:
                              'd-inline-block Box p-5 bg-gradient--blue-pink color-text-inverse',
                            children: [
                              (0, l.jsx)('div', {
                                className: 'circle color-text-inverse d-inline-flex',
                                style: { border: '2px white solid' },
                                children: (0, l.jsx)(ne.qNz, {
                                  className: 'v-align-middle m-2',
                                  size: 24,
                                }),
                              }),
                              (0, l.jsx)('h3', {
                                className: 'font-mktg h3-mktg my-4',
                                children: o.title,
                              }),
                              (0, l.jsx)('div', {
                                className: 'lead-mktg color-text-inverse f5 my-4',
                                children: o.description,
                              }),
                              o.guides &&
                                (0, l.jsxs)(B.r, {
                                  className:
                                    'd-inline-block border color-border-inverse color-text-inverse px-4 py-2 f5 no-underline text-bold',
                                  role: 'button',
                                  href: ''.concat(o.guides[0].href, '?learn=').concat(o.trackName),
                                  children: [
                                    (0, l.jsx)('span', {
                                      className: 'mr-2',
                                      children: (0, l.jsx)(ne.LZ3, { size: 20 }),
                                    }),
                                    i('start_path'),
                                  ],
                                }),
                            ],
                          }),
                        }),
                        s,
                      ],
                    }),
                    (0, l.jsx)('div', {
                      className:
                        'position-absolute top-0 bottom-0 left-0 ml-3 pl-3 fade-background-left',
                    }),
                    (0, l.jsx)('div', {
                      className:
                        'position-absolute top-0 bottom-0 right-0 mr-3 pr-3 fade-background-right',
                    }),
                  ],
                }),
            ],
          })
        },
        Me = function (e) {
          var t,
            r,
            n,
            o = e.track,
            i = (0, $.useState)(4),
            s = i[0],
            a = i[1],
            c = (0, R.$)('product_sublanding').t
          return (0, l.jsx)('div', {
            className: 'my-3 px-4 col-12 col-md-6 learning-track',
            children: (0, l.jsxs)('div', {
              className: 'Box d-flex flex-column',
              children: [
                (0, l.jsxs)('div', {
                  className:
                    'Box-header bg-gradient--blue-pink p-4 d-flex flex-1 flex-items-start flex-wrap',
                  children: [
                    (0, l.jsx)('div', {
                      className: 'd-flex flex-auto flex-items-start col-8 col-md-12 col-xl-8',
                      children: (0, l.jsxs)('div', {
                        className: 'my-xl-0 mr-xl-3',
                        children: [
                          (0, l.jsx)('h5', {
                            className: 'mb-3 color-text-inverse font-mktg h3-mktg ',
                            children: null === o || void 0 === o ? void 0 : o.title,
                          }),
                          (0, l.jsx)('p', {
                            className:
                              'color-text-inverse truncate-overflow-3 learning-track--description',
                            children: null === o || void 0 === o ? void 0 : o.description,
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsxs)('a', {
                      className:
                        'd-inline-block border color-border-inverse color-text-inverse px-3 py-2 f5 no-underline text-bold no-wrap mt-3 mt-md-0',
                      role: 'button',
                      href: ''
                        .concat(
                          (null === o || void 0 === o ? void 0 : o.guides) &&
                            (null === o || void 0 === o ? void 0 : o.guides[0].href),
                          '?learn='
                        )
                        .concat(null === o || void 0 === o ? void 0 : o.trackName),
                      children: [
                        c('start'),
                        (0, l.jsx)('span', {
                          className: 'mr-2',
                          children: (0, l.jsx)(ne.LZ3, { size: 20 }),
                        }),
                      ],
                    }),
                  ],
                }),
                null === o || void 0 === o || null === (t = o.guides) || void 0 === t
                  ? void 0
                  : t.slice(0, s).map(function (e) {
                      var t, r
                      return (0,
                      l.jsx)('div', { children: (0, l.jsxs)('a', { className: 'Box-row d-flex flex-items-center color-text-primary no-underline', href: ''.concat(e.href, '?learn=').concat(null === o || void 0 === o ? void 0 : o.trackName), children: [(0, l.jsx)('div', { className: 'circle color-bg-tertiary d-inline-flex mr-4', children: (null === o || void 0 === o ? void 0 : o.guides) && (0, l.jsx)('span', { className: 'm-2 f3 lh-condensed-ultra text-center text-bold step-circle-text', children: (null === (t = o.guides) || void 0 === t ? void 0 : t.indexOf(e)) + 1 }) }), (0, l.jsx)('h5', { className: 'flex-auto pr-2', children: e.title }), (0, l.jsx)('div', { className: 'color-text-tertiary h6 text-uppercase flex-shrink-0', children: c('guide_types')[(null === (r = e.page) || void 0 === r ? void 0 : r.type) || ''] })] }) }, e.href + (null === o || void 0 === o ? void 0 : o.trackName))
                    }),
                ((null === o || void 0 === o || null === (r = o.guides) || void 0 === r
                  ? void 0
                  : r.length) || 0) > s
                  ? (0, l.jsxs)('button', {
                      className:
                        'Box-footer btn-link border-top-0 position-relative text-center text-bold color-text-link pt-1 pb-3 col-12',
                      onClick: function () {
                        var e
                        a(
                          (null === o || void 0 === o || null === (e = o.guides) || void 0 === e
                            ? void 0
                            : e.length) || 0
                        )
                      },
                      children: [
                        (0, l.jsx)('div', {
                          className: 'position-absolute left-0 right-0 py-5 fade-background-bottom',
                          style: { bottom: '50px' },
                        }),
                        (0, l.jsxs)('span', {
                          children: [
                            'Show ',
                            ((null === o || void 0 === o || null === (n = o.guides) || void 0 === n
                              ? void 0
                              : n.length) || 0) - s,
                            ' ',
                            c('more_guides'),
                          ],
                        }),
                      ],
                    })
                  : (0, l.jsx)('div', {}),
              ],
            }),
          })
        },
        Te = function () {
          var e = C().learningTracks
          return (0, l.jsx)('div', {
            className: 'd-flex flex-wrap flex-items-start my-5 gutter',
            children: (e || []).map(function (e) {
              return (0, l.jsx)(Me, { track: e }, null === e || void 0 === e ? void 0 : e.title)
            }),
          })
        },
        Pe = function (e) {
          var t = e.card,
            r = e.typeLabel
          return (0, l.jsx)('div', {
            'data-testid': 'article-card',
            className: 'd-flex col-12 col-md-4 pr-0 pr-md-6 pr-lg-8',
            children: (0, l.jsxs)('a', {
              className: 'no-underline d-flex flex-column py-3 border-bottom',
              href: t.href,
              children: [
                (0, l.jsx)('h4', {
                  className: 'h4 color-text-primary mb-1',
                  dangerouslySetInnerHTML: { __html: t.title },
                }),
                (0, l.jsx)('div', {
                  className: 'h6 text-uppercase',
                  'data-testid': 'article-card-type',
                  children: r,
                }),
                (0, l.jsx)('p', { className: 'color-text-secondary my-3', children: t.intro }),
                t.topics.length > 0 &&
                  (0, l.jsx)('div', {
                    children: t.topics.map(function (e) {
                      return (0,
                      l.jsx)('span', { 'data-testid': 'article-card-topic', className: 'IssueLabel bg-gradient--pink-blue color-text-inverse mr-1', children: e }, e)
                    }),
                  }),
              ],
            }),
          })
        },
        Ce = function () {
          var e = (0, R.$)('product_sublanding').t,
            t = e('guide_types'),
            r = C(),
            n = r.allTopics,
            o = r.includeGuides,
            i = (0, $.useState)(9),
            s = i[0],
            a = i[1],
            c = (0, $.useState)(''),
            d = c[0],
            u = c[1],
            f = (0, $.useState)(''),
            m = f[0],
            h = f[1],
            x = (0, $.useState)([]),
            p = x[0],
            _ = x[1]
          ;(0, $.useEffect)(
            function () {
              a(9),
                _(
                  (o || []).filter(function (e) {
                    var t = e.type === d,
                      r = e.topics.some(function (e) {
                        return e === m
                      })
                    return (!d || t) && (!m || r)
                  })
                )
            },
            [d, m]
          )
          var g = '' !== d || '' !== m ? p : o || []
          return (0, l.jsxs)('div', {
            children: [
              (0, l.jsxs)('form', {
                className: 'mt-2 mb-5 d-flex d-flex',
                children: [
                  (0, l.jsxs)('div', {
                    children: [
                      (0, l.jsx)('label', {
                        htmlFor: 'type',
                        className: 'text-uppercase f6 color-text-secondary d-block',
                        children: e('filters.type'),
                      }),
                      (0, l.jsxs)('select', {
                        value: d,
                        className:
                          'form-select f4 text-bold border-0 rounded-0 border-top box-shadow-none pl-0',
                        name: 'type',
                        'aria-label': 'guide types',
                        'data-testid': 'card-filter-dropdown',
                        onChange: function (e) {
                          u(e.target.value)
                        },
                        children: [
                          (0, l.jsx)('option', { value: '', children: e('filters.all') }),
                          Object.entries(t).map(function (e) {
                            var t = (0, ue.Z)(e, 2),
                              r = t[0],
                              n = t[1]
                            return (0, l.jsx)('option', { value: r, children: n }, r)
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsxs)('div', {
                    className: 'mx-4',
                    children: [
                      (0, l.jsx)('label', {
                        htmlFor: 'topic',
                        className: 'text-uppercase f6 color-text-secondary d-block',
                        children: e('filters.topic'),
                      }),
                      (0, l.jsxs)('select', {
                        value: m,
                        className:
                          'form-select f4 text-bold border-0 rounded-0 border-top box-shadow-none pl-0',
                        name: 'topics',
                        'data-testid': 'card-filter-dropdown',
                        'aria-label': 'guide topics',
                        onChange: function (e) {
                          h(e.target.value)
                        },
                        children: [
                          (0, l.jsx)('option', { value: '', children: e('filters.all') }),
                          null === n || void 0 === n
                            ? void 0
                            : n.map(function (e) {
                                return (0, l.jsx)('option', { value: e, children: e }, e)
                              }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, l.jsx)('div', {
                className: 'd-flex flex-wrap mr-0 mr-md-n6 mr-lg-n8',
                children: g.slice(0, s).map(function (e) {
                  return (0, l.jsx)(Pe, { card: e, typeLabel: t[e.type] }, e.href)
                }),
              }),
              g.length > s &&
                (0, l.jsx)('button', {
                  className: 'col-12 mt-5 text-center text-bold color-text-link btn-link',
                  onClick: function () {
                    return a(s + 9)
                  },
                  children: e('load_more'),
                }),
              0 === g.length &&
                (0, l.jsx)('div', {
                  className: 'py-4 text-center color-text-secondary',
                  children: (0, l.jsx)('h4', {
                    className: 'text-normal',
                    children: e('no_result'),
                  }),
                }),
            ],
          })
        },
        Ee = function () {
          var e = C(),
            t = e.title,
            r = e.learningTracks,
            n = e.includeGuides,
            o = (0, R.$)('sub_landing').t
          return (0, l.jsxs)(O.H, {
            children: [
              (0, l.jsx)(Ae, { className: 'pt-3', children: (0, l.jsx)($e, {}) }),
              r &&
                r.length > 0 &&
                (0, l.jsx)(Ae, {
                  title: ''.concat(t, ' learning paths'),
                  className: 'border-top py-6',
                  sectionLink: 'learning-paths',
                  description: o('learning_paths_desc'),
                  children: (0, l.jsx)(Te, {}),
                }),
              n &&
                (0, l.jsx)(Ae, {
                  title: 'All '.concat(t, ' guides'),
                  className: 'border-top py-6 color-border-primary',
                  sectionLink: 'all-guides',
                  children: (0, l.jsx)(Ce, {}),
                }),
            ],
          })
        },
        He = function (e) {
          var t = e.items,
            r = e.variant,
            n = void 0 === r ? 'expanded' : r,
            o = (0, U.useRouter)()
          return (0, l.jsx)('ul', {
            'data-testid': 'table-of-contents',
            className: D()('compact' === n ? 'list-style-inside pl-2' : 'list-style-none'),
            children: (t || []).map(function (e) {
              if (!e) return null
              var t = e.fullPath,
                r = e.title,
                i = e.intro,
                s = e.childTocItems,
                a = o.pathname === t
              return 'compact' === n
                ? (0, l.jsxs)(
                    'li',
                    {
                      className: 'f4 my-1',
                      children: [
                        (0, l.jsx)(B.r, { href: t, children: r }),
                        (s || []).length > 0 &&
                          (0, l.jsx)('ul', {
                            className: D()(
                              'compact' === n ? 'list-style-circle pl-5 my-3' : 'list-style-none'
                            ),
                            children: (s || []).map(function (e) {
                              return e
                                ? (0, l.jsx)(
                                    'li',
                                    {
                                      className: 'f4 mt-1',
                                      children: (0, l.jsx)(B.r, {
                                        href: e.fullPath,
                                        className:
                                          'Bump-link--hover no-underline py-1 color-border-primary',
                                        children: e.title,
                                      }),
                                    },
                                    e.fullPath
                                  )
                                : null
                            }),
                          }),
                      ],
                    },
                    t
                  )
                : (0, l.jsxs)(
                    'li',
                    {
                      className: D()('mb-5', a && 'color-auto-gray-4'),
                      children: [
                        (0, l.jsx)(B.r, {
                          href: t,
                          className:
                            'Bump-link--hover no-underline d-block py-1 border-bottom color-border-primary',
                          children: (0, l.jsxs)('h2', {
                            className: 'h4',
                            children: [
                              r,
                              (0, l.jsx)('span', {
                                className: 'Bump-link-symbol',
                                children: '\u2192',
                              }),
                            ],
                          }),
                        }),
                        i &&
                          (0, l.jsx)('p', {
                            className: 'f4 mt-3',
                            dangerouslySetInnerHTML: { __html: i },
                          }),
                      ],
                    },
                    t
                  )
            }),
          })
        },
        De = (0, $.createContext)(null),
        Oe = function () {
          var e = (function () {
              var e = (0, $.useContext)(De)
              if (!e)
                throw new Error(
                  '"useTocLandingContext" may only be used inside "TocLandingContext.Provider"'
                )
              return e
            })(),
            t = e.title,
            r = e.introPlainText,
            n = e.tocItems,
            o = e.productCallout,
            i = e.variant,
            s = e.featuredLinks,
            a = e.renderedPage,
            c = (0, R.$)('toc').t
          return (0, l.jsx)(O.H, {
            children: (0, l.jsxs)('div', {
              className: 'container-xl px-3 px-md-6 my-4 my-lg-4',
              children: [
                (0, l.jsx)(V, {}),
                (0, l.jsxs)(ce, {
                  className: 'mt-7',
                  children: [
                    (0, l.jsx)(le, { children: t }),
                    (0, l.jsx)('div', {
                      className: 'lead-mktg',
                      children: (0, l.jsx)('p', { children: r }),
                    }),
                    o &&
                      (0, l.jsx)('div', {
                        className:
                          'product-callout border rounded-1 mb-4 p-3 color-border-success color-bg-success',
                        dangerouslySetInnerHTML: { __html: o },
                      }),
                    (0, l.jsx)('div', {
                      className: 'border-bottom border-xl-0 pb-4 mb-5 pb-xl-2 mb-xl-2',
                    }),
                    (0, l.jsxs)('div', {
                      className: 'expanded' === i ? 'mt-7' : 'mt-2',
                      children: [
                        s.gettingStarted &&
                          s.popular &&
                          (0, l.jsx)('div', {
                            className: 'pb-8 container-xl',
                            children: (0, l.jsxs)('div', {
                              className: 'gutter gutter-xl-spacious clearfix',
                              children: [
                                (0, l.jsx)('div', {
                                  className: 'col-12 col-lg-6 mb-md-4 mb-lg-0 float-left',
                                  children: (0, l.jsx)(he.w, {
                                    title: c('getting_started'),
                                    variant: 'spaced',
                                    articles: s.gettingStarted,
                                  }),
                                }),
                                (0, l.jsx)('div', {
                                  className: 'col-12 col-lg-6 float-left',
                                  children: (0, l.jsx)(he.w, {
                                    title: c('popular'),
                                    variant: 'spaced',
                                    articles: s.popular,
                                  }),
                                }),
                              ],
                            }),
                          }),
                        a && (0, l.jsx)(ie, { children: a }),
                        (0, l.jsx)(He, { items: n, variant: i }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        },
        Ie = !0,
        Ze = function (e) {
          var t,
            r = e.mainContext,
            n = e.productLandingContext,
            s = e.productSubLandingContext,
            a = e.tocLandingContext,
            c = e.articleContext,
            u = r.currentLayoutName,
            f = r.relativePath
          return (
            (0, $.useEffect)(function () {
              !(function () {
                var e = Array.from(document.querySelectorAll('button.js-btn-copy'))
                e &&
                  e.forEach(function (e) {
                    return e.addEventListener(
                      'click',
                      (0, i.Z)(
                        o().mark(function t() {
                          var r, l
                          return o().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if ((r = e.dataset.clipboardText)) {
                                    t.next = 3
                                    break
                                  }
                                  return t.abrupt('return')
                                case 3:
                                  return (t.next = 5), navigator.clipboard.writeText(r)
                                case 5:
                                  ;(l = e.getAttribute('aria-label') || ''),
                                    e.setAttribute('aria-label', 'Copied!'),
                                    setTimeout(function () {
                                      e.setAttribute('aria-label', l)
                                    }, 2e3)
                                case 8:
                                case 'end':
                                  return t.stop()
                              }
                          }, t)
                        })
                      )
                    )
                  })
              })(),
                d(),
                v(),
                (function () {
                  var e = document.querySelector('#to-english-doc')
                  if (e) {
                    var t = window.location.pathname.split('/')
                    ;(t[1] = 'en'), (e.href = t.join('/'))
                  }
                })(),
                (function () {
                  var e = document.querySelectorAll('#article-contents table code')
                  e &&
                    e.forEach(function (e) {
                      if (
                        !Array.from(e.childNodes).some(function (e) {
                          return 'A' === e.nodeName
                        })
                      ) {
                        var t = L()(e.textContent || ''),
                          r = t.replace(A, function (e) {
                            return e
                              .replace(w, '$1<wbr>$2')
                              .replace(k, '$1_<wbr>')
                              .replace(G, '$1<wbr>')
                          })
                        e.innerHTML = e.innerHTML.replace(t, r)
                      }
                    })
                })()
            }, []),
            (t =
              'product-landing' === u
                ? (0, l.jsx)(M.Provider, { value: n, children: (0, l.jsx)(Se, {}) })
                : 'product-sublanding' === u
                ? (0, l.jsx)(P.Provider, { value: s, children: (0, l.jsx)(Ee, {}) })
                : null !== f && void 0 !== f && f.endsWith('index.md')
                ? (0, l.jsx)(De.Provider, { value: a, children: (0, l.jsx)(Oe, {}) })
                : (0, l.jsx)(E.Provider, { value: c, children: (0, l.jsx)(de, {}) })),
            (0, l.jsx)(S.Tr.Provider, { value: r, children: t })
          )
        }
    },
    7570: function (e) {
      e.exports = {
        'container-sm': 'ArticleGridLayout_container-sm__2P6--',
        'container-md': 'ArticleGridLayout_container-md__hIZzn',
        'container-lg': 'ArticleGridLayout_container-lg__1KEbI',
        'container-xl': 'ArticleGridLayout_container-xl__3gOS3',
        'col-1': 'ArticleGridLayout_col-1__2IOAz',
        'col-2': 'ArticleGridLayout_col-2__3exel',
        'col-3': 'ArticleGridLayout_col-3__1ldqj',
        'col-4': 'ArticleGridLayout_col-4__10_4a',
        'col-5': 'ArticleGridLayout_col-5__2hYaT',
        'col-6': 'ArticleGridLayout_col-6__1WwoJ',
        'col-7': 'ArticleGridLayout_col-7__qL3Rh',
        'col-8': 'ArticleGridLayout_col-8__1nxWN',
        'col-9': 'ArticleGridLayout_col-9__3mNxF',
        'col-10': 'ArticleGridLayout_col-10__mZK1l',
        'col-11': 'ArticleGridLayout_col-11__259sW',
        'col-12': 'ArticleGridLayout_col-12__2GhN-',
        'col-sm-1': 'ArticleGridLayout_col-sm-1__2rycU',
        'col-sm-2': 'ArticleGridLayout_col-sm-2__2cq1Z',
        'col-sm-3': 'ArticleGridLayout_col-sm-3__18DLO',
        'col-sm-4': 'ArticleGridLayout_col-sm-4__aTlAH',
        'col-sm-5': 'ArticleGridLayout_col-sm-5__tF4wm',
        'col-sm-6': 'ArticleGridLayout_col-sm-6__1LWAK',
        'col-sm-7': 'ArticleGridLayout_col-sm-7__1A4y0',
        'col-sm-8': 'ArticleGridLayout_col-sm-8__32f7_',
        'col-sm-9': 'ArticleGridLayout_col-sm-9__3zEMY',
        'col-sm-10': 'ArticleGridLayout_col-sm-10__rhiXt',
        'col-sm-11': 'ArticleGridLayout_col-sm-11__24PA5',
        'col-sm-12': 'ArticleGridLayout_col-sm-12__3nZqf',
        'col-md-1': 'ArticleGridLayout_col-md-1__2y_Aj',
        'col-md-2': 'ArticleGridLayout_col-md-2__2v3-j',
        'col-md-3': 'ArticleGridLayout_col-md-3__zxAvE',
        'col-md-4': 'ArticleGridLayout_col-md-4__1P66N',
        'col-md-5': 'ArticleGridLayout_col-md-5__3By5X',
        'col-md-6': 'ArticleGridLayout_col-md-6__18RY5',
        'col-md-7': 'ArticleGridLayout_col-md-7__3-RN3',
        'col-md-8': 'ArticleGridLayout_col-md-8__bLmpu',
        'col-md-9': 'ArticleGridLayout_col-md-9__198Tk',
        'col-md-10': 'ArticleGridLayout_col-md-10__2ldSE',
        'col-md-11': 'ArticleGridLayout_col-md-11__2p5Lg',
        'col-md-12': 'ArticleGridLayout_col-md-12__3iz3t',
        'col-lg-1': 'ArticleGridLayout_col-lg-1__2_pLf',
        'col-lg-2': 'ArticleGridLayout_col-lg-2__22maa',
        'col-lg-3': 'ArticleGridLayout_col-lg-3__2qATd',
        'col-lg-4': 'ArticleGridLayout_col-lg-4__2JWeU',
        'col-lg-5': 'ArticleGridLayout_col-lg-5__fdxGP',
        'col-lg-6': 'ArticleGridLayout_col-lg-6__9oHY8',
        'col-lg-7': 'ArticleGridLayout_col-lg-7__3Zaqx',
        'col-lg-8': 'ArticleGridLayout_col-lg-8__2_ot8',
        'col-lg-9': 'ArticleGridLayout_col-lg-9__CWwfy',
        'col-lg-10': 'ArticleGridLayout_col-lg-10__1qFps',
        'col-lg-11': 'ArticleGridLayout_col-lg-11__15xZ5',
        'col-lg-12': 'ArticleGridLayout_col-lg-12__P8ANu',
        'col-xl-1': 'ArticleGridLayout_col-xl-1__3d6Ae',
        'col-xl-2': 'ArticleGridLayout_col-xl-2__1yr3v',
        'col-xl-3': 'ArticleGridLayout_col-xl-3__1kvUq',
        'col-xl-4': 'ArticleGridLayout_col-xl-4__Sl5YP',
        'col-xl-5': 'ArticleGridLayout_col-xl-5__8AB-f',
        'col-xl-6': 'ArticleGridLayout_col-xl-6__lwKWQ',
        'col-xl-7': 'ArticleGridLayout_col-xl-7__JTmSY',
        'col-xl-8': 'ArticleGridLayout_col-xl-8__VcrZk',
        'col-xl-9': 'ArticleGridLayout_col-xl-9__1YjHQ',
        'col-xl-10': 'ArticleGridLayout_col-xl-10__dKf2V',
        'col-xl-11': 'ArticleGridLayout_col-xl-11__1NYaT',
        'col-xl-12': 'ArticleGridLayout_col-xl-12__yIscv',
        gutter: 'ArticleGridLayout_gutter__sgwcl',
        'gutter-condensed': 'ArticleGridLayout_gutter-condensed__3B33k',
        'gutter-spacious': 'ArticleGridLayout_gutter-spacious__1DAZF',
        'gutter-sm': 'ArticleGridLayout_gutter-sm__3KaCh',
        'gutter-sm-condensed': 'ArticleGridLayout_gutter-sm-condensed__28KLe',
        'gutter-sm-spacious': 'ArticleGridLayout_gutter-sm-spacious__3mcnU',
        'gutter-md': 'ArticleGridLayout_gutter-md__naWvD',
        'gutter-md-condensed': 'ArticleGridLayout_gutter-md-condensed__3yjgp',
        'gutter-md-spacious': 'ArticleGridLayout_gutter-md-spacious__MpyNP',
        'gutter-lg': 'ArticleGridLayout_gutter-lg__btukE',
        'gutter-lg-condensed': 'ArticleGridLayout_gutter-lg-condensed__1VuMp',
        'gutter-lg-spacious': 'ArticleGridLayout_gutter-lg-spacious__gThkv',
        'gutter-xl': 'ArticleGridLayout_gutter-xl__1pcm_',
        'gutter-xl-condensed': 'ArticleGridLayout_gutter-xl-condensed__2d3dR',
        'gutter-xl-spacious': 'ArticleGridLayout_gutter-xl-spacious__2gudz',
        'offset-1': 'ArticleGridLayout_offset-1__1y6Rm',
        'offset-2': 'ArticleGridLayout_offset-2__2JzTA',
        'offset-3': 'ArticleGridLayout_offset-3__35qk2',
        'offset-4': 'ArticleGridLayout_offset-4__2jSzV',
        'offset-5': 'ArticleGridLayout_offset-5__NP0rn',
        'offset-6': 'ArticleGridLayout_offset-6__12-7m',
        'offset-7': 'ArticleGridLayout_offset-7__2b0bM',
        'offset-8': 'ArticleGridLayout_offset-8__14Ex_',
        'offset-9': 'ArticleGridLayout_offset-9__1bwsm',
        'offset-10': 'ArticleGridLayout_offset-10__2_PO4',
        'offset-11': 'ArticleGridLayout_offset-11__3_zuP',
        'offset-sm-1': 'ArticleGridLayout_offset-sm-1__3R14z',
        'offset-sm-2': 'ArticleGridLayout_offset-sm-2__18lb9',
        'offset-sm-3': 'ArticleGridLayout_offset-sm-3__1BQ4O',
        'offset-sm-4': 'ArticleGridLayout_offset-sm-4__1cPuT',
        'offset-sm-5': 'ArticleGridLayout_offset-sm-5__2j_Xc',
        'offset-sm-6': 'ArticleGridLayout_offset-sm-6__3tvam',
        'offset-sm-7': 'ArticleGridLayout_offset-sm-7__3Pvh7',
        'offset-sm-8': 'ArticleGridLayout_offset-sm-8__ZEZ2y',
        'offset-sm-9': 'ArticleGridLayout_offset-sm-9__1PyM4',
        'offset-sm-10': 'ArticleGridLayout_offset-sm-10__VWg4g',
        'offset-sm-11': 'ArticleGridLayout_offset-sm-11__e-DOI',
        'offset-md-1': 'ArticleGridLayout_offset-md-1__2V1G-',
        'offset-md-2': 'ArticleGridLayout_offset-md-2__1NIdl',
        'offset-md-3': 'ArticleGridLayout_offset-md-3__1zyBf',
        'offset-md-4': 'ArticleGridLayout_offset-md-4__1J1Yr',
        'offset-md-5': 'ArticleGridLayout_offset-md-5__2s8RU',
        'offset-md-6': 'ArticleGridLayout_offset-md-6__6Xqtq',
        'offset-md-7': 'ArticleGridLayout_offset-md-7__fGlig',
        'offset-md-8': 'ArticleGridLayout_offset-md-8__1Ugpa',
        'offset-md-9': 'ArticleGridLayout_offset-md-9__2F9gb',
        'offset-md-10': 'ArticleGridLayout_offset-md-10__NiIl2',
        'offset-md-11': 'ArticleGridLayout_offset-md-11__2dyjE',
        'offset-lg-1': 'ArticleGridLayout_offset-lg-1__2PFWb',
        'offset-lg-2': 'ArticleGridLayout_offset-lg-2___JkfY',
        'offset-lg-3': 'ArticleGridLayout_offset-lg-3__3YsGs',
        'offset-lg-4': 'ArticleGridLayout_offset-lg-4__2v7om',
        'offset-lg-5': 'ArticleGridLayout_offset-lg-5__SRyoX',
        'offset-lg-6': 'ArticleGridLayout_offset-lg-6__j461T',
        'offset-lg-7': 'ArticleGridLayout_offset-lg-7__2IlkJ',
        'offset-lg-8': 'ArticleGridLayout_offset-lg-8__1utGr',
        'offset-lg-9': 'ArticleGridLayout_offset-lg-9__23jb_',
        'offset-lg-10': 'ArticleGridLayout_offset-lg-10__2im4L',
        'offset-lg-11': 'ArticleGridLayout_offset-lg-11__v9Xm2',
        'offset-xl-1': 'ArticleGridLayout_offset-xl-1__3ouR9',
        'offset-xl-2': 'ArticleGridLayout_offset-xl-2__-jwt9',
        'offset-xl-3': 'ArticleGridLayout_offset-xl-3__323gJ',
        'offset-xl-4': 'ArticleGridLayout_offset-xl-4__-4czi',
        'offset-xl-5': 'ArticleGridLayout_offset-xl-5__lRZtj',
        'offset-xl-6': 'ArticleGridLayout_offset-xl-6__18qlU',
        'offset-xl-7': 'ArticleGridLayout_offset-xl-7__2ntyS',
        'offset-xl-8': 'ArticleGridLayout_offset-xl-8__1ORwk',
        'offset-xl-9': 'ArticleGridLayout_offset-xl-9__2HCSY',
        'offset-xl-10': 'ArticleGridLayout_offset-xl-10__nRMgI',
        'offset-xl-11': 'ArticleGridLayout_offset-xl-11__3XWOP',
        container: 'ArticleGridLayout_container__2YFOs',
        sidebar: 'ArticleGridLayout_sidebar__1eMns',
        sidebarContent: 'ArticleGridLayout_sidebarContent__3bZPH',
        head: 'ArticleGridLayout_head__311XT',
        content: 'ArticleGridLayout_content__gyipb',
      }
    },
  },
])
