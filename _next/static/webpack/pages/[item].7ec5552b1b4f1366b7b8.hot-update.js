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
  console.log("------------currentItem------------", currentItem);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(currentItem && currentItem.parts && currentItem.parts[0] && currentItem.parts[0].title),
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
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, " Getting started with ", currentItem.name, " ")), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }), __jsx("main", {
    style: {
      marginTop: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.heroContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    maxWidth: "sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
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
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("img", {
    alt: currentItem.name,
    src: currentItem.img,
    className: "jsx-4253325134" + " " + "img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }), currentItem.name), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4253325134",
    __self: this
  }, "main.jsx-4253325134{margin-top:20px;}.img.jsx-4253325134{display:inline-block;width:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccmFnaW9cXGRldlxcZ2V0dGluZy1zdGFydGVkXFxwYWdlc1xcW2l0ZW1dLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThEd0IsQUFHaUMsQUFHSyxnQkFGdkIsS0FHYSxXQUNiIiwiZmlsZSI6IkM6XFxVc2Vyc1xccmFnaW9cXGRldlxcZ2V0dGluZy1zdGFydGVkXFxwYWdlc1xcW2l0ZW1dLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlU3R5bGVzIH0gZnJvbSBcIi4uL3V0aWwvc3R5bGVzXCI7XG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gXCIuLi91dGlsL2l0ZW1zXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiO1xuaW1wb3J0IE1VSUxpbmsgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIjtcbmltcG9ydCBBY2NvcmRpb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvblwiO1xuaW1wb3J0IEFjY29yZGlvbkRldGFpbHMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvbkRldGFpbHNcIjtcbmltcG9ydCBBY2NvcmRpb25TdW1tYXJ5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25TdW1tYXJ5XCI7XG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW0oeyBjdXJyZW50SXRlbSwgbmV4dEl0ZW0gfSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tY3VycmVudEl0ZW0tLS0tLS0tLS0tLS1cIiwgY3VycmVudEl0ZW0pO1xuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IFJlYWN0LnVzZVN0YXRlKFxuICAgIGN1cnJlbnRJdGVtICYmXG4gICAgICBjdXJyZW50SXRlbS5wYXJ0cyAmJlxuICAgICAgY3VycmVudEl0ZW0ucGFydHNbMF0gJiZcbiAgICAgIGN1cnJlbnRJdGVtLnBhcnRzWzBdLnRpdGxlXG4gICk7XG5cbiAgaWYgKCFjdXJyZW50SXRlbSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHBhbmVsKSA9PiAoZXZlbnQsIGlzRXhwYW5kZWQpID0+IHtcbiAgICBzZXRFeHBhbmRlZChpc0V4cGFuZGVkID8gcGFuZWwgOiBmYWxzZSk7XG4gIH07XG4gIGNvbnN0IG5lZWRUb0tub3cgPVxuICAgIGN1cnJlbnRJdGVtLnByZXJlcXVpc2l0cyAmJlxuICAgICEhY3VycmVudEl0ZW0ucHJlcmVxdWlzaXRzLmxlbmd0aCAmJlxuICAgIGl0ZW1zLmZpbHRlcihcbiAgICAgIChpKSA9PlxuICAgICAgICAhIWkubmFtZSAmJlxuICAgICAgICBjdXJyZW50SXRlbS5wcmVyZXF1aXNpdHMuaW5kZXhPZihpLm5hbWUudG9Mb3dlckNhc2UoKSkgIT09IC0xXG4gICAgKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT4gR2V0dGluZyBzdGFydGVkIHdpdGgge2N1cnJlbnRJdGVtLm5hbWV9IDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyIC8+XG5cbiAgICAgIDxtYWluIHN0eWxlPXt7IG1hcmdpblRvcDogMjAgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlcm9Db250ZW50fT5cbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIj5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImgyXCJcbiAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcbiAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBhbHQ9e2N1cnJlbnRJdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgc3JjPXtjdXJyZW50SXRlbS5pbWd9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2N1cnJlbnRJdGVtLm5hbWV9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmltZyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIHBhcmFncmFwaFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y3VycmVudEl0ZW0uc3ViVGl0bGV9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogMzAwLCBtYXJnaW46IFwiMCBhdXRvXCIgfX1cbiAgICAgICAgICAgICAgdmFyaWFudD1cInBcIlxuICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIHBhcmFncmFwaFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y3VycmVudEl0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fT5cbiAgICAgICAgICAgIHtuZWVkVG9Lbm93ICYmICEhbmVlZFRvS25vdy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg1XCJcbiAgICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTmVlZCB0byBrbm93IChiZWZvcmUgbGVhcm5pbmcge2N1cnJlbnRJdGVtLm5hbWV9KTp7XCIgXCJ9XG4gICAgICAgICAgICAgICAge25lZWRUb0tub3cubWFwKChpLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgbGluayA9IGAke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS8ke2kubmFtZX1gO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17bGlua30gYXM9e2xpbmt9IGtleT17bGlua30+XG4gICAgICAgICAgICAgICAgICAgICAgPE1VSUxpbmsgaHJlZj17bGlua30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggPT09IDAgPyBcIiBcIiA6IFwiLCBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9NVUlMaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxuICAgICAgICAgICAge2N1cnJlbnRJdGVtLnBhcnRzICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgICAgICAge2N1cnJlbnRJdGVtLnBhcnRzLm1hcCgoaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPEFjY29yZGlvblxuICAgICAgICAgICAgICAgICAgICBrZXk9e2kudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkPXtleHBhbmRlZCA9PT0gaS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZShpLnRpdGxlKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvblN1bW1hcnlcbiAgICAgICAgICAgICAgICAgICAgICBleHBhbmRJY29uPXs8RXhwYW5kTW9yZUljb24gLz59XG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz17YCR7aS50aXRsZX1iaC1jb250ZW50YH1cbiAgICAgICAgICAgICAgICAgICAgICBpZD17YCR7aS50aXRsZX1iaC1oZWFkZXJgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRpbmd9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2kudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogMzAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYWdyYXBoXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAge2kuaW1hZ2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD17aS50aXRsZX0gc3JjPXtpLmltYWdlfSBjbGFzc05hbWU9XCJpbWdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpLmVtYmVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaS5lbWJlZCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAzMDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhZ3JhcGhcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2kuYm90dG9tVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICBtYXhXaWR0aD1cIm1kXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogMjAsXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogNDAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgYXM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgXCIvXCJ9PlxuICAgICAgICAgICAgICA8YT5HbyBCYWNrIEhvbWU8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB7bmV4dEl0ZW0gJiYgKFxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgXCIvXCIgKyBuZXh0SXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIFwiL1wiICsgbmV4dEl0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhPkNvbnRpbnVlIHRvIGxlYXJuIHtuZXh0SXRlbS5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHsgaXRlbSB9ID0gcGFyYW1zO1xuICBjb25zdCBjdXJyZW50SXRlbSA9XG4gICAgISFpdGVtICYmXG4gICAgaXRlbXMuZmluZCgoaSkgPT4gaS5uYW1lICYmIGkubmFtZS50b0xvd2VyQ2FzZSgpID09PSBpdGVtLnRvTG93ZXJDYXNlKCkpO1xuXG4gIGNvbnN0IG5leHRJdGVtID1cbiAgICAhIWN1cnJlbnRJdGVtICYmXG4gICAgISFjdXJyZW50SXRlbS5uZXh0ICYmXG4gICAgaXRlbXMuZmluZChcbiAgICAgIChpKSA9PiBpLm5hbWUgJiYgaS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IGN1cnJlbnRJdGVtLm5leHQudG9Mb3dlckNhc2UoKVxuICAgICk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGN1cnJlbnRJdGVtLFxuICAgICAgbmV4dEl0ZW0sXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgcmV0dXJuIHtcbiAgICBwYXRoczogaXRlbXMubWFwKChpKSA9PiAoeyBwYXJhbXM6IHsgaXRlbTogaS5uYW1lIH0gfSkpLFxuICAgIGZhbGxiYWNrOiBmYWxzZSwgLy8gU2VlIHRoZSBcImZhbGxiYWNrXCIgc2VjdGlvbiBiZWxvd1xuICB9O1xufVxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\ragio\\\\dev\\\\getting-started\\\\pages\\\\[item].js */"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h5",
    align: "center",
    color: "textSecondary",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, currentItem.subTitle), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
      lineNumber: 80,
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
      lineNumber: 90,
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
      lineNumber: 92,
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
        lineNumber: 102,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
      href: link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 23
      }
    }, index === 0 ? " " : ", ", i.name));
  }))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    maxWidth: "lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, currentItem.parts && __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }, currentItem.parts.map(function (i) {
    return __jsx(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: i.title,
      expanded: expanded === i.title,
      onChange: handleChange(i.title),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 19
      }
    }, __jsx(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_13__["default"], {
      expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_14___default.a, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 35
        }
      }),
      "aria-controls": "".concat(i.title, "bh-content"),
      id: "".concat(i.title, "bh-header"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: classes.heading,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 23
      }
    }, i.title)), __jsx(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 21
      }
    }, __jsx("div", {
      style: {
        width: "100%"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 23
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
        lineNumber: 142,
        columnNumber: 25
      }
    }, i.description), i.image && __jsx("img", {
      alt: i.title,
      src: i.image,
      className: "img",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 27
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
        lineNumber: 155,
        columnNumber: 27
      }
    }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
        lineNumber: 160,
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
      lineNumber: 176,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    as: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 15
    }
  }, "Go Back Home")), nextItem && __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/" + nextItem.name,
    as: "/" + nextItem.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 17
    }
  }, "Continue to learn ", nextItem.name))))));
}

_s(Item, "PqRh4ToUacfOD6rmU4x4y6Iafb4=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2l0ZW1dLmpzIl0sIm5hbWVzIjpbIkl0ZW0iLCJjdXJyZW50SXRlbSIsIm5leHRJdGVtIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdCIsInVzZVN0YXRlIiwicGFydHMiLCJ0aXRsZSIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJoYW5kbGVDaGFuZ2UiLCJwYW5lbCIsImV2ZW50IiwiaXNFeHBhbmRlZCIsIm5lZWRUb0tub3ciLCJwcmVyZXF1aXNpdHMiLCJsZW5ndGgiLCJpdGVtcyIsImZpbHRlciIsImkiLCJuYW1lIiwiaW5kZXhPZiIsInRvTG93ZXJDYXNlIiwibWFyZ2luVG9wIiwiaGVyb0NvbnRlbnQiLCJpbWciLCJzdWJUaXRsZSIsIm1heFdpZHRoIiwibWFyZ2luIiwiZGVzY3JpcHRpb24iLCJtYXJnaW5Cb3R0b20iLCJtYXAiLCJpbmRleCIsImxpbmsiLCJyb290IiwiaGVhZGluZyIsIndpZHRoIiwiaW1hZ2UiLCJlbWJlZCIsIl9faHRtbCIsImJvdHRvbVRleHQiLCJqdXN0aWZ5Q29udGVudCIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNBLElBQVQsT0FBeUM7QUFBQTs7QUFBQTs7QUFBQSxNQUF6QkMsV0FBeUIsUUFBekJBLFdBQXlCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQ3RELE1BQU1DLE9BQU8sR0FBR0MsOERBQVMsRUFBekI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVkscUNBQVosRUFBbURMLFdBQW5EOztBQUZzRCx3QkFHdEJNLDRDQUFLLENBQUNDLFFBQU4sQ0FDOUJQLFdBQVcsSUFDVEEsV0FBVyxDQUFDUSxLQURkLElBRUVSLFdBQVcs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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFzQnJCLFFBQVEsQ0FBQ3FCLElBQS9CLENBSkYsQ0FiSixDQWpJRixDQURGLENBTkYsQ0FERjtBQWtLRDs7R0EzTHVCdkIsSTtVQUNOSSxzRDs7O0tBRE1KLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2l0ZW1dLjdlYzU1NTJiMWI0ZjEzNjZiN2I4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VTdHlsZXMgfSBmcm9tIFwiLi4vdXRpbC9zdHlsZXNcIjtcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSBcIi4uL3V0aWwvaXRlbXNcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCI7XG5pbXBvcnQgTVVJTGluayBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiO1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uXCI7XG5pbXBvcnQgQWNjb3JkaW9uRGV0YWlscyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uRGV0YWlsc1wiO1xuaW1wb3J0IEFjY29yZGlvblN1bW1hcnkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvblN1bW1hcnlcIjtcbmltcG9ydCBFeHBhbmRNb3JlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbSh7IGN1cnJlbnRJdGVtLCBuZXh0SXRlbSB9KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS1jdXJyZW50SXRlbS0tLS0tLS0tLS0tLVwiLCBjdXJyZW50SXRlbSk7XG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gUmVhY3QudXNlU3RhdGUoXG4gICAgY3VycmVudEl0ZW0gJiZcbiAgICAgIGN1cnJlbnRJdGVtLnBhcnRzICYmXG4gICAgICBjdXJyZW50SXRlbS5wYXJ0c1swXSAmJlxuICAgICAgY3VycmVudEl0ZW0ucGFydHNbMF0udGl0bGVcbiAgKTtcblxuICBpZiAoIWN1cnJlbnRJdGVtKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAocGFuZWwpID0+IChldmVudCwgaXNFeHBhbmRlZCkgPT4ge1xuICAgIHNldEV4cGFuZGVkKGlzRXhwYW5kZWQgPyBwYW5lbCA6IGZhbHNlKTtcbiAgfTtcbiAgY29uc3QgbmVlZFRvS25vdyA9XG4gICAgY3VycmVudEl0ZW0ucHJlcmVxdWlzaXRzICYmXG4gICAgISFjdXJyZW50SXRlbS5wcmVyZXF1aXNpdHMubGVuZ3RoICYmXG4gICAgaXRlbXMuZmlsdGVyKFxuICAgICAgKGkpID0+XG4gICAgICAgICEhaS5uYW1lICYmXG4gICAgICAgIGN1cnJlbnRJdGVtLnByZXJlcXVpc2l0cy5pbmRleE9mKGkubmFtZS50b0xvd2VyQ2FzZSgpKSAhPT0gLTFcbiAgICApO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPiBHZXR0aW5nIHN0YXJ0ZWQgd2l0aCB7Y3VycmVudEl0ZW0ubmFtZX0gPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgPG1haW4gc3R5bGU9e3sgbWFyZ2luVG9wOiAyMCB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVyb0NvbnRlbnR9PlxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDJcIlxuICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxuICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGFsdD17Y3VycmVudEl0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICBzcmM9e2N1cnJlbnRJdGVtLmltZ31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWdcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7Y3VycmVudEl0ZW0ubmFtZX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuaW1nIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgcGFyYWdyYXBoXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjdXJyZW50SXRlbS5zdWJUaXRsZX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAzMDAsIG1hcmdpbjogXCIwIGF1dG9cIiB9fVxuICAgICAgICAgICAgICB2YXJpYW50PVwicFwiXG4gICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgcGFyYWdyYXBoXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjdXJyZW50SXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19PlxuICAgICAgICAgICAge25lZWRUb0tub3cgJiYgISFuZWVkVG9Lbm93Lmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDVcIlxuICAgICAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBOZWVkIHRvIGtub3cgKGJlZm9yZSBsZWFybmluZyB7Y3VycmVudEl0ZW0ubmFtZX0pOntcIiBcIn1cbiAgICAgICAgICAgICAgICB7bmVlZFRvS25vdy5tYXAoKGksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBsaW5rID0gYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9LyR7aS5uYW1lfWA7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtsaW5rfSBhcz17bGlua30ga2V5PXtsaW5rfT5cbiAgICAgICAgICAgICAgICAgICAgICA8TVVJTGluayBocmVmPXtsaW5rfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCA9PT0gMCA/IFwiIFwiIDogXCIsIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAge2kubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L01VSUxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCI+XG4gICAgICAgICAgICB7Y3VycmVudEl0ZW0ucGFydHMgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgICAgICAgICB7Y3VycmVudEl0ZW0ucGFydHMubWFwKChpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uXG4gICAgICAgICAgICAgICAgICAgIGtleT17aS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWQ9e2V4cGFuZGVkID09PSBpLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKGkudGl0bGUpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeVxuICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZEljb249ezxFeHBhbmRNb3JlSWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPXtgJHtpLnRpdGxlfWJoLWNvbnRlbnRgfVxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtgJHtpLnRpdGxlfWJoLWhlYWRlcmB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGluZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uU3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkRldGFpbHM+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAzMDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhZ3JhcGhcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2kuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aS5pbWFnZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PXtpLnRpdGxlfSBzcmM9e2kuaW1hZ2V9IGNsYXNzTmFtZT1cImltZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAge2kuZW1iZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBpLmVtYmVkIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IDMwMCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwicFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFncmFwaFxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aS5ib3R0b21UZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XG4gICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgIG1heFdpZHRoPVwibWRcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiAyMCxcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiA0MCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBhcz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBcIi9cIn0+XG4gICAgICAgICAgICAgIDxhPkdvIEJhY2sgSG9tZTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIHtuZXh0SXRlbSAmJiAoXG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBcIi9cIiArIG5leHRJdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgXCIvXCIgKyBuZXh0SXRlbS5uYW1lfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGE+Q29udGludWUgdG8gbGVhcm4ge25leHRJdGVtLm5hbWV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgeyBpdGVtIH0gPSBwYXJhbXM7XG4gIGNvbnN0IGN1cnJlbnRJdGVtID1cbiAgICAhIWl0ZW0gJiZcbiAgICBpdGVtcy5maW5kKChpKSA9PiBpLm5hbWUgJiYgaS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IGl0ZW0udG9Mb3dlckNhc2UoKSk7XG5cbiAgY29uc3QgbmV4dEl0ZW0gPVxuICAgICEhY3VycmVudEl0ZW0gJiZcbiAgICAhIWN1cnJlbnRJdGVtLm5leHQgJiZcbiAgICBpdGVtcy5maW5kKFxuICAgICAgKGkpID0+IGkubmFtZSAmJiBpLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gY3VycmVudEl0ZW0ubmV4dC50b0xvd2VyQ2FzZSgpXG4gICAgKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY3VycmVudEl0ZW0sXG4gICAgICBuZXh0SXRlbSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICByZXR1cm4ge1xuICAgIHBhdGhzOiBpdGVtcy5tYXAoKGkpID0+ICh7IHBhcmFtczogeyBpdGVtOiBpLm5hbWUgfSB9KSksXG4gICAgZmFsbGJhY2s6IGZhbHNlLCAvLyBTZWUgdGhlIFwiZmFsbGJhY2tcIiBzZWN0aW9uIGJlbG93XG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9