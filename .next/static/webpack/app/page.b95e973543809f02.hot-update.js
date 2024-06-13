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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.module.scss */ \"(app-pages-browser)/./src/app/page.module.scss\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_page_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _AnimalModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnimalModal */ \"(app-pages-browser)/./src/app/AnimalModal.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [openModal, setOpenModal] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false);\n    const [modalAppearing, setModalAppearing] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false);\n    function persistAnimal(formData) {\n        console.log(\"Animal persisted!\");\n        var newEntry = {\n            names: formData[\"names\"],\n            lastName: formData[\"lastName\"],\n            birthDate: formData[\"birthDate\"],\n            species: formData[\"species\"],\n            profilePicture: formData[\"profilePicture\"] ? URL.createObjectURL(formData[\"profilePicture\"]) : null\n        };\n        var previousAnimals = JSON.parse(localStorage.getItem(\"savedAnimals\") || \"\");\n        if (previousAnimals) {\n            previousAnimals.push(newEntry);\n            localStorage.setItem(\"savedAnimals\", JSON.stringify(previousAnimals));\n        } else {\n            localStorage.setItem(\"savedAnimals\", JSON.stringify([\n                newEntry\n            ]));\n        }\n        console.log(\"saved animals length: \" + JSON.parse(localStorage.getItem(\"savedAnimals\") || \"\").length);\n    }\n    function handleAddAnimal() {\n        setOpenModal(true);\n        setTimeout(()=>{\n            setModalAppearing(true);\n        }, 100);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().home_body),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    src: \"/assets/mypets_icon.svg\",\n                    width: 96,\n                    height: 96,\n                    alt: \"My Pets icon\"\n                }, void 0, false, {\n                    fileName: \"/Users/carlosbarraza/Desktop/MyPetsApp/src/app/page.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().home_body_title),\n                    children: \"Welcome to MyPets.\"\n                }, void 0, false, {\n                    fileName: \"/Users/carlosbarraza/Desktop/MyPetsApp/src/app/page.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().home_body_description),\n                    children: \"MyPets is the ultimate platform for managing data from the animals you care about. From dogs and cats, to even the most unique reptiles, birds or amphibians.\"\n                }, void 0, false, {\n                    fileName: \"/Users/carlosbarraza/Desktop/MyPetsApp/src/app/page.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"\".concat((_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().home_body_petButton), \" \").concat((_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().m_clickable_btn)),\n                    onClick: handleAddAnimal,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().home_body_petButton_text),\n                            children: \"Add your first animal\"\n                        }, void 0, false, {\n                            fileName: \"/Users/carlosbarraza/Desktop/MyPetsApp/src/app/page.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().home_body_petButton_icon),\n                            src: \"/assets/arrow_circle_right.svg\",\n                            width: 20,\n                            height: 20,\n                            alt: \"next arrow\"\n                        }, void 0, false, {\n                            fileName: \"/Users/carlosbarraza/Desktop/MyPetsApp/src/app/page.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/carlosbarraza/Desktop/MyPetsApp/src/app/page.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AnimalModal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    openModal: openModal,\n                    setOpenModal: setOpenModal,\n                    modalAppearing: modalAppearing,\n                    setModalAppearing: setModalAppearing,\n                    persistAnimal: persistAnimal\n                }, void 0, false, {\n                    fileName: \"/Users/carlosbarraza/Desktop/MyPetsApp/src/app/page.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/carlosbarraza/Desktop/MyPetsApp/src/app/page.tsx\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/carlosbarraza/Desktop/MyPetsApp/src/app/page.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"QiY8M0FbzSiuLiF1oI6oKh0q8uc=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRStCO0FBQ1M7QUFDTztBQUNyQjtBQUNjO0FBV3pCLFNBQVNLOztJQUN0QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0oscURBQWMsQ0FBQztJQUNqRCxNQUFNLENBQUNNLGdCQUFnQkMsa0JBQWtCLEdBQUdQLHFEQUFjLENBQUM7SUFFM0QsU0FBU1EsY0FBY0MsUUFBcUI7UUFDMUNDLFFBQVFDLEdBQUcsQ0FBQztRQUVaLElBQUlDLFdBQVc7WUFDYkMsT0FBT0osUUFBUSxDQUFDLFFBQVE7WUFDeEJLLFVBQVVMLFFBQVEsQ0FBQyxXQUFXO1lBQzlCTSxXQUFXTixRQUFRLENBQUMsWUFBWTtZQUNoQ08sU0FBU1AsUUFBUSxDQUFDLFVBQVU7WUFDNUJRLGdCQUFnQlIsUUFBUSxDQUFDLGlCQUFpQixHQUFHUyxJQUFJQyxlQUFlLENBQUNWLFFBQVEsQ0FBQyxpQkFBaUIsSUFBWTtRQUN6RztRQUNBLElBQUlXLGtCQUFrQkMsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUMsbUJBQW1CO1FBRXpFLElBQUlKLGlCQUFpQjtZQUNuQkEsZ0JBQWdCSyxJQUFJLENBQUNiO1lBQ3JCVyxhQUFhRyxPQUFPLENBQUMsZ0JBQWdCTCxLQUFLTSxTQUFTLENBQUNQO1FBQ3RELE9BQU87WUFDTEcsYUFBYUcsT0FBTyxDQUFDLGdCQUFnQkwsS0FBS00sU0FBUyxDQUFDO2dCQUFDZjthQUFTO1FBQ2hFO1FBQ0FGLFFBQVFDLEdBQUcsQ0FBQywyQkFBMkJVLEtBQUtDLEtBQUssQ0FBQ0MsYUFBYUMsT0FBTyxDQUFDLG1CQUFtQixJQUFJSSxNQUFNO0lBQ3RHO0lBRUEsU0FBU0M7UUFDUHpCLGFBQWE7UUFFYjBCLFdBQVc7WUFDVHZCLGtCQUFrQjtRQUNwQixHQUFHO0lBQ0w7SUFFQSxxQkFDRSw4REFBQ3dCO1FBQUtDLFdBQVdqQyw4REFBbUI7a0JBQ2xDLDRFQUFDa0M7WUFBSUQsV0FBV2xDLG9FQUFnQjs7OEJBQzlCLDhEQUFDRCxrREFBS0E7b0JBQUNzQyxLQUFJO29CQUEwQkMsT0FBTztvQkFBSUMsUUFBUTtvQkFBSUMsS0FBSTs7Ozs7OzhCQUNoRSw4REFBQ0w7b0JBQUlELFdBQVdsQywwRUFBc0I7OEJBQUU7Ozs7Ozs4QkFHeEMsOERBQUNtQztvQkFBSUQsV0FBV2xDLGdGQUE0Qjs4QkFBRTs7Ozs7OzhCQUc5Qyw4REFBQzJDO29CQUFPVCxXQUFXLEdBQWlDbEMsT0FBOUJBLDhFQUEwQixFQUFDLEtBQTBCLE9BQXZCQSwwRUFBc0I7b0JBQUk4QyxTQUFTZjs7c0NBQ3JGLDhEQUFDSTs0QkFBSUQsV0FBV2xDLG1GQUErQjtzQ0FBRTs7Ozs7O3NDQUdqRCw4REFBQ0Qsa0RBQUtBOzRCQUFDbUMsV0FBV2xDLG1GQUErQjs0QkFBRXFDLEtBQUk7NEJBQWlDQyxPQUFPOzRCQUFJQyxRQUFROzRCQUFJQyxLQUFJOzs7Ozs7Ozs7Ozs7OEJBRXJILDhEQUFDckMsb0RBQVdBO29CQUFDRSxXQUFXQTtvQkFBV0MsY0FBY0E7b0JBQWNFLGdCQUFnQkE7b0JBQWdCQyxtQkFBbUJBO29CQUFtQkMsZUFBZUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzVKO0dBdER3Qk47S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3BhZ2UubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBvcmlnaW5hbFN0eWxlcyBmcm9tIFwiLi9wYWdlLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBbmltYWxNb2RhbCBmcm9tIFwiLi9BbmltYWxNb2RhbFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIGFuaW1hbEVudHJ5IHtcbiAgbmFtZXM6IHN0cmluZyxcbiAgbGFzdE5hbWU6IHN0cmluZyxcbiAgYmlydGhEYXRlOiBzdHJpbmcsXG4gIHNwZWNpZXM6IHN0cmluZyxcbiAgcHJvZmlsZVBpY3R1cmU/OiBGaWxlIHwgc3RyaW5nLFxuICBba2V5OiBzdHJpbmddIDogc3RyaW5nIHwgRmlsZSB8IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbb3Blbk1vZGFsLCBzZXRPcGVuTW9kYWxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbW9kYWxBcHBlYXJpbmcsIHNldE1vZGFsQXBwZWFyaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBmdW5jdGlvbiBwZXJzaXN0QW5pbWFsKGZvcm1EYXRhOiBhbmltYWxFbnRyeSkge1xuICAgIGNvbnNvbGUubG9nKCdBbmltYWwgcGVyc2lzdGVkIScpO1xuXG4gICAgdmFyIG5ld0VudHJ5ID0ge1xuICAgICAgbmFtZXM6IGZvcm1EYXRhWyduYW1lcyddLFxuICAgICAgbGFzdE5hbWU6IGZvcm1EYXRhWydsYXN0TmFtZSddLFxuICAgICAgYmlydGhEYXRlOiBmb3JtRGF0YVsnYmlydGhEYXRlJ10sXG4gICAgICBzcGVjaWVzOiBmb3JtRGF0YVsnc3BlY2llcyddLFxuICAgICAgcHJvZmlsZVBpY3R1cmU6IGZvcm1EYXRhWydwcm9maWxlUGljdHVyZSddID8gVVJMLmNyZWF0ZU9iamVjdFVSTChmb3JtRGF0YVsncHJvZmlsZVBpY3R1cmUnXSBhcyBGaWxlKSA6IG51bGxcbiAgICB9XG4gICAgdmFyIHByZXZpb3VzQW5pbWFscyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzYXZlZEFuaW1hbHNcIikgfHwgJycpO1xuXG4gICAgaWYgKHByZXZpb3VzQW5pbWFscykge1xuICAgICAgcHJldmlvdXNBbmltYWxzLnB1c2gobmV3RW50cnkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NhdmVkQW5pbWFscycsIEpTT04uc3RyaW5naWZ5KHByZXZpb3VzQW5pbWFscykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2F2ZWRBbmltYWxzJywgSlNPTi5zdHJpbmdpZnkoW25ld0VudHJ5XSkpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnc2F2ZWQgYW5pbWFscyBsZW5ndGg6ICcgKyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2F2ZWRBbmltYWxzXCIpIHx8ICcnKS5sZW5ndGgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQWRkQW5pbWFsKCkge1xuICAgIHNldE9wZW5Nb2RhbCh0cnVlKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0TW9kYWxBcHBlYXJpbmcodHJ1ZSk7XG4gICAgfSwgMTAwKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPXtvcmlnaW5hbFN0eWxlcy5tYWlufT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG9tZV9ib2R5fT5cbiAgICAgICAgPEltYWdlIHNyYz1cIi9hc3NldHMvbXlwZXRzX2ljb24uc3ZnXCIgd2lkdGg9ezk2fSBoZWlnaHQ9ezk2fSBhbHQ9XCJNeSBQZXRzIGljb25cIj48L0ltYWdlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvbWVfYm9keV90aXRsZX0+XG4gICAgICAgICAgV2VsY29tZSB0byBNeVBldHMuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvbWVfYm9keV9kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgTXlQZXRzIGlzIHRoZSB1bHRpbWF0ZSBwbGF0Zm9ybSBmb3IgbWFuYWdpbmcgZGF0YSBmcm9tIHRoZSBhbmltYWxzIHlvdSBjYXJlIGFib3V0LiBGcm9tIGRvZ3MgYW5kIGNhdHMsIHRvIGV2ZW4gdGhlIG1vc3QgdW5pcXVlIHJlcHRpbGVzLCBiaXJkcyBvciBhbXBoaWJpYW5zLlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5ob21lX2JvZHlfcGV0QnV0dG9ufSAke3N0eWxlcy5tX2NsaWNrYWJsZV9idG59YH0gb25DbGljaz17aGFuZGxlQWRkQW5pbWFsfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvbWVfYm9keV9wZXRCdXR0b25fdGV4dH0+XG4gICAgICAgICAgICBBZGQgeW91ciBmaXJzdCBhbmltYWxcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZXMuaG9tZV9ib2R5X3BldEJ1dHRvbl9pY29ufSBzcmM9XCIvYXNzZXRzL2Fycm93X2NpcmNsZV9yaWdodC5zdmdcIiB3aWR0aD17MjB9IGhlaWdodD17MjB9IGFsdD1cIm5leHQgYXJyb3dcIj48L0ltYWdlPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPEFuaW1hbE1vZGFsIG9wZW5Nb2RhbD17b3Blbk1vZGFsfSBzZXRPcGVuTW9kYWw9e3NldE9wZW5Nb2RhbH0gbW9kYWxBcHBlYXJpbmc9e21vZGFsQXBwZWFyaW5nfSBzZXRNb2RhbEFwcGVhcmluZz17c2V0TW9kYWxBcHBlYXJpbmd9IHBlcnNpc3RBbmltYWw9e3BlcnNpc3RBbmltYWx9PlxuICAgICAgICA8L0FuaW1hbE1vZGFsPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwic3R5bGVzIiwib3JpZ2luYWxTdHlsZXMiLCJSZWFjdCIsIkFuaW1hbE1vZGFsIiwiSG9tZSIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsInVzZVN0YXRlIiwibW9kYWxBcHBlYXJpbmciLCJzZXRNb2RhbEFwcGVhcmluZyIsInBlcnNpc3RBbmltYWwiLCJmb3JtRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJuZXdFbnRyeSIsIm5hbWVzIiwibGFzdE5hbWUiLCJiaXJ0aERhdGUiLCJzcGVjaWVzIiwicHJvZmlsZVBpY3R1cmUiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJwcmV2aW91c0FuaW1hbHMiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHVzaCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJsZW5ndGgiLCJoYW5kbGVBZGRBbmltYWwiLCJzZXRUaW1lb3V0IiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImhvbWVfYm9keSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaG9tZV9ib2R5X3RpdGxlIiwiaG9tZV9ib2R5X2Rlc2NyaXB0aW9uIiwiYnV0dG9uIiwiaG9tZV9ib2R5X3BldEJ1dHRvbiIsIm1fY2xpY2thYmxlX2J0biIsIm9uQ2xpY2siLCJob21lX2JvZHlfcGV0QnV0dG9uX3RleHQiLCJob21lX2JvZHlfcGV0QnV0dG9uX2ljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});