;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [488],
  {
    7484: function (e) {
      e.exports = (function () {
        'use strict'
        var e = 1e3,
          t = 6e4,
          s = 36e5,
          n = 'millisecond',
          u = 'second',
          r = 'minute',
          D = 'hour',
          i = 'day',
          a = 'week',
          l = 'month',
          o = 'quarter',
          c = 'year',
          d = 'date',
          h = 'Invalid Date',
          f =
            /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
          m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          x = {
            name: 'en',
            weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
            months:
              'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                '_'
              ),
          },
          F = function (e, t, s) {
            var n = String(e)
            return !n || n.length >= t ? e : '' + Array(t + 1 - n.length).join(s) + e
          },
          p = {
            s: F,
            z: function (e) {
              var t = -e.utcOffset(),
                s = Math.abs(t),
                n = Math.floor(s / 60),
                u = s % 60
              return (t <= 0 ? '+' : '-') + F(n, 2, '0') + ':' + F(u, 2, '0')
            },
            m: function e(t, s) {
              if (t.date() < s.date()) return -e(s, t)
              var n = 12 * (s.year() - t.year()) + (s.month() - t.month()),
                u = t.clone().add(n, l),
                r = s - u < 0,
                D = t.clone().add(n + (r ? -1 : 1), l)
              return +(-(n + (s - u) / (r ? u - D : D - u)) || 0)
            },
            a: function (e) {
              return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
            },
            p: function (e) {
              return (
                { M: l, y: c, w: a, d: i, D: d, h: D, m: r, s: u, ms: n, Q: o }[e] ||
                String(e || '')
                  .toLowerCase()
                  .replace(/s$/, '')
              )
            },
            u: function (e) {
              return void 0 === e
            },
          },
          E = 'en',
          v = {}
        v[E] = x
        var y = function (e) {
            return e instanceof g
          },
          C = function (e, t, s) {
            var n
            if (!e) return E
            if ('string' == typeof e) v[e] && (n = e), t && ((v[e] = t), (n = e))
            else {
              var u = e.name
              ;(v[u] = e), (n = u)
            }
            return !s && n && (E = n), n || (!s && E)
          },
          j = function (e, t) {
            if (y(e)) return e.clone()
            var s = 'object' == typeof t ? t : {}
            return (s.date = e), (s.args = arguments), new g(s)
          },
          b = p
        ;(b.l = C),
          (b.i = y),
          (b.w = function (e, t) {
            return j(e, { locale: t.$L, utc: t.$u, x: t.$x, $offset: t.$offset })
          })
        var g = (function () {
            function x(e) {
              ;(this.$L = C(e.locale, null, !0)), this.parse(e)
            }
            var F = x.prototype
            return (
              (F.parse = function (e) {
                ;(this.$d = (function (e) {
                  var t = e.date,
                    s = e.utc
                  if (null === t) return new Date(NaN)
                  if (b.u(t)) return new Date()
                  if (t instanceof Date) return new Date(t)
                  if ('string' == typeof t && !/Z$/i.test(t)) {
                    var n = t.match(f)
                    if (n) {
                      var u = n[2] - 1 || 0,
                        r = (n[7] || '0').substring(0, 3)
                      return s
                        ? new Date(Date.UTC(n[1], u, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, r))
                        : new Date(n[1], u, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, r)
                    }
                  }
                  return new Date(t)
                })(e)),
                  (this.$x = e.x || {}),
                  this.init()
              }),
              (F.init = function () {
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
              (F.$utils = function () {
                return b
              }),
              (F.isValid = function () {
                return !(this.$d.toString() === h)
              }),
              (F.isSame = function (e, t) {
                var s = j(e)
                return this.startOf(t) <= s && s <= this.endOf(t)
              }),
              (F.isAfter = function (e, t) {
                return j(e) < this.startOf(t)
              }),
              (F.isBefore = function (e, t) {
                return this.endOf(t) < j(e)
              }),
              (F.$g = function (e, t, s) {
                return b.u(e) ? this[t] : this.set(s, e)
              }),
              (F.unix = function () {
                return Math.floor(this.valueOf() / 1e3)
              }),
              (F.valueOf = function () {
                return this.$d.getTime()
              }),
              (F.startOf = function (e, t) {
                var s = this,
                  n = !!b.u(t) || t,
                  o = b.p(e),
                  h = function (e, t) {
                    var u = b.w(s.$u ? Date.UTC(s.$y, t, e) : new Date(s.$y, t, e), s)
                    return n ? u : u.endOf(i)
                  },
                  f = function (e, t) {
                    return b.w(
                      s
                        .toDate()
                        [e].apply(s.toDate('s'), (n ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)),
                      s
                    )
                  },
                  m = this.$W,
                  x = this.$M,
                  F = this.$D,
                  p = 'set' + (this.$u ? 'UTC' : '')
                switch (o) {
                  case c:
                    return n ? h(1, 0) : h(31, 11)
                  case l:
                    return n ? h(1, x) : h(0, x + 1)
                  case a:
                    var E = this.$locale().weekStart || 0,
                      v = (m < E ? m + 7 : m) - E
                    return h(n ? F - v : F + (6 - v), x)
                  case i:
                  case d:
                    return f(p + 'Hours', 0)
                  case D:
                    return f(p + 'Minutes', 1)
                  case r:
                    return f(p + 'Seconds', 2)
                  case u:
                    return f(p + 'Milliseconds', 3)
                  default:
                    return this.clone()
                }
              }),
              (F.endOf = function (e) {
                return this.startOf(e, !1)
              }),
              (F.$set = function (e, t) {
                var s,
                  a = b.p(e),
                  o = 'set' + (this.$u ? 'UTC' : ''),
                  h = ((s = {}),
                  (s[i] = o + 'Date'),
                  (s[d] = o + 'Date'),
                  (s[l] = o + 'Month'),
                  (s[c] = o + 'FullYear'),
                  (s[D] = o + 'Hours'),
                  (s[r] = o + 'Minutes'),
                  (s[u] = o + 'Seconds'),
                  (s[n] = o + 'Milliseconds'),
                  s)[a],
                  f = a === i ? this.$D + (t - this.$W) : t
                if (a === l || a === c) {
                  var m = this.clone().set(d, 1)
                  m.$d[h](f), m.init(), (this.$d = m.set(d, Math.min(this.$D, m.daysInMonth())).$d)
                } else h && this.$d[h](f)
                return this.init(), this
              }),
              (F.set = function (e, t) {
                return this.clone().$set(e, t)
              }),
              (F.get = function (e) {
                return this[b.p(e)]()
              }),
              (F.add = function (n, o) {
                var d,
                  h = this
                n = Number(n)
                var f = b.p(o),
                  m = function (e) {
                    var t = j(h)
                    return b.w(t.date(t.date() + Math.round(e * n)), h)
                  }
                if (f === l) return this.set(l, this.$M + n)
                if (f === c) return this.set(c, this.$y + n)
                if (f === i) return m(1)
                if (f === a) return m(7)
                var x = ((d = {}), (d[r] = t), (d[D] = s), (d[u] = e), d)[f] || 1,
                  F = this.$d.getTime() + n * x
                return b.w(F, this)
              }),
              (F.subtract = function (e, t) {
                return this.add(-1 * e, t)
              }),
              (F.format = function (e) {
                var t = this,
                  s = this.$locale()
                if (!this.isValid()) return s.invalidDate || h
                var n = e || 'YYYY-MM-DDTHH:mm:ssZ',
                  u = b.z(this),
                  r = this.$H,
                  D = this.$m,
                  i = this.$M,
                  a = s.weekdays,
                  l = s.months,
                  o = function (e, s, u, r) {
                    return (e && (e[s] || e(t, n))) || u[s].substr(0, r)
                  },
                  c = function (e) {
                    return b.s(r % 12 || 12, e, '0')
                  },
                  d =
                    s.meridiem ||
                    function (e, t, s) {
                      var n = e < 12 ? 'AM' : 'PM'
                      return s ? n.toLowerCase() : n
                    },
                  f = {
                    YY: String(this.$y).slice(-2),
                    YYYY: this.$y,
                    M: i + 1,
                    MM: b.s(i + 1, 2, '0'),
                    MMM: o(s.monthsShort, i, l, 3),
                    MMMM: o(l, i),
                    D: this.$D,
                    DD: b.s(this.$D, 2, '0'),
                    d: String(this.$W),
                    dd: o(s.weekdaysMin, this.$W, a, 2),
                    ddd: o(s.weekdaysShort, this.$W, a, 3),
                    dddd: a[this.$W],
                    H: String(r),
                    HH: b.s(r, 2, '0'),
                    h: c(1),
                    hh: c(2),
                    a: d(r, D, !0),
                    A: d(r, D, !1),
                    m: String(D),
                    mm: b.s(D, 2, '0'),
                    s: String(this.$s),
                    ss: b.s(this.$s, 2, '0'),
                    SSS: b.s(this.$ms, 3, '0'),
                    Z: u,
                  }
                return n.replace(m, function (e, t) {
                  return t || f[e] || u.replace(':', '')
                })
              }),
              (F.utcOffset = function () {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
              }),
              (F.diff = function (n, d, h) {
                var f,
                  m = b.p(d),
                  x = j(n),
                  F = (x.utcOffset() - this.utcOffset()) * t,
                  p = this - x,
                  E = b.m(this, x)
                return (
                  (E =
                    ((f = {}),
                    (f[c] = E / 12),
                    (f[l] = E),
                    (f[o] = E / 3),
                    (f[a] = (p - F) / 6048e5),
                    (f[i] = (p - F) / 864e5),
                    (f[D] = p / s),
                    (f[r] = p / t),
                    (f[u] = p / e),
                    f)[m] || p),
                  h ? E : b.a(E)
                )
              }),
              (F.daysInMonth = function () {
                return this.endOf(l).$D
              }),
              (F.$locale = function () {
                return v[this.$L]
              }),
              (F.locale = function (e, t) {
                if (!e) return this.$L
                var s = this.clone(),
                  n = C(e, t, !0)
                return n && (s.$L = n), s
              }),
              (F.clone = function () {
                return b.w(this.$d, this)
              }),
              (F.toDate = function () {
                return new Date(this.valueOf())
              }),
              (F.toJSON = function () {
                return this.isValid() ? this.toISOString() : null
              }),
              (F.toISOString = function () {
                return this.$d.toISOString()
              }),
              (F.toString = function () {
                return this.$d.toUTCString()
              }),
              x
            )
          })(),
          N = g.prototype
        return (
          (j.prototype = N),
          [
            ['$ms', n],
            ['$s', u],
            ['$m', r],
            ['$H', D],
            ['$W', i],
            ['$M', l],
            ['$y', c],
            ['$D', d],
          ].forEach(function (e) {
            N[e[1]] = function (t) {
              return this.$g(t, e[0], e[1])
            }
          }),
          (j.extend = function (e, t) {
            return e.$i || (e(t, g, j), (e.$i = !0)), j
          }),
          (j.locale = C),
          (j.isDayjs = y),
          (j.unix = function (e) {
            return j(1e3 * e)
          }),
          (j.en = v[E]),
          (j.Ls = v),
          (j.p = {}),
          j
        )
      })()
    },
    6991: function (e) {
      e.exports = function () {
        return /[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]|\uD83C\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uD83C\uDDFE\uD83C[\uDDEA\uDDF9]|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDFC\uD83C[\uDDEB\uDDF8]|\uD83C\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uD83C\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF8\uDDFE\uDDFF]|\uD83C\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uD83C\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uD83C\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uD83C\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uD83C\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uD83C\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uD83C\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uD83C\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uD83C\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uD83C\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uD83C\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uD83C\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uD83C\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uD83C\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uD83C\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uD83C\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|[#\*0-9]\u20E3/g
      }
    },
    9671: function (e, t, s) {
      var n = s(6991)
      e.exports = i
      var u = Object.hasOwnProperty,
        r = /\s/g,
        D = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~\u2019]/g
      function i() {
        if (!(this instanceof i)) return new i()
        this.reset()
      }
      function a(e, t) {
        return 'string' !== typeof e
          ? ''
          : (t || (e = e.toLowerCase()), e.trim().replace(D, '').replace(n(), '').replace(r, '-'))
      }
      ;(i.prototype.slug = function (e, t) {
        for (var s = this, n = a(e, !0 === t), r = n; u.call(s.occurrences, n); )
          s.occurrences[r]++, (n = r + '-' + s.occurrences[r])
        return (s.occurrences[n] = 0), n
      }),
        (i.prototype.reset = function () {
          this.occurrences = Object.create(null)
        }),
        (i.slug = a)
    },
    3718: function (e, t, s) {
      'use strict'
      s.d(t, {
        P: function () {
          return u
        },
      })
      var n = s(7294)
      function u(e) {
        var t = e.children
        return n.cloneElement(n.Children.only(t), {
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
    1696: function (e, t, s) {
      'use strict'
      s.r(t),
        s.d(t, {
          __N_SSP: function () {
            return g
          },
          default: function () {
            return N
          },
        })
      var n = s(5893),
        u = s(1013),
        r = s(4130),
        D = s(7294),
        i = s(4184),
        a = s.n(i),
        l = s(5529),
        o = s(8558),
        c = s(9227)
      function d(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '0px',
          s = (0, D.useState)(!1),
          n = s[0],
          u = s[1]
        return (
          (0, D.useEffect)(function () {
            var s = new IntersectionObserver(
              function (e) {
                var t = (0, c.Z)(e, 1)[0]
                u(t.isIntersecting)
              },
              { rootMargin: t }
            )
            return (
              e.current && s.observe(e.current),
              function () {
                e.current && s.unobserve(e.current)
              }
            )
          }, []),
          n
        )
      }
      var h = s(9671),
        f = s.n(h),
        m = s(6359),
        x = {
          features: 'Features',
          bugs: 'Bug fixes',
          known_issues: 'Known issues',
          security_fixes: 'Security fixes',
          changes: 'Changes',
          deprecations: 'Deprecations',
          backups: 'Backups',
        }
      function F(e) {
        var t = e.patch,
          s = e.withReleaseNoteLabel
        return (0, n.jsx)(n.Fragment, {
          children: Object.entries(t.sections).map(function (e, t, u) {
            var r = (0, c.Z)(e, 2),
              D = r[0],
              i = r[1],
              l = t === u.length - 1
            return (0, n.jsxs)(
              'div',
              {
                className: a()(
                  'release-notes-section-'.concat(D),
                  'py-6 d-block d-xl-flex gutter-xl flex-items-baseline',
                  !s && 'mx-6',
                  !l && 'border-bottom'
                ),
                children: [
                  s &&
                    (0, n.jsx)('div', {
                      className: 'col-12 col-xl-3 mb-5',
                      children: (0, n.jsx)('span', {
                        className:
                          'px-3 py-2 text-small text-bold text-uppercase text-mono color-text-inverse release-notes-section-label',
                        children: x[D] || 'INVALID SECTION',
                      }),
                    }),
                  (0, n.jsx)('ul', {
                    className: a()(s && 'col-xl-9', 'col-12 release-notes-list'),
                    children: i.map(function (e) {
                      if ('string' === typeof e)
                        return (0, n.jsx)(
                          'li',
                          {
                            className: 'release-notes-list-item',
                            dangerouslySetInnerHTML: { __html: e },
                          },
                          e
                        )
                      var t = e.heading ? f().slug(e.heading) : ''
                      return (0, n.jsxs)(
                        'li',
                        {
                          className: 'release-notes-list-item list-style-none',
                          children: [
                            (0, n.jsx)('h4', {
                              id: t,
                              className: 'release-notes-section-heading text-uppercase text-bold',
                              children: (0, n.jsx)(m.r, {
                                href: '#'.concat(t),
                                className: 'text-inherit',
                                children: e.heading,
                              }),
                            }),
                            (0, n.jsx)('ul', {
                              className: 'pl-0 pb-4 mt-2 release-notes-list',
                              children: e.notes.map(function (e) {
                                return (0,
                                n.jsx)('li', { className: 'release-notes-list-item', dangerouslySetInnerHTML: { __html: e } }, e)
                              }),
                            }),
                          ],
                        },
                        t
                      )
                    }),
                  }),
                ],
              },
              D
            )
          }),
        })
      }
      function p(e) {
        var t = e.patch,
          s = e.didEnterView,
          u = (0, o.$)('release_notes').t,
          r = (0, D.useRef)(null),
          i = d(r, '-40% 0px -50%')
        ;(0, D.useEffect)(
          function () {
            i && s()
          },
          [i]
        )
        var a = t.currentWeek
          ? u('banner_text_current')
          : ''.concat(u('banner_text_past'), ' ').concat(t.friendlyDate, '.')
        return (0, n.jsxs)('div', {
          ref: r,
          className: 'mb-10 color-bg-secondary pb-6 border-bottom border-top',
          id: t.date,
          children: [
            (0, n.jsxs)('header', {
              style: { zIndex: 1 },
              className:
                'container-xl position-sticky top-0 color-bg-secondary border-bottom px-3 pt-4 pb-2',
              children: [
                (0, n.jsxs)('div', {
                  className: 'd-flex flex-items-center',
                  children: [
                    (0, n.jsx)('h2', { className: 'border-bottom-0 m-0 p-0', children: t.title }),
                    t.release_candidate &&
                      (0, n.jsx)('span', {
                        className: 'IssueLabel color-bg-warning-inverse color-text-inverse ml-3',
                        style: { whiteSpace: 'pre' },
                        children: 'Release Candidate',
                      }),
                    (0, n.jsx)('button', {
                      className: 'js-print btn-link ml-3 text-small text-bold',
                      children: 'Print',
                    }),
                  ],
                }),
                (0, n.jsxs)('p', {
                  className: 'color-text-secondary mt-1',
                  children: [t.friendlyDate, ' - ', a],
                }),
              ],
            }),
            (0, n.jsxs)('div', {
              className: 'container-xl px-3',
              children: [
                (0, n.jsx)('div', {
                  className: 'mt-3',
                  dangerouslySetInnerHTML: { __html: t.intro },
                }),
                (0, n.jsx)(F, { patch: t }),
              ],
            }),
          ],
        })
      }
      function E(e) {
        var t = e.context,
          s = t.releaseNotes,
          u = t.releases,
          r = t.currentVersion,
          i = (0, D.useState)(''),
          o = i[0],
          c = i[1]
        return (0, n.jsxs)('div', {
          className: 'd-flex',
          children: [
            (0, n.jsxs)('article', {
              className: 'min-width-0 flex-1',
              children: [
                (0, n.jsxs)('div', {
                  className:
                    'd-flex flex-items-center flex-justify-between color-bg-primary px-5 py-2',
                  children: [
                    (0, n.jsx)('div', {}),
                    (0, n.jsxs)('h1', {
                      className: 'f4 py-3 m-0',
                      children: [r.planTitle, ' release notes'],
                    }),
                    (0, n.jsx)('div', {}),
                  ],
                }),
                (0, n.jsx)('div', {
                  className: 'markdown-body',
                  children: s.map(function (e) {
                    return (0, n.jsx)(
                      p,
                      {
                        patch: e,
                        didEnterView: function () {
                          return c(e.version)
                        },
                      },
                      e.version
                    )
                  }),
                }),
              ],
            }),
            (0, n.jsx)('aside', {
              className:
                'markdown-body position-sticky top-0 d-none d-md-block border-left no-print color-bg-primary flex-shrink-0',
              style: { width: 260, height: '100vh' },
              children: (0, n.jsx)('nav', {
                className: 'height-full overflow-auto',
                children: (0, n.jsx)('ul', {
                  className: 'list-style-none pl-0 text-bold',
                  children: u.map(function (e) {
                    return (0, n.jsx)(
                      'li',
                      {
                        className: 'border-bottom',
                        children: (0, n.jsxs)('details', {
                          className: 'my-0 details-reset release-notes-version-picker',
                          'aria-current': 'page',
                          open: !0,
                          children: [
                            (0, n.jsxs)('summary', {
                              className:
                                'px-3 py-4 my-0 d-flex flex-items-center flex-justify-between',
                              children: [
                                e.version,
                                (0, n.jsxs)('div', {
                                  className: 'd-flex',
                                  children: [
                                    (0, n.jsxs)('span', {
                                      className:
                                        'color-text-tertiary text-mono text-small text-normal mr-1',
                                      children: [e.patches.length, ' releases'],
                                    }),
                                    (0, n.jsx)(l.v4q, {}),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsx)('ul', {
                              className:
                                'color-bg-tertiary border-top list-style-none py-4 px-0 my-0',
                              children: e.patches.map(function (e) {
                                var t = e.version === o
                                return (0,
                                n.jsx)('li', { className: a()('js-release-notes-patch-link px-3 my-0 py-1', t && 'selected'), children: (0, n.jsx)('a', { href: '#'.concat(e.date), className: 'd-flex flex-items-center flex-justify-between', children: e.friendlyDate }) }, e.version)
                              }),
                            }),
                          ],
                        }),
                      },
                      e.version
                    )
                  }),
                }),
              }),
            }),
          ],
        })
      }
      var v = s(7484),
        y = s.n(v),
        C = s(3718)
      function j(e) {
        var t = e.patch,
          s = e.currentVersion,
          u = e.latestPatch,
          r = e.latestRelease,
          i = e.message,
          a = e.didEnterView,
          l = (0, o.$)('header').t,
          c = (0, D.useRef)(null),
          h = d(c, '-40% 0px -50%')
        return (
          (0, D.useEffect)(
            function () {
              h && a()
            },
            [h]
          ),
          (0, n.jsxs)('div', {
            ref: c,
            className: 'mb-10 color-bg-secondary pb-6 border-bottom border-top',
            id: t.version,
            children: [
              (0, n.jsxs)('header', {
                style: { zIndex: 1 },
                className:
                  'container-xl position-sticky top-0 color-bg-secondary border-bottom px-3 pt-4 pb-2',
                children: [
                  (0, n.jsxs)('div', {
                    className: 'd-flex flex-items-center',
                    children: [
                      (0, n.jsxs)('h2', {
                        className: 'border-bottom-0 m-0 p-0',
                        children: [s.versionTitle, '.', t.patchVersion],
                      }),
                      t.release_candidate &&
                        (0, n.jsx)('span', {
                          className: 'IssueLabel color-bg-warning-inverse color-text-inverse ml-3',
                          style: { whiteSpace: 'pre' },
                          children: 'Release Candidate',
                        }),
                      'enterprise-server' === s.plan &&
                        (0, n.jsx)(m.r, {
                          href: 'https://enterprise.github.com/releases/'.concat(
                            t.downloadVersion,
                            '/download'
                          ),
                          className: 'ml-3 text-small text-bold',
                          children: 'Download',
                        }),
                      (0, n.jsx)(C.P, {
                        children: (0, n.jsx)('button', {
                          className: 'btn-link ml-3 text-small text-bold',
                          children: 'Print',
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsx)('p', {
                    className: 'color-text-secondary mt-1',
                    children: y()(t.date).format('MMMM, DD, YYYY'),
                  }),
                  t.version !== u &&
                    s.currentRelease === r &&
                    (0, n.jsxs)('p', {
                      className: 'color-text-secondary mt-1',
                      children: [
                        (0, n.jsx)('span', {
                          dangerouslySetInnerHTML: {
                            __html: i.ghes_release_notes_upgrade_patch_only,
                          },
                        }),
                        ' ',
                        l('notices.release_notes_use_latest'),
                      ],
                    }),
                  t.version === u &&
                    s.currentRelease !== r &&
                    (0, n.jsxs)('p', {
                      className: 'color-text-secondary mt-1',
                      children: [
                        (0, n.jsx)('span', {
                          dangerouslySetInnerHTML: {
                            __html: i.ghes_release_notes_upgrade_release_only,
                          },
                        }),
                        ' ',
                        l('notices.release_notes_use_latest'),
                      ],
                    }),
                  t.version !== u &&
                    s.currentRelease !== r &&
                    (0, n.jsxs)('p', {
                      className: 'color-text-secondary mt-1',
                      children: [
                        (0, n.jsx)('span', {
                          dangerouslySetInnerHTML: {
                            __html: i.ghes_release_notes_upgrade_patch_and_release,
                          },
                        }),
                        ' ',
                        l('notices.release_notes_use_latest'),
                      ],
                    }),
                ],
              }),
              (0, n.jsxs)('div', {
                className: 'container-xl px-3',
                children: [
                  (0, n.jsx)('div', {
                    className: 'mt-3',
                    dangerouslySetInnerHTML: { __html: t.intro },
                  }),
                  (0, n.jsx)(F, { patch: t, withReleaseNoteLabel: !0 }),
                ],
              }),
            ],
          })
        )
      }
      function b(e) {
        var t = e.context,
          s = (0, u.Hv)(),
          r = s.currentLanguage,
          i = s.currentProduct,
          o = (0, D.useState)(''),
          c = o[0],
          d = o[1],
          h = t.prevRelease,
          f = t.nextRelease,
          x = t.latestPatch,
          F = t.latestRelease,
          p = t.currentVersion,
          E = t.releaseNotes,
          v = t.releases,
          C = t.message
        return (0, n.jsxs)('div', {
          className: 'd-flex',
          children: [
            (0, n.jsxs)('article', {
              className: 'min-width-0 flex-1',
              children: [
                (0, n.jsxs)('div', {
                  className:
                    'd-flex flex-items-center flex-justify-between color-bg-primary text-bold px-5 py-2',
                  children: [
                    h
                      ? (0, n.jsxs)(m.r, {
                          className: 'btn btn-outline',
                          href: '/'
                            .concat(r, '/')
                            .concat(p.plan, '@')
                            .concat(h, '/')
                            .concat(null === i || void 0 === i ? void 0 : i.id, '/release-notes'),
                          children: [(0, n.jsx)(l.wyc, {}), ' ', h],
                        })
                      : (0, n.jsx)('div', {}),
                    (0, n.jsxs)('h1', {
                      className: 'f4 py-3 m-0',
                      children: [p.planTitle, ' ', p.currentRelease, ' release notes'],
                    }),
                    f
                      ? (0, n.jsxs)(m.r, {
                          className: 'btn btn-outline',
                          href: '/'
                            .concat(r, '/')
                            .concat(p.plan, '@')
                            .concat(f, '/')
                            .concat(null === i || void 0 === i ? void 0 : i.id, '/release-notes'),
                          children: [f, ' ', (0, n.jsx)(l.XCv, {})],
                        })
                      : (0, n.jsx)('div', {}),
                  ],
                }),
                (0, n.jsx)('div', {
                  className: 'markdown-body',
                  children: E.map(function (e) {
                    return (0, n.jsx)(
                      j,
                      {
                        patch: e,
                        currentVersion: p,
                        latestPatch: x,
                        latestRelease: F,
                        message: C,
                        didEnterView: function () {
                          d(e.version)
                        },
                      },
                      e.version
                    )
                  }),
                }),
              ],
            }),
            (0, n.jsx)('aside', {
              className:
                'markdown-body position-sticky top-0 d-none d-md-block border-left no-print color-bg-primary flex-shrink-0',
              style: { width: 260, height: '100vh' },
              children: (0, n.jsx)('nav', {
                className: 'height-full overflow-auto',
                children: (0, n.jsx)('ul', {
                  className: 'list-style-none pl-0 text-bold',
                  children: v.map(function (e) {
                    var t = '/'
                      .concat(r, '/')
                      .concat(p.plan, '@')
                      .concat(e.version, '/')
                      .concat(null === i || void 0 === i ? void 0 : i.id, '/release-notes')
                    return e.patches && 0 !== e.patches.length
                      ? e.version === p.currentRelease
                        ? (0, n.jsx)(
                            'li',
                            {
                              className: 'border-bottom',
                              children: (0, n.jsxs)('details', {
                                className: 'my-0 details-reset release-notes-version-picker',
                                'aria-current': 'page',
                                open: !0,
                                children: [
                                  (0, n.jsxs)('summary', {
                                    className:
                                      'px-3 py-4 my-0 d-flex flex-items-center flex-justify-between',
                                    children: [
                                      e.version,
                                      (0, n.jsxs)('div', {
                                        className: 'd-flex',
                                        children: [
                                          (0, n.jsxs)('span', {
                                            className:
                                              'color-text-tertiary text-mono text-small text-normal mr-1',
                                            children: [e.patches.length, ' releases'],
                                          }),
                                          (0, n.jsx)(l.v4q, {}),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, n.jsx)('ul', {
                                    className:
                                      'color-bg-tertiary border-top list-style-none py-4 px-0 my-0',
                                    children: e.patches.map(function (e) {
                                      var s = e.version === c
                                      return (0,
                                      n.jsx)('li', { className: a()('js-release-notes-patch-link px-3 my-0 py-1', s && 'selected'), children: (0, n.jsxs)(m.r, { href: ''.concat(t, '#').concat(e.version), className: 'd-flex flex-items-center flex-justify-between', children: [e.version, (0, n.jsx)('span', { className: 'color-text-tertiary text-mono text-small text-normal', children: y()(e.date).format('MMMM DD, YYYY') })] }) }, e.version)
                                    }),
                                  }),
                                ],
                              }),
                            },
                            e.version
                          )
                        : (0, n.jsx)(
                            'li',
                            {
                              className: 'border-bottom',
                              children: (0, n.jsxs)(m.r, {
                                className:
                                  'px-3 py-4 my-0 d-flex flex-items-center flex-justify-between',
                                href: t,
                                children: [
                                  e.version,
                                  (0, n.jsxs)('span', {
                                    className:
                                      'color-text-tertiary text-mono text-small text-normal mr-1',
                                    children: [e.patches.length, ' releases'],
                                  }),
                                ],
                              }),
                            },
                            e.version
                          )
                      : (0, n.jsx)(
                          'li',
                          {
                            className: 'border-bottom',
                            children: (0, n.jsxs)(m.r, {
                              href: t,
                              className:
                                'Link--primary no-underline px-3 py-4 my-0 d-flex flex-items-center flex-justify-between',
                              children: [e.version, (0, n.jsx)(l.Pfi, {})],
                            }),
                          },
                          e.version
                        )
                  }),
                }),
              }),
            }),
          ],
        })
      }
      var g = !0
      function N(e) {
        var t = e.mainContext,
          s = e.ghesContext,
          D = e.ghaeContext,
          i = e.currentVersion
        return (0, n.jsx)(u.Tr.Provider, {
          value: t,
          children: (0, n.jsxs)(r.H, {
            children: [
              'enterprise-server' === i.plan && (0, n.jsx)(b, { context: s }),
              'github-ae' === i.plan && (0, n.jsx)(E, { context: D }),
            ],
          }),
        })
      }
    },
    7670: function (e, t, s) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/[versionId]/admin/release-notes',
        function () {
          return s(1696)
        },
      ])
    },
  },
  function (e) {
    e.O(0, [547, 392, 130, 774, 888, 179], function () {
      return (t = 7670), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  },
])
