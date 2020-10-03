webpackHotUpdate_N_E("pages/[item]",{

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
  description: 'HTML is made out of tags. \nTags can hold values with attributes.\n For example: \n<html attribute="attribute value"',
  img: _images__WEBPACK_IMPORTED_MODULE_0__["htmlImage"],
  next: "Css",
  parts: [{
    image: "/anatomy-of-an-html-element.png",
    title: "HTML tag structure",
    description: "An html tag is made out of it's openning tag, closing tag, it's content in the middle and it's attributes and values on it's opening tag.\n There are tags the don't have closing tags like the <br/> and <img/> tags."
  }, {
    embed: "<iframe src=\"https://codesandbox.io/embed/white-cloud-zyegl?autoresize=1&codemirror=1&fontsize=15&hidenavigation=1&theme=dark\"\n     style=\"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"white-cloud-zyegl\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
    title: "HTML page structure",
    description: "An html page is the base of the website.\nIt defines the HTML version, meta data and the elements of the page.\nFrom displaying inputs to loading files, you can do a lot with a few steps in HTML",
    bottomText: 'You can create your own html files like this "index.html" or "any-name_you_want.html" and open it in your browser just by double clicking on it.'
  }, {
    embed: "<iframe src=\"https://codesandbox.io/embed/mystifying-montalcini-srutx?autoresize=1&codemirror=1&eslint=1&fontsize=14&hidenavigation=1&theme=dark\"\n     style=\"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"mystifying-montalcini-srutx\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
    title: "<a>The Anchor tag, linking the web.</a>",
    description: "An achor tag can redirect the user to any page online or other files on you machine."
  }, {
    embed: "<iframe src=\"https://codesandbox.io/embed/gifted-ride-xvrby?autoresize=1&codemirror=1&fontsize=15&theme=dark\"\n     style=\"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"gifted-ride-xvrby\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
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
    embed: "<iframe src=\"https://codesandbox.io/embed/inspiring-dew-0vqxj?autoresize=1&fontsize=16&hidenavigation=1&theme=dark\"\n     style=\"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"inspiring-dew-0vqxj\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
    title: "JavaScript types",
    description: ""
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9pdGVtcy5qcyJdLCJuYW1lcyI6WyJpdGVtcyIsIm5hbWUiLCJzdWJUaXRsZSIsImRlc2NyaXB0aW9uIiwiaW1nIiwiaHRtbEltYWdlIiwibmV4dCIsInBhcnRzIiwiaW1hZ2UiLCJ0aXRsZSIsImVtYmVkIiwiYm90dG9tVGV4dCIsImNzc0ltYWdlIiwicHJlcmVxdWlzaXRzIiwianNJbWFnZSIsIm5vZGVqc0ltYWdlIiwicmVhY3RJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUU8sSUFBTUEsS0FBSyxHQUFHLENBQ25CO0FBQ0VDLE1BQUksRUFBRSxNQURSO0FBRUVDLFVBQVEsRUFBRSw0QkFGWjtBQUdFQyxhQUFXLEVBQ1Qsc0hBSko7QUFLRUMsS0FBRyxFQUFFQyxpREFMUDtBQU1FQyxNQUFJLEVBQUUsS0FOUjtBQU9FQyxPQUFLLEVBQUUsQ0FDTDtBQUNFQyxTQUFLLEVBQUUsaUNBRFQ7QUFFRUMsU0FBSyxFQUFFLG9CQUZUO0FBR0VOLGVBQVcsRUFDVDtBQUpKLEdBREssRUFPTDtBQUNFTyxTQUFLLDRoQkFEUDtBQU9FRCxTQUFLLEVBQUUscUJBUFQ7QUFRRU4sZUFBVyxFQUNULG9NQVRKO0FBVUVRLGNBQVUsRUFDUjtBQVhKLEdBUEssRUFvQkw7QUFDRUQsU0FBSyx5akJBRFA7QUFPRUQsU0FBSyxFQUFFLHlDQVBUO0FBUUVOLGVBQVcsRUFDVDtBQVRKLEdBcEJLLEVBK0JMO0FBQ0VPLFNBQUssMmdCQURQO0FBT0VELFNBQUssRUFBRSx3Q0FQVDtBQVFFTixlQUFXLEVBQ1Q7QUFUSixHQS9CSyxFQTBDTDtBQUNFTyxTQUFLLG1oQkFEUDtBQU9FRCxTQUFLLEVBQ0gsa0ZBUko7QUFTRU4sZUFBVyxFQUNUO0FBVkosR0ExQ0s7QUFQVCxDQURtQixFQWdFbkI7QUFDRUYsTUFBSSxFQUFFLEtBRFI7QUFFRUMsVUFBUSxFQUFFLDZCQUZaO0FBR0VFLEtBQUcsRUFBRVEsZ0RBSFA7QUFJRUMsY0FBWSxFQUFFLENBQUMsTUFBRDtBQUpoQixDQWhFbUIsRUFzRW5CO0FBQ0VaLE1BQUksRUFBRSxZQURSO0FBRUVDLFVBQVEsRUFBRSxxQ0FGWjtBQUdFQyxhQUFXLEVBQ1QsNEZBSko7QUFLRUMsS0FBRyxFQUFFVSwrQ0FMUDtBQU1FRCxjQUFZLEVBQUUsQ0FBQyxNQUFELEVBQVMsS0FBVCxDQU5oQjtBQU9FTixPQUFLLEVBQUUsQ0FDTDtBQUNFRyxTQUFLLGdpQkFEUDtBQU9FRCxTQUFLLEVBQUUsZ0NBUFQ7QUFRRU4sZUFBVyxFQUNUO0FBVEosR0FESyxFQVlMO0FBQ0VPLFNBQUssbWhCQURQO0FBT0VELFNBQUssRUFBRSxrQkFQVDtBQVFFTixlQUFXLEVBQUU7QUFSZixHQVpLO0FBUFQsQ0F0RW1CLEVBcUduQjtBQUNFRixNQUFJLEVBQUUsU0FEUjtBQUVFQyxVQUFRLEVBQUUsd0JBRlo7QUFHRUUsS0FBRyxFQUFFVyxtREFIUDtBQUlFRixjQUFZLEVBQUUsQ0FBQyxZQUFEO0FBSmhCLENBckdtQixFQTJHbkI7QUFDRVosTUFBSSxFQUFFLE9BRFI7QUFFRUMsVUFBUSxFQUFFLHVCQUZaO0FBR0VFLEtBQUcsRUFBRVksa0RBSFA7QUFJRUgsY0FBWSxFQUFFLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsWUFBaEI7QUFKaEIsQ0EzR21CLENBQWQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2l0ZW1dLmI0OTM2NmQxNzhiM2Y3YWYyMDdhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGh0bWxJbWFnZSxcclxuICBjc3NJbWFnZSxcclxuICBqc0ltYWdlLFxyXG4gIG5vZGVqc0ltYWdlLFxyXG4gIHJlYWN0SW1hZ2UsXHJcbn0gZnJvbSBcIi4vaW1hZ2VzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaXRlbXMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJIVE1MXCIsXHJcbiAgICBzdWJUaXRsZTogXCJNYXJrdXAgbGFuZ3VhZ2UgZm9yIHdlYiBVSVwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdIVE1MIGlzIG1hZGUgb3V0IG9mIHRhZ3MuIFxcblRhZ3MgY2FuIGhvbGQgdmFsdWVzIHdpdGggYXR0cmlidXRlcy5cXG4gRm9yIGV4YW1wbGU6IFxcbjxodG1sIGF0dHJpYnV0ZT1cImF0dHJpYnV0ZSB2YWx1ZVwiJyxcclxuICAgIGltZzogaHRtbEltYWdlLFxyXG4gICAgbmV4dDogXCJDc3NcIixcclxuICAgIHBhcnRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpbWFnZTogXCIvYW5hdG9teS1vZi1hbi1odG1sLWVsZW1lbnQucG5nXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiSFRNTCB0YWcgc3RydWN0dXJlXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIkFuIGh0bWwgdGFnIGlzIG1hZGUgb3V0IG9mIGl0J3Mgb3Blbm5pbmcgdGFnLCBjbG9zaW5nIHRhZywgaXQncyBjb250ZW50IGluIHRoZSBtaWRkbGUgYW5kIGl0J3MgYXR0cmlidXRlcyBhbmQgdmFsdWVzIG9uIGl0J3Mgb3BlbmluZyB0YWcuXFxuIFRoZXJlIGFyZSB0YWdzIHRoZSBkb24ndCBoYXZlIGNsb3NpbmcgdGFncyBsaWtlIHRoZSA8YnIvPiBhbmQgPGltZy8+IHRhZ3MuXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBlbWJlZDogYDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9lbWJlZC93aGl0ZS1jbG91ZC16eWVnbD9hdXRvcmVzaXplPTEmY29kZW1pcnJvcj0xJmZvbnRzaXplPTE1JmhpZGVuYXZpZ2F0aW9uPTEmdGhlbWU9ZGFya1wiXHJcbiAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlOyBoZWlnaHQ6NTAwcHg7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OmhpZGRlbjtcIlxyXG4gICAgIHRpdGxlPVwid2hpdGUtY2xvdWQtenllZ2xcIlxyXG4gICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYW1iaWVudC1saWdodC1zZW5zb3I7IGNhbWVyYTsgZW5jcnlwdGVkLW1lZGlhOyBnZW9sb2NhdGlvbjsgZ3lyb3Njb3BlOyBoaWQ7IG1pY3JvcGhvbmU7IG1pZGk7IHBheW1lbnQ7IHVzYjsgdnI7IHhyLXNwYXRpYWwtdHJhY2tpbmdcIlxyXG4gICAgIHNhbmRib3g9XCJhbGxvdy1mb3JtcyBhbGxvdy1tb2RhbHMgYWxsb3ctcG9wdXBzIGFsbG93LXByZXNlbnRhdGlvbiBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1zY3JpcHRzXCJcclxuICAgPjwvaWZyYW1lPmAsXHJcbiAgICAgICAgdGl0bGU6IFwiSFRNTCBwYWdlIHN0cnVjdHVyZVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJBbiBodG1sIHBhZ2UgaXMgdGhlIGJhc2Ugb2YgdGhlIHdlYnNpdGUuXFxuSXQgZGVmaW5lcyB0aGUgSFRNTCB2ZXJzaW9uLCBtZXRhIGRhdGEgYW5kIHRoZSBlbGVtZW50cyBvZiB0aGUgcGFnZS5cXG5Gcm9tIGRpc3BsYXlpbmcgaW5wdXRzIHRvIGxvYWRpbmcgZmlsZXMsIHlvdSBjYW4gZG8gYSBsb3Qgd2l0aCBhIGZldyBzdGVwcyBpbiBIVE1MXCIsXHJcbiAgICAgICAgYm90dG9tVGV4dDpcclxuICAgICAgICAgICdZb3UgY2FuIGNyZWF0ZSB5b3VyIG93biBodG1sIGZpbGVzIGxpa2UgdGhpcyBcImluZGV4Lmh0bWxcIiBvciBcImFueS1uYW1lX3lvdV93YW50Lmh0bWxcIiBhbmQgb3BlbiBpdCBpbiB5b3VyIGJyb3dzZXIganVzdCBieSBkb3VibGUgY2xpY2tpbmcgb24gaXQuJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGVtYmVkOiBgPGlmcmFtZSBzcmM9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL215c3RpZnlpbmctbW9udGFsY2luaS1zcnV0eD9hdXRvcmVzaXplPTEmY29kZW1pcnJvcj0xJmVzbGludD0xJmZvbnRzaXplPTE0JmhpZGVuYXZpZ2F0aW9uPTEmdGhlbWU9ZGFya1wiXHJcbiAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlOyBoZWlnaHQ6NTAwcHg7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OmhpZGRlbjtcIlxyXG4gICAgIHRpdGxlPVwibXlzdGlmeWluZy1tb250YWxjaW5pLXNydXR4XCJcclxuICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGFtYmllbnQtbGlnaHQtc2Vuc29yOyBjYW1lcmE7IGVuY3J5cHRlZC1tZWRpYTsgZ2VvbG9jYXRpb247IGd5cm9zY29wZTsgaGlkOyBtaWNyb3Bob25lOyBtaWRpOyBwYXltZW50OyB1c2I7IHZyOyB4ci1zcGF0aWFsLXRyYWNraW5nXCJcclxuICAgICBzYW5kYm94PVwiYWxsb3ctZm9ybXMgYWxsb3ctbW9kYWxzIGFsbG93LXBvcHVwcyBhbGxvdy1wcmVzZW50YXRpb24gYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctc2NyaXB0c1wiXHJcbiAgID48L2lmcmFtZT5gLFxyXG4gICAgICAgIHRpdGxlOiBcIjxhPlRoZSBBbmNob3IgdGFnLCBsaW5raW5nIHRoZSB3ZWIuPC9hPlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJBbiBhY2hvciB0YWcgY2FuIHJlZGlyZWN0IHRoZSB1c2VyIHRvIGFueSBwYWdlIG9ubGluZSBvciBvdGhlciBmaWxlcyBvbiB5b3UgbWFjaGluZS5cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGVtYmVkOiBgPGlmcmFtZSBzcmM9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL2dpZnRlZC1yaWRlLXh2cmJ5P2F1dG9yZXNpemU9MSZjb2RlbWlycm9yPTEmZm9udHNpemU9MTUmdGhlbWU9ZGFya1wiXHJcbiAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlOyBoZWlnaHQ6NTAwcHg7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OmhpZGRlbjtcIlxyXG4gICAgIHRpdGxlPVwiZ2lmdGVkLXJpZGUteHZyYnlcIlxyXG4gICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYW1iaWVudC1saWdodC1zZW5zb3I7IGNhbWVyYTsgZW5jcnlwdGVkLW1lZGlhOyBnZW9sb2NhdGlvbjsgZ3lyb3Njb3BlOyBoaWQ7IG1pY3JvcGhvbmU7IG1pZGk7IHBheW1lbnQ7IHVzYjsgdnI7IHhyLXNwYXRpYWwtdHJhY2tpbmdcIlxyXG4gICAgIHNhbmRib3g9XCJhbGxvdy1mb3JtcyBhbGxvdy1tb2RhbHMgYWxsb3ctcG9wdXBzIGFsbG93LXByZXNlbnRhdGlvbiBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1zY3JpcHRzXCJcclxuICAgPjwvaWZyYW1lPmAsXHJcbiAgICAgICAgdGl0bGU6IFwiPGltZz5UaGUgSW1hZ2UgdGFnLCBkaXNwbGF5aW5nIGltYWdlcy5cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiQW4gaW1hZ2UgdGFnIGNhbiBzaG93IGFuIGltYWdlIG9ubGluZSBvciBmcm9tIG9uIHlvdSBjb21wdXRlci5cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGVtYmVkOiBgPGlmcmFtZSBzcmM9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL2luc3BpcmluZy1kZXctMHZxeGo/YXV0b3Jlc2l6ZT0xJmZvbnRzaXplPTE2JmhpZGVuYXZpZ2F0aW9uPTEmdGhlbWU9ZGFya1wiXHJcbiAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlOyBoZWlnaHQ6NTAwcHg7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OmhpZGRlbjtcIlxyXG4gICAgIHRpdGxlPVwiaW5zcGlyaW5nLWRldy0wdnF4alwiXHJcbiAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhbWJpZW50LWxpZ2h0LXNlbnNvcjsgY2FtZXJhOyBlbmNyeXB0ZWQtbWVkaWE7IGdlb2xvY2F0aW9uOyBneXJvc2NvcGU7IGhpZDsgbWljcm9waG9uZTsgbWlkaTsgcGF5bWVudDsgdXNiOyB2cjsgeHItc3BhdGlhbC10cmFja2luZ1wiXHJcbiAgICAgc2FuZGJveD1cImFsbG93LWZvcm1zIGFsbG93LW1vZGFscyBhbGxvdy1wb3B1cHMgYWxsb3ctcHJlc2VudGF0aW9uIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHNcIlxyXG4gICA+PC9pZnJhbWU+YCxcclxuICAgICAgICB0aXRsZTpcclxuICAgICAgICAgICdUaGUgaW5wdXQgdGFnIGdldHMgZGlmZmVyZW50IHR5cGVzIG9mIGlucHV0IGZyb20gdGhlIHVzZXIuIDxpbnB1dCB0eXBlPVwidGV4dFwiIC8+JyxcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiV2l0aCB0aGUgaW5wdXQgdGFnIGFuZCB0aGUgc2VsZWN0IGFuZCBvcHRpb24gdGFncyB5b3UgY2FuIGFzayB0aGUgdXNlciBtYW55IGRpZmZlcmVudCB0eXBlcyBvZiBxdWVzdGlvbnMgdG8gZ2V0IGhpcyBpbnB1dC5cIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkNTU1wiLFxyXG4gICAgc3ViVGl0bGU6IFwiU3R5bGluZyBsYW5ndWFnZSBvZiB0aGUgd2ViXCIsXHJcbiAgICBpbWc6IGNzc0ltYWdlLFxyXG4gICAgcHJlcmVxdWlzaXRzOiBbXCJodG1sXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJKYXZhU2NyaXB0XCIsXHJcbiAgICBzdWJUaXRsZTogXCJUaGUgUHJvZ3JhbW1pbmcgbGFuZ3VhZ2Ugb2YgdGhlIHdlYlwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiSmF2YVNjcmlwdCBpcyBtYWlubHkgcnVuIGluIHRoZSBicm93c2VyLCBidXQgY2FuIHJ1biBvbiBzZXJ2ZXJzIGFuZCBhbnkgb3RoZXIgcGxhY2UgdG9kYXkuXCIsXHJcbiAgICBpbWc6IGpzSW1hZ2UsXHJcbiAgICBwcmVyZXF1aXNpdHM6IFtcImh0bWxcIiwgXCJjc3NcIl0sXHJcbiAgICBwYXJ0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgZW1iZWQ6IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vZW1iZWQvcHVycGxlLWh0dHAtM2N2ZW0/YXV0b3Jlc2l6ZT0xJmV4cGFuZGRldnRvb2xzPTEmZm9udHNpemU9MTYmaGlkZW5hdmlnYXRpb249MSZ0aGVtZT1kYXJrXCJcclxuICAgICBzdHlsZT1cIndpZHRoOjEwMCU7IGhlaWdodDo1MDBweDsgYm9yZGVyOjA7IGJvcmRlci1yYWRpdXM6IDRweDsgb3ZlcmZsb3c6aGlkZGVuO1wiXHJcbiAgICAgdGl0bGU9XCJwdXJwbGUtaHR0cC0zY3ZlbVwiXHJcbiAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhbWJpZW50LWxpZ2h0LXNlbnNvcjsgY2FtZXJhOyBlbmNyeXB0ZWQtbWVkaWE7IGdlb2xvY2F0aW9uOyBneXJvc2NvcGU7IGhpZDsgbWljcm9waG9uZTsgbWlkaTsgcGF5bWVudDsgdXNiOyB2cjsgeHItc3BhdGlhbC10cmFja2luZ1wiXHJcbiAgICAgc2FuZGJveD1cImFsbG93LWZvcm1zIGFsbG93LW1vZGFscyBhbGxvdy1wb3B1cHMgYWxsb3ctcHJlc2VudGF0aW9uIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHNcIlxyXG4gICA+PC9pZnJhbWU+YCxcclxuICAgICAgICB0aXRsZTogXCJDb25uZWN0aW5nIEhUTUwgYW5kIEphdmFTY3JpcHRcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiVG8gaW5zZXJ0IEphdmFTY3JpcHQgY29kZSBpbiBhbiBIVE1MIHBhZ2Ugd2UgdXNlIHRoZSA8c2NyaXB0PiB0YWcuXFxuVGhlIHR3byBvcHRpb25zIGFyZSB0byB3cml0ZSB0aGUgSmF2YVNjcmlwdCBjb2RlIGluc2lkZSB0aGUgdGFnIG9yIGxpbmsgdG8gYSBKYXZhU2NyaXB0IGZpbGUgd2l0aCBhIHVybC5cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGVtYmVkOiBgPGlmcmFtZSBzcmM9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL2luc3BpcmluZy1kZXctMHZxeGo/YXV0b3Jlc2l6ZT0xJmZvbnRzaXplPTE2JmhpZGVuYXZpZ2F0aW9uPTEmdGhlbWU9ZGFya1wiXHJcbiAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlOyBoZWlnaHQ6NTAwcHg7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OmhpZGRlbjtcIlxyXG4gICAgIHRpdGxlPVwiaW5zcGlyaW5nLWRldy0wdnF4alwiXHJcbiAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhbWJpZW50LWxpZ2h0LXNlbnNvcjsgY2FtZXJhOyBlbmNyeXB0ZWQtbWVkaWE7IGdlb2xvY2F0aW9uOyBneXJvc2NvcGU7IGhpZDsgbWljcm9waG9uZTsgbWlkaTsgcGF5bWVudDsgdXNiOyB2cjsgeHItc3BhdGlhbC10cmFja2luZ1wiXHJcbiAgICAgc2FuZGJveD1cImFsbG93LWZvcm1zIGFsbG93LW1vZGFscyBhbGxvdy1wb3B1cHMgYWxsb3ctcHJlc2VudGF0aW9uIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHNcIlxyXG4gICA+PC9pZnJhbWU+YCxcclxuICAgICAgICB0aXRsZTogXCJKYXZhU2NyaXB0IHR5cGVzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJOb2RlLmpzXCIsXHJcbiAgICBzdWJUaXRsZTogXCJKYXZhU2NyaXB0IFNlcnZlci1zaWRlXCIsXHJcbiAgICBpbWc6IG5vZGVqc0ltYWdlLFxyXG4gICAgcHJlcmVxdWlzaXRzOiBbXCJqYXZhc2NyaXB0XCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJSZWFjdFwiLFxyXG4gICAgc3ViVGl0bGU6IFwiSmF2YVNjcmlwdCBVSSBMaWJyYXJ5XCIsXHJcbiAgICBpbWc6IHJlYWN0SW1hZ2UsXHJcbiAgICBwcmVyZXF1aXNpdHM6IFtcImh0bWxcIiwgXCJjc3NcIiwgXCJqYXZhc2NyaXB0XCJdLFxyXG4gIH0sXHJcbl07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=