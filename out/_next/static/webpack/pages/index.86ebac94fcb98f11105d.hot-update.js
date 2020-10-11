webpackHotUpdate_N_E("pages/index",{

/***/ "./util/data/html.js":
/*!***************************!*\
  !*** ./util/data/html.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images */ "./util/images.js");

var html = {
  name: "HTML",
  subTitle: "Markup language for web UI",
  description: 'HTML is made out of tags. \nTags can hold values with attributes.\n For example: \n<html attribute="attribute value">',
  img: _images__WEBPACK_IMPORTED_MODULE_0__["htmlImage"],
  next: "Css",
  parts: [{
    image: "anatomy-of-an-html-element.png",
    title: "HTML tag structure",
    description: "An html tag is made out of it's openning tag, closing tag, it's content in the middle and it's attributes and values on it's opening tag.\n There are tags the don't have closing tags like the <br/> and <img/> tags."
  }, {
    embed: "<iframe src=\"https://codesandbox.io/embed/white-cloud-zyegl?autoresize=1&fontsize=16&hidenavigation=1&theme=dark\"\n     style=\"width:100%; height:1000px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"HTML page structure\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
    title: "HTML page structure",
    description: "An html page is the base of the website.\nIt defines the HTML version, meta data and the elements of the page.\nFrom displaying inputs to loading files, you can do a lot with a few steps in HTML",
    bottomText: 'You can create your own html files like this "index.html" or "any-name_you_want.html" and open it in your browser just by double clicking on it.'
  }, {
    embed: "<iframe src=\"https://codesandbox.io/embed/mystifying-montalcini-srutx?autoresize=1&eslint=1&fontsize=16&hidenavigation=1&theme=dark\"\n     style=\"width:100%; height:1000px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"The Anchor tag, linking the web\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
    title: "<a>The Anchor tag, linking the web.</a>",
    description: "An achor tag can redirect the user to any page online or other files on you machine."
  }, {
    embed: "<iframe src=\"https://codesandbox.io/embed/gifted-ride-xvrby?autoresize=1&fontsize=16&theme=dark\"\n     style=\"width:100%; height:1000px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"gifted-ride-xvrby\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
    title: "<img>The Image tag, displaying images.",
    description: "An image tag can show an image online or from on you computer."
  }, {
    embed: "<iframe src=\"https://codesandbox.io/embed/inspiring-dew-0vqxj?autoresize=1&fontsize=16&hidenavigation=1&theme=dark\"\n     style=\"width:100%; height:1000px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"inspiring-dew-0vqxj\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
    title: 'The input tag gets different types of input from the user. <input type="text" />',
    description: "With the input tag and the select and option tags you can ask the user many different types of questions to get his input."
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (html);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9kYXRhL2h0bWwuanMiXSwibmFtZXMiOlsiaHRtbCIsIm5hbWUiLCJzdWJUaXRsZSIsImRlc2NyaXB0aW9uIiwiaW1nIiwiaHRtbEltYWdlIiwibmV4dCIsInBhcnRzIiwiaW1hZ2UiLCJ0aXRsZSIsImVtYmVkIiwiYm90dG9tVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVBLElBQU1BLElBQUksR0FBRztBQUNYQyxNQUFJLEVBQUUsTUFESztBQUVYQyxVQUFRLEVBQUUsNEJBRkM7QUFHWEMsYUFBVyxFQUNULHVIQUpTO0FBS1hDLEtBQUcsRUFBRUMsaURBTE07QUFNWEMsTUFBSSxFQUFFLEtBTks7QUFPWEMsT0FBSyxFQUFFLENBQ0w7QUFDRUMsU0FBSyxFQUFFLGdDQURUO0FBRUVDLFNBQUssRUFBRSxvQkFGVDtBQUdFTixlQUFXLEVBQ1Q7QUFKSixHQURLLEVBT0w7QUFDRU8sU0FBSyxraEJBRFA7QUFPRUQsU0FBSyxFQUFFLHFCQVBUO0FBUUVOLGVBQVcsRUFDVCxvTUFUSjtBQVVFUSxjQUFVLEVBQ1I7QUFYSixHQVBLLEVBb0JMO0FBQ0VELFNBQUssaWpCQURQO0FBT0VELFNBQUssRUFBRSx5Q0FQVDtBQVFFTixlQUFXLEVBQ1Q7QUFUSixHQXBCSyxFQStCTDtBQUNFTyxTQUFLLCtmQURQO0FBT0VELFNBQUssRUFBRSx3Q0FQVDtBQVFFTixlQUFXLEVBQ1Q7QUFUSixHQS9CSyxFQTBDTDtBQUNFTyxTQUFLLG9oQkFEUDtBQU9FRCxTQUFLLEVBQ0gsa0ZBUko7QUFTRU4sZUFBVyxFQUNUO0FBVkosR0ExQ0s7QUFQSSxDQUFiO0FBZ0VlSCxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44NmViYWM5NGZjYjk4ZjExMTA1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaHRtbEltYWdlIH0gZnJvbSBcIi4uL2ltYWdlc1wiO1xyXG5cclxuY29uc3QgaHRtbCA9IHtcclxuICBuYW1lOiBcIkhUTUxcIixcclxuICBzdWJUaXRsZTogXCJNYXJrdXAgbGFuZ3VhZ2UgZm9yIHdlYiBVSVwiLFxyXG4gIGRlc2NyaXB0aW9uOlxyXG4gICAgJ0hUTUwgaXMgbWFkZSBvdXQgb2YgdGFncy4gXFxuVGFncyBjYW4gaG9sZCB2YWx1ZXMgd2l0aCBhdHRyaWJ1dGVzLlxcbiBGb3IgZXhhbXBsZTogXFxuPGh0bWwgYXR0cmlidXRlPVwiYXR0cmlidXRlIHZhbHVlXCI+JyxcclxuICBpbWc6IGh0bWxJbWFnZSxcclxuICBuZXh0OiBcIkNzc1wiLFxyXG4gIHBhcnRzOiBbXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiBcImFuYXRvbXktb2YtYW4taHRtbC1lbGVtZW50LnBuZ1wiLFxyXG4gICAgICB0aXRsZTogXCJIVE1MIHRhZyBzdHJ1Y3R1cmVcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJBbiBodG1sIHRhZyBpcyBtYWRlIG91dCBvZiBpdCdzIG9wZW5uaW5nIHRhZywgY2xvc2luZyB0YWcsIGl0J3MgY29udGVudCBpbiB0aGUgbWlkZGxlIGFuZCBpdCdzIGF0dHJpYnV0ZXMgYW5kIHZhbHVlcyBvbiBpdCdzIG9wZW5pbmcgdGFnLlxcbiBUaGVyZSBhcmUgdGFncyB0aGUgZG9uJ3QgaGF2ZSBjbG9zaW5nIHRhZ3MgbGlrZSB0aGUgPGJyLz4gYW5kIDxpbWcvPiB0YWdzLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZW1iZWQ6IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vZW1iZWQvd2hpdGUtY2xvdWQtenllZ2w/YXV0b3Jlc2l6ZT0xJmZvbnRzaXplPTE2JmhpZGVuYXZpZ2F0aW9uPTEmdGhlbWU9ZGFya1wiXHJcbiAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlOyBoZWlnaHQ6MTAwMHB4OyBib3JkZXI6MDsgYm9yZGVyLXJhZGl1czogNHB4OyBvdmVyZmxvdzpoaWRkZW47XCJcclxuICAgICB0aXRsZT1cIkhUTUwgcGFnZSBzdHJ1Y3R1cmVcIlxyXG4gICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYW1iaWVudC1saWdodC1zZW5zb3I7IGNhbWVyYTsgZW5jcnlwdGVkLW1lZGlhOyBnZW9sb2NhdGlvbjsgZ3lyb3Njb3BlOyBoaWQ7IG1pY3JvcGhvbmU7IG1pZGk7IHBheW1lbnQ7IHVzYjsgdnI7IHhyLXNwYXRpYWwtdHJhY2tpbmdcIlxyXG4gICAgIHNhbmRib3g9XCJhbGxvdy1mb3JtcyBhbGxvdy1tb2RhbHMgYWxsb3ctcG9wdXBzIGFsbG93LXByZXNlbnRhdGlvbiBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1zY3JpcHRzXCJcclxuICAgPjwvaWZyYW1lPmAsXHJcbiAgICAgIHRpdGxlOiBcIkhUTUwgcGFnZSBzdHJ1Y3R1cmVcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJBbiBodG1sIHBhZ2UgaXMgdGhlIGJhc2Ugb2YgdGhlIHdlYnNpdGUuXFxuSXQgZGVmaW5lcyB0aGUgSFRNTCB2ZXJzaW9uLCBtZXRhIGRhdGEgYW5kIHRoZSBlbGVtZW50cyBvZiB0aGUgcGFnZS5cXG5Gcm9tIGRpc3BsYXlpbmcgaW5wdXRzIHRvIGxvYWRpbmcgZmlsZXMsIHlvdSBjYW4gZG8gYSBsb3Qgd2l0aCBhIGZldyBzdGVwcyBpbiBIVE1MXCIsXHJcbiAgICAgIGJvdHRvbVRleHQ6XHJcbiAgICAgICAgJ1lvdSBjYW4gY3JlYXRlIHlvdXIgb3duIGh0bWwgZmlsZXMgbGlrZSB0aGlzIFwiaW5kZXguaHRtbFwiIG9yIFwiYW55LW5hbWVfeW91X3dhbnQuaHRtbFwiIGFuZCBvcGVuIGl0IGluIHlvdXIgYnJvd3NlciBqdXN0IGJ5IGRvdWJsZSBjbGlja2luZyBvbiBpdC4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZW1iZWQ6IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vZW1iZWQvbXlzdGlmeWluZy1tb250YWxjaW5pLXNydXR4P2F1dG9yZXNpemU9MSZlc2xpbnQ9MSZmb250c2l6ZT0xNiZoaWRlbmF2aWdhdGlvbj0xJnRoZW1lPWRhcmtcIlxyXG4gICAgIHN0eWxlPVwid2lkdGg6MTAwJTsgaGVpZ2h0OjEwMDBweDsgYm9yZGVyOjA7IGJvcmRlci1yYWRpdXM6IDRweDsgb3ZlcmZsb3c6aGlkZGVuO1wiXHJcbiAgICAgdGl0bGU9XCJUaGUgQW5jaG9yIHRhZywgbGlua2luZyB0aGUgd2ViXCJcclxuICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGFtYmllbnQtbGlnaHQtc2Vuc29yOyBjYW1lcmE7IGVuY3J5cHRlZC1tZWRpYTsgZ2VvbG9jYXRpb247IGd5cm9zY29wZTsgaGlkOyBtaWNyb3Bob25lOyBtaWRpOyBwYXltZW50OyB1c2I7IHZyOyB4ci1zcGF0aWFsLXRyYWNraW5nXCJcclxuICAgICBzYW5kYm94PVwiYWxsb3ctZm9ybXMgYWxsb3ctbW9kYWxzIGFsbG93LXBvcHVwcyBhbGxvdy1wcmVzZW50YXRpb24gYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctc2NyaXB0c1wiXHJcbiAgID48L2lmcmFtZT5gLFxyXG4gICAgICB0aXRsZTogXCI8YT5UaGUgQW5jaG9yIHRhZywgbGlua2luZyB0aGUgd2ViLjwvYT5cIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJBbiBhY2hvciB0YWcgY2FuIHJlZGlyZWN0IHRoZSB1c2VyIHRvIGFueSBwYWdlIG9ubGluZSBvciBvdGhlciBmaWxlcyBvbiB5b3UgbWFjaGluZS5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGVtYmVkOiBgPGlmcmFtZSBzcmM9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL2dpZnRlZC1yaWRlLXh2cmJ5P2F1dG9yZXNpemU9MSZmb250c2l6ZT0xNiZ0aGVtZT1kYXJrXCJcclxuICAgICBzdHlsZT1cIndpZHRoOjEwMCU7IGhlaWdodDoxMDAwcHg7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OmhpZGRlbjtcIlxyXG4gICAgIHRpdGxlPVwiZ2lmdGVkLXJpZGUteHZyYnlcIlxyXG4gICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYW1iaWVudC1saWdodC1zZW5zb3I7IGNhbWVyYTsgZW5jcnlwdGVkLW1lZGlhOyBnZW9sb2NhdGlvbjsgZ3lyb3Njb3BlOyBoaWQ7IG1pY3JvcGhvbmU7IG1pZGk7IHBheW1lbnQ7IHVzYjsgdnI7IHhyLXNwYXRpYWwtdHJhY2tpbmdcIlxyXG4gICAgIHNhbmRib3g9XCJhbGxvdy1mb3JtcyBhbGxvdy1tb2RhbHMgYWxsb3ctcG9wdXBzIGFsbG93LXByZXNlbnRhdGlvbiBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1zY3JpcHRzXCJcclxuICAgPjwvaWZyYW1lPmAsXHJcbiAgICAgIHRpdGxlOiBcIjxpbWc+VGhlIEltYWdlIHRhZywgZGlzcGxheWluZyBpbWFnZXMuXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiQW4gaW1hZ2UgdGFnIGNhbiBzaG93IGFuIGltYWdlIG9ubGluZSBvciBmcm9tIG9uIHlvdSBjb21wdXRlci5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGVtYmVkOiBgPGlmcmFtZSBzcmM9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL2luc3BpcmluZy1kZXctMHZxeGo/YXV0b3Jlc2l6ZT0xJmZvbnRzaXplPTE2JmhpZGVuYXZpZ2F0aW9uPTEmdGhlbWU9ZGFya1wiXHJcbiAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlOyBoZWlnaHQ6MTAwMHB4OyBib3JkZXI6MDsgYm9yZGVyLXJhZGl1czogNHB4OyBvdmVyZmxvdzpoaWRkZW47XCJcclxuICAgICB0aXRsZT1cImluc3BpcmluZy1kZXctMHZxeGpcIlxyXG4gICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYW1iaWVudC1saWdodC1zZW5zb3I7IGNhbWVyYTsgZW5jcnlwdGVkLW1lZGlhOyBnZW9sb2NhdGlvbjsgZ3lyb3Njb3BlOyBoaWQ7IG1pY3JvcGhvbmU7IG1pZGk7IHBheW1lbnQ7IHVzYjsgdnI7IHhyLXNwYXRpYWwtdHJhY2tpbmdcIlxyXG4gICAgIHNhbmRib3g9XCJhbGxvdy1mb3JtcyBhbGxvdy1tb2RhbHMgYWxsb3ctcG9wdXBzIGFsbG93LXByZXNlbnRhdGlvbiBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1zY3JpcHRzXCJcclxuICAgPjwvaWZyYW1lPmAsXHJcbiAgICAgIHRpdGxlOlxyXG4gICAgICAgICdUaGUgaW5wdXQgdGFnIGdldHMgZGlmZmVyZW50IHR5cGVzIG9mIGlucHV0IGZyb20gdGhlIHVzZXIuIDxpbnB1dCB0eXBlPVwidGV4dFwiIC8+JyxcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJXaXRoIHRoZSBpbnB1dCB0YWcgYW5kIHRoZSBzZWxlY3QgYW5kIG9wdGlvbiB0YWdzIHlvdSBjYW4gYXNrIHRoZSB1c2VyIG1hbnkgZGlmZmVyZW50IHR5cGVzIG9mIHF1ZXN0aW9ucyB0byBnZXQgaGlzIGlucHV0LlwiLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaHRtbDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==