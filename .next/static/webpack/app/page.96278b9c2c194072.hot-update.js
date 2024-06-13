"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.module.scss */ \"(app-pages-browser)/./src/app/page.module.scss\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_page_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _AnimalModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnimalModal */ \"(app-pages-browser)/./src/app/AnimalModal.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [openModal, setOpenModal] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false);\n    const [modalAppearing, setModalAppearing] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false);\n    function persistAnimal(formData) {\n        console.log(\"Animal persisted!\");\n        var newEntry = {\n            names: formData[\"names\"],\n            lastName: formData[\"lastName\"],\n            birthDate: formData[\"birthDate\"],\n            species: formData[\"species\"],\n            profilePicture: formData[\"profilePicture\"] ? URL.createObjectURL(formData[\"profilePicture\"]) : null\n        };\n        var previousAnimals = JSON.parse(localStorage.getItem(\"savedAnimals\") || \"\");\n        if (previousAnimals) {\n            previousAnimals.push(newEntry);\n            localStorage.setItem(\"savedAnimals\", JSON.stringify(previousAnimals));\n        } else {\n            localStorage.setItem(\"savedAnimals\", JSON.stringify([\n                newEntry\n            ]));\n        }\n        console.log(\"saved animals length: \" + JSON.parse(localStorage.getItem(\"savedAnimals\") || \"\").length);\n    }\n    function handleAddAnimal() {\n        setOpenModal(true);\n        setTimeout(()=>{\n            setModalAppearing(true);\n        }, 100);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().home_body),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    src: \"/assets/mypets_icon.svg\",\n                    width: 96,\n                    height: 96,\n                    alt: \"My Pets icon\"\n                }, void 0, false, {\n                    fileName: \"/Users/carlosbarraza/Desktop/MyPetsApp/src/app/page.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().home_body_title),\n                    children: \"Welcome to MyPets.\"\n                }, void 0, false, {\n                    fileName: \"/Users/carlosbarraza/Desktop/MyPetsApp/src/app/page.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().home_body_description),\n                    children: \"MyPets is the ultimate platform for managing data from the animals you care about. From dogs and cats, to even the most unique reptiles, birds or amphibians.\"\n                }, void 0, false, {\n                    fileName: \"/Users/carlosbarraza/Desktop/MyPetsApp/src/app/page.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"\".concat((_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().home_body_petButton), \" \").concat((_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().m_clickable_btn)),\n                    onClick: handleAddAnimal,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().home_body_petButton_text),\n                            children: \"Add your first animal\"\n                        }, void 0, false, {\n                            fileName: \"/Users/carlosbarraza/Desktop/MyPetsApp/src/app/page.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().home_body_petButton_icon),\n                            src: \"/assets/arrow_circle_right.svg\",\n                            width: 20,\n                            height: 20,\n                            alt: \"next arrow\"\n                        }, void 0, false, {\n                            fileName: \"/Users/carlosbarraza/Desktop/MyPetsApp/src/app/page.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/carlosbarraza/Desktop/MyPetsApp/src/app/page.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AnimalModal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    openModal: openModal,\n                    setOpenModal: setOpenModal,\n                    modalAppearing: modalAppearing,\n                    setModalAppearing: setModalAppearing,\n                    persistAnimal: persistAnimal\n                }, void 0, false, {\n                    fileName: \"/Users/carlosbarraza/Desktop/MyPetsApp/src/app/page.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/carlosbarraza/Desktop/MyPetsApp/src/app/page.tsx\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/carlosbarraza/Desktop/MyPetsApp/src/app/page.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"QiY8M0FbzSiuLiF1oI6oKh0q8uc=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRStCO0FBQ1M7QUFDTztBQUNyQjtBQUNjO0FBV3pCLFNBQVNLOztJQUN0QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0oscURBQWMsQ0FBQztJQUNqRCxNQUFNLENBQUNNLGdCQUFnQkMsa0JBQWtCLEdBQUdQLHFEQUFjLENBQUM7SUFFM0QsU0FBU1EsY0FBY0MsUUFBcUI7UUFDMUNDLFFBQVFDLEdBQUcsQ0FBQztRQUVaLElBQUlDLFdBQVc7WUFDYkMsT0FBT0osUUFBUSxDQUFDLFFBQVE7WUFDeEJLLFVBQVVMLFFBQVEsQ0FBQyxXQUFXO1lBQzlCTSxXQUFXTixRQUFRLENBQUMsWUFBWTtZQUNoQ08sU0FBU1AsUUFBUSxDQUFDLFVBQVU7WUFDNUJRLGdCQUFnQlIsUUFBUSxDQUFDLGlCQUFpQixHQUFHUyxJQUFJQyxlQUFlLENBQUNWLFFBQVEsQ0FBQyxpQkFBaUIsSUFBSTtRQUNqRztRQUNBLElBQUlXLGtCQUFrQkMsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUMsbUJBQW1CO1FBRXpFLElBQUlKLGlCQUFpQjtZQUNuQkEsZ0JBQWdCSyxJQUFJLENBQUNiO1lBQ3JCVyxhQUFhRyxPQUFPLENBQUMsZ0JBQWdCTCxLQUFLTSxTQUFTLENBQUNQO1FBQ3RELE9BQU87WUFDTEcsYUFBYUcsT0FBTyxDQUFDLGdCQUFnQkwsS0FBS00sU0FBUyxDQUFDO2dCQUFDZjthQUFTO1FBQ2hFO1FBQ0FGLFFBQVFDLEdBQUcsQ0FBQywyQkFBMkJVLEtBQUtDLEtBQUssQ0FBQ0MsYUFBYUMsT0FBTyxDQUFDLG1CQUFtQixJQUFJSSxNQUFNO0lBQ3RHO0lBRUEsU0FBU0M7UUFDUHpCLGFBQWE7UUFFYjBCLFdBQVc7WUFDVHZCLGtCQUFrQjtRQUNwQixHQUFHO0lBQ0w7SUFFQSxxQkFDRSw4REFBQ3dCO1FBQUtDLFdBQVdqQyw4REFBbUI7a0JBQ2xDLDRFQUFDa0M7WUFBSUQsV0FBV2xDLG9FQUFnQjs7OEJBQzlCLDhEQUFDRCxrREFBS0E7b0JBQUNzQyxLQUFJO29CQUEwQkMsT0FBTztvQkFBSUMsUUFBUTtvQkFBSUMsS0FBSTs7Ozs7OzhCQUNoRSw4REFBQ0w7b0JBQUlELFdBQVdsQywwRUFBc0I7OEJBQUU7Ozs7Ozs4QkFHeEMsOERBQUNtQztvQkFBSUQsV0FBV2xDLGdGQUE0Qjs4QkFBRTs7Ozs7OzhCQUc5Qyw4REFBQzJDO29CQUFPVCxXQUFXLEdBQWlDbEMsT0FBOUJBLDhFQUEwQixFQUFDLEtBQTBCLE9BQXZCQSwwRUFBc0I7b0JBQUk4QyxTQUFTZjs7c0NBQ3JGLDhEQUFDSTs0QkFBSUQsV0FBV2xDLG1GQUErQjtzQ0FBRTs7Ozs7O3NDQUdqRCw4REFBQ0Qsa0RBQUtBOzRCQUFDbUMsV0FBV2xDLG1GQUErQjs0QkFBRXFDLEtBQUk7NEJBQWlDQyxPQUFPOzRCQUFJQyxRQUFROzRCQUFJQyxLQUFJOzs7Ozs7Ozs7Ozs7OEJBRXJILDhEQUFDckMsb0RBQVdBO29CQUFDRSxXQUFXQTtvQkFBV0MsY0FBY0E7b0JBQWNFLGdCQUFnQkE7b0JBQWdCQyxtQkFBbUJBO29CQUFtQkMsZUFBZUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzVKO0dBdER3Qk47S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3BhZ2UubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBvcmlnaW5hbFN0eWxlcyBmcm9tIFwiLi9wYWdlLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBbmltYWxNb2RhbCBmcm9tIFwiLi9BbmltYWxNb2RhbFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIGFuaW1hbEVudHJ5IHtcbiAgbmFtZXM6IHN0cmluZyxcbiAgbGFzdE5hbWU6IHN0cmluZyxcbiAgYmlydGhEYXRlOiBzdHJpbmcsXG4gIHNwZWNpZXM6IHN0cmluZyxcbiAgcHJvZmlsZVBpY3R1cmU/OiBzdHJuZyxcbiAgW2tleTogc3RyaW5nXSA6IHN0cmluZyB8IEZpbGUgfCB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW29wZW5Nb2RhbCwgc2V0T3Blbk1vZGFsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21vZGFsQXBwZWFyaW5nLCBzZXRNb2RhbEFwcGVhcmluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgZnVuY3Rpb24gcGVyc2lzdEFuaW1hbChmb3JtRGF0YTogYW5pbWFsRW50cnkpIHtcbiAgICBjb25zb2xlLmxvZygnQW5pbWFsIHBlcnNpc3RlZCEnKTtcblxuICAgIHZhciBuZXdFbnRyeSA9IHtcbiAgICAgIG5hbWVzOiBmb3JtRGF0YVsnbmFtZXMnXSxcbiAgICAgIGxhc3ROYW1lOiBmb3JtRGF0YVsnbGFzdE5hbWUnXSxcbiAgICAgIGJpcnRoRGF0ZTogZm9ybURhdGFbJ2JpcnRoRGF0ZSddLFxuICAgICAgc3BlY2llczogZm9ybURhdGFbJ3NwZWNpZXMnXSxcbiAgICAgIHByb2ZpbGVQaWN0dXJlOiBmb3JtRGF0YVsncHJvZmlsZVBpY3R1cmUnXSA/IFVSTC5jcmVhdGVPYmplY3RVUkwoZm9ybURhdGFbJ3Byb2ZpbGVQaWN0dXJlJ10pIDogbnVsbFxuICAgIH1cbiAgICB2YXIgcHJldmlvdXNBbmltYWxzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNhdmVkQW5pbWFsc1wiKSB8fCAnJyk7XG5cbiAgICBpZiAocHJldmlvdXNBbmltYWxzKSB7XG4gICAgICBwcmV2aW91c0FuaW1hbHMucHVzaChuZXdFbnRyeSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2F2ZWRBbmltYWxzJywgSlNPTi5zdHJpbmdpZnkocHJldmlvdXNBbmltYWxzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzYXZlZEFuaW1hbHMnLCBKU09OLnN0cmluZ2lmeShbbmV3RW50cnldKSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdzYXZlZCBhbmltYWxzIGxlbmd0aDogJyArIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzYXZlZEFuaW1hbHNcIikgfHwgJycpLmxlbmd0aCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVBZGRBbmltYWwoKSB7XG4gICAgc2V0T3Blbk1vZGFsKHRydWUpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRNb2RhbEFwcGVhcmluZyh0cnVlKTtcbiAgICB9LCAxMDApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9e29yaWdpbmFsU3R5bGVzLm1haW59PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lX2JvZHl9PlxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL2Fzc2V0cy9teXBldHNfaWNvbi5zdmdcIiB3aWR0aD17OTZ9IGhlaWdodD17OTZ9IGFsdD1cIk15IFBldHMgaWNvblwiPjwvSW1hZ2U+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG9tZV9ib2R5X3RpdGxlfT5cbiAgICAgICAgICBXZWxjb21lIHRvIE15UGV0cy5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG9tZV9ib2R5X2Rlc2NyaXB0aW9ufT5cbiAgICAgICAgICBNeVBldHMgaXMgdGhlIHVsdGltYXRlIHBsYXRmb3JtIGZvciBtYW5hZ2luZyBkYXRhIGZyb20gdGhlIGFuaW1hbHMgeW91IGNhcmUgYWJvdXQuIEZyb20gZG9ncyBhbmQgY2F0cywgdG8gZXZlbiB0aGUgbW9zdCB1bmlxdWUgcmVwdGlsZXMsIGJpcmRzIG9yIGFtcGhpYmlhbnMuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLmhvbWVfYm9keV9wZXRCdXR0b259ICR7c3R5bGVzLm1fY2xpY2thYmxlX2J0bn1gfSBvbkNsaWNrPXtoYW5kbGVBZGRBbmltYWx9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG9tZV9ib2R5X3BldEJ1dHRvbl90ZXh0fT5cbiAgICAgICAgICAgIEFkZCB5b3VyIGZpcnN0IGFuaW1hbFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlcy5ob21lX2JvZHlfcGV0QnV0dG9uX2ljb259IHNyYz1cIi9hc3NldHMvYXJyb3dfY2lyY2xlX3JpZ2h0LnN2Z1wiIHdpZHRoPXsyMH0gaGVpZ2h0PXsyMH0gYWx0PVwibmV4dCBhcnJvd1wiPjwvSW1hZ2U+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8QW5pbWFsTW9kYWwgb3Blbk1vZGFsPXtvcGVuTW9kYWx9IHNldE9wZW5Nb2RhbD17c2V0T3Blbk1vZGFsfSBtb2RhbEFwcGVhcmluZz17bW9kYWxBcHBlYXJpbmd9IHNldE1vZGFsQXBwZWFyaW5nPXtzZXRNb2RhbEFwcGVhcmluZ30gcGVyc2lzdEFuaW1hbD17cGVyc2lzdEFuaW1hbH0+XG4gICAgICAgIDwvQW5pbWFsTW9kYWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJzdHlsZXMiLCJvcmlnaW5hbFN0eWxlcyIsIlJlYWN0IiwiQW5pbWFsTW9kYWwiLCJIb21lIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwidXNlU3RhdGUiLCJtb2RhbEFwcGVhcmluZyIsInNldE1vZGFsQXBwZWFyaW5nIiwicGVyc2lzdEFuaW1hbCIsImZvcm1EYXRhIiwiY29uc29sZSIsImxvZyIsIm5ld0VudHJ5IiwibmFtZXMiLCJsYXN0TmFtZSIsImJpcnRoRGF0ZSIsInNwZWNpZXMiLCJwcm9maWxlUGljdHVyZSIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInByZXZpb3VzQW5pbWFscyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImxlbmd0aCIsImhhbmRsZUFkZEFuaW1hbCIsInNldFRpbWVvdXQiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaG9tZV9ib2R5Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJob21lX2JvZHlfdGl0bGUiLCJob21lX2JvZHlfZGVzY3JpcHRpb24iLCJidXR0b24iLCJob21lX2JvZHlfcGV0QnV0dG9uIiwibV9jbGlja2FibGVfYnRuIiwib25DbGljayIsImhvbWVfYm9keV9wZXRCdXR0b25fdGV4dCIsImhvbWVfYm9keV9wZXRCdXR0b25faWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});