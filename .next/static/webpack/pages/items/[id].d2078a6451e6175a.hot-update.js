"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/items/[id]",{

/***/ "./components/layout.tsx":
/*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/utils */ \"./libs/utils.ts\");\n\n\nfunction Layout(param) {\n    let { title , canGoBack , hasTabBar , children  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white w-full text-lg font-medium py-3 max-w-xl fixed text-gray-700 border-b top-0 flex items-center justify-center\",\n                children: [\n                    canGoBack ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"←\"\n                    }, void 0, false, {\n                        fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/layout.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 22\n                    }, this) : null,\n                    title ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/layout.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 18\n                    }, this) : null\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/layout.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,_libs_utils__WEBPACK_IMPORTED_MODULE_1__.cls)(\"pt-14\", hasTabBar ? \"pb-24\" : \"\"),\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/layout.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            hasTabBar ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"bg-white w-full text-gray-800 max-w-xl border-t fixed bottom-0 pb-3 pt-3 flex justify-around items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center space-y-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                fill: \"none\",\n                                viewBox: \"0 0 24 24\",\n                                strokeWidth: 1.5,\n                                stroke: \"currentColor\",\n                                className: \"w-6 h-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    d: \"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/layout.tsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/layout.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"홈\"\n                            }, void 0, false, {\n                                fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/layout.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/layout.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center space-y-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                fill: \"none\",\n                                viewBox: \"0 0 24 24\",\n                                strokeWidth: 1.5,\n                                stroke: \"currentColor\",\n                                className: \"w-6 h-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    d: \"M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/layout.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/layout.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"동네생활\"\n                            }, void 0, false, {\n                                fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/layout.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/layout.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center space-y-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                fill: \"none\",\n                                viewBox: \"0 0 24 24\",\n                                strokeWidth: 1.5,\n                                stroke: \"currentColor\",\n                                className: \"w-6 h-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    d: \"M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/layout.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/layout.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Chats\"\n                            }, void 0, false, {\n                                fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/layout.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/layout.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center space-y-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                fill: \"none\",\n                                viewBox: \"0 0 24 24\",\n                                strokeWidth: 1.5,\n                                stroke: \"currentColor\",\n                                className: \"w-6 h-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    d: \"M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/layout.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/layout.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"LiveStream\"\n                            }, void 0, false, {\n                                fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/layout.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/layout.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center space-y-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                fill: \"none\",\n                                viewBox: \"0 0 24 24\",\n                                strokeWidth: 1.5,\n                                stroke: \"currentColor\",\n                                className: \"w-6 h-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    d: \"M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/layout.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/layout.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Profile\"\n                            }, void 0, false, {\n                                fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/layout.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/layout.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/layout.tsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/layout.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ29DO0FBU3JCLFNBQVNDLE9BQU8sS0FBbUQsRUFBQztRQUFwRCxFQUFDQyxNQUFLLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFQyxTQUFRLEVBQWEsR0FBbkQ7SUFDN0IscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0E7Z0JBQUlDLFdBQVU7O29CQUNaSiwwQkFBWSw4REFBQ0s7a0NBQU87Ozs7OytCQUFrQixJQUFJO29CQUMxQ04sc0JBQVEsOERBQUNPO2tDQUFNUDs7Ozs7K0JBQWdCLElBQUk7Ozs7Ozs7MEJBRXRDLDhEQUFDSTtnQkFBSUMsV0FBV1AsZ0RBQUdBLENBQUMsU0FBU0ksWUFBWSxVQUFVLEVBQUU7MEJBQUlDOzs7Ozs7WUFDeERELDBCQUNDLDhEQUFDTTtnQkFBSUgsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0k7Z0NBQUlDLE9BQU07Z0NBQTZCQyxNQUFLO2dDQUFPQyxTQUFRO2dDQUFZQyxhQUFhO2dDQUFLQyxRQUFPO2dDQUFlVCxXQUFVOzBDQUN4SCw0RUFBQ1U7b0NBQUtDLGVBQWM7b0NBQVFDLGdCQUFlO29DQUFRQyxHQUFFOzs7Ozs7Ozs7OzswQ0FFdkQsOERBQUNYOzBDQUFLOzs7Ozs7Ozs7Ozs7a0NBRVIsOERBQUNIO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0k7Z0NBQUlDLE9BQU07Z0NBQTZCQyxNQUFLO2dDQUFPQyxTQUFRO2dDQUFZQyxhQUFhO2dDQUFLQyxRQUFPO2dDQUFlVCxXQUFVOzBDQUN4SCw0RUFBQ1U7b0NBQUtDLGVBQWM7b0NBQVFDLGdCQUFlO29DQUFRQyxHQUFFOzs7Ozs7Ozs7OzswQ0FFdkQsOERBQUNYOzBDQUFLOzs7Ozs7Ozs7Ozs7a0NBRVIsOERBQUNIO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0k7Z0NBQUlDLE9BQU07Z0NBQTZCQyxNQUFLO2dDQUFPQyxTQUFRO2dDQUFZQyxhQUFhO2dDQUFLQyxRQUFPO2dDQUFlVCxXQUFVOzBDQUN4SCw0RUFBQ1U7b0NBQUtDLGVBQWM7b0NBQVFDLGdCQUFlO29DQUFRQyxHQUFFOzs7Ozs7Ozs7OzswQ0FFdkQsOERBQUNYOzBDQUFLOzs7Ozs7Ozs7Ozs7a0NBRVIsOERBQUNIO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0k7Z0NBQUlDLE9BQU07Z0NBQTZCQyxNQUFLO2dDQUFPQyxTQUFRO2dDQUFZQyxhQUFhO2dDQUFLQyxRQUFPO2dDQUFlVCxXQUFVOzBDQUN4SCw0RUFBQ1U7b0NBQUtDLGVBQWM7b0NBQVFFLEdBQUU7Ozs7Ozs7Ozs7OzBDQUVoQyw4REFBQ1g7MENBQUs7Ozs7Ozs7Ozs7OztrQ0FFUiw4REFBQ0g7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDSTtnQ0FBSUMsT0FBTTtnQ0FBNkJDLE1BQUs7Z0NBQU9DLFNBQVE7Z0NBQVlDLGFBQWE7Z0NBQUtDLFFBQU87Z0NBQWVULFdBQVU7MENBQ3hILDRFQUFDVTtvQ0FBS0MsZUFBYztvQ0FBUUMsZ0JBQWU7b0NBQVFDLEdBQUU7Ozs7Ozs7Ozs7OzBDQUV2RCw4REFBQ1g7MENBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUVDLElBQUk7Ozs7Ozs7QUFHdkIsQ0FBQztLQTNDdUJSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0LnRzeD9hZjI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNwYXduIH0gZnJvbSBcImNoaWxkX3Byb2Nlc3NcIjtcbmltcG9ydCB7IGNscyB9IGZyb20gXCIuLi9saWJzL3V0aWxzXCI7XG5cbmludGVyZmFjZSBMYXlvdXRQcm9wcyB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBjYW5Hb0JhY2s/OiBib29sZWFuO1xuICBoYXNUYWJCYXI/OiBib29sZWFuO1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoe3RpdGxlLCBjYW5Hb0JhY2ssIGhhc1RhYkJhciwgY2hpbGRyZW59OkxheW91dFByb3BzKXtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSB3LWZ1bGwgdGV4dC1sZyBmb250LW1lZGl1bSBweS0zIG1heC13LXhsIGZpeGVkIHRleHQtZ3JheS03MDAgYm9yZGVyLWIgdG9wLTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAge2NhbkdvQmFjayA/IDxidXR0b24+JmxhcnI7PC9idXR0b24+IDogbnVsbH1cbiAgICAgICAge3RpdGxlID8gPHNwYW4+e3RpdGxlfTwvc3Bhbj4gOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzKFwicHQtMTRcIiwgaGFzVGFiQmFyID8gXCJwYi0yNFwiIDogXCJcIil9PntjaGlsZHJlbn08L2Rpdj5cbiAgICAgIHtoYXNUYWJCYXIgPyAoIFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHctZnVsbCB0ZXh0LWdyYXktODAwIG1heC13LXhsIGJvcmRlci10IGZpeGVkIGJvdHRvbS0wIHBiLTMgcHQtMyBmbGV4IGp1c3RpZnktYXJvdW5kIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgc3BhY2UteS0yXCI+XG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2VXaWR0aD17MS41fSBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBjbGFzc05hbWU9XCJ3LTYgaC02XCI+XG4gICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTIuMjUgMTJsOC45NTQtOC45NTVjLjQ0LS40MzkgMS4xNTItLjQzOSAxLjU5MSAwTDIxLjc1IDEyTTQuNSA5Ljc1djEwLjEyNWMwIC42MjEuNTA0IDEuMTI1IDEuMTI1IDEuMTI1SDkuNzV2LTQuODc1YzAtLjYyMS41MDQtMS4xMjUgMS4xMjUtMS4xMjVoMi4yNWMuNjIxIDAgMS4xMjUuNTA0IDEuMTI1IDEuMTI1VjIxaDQuMTI1Yy42MjEgMCAxLjEyNS0uNTA0IDEuMTI1LTEuMTI1VjkuNzVNOC4yNSAyMWg4LjI1XCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPHNwYW4+7ZmIPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgc3BhY2UteS0yXCI+XG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2VXaWR0aD17MS41fSBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBjbGFzc05hbWU9XCJ3LTYgaC02XCI+XG4gICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTEyIDcuNWgxLjVtLTEuNSAzaDEuNW0tNy41IDNoNy41bS03LjUgM2g3LjVtMy05aDMuMzc1Yy42MjEgMCAxLjEyNS41MDQgMS4xMjUgMS4xMjVWMThhMi4yNSAyLjI1IDAgMDEtMi4yNSAyLjI1TTE2LjUgNy41VjE4YTIuMjUgMi4yNSAwIDAwMi4yNSAyLjI1TTE2LjUgNy41VjQuODc1YzAtLjYyMS0uNTA0LTEuMTI1LTEuMTI1LTEuMTI1SDQuMTI1QzMuNTA0IDMuNzUgMyA0LjI1NCAzIDQuODc1VjE4YTIuMjUgMi4yNSAwIDAwMi4yNSAyLjI1aDEzLjVNNiA3LjVoM3YzSDZ2LTN6XCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPHNwYW4+64+Z64Sk7IOd7ZmcPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgc3BhY2UteS0yXCI+XG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2VXaWR0aD17MS41fSBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBjbGFzc05hbWU9XCJ3LTYgaC02XCI+XG4gICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTIuMjUgMTIuNzZjMCAxLjYgMS4xMjMgMi45OTQgMi43MDcgMy4yMjcgMS4wODcuMTYgMi4xODUuMjgzIDMuMjkzLjM2OVYyMWw0LjA3Ni00LjA3NmExLjUyNiAxLjUyNiAwIDAxMS4wMzctLjQ0MyA0OC4yODIgNDguMjgyIDAgMDA1LjY4LS40OTRjMS41ODQtLjIzMyAyLjcwNy0xLjYyNiAyLjcwNy0zLjIyOFY2Ljc0MWMwLTEuNjAyLTEuMTIzLTIuOTk1LTIuNzA3LTMuMjI4QTQ4LjM5NCA0OC4zOTQgMCAwMDEyIDNjLTIuMzkyIDAtNC43NDQuMTc1LTcuMDQzLjUxM0MzLjM3MyAzLjc0NiAyLjI1IDUuMTQgMi4yNSA2Ljc0MXY2LjAxOHpcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8c3Bhbj5DaGF0czwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHNwYWNlLXktMlwiPlxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlV2lkdGg9ezEuNX0gc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgY2xhc3NOYW1lPVwidy02IGgtNlwiPlxuICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBkPVwiTTE1Ljc1IDEwLjVsNC43Mi00LjcyYS43NS43NSAwIDAxMS4yOC41M3YxMS4zOGEuNzUuNzUgMCAwMS0xLjI4LjUzbC00LjcyLTQuNzJNNC41IDE4Ljc1aDlhMi4yNSAyLjI1IDAgMDAyLjI1LTIuMjV2LTlhMi4yNSAyLjI1IDAgMDAtMi4yNS0yLjI1aC05QTIuMjUgMi4yNSAwIDAwMi4yNSA3LjV2OWEyLjI1IDIuMjUgMCAwMDIuMjUgMi4yNXpcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8c3Bhbj5MaXZlU3RyZWFtPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgc3BhY2UteS0yXCI+XG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2VXaWR0aD17MS41fSBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBjbGFzc05hbWU9XCJ3LTYgaC02XCI+XG4gICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTE3Ljk4MiAxOC43MjVBNy40ODggNy40ODggMCAwMDEyIDE1Ljc1YTcuNDg4IDcuNDg4IDAgMDAtNS45ODIgMi45NzVtMTEuOTYzIDBhOSA5IDAgMTAtMTEuOTYzIDBtMTEuOTYzIDBBOC45NjYgOC45NjYgMCAwMTEyIDIxYTguOTY2IDguOTY2IDAgMDEtNS45ODItMi4yNzVNMTUgOS43NWEzIDMgMCAxMS02IDAgMyAzIDAgMDE2IDB6XCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPHNwYW4+UHJvZmlsZTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+ICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbImNscyIsIkxheW91dCIsInRpdGxlIiwiY2FuR29CYWNrIiwiaGFzVGFiQmFyIiwiY2hpbGRyZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJzcGFuIiwibmF2Iiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZVdpZHRoIiwic3Ryb2tlIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout.tsx\n"));

/***/ })

});