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
    title: "Types and Variables",
    description: "JavaScript variables are used to save some value or data to reuse it later. Declaring and using a variable is easy since you don't need to specify the type."
  }, {
    embed: "<iframe src=\"https://codesandbox.io/embed/competent-wildflower-j362q?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark\"\n     style=\"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"competent-wildflower-j362q\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
    title: "Conditions",
    description: "Making conditions helps to decide what your code will do next. For these case we use if, else and switch statements."
  }, {
    embed: "<iframe src=\"https://codesandbox.io/embed/fervent-cdn-2e0rt?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark\"\n     style=\"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"fervent-cdn-2e0rt\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
    title: "Loops",
    description: "Many times you will find that you want to go over an array list or values of an object. There are many ways to do loops and we'll cover the basic ones here."
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9pdGVtcy5qcyJdLCJuYW1lcyI6WyJpdGVtcyIsIm5hbWUiLCJzdWJUaXRsZSIsImRlc2NyaXB0aW9uIiwiaW1nIiwiaHRtbEltYWdlIiwibmV4dCIsInBhcnRzIiwiaW1hZ2UiLCJ0aXRsZSIsImVtYmVkIiwiYm90dG9tVGV4dCIsImNzc0ltYWdlIiwicHJlcmVxdWlzaXRzIiwianNJbWFnZSIsIm5vZGVqc0ltYWdlIiwicmVhY3RJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUU8sSUFBTUEsS0FBSyxHQUFHLENBQ25CO0FBQ0VDLE1BQUksRUFBRSxNQURSO0FBRUVDLFVBQVEsRUFBRSw0QkFGWjtBQUdFQyxhQUFXLEVBQ1QsdUhBSko7QUFLRUMsS0FBRyxFQUFFQyxpREFMUDtBQU1FQyxNQUFJLEVBQUUsS0FOUjtBQU9FQyxPQUFLLEVBQUUsQ0FDTDtBQUNFQyxTQUFLLEVBQUUsaUNBRFQ7QUFFRUMsU0FBSyxFQUFFLG9CQUZUO0FBR0VOLGVBQVcsRUFDVDtBQUpKLEdBREssRUFPTDtBQUNFTyxTQUFLLCtnQkFEUDtBQU9FRCxTQUFLLEVBQUUscUJBUFQ7QUFRRU4sZUFBVyxFQUNULG9NQVRKO0FBVUVRLGNBQVUsRUFDUjtBQVhKLEdBUEssRUFvQkw7QUFDRUQsU0FBSyw0aUJBRFA7QUFPRUQsU0FBSyxFQUFFLHlDQVBUO0FBUUVOLGVBQVcsRUFDVDtBQVRKLEdBcEJLLEVBK0JMO0FBQ0VPLFNBQUssOGZBRFA7QUFPRUQsU0FBSyxFQUFFLHdDQVBUO0FBUUVOLGVBQVcsRUFDVDtBQVRKLEdBL0JLLEVBMENMO0FBQ0VPLFNBQUssbWhCQURQO0FBT0VELFNBQUssRUFDSCxrRkFSSjtBQVNFTixlQUFXLEVBQ1Q7QUFWSixHQTFDSztBQVBULENBRG1CLEVBZ0VuQjtBQUNFRixNQUFJLEVBQUUsS0FEUjtBQUVFQyxVQUFRLEVBQUUsNkJBRlo7QUFHRUUsS0FBRyxFQUFFUSxnREFIUDtBQUlFQyxjQUFZLEVBQUUsQ0FBQyxNQUFEO0FBSmhCLENBaEVtQixFQXNFbkI7QUFDRVosTUFBSSxFQUFFLFlBRFI7QUFFRUMsVUFBUSxFQUFFLHFDQUZaO0FBR0VDLGFBQVcsRUFDVCw0RkFKSjtBQUtFQyxLQUFHLEVBQUVVLCtDQUxQO0FBTUVELGNBQVksRUFBRSxDQUFDLE1BQUQsRUFBUyxLQUFULENBTmhCO0FBT0VOLE9BQUssRUFBRSxDQUNMO0FBQ0VHLFNBQUssZ2lCQURQO0FBT0VELFNBQUssRUFBRSxnQ0FQVDtBQVFFTixlQUFXLEVBQ1Q7QUFUSixHQURLLEVBWUw7QUFDRU8sU0FBSyxnaUJBRFA7QUFPRUQsU0FBSyxFQUFFLHFCQVBUO0FBUUVOLGVBQVcsRUFDVDtBQVRKLEdBWkssRUF1Qkw7QUFDRU8sU0FBSyxrakJBRFA7QUFPRUQsU0FBSyxFQUFFLFlBUFQ7QUFRRU4sZUFBVyxFQUNUO0FBVEosR0F2QkssRUFrQ0w7QUFDRU8sU0FBSyxnaUJBRFA7QUFPRUQsU0FBSyxFQUFFLE9BUFQ7QUFRRU4sZUFBVyxFQUNUO0FBVEosR0FsQ0s7QUFQVCxDQXRFbUIsRUE0SG5CO0FBQ0VGLE1BQUksRUFBRSxTQURSO0FBRUVDLFVBQVEsRUFBRSx3QkFGWjtBQUdFRSxLQUFHLEVBQUVXLG1EQUhQO0FBSUVGLGNBQVksRUFBRSxDQUFDLFlBQUQ7QUFKaEIsQ0E1SG1CLEVBa0luQjtBQUNFWixNQUFJLEVBQUUsT0FEUjtBQUVFQyxVQUFRLEVBQUUsdUJBRlo7QUFHRUUsS0FBRyxFQUFFWSxrREFIUDtBQUlFSCxjQUFZLEVBQUUsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixZQUFoQjtBQUpoQixDQWxJbUIsQ0FBZCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9baXRlbV0uOTUzZjc5YjY1ZmNhNDRmZGYxMzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgaHRtbEltYWdlLFxyXG4gIGNzc0ltYWdlLFxyXG4gIGpzSW1hZ2UsXHJcbiAgbm9kZWpzSW1hZ2UsXHJcbiAgcmVhY3RJbWFnZSxcclxufSBmcm9tIFwiLi9pbWFnZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtcyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIkhUTUxcIixcclxuICAgIHN1YlRpdGxlOiBcIk1hcmt1cCBsYW5ndWFnZSBmb3Igd2ViIFVJXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0hUTUwgaXMgbWFkZSBvdXQgb2YgdGFncy4gXFxuVGFncyBjYW4gaG9sZCB2YWx1ZXMgd2l0aCBhdHRyaWJ1dGVzLlxcbiBGb3IgZXhhbXBsZTogXFxuPGh0bWwgYXR0cmlidXRlPVwiYXR0cmlidXRlIHZhbHVlXCI+JyxcclxuICAgIGltZzogaHRtbEltYWdlLFxyXG4gICAgbmV4dDogXCJDc3NcIixcclxuICAgIHBhcnRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpbWFnZTogXCIvYW5hdG9teS1vZi1hbi1odG1sLWVsZW1lbnQucG5nXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiSFRNTCB0YWcgc3RydWN0dXJlXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIkFuIGh0bWwgdGFnIGlzIG1hZGUgb3V0IG9mIGl0J3Mgb3Blbm5pbmcgdGFnLCBjbG9zaW5nIHRhZywgaXQncyBjb250ZW50IGluIHRoZSBtaWRkbGUgYW5kIGl0J3MgYXR0cmlidXRlcyBhbmQgdmFsdWVzIG9uIGl0J3Mgb3BlbmluZyB0YWcuXFxuIFRoZXJlIGFyZSB0YWdzIHRoZSBkb24ndCBoYXZlIGNsb3NpbmcgdGFncyBsaWtlIHRoZSA8YnIvPiBhbmQgPGltZy8+IHRhZ3MuXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBlbWJlZDogYDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9lbWJlZC93aGl0ZS1jbG91ZC16eWVnbD9hdXRvcmVzaXplPTEmZm9udHNpemU9MTYmaGlkZW5hdmlnYXRpb249MSZ0aGVtZT1kYXJrXCJcclxuICAgICBzdHlsZT1cIndpZHRoOjEwMCU7IGhlaWdodDo1MDBweDsgYm9yZGVyOjA7IGJvcmRlci1yYWRpdXM6IDRweDsgb3ZlcmZsb3c6aGlkZGVuO1wiXHJcbiAgICAgdGl0bGU9XCJ3aGl0ZS1jbG91ZC16eWVnbFwiXHJcbiAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhbWJpZW50LWxpZ2h0LXNlbnNvcjsgY2FtZXJhOyBlbmNyeXB0ZWQtbWVkaWE7IGdlb2xvY2F0aW9uOyBneXJvc2NvcGU7IGhpZDsgbWljcm9waG9uZTsgbWlkaTsgcGF5bWVudDsgdXNiOyB2cjsgeHItc3BhdGlhbC10cmFja2luZ1wiXHJcbiAgICAgc2FuZGJveD1cImFsbG93LWZvcm1zIGFsbG93LW1vZGFscyBhbGxvdy1wb3B1cHMgYWxsb3ctcHJlc2VudGF0aW9uIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHNcIlxyXG4gICA+PC9pZnJhbWU+YCxcclxuICAgICAgICB0aXRsZTogXCJIVE1MIHBhZ2Ugc3RydWN0dXJlXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIkFuIGh0bWwgcGFnZSBpcyB0aGUgYmFzZSBvZiB0aGUgd2Vic2l0ZS5cXG5JdCBkZWZpbmVzIHRoZSBIVE1MIHZlcnNpb24sIG1ldGEgZGF0YSBhbmQgdGhlIGVsZW1lbnRzIG9mIHRoZSBwYWdlLlxcbkZyb20gZGlzcGxheWluZyBpbnB1dHMgdG8gbG9hZGluZyBmaWxlcywgeW91IGNhbiBkbyBhIGxvdCB3aXRoIGEgZmV3IHN0ZXBzIGluIEhUTUxcIixcclxuICAgICAgICBib3R0b21UZXh0OlxyXG4gICAgICAgICAgJ1lvdSBjYW4gY3JlYXRlIHlvdXIgb3duIGh0bWwgZmlsZXMgbGlrZSB0aGlzIFwiaW5kZXguaHRtbFwiIG9yIFwiYW55LW5hbWVfeW91X3dhbnQuaHRtbFwiIGFuZCBvcGVuIGl0IGluIHlvdXIgYnJvd3NlciBqdXN0IGJ5IGRvdWJsZSBjbGlja2luZyBvbiBpdC4nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgZW1iZWQ6IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vZW1iZWQvbXlzdGlmeWluZy1tb250YWxjaW5pLXNydXR4P2F1dG9yZXNpemU9MSZlc2xpbnQ9MSZmb250c2l6ZT0xNiZoaWRlbmF2aWdhdGlvbj0xJnRoZW1lPWRhcmtcIlxyXG4gICAgIHN0eWxlPVwid2lkdGg6MTAwJTsgaGVpZ2h0OjUwMHB4OyBib3JkZXI6MDsgYm9yZGVyLXJhZGl1czogNHB4OyBvdmVyZmxvdzpoaWRkZW47XCJcclxuICAgICB0aXRsZT1cIm15c3RpZnlpbmctbW9udGFsY2luaS1zcnV0eFwiXHJcbiAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhbWJpZW50LWxpZ2h0LXNlbnNvcjsgY2FtZXJhOyBlbmNyeXB0ZWQtbWVkaWE7IGdlb2xvY2F0aW9uOyBneXJvc2NvcGU7IGhpZDsgbWljcm9waG9uZTsgbWlkaTsgcGF5bWVudDsgdXNiOyB2cjsgeHItc3BhdGlhbC10cmFja2luZ1wiXHJcbiAgICAgc2FuZGJveD1cImFsbG93LWZvcm1zIGFsbG93LW1vZGFscyBhbGxvdy1wb3B1cHMgYWxsb3ctcHJlc2VudGF0aW9uIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHNcIlxyXG4gICA+PC9pZnJhbWU+YCxcclxuICAgICAgICB0aXRsZTogXCI8YT5UaGUgQW5jaG9yIHRhZywgbGlua2luZyB0aGUgd2ViLjwvYT5cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiQW4gYWNob3IgdGFnIGNhbiByZWRpcmVjdCB0aGUgdXNlciB0byBhbnkgcGFnZSBvbmxpbmUgb3Igb3RoZXIgZmlsZXMgb24geW91IG1hY2hpbmUuXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBlbWJlZDogYDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9lbWJlZC9naWZ0ZWQtcmlkZS14dnJieT9hdXRvcmVzaXplPTEmZm9udHNpemU9MTYmdGhlbWU9ZGFya1wiXHJcbiAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlOyBoZWlnaHQ6NTAwcHg7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OmhpZGRlbjtcIlxyXG4gICAgIHRpdGxlPVwiZ2lmdGVkLXJpZGUteHZyYnlcIlxyXG4gICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYW1iaWVudC1saWdodC1zZW5zb3I7IGNhbWVyYTsgZW5jcnlwdGVkLW1lZGlhOyBnZW9sb2NhdGlvbjsgZ3lyb3Njb3BlOyBoaWQ7IG1pY3JvcGhvbmU7IG1pZGk7IHBheW1lbnQ7IHVzYjsgdnI7IHhyLXNwYXRpYWwtdHJhY2tpbmdcIlxyXG4gICAgIHNhbmRib3g9XCJhbGxvdy1mb3JtcyBhbGxvdy1tb2RhbHMgYWxsb3ctcG9wdXBzIGFsbG93LXByZXNlbnRhdGlvbiBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1zY3JpcHRzXCJcclxuICAgPjwvaWZyYW1lPmAsXHJcbiAgICAgICAgdGl0bGU6IFwiPGltZz5UaGUgSW1hZ2UgdGFnLCBkaXNwbGF5aW5nIGltYWdlcy5cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiQW4gaW1hZ2UgdGFnIGNhbiBzaG93IGFuIGltYWdlIG9ubGluZSBvciBmcm9tIG9uIHlvdSBjb21wdXRlci5cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGVtYmVkOiBgPGlmcmFtZSBzcmM9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL2luc3BpcmluZy1kZXctMHZxeGo/YXV0b3Jlc2l6ZT0xJmZvbnRzaXplPTE2JmhpZGVuYXZpZ2F0aW9uPTEmdGhlbWU9ZGFya1wiXHJcbiAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlOyBoZWlnaHQ6NTAwcHg7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OmhpZGRlbjtcIlxyXG4gICAgIHRpdGxlPVwiaW5zcGlyaW5nLWRldy0wdnF4alwiXHJcbiAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhbWJpZW50LWxpZ2h0LXNlbnNvcjsgY2FtZXJhOyBlbmNyeXB0ZWQtbWVkaWE7IGdlb2xvY2F0aW9uOyBneXJvc2NvcGU7IGhpZDsgbWljcm9waG9uZTsgbWlkaTsgcGF5bWVudDsgdXNiOyB2cjsgeHItc3BhdGlhbC10cmFja2luZ1wiXHJcbiAgICAgc2FuZGJveD1cImFsbG93LWZvcm1zIGFsbG93LW1vZGFscyBhbGxvdy1wb3B1cHMgYWxsb3ctcHJlc2VudGF0aW9uIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHNcIlxyXG4gICA+PC9pZnJhbWU+YCxcclxuICAgICAgICB0aXRsZTpcclxuICAgICAgICAgICdUaGUgaW5wdXQgdGFnIGdldHMgZGlmZmVyZW50IHR5cGVzIG9mIGlucHV0IGZyb20gdGhlIHVzZXIuIDxpbnB1dCB0eXBlPVwidGV4dFwiIC8+JyxcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiV2l0aCB0aGUgaW5wdXQgdGFnIGFuZCB0aGUgc2VsZWN0IGFuZCBvcHRpb24gdGFncyB5b3UgY2FuIGFzayB0aGUgdXNlciBtYW55IGRpZmZlcmVudCB0eXBlcyBvZiBxdWVzdGlvbnMgdG8gZ2V0IGhpcyBpbnB1dC5cIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkNTU1wiLFxyXG4gICAgc3ViVGl0bGU6IFwiU3R5bGluZyBsYW5ndWFnZSBvZiB0aGUgd2ViXCIsXHJcbiAgICBpbWc6IGNzc0ltYWdlLFxyXG4gICAgcHJlcmVxdWlzaXRzOiBbXCJodG1sXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJKYXZhU2NyaXB0XCIsXHJcbiAgICBzdWJUaXRsZTogXCJUaGUgUHJvZ3JhbW1pbmcgbGFuZ3VhZ2Ugb2YgdGhlIHdlYlwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiSmF2YVNjcmlwdCBpcyBtYWlubHkgcnVuIGluIHRoZSBicm93c2VyLCBidXQgY2FuIHJ1biBvbiBzZXJ2ZXJzIGFuZCBhbnkgb3RoZXIgcGxhY2UgdG9kYXkuXCIsXHJcbiAgICBpbWc6IGpzSW1hZ2UsXHJcbiAgICBwcmVyZXF1aXNpdHM6IFtcImh0bWxcIiwgXCJjc3NcIl0sXHJcbiAgICBwYXJ0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgZW1iZWQ6IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vZW1iZWQvcHVycGxlLWh0dHAtM2N2ZW0/YXV0b3Jlc2l6ZT0xJmV4cGFuZGRldnRvb2xzPTEmZm9udHNpemU9MTYmaGlkZW5hdmlnYXRpb249MSZ0aGVtZT1kYXJrXCJcclxuICAgICBzdHlsZT1cIndpZHRoOjEwMCU7IGhlaWdodDo1MDBweDsgYm9yZGVyOjA7IGJvcmRlci1yYWRpdXM6IDRweDsgb3ZlcmZsb3c6aGlkZGVuO1wiXHJcbiAgICAgdGl0bGU9XCJwdXJwbGUtaHR0cC0zY3ZlbVwiXHJcbiAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhbWJpZW50LWxpZ2h0LXNlbnNvcjsgY2FtZXJhOyBlbmNyeXB0ZWQtbWVkaWE7IGdlb2xvY2F0aW9uOyBneXJvc2NvcGU7IGhpZDsgbWljcm9waG9uZTsgbWlkaTsgcGF5bWVudDsgdXNiOyB2cjsgeHItc3BhdGlhbC10cmFja2luZ1wiXHJcbiAgICAgc2FuZGJveD1cImFsbG93LWZvcm1zIGFsbG93LW1vZGFscyBhbGxvdy1wb3B1cHMgYWxsb3ctcHJlc2VudGF0aW9uIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHNcIlxyXG4gICA+PC9pZnJhbWU+YCxcclxuICAgICAgICB0aXRsZTogXCJDb25uZWN0aW5nIEhUTUwgYW5kIEphdmFTY3JpcHRcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiVG8gaW5zZXJ0IEphdmFTY3JpcHQgY29kZSBpbiBhbiBIVE1MIHBhZ2Ugd2UgdXNlIHRoZSA8c2NyaXB0PiB0YWcuXFxuVGhlIHR3byBvcHRpb25zIGFyZSB0byB3cml0ZSB0aGUgSmF2YVNjcmlwdCBjb2RlIGluc2lkZSB0aGUgdGFnIG9yIGxpbmsgdG8gYSBKYXZhU2NyaXB0IGZpbGUgd2l0aCBhIHVybC5cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGVtYmVkOiBgPGlmcmFtZSBzcmM9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL2ZlcnZlbnQtY2RuLTJlMHJ0P2F1dG9yZXNpemU9MSZleHBhbmRkZXZ0b29scz0xJmZvbnRzaXplPTE0JmhpZGVuYXZpZ2F0aW9uPTEmdGhlbWU9ZGFya1wiXHJcbiAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlOyBoZWlnaHQ6NTAwcHg7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OmhpZGRlbjtcIlxyXG4gICAgIHRpdGxlPVwiZmVydmVudC1jZG4tMmUwcnRcIlxyXG4gICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYW1iaWVudC1saWdodC1zZW5zb3I7IGNhbWVyYTsgZW5jcnlwdGVkLW1lZGlhOyBnZW9sb2NhdGlvbjsgZ3lyb3Njb3BlOyBoaWQ7IG1pY3JvcGhvbmU7IG1pZGk7IHBheW1lbnQ7IHVzYjsgdnI7IHhyLXNwYXRpYWwtdHJhY2tpbmdcIlxyXG4gICAgIHNhbmRib3g9XCJhbGxvdy1mb3JtcyBhbGxvdy1tb2RhbHMgYWxsb3ctcG9wdXBzIGFsbG93LXByZXNlbnRhdGlvbiBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1zY3JpcHRzXCJcclxuICAgPjwvaWZyYW1lPmAsXHJcbiAgICAgICAgdGl0bGU6IFwiVHlwZXMgYW5kIFZhcmlhYmxlc1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJKYXZhU2NyaXB0IHZhcmlhYmxlcyBhcmUgdXNlZCB0byBzYXZlIHNvbWUgdmFsdWUgb3IgZGF0YSB0byByZXVzZSBpdCBsYXRlci4gRGVjbGFyaW5nIGFuZCB1c2luZyBhIHZhcmlhYmxlIGlzIGVhc3kgc2luY2UgeW91IGRvbid0IG5lZWQgdG8gc3BlY2lmeSB0aGUgdHlwZS5cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGVtYmVkOiBgPGlmcmFtZSBzcmM9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL2NvbXBldGVudC13aWxkZmxvd2VyLWozNjJxP2F1dG9yZXNpemU9MSZleHBhbmRkZXZ0b29scz0xJmZvbnRzaXplPTE0JmhpZGVuYXZpZ2F0aW9uPTEmdGhlbWU9ZGFya1wiXHJcbiAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlOyBoZWlnaHQ6NTAwcHg7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OmhpZGRlbjtcIlxyXG4gICAgIHRpdGxlPVwiY29tcGV0ZW50LXdpbGRmbG93ZXItajM2MnFcIlxyXG4gICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYW1iaWVudC1saWdodC1zZW5zb3I7IGNhbWVyYTsgZW5jcnlwdGVkLW1lZGlhOyBnZW9sb2NhdGlvbjsgZ3lyb3Njb3BlOyBoaWQ7IG1pY3JvcGhvbmU7IG1pZGk7IHBheW1lbnQ7IHVzYjsgdnI7IHhyLXNwYXRpYWwtdHJhY2tpbmdcIlxyXG4gICAgIHNhbmRib3g9XCJhbGxvdy1mb3JtcyBhbGxvdy1tb2RhbHMgYWxsb3ctcG9wdXBzIGFsbG93LXByZXNlbnRhdGlvbiBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1zY3JpcHRzXCJcclxuICAgPjwvaWZyYW1lPmAsXHJcbiAgICAgICAgdGl0bGU6IFwiQ29uZGl0aW9uc1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJNYWtpbmcgY29uZGl0aW9ucyBoZWxwcyB0byBkZWNpZGUgd2hhdCB5b3VyIGNvZGUgd2lsbCBkbyBuZXh0LiBGb3IgdGhlc2UgY2FzZSB3ZSB1c2UgaWYsIGVsc2UgYW5kIHN3aXRjaCBzdGF0ZW1lbnRzLlwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgZW1iZWQ6IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vZW1iZWQvZmVydmVudC1jZG4tMmUwcnQ/YXV0b3Jlc2l6ZT0xJmV4cGFuZGRldnRvb2xzPTEmZm9udHNpemU9MTQmaGlkZW5hdmlnYXRpb249MSZ0aGVtZT1kYXJrXCJcclxuICAgICBzdHlsZT1cIndpZHRoOjEwMCU7IGhlaWdodDo1MDBweDsgYm9yZGVyOjA7IGJvcmRlci1yYWRpdXM6IDRweDsgb3ZlcmZsb3c6aGlkZGVuO1wiXHJcbiAgICAgdGl0bGU9XCJmZXJ2ZW50LWNkbi0yZTBydFwiXHJcbiAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhbWJpZW50LWxpZ2h0LXNlbnNvcjsgY2FtZXJhOyBlbmNyeXB0ZWQtbWVkaWE7IGdlb2xvY2F0aW9uOyBneXJvc2NvcGU7IGhpZDsgbWljcm9waG9uZTsgbWlkaTsgcGF5bWVudDsgdXNiOyB2cjsgeHItc3BhdGlhbC10cmFja2luZ1wiXHJcbiAgICAgc2FuZGJveD1cImFsbG93LWZvcm1zIGFsbG93LW1vZGFscyBhbGxvdy1wb3B1cHMgYWxsb3ctcHJlc2VudGF0aW9uIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHNcIlxyXG4gICA+PC9pZnJhbWU+YCxcclxuICAgICAgICB0aXRsZTogXCJMb29wc1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJNYW55IHRpbWVzIHlvdSB3aWxsIGZpbmQgdGhhdCB5b3Ugd2FudCB0byBnbyBvdmVyIGFuIGFycmF5IGxpc3Qgb3IgdmFsdWVzIG9mIGFuIG9iamVjdC4gVGhlcmUgYXJlIG1hbnkgd2F5cyB0byBkbyBsb29wcyBhbmQgd2UnbGwgY292ZXIgdGhlIGJhc2ljIG9uZXMgaGVyZS5cIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIk5vZGUuanNcIixcclxuICAgIHN1YlRpdGxlOiBcIkphdmFTY3JpcHQgU2VydmVyLXNpZGVcIixcclxuICAgIGltZzogbm9kZWpzSW1hZ2UsXHJcbiAgICBwcmVyZXF1aXNpdHM6IFtcImphdmFzY3JpcHRcIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlJlYWN0XCIsXHJcbiAgICBzdWJUaXRsZTogXCJKYXZhU2NyaXB0IFVJIExpYnJhcnlcIixcclxuICAgIGltZzogcmVhY3RJbWFnZSxcclxuICAgIHByZXJlcXVpc2l0czogW1wiaHRtbFwiLCBcImNzc1wiLCBcImphdmFzY3JpcHRcIl0sXHJcbiAgfSxcclxuXTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==