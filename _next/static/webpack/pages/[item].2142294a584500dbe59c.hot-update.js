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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(currentItem && currentItem.parts && currentItem.parts[0] && currentItem.parts[0].title),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      expanded = _React$useState2[0],
      setExpanded = _React$useState2[1];

  console.log("------------currentItem && currentItem.parts && currentItem.parts[0] && currentItem.parts[0].title------------", currentItem && currentItem.parts && currentItem.parts[0] && currentItem.parts[0].title);

  if (!currentItem) {
    return null;
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 12
      }
    }, "404 Item not found");
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
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, " Getting started with ", currentItem.name, " ")), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }), __jsx("main", {
    style: {
      marginTop: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.heroContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    maxWidth: "sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx("img", {
    alt: currentItem.name,
    src: currentItem.img,
    className: "jsx-4253325134" + " " + "img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }), currentItem.name), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4253325134",
    __self: this
  }, "main.jsx-4253325134{margin-top:20px;}.img.jsx-4253325134{display:inline-block;width:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccmFnaW9cXGRldlxcZ2V0dGluZy1zdGFydGVkXFxwYWdlc1xcW2l0ZW1dLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFFd0IsQUFHaUMsQUFHSyxnQkFGdkIsS0FHYSxXQUNiIiwiZmlsZSI6IkM6XFxVc2Vyc1xccmFnaW9cXGRldlxcZ2V0dGluZy1zdGFydGVkXFxwYWdlc1xcW2l0ZW1dLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlU3R5bGVzIH0gZnJvbSBcIi4uL3V0aWwvc3R5bGVzXCI7XG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gXCIuLi91dGlsL2l0ZW1zXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiO1xuaW1wb3J0IE1VSUxpbmsgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIjtcbmltcG9ydCBBY2NvcmRpb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvblwiO1xuaW1wb3J0IEFjY29yZGlvbkRldGFpbHMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvbkRldGFpbHNcIjtcbmltcG9ydCBBY2NvcmRpb25TdW1tYXJ5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25TdW1tYXJ5XCI7XG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW0oeyBjdXJyZW50SXRlbSwgbmV4dEl0ZW0gfSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gUmVhY3QudXNlU3RhdGUoXG4gICAgY3VycmVudEl0ZW0gJiZcbiAgICAgIGN1cnJlbnRJdGVtLnBhcnRzICYmXG4gICAgICBjdXJyZW50SXRlbS5wYXJ0c1swXSAmJlxuICAgICAgY3VycmVudEl0ZW0ucGFydHNbMF0udGl0bGVcbiAgKTtcbiAgY29uc29sZS5sb2coXG4gICAgXCItLS0tLS0tLS0tLS1jdXJyZW50SXRlbSAmJiBjdXJyZW50SXRlbS5wYXJ0cyAmJiBjdXJyZW50SXRlbS5wYXJ0c1swXSAmJiBjdXJyZW50SXRlbS5wYXJ0c1swXS50aXRsZS0tLS0tLS0tLS0tLVwiLFxuICAgIGN1cnJlbnRJdGVtICYmXG4gICAgICBjdXJyZW50SXRlbS5wYXJ0cyAmJlxuICAgICAgY3VycmVudEl0ZW0ucGFydHNbMF0gJiZcbiAgICAgIGN1cnJlbnRJdGVtLnBhcnRzWzBdLnRpdGxlXG4gICk7XG5cbiAgaWYgKCFjdXJyZW50SXRlbSkge1xuICAgIHJldHVybiBudWxsO1xuICAgIHJldHVybiA8ZGl2PjQwNCBJdGVtIG5vdCBmb3VuZDwvZGl2PjtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChwYW5lbCkgPT4gKGV2ZW50LCBpc0V4cGFuZGVkKSA9PiB7XG4gICAgc2V0RXhwYW5kZWQoaXNFeHBhbmRlZCA/IHBhbmVsIDogZmFsc2UpO1xuICB9O1xuICBjb25zdCBuZWVkVG9Lbm93ID1cbiAgICBjdXJyZW50SXRlbS5wcmVyZXF1aXNpdHMgJiZcbiAgICAhIWN1cnJlbnRJdGVtLnByZXJlcXVpc2l0cy5sZW5ndGggJiZcbiAgICBpdGVtcy5maWx0ZXIoXG4gICAgICAoaSkgPT5cbiAgICAgICAgISFpLm5hbWUgJiZcbiAgICAgICAgY3VycmVudEl0ZW0ucHJlcmVxdWlzaXRzLmluZGV4T2YoaS5uYW1lLnRvTG93ZXJDYXNlKCkpICE9PSAtMVxuICAgICk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+IEdldHRpbmcgc3RhcnRlZCB3aXRoIHtjdXJyZW50SXRlbS5uYW1lfSA8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEhlYWRlciAvPlxuXG4gICAgICA8bWFpbiBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZXJvQ29udGVudH0+XG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCI+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoMlwiXG4gICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXG4gICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgYWx0PXtjdXJyZW50SXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIHNyYz17Y3VycmVudEl0ZW0uaW1nfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZ1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtjdXJyZW50SXRlbS5uYW1lfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5pbWcge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBwYXJhZ3JhcGhcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2N1cnJlbnRJdGVtLnN1YlRpdGxlfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IDMwMCwgbWFyZ2luOiBcIjAgYXV0b1wiIH19XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJwXCJcbiAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBwYXJhZ3JhcGhcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2N1cnJlbnRJdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX0+XG4gICAgICAgICAgICB7bmVlZFRvS25vdyAmJiAhIW5lZWRUb0tub3cubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNVwiXG4gICAgICAgICAgICAgICAgYWxpZ249XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE5lZWQgdG8ga25vdyAoYmVmb3JlIGxlYXJuaW5nIHtjdXJyZW50SXRlbS5uYW1lfSk6e1wiIFwifVxuICAgICAgICAgICAgICAgIHtuZWVkVG9Lbm93Lm1hcCgoaSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vJHtpLm5hbWV9YDtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmt9IGFzPXtsaW5rfSBrZXk9e2xpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgIDxNVUlMaW5rIGhyZWY9e2xpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ID09PSAwID8gXCIgXCIgOiBcIiwgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB7aS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvTVVJTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIj5cbiAgICAgICAgICAgIHtjdXJyZW50SXRlbS5wYXJ0cyAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgICAgICAgIHtjdXJyZW50SXRlbS5wYXJ0cy5tYXAoKGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25cbiAgICAgICAgICAgICAgICAgICAga2V5PXtpLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZD17ZXhwYW5kZWQgPT09IGkudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoaS50aXRsZSl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25TdW1tYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgZXhwYW5kSWNvbj17PEV4cGFuZE1vcmVJY29uIC8+fVxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9e2Ake2kudGl0bGV9YmgtY29udGVudGB9XG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e2Ake2kudGl0bGV9YmgtaGVhZGVyYH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25TdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2kudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IDMwMCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwicFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFncmFwaFxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpLmltYWdlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9e2kudGl0bGV9IHNyYz17aS5pbWFnZX0gY2xhc3NOYW1lPVwiaW1nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7aS5lbWJlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGkuZW1iZWQgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogMzAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYWdyYXBoXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpLmJvdHRvbVRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgbWF4V2lkdGg9XCJtZFwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDIwLFxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDQwLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGFzPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIFwiL1wifT5cbiAgICAgICAgICAgICAgPGE+R28gQmFjayBIb21lPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAge25leHRJdGVtICYmIChcbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIFwiL1wiICsgbmV4dEl0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBcIi9cIiArIG5leHRJdGVtLm5hbWV9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YT5Db250aW51ZSB0byBsZWFybiB7bmV4dEl0ZW0ubmFtZX08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCB7IGl0ZW0gfSA9IHBhcmFtcztcbiAgY29uc3QgY3VycmVudEl0ZW0gPVxuICAgICEhaXRlbSAmJlxuICAgIGl0ZW1zLmZpbmQoKGkpID0+IGkubmFtZSAmJiBpLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gaXRlbS50b0xvd2VyQ2FzZSgpKTtcblxuICBjb25zdCBuZXh0SXRlbSA9XG4gICAgISFjdXJyZW50SXRlbSAmJlxuICAgICEhY3VycmVudEl0ZW0ubmV4dCAmJlxuICAgIGl0ZW1zLmZpbmQoXG4gICAgICAoaSkgPT4gaS5uYW1lICYmIGkubmFtZS50b0xvd2VyQ2FzZSgpID09PSBjdXJyZW50SXRlbS5uZXh0LnRvTG93ZXJDYXNlKClcbiAgICApO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjdXJyZW50SXRlbSxcbiAgICAgIG5leHRJdGVtLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIHJldHVybiB7XG4gICAgcGF0aHM6IGl0ZW1zLm1hcCgoaSkgPT4gKHsgcGFyYW1zOiB7IGl0ZW06IGkubmFtZSB9IH0pKSxcbiAgICBmYWxsYmFjazogZmFsc2UsIC8vIFNlZSB0aGUgXCJmYWxsYmFja1wiIHNlY3Rpb24gYmVsb3dcbiAgfTtcbn1cbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\ragio\\\\dev\\\\getting-started\\\\pages\\\\[item].js */"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h5",
    align: "center",
    color: "textSecondary",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
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
      lineNumber: 87,
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
      lineNumber: 97,
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
      lineNumber: 99,
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
        lineNumber: 109,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
      href: link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 23
      }
    }, index === 0 ? " " : ", ", i.name));
  }))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    maxWidth: "lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, currentItem.parts && __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
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
        lineNumber: 124,
        columnNumber: 19
      }
    }, __jsx(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_13__["default"], {
      expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_14___default.a, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 35
        }
      }),
      "aria-controls": "".concat(i.title, "bh-content"),
      id: "".concat(i.title, "bh-header"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: classes.heading,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 23
      }
    }, i.title)), __jsx(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 21
      }
    }, __jsx("div", {
      style: {
        width: "100%"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
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
        lineNumber: 149,
        columnNumber: 25
      }
    }, i.description), i.image && __jsx("img", {
      alt: i.title,
      src: i.image,
      className: "img",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
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
        lineNumber: 162,
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
        lineNumber: 167,
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
      lineNumber: 183,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    as: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 15
    }
  }, "Go Back Home")), nextItem && __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/" + nextItem.name,
    as: "/" + nextItem.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2l0ZW1dLmpzIl0sIm5hbWVzIjpbIkl0ZW0iLCJjdXJyZW50SXRlbSIsIm5leHRJdGVtIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJwYXJ0cyIsInRpdGxlIiwiZXhwYW5kZWQiLCJzZXRFeHBhbmRlZCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJwYW5lbCIsImV2ZW50IiwiaXNFeHBhbmRlZCIsIm5lZWRUb0tub3ciLCJwcmVyZXF1aXNpdHMiLCJsZW5ndGgiLCJpdGVtcyIsImZpbHRlciIsImkiLCJuYW1lIiwiaW5kZXhPZiIsInRvTG93ZXJDYXNlIiwibWFyZ2luVG9wIiwiaGVyb0NvbnRlbnQiLCJpbWciLCJzdWJUaXRsZSIsIm1heFdpZHRoIiwibWFyZ2luIiwiZGVzY3JpcHRpb24iLCJtYXJnaW5Cb3R0b20iLCJtYXAiLCJpbmRleCIsImxpbmsiLCJyb290IiwiaGVhZGluZyIsIndpZHRoIiwiaW1hZ2UiLCJlbWJlZCIsIl9faHRtbCIsImJvdHRvbVRleHQiLCJqdXN0aWZ5Q29udGVudCIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNBLElBQVQsT0FBeUM7QUFBQTs7QUFBQTs7QUFBQSxNQUF6QkMsV0FBeUIsUUFBekJBLFdBQXlCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQ3RELE1BQU1DLE9BQU8sR0FBR0MsOERBQVMsRUFBekI7O0FBRHNELHdCQUV0QkMsNENBQUssQ0FBQ0MsUUFBTixDQUM5QkwsV0FBVyxJQUNUQSxXQUFXLENBQUNNLEtBRGQsSUFFRU4sV0FBVyxDQUFDTSxLQUFaLENBQWtCLENBQWxCLENBRkYsSUFHRU4sV0FBVyxDQUFDTSxL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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FURixFQVlHL0IsUUFBUSxJQUNQLE1BQUMsZ0RBQUQ7QUFDRSxRQUFJLEVBQUUsTUFBZ0NBLFFBQVEsQ0FBQ3FCLElBRGpEO0FBRUUsTUFBRSxFQUFFLE1BQWdDckIsUUFBUSxDQUFDcUIsSUFGL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQXNCckIsUUFBUSxDQUFDcUIsSUFBL0IsQ0FKRixDQWJKLENBaklGLENBREYsQ0FORixDQURGO0FBa0tEOztHQWxNdUJ2QixJO1VBQ05JLHNEOzs7S0FETUosSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9baXRlbV0uMjE0MjI5NGE1ODQ1MDBkYmU1OWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVN0eWxlcyB9IGZyb20gXCIuLi91dGlsL3N0eWxlc1wiO1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tIFwiLi4vdXRpbC9pdGVtc1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIjtcbmltcG9ydCBNVUlMaW5rIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCI7XG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25cIjtcbmltcG9ydCBBY2NvcmRpb25EZXRhaWxzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25EZXRhaWxzXCI7XG5pbXBvcnQgQWNjb3JkaW9uU3VtbWFyeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uU3VtbWFyeVwiO1xuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJdGVtKHsgY3VycmVudEl0ZW0sIG5leHRJdGVtIH0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IFJlYWN0LnVzZVN0YXRlKFxuICAgIGN1cnJlbnRJdGVtICYmXG4gICAgICBjdXJyZW50SXRlbS5wYXJ0cyAmJlxuICAgICAgY3VycmVudEl0ZW0ucGFydHNbMF0gJiZcbiAgICAgIGN1cnJlbnRJdGVtLnBhcnRzWzBdLnRpdGxlXG4gICk7XG4gIGNvbnNvbGUubG9nKFxuICAgIFwiLS0tLS0tLS0tLS0tY3VycmVudEl0ZW0gJiYgY3VycmVudEl0ZW0ucGFydHMgJiYgY3VycmVudEl0ZW0ucGFydHNbMF0gJiYgY3VycmVudEl0ZW0ucGFydHNbMF0udGl0bGUtLS0tLS0tLS0tLS1cIixcbiAgICBjdXJyZW50SXRlbSAmJlxuICAgICAgY3VycmVudEl0ZW0ucGFydHMgJiZcbiAgICAgIGN1cnJlbnRJdGVtLnBhcnRzWzBdICYmXG4gICAgICBjdXJyZW50SXRlbS5wYXJ0c1swXS50aXRsZVxuICApO1xuXG4gIGlmICghY3VycmVudEl0ZW0pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gPGRpdj40MDQgSXRlbSBub3QgZm91bmQ8L2Rpdj47XG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAocGFuZWwpID0+IChldmVudCwgaXNFeHBhbmRlZCkgPT4ge1xuICAgIHNldEV4cGFuZGVkKGlzRXhwYW5kZWQgPyBwYW5lbCA6IGZhbHNlKTtcbiAgfTtcbiAgY29uc3QgbmVlZFRvS25vdyA9XG4gICAgY3VycmVudEl0ZW0ucHJlcmVxdWlzaXRzICYmXG4gICAgISFjdXJyZW50SXRlbS5wcmVyZXF1aXNpdHMubGVuZ3RoICYmXG4gICAgaXRlbXMuZmlsdGVyKFxuICAgICAgKGkpID0+XG4gICAgICAgICEhaS5uYW1lICYmXG4gICAgICAgIGN1cnJlbnRJdGVtLnByZXJlcXVpc2l0cy5pbmRleE9mKGkubmFtZS50b0xvd2VyQ2FzZSgpKSAhPT0gLTFcbiAgICApO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPiBHZXR0aW5nIHN0YXJ0ZWQgd2l0aCB7Y3VycmVudEl0ZW0ubmFtZX0gPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgPG1haW4gc3R5bGU9e3sgbWFyZ2luVG9wOiAyMCB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVyb0NvbnRlbnR9PlxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDJcIlxuICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxuICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGFsdD17Y3VycmVudEl0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICBzcmM9e2N1cnJlbnRJdGVtLmltZ31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWdcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7Y3VycmVudEl0ZW0ubmFtZX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuaW1nIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgcGFyYWdyYXBoXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjdXJyZW50SXRlbS5zdWJUaXRsZX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAzMDAsIG1hcmdpbjogXCIwIGF1dG9cIiB9fVxuICAgICAgICAgICAgICB2YXJpYW50PVwicFwiXG4gICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgcGFyYWdyYXBoXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjdXJyZW50SXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19PlxuICAgICAgICAgICAge25lZWRUb0tub3cgJiYgISFuZWVkVG9Lbm93Lmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDVcIlxuICAgICAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBOZWVkIHRvIGtub3cgKGJlZm9yZSBsZWFybmluZyB7Y3VycmVudEl0ZW0ubmFtZX0pOntcIiBcIn1cbiAgICAgICAgICAgICAgICB7bmVlZFRvS25vdy5tYXAoKGksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBsaW5rID0gYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9LyR7aS5uYW1lfWA7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtsaW5rfSBhcz17bGlua30ga2V5PXtsaW5rfT5cbiAgICAgICAgICAgICAgICAgICAgICA8TVVJTGluayBocmVmPXtsaW5rfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCA9PT0gMCA/IFwiIFwiIDogXCIsIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAge2kubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L01VSUxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCI+XG4gICAgICAgICAgICB7Y3VycmVudEl0ZW0ucGFydHMgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgICAgICAgICB7Y3VycmVudEl0ZW0ucGFydHMubWFwKChpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uXG4gICAgICAgICAgICAgICAgICAgIGtleT17aS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWQ9e2V4cGFuZGVkID09PSBpLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKGkudGl0bGUpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeVxuICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZEljb249ezxFeHBhbmRNb3JlSWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPXtgJHtpLnRpdGxlfWJoLWNvbnRlbnRgfVxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtgJHtpLnRpdGxlfWJoLWhlYWRlcmB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGluZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uU3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkRldGFpbHM+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAzMDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhZ3JhcGhcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2kuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aS5pbWFnZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PXtpLnRpdGxlfSBzcmM9e2kuaW1hZ2V9IGNsYXNzTmFtZT1cImltZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAge2kuZW1iZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBpLmVtYmVkIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IDMwMCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwicFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFncmFwaFxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aS5ib3R0b21UZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XG4gICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgIG1heFdpZHRoPVwibWRcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiAyMCxcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiA0MCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBhcz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBcIi9cIn0+XG4gICAgICAgICAgICAgIDxhPkdvIEJhY2sgSG9tZTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIHtuZXh0SXRlbSAmJiAoXG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBcIi9cIiArIG5leHRJdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgXCIvXCIgKyBuZXh0SXRlbS5uYW1lfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGE+Q29udGludWUgdG8gbGVhcm4ge25leHRJdGVtLm5hbWV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgeyBpdGVtIH0gPSBwYXJhbXM7XG4gIGNvbnN0IGN1cnJlbnRJdGVtID1cbiAgICAhIWl0ZW0gJiZcbiAgICBpdGVtcy5maW5kKChpKSA9PiBpLm5hbWUgJiYgaS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IGl0ZW0udG9Mb3dlckNhc2UoKSk7XG5cbiAgY29uc3QgbmV4dEl0ZW0gPVxuICAgICEhY3VycmVudEl0ZW0gJiZcbiAgICAhIWN1cnJlbnRJdGVtLm5leHQgJiZcbiAgICBpdGVtcy5maW5kKFxuICAgICAgKGkpID0+IGkubmFtZSAmJiBpLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gY3VycmVudEl0ZW0ubmV4dC50b0xvd2VyQ2FzZSgpXG4gICAgKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY3VycmVudEl0ZW0sXG4gICAgICBuZXh0SXRlbSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICByZXR1cm4ge1xuICAgIHBhdGhzOiBpdGVtcy5tYXAoKGkpID0+ICh7IHBhcmFtczogeyBpdGVtOiBpLm5hbWUgfSB9KSksXG4gICAgZmFsbGJhY2s6IGZhbHNlLCAvLyBTZWUgdGhlIFwiZmFsbGJhY2tcIiBzZWN0aW9uIGJlbG93XG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9