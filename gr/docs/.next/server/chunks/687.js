exports.id = 687
exports.ids = [687]
exports.modules = {
  /***/ 5687: /***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    'use strict'
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ pY: function () {
        return /* binding */ GenericError
      },
      /* harmony export */ AG: function () {
        return /* binding */ SimpleHeader
      },
      /* harmony export */ zb: function () {
        return /* binding */ SimpleFooter
      },
      /* harmony export */
    })
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(5282)
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__)
    /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701)
    /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default =
      /*#__PURE__*/ __webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__)
    /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664)
    /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731)
    /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default =
      /*#__PURE__*/ __webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__)
    /* harmony import */ var _primer_octicons_react__WEBPACK_IMPORTED_MODULE_4__ =
      __webpack_require__(3887)
    /* harmony import */ var _primer_octicons_react__WEBPACK_IMPORTED_MODULE_4___default =
      /*#__PURE__*/ __webpack_require__.n(_primer_octicons_react__WEBPACK_IMPORTED_MODULE_4__)
    /* harmony import */ var components_hooks_useVersion__WEBPACK_IMPORTED_MODULE_5__ =
      __webpack_require__(2638)

    function GenericError() {
      const { isEnterprise } = (0,
      components_hooks_useVersion__WEBPACK_IMPORTED_MODULE_5__ /* .useVersion */.a)()
      return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
        className: 'min-h-screen d-flex flex-column',
        children: [
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            next_head__WEBPACK_IMPORTED_MODULE_1___default(),
            {
              children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('title', {
                children: 'GitHub Documentation',
              }),
            }
          ),
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SimpleHeader, {}),
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('div', {
            className: 'container-xl p-responsive py-9 width-full flex-1',
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
                    children: 'It looks like something went wrong.',
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
                        _primer_octicons_react__WEBPACK_IMPORTED_MODULE_4__.CommentDiscussionIcon,
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
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SimpleFooter, {}),
        ],
      })
    }
    const SimpleHeader = () => {
      const router = (0, next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)()
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('div', {
        className: 'border-bottom color-border-secondary no-print',
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('header', {
          className: 'container-xl p-responsive py-3 position-relative d-flex width-full',
          children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
            className: 'd-flex flex-items-center',
            style: {
              zIndex: 3,
            },
            id: 'github-logo-mobile',
            role: 'banner',
            children: [
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                next_link__WEBPACK_IMPORTED_MODULE_2__.default,
                {
                  href: `/${router.locale}`,
                  children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('a', {
                    'aria-hidden': 'true',
                    tabIndex: -1,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      _primer_octicons_react__WEBPACK_IMPORTED_MODULE_4__.MarkGithubIcon,
                      {
                        size: 32,
                        className: 'color-icon-primary',
                      }
                    ),
                  }),
                }
              ),
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                next_link__WEBPACK_IMPORTED_MODULE_2__.default,
                {
                  href: `/${router.locale}`,
                  children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('a', {
                    className: 'h4-mktg color-text-primary no-underline no-wrap pl-2',
                    children: 'GitHub Docs',
                  }),
                }
              ),
            ],
          }),
        }),
      })
    }
    const SimpleFooter = () => {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('footer', {
        className: 'py-6 text-small',
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('div', {
          className: 'container-xl d-flex px-3 px-md-6 flex-justify-center',
          children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('ul', {
            className: 'd-flex list-style-none flex-wrap flex-justify-center',
            children: [
              /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('li', {
                className: 'd-flex mr-xl-3 color-text-secondary',
                children: [
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    _primer_octicons_react__WEBPACK_IMPORTED_MODULE_4__.MarkGithubIcon,
                    {
                      className: 'mr-2 mr-xl-3',
                      size: 20,
                    }
                  ),
                  /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('span', {
                    children: ['\xA9 ', new Date().getFullYear(), ' GitHub, Inc.'],
                  }),
                ],
              }),
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('li', {
                className: 'ml-3',
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('a', {
                  href: '/github/site-policy/github-terms-of-service',
                  children: 'Terms',
                }),
              }),
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('li', {
                className: 'ml-3',
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('a', {
                  href: '/github/site-policy/github-privacy-statement',
                  children: 'Privacy ',
                }),
              }),
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('li', {
                className: 'ml-3',
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('a', {
                  href: 'https://github.com/security',
                  children: 'Security',
                }),
              }),
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('li', {
                className: 'ml-3',
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('a', {
                  href: 'https://www.githubstatus.com/',
                  children: 'Status',
                }),
              }),
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('li', {
                className: 'ml-3',
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('a', {
                  href: '/',
                  children: 'Help',
                }),
              }),
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('li', {
                className: 'ml-3',
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('a', {
                  href: 'https://support.github.com',
                  children: 'Contact GitHub',
                }),
              }),
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('li', {
                className: 'ml-3',
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('a', {
                  href: 'https://github.com/pricing',
                  children: 'Pricing',
                }),
              }),
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('li', {
                className: 'ml-3',
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('a', {
                  href: '/developers',
                  children: 'Developer API',
                }),
              }),
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('li', {
                className: 'ml-3',
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('a', {
                  href: 'https://services.github.com/',
                  children: 'Training',
                }),
              }),
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('li', {
                className: 'ml-3',
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('a', {
                  href: 'https://github.com/about',
                  children: 'About',
                }),
              }),
            ],
          }),
        }),
      })
    }

    /***/
  },

  /***/ 2638: /***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    'use strict'
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ a: function () {
        return /* binding */ useVersion
      },
      /* harmony export */
    })
    /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6731)
    /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__)

    const DEFAULT_VERSION = 'free-pro-team@latest'
    const useVersion = () => {
      const router = (0, next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)()
      const currentVersion = router.query.versionId || DEFAULT_VERSION
      return {
        currentVersion,
        isEnterprise: currentVersion.includes('enterprise'),
        isEnterpriseServer: currentVersion.includes('enterprise-server'),
      }
    }

    /***/
  },
}
