"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/live/[id]",{

/***/ "./components/chatInput.tsx":
/*!**********************************!*\
  !*** ./components/chatInput.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ChatInput = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed w-full mx-auto max-w-md bottom-2 left-0 inset-x-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    className: \"shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none focus:border-orange-500 pr-12\"\n                }, void 0, false, {\n                    fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/chatInput.tsx\",\n                    lineNumber: 7,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute inset-y-0 flex py-1.5 pr-1.5 right-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"flex focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 items-center bg-orange-500 hover:bg-orange-600 rounded-full px-3 text-sm text-white\",\n                        children: \"→\"\n                    }, void 0, false, {\n                        fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/chatInput.tsx\",\n                        lineNumber: 9,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/chatInput.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/chatInput.tsx\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/chatInput.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ChatInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatInput);\nvar _c;\n$RefreshReg$(_c, \"ChatInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NoYXRJbnB1dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7O0FBRUE7QUFBQSxNQUFNQSxZQUFZLElBQU07SUFDdEIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBTUMsTUFBSztvQkFBT0YsV0FBVTs7Ozs7OzhCQUM3Qiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNHO3dCQUFPSCxXQUFVO2tDQUFrSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs5SztLQVhNRjtBQWFOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2hhdElucHV0LnRzeD8xN2VjIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCBDaGF0SW5wdXQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB3LWZ1bGwgbXgtYXV0byBtYXgtdy1tZCBib3R0b20tMiBsZWZ0LTAgaW5zZXQteC0wXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHJlbGF0aXZlXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInNoYWRvdy1zbSByb3VuZGVkLWZ1bGwgdy1mdWxsIGJvcmRlci1ncmF5LTMwMCBmb2N1czpyaW5nLW9yYW5nZS01MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1vcmFuZ2UtNTAwIHByLTEyXCIvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCBmbGV4IHB5LTEuNSBwci0xLjUgcmlnaHQtMFwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLW9yYW5nZS01MDAgaXRlbXMtY2VudGVyIGJnLW9yYW5nZS01MDAgaG92ZXI6Ymctb3JhbmdlLTYwMCByb3VuZGVkLWZ1bGwgcHgtMyB0ZXh0LXNtIHRleHQtd2hpdGVcIj4mcmFycjs8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0SW5wdXQ7Il0sIm5hbWVzIjpbIkNoYXRJbnB1dCIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/chatInput.tsx\n"));

/***/ }),

/***/ "./pages/live/[id].tsx":
/*!*****************************!*\
  !*** ./pages/live/[id].tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_chatBubble__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/chatBubble */ \"./components/chatBubble.tsx\");\n/* harmony import */ var _components_chatInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/chatInput */ \"./components/chatInput.tsx\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.tsx\");\n\n\n\n\nconst LiveDetail = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        canGoBack: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"pt-4 px-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full rounded-md shadow-sm bg-slate-300 aspect-video\"\n                }, void 0, false, {\n                    fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/pages/live/[id].tsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-gray-800 font-semibold text-2xl mt-2\",\n                    children: \"Let's try potatos\"\n                }, void 0, false, {\n                    fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/pages/live/[id].tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"py-10 pb-16 px-4 space-y-4 mt-10 h-[50vh] overflow-y-scroll\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_chatBubble__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            children: \"Hi how much are you selling them for?\"\n                        }, void 0, false, {\n                            fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/pages/live/[id].tsx\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_chatBubble__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            isMyChat: true,\n                            children: \"I want ￦20,000\"\n                        }, void 0, false, {\n                            fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/pages/live/[id].tsx\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/pages/live/[id].tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_chatInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/pages/live/[id].tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/pages/live/[id].tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/pages/live/[id].tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = LiveDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LiveDetail);\nvar _c;\n$RefreshReg$(_c, \"LiveDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9saXZlL1tpZF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ3FEO0FBQ0Y7QUFDTjtBQUU3QyxNQUFNRyxhQUF1QixJQUFNO0lBQ2pDLHFCQUNFLDhEQUFDRCwwREFBTUE7UUFBQ0UsU0FBUztrQkFDZiw0RUFBQ0M7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOzs7Ozs7OEJBQ2YsOERBQUNDO29CQUFHRCxXQUFVOzhCQUE0Qzs7Ozs7OzhCQUMxRCw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDTiw4REFBVUE7c0NBQUM7Ozs7OztzQ0FDWiw4REFBQ0EsOERBQVVBOzRCQUFDUSxRQUFRO3NDQUFDOzs7Ozs7Ozs7Ozs7OEJBRXZCLDhEQUFDUCw2REFBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbEI7S0FkTUU7QUFnQk4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGl2ZS9baWRdLnRzeD8zYzQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IENoYXRCdWJibGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2hhdEJ1YmJsZVwiO1xuaW1wb3J0IENoYXRJbnB1dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jaGF0SW5wdXRcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5cbmNvbnN0IExpdmVEZXRhaWw6IE5leHRQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2FuR29CYWNrPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00IHB4LTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1tZCBzaGFkb3ctc20gYmctc2xhdGUtMzAwIGFzcGVjdC12aWRlb1wiIC8+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktODAwIGZvbnQtc2VtaWJvbGQgdGV4dC0yeGwgbXQtMlwiPkxldCdzIHRyeSBwb3RhdG9zPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xMCBwYi0xNiBweC00IHNwYWNlLXktNCBtdC0xMCBoLVs1MHZoXSBvdmVyZmxvdy15LXNjcm9sbFwiPlxuICAgICAgICAgIDxDaGF0QnViYmxlPkhpIGhvdyBtdWNoIGFyZSB5b3Ugc2VsbGluZyB0aGVtIGZvcj88L0NoYXRCdWJibGU+XG4gICAgICAgICAgPENoYXRCdWJibGUgaXNNeUNoYXQ+SSB3YW50IO+/pjIwLDAwMDwvQ2hhdEJ1YmJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxDaGF0SW5wdXQgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMaXZlRGV0YWlsOyJdLCJuYW1lcyI6WyJDaGF0QnViYmxlIiwiQ2hhdElucHV0IiwiTGF5b3V0IiwiTGl2ZURldGFpbCIsImNhbkdvQmFjayIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwiaXNNeUNoYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/live/[id].tsx\n"));

/***/ })

});