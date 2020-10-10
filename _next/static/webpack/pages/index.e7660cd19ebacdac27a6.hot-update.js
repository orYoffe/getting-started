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
    embed: "<iframe src=\"https://codesandbox.io/embed/white-cloud-zyegl?autoresize=1&fontsize=16&hidenavigation=1&theme=dark\"\n     style=\"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"HTML page structure\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
    title: "HTML page structure",
    description: "An html page is the base of the website.\nIt defines the HTML version, meta data and the elements of the page.\nFrom displaying inputs to loading files, you can do a lot with a few steps in HTML",
    bottomText: 'You can create your own html files like this "index.html" or "any-name_you_want.html" and open it in your browser just by double clicking on it.'
  }, {
    embed: "<iframe src=\"https://codesandbox.io/embed/mystifying-montalcini-srutx?autoresize=1&eslint=1&fontsize=16&hidenavigation=1&theme=dark\"\n     style=\"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"The Anchor tag, linking the web\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
    title: "<a>The Anchor tag, linking the web.</a>",
    description: "An achor tag can redirect the user to any page online or other files on you machine."
  }, {
    embed: "<iframe src=\"https://codesandbox.io/embed/gifted-ride-xvrby?autoresize=1&fontsize=16&theme=dark\"\n     style=\"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"gifted-ride-xvrby\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
    title: "<img>The Image tag, displaying images.",
    description: "An image tag can show an image online or from on you computer."
  }, {
    embed: "<iframe src=\"https://codesandbox.io/embed/inspiring-dew-0vqxj?autoresize=1&fontsize=16&hidenavigation=1&theme=dark\"\n     style=\"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"inspiring-dew-0vqxj\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9kYXRhL2h0bWwuanMiXSwibmFtZXMiOlsiaHRtbCIsIm5hbWUiLCJzdWJUaXRsZSIsImRlc2NyaXB0aW9uIiwiaW1nIiwiaHRtbEltYWdlIiwibmV4dCIsInBhcnRzIiwiaW1hZ2UiLCJ0aXRsZSIsImVtYmVkIiwiYm90dG9tVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVBLElBQU1BLElBQUksR0FBRztBQUNYQyxNQUFJLEVBQUUsTUFESztBQUVYQyxVQUFRLEVBQUUsNEJBRkM7QUFHWEMsYUFBVyxFQUNULHVIQUpTO0FBS1hDLEtBQUcsRUFBRUMsaURBTE07QUFNWEMsTUFBSSxFQUFFLEtBTks7QUFPWEMsT0FBSyxFQUFFLENBQ0w7QUFDRUMsU0FBSyxFQUFFLGdDQURUO0FBRUVDLFNBQUssRUFBRSxvQkFGVDtBQUdFTixlQUFXLEVBQ1Q7QUFKSixHQURLLEVBT0w7QUFDRU8sU0FBSyxpaEJBRFA7QUFPRUQsU0FBSyxFQUFFLHFCQVBUO0FBUUVOLGVBQVcsRUFDVCxvTUFUSjtBQVVFUSxjQUFVLEVBQ1I7QUFYSixHQVBLLEVBb0JMO0FBQ0VELFNBQUssZ2pCQURQO0FBT0VELFNBQUssRUFBRSx5Q0FQVDtBQVFFTixlQUFXLEVBQ1Q7QUFUSixHQXBCSyxFQStCTDtBQUNFTyxTQUFLLDhmQURQO0FBT0VELFNBQUssRUFBRSx3Q0FQVDtBQVFFTixlQUFXLEVBQ1Q7QUFUSixHQS9CSyxFQTBDTDtBQUNFTyxTQUFLLG1oQkFEUDtBQU9FRCxTQUFLLEVBQ0gsa0ZBUko7QUFTRU4sZUFBVyxFQUNUO0FBVkosR0ExQ0s7QUFQSSxDQUFiO0FBZ0VlSCxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lNzY2MGNkMTllYmFjZGFjMjdhNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaHRtbEltYWdlIH0gZnJvbSBcIi4uL2ltYWdlc1wiO1xyXG5cclxuY29uc3QgaHRtbCA9IHtcclxuICBuYW1lOiBcIkhUTUxcIixcclxuICBzdWJUaXRsZTogXCJNYXJrdXAgbGFuZ3VhZ2UgZm9yIHdlYiBVSVwiLFxyXG4gIGRlc2NyaXB0aW9uOlxyXG4gICAgJ0hUTUwgaXMgbWFkZSBvdXQgb2YgdGFncy4gXFxuVGFncyBjYW4gaG9sZCB2YWx1ZXMgd2l0aCBhdHRyaWJ1dGVzLlxcbiBGb3IgZXhhbXBsZTogXFxuPGh0bWwgYXR0cmlidXRlPVwiYXR0cmlidXRlIHZhbHVlXCI+JyxcclxuICBpbWc6IGh0bWxJbWFnZSxcclxuICBuZXh0OiBcIkNzc1wiLFxyXG4gIHBhcnRzOiBbXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiBcImFuYXRvbXktb2YtYW4taHRtbC1lbGVtZW50LnBuZ1wiLFxyXG4gICAgICB0aXRsZTogXCJIVE1MIHRhZyBzdHJ1Y3R1cmVcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJBbiBodG1sIHRhZyBpcyBtYWRlIG91dCBvZiBpdCdzIG9wZW5uaW5nIHRhZywgY2xvc2luZyB0YWcsIGl0J3MgY29udGVudCBpbiB0aGUgbWlkZGxlIGFuZCBpdCdzIGF0dHJpYnV0ZXMgYW5kIHZhbHVlcyBvbiBpdCdzIG9wZW5pbmcgdGFnLlxcbiBUaGVyZSBhcmUgdGFncyB0aGUgZG9uJ3QgaGF2ZSBjbG9zaW5nIHRhZ3MgbGlrZSB0aGUgPGJyLz4gYW5kIDxpbWcvPiB0YWdzLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZW1iZWQ6IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vZW1iZWQvd2hpdGUtY2xvdWQtenllZ2w/YXV0b3Jlc2l6ZT0xJmZvbnRzaXplPTE2JmhpZGVuYXZpZ2F0aW9uPTEmdGhlbWU9ZGFya1wiXHJcbiAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlOyBoZWlnaHQ6NTAwcHg7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OmhpZGRlbjtcIlxyXG4gICAgIHRpdGxlPVwiSFRNTCBwYWdlIHN0cnVjdHVyZVwiXHJcbiAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhbWJpZW50LWxpZ2h0LXNlbnNvcjsgY2FtZXJhOyBlbmNyeXB0ZWQtbWVkaWE7IGdlb2xvY2F0aW9uOyBneXJvc2NvcGU7IGhpZDsgbWljcm9waG9uZTsgbWlkaTsgcGF5bWVudDsgdXNiOyB2cjsgeHItc3BhdGlhbC10cmFja2luZ1wiXHJcbiAgICAgc2FuZGJveD1cImFsbG93LWZvcm1zIGFsbG93LW1vZGFscyBhbGxvdy1wb3B1cHMgYWxsb3ctcHJlc2VudGF0aW9uIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHNcIlxyXG4gICA+PC9pZnJhbWU+YCxcclxuICAgICAgdGl0bGU6IFwiSFRNTCBwYWdlIHN0cnVjdHVyZVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIkFuIGh0bWwgcGFnZSBpcyB0aGUgYmFzZSBvZiB0aGUgd2Vic2l0ZS5cXG5JdCBkZWZpbmVzIHRoZSBIVE1MIHZlcnNpb24sIG1ldGEgZGF0YSBhbmQgdGhlIGVsZW1lbnRzIG9mIHRoZSBwYWdlLlxcbkZyb20gZGlzcGxheWluZyBpbnB1dHMgdG8gbG9hZGluZyBmaWxlcywgeW91IGNhbiBkbyBhIGxvdCB3aXRoIGEgZmV3IHN0ZXBzIGluIEhUTUxcIixcclxuICAgICAgYm90dG9tVGV4dDpcclxuICAgICAgICAnWW91IGNhbiBjcmVhdGUgeW91ciBvd24gaHRtbCBmaWxlcyBsaWtlIHRoaXMgXCJpbmRleC5odG1sXCIgb3IgXCJhbnktbmFtZV95b3Vfd2FudC5odG1sXCIgYW5kIG9wZW4gaXQgaW4geW91ciBicm93c2VyIGp1c3QgYnkgZG91YmxlIGNsaWNraW5nIG9uIGl0LicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBlbWJlZDogYDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9lbWJlZC9teXN0aWZ5aW5nLW1vbnRhbGNpbmktc3J1dHg/YXV0b3Jlc2l6ZT0xJmVzbGludD0xJmZvbnRzaXplPTE2JmhpZGVuYXZpZ2F0aW9uPTEmdGhlbWU9ZGFya1wiXHJcbiAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlOyBoZWlnaHQ6NTAwcHg7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OmhpZGRlbjtcIlxyXG4gICAgIHRpdGxlPVwiVGhlIEFuY2hvciB0YWcsIGxpbmtpbmcgdGhlIHdlYlwiXHJcbiAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhbWJpZW50LWxpZ2h0LXNlbnNvcjsgY2FtZXJhOyBlbmNyeXB0ZWQtbWVkaWE7IGdlb2xvY2F0aW9uOyBneXJvc2NvcGU7IGhpZDsgbWljcm9waG9uZTsgbWlkaTsgcGF5bWVudDsgdXNiOyB2cjsgeHItc3BhdGlhbC10cmFja2luZ1wiXHJcbiAgICAgc2FuZGJveD1cImFsbG93LWZvcm1zIGFsbG93LW1vZGFscyBhbGxvdy1wb3B1cHMgYWxsb3ctcHJlc2VudGF0aW9uIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHNcIlxyXG4gICA+PC9pZnJhbWU+YCxcclxuICAgICAgdGl0bGU6IFwiPGE+VGhlIEFuY2hvciB0YWcsIGxpbmtpbmcgdGhlIHdlYi48L2E+XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiQW4gYWNob3IgdGFnIGNhbiByZWRpcmVjdCB0aGUgdXNlciB0byBhbnkgcGFnZSBvbmxpbmUgb3Igb3RoZXIgZmlsZXMgb24geW91IG1hY2hpbmUuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBlbWJlZDogYDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9lbWJlZC9naWZ0ZWQtcmlkZS14dnJieT9hdXRvcmVzaXplPTEmZm9udHNpemU9MTYmdGhlbWU9ZGFya1wiXHJcbiAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlOyBoZWlnaHQ6NTAwcHg7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OmhpZGRlbjtcIlxyXG4gICAgIHRpdGxlPVwiZ2lmdGVkLXJpZGUteHZyYnlcIlxyXG4gICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYW1iaWVudC1saWdodC1zZW5zb3I7IGNhbWVyYTsgZW5jcnlwdGVkLW1lZGlhOyBnZW9sb2NhdGlvbjsgZ3lyb3Njb3BlOyBoaWQ7IG1pY3JvcGhvbmU7IG1pZGk7IHBheW1lbnQ7IHVzYjsgdnI7IHhyLXNwYXRpYWwtdHJhY2tpbmdcIlxyXG4gICAgIHNhbmRib3g9XCJhbGxvdy1mb3JtcyBhbGxvdy1tb2RhbHMgYWxsb3ctcG9wdXBzIGFsbG93LXByZXNlbnRhdGlvbiBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1zY3JpcHRzXCJcclxuICAgPjwvaWZyYW1lPmAsXHJcbiAgICAgIHRpdGxlOiBcIjxpbWc+VGhlIEltYWdlIHRhZywgZGlzcGxheWluZyBpbWFnZXMuXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiQW4gaW1hZ2UgdGFnIGNhbiBzaG93IGFuIGltYWdlIG9ubGluZSBvciBmcm9tIG9uIHlvdSBjb21wdXRlci5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGVtYmVkOiBgPGlmcmFtZSBzcmM9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL2luc3BpcmluZy1kZXctMHZxeGo/YXV0b3Jlc2l6ZT0xJmZvbnRzaXplPTE2JmhpZGVuYXZpZ2F0aW9uPTEmdGhlbWU9ZGFya1wiXHJcbiAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlOyBoZWlnaHQ6NTAwcHg7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OmhpZGRlbjtcIlxyXG4gICAgIHRpdGxlPVwiaW5zcGlyaW5nLWRldy0wdnF4alwiXHJcbiAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhbWJpZW50LWxpZ2h0LXNlbnNvcjsgY2FtZXJhOyBlbmNyeXB0ZWQtbWVkaWE7IGdlb2xvY2F0aW9uOyBneXJvc2NvcGU7IGhpZDsgbWljcm9waG9uZTsgbWlkaTsgcGF5bWVudDsgdXNiOyB2cjsgeHItc3BhdGlhbC10cmFja2luZ1wiXHJcbiAgICAgc2FuZGJveD1cImFsbG93LWZvcm1zIGFsbG93LW1vZGFscyBhbGxvdy1wb3B1cHMgYWxsb3ctcHJlc2VudGF0aW9uIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHNcIlxyXG4gICA+PC9pZnJhbWU+YCxcclxuICAgICAgdGl0bGU6XHJcbiAgICAgICAgJ1RoZSBpbnB1dCB0YWcgZ2V0cyBkaWZmZXJlbnQgdHlwZXMgb2YgaW5wdXQgZnJvbSB0aGUgdXNlci4gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgLz4nLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIldpdGggdGhlIGlucHV0IHRhZyBhbmQgdGhlIHNlbGVjdCBhbmQgb3B0aW9uIHRhZ3MgeW91IGNhbiBhc2sgdGhlIHVzZXIgbWFueSBkaWZmZXJlbnQgdHlwZXMgb2YgcXVlc3Rpb25zIHRvIGdldCBoaXMgaW5wdXQuXCIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBodG1sO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9