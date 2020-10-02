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

  var currentItem = _ref.currentItem;
  var classes = Object(_util_styles__WEBPACK_IMPORTED_MODULE_4__["useStyles"])();

  if (!currentItem) {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
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
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, " Getting started with ", currentItem.name, " ")), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.heroContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    maxWidth: "sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
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
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("img", {
    alt: currentItem.name,
    src: currentItem.img,
    className: "jsx-1681526123" + " " + "img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }), currentItem.name), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1681526123",
    __self: this
  }, ".img.jsx-1681526123{display:inline-block;width:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccmFnaW9cXGRldlxcZ2V0dGluZy1zdGFydGVkXFxwYWdlc1xcW2l0ZW1dLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDd0IsQUFHc0MscUJBQ1YsV0FDYiIsImZpbGUiOiJDOlxcVXNlcnNcXHJhZ2lvXFxkZXZcXGdldHRpbmctc3RhcnRlZFxccGFnZXNcXFtpdGVtXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3R5bGVzIH0gZnJvbSBcIi4uL3V0aWwvc3R5bGVzXCI7XG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gXCIuLi91dGlsL2l0ZW1zXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiO1xuaW1wb3J0IE1VSUxpbmsgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbSh7IGN1cnJlbnRJdGVtIH0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBpZiAoIWN1cnJlbnRJdGVtKSB7XG4gICAgcmV0dXJuIDxkaXY+NDA0PC9kaXY+O1xuICB9XG4gIGNvbnN0IG5lZWRUb0tub3cgPVxuICAgIGN1cnJlbnRJdGVtLnByZXJlcXVpc2l0cyAmJlxuICAgICEhY3VycmVudEl0ZW0ucHJlcmVxdWlzaXRzLmxlbmd0aCAmJlxuICAgIGl0ZW1zLmZpbHRlcihcbiAgICAgIChpKSA9PlxuICAgICAgICAhIWkubmFtZSAmJlxuICAgICAgICBjdXJyZW50SXRlbS5wcmVyZXF1aXNpdHMuaW5kZXhPZihpLm5hbWUudG9Mb3dlckNhc2UoKSkgIT09IC0xXG4gICAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT4gR2V0dGluZyBzdGFydGVkIHdpdGgge2N1cnJlbnRJdGVtLm5hbWV9IDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyIC8+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZXJvQ29udGVudH0+XG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCI+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoMlwiXG4gICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXG4gICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgYWx0PXtjdXJyZW50SXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIHNyYz17Y3VycmVudEl0ZW0uaW1nfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZ1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtjdXJyZW50SXRlbS5uYW1lfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAuaW1nIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgcGFyYWdyYXBoXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjdXJyZW50SXRlbS5zdWJUaXRsZX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAzMDAsIG1hcmdpbjogXCIwIGF1dG9cIiB9fVxuICAgICAgICAgICAgICB2YXJpYW50PVwicFwiXG4gICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgcGFyYWdyYXBoXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjdXJyZW50SXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIj5cbiAgICAgICAgICAgIHtuZWVkVG9Lbm93ICYmICEhbmVlZFRvS25vdy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg1XCJcbiAgICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTmVlZCB0byBrbm93IChiZWZvcmUgbGVhcm5pbmcge2N1cnJlbnRJdGVtLm5hbWV9KTp7XCIgXCJ9XG4gICAgICAgICAgICAgICAge25lZWRUb0tub3cubWFwKChpLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgbGluayA9IGAke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9pdGVtLyR7aS5uYW1lfWA7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtsaW5rfSBhcz17bGlua30ga2V5PXtpLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxNVUlMaW5rIGNvbG9yPVwiaW5oZXJpdFwiIGhyZWY9e2xpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ID09PSAwID8gXCIgXCIgOiBcIiwgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB7aS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvTVVJTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIj5cbiAgICAgICAgICAgIHtjdXJyZW50SXRlbS5wYXJ0cy5tYXAoKGkpID0+IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDVcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtpLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IDMwMCB9fVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInBcIlxuICAgICAgICAgICAgICAgICAgYWxpZ249XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICBwYXJhZ3JhcGhcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7aS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGkuZW1iZWQgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogMzAwIH19XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwicFwiXG4gICAgICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIHBhcmFncmFwaFxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtpLmJvdHRvbVRleHR9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICBCYWNre1wiIFwifVxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgYXM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgXCIvXCJ9PlxuICAgICAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoZGF0YSkgPT4ge1xuICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLWRhdGEtLS0tLS0tLS0tLS1cIiwgZGF0YSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGl0ZW0gfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgY3VycmVudEl0ZW0gPVxuICAgIGl0ZW0gPz9cbiAgICBpdGVtcy5maW5kKChpKSA9PiBpLm5hbWUgJiYgaS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IGl0ZW0udG9Mb3dlckNhc2UoKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgaXRlbTogY3VycmVudEl0ZW0sXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgcmV0dXJuIHtcbiAgICBwYXRoczogaXRlbXMubWFwKChpKSA9PiAoeyBwYXJhbXM6IHsgaXRlbTogaS5uYW1lIH0gfSkpLFxuICAgIGZhbGxiYWNrOiBmYWxzZSwgLy8gU2VlIHRoZSBcImZhbGxiYWNrXCIgc2VjdGlvbiBiZWxvd1xuICB9O1xufVxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\ragio\\\\dev\\\\getting-started\\\\pages\\\\[item].js */"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h5",
    align: "center",
    color: "textSecondary",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
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
      lineNumber: 62,
      columnNumber: 13
    }
  }, currentItem.description)), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    maxWidth: "md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
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
      lineNumber: 74,
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
        lineNumber: 84,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
      color: "inherit",
      href: link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 23
      }
    }, index === 0 ? " " : ", ", i.name));
  }))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    maxWidth: "lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, currentItem.parts.map(function (i) {
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
        columnNumber: 17
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
        columnNumber: 17
      }
    }, i.description), __jsx("div", {
      style: {
        width: "100%"
      },
      dangerouslySetInnerHTML: {
        __html: i.embed
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
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
        lineNumber: 120,
        columnNumber: 17
      }
    }, i.bottomText), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }
    }), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }
    }), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }
    }));
  }))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, "Back", " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    as: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, "Home")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2l0ZW1dLmpzIl0sIm5hbWVzIjpbIkl0ZW0iLCJjdXJyZW50SXRlbSIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJuZWVkVG9Lbm93IiwicHJlcmVxdWlzaXRzIiwibGVuZ3RoIiwiaXRlbXMiLCJmaWx0ZXIiLCJpIiwibmFtZSIsImluZGV4T2YiLCJ0b0xvd2VyQ2FzZSIsImhlcm9Db250ZW50IiwiaW1nIiwic3ViVGl0bGUiLCJtYXhXaWR0aCIsIm1hcmdpbiIsImRlc2NyaXB0aW9uIiwibWFwIiwiaW5kZXgiLCJsaW5rIiwicGFydHMiLCJ0aXRsZSIsIndpZHRoIiwiX19odG1sIiwiZW1iZWQiLCJib3R0b21UZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNBLElBQVQsT0FBK0I7QUFBQTs7QUFBQTs7QUFBQSxNQUFmQyxXQUFlLFFBQWZBLFdBQWU7QUFDNUMsTUFBTUMsT0FBTyxHQUFHQyw4REFBUyxFQUF6Qjs7QUFDQSxNQUFJLENBQUNGLFdBQUwsRUFBa0I7QUFDaEIsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDs7QUFDRCxNQUFNRyxVQUFVLEdBQ2RILFdBQVcsQ0FBQ0ksWUFBWixJQUNBLENBQUMsQ0FBQ0osV0FBVyxDQUFDSSxZQUFaLENBQXlCQyxNQUQzQixJQUVBQyxpREFBSyxDQUFDQyxNQUFOLENBQ0UsVUFBQ0MsQ0FBRDtBQUFBLFdBQ0UsQ0FBQyxDQUFDQSxDQUFDLENBQUNDLElBQUosSUFDQVQsV0FBVyxDQUFDSSxZQUFaLENBQXlCTSxPQUF6QixDQUFpQ0YsQ0FBQyxDQUFDQyxJQUFGLENBQU9FLFdBQVAsRUFBakMsTUFBMkQsQ0FBQyxDQUY5RDtBQUFBLEdBREYsQ0FIRjtBQVFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFqQ0YsRUFrQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWxDRixDQURxQjtBQUFBLEdBQXRCLENBREgsQ0EvREYsQ0FERixFQXlHRSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDTyxHQURQLEVBRUUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQWUsTUFBRSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBRkYsQ0F6R0YsQ0FORixDQURGO0FBeUhEOztHQXRJdUIzQixJO1VBQ05HLHNEOzs7S0FETUgsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9baXRlbV0uNmJkZDcyY2NmNDAyMWM5YTkxY2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3R5bGVzIH0gZnJvbSBcIi4uL3V0aWwvc3R5bGVzXCI7XG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gXCIuLi91dGlsL2l0ZW1zXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiO1xuaW1wb3J0IE1VSUxpbmsgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbSh7IGN1cnJlbnRJdGVtIH0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBpZiAoIWN1cnJlbnRJdGVtKSB7XG4gICAgcmV0dXJuIDxkaXY+NDA0PC9kaXY+O1xuICB9XG4gIGNvbnN0IG5lZWRUb0tub3cgPVxuICAgIGN1cnJlbnRJdGVtLnByZXJlcXVpc2l0cyAmJlxuICAgICEhY3VycmVudEl0ZW0ucHJlcmVxdWlzaXRzLmxlbmd0aCAmJlxuICAgIGl0ZW1zLmZpbHRlcihcbiAgICAgIChpKSA9PlxuICAgICAgICAhIWkubmFtZSAmJlxuICAgICAgICBjdXJyZW50SXRlbS5wcmVyZXF1aXNpdHMuaW5kZXhPZihpLm5hbWUudG9Mb3dlckNhc2UoKSkgIT09IC0xXG4gICAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT4gR2V0dGluZyBzdGFydGVkIHdpdGgge2N1cnJlbnRJdGVtLm5hbWV9IDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyIC8+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZXJvQ29udGVudH0+XG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCI+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoMlwiXG4gICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXG4gICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgYWx0PXtjdXJyZW50SXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIHNyYz17Y3VycmVudEl0ZW0uaW1nfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZ1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtjdXJyZW50SXRlbS5uYW1lfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAuaW1nIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgcGFyYWdyYXBoXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjdXJyZW50SXRlbS5zdWJUaXRsZX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAzMDAsIG1hcmdpbjogXCIwIGF1dG9cIiB9fVxuICAgICAgICAgICAgICB2YXJpYW50PVwicFwiXG4gICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgcGFyYWdyYXBoXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjdXJyZW50SXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIj5cbiAgICAgICAgICAgIHtuZWVkVG9Lbm93ICYmICEhbmVlZFRvS25vdy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg1XCJcbiAgICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTmVlZCB0byBrbm93IChiZWZvcmUgbGVhcm5pbmcge2N1cnJlbnRJdGVtLm5hbWV9KTp7XCIgXCJ9XG4gICAgICAgICAgICAgICAge25lZWRUb0tub3cubWFwKChpLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgbGluayA9IGAke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9pdGVtLyR7aS5uYW1lfWA7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtsaW5rfSBhcz17bGlua30ga2V5PXtpLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxNVUlMaW5rIGNvbG9yPVwiaW5oZXJpdFwiIGhyZWY9e2xpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ID09PSAwID8gXCIgXCIgOiBcIiwgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB7aS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvTVVJTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIj5cbiAgICAgICAgICAgIHtjdXJyZW50SXRlbS5wYXJ0cy5tYXAoKGkpID0+IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDVcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtpLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IDMwMCB9fVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInBcIlxuICAgICAgICAgICAgICAgICAgYWxpZ249XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICBwYXJhZ3JhcGhcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7aS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGkuZW1iZWQgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogMzAwIH19XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwicFwiXG4gICAgICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIHBhcmFncmFwaFxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtpLmJvdHRvbVRleHR9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICBCYWNre1wiIFwifVxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgYXM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgXCIvXCJ9PlxuICAgICAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoZGF0YSkgPT4ge1xuICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLWRhdGEtLS0tLS0tLS0tLS1cIiwgZGF0YSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGl0ZW0gfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgY3VycmVudEl0ZW0gPVxuICAgIGl0ZW0gPz9cbiAgICBpdGVtcy5maW5kKChpKSA9PiBpLm5hbWUgJiYgaS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IGl0ZW0udG9Mb3dlckNhc2UoKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgaXRlbTogY3VycmVudEl0ZW0sXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgcmV0dXJuIHtcbiAgICBwYXRoczogaXRlbXMubWFwKChpKSA9PiAoeyBwYXJhbXM6IHsgaXRlbTogaS5uYW1lIH0gfSkpLFxuICAgIGZhbGxiYWNrOiBmYWxzZSwgLy8gU2VlIHRoZSBcImZhbGxiYWNrXCIgc2VjdGlvbiBiZWxvd1xuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==