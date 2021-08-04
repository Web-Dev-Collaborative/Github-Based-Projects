exports.id = 227
exports.ids = [227]
exports.modules = {
  /***/ 2227: /***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    'use strict'
    // ESM COMPAT FLAG
    __webpack_require__.r(__webpack_exports__)

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      default: function () {
        return /* binding */ MainLanding
      },
      getServerSideProps: function () {
        return /* binding */ getServerSideProps
      },
    })

    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(5282)
    // EXTERNAL MODULE: ./components/context/MainContext.tsx
    var MainContext = __webpack_require__(1013)
    // EXTERNAL MODULE: ./components/DefaultLayout.tsx + 15 modules
    var DefaultLayout = __webpack_require__(4055)
    // EXTERNAL MODULE: ./components/hooks/useTranslation.ts
    var useTranslation = __webpack_require__(8558)
    // EXTERNAL MODULE: ./components/hooks/useVersion.ts
    var useVersion = __webpack_require__(2638)
    // EXTERNAL MODULE: external "@primer/octicons-react"
    var octicons_react_ = __webpack_require__(3887)
    // EXTERNAL MODULE: external "next/router"
    var router_ = __webpack_require__(6731) // CONCATENATED MODULE: ./components/landing/OctocatHeader.tsx
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

    function OctocatHeader(props) {
      return /*#__PURE__*/ jsx_runtime_.jsx(
        'svg',
        _objectSpread(
          _objectSpread(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 1163.67 358.83',
            },
            props
          ),
          {},
          {
            children: /*#__PURE__*/ jsx_runtime_.jsx('g', {
              'data-name': 'Layer 2',
              children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)('g', {
                'data-name': 'octocat header',
                children: [
                  /*#__PURE__*/ jsx_runtime_.jsx('ellipse', {
                    cx: 103.6,
                    cy: 346.72,
                    rx: 87.23,
                    ry: 8.57,
                    fill: 'rgba(0,0,0,.15)',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('ellipse', {
                    cx: 317.81,
                    cy: 346.72,
                    rx: 38.5,
                    ry: 8.57,
                    fill: 'rgba(0,0,0,.15)',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('ellipse', {
                    cx: 551.85,
                    cy: 342.73,
                    rx: 99.97,
                    ry: 16.1,
                    fill: 'rgba(0,0,0,.15)',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M1163.67 292.31l-198-4.27-20.59-61.16a142.6 142.6 0 0017.77-8c11.26-6.27 12.58-22.69 7.82-33.31-3.43-1.31-12.31-1.71-12.31-1.71a48.88 48.88 0 01.83 14.71c-.65 5-12.33 11-18.94 14l-24-71.34c3.63-2.07 39.84-43.64 39.84-43.64h16.21l69.46 78.37 22.9-11.8z',
                    fill: 'rgba(0,0,0,.1)',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M970.65 185.57s10.72 28-11.92 36.3-94.37 32.4-82.59 43.23c26.69 24.53 127.29 27.22 127.29 27.22s-6.89-42.43-12.28-61.07z',
                    fill: 'rgba(0,0,0,.15)',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M44.62 269.6l27.87-41.35 2.51 20.5 20.43-34.62 4.77 13.24 9.57-23.23 10.76 32.26 16.8-48.74L150 228l17.65-23.89s-19 6.57-19 4.83 25.64-33.81 25.64-33.81-23.61 8.35-23.62 6.62 20-19.3 26.83-30.35 19.04-49.4 19.04-49.4 19.6 47.19 30.06 52.28c3.38-7.56 14.13-29.06 14.13-29.06l-21.29 8.9s32.08-64.05 36-78.54 3-9.51 10 3.13c4.88 10.73 10.68 45.83 28.46 65.78 16.82 15-12.08 4.32-12.08 4.32l26.18 47.5 23-42.22 13.65 32.79L365 124.46l-23 15.28s20.5-28.55 24.87-51.14 9.77-58.49 9.77-58.49l28.9 52.29S433.12 9.84 434.16 0c3.27 34.65 47 117.41 47 117.41s17-34.29 18.56-47C505 83 573.83 292.7 573.83 292.7S379.7 304.66 304 304.91s-220.81 1.26-234.19-6.1-25.19-29.21-25.19-29.21z',
                    fill: 'rgba(0,0,0,.1)',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M572.28 291.55s110.26-9.9 124-19.52',
                    fill: 'none',
                    stroke: 'rgba(0,0,0,.1)',
                    strokeMiterlimit: 10,
                    strokeWidth: 2,
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M341 317.75s7.46-2.12 8.62 1.61S341 338 341 338s11.19-.94 11.66 1.39c-8.17 1.17-17.81 1.13-18.41 1.58s6.75-23.22 6.75-23.22z',
                    fill: '#f66a0a',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M364.46 304.05c-.83-1.55-13 0-13 0v-7.42s9.27-2.7 9.85-4.84c1.46-5.33-9.58-1.35-11.4-1a44.57 44.57 0 00-35.19 40.73 19.71 19.71 0 00.6 7c-2.42 1.94-6.35 4.35-9.17 2.41-4.36-3 9-25.46 8.42-36-.48-8.92-7.77-29.57-26.27-29.71-14.84-.1-23.28 6-29 19s-9.33 19.69-15.39 19.1-8.77.5-13.63-8.88c.47 6.34 5.34 19.34 18.35 19s18.74-6.7 24.48-12.16 15.71-7.6 16.18-.34-5.69 25-4.76 30.81 3.5 9.13 14.09 8.81c9-.28 15.25-6.52 17.86-9.34a8 8 0 004.72 3.63 3.31 3.31 0 01.92.3c.7.42-1.48 3.56-1.78 4.32s14.15 1.34 20.84.78a3 3 0 001.93-.66 2 2 0 00-.53-2.89 5.84 5.84 0 00-3.16-.86l-11.24-.84a69 69 0 0014.64-11.55c2.14-2.21 4.27-5.12 3.49-8.11-.64-2.4-3-3.92-5.09-5.19a48.3 48.3 0 01-.13-11.89c.5-3.2 1.3-5.49 3.25-7.57 0 .07 1 9.81 3.82 11.05s12.39-4 12.39-4 1.52 3.63 1.93 3.53 2.81-5.66 1.98-7.22z',
                    fill: '#ff9c57',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M357.94 286.54c-1.44-.78-2.2-4.89-1.1-5.38s3.88 1.1 3.82 3.42c.72-.37 2.38-.79 2.76-1.21a2.82 2.82 0 01-1.49-2.2c-.57-2.32 1.15-2.83 2-2.14s2 2.71 1.48 4.08c2.53-1.32 5.78-.66 8.19.87a11 11 0 014.66 6.92 3 3 0 00.8 1.78c1.09.86 2.74-.35 4 .11 1.09.38-.32 4.73-1.29 5.35a22.76 22.76 0 01-8.82 3.3c-2.93.43-6.1.24-8.54-1.43a11.76 11.76 0 01-3-3.12c-2.98-4.43-2.24-5.31-3.47-10.35z',
                    fill: '#ff9c57',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M341.87 305a74.7 74.7 0 00-5.53 8.66 66.28 66.28 0 00-6.37 13 94.73 94.73 0 0111.59-6.28l-.34-.21a48.3 48.3 0 01-.13-11.89 19.87 19.87 0 01.78-3.28z',
                    fill: '#f66a0a',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M292 345.39c-.54-5.66 13.7-18.14 4.28-20.93a1 1 0 01-.58-1.43c2.71-3.75 7.91-6.82 9.23-11.39s-1.85-8.14-6-9.15c-1.57-.38-3.7-.7-4.85-2-1.35-1.49-1.21-4-3.08-5.21-2.88-1.83-7.44.16-10 1.55-4.22 2.24-7.53 5.92-10.86 9.27-5.66 5.7-12.27 12.95-20.82 13.63-9.54.77-14.53-6.87-18.9-14 1 6.65 6 18.07 18.21 17.75 13-.33 18.74-6.7 24.48-12.16s15.71-7.6 16.18-.34-5.69 25-4.76 30.81 3.5 9.13 14.09 8.81a20.75 20.75 0 002.4-.24c-4.45.57-8.53.29-9.02-4.97z',
                    fill: '#ff7000',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M372.76 287.42a12.1 12.1 0 013.65 4c1.84 3 4.11 4.05 7 3.43.21-1 .21-1.88-.26-2-1.3-.46-2.95.75-4-.11a3 3 0 01-.8-1.78 11 11 0 00-4.66-6.92 9.68 9.68 0 00-5.46-1.55c-.89.23-1.78.46-2.67.66h-.06c-.62.14-1.24.24-1.87.32-.65.25-1.28.53-1.9.83.12.18.25.35.38.51a17.52 17.52 0 0110.65 2.61zM303.71 288.32c7.4 9.47 8.18 22.17 6.51 34 2.34-6.33 4.58-12.9 4.33-17.35-.48-8.92-7.77-29.57-26.27-29.71h-1c6.58 2.82 12.72 8.32 16.43 13.06z',
                    fill: '#ffd1ac',
                    opacity: 0.8,
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M339.4 345.86l-5.57-.43a6.45 6.45 0 012.78 2.69 3.44 3.44 0 01.37 2.34c1.55 0 3-.09 4.18-.19a3 3 0 001.93-.66 2 2 0 00-.53-2.89 5.84 5.84 0 00-3.16-.86z',
                    fill: '#f66a0a',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('circle', {
                    cx: 383.03,
                    cy: 293.13,
                    r: 1.34,
                    fill: '#2f363d',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M341.22 320.14c-4.77 0-9.83 5.5-11.79 7.16 10.79-7.09 14.69-3.82 15.29 1.5a8.3 8.3 0 01-.14 2.59c1.36-1.84 2.29-3.93 1.73-6.06-.64-2.4-2.6-5.19-5.09-5.19zM351.44 304.05v-6.75a3.29 3.29 0 00-2.48 2.24c-.42 1-.63 4.91 0 5.79 1.16 1.54 6.94-.33 8.8-.56a28 28 0 016.82-.12 1.7 1.7 0 00-.15-.6c-.8-1.55-12.99 0-12.99 0z',
                    fill: '#ffd1ac',
                    opacity: 0.8,
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M151 319.3s1.73 12.95 5.08 16.55 17.29 13.25 18 11.4c-6.77-8.45-14-29.49-14-29.49zM106.47 320.15a.79.79 0 00-.38.29c-.16.25 0 .57.14.82a38.26 38.26 0 013.65 8.71c.62 2.19 1.75 5.22 3.77 4.16 3.51-1.85.64-6.46 0-10.38.4 2.42 8.16-.38 10.69-4 3.24-4.61-4.46-5.29-7.26-4.59-3.61.92-7.26 3.41-10.61 4.99z',
                    fill: '#ff7000',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M136.12 292.06c-4.66-.54-9.52-.37-13.81 1.52-4.12 1.81-7.41 5.06-10.4 8.42a12.39 12.39 0 01-3.06 2.77 8.48 8.48 0 01-3.84.91c-6.26.22-12.15-3.28-16.42-7.85s-7.24-10.18-10.43-15.56c-5.12-8.64-11.27-17.16-20.11-21.93-12.25-6.62-28.21-4.55-39.39 3.76S1 286.16 0 300.05c-.22 3.07.43 7 3.41 7.73l4.65-8.92c2.28-4.39 4.68-8.91 8.57-12s9.74-4.21 13.78-1.36c3.17 2.24 4.49 6.32 4.9 10.18s.13 7.81 1 11.59c2.19 9.19 11.16 15.56 20.43 17.38a36.12 36.12 0 0020.1-1.83c10.57-4.16 19.79-13.43 31.12-12.69 1.48 4 5.41 6.72 9.53 7.85s8.47.94 12.74.73l-5.57 6.67a56.84 56.84 0 0011.62 15.72c2.28-5.8.41-11.71-3.21-16.8a9.17 9.17 0 014.24-4.13c4.16 2.24 15.21 1.63 19.88 1-.2 3.38.51 11.21 2.67 14.55s9.17 10.35 13.16 12.51c2.52 1.36 10.25 3.16 11.4.87-9.46-4-18.88-13.73-18.84-24 0-5 4.35-8.31 4.12-12.55-.19-3.67-6.16-8-8.77-10.06a49.21 49.21 0 00-24.81-10.43z',
                    fill: '#ff9c57',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M83.58 309.1c-3.72 0-7.56.77-10.33-2.21a25.63 25.63 0 01-2.36-3.8c-2.21-3.37-4.91-3.78-8.79-3.55-4.74.28-6.38-1.52-8.27-5.77-5.38-12-19-21.35-32.06-14.36-10 5.38-16.15 17.18-18.85 27.83a1 1 0 01-.13.27 3.51 3.51 0 00.66.27l4.65-8.92c2.28-4.39 4.68-8.91 8.57-12s9.74-4.21 13.78-1.36c3.17 2.24 4.49 6.32 4.9 10.18s.13 7.81 1 11.59c2.19 9.19 11.16 15.56 20.43 17.38a36.12 36.12 0 0020.1-1.83c7.52-3 14.36-8.49 21.76-11.18-4.64-1.98-9.64-2.56-15.06-2.54z',
                    fill: '#ff7000',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M134 305.1c.22 0 9 5.91 8.89 8.67s-8 7.05-8 7.05 3.85-4.93 3-7.86-3.89-7.86-3.89-7.86z',
                    fill: '#ffd1ac',
                    opacity: 0.6,
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M167 307.62c-.88 3-2.56 5.8-3.31 8.95a13.46 13.46 0 002.21 11.33 16.57 16.57 0 01-.24-2.81c0-5 4.35-8.31 4.12-12.55-.1-1.6-1.28-3.31-2.78-4.92z',
                    fill: '#fb8532',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M173 301.58c2.29-.91 4.2 1.45 2.58 7.05l2.92.07a10.53 10.53 0 01-.54-4.74 2.49 2.49 0 012.78-2.25c1.57.08 2.12 1.43 2.18 3a9 9 0 01-1 4.39 12 12 0 014.94 11.1 36.87 36.87 0 00-.7 4.52 4.07 4.07 0 002 3.82 16 16 0 002.51.56c.82.23 1.66.92 1.55 1.77-.1.7-.78 1.15-1.42 1.47a17.78 17.78 0 01-15.45.05c-4.23-2.06-7.64-6.08-8.24-10.74a11.22 11.22 0 012.52-8.51c.7-.84 2.95-1.89 3.2-2.88-1.13-1.59-2.92-7.48.17-8.68z',
                    fill: '#ff9c57',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('circle', {
                    cx: 190.83,
                    cy: 330.27,
                    r: 1.33,
                    fill: '#2f363d',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M65.34 276.43c5.29 6 9.36 12.92 14.45 19.06a36.58 36.58 0 0019.71 12.59c.57-.08 1.13-.18 1.7-.31-5.49-.5-10.59-3.71-14.4-7.78-4.27-4.58-7.23-10.18-10.42-15.57-5.12-8.64-11.28-17.16-20.12-21.93a34.48 34.48 0 00-19.89-3.72c11.17 2.17 21.71 9.41 28.97 17.66zM152.3 301.32c4.87 2.78 8.66 6.83 12.12 11.17a22.63 22.63 0 011-3.5 43.88 43.88 0 00-8.69-7.65c-7.35-4.84-15.86-6.24-24.36-7.68l2.94 1.36c5.62 2.27 11.69 3.29 16.99 6.3z',
                    fill: '#ffd1ac',
                    opacity: 0.6,
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M631.76 266.63c-.37-1.68 78.91-92.89 85.72-99.15s67.73-78 72.14-80.45c2.68-6-6.2-11.06-10.21-8.33-3.73 7.3-67.86 83.12-73.66 89.3s-52.29 56.46-72.64 72.56c-4.4 12.23-8.47 14.29-11.61 17.84-.54 1.89.14 4.45 3.81 6.89s6.45 1.34 6.45 1.34z',
                    fill: '#f9c513',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M768.38 104.24c-5.79 5.67-27.63 31.4-33.29 38.11-12.21 14.47-62.7 71.66-75.59 86.07-6 6.76-28.89 30.24-34.94 36.35.24.18.47.37.75.55 3.66 2.45 6.45 1.31 6.45 1.31-.37-1.68 78.91-92.89 85.72-99.15s67.73-78 72.14-80.45a5.23 5.23 0 00-.26-4.91c-6.36 7.93-13.8 15.08-20.98 22.12z',
                    fill: '#ffdf5d',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M623.11 256.76c-.56.55-1.1 1.09-1.61 1.67-.54 1.89.14 4.45 3.81 6.89s6.45 1.31 6.45 1.31a5.82 5.82 0 011-1.6 18.86 18.86 0 00-9.65-8.27z',
                    fill: '#dbab09',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M550.46 91.43c-3.68-12.85-14.32-17.84-18.14-18.61a1.05 1.05 0 00-1.21 1.31l4.68 17.3S526 105 526 119.32s1.47 19.8 0 24.2a29.19 29.19 0 003.3 24.94 59.9 59.9 0 0031.93 25.25',
                    fill: 'none',
                    stroke: '#0366d6',
                    strokeMiterlimit: 10,
                    strokeWidth: 2.5,
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M531.67 72.8s8.8-9.85 30.26-2.19a61.84 61.84 0 0147.6-1.61c26 9.82 33.11 25.77 33.11 25.77',
                    fill: 'none',
                    stroke: '#0366d6',
                    strokeMiterlimit: 10,
                    strokeWidth: 2.5,
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M618.45 105.68s16.22-13.9 30.13-10.93c13.13 10.16 4.63 36.42 1.54 40.28',
                    fill: 'none',
                    stroke: '#0366d6',
                    strokeMiterlimit: 10,
                    strokeWidth: 2.5,
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M629.65 104.52s11.43-6.82 13.91-4.22c2.92 3.07 1.76 19.93.77 26.24M526 119.32s1.3-18.32 11-15.19 15 23.56 25.45 26.27 48.66-9.24 62.18 2.33 7.34 25.09 5 29.72S620 178.8 620 178.8s9.62 9-10.46 15.56',
                    fill: 'none',
                    stroke: '#0366d6',
                    strokeMiterlimit: 10,
                    strokeWidth: 2.5,
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M653.63 126.54s4.62 27.2-7.44 43.64c-13 17.7-41.14 30.1-67.36 27.32',
                    fill: 'none',
                    stroke: '#0366d6',
                    strokeMiterlimit: 10,
                    strokeWidth: 2.5,
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M579.56 200.31s-1.79-8.27-9.27-8.81-25.63 11.75-35 26.16-7.74 21.09 2.77 28.87c8 5.89 27.94 10.21 46.09 8.35l21.9-2.17a3.65 3.65 0 012.27 2.7c0 1.43-3.4 11.62 2.22 12.46s6.46-3.31 6.46-7.46c4.77-2.8 15.57-9 16.07-26.64s-12.7-28.5-27.58-26.26-39 11.51-52.5 8.43M573 200.78s-7.6 8.93-7.73 15.41M592.43 210.34l-8.25-12.43M581.14 203.3l1.88 9.4',
                    fill: 'none',
                    stroke: '#0366d6',
                    strokeMiterlimit: 10,
                    strokeWidth: 2.5,
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('ellipse', {
                    cx: 556.11,
                    cy: 173.79,
                    rx: 2.74,
                    ry: 6.58,
                    transform: 'rotate(-60 556.11 173.788)',
                    fill: 'none',
                    stroke: '#0366d6',
                    strokeMiterlimit: 10,
                    strokeWidth: 2.5,
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M559.59 193.71s-54.21 15.29-78.83 27.52-79.06 42.92-76.8 51.5 47.9-8.09 62.59-14.6c16.5-7.32 64.43-32.57 64.43-32.57M550.81 252.08s-18.69 23.06-29.61 29.7c-10.58 6.44-39.86 21.91-42.11 26.07-3.35 6.18-7.31 27.78 14.2 38.8 9.35 4.79 31.25 6.39 40.37 1.14s8.79-7.37 7.76-8.21c-2.37-1.93-26.57 11.91-37.21 10.38',
                    fill: 'none',
                    stroke: '#0366d6',
                    strokeMiterlimit: 10,
                    strokeWidth: 2.5,
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M497.69 316.26c.78-.78 23.39-3.9 32.84 4.6 7.66 6.91 7 19.25 5.81 19.66M530.53 320.86s18.22-9.77 30.73-28.52a163.63 163.63 0 0018.3-37.13M584.18 254.88l21.52 72.91s6.34 13.52 16.79 12.73 31.37-7.94 40.22-19.66c4.39-5.81 9.65-15.81 7.46-19.29-2.43-3.86-5.66-2-7.53-1.34-2.7-1-21.3-2.52-26.71 7M615.43 266.63s16.22 34.94 23.59 46.52M647.44 168.32s40.64-21.74 55.46-26.32 28.39-9.81 35.69-1.88 1.41 24.4-3.59 30.46c-5.63 6.89-15.23 14.61-28 14.61 0 0-15.87 1.05-17.12-13.77-3.55 1.67-8.84 1.42-5.63-4 4.59-7.72 13.77-17.32 38.4-20.24',
                    fill: 'none',
                    stroke: '#0366d6',
                    strokeMiterlimit: 10,
                    strokeWidth: 2.5,
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M585.61 197.88s17.77 3.65 44-1.2 60.66-22.89 60.66-22.89',
                    fill: 'none',
                    stroke: '#0366d6',
                    strokeMiterlimit: 10,
                    strokeWidth: 2.5,
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M506.67 125.2c11.11 4.56 19.17 18 19.17 18M506.67 138.65c5.31.38 14.51 3.85 18.09 9.41',
                    fill: 'none',
                    stroke: '#0366d6',
                    strokeLinecap: 'round',
                    strokeMiterlimit: 10,
                    strokeWidth: 2.5,
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M628.71 179.61c7 .8 26.88 10.28 32.4 17.73',
                    fill: 'none',
                    stroke: '#0366d6',
                    strokeMiterlimit: 10,
                    strokeWidth: 2.5,
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M657.89 194a21.51 21.51 0 013.22 3.35M630.61 184.57c5.28 3.06 16 13.34 18.82 20.74',
                    fill: 'none',
                    stroke: '#0366d6',
                    strokeLinecap: 'round',
                    strokeMiterlimit: 10,
                    strokeWidth: 2.5,
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('ellipse', {
                    cx: 439.61,
                    cy: 251.44,
                    rx: 22.06,
                    ry: 3.95,
                    transform: 'rotate(-30 439.609 251.433)',
                    fill: 'none',
                    stroke: '#0366d6',
                    strokeMiterlimit: 10,
                    strokeWidth: 2.5,
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('ellipse', {
                    cx: 490.38,
                    cy: 223.36,
                    rx: 19.84,
                    ry: 2.87,
                    transform: 'rotate(-24.91 490.415 223.372)',
                    fill: 'none',
                    stroke: '#0366d6',
                    strokeMiterlimit: 10,
                    strokeWidth: 2.5,
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M547.55 203.76c-2.14 1.1-7.35 3.35-9.47 4.12-9.35 3.41-17.27 5.21-17.71 4s6.8-4.91 16.14-8.32a84.93 84.93 0 0116.61-4.32M591.67 280.24s2.38 3.26 4.09 2.75 2.23-12 0-18.84-5.49-9.88-6-9.83M596.22 295.67c.19.63 7.18.4 11.28 14.38s3.13 21.95 0 20.86M685.06 166.28c-10.54 0-25 11.47-24 13.33 2 3.82 20.82-1.63 20.82-1.63M622.6 197.82s31.85-11 33.08-14.24-23.11-.32-24.09.34',
                    fill: 'none',
                    stroke: '#0366d6',
                    strokeMiterlimit: 10,
                    strokeWidth: 2.5,
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M896.17 132c-15.3 8.93-31.95 13.81-51.19 18.39a531.88 531.88 0 01-56.63 9.76L829 103.78l55.42-23.91 23.8 36.13s-3.14 4.3-12.05 16z',
                    fill: 'rgba(0,0,0,.15)',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M947.18 210.33c-20.69 9.27-211 62-262.13 64.8l88.5-108.85h16.56c16.55 0 33.68-4.32 48.46-6.18s50.63-11 67.24-25.07c4.84-4.15 10.4-14.73 10.4-14.73l41.32 61.77s10.34 19-10.35 28.26z',
                    fill: 'rgba(0,0,0,.15)',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    fill: '#fff',
                    d: 'M828.97 103.78l38.64-60.77 28.56 56.7-14.75-5.38-8.12 27-10.73-21.62-13.66 25.49.74-17.17-14.72 13.3v-13.3l-20.74 25.22 14.78-29.47z',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M1000 314.8l12-90.94 3.88-108.63s5.13-2 11.64 1.65 8.66 8.66 8.66 8.66l-11.66 87.32 2.5 101.94-12.85 11.2z',
                    fill: '#f9c513',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M1036.21 125.54s-2.15-5-8.66-8.66a16.82 16.82 0 00-1.71-.84c-1 8.33-.26 16.74-.21 25.14a211.94 211.94 0 01-2.07 28.48 525.32 525.32 0 00-4.46 58.51c-.18 9.9.76 19.71.92 29.6a155.26 155.26 0 01-2.12 27.56c-2 12.4-5.39 24.49-9.06 36.5l5.33 4.21 12.88-11.24-2.5-101.94z',
                    fill: '#dbab09',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M984.5 143.78c-1.78.14-5.79 71.95-5.79 71.95l74.83 8.13 6.24-87.05z',
                    fill: '#ffea7f',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    fill: '#f9c513',
                    d: 'M1059.78 136.81l-6.24 87.05 9.36 10.48 12.02-77.36-15.14-20.17z',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    fill: '#dbab09',
                    d: 'M1007.95 196.19l-14.09-20.65 18.71-12.65v10.87l25.38-2.5-3.56 23.38-24.87-9.07-1.57 10.62z',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    fill: '#ffd33d',
                    d: 'M1005.75 192.2l-13.63-19.3 18.09-11.83v10.16l24.55-2.34-3.44 21.86-24.06-8.48-1.51 9.93z',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M1032.94 330.7s4.65-48 2.86-54.77c-1.07 3.93-20.4 35.08-20.4 35.08v-30.43s-4.3 14-5.73 18.26c-1.43-6.45-11.45-25.78-10-23.63s1.79 22.55 0 22.55c-1.43-.35-6.8-19-12.17-25.06 2.14 2.15 3.58 17.9 5.37 25.78-.72-2.86-15.23-12.89-22.2-14.32.72 4.65 11.1 13.25 13.25 19.33s-1.44 12.89-1.44 12.89l13.25 9.91z',
                    fill: '#88929c',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M1008.15 330.21c-.34-1 7.41-25.95 7.41-25.95s22.91-14.15 27-16.51 9.77-2 9.77-2l12.46-4.71s34.37 9.09 35.38 9.43 7.07 11.45 9.77 15.16 4 6.06 4.38 12.13l.34 6.06-18.2 19.54h-20.89s-14.82 5.73-18.19 4.72-15.5-4-19.88-7.75-29.35-10.12-29.35-10.12z',
                    fill: '#b1b7bb',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M1053.54 289.94s-1.86-17.37 14.5-36',
                    fill: 'none',
                    stroke: '#959da5',
                    strokeMiterlimit: 10,
                    strokeWidth: 2,
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('circle', {
                    cx: 1069.05,
                    cy: 252.69,
                    r: 2.32,
                    fill: 'none',
                    stroke: '#959da5',
                    strokeMiterlimit: 10,
                    strokeWidth: 2,
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('circle', {
                    cx: 1078.25,
                    cy: 258.52,
                    r: 2.1,
                    fill: 'none',
                    stroke: '#959da5',
                    strokeMiterlimit: 10,
                    strokeWidth: 2,
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M1060.2 264.92s4.56 2.67 8.69 0a82.36 82.36 0 007.81-5.81',
                    fill: 'none',
                    stroke: '#959da5',
                    strokeMiterlimit: 10,
                    strokeWidth: 2,
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M1037.23 272.69a16.7 16.7 0 01-.65-7.86c.26-1.23 1.06-2.64 2.33-2.59a2.7 2.7 0 011.55.73 19.49 19.49 0 012.8 2.87 76.78 76.78 0 0114.36 26.27c-.38-4.77 2.15-9.44 5.77-12.57s8.22-4.9 12.86-6.09c1.73-.45 3.82-.73 5.07.54a3.43 3.43 0 01.66 3.39 7 7 0 01-2 2.94 35.35 35.35 0 01-6.94 4.55 104.64 104.64 0 00-14.7 10.1 3 3 0 01-1.43.79 2.53 2.53 0 01-1-.12c-9.76-2.46-16.15-13.97-18.68-22.95z',
                    fill: '#959da5',
                    opacity: 0.5,
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M1046.5 321.48a104.82 104.82 0 0117.1-13.08c4.35.88 8.29.17 11.61.67 7-6.18 15.21-13.36 22.38-19.34-8.21-2.22-32.76-8.71-32.76-8.71l-12.47 4.71s-5.73-.33-9.77 2c-3.23 1.89-18.47 11.28-24.49 15 3.8 5.78 22.41 14.27 28.4 18.75z',
                    fill: 'rgba(0,0,0,.15)',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    fill: '#dbab09',
                    d: 'M978.71 215.75v6.13l84.19 12.48-9.36-10.48-74.83-8.13z',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M940.7 114.68c.71-2.15 24.06-29.06 24.06-29.06l25.8 32.25h-4.3l11.47 12.18s-15.05 1.43-17.2-2.87c-1.48 3.1-5.69 8.47-7.5 7.87s-11.62-13.23-11.62-13.23-10 18-11.43 17.44S945 116 945 116l-5.83 5.11 3.12-5.07z',
                    fill: '#fff',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M1097.59 289.73c-8.21-2.22-32.76-8.71-32.76-8.71l-12.47 4.71s-5.73-.33-9.77 2c-3.23 1.89-18.47 11.28-24.49 15',
                    fill: 'none',
                    stroke: '#e1e4e8',
                    strokeMiterlimit: 10,
                    strokeWidth: 0.5,
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M172.1 305.31c2.88-.25 1.27 4.88 2.94 5.49 1.26.45 2.87-.54 4.45.15a7.76 7.76 0 013.58 3.58c1.15 2.16 1.05 4.23.94 6.59-.14 3.14.13 6.29 3.7 7.2a4.3 4.3 0 01-1.63-3.6 36.87 36.87 0 01.7-4.52 12 12 0 00-4.94-11.1 9 9 0 001-4.39c-.06-1.57-.61-2.92-2.18-3a2.49 2.49 0 00-2.78 2.25 10.53 10.53 0 00.54 4.74l-2.92-.07c1.62-5.6-.29-8-2.58-7.05-1.46.57-1.81 2.23-1.66 4a1.88 1.88 0 01.84-.27z',
                    fill: '#ffd1ac',
                    opacity: 0.6,
                  }),
                ],
              }),
            }),
          }
        )
      )
    }
    // EXTERNAL MODULE: ./components/landing/ArticleList.tsx
    var ArticleList = __webpack_require__(5201)
    // EXTERNAL MODULE: ./components/Search.tsx
    var Search = __webpack_require__(1125) // CONCATENATED MODULE: ./pages/index.tsx
    function MainLanding({ mainContext, gettingStartedLinks, popularLinks }) {
      return /*#__PURE__*/ jsx_runtime_.jsx(MainContext /* MainContext.Provider */.Tr.Provider, {
        value: mainContext,
        children: /*#__PURE__*/ jsx_runtime_.jsx(DefaultLayout /* DefaultLayout */.H, {
          children: /*#__PURE__*/ jsx_runtime_.jsx(LandingPage, {
            gettingStartedLinks: gettingStartedLinks,
            popularLinks: popularLinks,
          }),
        }),
      })
    }

    function LandingPage(props) {
      const router = (0, router_.useRouter)()
      const { gettingStartedLinks, popularLinks } = props
      const { activeProducts, isFPT } = (0, MainContext /* useMainContext */.Hv)()
      const { currentVersion } = (0, useVersion /* useVersion */.a)()
      const { t } = (0, useTranslation /* useTranslation */.$)(['homepage', 'search', 'toc'])
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
        children: [
          /*#__PURE__*/ jsx_runtime_.jsx('section', {
            id: 'landing',
            className: 'color-bg-tertiary',
            children: /*#__PURE__*/ jsx_runtime_.jsx(Search /* Search */.o, {
              isStandalone: true,
              children: ({ SearchInput, SearchResults }) => {
                return /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                  className: 'container-xl px-3 px-md-6 pb-6 pb-lg-9',
                  children: [
                    /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                      className:
                        'gutter gutter-xl-spacious pt-6 pt-lg-0 d-lg-flex flex-row-reverse flex-items-center',
                      children: [
                        /*#__PURE__*/ jsx_runtime_.jsx('div', {
                          className: 'col-lg-7',
                          children: /*#__PURE__*/ jsx_runtime_.jsx(OctocatHeader, {}),
                        }),
                        /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                          className: 'col-lg-5 mt-6',
                          children: [
                            /*#__PURE__*/ jsx_runtime_.jsx('h1', {
                              className: 'h1-mktg mb-3',
                              children: t('search:need_help'),
                            }),
                            SearchInput,
                          ],
                        }),
                      ],
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx('div', {
                      className: 'mt-3',
                      children: SearchResults,
                    }),
                  ],
                })
              },
            }),
          }),
          /*#__PURE__*/ jsx_runtime_.jsx('section', {
            className: 'container-xl pb-lg-4 my-8 px-3 px-md-6',
            children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
              className: '',
              children: [
                /*#__PURE__*/ jsx_runtime_.jsx('h2', {
                  className: 'text-mono f5 text-normal color-text-secondary text-md-center mb-4',
                  children: t('explore_by_product'),
                }),
                /*#__PURE__*/ jsx_runtime_.jsx('div', {
                  className: 'd-flex flex-wrap gutter gutter-xl-spacious',
                  children: activeProducts.map((product) => {
                    var _product$versions, _product$versions2

                    if (
                      !isFPT &&
                      !(
                        (_product$versions = product.versions) !== null &&
                        _product$versions !== void 0 &&
                        _product$versions.includes(currentVersion)
                      ) &&
                      !product.external
                    ) {
                      return null
                    }

                    const href = `${!product.external ? `/${router.locale}` : ''}${
                      (_product$versions2 = product.versions) !== null &&
                      _product$versions2 !== void 0 &&
                      _product$versions2.includes(currentVersion) &&
                      !isFPT
                        ? `/${currentVersion}/${product.id}`
                        : product.href
                    }`
                    return /*#__PURE__*/ jsx_runtime_.jsx(
                      'div',
                      {
                        className: 'd-flex flex-column col-12 col-sm-6 col-lg-3 pb-4',
                        children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)('a', {
                          className:
                            'btn-mktg flex-auto d-flex flex-items-center btn-outline-mktg btn-large-mktg ws-normal ',
                          href: href,
                          target: product.external ? '_blank' : undefined,
                          children: [
                            product.name,
                            product.external &&
                              /*#__PURE__*/ jsx_runtime_.jsx('span', {
                                className: 'ml-1',
                                children: /*#__PURE__*/ jsx_runtime_.jsx(
                                  octicons_react_.LinkExternalIcon,
                                  {}
                                ),
                              }),
                          ],
                        }),
                      },
                      product.id
                    )
                  }),
                }),
              ],
            }),
          }),
          /*#__PURE__*/ jsx_runtime_.jsx('div', {
            className: 'px-3 px-md-6 container-xl',
            children: /*#__PURE__*/ jsx_runtime_.jsx('div', {
              className: 'container-xl',
              children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                className: 'gutter gutter-xl-spacious clearfix',
                children: [
                  /*#__PURE__*/ jsx_runtime_.jsx('div', {
                    className: 'col-12 col-lg-6 mb-md-4 mb-lg-0 float-left',
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ArticleList /* ArticleList */.w, {
                      title: t('toc:getting_started'),
                      variant: 'spaced',
                      articles: gettingStartedLinks,
                    }),
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('div', {
                    className: 'col-12 col-lg-6 float-left',
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ArticleList /* ArticleList */.w, {
                      title: t('toc:popular'),
                      variant: 'spaced',
                      articles: popularLinks,
                    }),
                  }),
                ],
              }),
            }),
          }),
        ],
      })
    }

    const getServerSideProps = async (context) => {
      const req = context.req
      return {
        props: {
          mainContext: (0, MainContext /* getMainContextFromRequest */.tO)(req),
          gettingStartedLinks: req.context.featuredLinks.gettingStarted.map(
            ({ title, href, intro }) => ({
              title,
              href,
              intro,
            })
          ),
          popularLinks: req.context.featuredLinks.popular.map(({ title, href, intro }) => ({
            title,
            href,
            intro,
          })),
        },
      }
    }

    /***/
  },
}
