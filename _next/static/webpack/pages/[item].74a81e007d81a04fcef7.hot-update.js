webpackHotUpdate_N_E("pages/[item]",{

/***/ "./pages/[item].js":
/*!*************************!*\
  !*** ./pages/[item].js ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Item; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/styles */ "./util/styles.js");
/* harmony import */ var _util_items__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/items */ "./util/items.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
var _jsxFileName = "C:\\Users\\ragio\\dev\\getting-started\\pages\\[item].js",
    _s = $RefreshSig$();



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var __N_SSG = true;
function Item(_ref) {
  _s();

  var _this = this;

  var currentItem = _ref.currentItem,
      nextItem = _ref.nextItem;
  var classes = Object(_util_styles__WEBPACK_IMPORTED_MODULE_4__["useStyles"])();

  if (!currentItem) {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 12
      }
    }, "404");
  }

  var needToKnow = currentItem.prerequisits && !!currentItem.prerequisits.length && _util_items__WEBPACK_IMPORTED_MODULE_5__["items"].filter(function (i) {
    return !!i.name && currentItem.prerequisits.indexOf(i.name.toLowerCase()) !== -1;
  });
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, " Getting started with ", currentItem.name, " ")), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.heroContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    maxWidth: "sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: "h1",
    variant: "h2",
    align: "center",
    color: "textPrimary",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("img", {
    alt: currentItem.name,
    src: currentItem.img,
    className: "jsx-1681526123" + " " + "img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }), currentItem.name), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1681526123",
    __self: this
  }, ".img.jsx-1681526123{display:inline-block;width:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccmFnaW9cXGRldlxcZ2V0dGluZy1zdGFydGVkXFxwYWdlc1xcW2l0ZW1dLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDd0IsQUFHc0MscUJBQ1YsV0FDYiIsImZpbGUiOiJDOlxcVXNlcnNcXHJhZ2lvXFxkZXZcXGdldHRpbmctc3RhcnRlZFxccGFnZXNcXFtpdGVtXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVN0eWxlcyB9IGZyb20gXCIuLi91dGlsL3N0eWxlc1wiO1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tIFwiLi4vdXRpbC9pdGVtc1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIjtcbmltcG9ydCBNVUlMaW5rIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW0oeyBjdXJyZW50SXRlbSwgbmV4dEl0ZW0gfSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGlmICghY3VycmVudEl0ZW0pIHtcbiAgICByZXR1cm4gPGRpdj40MDQ8L2Rpdj47XG4gIH1cbiAgY29uc3QgbmVlZFRvS25vdyA9XG4gICAgY3VycmVudEl0ZW0ucHJlcmVxdWlzaXRzICYmXG4gICAgISFjdXJyZW50SXRlbS5wcmVyZXF1aXNpdHMubGVuZ3RoICYmXG4gICAgaXRlbXMuZmlsdGVyKFxuICAgICAgKGkpID0+XG4gICAgICAgICEhaS5uYW1lICYmXG4gICAgICAgIGN1cnJlbnRJdGVtLnByZXJlcXVpc2l0cy5pbmRleE9mKGkubmFtZS50b0xvd2VyQ2FzZSgpKSAhPT0gLTFcbiAgICApO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPiBHZXR0aW5nIHN0YXJ0ZWQgd2l0aCB7Y3VycmVudEl0ZW0ubmFtZX0gPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgPG1haW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlcm9Db250ZW50fT5cbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIj5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImgyXCJcbiAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcbiAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBhbHQ9e2N1cnJlbnRJdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgc3JjPXtjdXJyZW50SXRlbS5pbWd9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2N1cnJlbnRJdGVtLm5hbWV9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5pbWcge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBwYXJhZ3JhcGhcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2N1cnJlbnRJdGVtLnN1YlRpdGxlfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IDMwMCwgbWFyZ2luOiBcIjAgYXV0b1wiIH19XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJwXCJcbiAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBwYXJhZ3JhcGhcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2N1cnJlbnRJdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiPlxuICAgICAgICAgICAge25lZWRUb0tub3cgJiYgISFuZWVkVG9Lbm93Lmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDVcIlxuICAgICAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBOZWVkIHRvIGtub3cgKGJlZm9yZSBsZWFybmluZyB7Y3VycmVudEl0ZW0ubmFtZX0pOntcIiBcIn1cbiAgICAgICAgICAgICAgICB7bmVlZFRvS25vdy5tYXAoKGksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBsaW5rID0gYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L2l0ZW0vJHtpLm5hbWV9YDtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmt9IGFzPXtsaW5rfSBrZXk9e2kubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgPE1VSUxpbmsgY29sb3I9XCJpbmhlcml0XCIgaHJlZj17bGlua30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggPT09IDAgPyBcIiBcIiA6IFwiLCBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9NVUlMaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxuICAgICAgICAgICAge2N1cnJlbnRJdGVtLnBhcnRzICYmXG4gICAgICAgICAgICAgIGN1cnJlbnRJdGVtLnBhcnRzLm1hcCgoaSkgPT4gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNVwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2kudGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogMzAwIH19XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwXCJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgcGFyYWdyYXBoXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtpLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAge2kuaW1hZ2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD17aS50aXRsZX0gc3JjPXtpLmltYWdlfSBjbGFzc05hbWU9XCJpbWdcIiAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIHtpLmVtYmVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaS5lbWJlZCB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAzMDAgfX1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInBcIlxuICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBwYXJhZ3JhcGhcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2kuYm90dG9tVGV4dH1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGFzPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIFwiL1wifT5cbiAgICAgICAgICAgICAgPGE+QmFjayBIb21lPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAge25leHRJdGVtICYmIChcbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIFwiL1wiICsgbmV4dEl0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBcIi9cIiArIG5leHRJdGVtLm5hbWV9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YT57bmV4dEl0ZW0ubmFtZX08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCB7IGl0ZW0gfSA9IHBhcmFtcztcbiAgY29uc3QgY3VycmVudEl0ZW0gPVxuICAgIGl0ZW0gJiZcbiAgICBpdGVtcy5maW5kKChpKSA9PiBpLm5hbWUgJiYgaS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IGl0ZW0udG9Mb3dlckNhc2UoKSk7XG4gIGNvbnN0IG5leHRJdGVtID1cbiAgICBjdXJyZW50SXRlbSAmJlxuICAgIGN1cnJlbnRJdGVtLm5leHQgJiZcbiAgICBpdGVtcy5maW5kKFxuICAgICAgKGkpID0+IGkubmFtZSAmJiBpLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gY3VycmVudEl0ZW0ubmV4dC50b0xvd2VyQ2FzZSgpXG4gICAgKTtcbiAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS1uZXh0SXRlbS0tLS0tLS0tLS0tLVwiLCBuZXh0SXRlbSk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGN1cnJlbnRJdGVtLFxuICAgICAgbmV4dEl0ZW0sXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgcmV0dXJuIHtcbiAgICBwYXRoczogaXRlbXMubWFwKChpKSA9PiAoeyBwYXJhbXM6IHsgaXRlbTogaS5uYW1lIH0gfSkpLFxuICAgIGZhbGxiYWNrOiBmYWxzZSwgLy8gU2VlIHRoZSBcImZhbGxiYWNrXCIgc2VjdGlvbiBiZWxvd1xuICB9O1xufVxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\ragio\\\\dev\\\\getting-started\\\\pages\\\\[item].js */"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h5",
    align: "center",
    color: "textSecondary",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, currentItem.subTitle), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      maxWidth: 300,
      margin: "0 auto"
    },
    variant: "p",
    align: "center",
    color: "textSecondary",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, currentItem.description)), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    maxWidth: "md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, needToKnow && !!needToKnow.length && __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: "h5",
    align: "left",
    color: "textPrimary",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, "Need to know (before learning ", currentItem.name, "):", " ", needToKnow.map(function (i, index) {
    var link = "".concat("", "/item/").concat(i.name);
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: link,
      as: link,
      key: i.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
      color: "inherit",
      href: link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 23
      }
    }, index === 0 ? " " : ", ", i.name));
  }))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    maxWidth: "lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, currentItem.parts && currentItem.parts.map(function (i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      component: "h5",
      variant: "h5",
      align: "left",
      color: "textPrimary",
      gutterBottom: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 19
      }
    }, i.title), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      style: {
        maxWidth: 300
      },
      variant: "p",
      align: "left",
      color: "textSecondary",
      paragraph: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 19
      }
    }, i.description), i.image && __jsx("img", {
      alt: i.title,
      src: i.image,
      className: "img",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 21
      }
    }), i.embed && __jsx("div", {
      style: {
        width: "100%"
      },
      dangerouslySetInnerHTML: {
        __html: i.embed
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 21
      }
    }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      style: {
        maxWidth: 300
      },
      variant: "p",
      align: "left",
      color: "textSecondary",
      paragraph: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 19
      }
    }, i.bottomText), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 19
      }
    }), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 19
      }
    }), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 19
      }
    }));
  })), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    maxWidth: "md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    as: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 15
    }
  }, "Back Home")), nextItem && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/" + nextItem.name,
    as: "/" + nextItem.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }, nextItem.name))))));
}

_s(Item, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [_util_styles__WEBPACK_IMPORTED_MODULE_4__["useStyles"]];
});

_c = Item;

var _c;

$RefreshReg$(_c, "Item");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2l0ZW1dLmpzIl0sIm5hbWVzIjpbIkl0ZW0iLCJjdXJyZW50SXRlbSIsIm5leHRJdGVtIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsIm5lZWRUb0tub3ciLCJwcmVyZXF1aXNpdHMiLCJsZW5ndGgiLCJpdGVtcyIsImZpbHRlciIsImkiLCJuYW1lIiwiaW5kZXhPZiIsInRvTG93ZXJDYXNlIiwiaGVyb0NvbnRlbnQiLCJpbWciLCJzdWJUaXRsZSIsIm1heFdpZHRoIiwibWFyZ2luIiwiZGVzY3JpcHRpb24iLCJtYXAiLCJpbmRleCIsImxpbmsiLCJwYXJ0cyIsInRpdGxlIiwiaW1hZ2UiLCJlbWJlZCIsIndpZHRoIiwiX19odG1sIiwiYm90dG9tVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxJQUFULE9BQXlDO0FBQUE7O0FBQUE7O0FBQUEsTUFBekJDLFdBQXlCLFFBQXpCQSxXQUF5QjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUN0RCxNQUFNQyxPQUFPLEdBQUdDLDhEQUFTLEVBQXpCOztBQUNBLE1BQUksQ0FBQ0gsV0FBTCxFQUFrQjtBQUNoQixXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUNELE1BQU1JLFVBQVUsR0FDZEosV0FBVyxDQUFDSyxZQUFaLElBQ0EsQ0FBQyxDQUFDTCxXQUFXLENBQUNLLFlBQVosQ0FBeUJDLE1BRDNCLElBRUFDLGlEQUFLLENBQUNDLE1BQU4sQ0FDRSxVQUFDQyxDQUFEO0FBQUEsV0FDRSxDQUFDLENBQUNBLENBQUMsQ0FBQ0MsSUFBSixJQUNBVixXQUFXLENBQUNLLFlBQVosQ0FBeUJNLE9BQXpCLENBQWlDRixDQUFDLENBQUNDLElBQUYsQ0FBT0UsV0FBUCxFQUFqQyxNQUEyRCxD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MWEwNGZjZWY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VTdHlsZXMgfSBmcm9tIFwiLi4vdXRpbC9zdHlsZXNcIjtcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSBcIi4uL3V0aWwvaXRlbXNcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCI7XG5pbXBvcnQgTVVJTGluayBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJdGVtKHsgY3VycmVudEl0ZW0sIG5leHRJdGVtIH0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBpZiAoIWN1cnJlbnRJdGVtKSB7XG4gICAgcmV0dXJuIDxkaXY+NDA0PC9kaXY+O1xuICB9XG4gIGNvbnN0IG5lZWRUb0tub3cgPVxuICAgIGN1cnJlbnRJdGVtLnByZXJlcXVpc2l0cyAmJlxuICAgICEhY3VycmVudEl0ZW0ucHJlcmVxdWlzaXRzLmxlbmd0aCAmJlxuICAgIGl0ZW1zLmZpbHRlcihcbiAgICAgIChpKSA9PlxuICAgICAgICAhIWkubmFtZSAmJlxuICAgICAgICBjdXJyZW50SXRlbS5wcmVyZXF1aXNpdHMuaW5kZXhPZihpLm5hbWUudG9Mb3dlckNhc2UoKSkgIT09IC0xXG4gICAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT4gR2V0dGluZyBzdGFydGVkIHdpdGgge2N1cnJlbnRJdGVtLm5hbWV9IDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyIC8+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZXJvQ29udGVudH0+XG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCI+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoMlwiXG4gICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXG4gICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgYWx0PXtjdXJyZW50SXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIHNyYz17Y3VycmVudEl0ZW0uaW1nfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZ1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtjdXJyZW50SXRlbS5uYW1lfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAuaW1nIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgcGFyYWdyYXBoXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjdXJyZW50SXRlbS5zdWJUaXRsZX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAzMDAsIG1hcmdpbjogXCIwIGF1dG9cIiB9fVxuICAgICAgICAgICAgICB2YXJpYW50PVwicFwiXG4gICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgcGFyYWdyYXBoXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjdXJyZW50SXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIj5cbiAgICAgICAgICAgIHtuZWVkVG9Lbm93ICYmICEhbmVlZFRvS25vdy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg1XCJcbiAgICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTmVlZCB0byBrbm93IChiZWZvcmUgbGVhcm5pbmcge2N1cnJlbnRJdGVtLm5hbWV9KTp7XCIgXCJ9XG4gICAgICAgICAgICAgICAge25lZWRUb0tub3cubWFwKChpLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgbGluayA9IGAke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9pdGVtLyR7aS5uYW1lfWA7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtsaW5rfSBhcz17bGlua30ga2V5PXtpLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxNVUlMaW5rIGNvbG9yPVwiaW5oZXJpdFwiIGhyZWY9e2xpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ID09PSAwID8gXCIgXCIgOiBcIiwgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB7aS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvTVVJTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIj5cbiAgICAgICAgICAgIHtjdXJyZW50SXRlbS5wYXJ0cyAmJlxuICAgICAgICAgICAgICBjdXJyZW50SXRlbS5wYXJ0cy5tYXAoKGkpID0+IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDVcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtpLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IDMwMCB9fVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwicFwiXG4gICAgICAgICAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIHBhcmFncmFwaFxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIHtpLmltYWdlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9e2kudGl0bGV9IHNyYz17aS5pbWFnZX0gY2xhc3NOYW1lPVwiaW1nXCIgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICB7aS5lbWJlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGkuZW1iZWQgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogMzAwIH19XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwXCJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgcGFyYWdyYXBoXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtpLmJvdHRvbVRleHR9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBhcz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBcIi9cIn0+XG4gICAgICAgICAgICAgIDxhPkJhY2sgSG9tZTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIHtuZXh0SXRlbSAmJiAoXG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBcIi9cIiArIG5leHRJdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgXCIvXCIgKyBuZXh0SXRlbS5uYW1lfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGE+e25leHRJdGVtLm5hbWV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgeyBpdGVtIH0gPSBwYXJhbXM7XG4gIGNvbnN0IGN1cnJlbnRJdGVtID1cbiAgICBpdGVtICYmXG4gICAgaXRlbXMuZmluZCgoaSkgPT4gaS5uYW1lICYmIGkubmFtZS50b0xvd2VyQ2FzZSgpID09PSBpdGVtLnRvTG93ZXJDYXNlKCkpO1xuICBjb25zdCBuZXh0SXRlbSA9XG4gICAgY3VycmVudEl0ZW0gJiZcbiAgICBjdXJyZW50SXRlbS5uZXh0ICYmXG4gICAgaXRlbXMuZmluZChcbiAgICAgIChpKSA9PiBpLm5hbWUgJiYgaS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IGN1cnJlbnRJdGVtLm5leHQudG9Mb3dlckNhc2UoKVxuICAgICk7XG4gIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tbmV4dEl0ZW0tLS0tLS0tLS0tLS1cIiwgbmV4dEl0ZW0pO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjdXJyZW50SXRlbSxcbiAgICAgIG5leHRJdGVtLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIHJldHVybiB7XG4gICAgcGF0aHM6IGl0ZW1zLm1hcCgoaSkgPT4gKHsgcGFyYW1zOiB7IGl0ZW06IGkubmFtZSB9IH0pKSxcbiAgICBmYWxsYmFjazogZmFsc2UsIC8vIFNlZSB0aGUgXCJmYWxsYmFja1wiIHNlY3Rpb24gYmVsb3dcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=