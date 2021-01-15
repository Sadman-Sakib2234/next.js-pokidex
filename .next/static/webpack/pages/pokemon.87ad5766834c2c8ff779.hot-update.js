webpackHotUpdate_N_E("pages/pokemon",{

/***/ "./pages/pokemon.js":
/*!**************************!*\
  !*** ./pages/pokemon.js ***!
  \**************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pokemon; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/Link */ "./node_modules/next/Link.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\Potfolio Pojects\\Pokidex-with-pokeapi\\pages\\pokemon.js";



var __N_SSP = true;
function pokemon(_ref) {
  var _this = this;

  var pokeman = _ref.pokeman;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: pokeman.name,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "text-4xl mb-2 text-center capitalize",
      children: [pokeman.id, ". ", pokeman.name]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      className: "mx-auto",
      src: pokeman.image,
      alt: pokeman.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "font-bold mr-2",
        children: "Weight:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), " ", pokeman.weight]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "font-bold mr-2",
        children: "Height:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), pokeman.height]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: "text-2xl mt-6 mb-2",
      children: "Types"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this), pokeman.types.map(function (type, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: type.type.name
      }, "index", false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "mt-10 text-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "text-2xl underline",
          children: "Got Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9rZW1vbi5qcyJdLCJuYW1lcyI6WyJwb2tlbW9uIiwicG9rZW1hbiIsIm5hbWUiLCJpZCIsImltYWdlIiwid2VpZ2h0IiwiaGVpZ2h0IiwidHlwZXMiLCJtYXAiLCJ0eXBlIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ2UsU0FBU0EsT0FBVCxPQUE4QjtBQUFBOztBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVztBQUN6QyxzQkFDSSxxRUFBQywwREFBRDtBQUFRLFNBQUssRUFBRUEsT0FBTyxDQUFDQyxJQUF2QjtBQUFBLDRCQUNJO0FBQUksZUFBUyxFQUFDLHNDQUFkO0FBQUEsaUJBQ0tELE9BQU8sQ0FBQ0UsRUFEYixRQUNtQkYsT0FBTyxDQUFDQyxJQUQzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUlJO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBeUIsU0FBRyxFQUFFRCxPQUFPLENBQUNHLEtBQXRDO0FBQTZDLFNBQUcsRUFBRUgsT0FBTyxDQUFDQztBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosZUFLSTtBQUFBLDhCQUNJO0FBQU0saUJBQVMsRUFBQyxnQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixPQUNxREQsT0FBTyxDQUFDSSxNQUQ3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixlQVFJO0FBQUEsOEJBQ0k7QUFBTSxpQkFBUyxFQUFDLGdCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBRUtKLE9BQU8sQ0FBQ0ssTUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSSixlQVlJO0FBQUksZUFBUyxFQUFDLG9CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkosRUFhS0wsT0FBTyxDQUFDTSxLQUFSLENBQWNDLEdBQWQsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsMEJBQ2Y7QUFBQSxrQkFBZ0JELElBQUksQ0FBQ0EsSUFBTCxDQUFVUDtBQUExQixTQUFPLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURlO0FBQUEsS0FBbEIsQ0FiTCxlQWdCSTtBQUFHLGVBQVMsRUFBQyxtQkFBYjtBQUFBLDZCQUNJLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFDSTtBQUFHLG1CQUFTLEVBQUMsb0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXdCSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb2tlbW9uLjg3YWQ1NzY2ODM0YzJjOGZmNzc5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9rZW1vbih7IHBva2VtYW4gfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0IHRpdGxlPXtwb2tlbWFuLm5hbWV9PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgbWItMiB0ZXh0LWNlbnRlciBjYXBpdGFsaXplXCI+XHJcbiAgICAgICAgICAgICAgICB7cG9rZW1hbi5pZH0uIHtwb2tlbWFuLm5hbWV9XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibXgtYXV0b1wiIHNyYz17cG9rZW1hbi5pbWFnZX0gYWx0PXtwb2tlbWFuLm5hbWV9IC8+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIG1yLTJcIj5XZWlnaHQ6PC9zcGFuPiB7cG9rZW1hbi53ZWlnaHR9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgbXItMlwiPkhlaWdodDo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB7cG9rZW1hbi5oZWlnaHR9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIG10LTYgbWItMlwiPlR5cGVzPC9oMj5cclxuICAgICAgICAgICAge3Bva2VtYW4udHlwZXMubWFwKCh0eXBlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHAga2V5PVwiaW5kZXhcIj57dHlwZS50eXBlLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMTAgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC0yeGwgdW5kZXJsaW5lXCI+R290IEhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBxdWVyeSB9KSB7XHJcbiAgICBjb25zdCBpZCA9IHF1ZXJ5LmlkO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLyR7aWR9YCk7XHJcbiAgICAgICAgY29uc3QgcG9rZW1hbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgcGFkZGVkSWQgPSAoJzAwJyArIGlkKS5zbGljZSgtMyk7XHJcbiAgICAgICAgcG9rZW1hbi5pbWFnZSA9IGBodHRwczovL2Fzc2V0cy5wb2tlbW9uLmNvbS9hc3NldHMvY21zMi9pbWcvcG9rZWRleC9kZXRhaWwvJHtwYWRkZWRJZH0ucG5nYDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9wczogeyBwb2tlbWFuIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=