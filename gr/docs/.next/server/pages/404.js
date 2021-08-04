;(function () {
  var exports = {}
  exports.id = 197
  exports.ids = [197]
  exports.modules = {
    /***/ 7348: /***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(5282)
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__)
      /* harmony import */ var components_GenericError__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(5687)
      /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(701)
      /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__)
      /* harmony import */ var _primer_octicons_react__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(3887)
      /* harmony import */ var _primer_octicons_react__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/ __webpack_require__.n(_primer_octicons_react__WEBPACK_IMPORTED_MODULE_3__)
      /* harmony import */ var components_hooks_useVersion__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(2638)

      const Custom404 = () => {
        const { isEnterprise } = (0,
        components_hooks_useVersion__WEBPACK_IMPORTED_MODULE_4__ /* .useVersion */.a)()
        return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
          className: 'min-h-screen d-flex flex-column',
          children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              next_head__WEBPACK_IMPORTED_MODULE_2___default(),
              {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  'title',
                  {
                    children: '404 - Page not found',
                  }
                ),
              }
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              components_GenericError__WEBPACK_IMPORTED_MODULE_1__ /* .SimpleHeader */.AG,
              {}
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('div', {
              className: 'container-xl p-responsive py-6 width-full flex-1',
              children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                'article',
                {
                  className: 'col-md-10 col-lg-7 mx-auto',
                  children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('h1', {
                      className: 'mb-3 pb-3 border-bottom',
                      children: 'Ooops!',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('p', {
                      className: 'lead-mktg',
                      children: "It looks like this page doesn't exist.",
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('p', {
                      className: 'lead-mktg',
                      children:
                        'We track these errors automatically, but if the problem persists please feel free to contact us.',
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('a', {
                      id: 'contact-us',
                      href: isEnterprise
                        ? 'https://enterprise.github.com/support'
                        : 'https://support.github.com/contact',
                      className: 'btn btn-outline mt-2',
                      children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                          _primer_octicons_react__WEBPACK_IMPORTED_MODULE_3__.CommentDiscussionIcon,
                          {
                            size: 'small',
                            className: 'octicon mr-1',
                          }
                        ),
                        'Contact support',
                      ],
                    }),
                  ],
                }
              ),
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              components_GenericError__WEBPACK_IMPORTED_MODULE_1__ /* .SimpleFooter */.zb,
              {}
            ),
          ],
        })
      }

      /* harmony default export */ __webpack_exports__['default'] = Custom404

      /***/
    },

    /***/ 3887: /***/ function (module) {
      'use strict'
      module.exports = require('@primer/octicons-react')

      /***/
    },

    /***/ 8417: /***/ function (module) {
      'use strict'
      module.exports = require('next/dist/next-server/lib/router-context.js')

      /***/
    },

    /***/ 2238: /***/ function (module) {
      'use strict'
      module.exports = require('next/dist/next-server/lib/router/utils/get-asset-path-from-route.js')

      /***/
    },

    /***/ 701: /***/ function (module) {
      'use strict'
      module.exports = require('next/head')

      /***/
    },

    /***/ 6731: /***/ function (module) {
      'use strict'
      module.exports = require('next/router')

      /***/
    },

    /***/ 9297: /***/ function (module) {
      'use strict'
      module.exports = require('react')

      /***/
    },

    /***/ 5282: /***/ function (module) {
      'use strict'
      module.exports = require('react/jsx-runtime')

      /***/
    },
  }
  // load runtime
  var __webpack_require__ = require('../webpack-runtime.js')
  __webpack_require__.C(exports)
  var __webpack_exec__ = function (moduleId) {
    return __webpack_require__((__webpack_require__.s = moduleId))
  }
  var __webpack_exports__ = __webpack_require__.X(0, [664, 687], function () {
    return __webpack_exec__(7348)
  })
  module.exports = __webpack_exports__
})()
