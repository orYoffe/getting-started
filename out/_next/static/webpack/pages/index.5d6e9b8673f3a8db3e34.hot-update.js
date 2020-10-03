webpackHotUpdate_N_E("pages/index",{

/***/ "./util/items.js":
/*!***********************!*\
  !*** ./util/items.js ***!
  \***********************/
/*! exports provided: items */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "items", function() { return items; });
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images */ "./util/images.js");

var items = [{
  name: "HTML",
  subTitle: "Markup language for web UI",
  description: 'HTML is made out of tags. \nTags can hold values with attributes.\n For example: \n<html attribute="attribute value">',
  img: _images__WEBPACK_IMPORTED_MODULE_0__["htmlImage"],
  next: "Css",
  parts: [{
    image: "/anatomy-of-an-html-element.png",
    title: "HTML tag structure",
    description: "An html tag is made out of it's openning tag, closing tag, it's content in the middle and it's attributes and values on it's opening tag.\n There are tags the don't have closing tags like the <br/> and <img/> tags."
  }, {
    embed: "<iframe src=\"https://codesandbox.io/embed/white-cloud-zyegl?autoresize=1&fontsize=16&hidenavigation=1&theme=dark\"\n     style=\"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"white-cloud-zyegl\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
    title: "HTML page structure",
    description: "An html page is the base of the website.\nIt defines the HTML version, meta data and the elements of the page.\nFrom displaying inputs to loading files, you can do a lot with a few steps in HTML",
    bottomText: 'You can create your own html files like this "index.html" or "any-name_you_want.html" and open it in your browser just by double clicking on it.'
  }, {
    embed: "<iframe src=\"https://codesandbox.io/embed/mystifying-montalcini-srutx?autoresize=1&eslint=1&fontsize=16&hidenavigation=1&theme=dark\"\n     style=\"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"mystifying-montalcini-srutx\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
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
}, {
  name: "CSS",
  subTitle: "Styling language of the web",
  img: _images__WEBPACK_IMPORTED_MODULE_0__["cssImage"],
  prerequisits: ["html"]
}, {
  name: "JavaScript",
  subTitle: "The Programming language of the web",
  description: "JavaScript is mainly run in the browser, but can run on servers and any other place today.",
  img: _images__WEBPACK_IMPORTED_MODULE_0__["jsImage"],
  prerequisits: ["html", "css"],
  parts: [{
    embed: "<iframe src=\"https://codesandbox.io/embed/purple-http-3cvem?autoresize=1&expanddevtools=1&fontsize=16&hidenavigation=1&theme=dark\"\n     style=\"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"purple-http-3cvem\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
    title: "Connecting HTML and JavaScript",
    description: "To insert JavaScript code in an HTML page we use the <script> tag.\nThe two options are to write the JavaScript code inside the tag or link to a JavaScript file with a url."
  }, {
    embed: "<iframe src=\"https://codesandbox.io/embed/fervent-cdn-2e0rt?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark\"\n     style=\"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"fervent-cdn-2e0rt\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
    title: "JavaScript types and variables",
    description: "JavaScript variables are used to save some value or data to reuse it later. Declaring and using a variable is easy since you don't need to specify the type."
  }]
}, {
  name: "Node.js",
  subTitle: "JavaScript Server-side",
  img: _images__WEBPACK_IMPORTED_MODULE_0__["nodejsImage"],
  prerequisits: ["javascript"]
}, {
  name: "React",
  subTitle: "JavaScript UI Library",
  img: _images__WEBPACK_IMPORTED_MODULE_0__["reactImage"],
  prerequisits: ["html", "css", "javascript"]
}];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9pdGVtcy5qcyJdLCJuYW1lcyI6WyJpdGVtcyIsIm5hbWUiLCJzdWJUaXRsZSIsImRlc2NyaXB0aW9uIiwiaW1nIiwiaHRtbEltYWdlIiwibmV4dCIsInBhcnRzIiwiaW1hZ2UiLCJ0aXRsZSIsImVtYmVkIiwiYm90dG9tVGV4dCIsImNzc0ltYWdlIiwicHJlcmVxdWlzaXRzIiwianNJbWFnZSIsIm5vZGVqc0ltYWdlIiwicmVhY3RJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUU8sSUFBTUEsS0FBSyxHQUFHLENBQ25CO0FBQ0VDLE1BQUksRUFBRSxNQURSO0FBRUVDLFVBQVEsRUFBRSw0QkFGWjtBQUdFQyxhQUFXLEVBQ1QsdUhBSko7QUFLRUMsS0FBRyxFQUFFQyxpREFMUDtBQU1FQyxNQUFJLEVBQUUsS0FOUjtBQU9FQyxPQUFLLEVBQUUsQ0FDTDtBQUNFQyxTQUFLLEVBQUUsaUNBRFQ7QUFFRUMsU0FBSyxFQUFFLG9CQUZUO0FBR0VOLGVBQVcsRUFDVDtBQUpKLEdBREssRUFPTDtBQUNFTyxTQUFLLCtnQkFEUDtBQU9FRCxTQUFLLEVBQUUscUJBUFQ7QUFRRU4sZUFBVyxFQUNULG9NQVRKO0FBVUVRLGNBQVUsRUFDUjtBQVhKLEdBUEssRUFvQkw7QUFDRUQsU0FBSyw0aUJBRFA7QUFPRUQsU0FBSyxFQUFFLHlDQVBUO0FBUUVOLGVBQVcsRUFDVDtBQVRKLEdBcEJLLEVBK0JMO0FBQ0VPLFNBQUssOGZBRFA7QUFPRUQsU0FBSyxFQUFFLHdDQVBUO0FBUUVOLGVBQVcsRUFDVDtBQVRKLEdBL0JLLEVBMENMO0FBQ0VPLFNBQUssbWhCQURQO0FBT0VELFNBQUssRUFDSCxrRkFSSjtBQVNFTixlQUFXLEVBQ1Q7QUFWSixHQTFDSztBQVBULENBRG1CLEVBZ0VuQjtBQUNFRixNQUFJLEVBQUUsS0FEUjtBQUVFQyxVQUFRLEVBQUUsNkJBRlo7QUFHRUUsS0FBRyxFQUFFUSxnREFIUDtBQUlFQyxjQUFZLEVBQUUsQ0FBQyxNQUFEO0FBSmhCLENBaEVtQixFQXNFbkI7QUFDRVosTUFBSSxFQUFFLFlBRFI7QUFFRUMsVUFBUSxFQUFFLHFDQUZaO0FBR0VDLGFBQVcsRUFDVCw0RkFKSjtBQUtFQyxLQUFHLEVBQUVVLCtDQUxQO0FBTUVELGNBQVksRUFBRSxDQUFDLE1BQUQsRUFBUyxLQUFULENBTmhCO0FBT0VOLE9BQUssRUFBRSxDQUNMO0FBQ0VHLFNBQUssZ2lCQURQO0FBT0VELFNBQUssRUFBRSxnQ0FQVDtBQVFFTixlQUFXLEVBQ1Q7QUFUSixHQURLLEVBWUw7QUFDRU8sU0FBSyxnaUJBRFA7QUFPRUQsU0FBSyxFQUFFLGdDQVBUO0FBUUVOLGVBQVcsRUFDVDtBQVRKLEdBWks7QUFQVCxDQXRFbUIsRUFzR25CO0FBQ0VGLE1BQUksRUFBRSxTQURSO0FBRUVDLFVBQVEsRUFBRSx3QkFGWjtBQUdFRSxLQUFHLEVBQUVXLG1EQUhQO0FBSUVGLGNBQVksRUFBRSxDQUFDLFlBQUQ7QUFKaEIsQ0F0R21CLEVBNEduQjtBQUNFWixNQUFJLEVBQUUsT0FEUjtBQUVFQyxVQUFRLEVBQUUsdUJBRlo7QUFHRUUsS0FBRyxFQUFFWSxrREFIUDtBQUlFSCxjQUFZLEVBQUUsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixZQUFoQjtBQUpoQixDQTVHbUIsQ0FBZCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZDZlOWI4NjczZjNhOGRiM2UzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBodG1sSW1hZ2UsXHJcbiAgY3NzSW1hZ2UsXHJcbiAganNJbWFnZSxcclxuICBub2RlanNJbWFnZSxcclxuICByZWFjdEltYWdlLFxyXG59IGZyb20gXCIuL2ltYWdlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGl0ZW1zID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiSFRNTFwiLFxyXG4gICAgc3ViVGl0bGU6IFwiTWFya3VwIGxhbmd1YWdlIGZvciB3ZWIgVUlcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnSFRNTCBpcyBtYWRlIG91dCBvZiB0YWdzLiBcXG5UYWdzIGNhbiBob2xkIHZhbHVlcyB3aXRoIGF0dHJpYnV0ZXMuXFxuIEZvciBleGFtcGxlOiBcXG48aHRtbCBhdHRyaWJ1dGU9XCJhdHRyaWJ1dGUgdmFsdWVcIj4nLFxyXG4gICAgaW1nOiBodG1sSW1hZ2UsXHJcbiAgICBuZXh0OiBcIkNzc1wiLFxyXG4gICAgcGFydHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGltYWdlOiBcIi9hbmF0b215LW9mLWFuLWh0bWwtZWxlbWVudC5wbmdcIixcclxuICAgICAgICB0aXRsZTogXCJIVE1MIHRhZyBzdHJ1Y3R1cmVcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiQW4gaHRtbCB0YWcgaXMgbWFkZSBvdXQgb2YgaXQncyBvcGVubmluZyB0YWcsIGNsb3NpbmcgdGFnLCBpdCdzIGNvbnRlbnQgaW4gdGhlIG1pZGRsZSBhbmQgaXQncyBhdHRyaWJ1dGVzIGFuZCB2YWx1ZXMgb24gaXQncyBvcGVuaW5nIHRhZy5cXG4gVGhlcmUgYXJlIHRhZ3MgdGhlIGRvbid0IGhhdmUgY2xvc2luZyB0YWdzIGxpa2UgdGhlIDxici8+IGFuZCA8aW1nLz4gdGFncy5cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGVtYmVkOiBgPGlmcmFtZSBzcmM9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL3doaXRlLWNsb3VkLXp5ZWdsP2F1dG9yZXNpemU9MSZmb250c2l6ZT0xNiZoaWRlbmF2aWdhdGlvbj0xJnRoZW1lPWRhcmtcIlxyXG4gICAgIHN0eWxlPVwid2lkdGg6MTAwJTsgaGVpZ2h0OjUwMHB4OyBib3JkZXI6MDsgYm9yZGVyLXJhZGl1czogNHB4OyBvdmVyZmxvdzpoaWRkZW47XCJcclxuICAgICB0aXRsZT1cIndoaXRlLWNsb3VkLXp5ZWdsXCJcclxuICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGFtYmllbnQtbGlnaHQtc2Vuc29yOyBjYW1lcmE7IGVuY3J5cHRlZC1tZWRpYTsgZ2VvbG9jYXRpb247IGd5cm9zY29wZTsgaGlkOyBtaWNyb3Bob25lOyBtaWRpOyBwYXltZW50OyB1c2I7IHZyOyB4ci1zcGF0aWFsLXRyYWNraW5nXCJcclxuICAgICBzYW5kYm94PVwiYWxsb3ctZm9ybXMgYWxsb3ctbW9kYWxzIGFsbG93LXBvcHVwcyBhbGxvdy1wcmVzZW50YXRpb24gYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctc2NyaXB0c1wiXHJcbiAgID48L2lmcmFtZT5gLFxyXG4gICAgICAgIHRpdGxlOiBcIkhUTUwgcGFnZSBzdHJ1Y3R1cmVcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiQW4gaHRtbCBwYWdlIGlzIHRoZSBiYXNlIG9mIHRoZSB3ZWJzaXRlLlxcbkl0IGRlZmluZXMgdGhlIEhUTUwgdmVyc2lvbiwgbWV0YSBkYXRhIGFuZCB0aGUgZWxlbWVudHMgb2YgdGhlIHBhZ2UuXFxuRnJvbSBkaXNwbGF5aW5nIGlucHV0cyB0byBsb2FkaW5nIGZpbGVzLCB5b3UgY2FuIGRvIGEgbG90IHdpdGggYSBmZXcgc3RlcHMgaW4gSFRNTFwiLFxyXG4gICAgICAgIGJvdHRvbVRleHQ6XHJcbiAgICAgICAgICAnWW91IGNhbiBjcmVhdGUgeW91ciBvd24gaHRtbCBmaWxlcyBsaWtlIHRoaXMgXCJpbmRleC5odG1sXCIgb3IgXCJhbnktbmFtZV95b3Vfd2FudC5odG1sXCIgYW5kIG9wZW4gaXQgaW4geW91ciBicm93c2VyIGp1c3QgYnkgZG91YmxlIGNsaWNraW5nIG9uIGl0LicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBlbWJlZDogYDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9lbWJlZC9teXN0aWZ5aW5nLW1vbnRhbGNpbmktc3J1dHg/YXV0b3Jlc2l6ZT0xJmVzbGludD0xJmZvbnRzaXplPTE2JmhpZGVuYXZpZ2F0aW9uPTEmdGhlbWU9ZGFya1wiXHJcbiAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlOyBoZWlnaHQ6NTAwcHg7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OmhpZGRlbjtcIlxyXG4gICAgIHRpdGxlPVwibXlzdGlmeWluZy1tb250YWxjaW5pLXNydXR4XCJcclxuICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGFtYmllbnQtbGlnaHQtc2Vuc29yOyBjYW1lcmE7IGVuY3J5cHRlZC1tZWRpYTsgZ2VvbG9jYXRpb247IGd5cm9zY29wZTsgaGlkOyBtaWNyb3Bob25lOyBtaWRpOyBwYXltZW50OyB1c2I7IHZyOyB4ci1zcGF0aWFsLXRyYWNraW5nXCJcclxuICAgICBzYW5kYm94PVwiYWxsb3ctZm9ybXMgYWxsb3ctbW9kYWxzIGFsbG93LXBvcHVwcyBhbGxvdy1wcmVzZW50YXRpb24gYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctc2NyaXB0c1wiXHJcbiAgID48L2lmcmFtZT5gLFxyXG4gICAgICAgIHRpdGxlOiBcIjxhPlRoZSBBbmNob3IgdGFnLCBsaW5raW5nIHRoZSB3ZWIuPC9hPlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJBbiBhY2hvciB0YWcgY2FuIHJlZGlyZWN0IHRoZSB1c2VyIHRvIGFueSBwYWdlIG9ubGluZSBvciBvdGhlciBmaWxlcyBvbiB5b3UgbWFjaGluZS5cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGVtYmVkOiBgPGlmcmFtZSBzcmM9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL2dpZnRlZC1yaWRlLXh2cmJ5P2F1dG9yZXNpemU9MSZmb250c2l6ZT0xNiZ0aGVtZT1kYXJrXCJcclxuICAgICBzdHlsZT1cIndpZHRoOjEwMCU7IGhlaWdodDo1MDBweDsgYm9yZGVyOjA7IGJvcmRlci1yYWRpdXM6IDRweDsgb3ZlcmZsb3c6aGlkZGVuO1wiXHJcbiAgICAgdGl0bGU9XCJnaWZ0ZWQtcmlkZS14dnJieVwiXHJcbiAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhbWJpZW50LWxpZ2h0LXNlbnNvcjsgY2FtZXJhOyBlbmNyeXB0ZWQtbWVkaWE7IGdlb2xvY2F0aW9uOyBneXJvc2NvcGU7IGhpZDsgbWljcm9waG9uZTsgbWlkaTsgcGF5bWVudDsgdXNiOyB2cjsgeHItc3BhdGlhbC10cmFja2luZ1wiXHJcbiAgICAgc2FuZGJveD1cImFsbG93LWZvcm1zIGFsbG93LW1vZGFscyBhbGxvdy1wb3B1cHMgYWxsb3ctcHJlc2VudGF0aW9uIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHNcIlxyXG4gICA+PC9pZnJhbWU+YCxcclxuICAgICAgICB0aXRsZTogXCI8aW1nPlRoZSBJbWFnZSB0YWcsIGRpc3BsYXlpbmcgaW1hZ2VzLlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJBbiBpbWFnZSB0YWcgY2FuIHNob3cgYW4gaW1hZ2Ugb25saW5lIG9yIGZyb20gb24geW91IGNvbXB1dGVyLlwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgZW1iZWQ6IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vZW1iZWQvaW5zcGlyaW5nLWRldy0wdnF4aj9hdXRvcmVzaXplPTEmZm9udHNpemU9MTYmaGlkZW5hdmlnYXRpb249MSZ0aGVtZT1kYXJrXCJcclxuICAgICBzdHlsZT1cIndpZHRoOjEwMCU7IGhlaWdodDo1MDBweDsgYm9yZGVyOjA7IGJvcmRlci1yYWRpdXM6IDRweDsgb3ZlcmZsb3c6aGlkZGVuO1wiXHJcbiAgICAgdGl0bGU9XCJpbnNwaXJpbmctZGV3LTB2cXhqXCJcclxuICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGFtYmllbnQtbGlnaHQtc2Vuc29yOyBjYW1lcmE7IGVuY3J5cHRlZC1tZWRpYTsgZ2VvbG9jYXRpb247IGd5cm9zY29wZTsgaGlkOyBtaWNyb3Bob25lOyBtaWRpOyBwYXltZW50OyB1c2I7IHZyOyB4ci1zcGF0aWFsLXRyYWNraW5nXCJcclxuICAgICBzYW5kYm94PVwiYWxsb3ctZm9ybXMgYWxsb3ctbW9kYWxzIGFsbG93LXBvcHVwcyBhbGxvdy1wcmVzZW50YXRpb24gYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctc2NyaXB0c1wiXHJcbiAgID48L2lmcmFtZT5gLFxyXG4gICAgICAgIHRpdGxlOlxyXG4gICAgICAgICAgJ1RoZSBpbnB1dCB0YWcgZ2V0cyBkaWZmZXJlbnQgdHlwZXMgb2YgaW5wdXQgZnJvbSB0aGUgdXNlci4gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgLz4nLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJXaXRoIHRoZSBpbnB1dCB0YWcgYW5kIHRoZSBzZWxlY3QgYW5kIG9wdGlvbiB0YWdzIHlvdSBjYW4gYXNrIHRoZSB1c2VyIG1hbnkgZGlmZmVyZW50IHR5cGVzIG9mIHF1ZXN0aW9ucyB0byBnZXQgaGlzIGlucHV0LlwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQ1NTXCIsXHJcbiAgICBzdWJUaXRsZTogXCJTdHlsaW5nIGxhbmd1YWdlIG9mIHRoZSB3ZWJcIixcclxuICAgIGltZzogY3NzSW1hZ2UsXHJcbiAgICBwcmVyZXF1aXNpdHM6IFtcImh0bWxcIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkphdmFTY3JpcHRcIixcclxuICAgIHN1YlRpdGxlOiBcIlRoZSBQcm9ncmFtbWluZyBsYW5ndWFnZSBvZiB0aGUgd2ViXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJKYXZhU2NyaXB0IGlzIG1haW5seSBydW4gaW4gdGhlIGJyb3dzZXIsIGJ1dCBjYW4gcnVuIG9uIHNlcnZlcnMgYW5kIGFueSBvdGhlciBwbGFjZSB0b2RheS5cIixcclxuICAgIGltZzoganNJbWFnZSxcclxuICAgIHByZXJlcXVpc2l0czogW1wiaHRtbFwiLCBcImNzc1wiXSxcclxuICAgIHBhcnRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBlbWJlZDogYDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9lbWJlZC9wdXJwbGUtaHR0cC0zY3ZlbT9hdXRvcmVzaXplPTEmZXhwYW5kZGV2dG9vbHM9MSZmb250c2l6ZT0xNiZoaWRlbmF2aWdhdGlvbj0xJnRoZW1lPWRhcmtcIlxyXG4gICAgIHN0eWxlPVwid2lkdGg6MTAwJTsgaGVpZ2h0OjUwMHB4OyBib3JkZXI6MDsgYm9yZGVyLXJhZGl1czogNHB4OyBvdmVyZmxvdzpoaWRkZW47XCJcclxuICAgICB0aXRsZT1cInB1cnBsZS1odHRwLTNjdmVtXCJcclxuICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGFtYmllbnQtbGlnaHQtc2Vuc29yOyBjYW1lcmE7IGVuY3J5cHRlZC1tZWRpYTsgZ2VvbG9jYXRpb247IGd5cm9zY29wZTsgaGlkOyBtaWNyb3Bob25lOyBtaWRpOyBwYXltZW50OyB1c2I7IHZyOyB4ci1zcGF0aWFsLXRyYWNraW5nXCJcclxuICAgICBzYW5kYm94PVwiYWxsb3ctZm9ybXMgYWxsb3ctbW9kYWxzIGFsbG93LXBvcHVwcyBhbGxvdy1wcmVzZW50YXRpb24gYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctc2NyaXB0c1wiXHJcbiAgID48L2lmcmFtZT5gLFxyXG4gICAgICAgIHRpdGxlOiBcIkNvbm5lY3RpbmcgSFRNTCBhbmQgSmF2YVNjcmlwdFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJUbyBpbnNlcnQgSmF2YVNjcmlwdCBjb2RlIGluIGFuIEhUTUwgcGFnZSB3ZSB1c2UgdGhlIDxzY3JpcHQ+IHRhZy5cXG5UaGUgdHdvIG9wdGlvbnMgYXJlIHRvIHdyaXRlIHRoZSBKYXZhU2NyaXB0IGNvZGUgaW5zaWRlIHRoZSB0YWcgb3IgbGluayB0byBhIEphdmFTY3JpcHQgZmlsZSB3aXRoIGEgdXJsLlwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgZW1iZWQ6IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vZW1iZWQvZmVydmVudC1jZG4tMmUwcnQ/YXV0b3Jlc2l6ZT0xJmV4cGFuZGRldnRvb2xzPTEmZm9udHNpemU9MTQmaGlkZW5hdmlnYXRpb249MSZ0aGVtZT1kYXJrXCJcclxuICAgICBzdHlsZT1cIndpZHRoOjEwMCU7IGhlaWdodDo1MDBweDsgYm9yZGVyOjA7IGJvcmRlci1yYWRpdXM6IDRweDsgb3ZlcmZsb3c6aGlkZGVuO1wiXHJcbiAgICAgdGl0bGU9XCJmZXJ2ZW50LWNkbi0yZTBydFwiXHJcbiAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhbWJpZW50LWxpZ2h0LXNlbnNvcjsgY2FtZXJhOyBlbmNyeXB0ZWQtbWVkaWE7IGdlb2xvY2F0aW9uOyBneXJvc2NvcGU7IGhpZDsgbWljcm9waG9uZTsgbWlkaTsgcGF5bWVudDsgdXNiOyB2cjsgeHItc3BhdGlhbC10cmFja2luZ1wiXHJcbiAgICAgc2FuZGJveD1cImFsbG93LWZvcm1zIGFsbG93LW1vZGFscyBhbGxvdy1wb3B1cHMgYWxsb3ctcHJlc2VudGF0aW9uIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHNcIlxyXG4gICA+PC9pZnJhbWU+YCxcclxuICAgICAgICB0aXRsZTogXCJKYXZhU2NyaXB0IHR5cGVzIGFuZCB2YXJpYWJsZXNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiSmF2YVNjcmlwdCB2YXJpYWJsZXMgYXJlIHVzZWQgdG8gc2F2ZSBzb21lIHZhbHVlIG9yIGRhdGEgdG8gcmV1c2UgaXQgbGF0ZXIuIERlY2xhcmluZyBhbmQgdXNpbmcgYSB2YXJpYWJsZSBpcyBlYXN5IHNpbmNlIHlvdSBkb24ndCBuZWVkIHRvIHNwZWNpZnkgdGhlIHR5cGUuXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJOb2RlLmpzXCIsXHJcbiAgICBzdWJUaXRsZTogXCJKYXZhU2NyaXB0IFNlcnZlci1zaWRlXCIsXHJcbiAgICBpbWc6IG5vZGVqc0ltYWdlLFxyXG4gICAgcHJlcmVxdWlzaXRzOiBbXCJqYXZhc2NyaXB0XCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJSZWFjdFwiLFxyXG4gICAgc3ViVGl0bGU6IFwiSmF2YVNjcmlwdCBVSSBMaWJyYXJ5XCIsXHJcbiAgICBpbWc6IHJlYWN0SW1hZ2UsXHJcbiAgICBwcmVyZXF1aXNpdHM6IFtcImh0bWxcIiwgXCJjc3NcIiwgXCJqYXZhc2NyaXB0XCJdLFxyXG4gIH0sXHJcbl07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=