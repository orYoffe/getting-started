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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/styles */ "./util/styles.js");
/* harmony import */ var _util_items__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/items */ "./util/items.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Accordion */ "./node_modules/@material-ui/core/esm/Accordion/index.js");
/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/AccordionDetails */ "./node_modules/@material-ui/core/esm/AccordionDetails/index.js");
/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/AccordionSummary */ "./node_modules/@material-ui/core/esm/AccordionSummary/index.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_14__);


var _jsxFileName = "C:\\Users\\ragio\\dev\\getting-started\\pages\\[item].js",
    _s = $RefreshSig$();



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;












var __N_SSG = true;
function Item(_ref) {
  _s();

  var _this = this;

  var currentItem = _ref.currentItem,
      nextItem = _ref.nextItem;
  var classes = Object(_util_styles__WEBPACK_IMPORTED_MODULE_5__["useStyles"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      expanded = _React$useState2[0],
      setExpanded = _React$useState2[1];

  if (!currentItem) {
    return null;
  }

  var handleChange = function handleChange(panel) {
    return function (event, isExpanded) {
      setExpanded(isExpanded ? panel : false);
    };
  };

  var needToKnow = currentItem.prerequisits && !!currentItem.prerequisits.length && _util_items__WEBPACK_IMPORTED_MODULE_6__["items"].filter(function (i) {
    return !!i.name && currentItem.prerequisits.indexOf(i.name.toLowerCase()) !== -1;
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, " Getting started with ", currentItem.name, " ")), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), __jsx("main", {
    style: {
      marginTop: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.heroContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    maxWidth: "sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "h1",
    variant: "h2",
    align: "center",
    color: "textPrimary",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("img", {
    alt: currentItem.name,
    src: currentItem.img,
    className: "jsx-4253325134" + " " + "img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }), currentItem.name), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4253325134",
    __self: this
  }, "main.jsx-4253325134{margin-top:20px;}.img.jsx-4253325134{display:inline-block;width:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccmFnaW9cXGRldlxcZ2V0dGluZy1zdGFydGVkXFxwYWdlc1xcW2l0ZW1dLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEd0IsQUFHaUMsQUFHSyxnQkFGdkIsS0FHYSxXQUNiIiwiZmlsZSI6IkM6XFxVc2Vyc1xccmFnaW9cXGRldlxcZ2V0dGluZy1zdGFydGVkXFxwYWdlc1xcW2l0ZW1dLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlU3R5bGVzIH0gZnJvbSBcIi4uL3V0aWwvc3R5bGVzXCI7XG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gXCIuLi91dGlsL2l0ZW1zXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiO1xuaW1wb3J0IE1VSUxpbmsgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIjtcbmltcG9ydCBBY2NvcmRpb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvblwiO1xuaW1wb3J0IEFjY29yZGlvbkRldGFpbHMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvbkRldGFpbHNcIjtcbmltcG9ydCBBY2NvcmRpb25TdW1tYXJ5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25TdW1tYXJ5XCI7XG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW0oeyBjdXJyZW50SXRlbSwgbmV4dEl0ZW0gfSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gUmVhY3QudXNlU3RhdGUoMCk7XG5cbiAgaWYgKCFjdXJyZW50SXRlbSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHBhbmVsKSA9PiAoZXZlbnQsIGlzRXhwYW5kZWQpID0+IHtcbiAgICBzZXRFeHBhbmRlZChpc0V4cGFuZGVkID8gcGFuZWwgOiBmYWxzZSk7XG4gIH07XG4gIGNvbnN0IG5lZWRUb0tub3cgPVxuICAgIGN1cnJlbnRJdGVtLnByZXJlcXVpc2l0cyAmJlxuICAgICEhY3VycmVudEl0ZW0ucHJlcmVxdWlzaXRzLmxlbmd0aCAmJlxuICAgIGl0ZW1zLmZpbHRlcihcbiAgICAgIChpKSA9PlxuICAgICAgICAhIWkubmFtZSAmJlxuICAgICAgICBjdXJyZW50SXRlbS5wcmVyZXF1aXNpdHMuaW5kZXhPZihpLm5hbWUudG9Mb3dlckNhc2UoKSkgIT09IC0xXG4gICAgKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT4gR2V0dGluZyBzdGFydGVkIHdpdGgge2N1cnJlbnRJdGVtLm5hbWV9IDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyIC8+XG5cbiAgICAgIDxtYWluIHN0eWxlPXt7IG1hcmdpblRvcDogMjAgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlcm9Db250ZW50fT5cbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIj5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImgyXCJcbiAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcbiAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBhbHQ9e2N1cnJlbnRJdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgc3JjPXtjdXJyZW50SXRlbS5pbWd9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2N1cnJlbnRJdGVtLm5hbWV9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmltZyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIHBhcmFncmFwaFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y3VycmVudEl0ZW0uc3ViVGl0bGV9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogMzAwLCBtYXJnaW46IFwiMCBhdXRvXCIgfX1cbiAgICAgICAgICAgICAgLy8gdmFyaWFudD1cInBcIlxuICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIHBhcmFncmFwaFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y3VycmVudEl0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fT5cbiAgICAgICAgICAgIHtuZWVkVG9Lbm93ICYmICEhbmVlZFRvS25vdy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg1XCJcbiAgICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTmVlZCB0byBrbm93IChiZWZvcmUgbGVhcm5pbmcge2N1cnJlbnRJdGVtLm5hbWV9KTp7XCIgXCJ9XG4gICAgICAgICAgICAgICAge25lZWRUb0tub3cubWFwKChpLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgbGluayA9IGAke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS8ke2kubmFtZX1gO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17bGlua30gYXM9e2xpbmt9IGtleT17bGlua30+XG4gICAgICAgICAgICAgICAgICAgICAgPE1VSUxpbmsgaHJlZj17bGlua30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggPT09IDAgPyBcIiBcIiA6IFwiLCBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9NVUlMaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxuICAgICAgICAgICAge2N1cnJlbnRJdGVtLnBhcnRzICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgICAgICAge2N1cnJlbnRJdGVtLnBhcnRzLm1hcCgoaSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25cbiAgICAgICAgICAgICAgICAgICAga2V5PXtpLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZD17ZXhwYW5kZWQgPT09IGluZGV4fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvblN1bW1hcnlcbiAgICAgICAgICAgICAgICAgICAgICBleHBhbmRJY29uPXs8RXhwYW5kTW9yZUljb24gLz59XG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz17YCR7aS50aXRsZX1iaC1jb250ZW50YH1cbiAgICAgICAgICAgICAgICAgICAgICBpZD17YCR7aS50aXRsZX1iaC1oZWFkZXJgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRpbmd9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2kudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogMzAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZhcmlhbnQ9XCJwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYWdyYXBoXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAge2kuaW1hZ2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD17aS50aXRsZX0gc3JjPXtpLmltYWdlfSBjbGFzc05hbWU9XCJpbWdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtleHBhbmRlZCA9PT0gaW5kZXggJiYgaS5lbWJlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGkuZW1iZWQgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogMzAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZhcmlhbnQ9XCJwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYWdyYXBoXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpLmJvdHRvbVRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgbWF4V2lkdGg9XCJtZFwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDIwLFxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDQwLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGFzPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIFwiL1wifT5cbiAgICAgICAgICAgICAgPGE+R28gQmFjayBIb21lPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAge25leHRJdGVtICYmIChcbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIFwiL1wiICsgbmV4dEl0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBcIi9cIiArIG5leHRJdGVtLm5hbWV9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YT5Db250aW51ZSB0byBsZWFybiB7bmV4dEl0ZW0ubmFtZX08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCB7IGl0ZW0gfSA9IHBhcmFtcztcbiAgY29uc3QgY3VycmVudEl0ZW0gPVxuICAgICEhaXRlbSAmJlxuICAgIGl0ZW1zLmZpbmQoKGkpID0+IGkubmFtZSAmJiBpLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gaXRlbS50b0xvd2VyQ2FzZSgpKTtcblxuICBjb25zdCBuZXh0SXRlbSA9XG4gICAgISFjdXJyZW50SXRlbSAmJlxuICAgICEhY3VycmVudEl0ZW0ubmV4dCAmJlxuICAgIGl0ZW1zLmZpbmQoXG4gICAgICAoaSkgPT4gaS5uYW1lICYmIGkubmFtZS50b0xvd2VyQ2FzZSgpID09PSBjdXJyZW50SXRlbS5uZXh0LnRvTG93ZXJDYXNlKClcbiAgICApO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjdXJyZW50SXRlbSxcbiAgICAgIG5leHRJdGVtLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIHJldHVybiB7XG4gICAgcGF0aHM6IGl0ZW1zLm1hcCgoaSkgPT4gKHsgcGFyYW1zOiB7IGl0ZW06IGkubmFtZSB9IH0pKSxcbiAgICBmYWxsYmFjazogZmFsc2UsIC8vIFNlZSB0aGUgXCJmYWxsYmFja1wiIHNlY3Rpb24gYmVsb3dcbiAgfTtcbn1cbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\ragio\\\\dev\\\\getting-started\\\\pages\\\\[item].js */"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h5",
    align: "center",
    color: "textSecondary",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, currentItem.subTitle), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      maxWidth: 300,
      margin: "0 auto"
    } // variant="p"
    ,
    align: "center",
    color: "textSecondary",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, currentItem.description)), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    maxWidth: "lg",
    style: {
      marginBottom: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, needToKnow && !!needToKnow.length && __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "h5",
    align: "left",
    color: "textPrimary",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, "Need to know (before learning ", currentItem.name, "):", " ", needToKnow.map(function (i, index) {
    var link = "".concat("", "/").concat(i.name);
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: link,
      as: link,
      key: link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
      href: link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 23
      }
    }, index === 0 ? " " : ", ", i.name));
  }))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    maxWidth: "lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, currentItem.parts && __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  }, currentItem.parts.map(function (i, index) {
    return __jsx(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: i.title,
      expanded: expanded === index,
      onChange: handleChange(index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 19
      }
    }, __jsx(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_13__["default"], {
      expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_14___default.a, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 35
        }
      }),
      "aria-controls": "".concat(i.title, "bh-content"),
      id: "".concat(i.title, "bh-header"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: classes.heading,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 23
      }
    }, i.title)), __jsx(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 21
      }
    }, __jsx("div", {
      style: {
        width: "100%"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 23
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
      style: {
        maxWidth: 300
      } // variant="p"
      ,
      align: "left",
      color: "textSecondary",
      paragraph: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 25
      }
    }, i.description), i.image && __jsx("img", {
      alt: i.title,
      src: i.image,
      className: "img",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 27
      }
    }), expanded === index && i.embed && __jsx("div", {
      style: {
        width: "100%"
      },
      dangerouslySetInnerHTML: {
        __html: i.embed
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 27
      }
    }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
      style: {
        maxWidth: 300
      } // variant="p"
      ,
      align: "left",
      color: "textSecondary",
      paragraph: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 25
      }
    }, i.bottomText))));
  }))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    maxWidth: "md",
    style: {
      justifyContent: "space-between",
      display: "flex",
      marginTop: 20,
      marginBottom: 40
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    as: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 15
    }
  }, "Go Back Home")), nextItem && __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/" + nextItem.name,
    as: "/" + nextItem.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 17
    }
  }, "Continue to learn ", nextItem.name))))));
}

_s(Item, "KIK3tqZGKzyJFovLffRoGxfO+fk=", false, function () {
  return [_util_styles__WEBPACK_IMPORTED_MODULE_5__["useStyles"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2l0ZW1dLmpzIl0sIm5hbWVzIjpbIkl0ZW0iLCJjdXJyZW50SXRlbSIsIm5leHRJdGVtIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwiaGFuZGxlQ2hhbmdlIiwicGFuZWwiLCJldmVudCIsImlzRXhwYW5kZWQiLCJuZWVkVG9Lbm93IiwicHJlcmVxdWlzaXRzIiwibGVuZ3RoIiwiaXRlbXMiLCJmaWx0ZXIiLCJpIiwibmFtZSIsImluZGV4T2YiLCJ0b0xvd2VyQ2FzZSIsIm1hcmdpblRvcCIsImhlcm9Db250ZW50IiwiaW1nIiwic3ViVGl0bGUiLCJtYXhXaWR0aCIsIm1hcmdpbiIsImRlc2NyaXB0aW9uIiwibWFyZ2luQm90dG9tIiwibWFwIiwiaW5kZXgiLCJsaW5rIiwicGFydHMiLCJyb290IiwidGl0bGUiLCJoZWFkaW5nIiwid2lkdGgiLCJpbWFnZSIsImVtYmVkIiwiX19odG1sIiwiYm90dG9tVGV4dCIsImp1c3RpZnlDb250ZW50IiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0EsSUFBVCxPQUF5QztBQUFBOztBQUFBOztBQUFBLE1BQXpCQyxXQUF5QixRQUF6QkEsV0FBeUI7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDdEQsTUFBTUMsT0FBTyxHQUFHQyw4REFBUyxFQUF6Qjs7QUFEc0Qsd0JBRXRCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQUZzQjtBQUFBO0FBQUEsTUFFL0NDLFFBRitDO0FBQUEsTUFFckNDLFdBRnFDOztBQUl0RCxNQUFJLENBQUNQLFdBQUwsRUFBa0I7QUFDaEIsV0FBTyxJQUFQO0FBQ0Q7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L3dlYnBhY2svcGFnZXMvW2l0ZW1dLjhkMGUwZmViNmZiNzAwMGVlODRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VTdHlsZXMgfSBmcm9tIFwiLi4vdXRpbC9zdHlsZXNcIjtcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSBcIi4uL3V0aWwvaXRlbXNcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCI7XG5pbXBvcnQgTVVJTGluayBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiO1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uXCI7XG5pbXBvcnQgQWNjb3JkaW9uRGV0YWlscyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uRGV0YWlsc1wiO1xuaW1wb3J0IEFjY29yZGlvblN1bW1hcnkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvblN1bW1hcnlcIjtcbmltcG9ydCBFeHBhbmRNb3JlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbSh7IGN1cnJlbnRJdGVtLCBuZXh0SXRlbSB9KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcblxuICBpZiAoIWN1cnJlbnRJdGVtKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAocGFuZWwpID0+IChldmVudCwgaXNFeHBhbmRlZCkgPT4ge1xuICAgIHNldEV4cGFuZGVkKGlzRXhwYW5kZWQgPyBwYW5lbCA6IGZhbHNlKTtcbiAgfTtcbiAgY29uc3QgbmVlZFRvS25vdyA9XG4gICAgY3VycmVudEl0ZW0ucHJlcmVxdWlzaXRzICYmXG4gICAgISFjdXJyZW50SXRlbS5wcmVyZXF1aXNpdHMubGVuZ3RoICYmXG4gICAgaXRlbXMuZmlsdGVyKFxuICAgICAgKGkpID0+XG4gICAgICAgICEhaS5uYW1lICYmXG4gICAgICAgIGN1cnJlbnRJdGVtLnByZXJlcXVpc2l0cy5pbmRleE9mKGkubmFtZS50b0xvd2VyQ2FzZSgpKSAhPT0gLTFcbiAgICApO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPiBHZXR0aW5nIHN0YXJ0ZWQgd2l0aCB7Y3VycmVudEl0ZW0ubmFtZX0gPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgPG1haW4gc3R5bGU9e3sgbWFyZ2luVG9wOiAyMCB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVyb0NvbnRlbnR9PlxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDJcIlxuICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxuICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGFsdD17Y3VycmVudEl0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICBzcmM9e2N1cnJlbnRJdGVtLmltZ31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWdcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7Y3VycmVudEl0ZW0ubmFtZX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuaW1nIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgcGFyYWdyYXBoXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjdXJyZW50SXRlbS5zdWJUaXRsZX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAzMDAsIG1hcmdpbjogXCIwIGF1dG9cIiB9fVxuICAgICAgICAgICAgICAvLyB2YXJpYW50PVwicFwiXG4gICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgcGFyYWdyYXBoXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjdXJyZW50SXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19PlxuICAgICAgICAgICAge25lZWRUb0tub3cgJiYgISFuZWVkVG9Lbm93Lmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDVcIlxuICAgICAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBOZWVkIHRvIGtub3cgKGJlZm9yZSBsZWFybmluZyB7Y3VycmVudEl0ZW0ubmFtZX0pOntcIiBcIn1cbiAgICAgICAgICAgICAgICB7bmVlZFRvS25vdy5tYXAoKGksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBsaW5rID0gYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9LyR7aS5uYW1lfWA7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtsaW5rfSBhcz17bGlua30ga2V5PXtsaW5rfT5cbiAgICAgICAgICAgICAgICAgICAgICA8TVVJTGluayBocmVmPXtsaW5rfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCA9PT0gMCA/IFwiIFwiIDogXCIsIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAge2kubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L01VSUxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCI+XG4gICAgICAgICAgICB7Y3VycmVudEl0ZW0ucGFydHMgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgICAgICAgICB7Y3VycmVudEl0ZW0ucGFydHMubWFwKChpLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPEFjY29yZGlvblxuICAgICAgICAgICAgICAgICAgICBrZXk9e2kudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkPXtleHBhbmRlZCA9PT0gaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeVxuICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZEljb249ezxFeHBhbmRNb3JlSWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPXtgJHtpLnRpdGxlfWJoLWNvbnRlbnRgfVxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtgJHtpLnRpdGxlfWJoLWhlYWRlcmB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGluZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uU3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkRldGFpbHM+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAzMDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmFyaWFudD1cInBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhZ3JhcGhcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2kuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aS5pbWFnZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PXtpLnRpdGxlfSBzcmM9e2kuaW1hZ2V9IGNsYXNzTmFtZT1cImltZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAge2V4cGFuZGVkID09PSBpbmRleCAmJiBpLmVtYmVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaS5lbWJlZCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAzMDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmFyaWFudD1cInBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhZ3JhcGhcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2kuYm90dG9tVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICBtYXhXaWR0aD1cIm1kXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogMjAsXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogNDAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgYXM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgXCIvXCJ9PlxuICAgICAgICAgICAgICA8YT5HbyBCYWNrIEhvbWU8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB7bmV4dEl0ZW0gJiYgKFxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgXCIvXCIgKyBuZXh0SXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIFwiL1wiICsgbmV4dEl0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhPkNvbnRpbnVlIHRvIGxlYXJuIHtuZXh0SXRlbS5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHsgaXRlbSB9ID0gcGFyYW1zO1xuICBjb25zdCBjdXJyZW50SXRlbSA9XG4gICAgISFpdGVtICYmXG4gICAgaXRlbXMuZmluZCgoaSkgPT4gaS5uYW1lICYmIGkubmFtZS50b0xvd2VyQ2FzZSgpID09PSBpdGVtLnRvTG93ZXJDYXNlKCkpO1xuXG4gIGNvbnN0IG5leHRJdGVtID1cbiAgICAhIWN1cnJlbnRJdGVtICYmXG4gICAgISFjdXJyZW50SXRlbS5uZXh0ICYmXG4gICAgaXRlbXMuZmluZChcbiAgICAgIChpKSA9PiBpLm5hbWUgJiYgaS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IGN1cnJlbnRJdGVtLm5leHQudG9Mb3dlckNhc2UoKVxuICAgICk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGN1cnJlbnRJdGVtLFxuICAgICAgbmV4dEl0ZW0sXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgcmV0dXJuIHtcbiAgICBwYXRoczogaXRlbXMubWFwKChpKSA9PiAoeyBwYXJhbXM6IHsgaXRlbTogaS5uYW1lIH0gfSkpLFxuICAgIGZhbGxiYWNrOiBmYWxzZSwgLy8gU2VlIHRoZSBcImZhbGxiYWNrXCIgc2VjdGlvbiBiZWxvd1xuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==