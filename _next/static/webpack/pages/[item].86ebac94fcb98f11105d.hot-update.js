webpackHotUpdate_N_E("pages/[item]",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9kYXRhL2h0bWwuanMiXSwibmFtZXMiOlsiaHRtbCIsIm5hbWUiLCJzdWJUaXRsZSIsImRlc2NyaXB0aW9uIiwiaW1nIiwiaHRtbEltYWdlIiwibmV4dCIsInBhcnRzIiwiaW1hZ2UiLCJ0aXRsZSIsImVtYmVkIiwiYm90dG9tVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVBLElBQU1BLElBQUksR0FBRztBQUNYQyxNQUFJLEVBQUUsTUFESztBQUVYQyxVQUFRLEVBQUUsNEJBRkM7QUFHWEMsYUFBVyxFQUNULHVIQUpTO0FBS1hDLEtBQUcsRUFBRUMsaURBTE07QUFNWEMsTUFBSSxFQUFFLEtBTks7QUFPWEMsT0FBSyxFQUFFLENBQ0w7QUFDRUMsU0FBSyxFQUFFLGdDQURUO0FBRUVDLFNBQUssRUFBRSxvQkFGVDtBQUdFTixlQUFXLEVBQ1Q7QUFKSixHQURLLEVBT0w7QUFDRU8sU0FBSyxraEJBRFA7QUFPRUQsU0FBSyxFQUFFLHFCQVBUO0FBUUVOLGVBQVcsRUFDVCxvTUFUSjtBQVVFUSxjQUFVLEVBQ1I7QUFYSixHQVBLLEVBb0JMO0FBQ0VELFNBQUssaWpCQURQO0FBT0VELFNBQUssRUFBRSx5Q0FQVDtBQVFFTixlQUFXLEVBQ1Q7QUFUSixHQXBCSyxFQStCTDtBQUNFTyxTQUFLLCtmQURQO0FBT0VELFNBQUssRUFBRSx3Q0FQVDtBQVFFTixlQUFXLEVBQ1Q7QUFUSixHQS9CSyxFQTBDTDtBQUNFTyxTQUFLLG9oQkFEUDtBQU9FRCxTQUFLLEVBQ0gsa0ZBUko7QUFTRU4sZUFBVyxFQUNUO0FBVkosR0ExQ0s7QUFQSSxDQUFiO0FBZ0VlSCxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9baXRlbV0uODZlYmFjOTRmY2I5OGYxMTEwNWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGh0bWxJbWFnZSB9IGZyb20gXCIuLi9pbWFnZXNcIjtcclxuXHJcbmNvbnN0IGh0bWwgPSB7XHJcbiAgbmFtZTogXCJIVE1MXCIsXHJcbiAgc3ViVGl0bGU6IFwiTWFya3VwIGxhbmd1YWdlIGZvciB3ZWIgVUlcIixcclxuICBkZXNjcmlwdGlvbjpcclxuICAgICdIVE1MIGlzIG1hZGUgb3V0IG9mIHRhZ3MuIFxcblRhZ3MgY2FuIGhvbGQgdmFsdWVzIHdpdGggYXR0cmlidXRlcy5cXG4gRm9yIGV4YW1wbGU6IFxcbjxodG1sIGF0dHJpYnV0ZT1cImF0dHJpYnV0ZSB2YWx1ZVwiPicsXHJcbiAgaW1nOiBodG1sSW1hZ2UsXHJcbiAgbmV4dDogXCJDc3NcIixcclxuICBwYXJ0czogW1xyXG4gICAge1xyXG4gICAgICBpbWFnZTogXCJhbmF0b215LW9mLWFuLWh0bWwtZWxlbWVudC5wbmdcIixcclxuICAgICAgdGl0bGU6IFwiSFRNTCB0YWcgc3RydWN0dXJlXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiQW4gaHRtbCB0YWcgaXMgbWFkZSBvdXQgb2YgaXQncyBvcGVubmluZyB0YWcsIGNsb3NpbmcgdGFnLCBpdCdzIGNvbnRlbnQgaW4gdGhlIG1pZGRsZSBhbmQgaXQncyBhdHRyaWJ1dGVzIGFuZCB2YWx1ZXMgb24gaXQncyBvcGVuaW5nIHRhZy5cXG4gVGhlcmUgYXJlIHRhZ3MgdGhlIGRvbid0IGhhdmUgY2xvc2luZyB0YWdzIGxpa2UgdGhlIDxici8+IGFuZCA8aW1nLz4gdGFncy5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGVtYmVkOiBgPGlmcmFtZSBzcmM9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL3doaXRlLWNsb3VkLXp5ZWdsP2F1dG9yZXNpemU9MSZmb250c2l6ZT0xNiZoaWRlbmF2aWdhdGlvbj0xJnRoZW1lPWRhcmtcIlxyXG4gICAgIHN0eWxlPVwid2lkdGg6MTAwJTsgaGVpZ2h0OjEwMDBweDsgYm9yZGVyOjA7IGJvcmRlci1yYWRpdXM6IDRweDsgb3ZlcmZsb3c6aGlkZGVuO1wiXHJcbiAgICAgdGl0bGU9XCJIVE1MIHBhZ2Ugc3RydWN0dXJlXCJcclxuICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGFtYmllbnQtbGlnaHQtc2Vuc29yOyBjYW1lcmE7IGVuY3J5cHRlZC1tZWRpYTsgZ2VvbG9jYXRpb247IGd5cm9zY29wZTsgaGlkOyBtaWNyb3Bob25lOyBtaWRpOyBwYXltZW50OyB1c2I7IHZyOyB4ci1zcGF0aWFsLXRyYWNraW5nXCJcclxuICAgICBzYW5kYm94PVwiYWxsb3ctZm9ybXMgYWxsb3ctbW9kYWxzIGFsbG93LXBvcHVwcyBhbGxvdy1wcmVzZW50YXRpb24gYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctc2NyaXB0c1wiXHJcbiAgID48L2lmcmFtZT5gLFxyXG4gICAgICB0aXRsZTogXCJIVE1MIHBhZ2Ugc3RydWN0dXJlXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiQW4gaHRtbCBwYWdlIGlzIHRoZSBiYXNlIG9mIHRoZSB3ZWJzaXRlLlxcbkl0IGRlZmluZXMgdGhlIEhUTUwgdmVyc2lvbiwgbWV0YSBkYXRhIGFuZCB0aGUgZWxlbWVudHMgb2YgdGhlIHBhZ2UuXFxuRnJvbSBkaXNwbGF5aW5nIGlucHV0cyB0byBsb2FkaW5nIGZpbGVzLCB5b3UgY2FuIGRvIGEgbG90IHdpdGggYSBmZXcgc3RlcHMgaW4gSFRNTFwiLFxyXG4gICAgICBib3R0b21UZXh0OlxyXG4gICAgICAgICdZb3UgY2FuIGNyZWF0ZSB5b3VyIG93biBodG1sIGZpbGVzIGxpa2UgdGhpcyBcImluZGV4Lmh0bWxcIiBvciBcImFueS1uYW1lX3lvdV93YW50Lmh0bWxcIiBhbmQgb3BlbiBpdCBpbiB5b3VyIGJyb3dzZXIganVzdCBieSBkb3VibGUgY2xpY2tpbmcgb24gaXQuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGVtYmVkOiBgPGlmcmFtZSBzcmM9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL215c3RpZnlpbmctbW9udGFsY2luaS1zcnV0eD9hdXRvcmVzaXplPTEmZXNsaW50PTEmZm9udHNpemU9MTYmaGlkZW5hdmlnYXRpb249MSZ0aGVtZT1kYXJrXCJcclxuICAgICBzdHlsZT1cIndpZHRoOjEwMCU7IGhlaWdodDoxMDAwcHg7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OmhpZGRlbjtcIlxyXG4gICAgIHRpdGxlPVwiVGhlIEFuY2hvciB0YWcsIGxpbmtpbmcgdGhlIHdlYlwiXHJcbiAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhbWJpZW50LWxpZ2h0LXNlbnNvcjsgY2FtZXJhOyBlbmNyeXB0ZWQtbWVkaWE7IGdlb2xvY2F0aW9uOyBneXJvc2NvcGU7IGhpZDsgbWljcm9waG9uZTsgbWlkaTsgcGF5bWVudDsgdXNiOyB2cjsgeHItc3BhdGlhbC10cmFja2luZ1wiXHJcbiAgICAgc2FuZGJveD1cImFsbG93LWZvcm1zIGFsbG93LW1vZGFscyBhbGxvdy1wb3B1cHMgYWxsb3ctcHJlc2VudGF0aW9uIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHNcIlxyXG4gICA+PC9pZnJhbWU+YCxcclxuICAgICAgdGl0bGU6IFwiPGE+VGhlIEFuY2hvciB0YWcsIGxpbmtpbmcgdGhlIHdlYi48L2E+XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiQW4gYWNob3IgdGFnIGNhbiByZWRpcmVjdCB0aGUgdXNlciB0byBhbnkgcGFnZSBvbmxpbmUgb3Igb3RoZXIgZmlsZXMgb24geW91IG1hY2hpbmUuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBlbWJlZDogYDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9lbWJlZC9naWZ0ZWQtcmlkZS14dnJieT9hdXRvcmVzaXplPTEmZm9udHNpemU9MTYmdGhlbWU9ZGFya1wiXHJcbiAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlOyBoZWlnaHQ6MTAwMHB4OyBib3JkZXI6MDsgYm9yZGVyLXJhZGl1czogNHB4OyBvdmVyZmxvdzpoaWRkZW47XCJcclxuICAgICB0aXRsZT1cImdpZnRlZC1yaWRlLXh2cmJ5XCJcclxuICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGFtYmllbnQtbGlnaHQtc2Vuc29yOyBjYW1lcmE7IGVuY3J5cHRlZC1tZWRpYTsgZ2VvbG9jYXRpb247IGd5cm9zY29wZTsgaGlkOyBtaWNyb3Bob25lOyBtaWRpOyBwYXltZW50OyB1c2I7IHZyOyB4ci1zcGF0aWFsLXRyYWNraW5nXCJcclxuICAgICBzYW5kYm94PVwiYWxsb3ctZm9ybXMgYWxsb3ctbW9kYWxzIGFsbG93LXBvcHVwcyBhbGxvdy1wcmVzZW50YXRpb24gYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctc2NyaXB0c1wiXHJcbiAgID48L2lmcmFtZT5gLFxyXG4gICAgICB0aXRsZTogXCI8aW1nPlRoZSBJbWFnZSB0YWcsIGRpc3BsYXlpbmcgaW1hZ2VzLlwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIkFuIGltYWdlIHRhZyBjYW4gc2hvdyBhbiBpbWFnZSBvbmxpbmUgb3IgZnJvbSBvbiB5b3UgY29tcHV0ZXIuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBlbWJlZDogYDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9lbWJlZC9pbnNwaXJpbmctZGV3LTB2cXhqP2F1dG9yZXNpemU9MSZmb250c2l6ZT0xNiZoaWRlbmF2aWdhdGlvbj0xJnRoZW1lPWRhcmtcIlxyXG4gICAgIHN0eWxlPVwid2lkdGg6MTAwJTsgaGVpZ2h0OjEwMDBweDsgYm9yZGVyOjA7IGJvcmRlci1yYWRpdXM6IDRweDsgb3ZlcmZsb3c6aGlkZGVuO1wiXHJcbiAgICAgdGl0bGU9XCJpbnNwaXJpbmctZGV3LTB2cXhqXCJcclxuICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGFtYmllbnQtbGlnaHQtc2Vuc29yOyBjYW1lcmE7IGVuY3J5cHRlZC1tZWRpYTsgZ2VvbG9jYXRpb247IGd5cm9zY29wZTsgaGlkOyBtaWNyb3Bob25lOyBtaWRpOyBwYXltZW50OyB1c2I7IHZyOyB4ci1zcGF0aWFsLXRyYWNraW5nXCJcclxuICAgICBzYW5kYm94PVwiYWxsb3ctZm9ybXMgYWxsb3ctbW9kYWxzIGFsbG93LXBvcHVwcyBhbGxvdy1wcmVzZW50YXRpb24gYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctc2NyaXB0c1wiXHJcbiAgID48L2lmcmFtZT5gLFxyXG4gICAgICB0aXRsZTpcclxuICAgICAgICAnVGhlIGlucHV0IHRhZyBnZXRzIGRpZmZlcmVudCB0eXBlcyBvZiBpbnB1dCBmcm9tIHRoZSB1c2VyLiA8aW5wdXQgdHlwZT1cInRleHRcIiAvPicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiV2l0aCB0aGUgaW5wdXQgdGFnIGFuZCB0aGUgc2VsZWN0IGFuZCBvcHRpb24gdGFncyB5b3UgY2FuIGFzayB0aGUgdXNlciBtYW55IGRpZmZlcmVudCB0eXBlcyBvZiBxdWVzdGlvbnMgdG8gZ2V0IGhpcyBpbnB1dC5cIixcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGh0bWw7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=