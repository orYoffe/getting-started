webpackHotUpdate_N_E("pages/[item]",{

/***/ "./util/data/js.js":
/*!*************************!*\
  !*** ./util/data/js.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images */ "./util/images.js");

var js = {
  name: "JavaScript",
  subTitle: "The Programming language of the web",
  description: "JavaScript is mainly run in the browser, but can run on servers and any other place today.",
  next: "node.js",
  img: _images__WEBPACK_IMPORTED_MODULE_0__["jsImage"],
  prerequisits: ["html", "css"],
  parts: [{
    embed: "<iframe src=\"https://codesandbox.io/embed/purple-http-3cvem?autoresize=1&expanddevtools=1&fontsize=16&hidenavigation=1&theme=dark\"\n     style=\"width:100%; height:1000px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"purple-http-3cvem\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
    title: "Connecting HTML and JavaScript",
    description: "To insert JavaScript code in an HTML page we use the <script> tag.\nThe two options are to write the JavaScript code inside the tag or link to a JavaScript file with a url."
  }, {
    embed: "<iframe src=\"https://codesandbox.io/embed/fervent-cdn-2e0rt?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark\"\n     style=\"width:100%; height:1000px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"fervent-cdn-2e0rt\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
    title: "Types and Variables",
    description: "JavaScript variables are used to save some value or data to reuse it later. Declaring and using a variable is easy since you don't need to specify the type."
  }, {
    embed: "<iframe src=\"https://codesandbox.io/embed/competent-wildflower-j362q?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark\"\n     style=\"width:100%; height:1000px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"Conditions\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
    title: "Conditions",
    description: "Making conditions helps to decide what your code will do next. For these case we use if, else and switch statements."
  }, {
    embed: "<iframe src=\"https://codesandbox.io/embed/practical-sky-94t0g?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark\"\n     style=\"width:100%; height:1000px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"Functions\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
    title: "Functions",
    description: "Functions are blocks of code you can declare to call (execute) later at the right time. They are very useful in order to reuse specific code actions."
  }, {
    embed: "<iframe src=\"https://codesandbox.io/embed/romantic-aryabhata-jf1pi?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark\"\n     style=\"width:100%; height:1000px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"Loops\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
    title: "Loops",
    description: "Many times you will find that you want to go over an array list or values of an object. There are many ways to do loops and we'll cover the basic ones here."
  }, {
    embed: "<iframe src=\"https://codesandbox.io/embed/silent-firefly-x0hsr?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark\"\n     style=\"width:100%; height:1000px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"Changing the DOM\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
    title: "Changing the DOM (the HTML or the page)",
    description: "To make websites interactive you might want to change the page by adding different styles or showing different data. To do that we fetch the element (html tag) that we want to change and make our changes on it."
  }, {
    embed: "<iframe src=\"https://codesandbox.io/embed/admiring-river-k0nsk?autoresize=1&fontsize=16&hidenavigation=1&theme=dark\"\n     style=\"width:100%; height:1000px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"Events in the browser\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
    title: "Events in the browser",
    description: "Every tag on the page has many events that you can listen to and assign a function to be called when that event happens. Some of the basic ones are click (a left click of the mouse on the tag), hover, keydown (when a user clicks a key on the keyboard) and many more events."
  }, {
    embed: "<iframe src=\"https://codesandbox.io/embed/exciting-fog-fps96?autoresize=1&expanddevtools=1&fontsize=16&hidenavigation=1&theme=dark\"\n     style=\"width:100%; height:1000px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"Fetching data and Promises\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
    title: "Fetching data and Promises",
    description: "Fetching data is very common on the web, whether it is data that you show on the page like text or numbers or something else you need to show something to users. Often in JavaScript when fetching data, promises are in use.",
    bottomText: "You can simply open this URL https://jsonplaceholder.typicode.com/users in the browser and see the data that is being returned."
  }, {
    embed: "<iframe src=\"https://codesandbox.io/embed/relaxed-waterfall-fcdj4?autoresize=1&fontsize=16&hidenavigation=1&theme=dark\"\n     style=\"width:100%; height:1000px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"relaxed-waterfall-fcdj4\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
    title: "Libraries (other people's code)",
    description: "Many times you would find other people wrote a library (code) that you could use to build your website. A bit of searching online with the text 'html', 'css' or 'javascript' you could find a lot of useful libraries, tools, widgets and many documentation of how to implement other people's code to help you out. The community is great and everyone uses other people's code inside of their own websites to develop stuff faster and easier. It is common to find many articles explaining how to do things with different libraries, even though they are not connected to the official library documentation. One example is having a map on your site with the leafletjs library. If you're interested in further learning about this particular library, go to https://leafletjs.com/examples/quick-start/"
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (js);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9kYXRhL2pzLmpzIl0sIm5hbWVzIjpbImpzIiwibmFtZSIsInN1YlRpdGxlIiwiZGVzY3JpcHRpb24iLCJuZXh0IiwiaW1nIiwianNJbWFnZSIsInByZXJlcXVpc2l0cyIsInBhcnRzIiwiZW1iZWQiLCJ0aXRsZSIsImJvdHRvbVRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFNQSxFQUFFLEdBQUc7QUFDVEMsTUFBSSxFQUFFLFlBREc7QUFFVEMsVUFBUSxFQUFFLHFDQUZEO0FBR1RDLGFBQVcsRUFDVCw0RkFKTztBQUtUQyxNQUFJLEVBQUUsU0FMRztBQU1UQyxLQUFHLEVBQUVDLCtDQU5JO0FBT1RDLGNBQVksRUFBRSxDQUFDLE1BQUQsRUFBUyxLQUFULENBUEw7QUFRVEMsT0FBSyxFQUFFLENBQ0w7QUFDRUMsU0FBSyxpaUJBRFA7QUFPRUMsU0FBSyxFQUFFLGdDQVBUO0FBUUVQLGVBQVcsRUFDVDtBQVRKLEdBREssRUFZTDtBQUNFTSxTQUFLLGlpQkFEUDtBQU9FQyxTQUFLLEVBQUUscUJBUFQ7QUFRRVAsZUFBVyxFQUNUO0FBVEosR0FaSyxFQXVCTDtBQUNFTSxTQUFLLG1pQkFEUDtBQU9FQyxTQUFLLEVBQUUsWUFQVDtBQVFFUCxlQUFXLEVBQ1Q7QUFUSixHQXZCSyxFQWtDTDtBQUNFTSxTQUFLLDJoQkFEUDtBQU9FQyxTQUFLLEVBQUUsV0FQVDtBQVFFUCxlQUFXLEVBQ1Q7QUFUSixHQWxDSyxFQTZDTDtBQUNFTSxTQUFLLDRoQkFEUDtBQU9FQyxTQUFLLEVBQUUsT0FQVDtBQVFFUCxlQUFXLEVBQ1Q7QUFUSixHQTdDSyxFQXdETDtBQUNFTSxTQUFLLG1pQkFEUDtBQU9FQyxTQUFLLEVBQUUseUNBUFQ7QUFRRVAsZUFBVyxFQUNUO0FBVEosR0F4REssRUFtRUw7QUFDRU0sU0FBSyx1aEJBRFA7QUFPRUMsU0FBSyxFQUFFLHVCQVBUO0FBUUVQLGVBQVcsRUFDVDtBQVRKLEdBbkVLLEVBOEVMO0FBQ0VNLFNBQUssMmlCQURQO0FBT0VDLFNBQUssRUFBRSw0QkFQVDtBQVFFUCxlQUFXLEVBQ1QsZ09BVEo7QUFVRVEsY0FBVSxFQUNSO0FBWEosR0E5RUssRUEyRkw7QUFDRUYsU0FBSyw0aEJBRFA7QUFPRUMsU0FBSyxFQUFFLGlDQVBUO0FBUUVQLGVBQVcsRUFDVDtBQVRKLEdBM0ZLO0FBUkUsQ0FBWDtBQWlIZUgsaUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2l0ZW1dLjUyNWMwYzgxMzM4MzFiOGQ3ZGU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc0ltYWdlIH0gZnJvbSBcIi4uL2ltYWdlc1wiO1xyXG5cclxuY29uc3QganMgPSB7XHJcbiAgbmFtZTogXCJKYXZhU2NyaXB0XCIsXHJcbiAgc3ViVGl0bGU6IFwiVGhlIFByb2dyYW1taW5nIGxhbmd1YWdlIG9mIHRoZSB3ZWJcIixcclxuICBkZXNjcmlwdGlvbjpcclxuICAgIFwiSmF2YVNjcmlwdCBpcyBtYWlubHkgcnVuIGluIHRoZSBicm93c2VyLCBidXQgY2FuIHJ1biBvbiBzZXJ2ZXJzIGFuZCBhbnkgb3RoZXIgcGxhY2UgdG9kYXkuXCIsXHJcbiAgbmV4dDogXCJub2RlLmpzXCIsXHJcbiAgaW1nOiBqc0ltYWdlLFxyXG4gIHByZXJlcXVpc2l0czogW1wiaHRtbFwiLCBcImNzc1wiXSxcclxuICBwYXJ0czogW1xyXG4gICAge1xyXG4gICAgICBlbWJlZDogYDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9lbWJlZC9wdXJwbGUtaHR0cC0zY3ZlbT9hdXRvcmVzaXplPTEmZXhwYW5kZGV2dG9vbHM9MSZmb250c2l6ZT0xNiZoaWRlbmF2aWdhdGlvbj0xJnRoZW1lPWRhcmtcIlxyXG4gICAgIHN0eWxlPVwid2lkdGg6MTAwJTsgaGVpZ2h0OjEwMDBweDsgYm9yZGVyOjA7IGJvcmRlci1yYWRpdXM6IDRweDsgb3ZlcmZsb3c6aGlkZGVuO1wiXHJcbiAgICAgdGl0bGU9XCJwdXJwbGUtaHR0cC0zY3ZlbVwiXHJcbiAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhbWJpZW50LWxpZ2h0LXNlbnNvcjsgY2FtZXJhOyBlbmNyeXB0ZWQtbWVkaWE7IGdlb2xvY2F0aW9uOyBneXJvc2NvcGU7IGhpZDsgbWljcm9waG9uZTsgbWlkaTsgcGF5bWVudDsgdXNiOyB2cjsgeHItc3BhdGlhbC10cmFja2luZ1wiXHJcbiAgICAgc2FuZGJveD1cImFsbG93LWZvcm1zIGFsbG93LW1vZGFscyBhbGxvdy1wb3B1cHMgYWxsb3ctcHJlc2VudGF0aW9uIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHNcIlxyXG4gICA+PC9pZnJhbWU+YCxcclxuICAgICAgdGl0bGU6IFwiQ29ubmVjdGluZyBIVE1MIGFuZCBKYXZhU2NyaXB0XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiVG8gaW5zZXJ0IEphdmFTY3JpcHQgY29kZSBpbiBhbiBIVE1MIHBhZ2Ugd2UgdXNlIHRoZSA8c2NyaXB0PiB0YWcuXFxuVGhlIHR3byBvcHRpb25zIGFyZSB0byB3cml0ZSB0aGUgSmF2YVNjcmlwdCBjb2RlIGluc2lkZSB0aGUgdGFnIG9yIGxpbmsgdG8gYSBKYXZhU2NyaXB0IGZpbGUgd2l0aCBhIHVybC5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGVtYmVkOiBgPGlmcmFtZSBzcmM9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL2ZlcnZlbnQtY2RuLTJlMHJ0P2F1dG9yZXNpemU9MSZleHBhbmRkZXZ0b29scz0xJmZvbnRzaXplPTE0JmhpZGVuYXZpZ2F0aW9uPTEmdGhlbWU9ZGFya1wiXHJcbiAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlOyBoZWlnaHQ6MTAwMHB4OyBib3JkZXI6MDsgYm9yZGVyLXJhZGl1czogNHB4OyBvdmVyZmxvdzpoaWRkZW47XCJcclxuICAgICB0aXRsZT1cImZlcnZlbnQtY2RuLTJlMHJ0XCJcclxuICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGFtYmllbnQtbGlnaHQtc2Vuc29yOyBjYW1lcmE7IGVuY3J5cHRlZC1tZWRpYTsgZ2VvbG9jYXRpb247IGd5cm9zY29wZTsgaGlkOyBtaWNyb3Bob25lOyBtaWRpOyBwYXltZW50OyB1c2I7IHZyOyB4ci1zcGF0aWFsLXRyYWNraW5nXCJcclxuICAgICBzYW5kYm94PVwiYWxsb3ctZm9ybXMgYWxsb3ctbW9kYWxzIGFsbG93LXBvcHVwcyBhbGxvdy1wcmVzZW50YXRpb24gYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctc2NyaXB0c1wiXHJcbiAgID48L2lmcmFtZT5gLFxyXG4gICAgICB0aXRsZTogXCJUeXBlcyBhbmQgVmFyaWFibGVzXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiSmF2YVNjcmlwdCB2YXJpYWJsZXMgYXJlIHVzZWQgdG8gc2F2ZSBzb21lIHZhbHVlIG9yIGRhdGEgdG8gcmV1c2UgaXQgbGF0ZXIuIERlY2xhcmluZyBhbmQgdXNpbmcgYSB2YXJpYWJsZSBpcyBlYXN5IHNpbmNlIHlvdSBkb24ndCBuZWVkIHRvIHNwZWNpZnkgdGhlIHR5cGUuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBlbWJlZDogYDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9lbWJlZC9jb21wZXRlbnQtd2lsZGZsb3dlci1qMzYycT9hdXRvcmVzaXplPTEmZXhwYW5kZGV2dG9vbHM9MSZmb250c2l6ZT0xNCZoaWRlbmF2aWdhdGlvbj0xJnRoZW1lPWRhcmtcIlxyXG4gICAgIHN0eWxlPVwid2lkdGg6MTAwJTsgaGVpZ2h0OjEwMDBweDsgYm9yZGVyOjA7IGJvcmRlci1yYWRpdXM6IDRweDsgb3ZlcmZsb3c6aGlkZGVuO1wiXHJcbiAgICAgdGl0bGU9XCJDb25kaXRpb25zXCJcclxuICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGFtYmllbnQtbGlnaHQtc2Vuc29yOyBjYW1lcmE7IGVuY3J5cHRlZC1tZWRpYTsgZ2VvbG9jYXRpb247IGd5cm9zY29wZTsgaGlkOyBtaWNyb3Bob25lOyBtaWRpOyBwYXltZW50OyB1c2I7IHZyOyB4ci1zcGF0aWFsLXRyYWNraW5nXCJcclxuICAgICBzYW5kYm94PVwiYWxsb3ctZm9ybXMgYWxsb3ctbW9kYWxzIGFsbG93LXBvcHVwcyBhbGxvdy1wcmVzZW50YXRpb24gYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctc2NyaXB0c1wiXHJcbiAgID48L2lmcmFtZT5gLFxyXG4gICAgICB0aXRsZTogXCJDb25kaXRpb25zXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiTWFraW5nIGNvbmRpdGlvbnMgaGVscHMgdG8gZGVjaWRlIHdoYXQgeW91ciBjb2RlIHdpbGwgZG8gbmV4dC4gRm9yIHRoZXNlIGNhc2Ugd2UgdXNlIGlmLCBlbHNlIGFuZCBzd2l0Y2ggc3RhdGVtZW50cy5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGVtYmVkOiBgPGlmcmFtZSBzcmM9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL3ByYWN0aWNhbC1za3ktOTR0MGc/YXV0b3Jlc2l6ZT0xJmV4cGFuZGRldnRvb2xzPTEmZm9udHNpemU9MTQmaGlkZW5hdmlnYXRpb249MSZ0aGVtZT1kYXJrXCJcclxuICAgICBzdHlsZT1cIndpZHRoOjEwMCU7IGhlaWdodDoxMDAwcHg7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OmhpZGRlbjtcIlxyXG4gICAgIHRpdGxlPVwiRnVuY3Rpb25zXCJcclxuICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGFtYmllbnQtbGlnaHQtc2Vuc29yOyBjYW1lcmE7IGVuY3J5cHRlZC1tZWRpYTsgZ2VvbG9jYXRpb247IGd5cm9zY29wZTsgaGlkOyBtaWNyb3Bob25lOyBtaWRpOyBwYXltZW50OyB1c2I7IHZyOyB4ci1zcGF0aWFsLXRyYWNraW5nXCJcclxuICAgICBzYW5kYm94PVwiYWxsb3ctZm9ybXMgYWxsb3ctbW9kYWxzIGFsbG93LXBvcHVwcyBhbGxvdy1wcmVzZW50YXRpb24gYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctc2NyaXB0c1wiXHJcbiAgID48L2lmcmFtZT5gLFxyXG4gICAgICB0aXRsZTogXCJGdW5jdGlvbnNcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJGdW5jdGlvbnMgYXJlIGJsb2NrcyBvZiBjb2RlIHlvdSBjYW4gZGVjbGFyZSB0byBjYWxsIChleGVjdXRlKSBsYXRlciBhdCB0aGUgcmlnaHQgdGltZS4gVGhleSBhcmUgdmVyeSB1c2VmdWwgaW4gb3JkZXIgdG8gcmV1c2Ugc3BlY2lmaWMgY29kZSBhY3Rpb25zLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZW1iZWQ6IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vZW1iZWQvcm9tYW50aWMtYXJ5YWJoYXRhLWpmMXBpP2F1dG9yZXNpemU9MSZleHBhbmRkZXZ0b29scz0xJmZvbnRzaXplPTE0JmhpZGVuYXZpZ2F0aW9uPTEmdGhlbWU9ZGFya1wiXHJcbiAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlOyBoZWlnaHQ6MTAwMHB4OyBib3JkZXI6MDsgYm9yZGVyLXJhZGl1czogNHB4OyBvdmVyZmxvdzpoaWRkZW47XCJcclxuICAgICB0aXRsZT1cIkxvb3BzXCJcclxuICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGFtYmllbnQtbGlnaHQtc2Vuc29yOyBjYW1lcmE7IGVuY3J5cHRlZC1tZWRpYTsgZ2VvbG9jYXRpb247IGd5cm9zY29wZTsgaGlkOyBtaWNyb3Bob25lOyBtaWRpOyBwYXltZW50OyB1c2I7IHZyOyB4ci1zcGF0aWFsLXRyYWNraW5nXCJcclxuICAgICBzYW5kYm94PVwiYWxsb3ctZm9ybXMgYWxsb3ctbW9kYWxzIGFsbG93LXBvcHVwcyBhbGxvdy1wcmVzZW50YXRpb24gYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctc2NyaXB0c1wiXHJcbiAgID48L2lmcmFtZT5gLFxyXG4gICAgICB0aXRsZTogXCJMb29wc1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIk1hbnkgdGltZXMgeW91IHdpbGwgZmluZCB0aGF0IHlvdSB3YW50IHRvIGdvIG92ZXIgYW4gYXJyYXkgbGlzdCBvciB2YWx1ZXMgb2YgYW4gb2JqZWN0LiBUaGVyZSBhcmUgbWFueSB3YXlzIHRvIGRvIGxvb3BzIGFuZCB3ZSdsbCBjb3ZlciB0aGUgYmFzaWMgb25lcyBoZXJlLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZW1iZWQ6IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vZW1iZWQvc2lsZW50LWZpcmVmbHkteDBoc3I/YXV0b3Jlc2l6ZT0xJmV4cGFuZGRldnRvb2xzPTEmZm9udHNpemU9MTQmaGlkZW5hdmlnYXRpb249MSZ0aGVtZT1kYXJrXCJcclxuICAgICBzdHlsZT1cIndpZHRoOjEwMCU7IGhlaWdodDoxMDAwcHg7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OmhpZGRlbjtcIlxyXG4gICAgIHRpdGxlPVwiQ2hhbmdpbmcgdGhlIERPTVwiXHJcbiAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhbWJpZW50LWxpZ2h0LXNlbnNvcjsgY2FtZXJhOyBlbmNyeXB0ZWQtbWVkaWE7IGdlb2xvY2F0aW9uOyBneXJvc2NvcGU7IGhpZDsgbWljcm9waG9uZTsgbWlkaTsgcGF5bWVudDsgdXNiOyB2cjsgeHItc3BhdGlhbC10cmFja2luZ1wiXHJcbiAgICAgc2FuZGJveD1cImFsbG93LWZvcm1zIGFsbG93LW1vZGFscyBhbGxvdy1wb3B1cHMgYWxsb3ctcHJlc2VudGF0aW9uIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHNcIlxyXG4gICA+PC9pZnJhbWU+YCxcclxuICAgICAgdGl0bGU6IFwiQ2hhbmdpbmcgdGhlIERPTSAodGhlIEhUTUwgb3IgdGhlIHBhZ2UpXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiVG8gbWFrZSB3ZWJzaXRlcyBpbnRlcmFjdGl2ZSB5b3UgbWlnaHQgd2FudCB0byBjaGFuZ2UgdGhlIHBhZ2UgYnkgYWRkaW5nIGRpZmZlcmVudCBzdHlsZXMgb3Igc2hvd2luZyBkaWZmZXJlbnQgZGF0YS4gVG8gZG8gdGhhdCB3ZSBmZXRjaCB0aGUgZWxlbWVudCAoaHRtbCB0YWcpIHRoYXQgd2Ugd2FudCB0byBjaGFuZ2UgYW5kIG1ha2Ugb3VyIGNoYW5nZXMgb24gaXQuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBlbWJlZDogYDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9lbWJlZC9hZG1pcmluZy1yaXZlci1rMG5zaz9hdXRvcmVzaXplPTEmZm9udHNpemU9MTYmaGlkZW5hdmlnYXRpb249MSZ0aGVtZT1kYXJrXCJcclxuICAgICBzdHlsZT1cIndpZHRoOjEwMCU7IGhlaWdodDoxMDAwcHg7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OmhpZGRlbjtcIlxyXG4gICAgIHRpdGxlPVwiRXZlbnRzIGluIHRoZSBicm93c2VyXCJcclxuICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGFtYmllbnQtbGlnaHQtc2Vuc29yOyBjYW1lcmE7IGVuY3J5cHRlZC1tZWRpYTsgZ2VvbG9jYXRpb247IGd5cm9zY29wZTsgaGlkOyBtaWNyb3Bob25lOyBtaWRpOyBwYXltZW50OyB1c2I7IHZyOyB4ci1zcGF0aWFsLXRyYWNraW5nXCJcclxuICAgICBzYW5kYm94PVwiYWxsb3ctZm9ybXMgYWxsb3ctbW9kYWxzIGFsbG93LXBvcHVwcyBhbGxvdy1wcmVzZW50YXRpb24gYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctc2NyaXB0c1wiXHJcbiAgID48L2lmcmFtZT5gLFxyXG4gICAgICB0aXRsZTogXCJFdmVudHMgaW4gdGhlIGJyb3dzZXJcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJFdmVyeSB0YWcgb24gdGhlIHBhZ2UgaGFzIG1hbnkgZXZlbnRzIHRoYXQgeW91IGNhbiBsaXN0ZW4gdG8gYW5kIGFzc2lnbiBhIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoYXQgZXZlbnQgaGFwcGVucy4gU29tZSBvZiB0aGUgYmFzaWMgb25lcyBhcmUgY2xpY2sgKGEgbGVmdCBjbGljayBvZiB0aGUgbW91c2Ugb24gdGhlIHRhZyksIGhvdmVyLCBrZXlkb3duICh3aGVuIGEgdXNlciBjbGlja3MgYSBrZXkgb24gdGhlIGtleWJvYXJkKSBhbmQgbWFueSBtb3JlIGV2ZW50cy5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGVtYmVkOiBgPGlmcmFtZSBzcmM9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL2V4Y2l0aW5nLWZvZy1mcHM5Nj9hdXRvcmVzaXplPTEmZXhwYW5kZGV2dG9vbHM9MSZmb250c2l6ZT0xNiZoaWRlbmF2aWdhdGlvbj0xJnRoZW1lPWRhcmtcIlxyXG4gICAgIHN0eWxlPVwid2lkdGg6MTAwJTsgaGVpZ2h0OjEwMDBweDsgYm9yZGVyOjA7IGJvcmRlci1yYWRpdXM6IDRweDsgb3ZlcmZsb3c6aGlkZGVuO1wiXHJcbiAgICAgdGl0bGU9XCJGZXRjaGluZyBkYXRhIGFuZCBQcm9taXNlc1wiXHJcbiAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhbWJpZW50LWxpZ2h0LXNlbnNvcjsgY2FtZXJhOyBlbmNyeXB0ZWQtbWVkaWE7IGdlb2xvY2F0aW9uOyBneXJvc2NvcGU7IGhpZDsgbWljcm9waG9uZTsgbWlkaTsgcGF5bWVudDsgdXNiOyB2cjsgeHItc3BhdGlhbC10cmFja2luZ1wiXHJcbiAgICAgc2FuZGJveD1cImFsbG93LWZvcm1zIGFsbG93LW1vZGFscyBhbGxvdy1wb3B1cHMgYWxsb3ctcHJlc2VudGF0aW9uIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHNcIlxyXG4gICA+PC9pZnJhbWU+YCxcclxuICAgICAgdGl0bGU6IFwiRmV0Y2hpbmcgZGF0YSBhbmQgUHJvbWlzZXNcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJGZXRjaGluZyBkYXRhIGlzIHZlcnkgY29tbW9uIG9uIHRoZSB3ZWIsIHdoZXRoZXIgaXQgaXMgZGF0YSB0aGF0IHlvdSBzaG93IG9uIHRoZSBwYWdlIGxpa2UgdGV4dCBvciBudW1iZXJzIG9yIHNvbWV0aGluZyBlbHNlIHlvdSBuZWVkIHRvIHNob3cgc29tZXRoaW5nIHRvIHVzZXJzLiBPZnRlbiBpbiBKYXZhU2NyaXB0IHdoZW4gZmV0Y2hpbmcgZGF0YSwgcHJvbWlzZXMgYXJlIGluIHVzZS5cIixcclxuICAgICAgYm90dG9tVGV4dDpcclxuICAgICAgICBcIllvdSBjYW4gc2ltcGx5IG9wZW4gdGhpcyBVUkwgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzIGluIHRoZSBicm93c2VyIGFuZCBzZWUgdGhlIGRhdGEgdGhhdCBpcyBiZWluZyByZXR1cm5lZC5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGVtYmVkOiBgPGlmcmFtZSBzcmM9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL3JlbGF4ZWQtd2F0ZXJmYWxsLWZjZGo0P2F1dG9yZXNpemU9MSZmb250c2l6ZT0xNiZoaWRlbmF2aWdhdGlvbj0xJnRoZW1lPWRhcmtcIlxyXG4gICAgIHN0eWxlPVwid2lkdGg6MTAwJTsgaGVpZ2h0OjEwMDBweDsgYm9yZGVyOjA7IGJvcmRlci1yYWRpdXM6IDRweDsgb3ZlcmZsb3c6aGlkZGVuO1wiXHJcbiAgICAgdGl0bGU9XCJyZWxheGVkLXdhdGVyZmFsbC1mY2RqNFwiXHJcbiAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhbWJpZW50LWxpZ2h0LXNlbnNvcjsgY2FtZXJhOyBlbmNyeXB0ZWQtbWVkaWE7IGdlb2xvY2F0aW9uOyBneXJvc2NvcGU7IGhpZDsgbWljcm9waG9uZTsgbWlkaTsgcGF5bWVudDsgdXNiOyB2cjsgeHItc3BhdGlhbC10cmFja2luZ1wiXHJcbiAgICAgc2FuZGJveD1cImFsbG93LWZvcm1zIGFsbG93LW1vZGFscyBhbGxvdy1wb3B1cHMgYWxsb3ctcHJlc2VudGF0aW9uIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHNcIlxyXG4gICA+PC9pZnJhbWU+YCxcclxuICAgICAgdGl0bGU6IFwiTGlicmFyaWVzIChvdGhlciBwZW9wbGUncyBjb2RlKVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIk1hbnkgdGltZXMgeW91IHdvdWxkIGZpbmQgb3RoZXIgcGVvcGxlIHdyb3RlIGEgbGlicmFyeSAoY29kZSkgdGhhdCB5b3UgY291bGQgdXNlIHRvIGJ1aWxkIHlvdXIgd2Vic2l0ZS4gQSBiaXQgb2Ygc2VhcmNoaW5nIG9ubGluZSB3aXRoIHRoZSB0ZXh0ICdodG1sJywgJ2Nzcycgb3IgJ2phdmFzY3JpcHQnIHlvdSBjb3VsZCBmaW5kIGEgbG90IG9mIHVzZWZ1bCBsaWJyYXJpZXMsIHRvb2xzLCB3aWRnZXRzIGFuZCBtYW55IGRvY3VtZW50YXRpb24gb2YgaG93IHRvIGltcGxlbWVudCBvdGhlciBwZW9wbGUncyBjb2RlIHRvIGhlbHAgeW91IG91dC4gVGhlIGNvbW11bml0eSBpcyBncmVhdCBhbmQgZXZlcnlvbmUgdXNlcyBvdGhlciBwZW9wbGUncyBjb2RlIGluc2lkZSBvZiB0aGVpciBvd24gd2Vic2l0ZXMgdG8gZGV2ZWxvcCBzdHVmZiBmYXN0ZXIgYW5kIGVhc2llci4gSXQgaXMgY29tbW9uIHRvIGZpbmQgbWFueSBhcnRpY2xlcyBleHBsYWluaW5nIGhvdyB0byBkbyB0aGluZ3Mgd2l0aCBkaWZmZXJlbnQgbGlicmFyaWVzLCBldmVuIHRob3VnaCB0aGV5IGFyZSBub3QgY29ubmVjdGVkIHRvIHRoZSBvZmZpY2lhbCBsaWJyYXJ5IGRvY3VtZW50YXRpb24uIE9uZSBleGFtcGxlIGlzIGhhdmluZyBhIG1hcCBvbiB5b3VyIHNpdGUgd2l0aCB0aGUgbGVhZmxldGpzIGxpYnJhcnkuIElmIHlvdSdyZSBpbnRlcmVzdGVkIGluIGZ1cnRoZXIgbGVhcm5pbmcgYWJvdXQgdGhpcyBwYXJ0aWN1bGFyIGxpYnJhcnksIGdvIHRvIGh0dHBzOi8vbGVhZmxldGpzLmNvbS9leGFtcGxlcy9xdWljay1zdGFydC9cIixcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGpzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9