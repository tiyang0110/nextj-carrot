"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chats/[id]",{

/***/ "./components/chatBubble.tsx":
/*!***********************************!*\
  !*** ./components/chatBubble.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatBubble; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/utils */ \"./libs/utils.ts\");\n\n\nfunction ChatBubble(param) {\n    let { isMyChat , children  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,_libs_utils__WEBPACK_IMPORTED_MODULE_1__.cls)(\"flex items-start space-x-2\", isMyChat ? \"flex-row-reverse space-x-reverse\" : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-8 h-8 rounded-full bg-slate-400\"\n            }, void 0, false, {\n                fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/chatBubble.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/chatBubble.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/chatBubble.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/taeintyang/Documents/study/nextj-carrot-1/components/chatBubble.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = ChatBubble;\nvar _c;\n$RefreshReg$(_c, \"ChatBubble\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NoYXRCdWJibGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUFvQztBQU9yQixTQUFTQyxXQUFXLEtBQW9DLEVBQUM7UUFBckMsRUFBQ0MsU0FBUSxFQUFFQyxTQUFRLEVBQWlCLEdBQXBDO0lBQ2pDLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXTCxnREFBR0EsQ0FBQyw4QkFBOEJFLFdBQVcscUNBQXFDLEVBQUU7OzBCQUNsRyw4REFBQ0U7Z0JBQUlDLFdBQVU7Ozs7OzswQkFDZiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNDOzhCQUFHSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZCxDQUFDO0tBVHVCRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NoYXRCdWJibGUudHN4PzRjM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xzIH0gZnJvbSBcIi4uL2xpYnMvdXRpbHNcIjtcblxuaW50ZXJmYWNlIENoYXRCdWJibGVQcm9wc3tcbiAgaXNNeUNoYXQ6IGJvb2xlYW47XG4gIGNoaWxkcmVuOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRCdWJibGUoe2lzTXlDaGF0LCBjaGlsZHJlbn06Q2hhdEJ1YmJsZVByb3BzKXtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzKFwiZmxleCBpdGVtcy1zdGFydCBzcGFjZS14LTJcIiwgaXNNeUNoYXQgPyBcImZsZXgtcm93LXJldmVyc2Ugc3BhY2UteC1yZXZlcnNlXCIgOiBcIlwiKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOCBoLTggcm91bmRlZC1mdWxsIGJnLXNsYXRlLTQwMFwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIHRleHQtc20gdGV4dC1ncmF5LTcwMCBwLTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kXCI+XG4gICAgICAgICAgPHA+e2NoaWxkcmVufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJjbHMiLCJDaGF0QnViYmxlIiwiaXNNeUNoYXQiLCJjaGlsZHJlbiIsImRpdiIsImNsYXNzTmFtZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/chatBubble.tsx\n"));

/***/ })

});