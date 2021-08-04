exports.id = 54
exports.ids = [54]
exports.modules = {
  /***/ 4054: /***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    'use strict'
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ O: function () {
        return /* binding */ Breadcrumbs
      },
      /* harmony export */
    })
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(5282)
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__)
    /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4058)
    /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default =
      /*#__PURE__*/ __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__)
    /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6731)
    /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default =
      /*#__PURE__*/ __webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__)
    /* harmony import */ var _context_MainContext__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(1013)
    /* harmony import */ var components_Link__WEBPACK_IMPORTED_MODULE_4__ =
      __webpack_require__(6359)

    const Breadcrumbs = ({ variant = 'default' }) => {
      const router = (0, next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)()
      const pathWithLocale = `/${router.locale}${router.asPath.split('?')[0]}` // remove query string

      const { breadcrumbs } = (0,
      _context_MainContext__WEBPACK_IMPORTED_MODULE_3__ /* .useMainContext */.Hv)()
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('nav', {
        'data-testid': 'breadcrumbs',
        className: 'f5',
        'aria-label': 'Breadcrumb',
        children: Object.values(breadcrumbs).map((breadcrumb, i, arr) => {
          if (!breadcrumb) {
            return null
          }

          const title = `${breadcrumb.documentType}: ${breadcrumb.title}`
          return [
            !breadcrumb.href
              ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  'span',
                  {
                    'data-testid': 'breadcrumb-title',
                    title: title,
                    className: 'px-2',
                    children: breadcrumb.title,
                  },
                  title
                )
              : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  components_Link__WEBPACK_IMPORTED_MODULE_4__ /* .Link */.r,
                  {
                    'data-testid': 'breadcrumb-link',
                    href: breadcrumb.href,
                    title: title,
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                      'd-inline-block px-2',
                      variant === 'large' && 'text-uppercase text-mono',
                      pathWithLocale === breadcrumb.href && 'color-text-tertiary'
                    ),
                    children: breadcrumb.title,
                  },
                  title
                ),
            i !== arr.length - 1
              ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('span', {
                  className: 'color-text-tertiary',
                  children: '/',
                })
              : null,
          ]
        }),
      })
    }

    /***/
  },
}
