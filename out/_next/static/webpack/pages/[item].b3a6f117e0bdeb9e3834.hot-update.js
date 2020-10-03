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
    embed: "<iframe src=\"https://codesandbox.io/embed/practical-sky-94t0g?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark\"\n     style=\"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"practical-sky-94t0g\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
    title: "Functions",
    description: "Functions are blocks of code you can declare to call (execute) later at the right time. They are very useful in order to reuse specific code actions."
  }, {
    embed: "<iframe src=\"https://codesandbox.io/embed/romantic-aryabhata-jf1pi?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark\"\n     style=\"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"romantic-aryabhata-jf1pi\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
    title: "Loops",
    description: "Many times you will find that you want to go over an array list or values of an object. There are many ways to do loops and we'll cover the basic ones here."
  }, {
    embed: "<iframe src=\"https://codesandbox.io/embed/silent-firefly-x0hsr?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark\"\n     style=\"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"silent-firefly-x0hsr\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
    title: "Changing the DOM (the HTML or the page)",
    description: "To make websites interactive you might want to change the page by adding different styles or showing different data. To do that we fetch the element (html tag) that we want to change and make our changes on it."
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9pdGVtcy5qcyJdLCJuYW1lcyI6WyJpdGVtcyIsIm5hbWUiLCJzdWJUaXRsZSIsImRlc2NyaXB0aW9uIiwiaW1nIiwiaHRtbEltYWdlIiwibmV4dCIsInBhcnRzIiwiaW1hZ2UiLCJ0aXRsZSIsImVtYmVkIiwiYm90dG9tVGV4dCIsImNzc0ltYWdlIiwicHJlcmVxdWlzaXRzIiwianNJbWFnZSIsIm5vZGVqc0ltYWdlIiwicmVhY3RJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUU8sSUFBTUEsS0FBSyxHQUFHLENBQ25CO0FBQ0VDLE1BQUksRUFBRSxNQURSO0FBRUVDLFVBQVEsRUFBRSw0QkFGWjtBQUdFQyxhQUFXLEVBQ1QsdUhBSko7QUFLRUMsS0FBRyxFQUFFQyxpREFMUDtBQU1FQyxNQUFJLEVBQUUsS0FOUjtBQU9FQyxPQUFLLEVBQUUsQ0FDTDtBQUNFQyxTQUFLLEVBQUUsaUNBRFQ7QUFFRUMsU0FBSyxFQUFFLG9CQUZUO0FBR0VOLGVBQVcsRUFDVDtBQUpKLEdBREssRUFPTDtBQUNFTyxTQUFLLCtnQkFEUDtBQU9FRCxTQUFLLEVBQUUscUJBUFQ7QUFRRU4sZUFBVyxFQUNULG9NQVRKO0FBVUVRLGNBQVUsRUFDUjtBQVhKLEdBUEssRUFvQkw7QUFDRUQsU0FBSyw0aUJBRFA7QUFPRUQsU0FBSyxFQUFFLHlDQVBUO0FBUUVOLGVBQVcsRUFDVDtBQVRKLEdBcEJLLEVBK0JMO0FBQ0VPLFNBQUssOGZBRFA7QUFPRUQsU0FBSyxFQUFFLHdDQVBUO0FBUUVOLGVBQVcsRUFDVDtBQVRKLEdBL0JLLEVBMENMO0FBQ0VPLFNBQUssbWhCQURQO0FBT0VELFNBQUssRUFDSCxrRkFSSjtBQVNFTixlQUFXLEVBQ1Q7QUFWSixHQTFDSztBQVBULENBRG1CLEVBZ0VuQjtBQUNFRixNQUFJLEVBQUUsS0FEUjtBQUVFQyxVQUFRLEVBQUUsNkJBRlo7QUFHRUUsS0FBRyxFQUFFUSxnREFIUDtBQUlFQyxjQUFZLEVBQUUsQ0FBQyxNQUFEO0FBSmhCLENBaEVtQixFQXNFbkI7QUFDRVosTUFBSSxFQUFFLFlBRFI7QUFFRUMsVUFBUSxFQUFFLHFDQUZaO0FBR0VDLGFBQVcsRUFDVCw0RkFKSjtBQUtFQyxLQUFHLEVBQUVVLCtDQUxQO0FBTUVELGNBQVksRUFBRSxDQUFDLE1BQUQsRUFBUyxLQUFULENBTmhCO0FBT0VOLE9BQUssRUFBRSxDQUNMO0FBQ0VHLFNBQUssZ2lCQURQO0FBT0VELFNBQUssRUFBRSxnQ0FQVDtBQVFFTixlQUFXLEVBQ1Q7QUFUSixHQURLLEVBWUw7QUFDRU8sU0FBSyxnaUJBRFA7QUFPRUQsU0FBSyxFQUFFLHFCQVBUO0FBUUVOLGVBQVcsRUFDVDtBQVRKLEdBWkssRUF1Qkw7QUFDRU8sU0FBSyxrakJBRFA7QUFPRUQsU0FBSyxFQUFFLFlBUFQ7QUFRRU4sZUFBVyxFQUNUO0FBVEosR0F2QkssRUFrQ0w7QUFDRU8sU0FBSyxvaUJBRFA7QUFPRUQsU0FBSyxFQUFFLFdBUFQ7QUFRRU4sZUFBVyxFQUNUO0FBVEosR0FsQ0ssRUE2Q0w7QUFDRU8sU0FBSyw4aUJBRFA7QUFPRUQsU0FBSyxFQUFFLE9BUFQ7QUFRRU4sZUFBVyxFQUNUO0FBVEosR0E3Q0ssRUF3REw7QUFDRU8sU0FBSyxzaUJBRFA7QUFPRUQsU0FBSyxFQUFFLHlDQVBUO0FBUUVOLGVBQVcsRUFDVDtBQVRKLEdBeERLO0FBUFQsQ0F0RW1CLEVBa0puQjtBQUNFRixNQUFJLEVBQUUsU0FEUjtBQUVFQyxVQUFRLEVBQUUsd0JBRlo7QUFHRUUsS0FBRyxFQUFFVyxtREFIUDtBQUlFRixjQUFZLEVBQUUsQ0FBQyxZQUFEO0FBSmhCLENBbEptQixFQXdKbkI7QUFDRVosTUFBSSxFQUFFLE9BRFI7QUFFRUMsVUFBUSxFQUFFLHVCQUZaO0FBR0VFLEtBQUcsRUFBRVksa0RBSFA7QUFJRUgsY0FBWSxFQUFFLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsWUFBaEI7QUFKaEIsQ0F4Sm1CLENBQWQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2l0ZW1dLmIzYTZmMTE3ZTBiZGViOWUzODM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGh0bWxJbWFnZSxcclxuICBjc3NJbWFnZSxcclxuICBqc0ltYWdlLFxyXG4gIG5vZGVqc0ltYWdlLFxyXG4gIHJlYWN0SW1hZ2UsXHJcbn0gZnJvbSBcIi4vaW1hZ2VzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaXRlbXMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJIVE1MXCIsXHJcbiAgICBzdWJUaXRsZTogXCJNYXJrdXAgbGFuZ3VhZ2UgZm9yIHdlYiBVSVwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdIVE1MIGlzIG1hZGUgb3V0IG9mIHRhZ3MuIFxcblRhZ3MgY2FuIGhvbGQgdmFsdWVzIHdpdGggYXR0cmlidXRlcy5cXG4gRm9yIGV4YW1wbGU6IFxcbjxodG1sIGF0dHJpYnV0ZT1cImF0dHJpYnV0ZSB2YWx1ZVwiPicsXHJcbiAgICBpbWc6IGh0bWxJbWFnZSxcclxuICAgIG5leHQ6IFwiQ3NzXCIsXHJcbiAgICBwYXJ0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaW1hZ2U6IFwiL2FuYXRvbXktb2YtYW4taHRtbC1lbGVtZW50LnBuZ1wiLFxyXG4gICAgICAgIHRpdGxlOiBcIkhUTUwgdGFnIHN0cnVjdHVyZVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJBbiBodG1sIHRhZyBpcyBtYWRlIG91dCBvZiBpdCdzIG9wZW5uaW5nIHRhZywgY2xvc2luZyB0YWcsIGl0J3MgY29udGVudCBpbiB0aGUgbWlkZGxlIGFuZCBpdCdzIGF0dHJpYnV0ZXMgYW5kIHZhbHVlcyBvbiBpdCdzIG9wZW5pbmcgdGFnLlxcbiBUaGVyZSBhcmUgdGFncyB0aGUgZG9uJ3QgaGF2ZSBjbG9zaW5nIHRhZ3MgbGlrZSB0aGUgPGJyLz4gYW5kIDxpbWcvPiB0YWdzLlwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgZW1iZWQ6IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vZW1iZWQvd2hpdGUtY2xvdWQtenllZ2w/YXV0b3Jlc2l6ZT0xJmZvbnRzaXplPTE2JmhpZGVuYXZpZ2F0aW9uPTEmdGhlbWU9ZGFya1wiXHJcbiAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlOyBoZWlnaHQ6NTAwcHg7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OmhpZGRlbjtcIlxyXG4gICAgIHRpdGxlPVwid2hpdGUtY2xvdWQtenllZ2xcIlxyXG4gICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYW1iaWVudC1saWdodC1zZW5zb3I7IGNhbWVyYTsgZW5jcnlwdGVkLW1lZGlhOyBnZW9sb2NhdGlvbjsgZ3lyb3Njb3BlOyBoaWQ7IG1pY3JvcGhvbmU7IG1pZGk7IHBheW1lbnQ7IHVzYjsgdnI7IHhyLXNwYXRpYWwtdHJhY2tpbmdcIlxyXG4gICAgIHNhbmRib3g9XCJhbGxvdy1mb3JtcyBhbGxvdy1tb2RhbHMgYWxsb3ctcG9wdXBzIGFsbG93LXByZXNlbnRhdGlvbiBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1zY3JpcHRzXCJcclxuICAgPjwvaWZyYW1lPmAsXHJcbiAgICAgICAgdGl0bGU6IFwiSFRNTCBwYWdlIHN0cnVjdHVyZVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJBbiBodG1sIHBhZ2UgaXMgdGhlIGJhc2Ugb2YgdGhlIHdlYnNpdGUuXFxuSXQgZGVmaW5lcyB0aGUgSFRNTCB2ZXJzaW9uLCBtZXRhIGRhdGEgYW5kIHRoZSBlbGVtZW50cyBvZiB0aGUgcGFnZS5cXG5Gcm9tIGRpc3BsYXlpbmcgaW5wdXRzIHRvIGxvYWRpbmcgZmlsZXMsIHlvdSBjYW4gZG8gYSBsb3Qgd2l0aCBhIGZldyBzdGVwcyBpbiBIVE1MXCIsXHJcbiAgICAgICAgYm90dG9tVGV4dDpcclxuICAgICAgICAgICdZb3UgY2FuIGNyZWF0ZSB5b3VyIG93biBodG1sIGZpbGVzIGxpa2UgdGhpcyBcImluZGV4Lmh0bWxcIiBvciBcImFueS1uYW1lX3lvdV93YW50Lmh0bWxcIiBhbmQgb3BlbiBpdCBpbiB5b3VyIGJyb3dzZXIganVzdCBieSBkb3VibGUgY2xpY2tpbmcgb24gaXQuJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGVtYmVkOiBgPGlmcmFtZSBzcmM9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL215c3RpZnlpbmctbW9udGFsY2luaS1zcnV0eD9hdXRvcmVzaXplPTEmZXNsaW50PTEmZm9udHNpemU9MTYmaGlkZW5hdmlnYXRpb249MSZ0aGVtZT1kYXJrXCJcclxuICAgICBzdHlsZT1cIndpZHRoOjEwMCU7IGhlaWdodDo1MDBweDsgYm9yZGVyOjA7IGJvcmRlci1yYWRpdXM6IDRweDsgb3ZlcmZsb3c6aGlkZGVuO1wiXHJcbiAgICAgdGl0bGU9XCJteXN0aWZ5aW5nLW1vbnRhbGNpbmktc3J1dHhcIlxyXG4gICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYW1iaWVudC1saWdodC1zZW5zb3I7IGNhbWVyYTsgZW5jcnlwdGVkLW1lZGlhOyBnZW9sb2NhdGlvbjsgZ3lyb3Njb3BlOyBoaWQ7IG1pY3JvcGhvbmU7IG1pZGk7IHBheW1lbnQ7IHVzYjsgdnI7IHhyLXNwYXRpYWwtdHJhY2tpbmdcIlxyXG4gICAgIHNhbmRib3g9XCJhbGxvdy1mb3JtcyBhbGxvdy1tb2RhbHMgYWxsb3ctcG9wdXBzIGFsbG93LXByZXNlbnRhdGlvbiBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1zY3JpcHRzXCJcclxuICAgPjwvaWZyYW1lPmAsXHJcbiAgICAgICAgdGl0bGU6IFwiPGE+VGhlIEFuY2hvciB0YWcsIGxpbmtpbmcgdGhlIHdlYi48L2E+XCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIkFuIGFjaG9yIHRhZyBjYW4gcmVkaXJlY3QgdGhlIHVzZXIgdG8gYW55IHBhZ2Ugb25saW5lIG9yIG90aGVyIGZpbGVzIG9uIHlvdSBtYWNoaW5lLlwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgZW1iZWQ6IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vZW1iZWQvZ2lmdGVkLXJpZGUteHZyYnk/YXV0b3Jlc2l6ZT0xJmZvbnRzaXplPTE2JnRoZW1lPWRhcmtcIlxyXG4gICAgIHN0eWxlPVwid2lkdGg6MTAwJTsgaGVpZ2h0OjUwMHB4OyBib3JkZXI6MDsgYm9yZGVyLXJhZGl1czogNHB4OyBvdmVyZmxvdzpoaWRkZW47XCJcclxuICAgICB0aXRsZT1cImdpZnRlZC1yaWRlLXh2cmJ5XCJcclxuICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGFtYmllbnQtbGlnaHQtc2Vuc29yOyBjYW1lcmE7IGVuY3J5cHRlZC1tZWRpYTsgZ2VvbG9jYXRpb247IGd5cm9zY29wZTsgaGlkOyBtaWNyb3Bob25lOyBtaWRpOyBwYXltZW50OyB1c2I7IHZyOyB4ci1zcGF0aWFsLXRyYWNraW5nXCJcclxuICAgICBzYW5kYm94PVwiYWxsb3ctZm9ybXMgYWxsb3ctbW9kYWxzIGFsbG93LXBvcHVwcyBhbGxvdy1wcmVzZW50YXRpb24gYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctc2NyaXB0c1wiXHJcbiAgID48L2lmcmFtZT5gLFxyXG4gICAgICAgIHRpdGxlOiBcIjxpbWc+VGhlIEltYWdlIHRhZywgZGlzcGxheWluZyBpbWFnZXMuXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIkFuIGltYWdlIHRhZyBjYW4gc2hvdyBhbiBpbWFnZSBvbmxpbmUgb3IgZnJvbSBvbiB5b3UgY29tcHV0ZXIuXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBlbWJlZDogYDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9lbWJlZC9pbnNwaXJpbmctZGV3LTB2cXhqP2F1dG9yZXNpemU9MSZmb250c2l6ZT0xNiZoaWRlbmF2aWdhdGlvbj0xJnRoZW1lPWRhcmtcIlxyXG4gICAgIHN0eWxlPVwid2lkdGg6MTAwJTsgaGVpZ2h0OjUwMHB4OyBib3JkZXI6MDsgYm9yZGVyLXJhZGl1czogNHB4OyBvdmVyZmxvdzpoaWRkZW47XCJcclxuICAgICB0aXRsZT1cImluc3BpcmluZy1kZXctMHZxeGpcIlxyXG4gICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYW1iaWVudC1saWdodC1zZW5zb3I7IGNhbWVyYTsgZW5jcnlwdGVkLW1lZGlhOyBnZW9sb2NhdGlvbjsgZ3lyb3Njb3BlOyBoaWQ7IG1pY3JvcGhvbmU7IG1pZGk7IHBheW1lbnQ7IHVzYjsgdnI7IHhyLXNwYXRpYWwtdHJhY2tpbmdcIlxyXG4gICAgIHNhbmRib3g9XCJhbGxvdy1mb3JtcyBhbGxvdy1tb2RhbHMgYWxsb3ctcG9wdXBzIGFsbG93LXByZXNlbnRhdGlvbiBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1zY3JpcHRzXCJcclxuICAgPjwvaWZyYW1lPmAsXHJcbiAgICAgICAgdGl0bGU6XHJcbiAgICAgICAgICAnVGhlIGlucHV0IHRhZyBnZXRzIGRpZmZlcmVudCB0eXBlcyBvZiBpbnB1dCBmcm9tIHRoZSB1c2VyLiA8aW5wdXQgdHlwZT1cInRleHRcIiAvPicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIldpdGggdGhlIGlucHV0IHRhZyBhbmQgdGhlIHNlbGVjdCBhbmQgb3B0aW9uIHRhZ3MgeW91IGNhbiBhc2sgdGhlIHVzZXIgbWFueSBkaWZmZXJlbnQgdHlwZXMgb2YgcXVlc3Rpb25zIHRvIGdldCBoaXMgaW5wdXQuXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJDU1NcIixcclxuICAgIHN1YlRpdGxlOiBcIlN0eWxpbmcgbGFuZ3VhZ2Ugb2YgdGhlIHdlYlwiLFxyXG4gICAgaW1nOiBjc3NJbWFnZSxcclxuICAgIHByZXJlcXVpc2l0czogW1wiaHRtbFwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiSmF2YVNjcmlwdFwiLFxyXG4gICAgc3ViVGl0bGU6IFwiVGhlIFByb2dyYW1taW5nIGxhbmd1YWdlIG9mIHRoZSB3ZWJcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkphdmFTY3JpcHQgaXMgbWFpbmx5IHJ1biBpbiB0aGUgYnJvd3NlciwgYnV0IGNhbiBydW4gb24gc2VydmVycyBhbmQgYW55IG90aGVyIHBsYWNlIHRvZGF5LlwiLFxyXG4gICAgaW1nOiBqc0ltYWdlLFxyXG4gICAgcHJlcmVxdWlzaXRzOiBbXCJodG1sXCIsIFwiY3NzXCJdLFxyXG4gICAgcGFydHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGVtYmVkOiBgPGlmcmFtZSBzcmM9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL3B1cnBsZS1odHRwLTNjdmVtP2F1dG9yZXNpemU9MSZleHBhbmRkZXZ0b29scz0xJmZvbnRzaXplPTE2JmhpZGVuYXZpZ2F0aW9uPTEmdGhlbWU9ZGFya1wiXHJcbiAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlOyBoZWlnaHQ6NTAwcHg7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OmhpZGRlbjtcIlxyXG4gICAgIHRpdGxlPVwicHVycGxlLWh0dHAtM2N2ZW1cIlxyXG4gICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYW1iaWVudC1saWdodC1zZW5zb3I7IGNhbWVyYTsgZW5jcnlwdGVkLW1lZGlhOyBnZW9sb2NhdGlvbjsgZ3lyb3Njb3BlOyBoaWQ7IG1pY3JvcGhvbmU7IG1pZGk7IHBheW1lbnQ7IHVzYjsgdnI7IHhyLXNwYXRpYWwtdHJhY2tpbmdcIlxyXG4gICAgIHNhbmRib3g9XCJhbGxvdy1mb3JtcyBhbGxvdy1tb2RhbHMgYWxsb3ctcG9wdXBzIGFsbG93LXByZXNlbnRhdGlvbiBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1zY3JpcHRzXCJcclxuICAgPjwvaWZyYW1lPmAsXHJcbiAgICAgICAgdGl0bGU6IFwiQ29ubmVjdGluZyBIVE1MIGFuZCBKYXZhU2NyaXB0XCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIlRvIGluc2VydCBKYXZhU2NyaXB0IGNvZGUgaW4gYW4gSFRNTCBwYWdlIHdlIHVzZSB0aGUgPHNjcmlwdD4gdGFnLlxcblRoZSB0d28gb3B0aW9ucyBhcmUgdG8gd3JpdGUgdGhlIEphdmFTY3JpcHQgY29kZSBpbnNpZGUgdGhlIHRhZyBvciBsaW5rIHRvIGEgSmF2YVNjcmlwdCBmaWxlIHdpdGggYSB1cmwuXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBlbWJlZDogYDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9lbWJlZC9mZXJ2ZW50LWNkbi0yZTBydD9hdXRvcmVzaXplPTEmZXhwYW5kZGV2dG9vbHM9MSZmb250c2l6ZT0xNCZoaWRlbmF2aWdhdGlvbj0xJnRoZW1lPWRhcmtcIlxyXG4gICAgIHN0eWxlPVwid2lkdGg6MTAwJTsgaGVpZ2h0OjUwMHB4OyBib3JkZXI6MDsgYm9yZGVyLXJhZGl1czogNHB4OyBvdmVyZmxvdzpoaWRkZW47XCJcclxuICAgICB0aXRsZT1cImZlcnZlbnQtY2RuLTJlMHJ0XCJcclxuICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGFtYmllbnQtbGlnaHQtc2Vuc29yOyBjYW1lcmE7IGVuY3J5cHRlZC1tZWRpYTsgZ2VvbG9jYXRpb247IGd5cm9zY29wZTsgaGlkOyBtaWNyb3Bob25lOyBtaWRpOyBwYXltZW50OyB1c2I7IHZyOyB4ci1zcGF0aWFsLXRyYWNraW5nXCJcclxuICAgICBzYW5kYm94PVwiYWxsb3ctZm9ybXMgYWxsb3ctbW9kYWxzIGFsbG93LXBvcHVwcyBhbGxvdy1wcmVzZW50YXRpb24gYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctc2NyaXB0c1wiXHJcbiAgID48L2lmcmFtZT5gLFxyXG4gICAgICAgIHRpdGxlOiBcIlR5cGVzIGFuZCBWYXJpYWJsZXNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiSmF2YVNjcmlwdCB2YXJpYWJsZXMgYXJlIHVzZWQgdG8gc2F2ZSBzb21lIHZhbHVlIG9yIGRhdGEgdG8gcmV1c2UgaXQgbGF0ZXIuIERlY2xhcmluZyBhbmQgdXNpbmcgYSB2YXJpYWJsZSBpcyBlYXN5IHNpbmNlIHlvdSBkb24ndCBuZWVkIHRvIHNwZWNpZnkgdGhlIHR5cGUuXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBlbWJlZDogYDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9lbWJlZC9jb21wZXRlbnQtd2lsZGZsb3dlci1qMzYycT9hdXRvcmVzaXplPTEmZXhwYW5kZGV2dG9vbHM9MSZmb250c2l6ZT0xNCZoaWRlbmF2aWdhdGlvbj0xJnRoZW1lPWRhcmtcIlxyXG4gICAgIHN0eWxlPVwid2lkdGg6MTAwJTsgaGVpZ2h0OjUwMHB4OyBib3JkZXI6MDsgYm9yZGVyLXJhZGl1czogNHB4OyBvdmVyZmxvdzpoaWRkZW47XCJcclxuICAgICB0aXRsZT1cImNvbXBldGVudC13aWxkZmxvd2VyLWozNjJxXCJcclxuICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGFtYmllbnQtbGlnaHQtc2Vuc29yOyBjYW1lcmE7IGVuY3J5cHRlZC1tZWRpYTsgZ2VvbG9jYXRpb247IGd5cm9zY29wZTsgaGlkOyBtaWNyb3Bob25lOyBtaWRpOyBwYXltZW50OyB1c2I7IHZyOyB4ci1zcGF0aWFsLXRyYWNraW5nXCJcclxuICAgICBzYW5kYm94PVwiYWxsb3ctZm9ybXMgYWxsb3ctbW9kYWxzIGFsbG93LXBvcHVwcyBhbGxvdy1wcmVzZW50YXRpb24gYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctc2NyaXB0c1wiXHJcbiAgID48L2lmcmFtZT5gLFxyXG4gICAgICAgIHRpdGxlOiBcIkNvbmRpdGlvbnNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiTWFraW5nIGNvbmRpdGlvbnMgaGVscHMgdG8gZGVjaWRlIHdoYXQgeW91ciBjb2RlIHdpbGwgZG8gbmV4dC4gRm9yIHRoZXNlIGNhc2Ugd2UgdXNlIGlmLCBlbHNlIGFuZCBzd2l0Y2ggc3RhdGVtZW50cy5cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGVtYmVkOiBgPGlmcmFtZSBzcmM9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL3ByYWN0aWNhbC1za3ktOTR0MGc/YXV0b3Jlc2l6ZT0xJmV4cGFuZGRldnRvb2xzPTEmZm9udHNpemU9MTQmaGlkZW5hdmlnYXRpb249MSZ0aGVtZT1kYXJrXCJcclxuICAgICBzdHlsZT1cIndpZHRoOjEwMCU7IGhlaWdodDo1MDBweDsgYm9yZGVyOjA7IGJvcmRlci1yYWRpdXM6IDRweDsgb3ZlcmZsb3c6aGlkZGVuO1wiXHJcbiAgICAgdGl0bGU9XCJwcmFjdGljYWwtc2t5LTk0dDBnXCJcclxuICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGFtYmllbnQtbGlnaHQtc2Vuc29yOyBjYW1lcmE7IGVuY3J5cHRlZC1tZWRpYTsgZ2VvbG9jYXRpb247IGd5cm9zY29wZTsgaGlkOyBtaWNyb3Bob25lOyBtaWRpOyBwYXltZW50OyB1c2I7IHZyOyB4ci1zcGF0aWFsLXRyYWNraW5nXCJcclxuICAgICBzYW5kYm94PVwiYWxsb3ctZm9ybXMgYWxsb3ctbW9kYWxzIGFsbG93LXBvcHVwcyBhbGxvdy1wcmVzZW50YXRpb24gYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctc2NyaXB0c1wiXHJcbiAgID48L2lmcmFtZT5gLFxyXG4gICAgICAgIHRpdGxlOiBcIkZ1bmN0aW9uc1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJGdW5jdGlvbnMgYXJlIGJsb2NrcyBvZiBjb2RlIHlvdSBjYW4gZGVjbGFyZSB0byBjYWxsIChleGVjdXRlKSBsYXRlciBhdCB0aGUgcmlnaHQgdGltZS4gVGhleSBhcmUgdmVyeSB1c2VmdWwgaW4gb3JkZXIgdG8gcmV1c2Ugc3BlY2lmaWMgY29kZSBhY3Rpb25zLlwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgZW1iZWQ6IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vZW1iZWQvcm9tYW50aWMtYXJ5YWJoYXRhLWpmMXBpP2F1dG9yZXNpemU9MSZleHBhbmRkZXZ0b29scz0xJmZvbnRzaXplPTE0JmhpZGVuYXZpZ2F0aW9uPTEmdGhlbWU9ZGFya1wiXHJcbiAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlOyBoZWlnaHQ6NTAwcHg7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OmhpZGRlbjtcIlxyXG4gICAgIHRpdGxlPVwicm9tYW50aWMtYXJ5YWJoYXRhLWpmMXBpXCJcclxuICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGFtYmllbnQtbGlnaHQtc2Vuc29yOyBjYW1lcmE7IGVuY3J5cHRlZC1tZWRpYTsgZ2VvbG9jYXRpb247IGd5cm9zY29wZTsgaGlkOyBtaWNyb3Bob25lOyBtaWRpOyBwYXltZW50OyB1c2I7IHZyOyB4ci1zcGF0aWFsLXRyYWNraW5nXCJcclxuICAgICBzYW5kYm94PVwiYWxsb3ctZm9ybXMgYWxsb3ctbW9kYWxzIGFsbG93LXBvcHVwcyBhbGxvdy1wcmVzZW50YXRpb24gYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctc2NyaXB0c1wiXHJcbiAgID48L2lmcmFtZT5gLFxyXG4gICAgICAgIHRpdGxlOiBcIkxvb3BzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIk1hbnkgdGltZXMgeW91IHdpbGwgZmluZCB0aGF0IHlvdSB3YW50IHRvIGdvIG92ZXIgYW4gYXJyYXkgbGlzdCBvciB2YWx1ZXMgb2YgYW4gb2JqZWN0LiBUaGVyZSBhcmUgbWFueSB3YXlzIHRvIGRvIGxvb3BzIGFuZCB3ZSdsbCBjb3ZlciB0aGUgYmFzaWMgb25lcyBoZXJlLlwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgZW1iZWQ6IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vZW1iZWQvc2lsZW50LWZpcmVmbHkteDBoc3I/YXV0b3Jlc2l6ZT0xJmV4cGFuZGRldnRvb2xzPTEmZm9udHNpemU9MTQmaGlkZW5hdmlnYXRpb249MSZ0aGVtZT1kYXJrXCJcclxuICAgICBzdHlsZT1cIndpZHRoOjEwMCU7IGhlaWdodDo1MDBweDsgYm9yZGVyOjA7IGJvcmRlci1yYWRpdXM6IDRweDsgb3ZlcmZsb3c6aGlkZGVuO1wiXHJcbiAgICAgdGl0bGU9XCJzaWxlbnQtZmlyZWZseS14MGhzclwiXHJcbiAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhbWJpZW50LWxpZ2h0LXNlbnNvcjsgY2FtZXJhOyBlbmNyeXB0ZWQtbWVkaWE7IGdlb2xvY2F0aW9uOyBneXJvc2NvcGU7IGhpZDsgbWljcm9waG9uZTsgbWlkaTsgcGF5bWVudDsgdXNiOyB2cjsgeHItc3BhdGlhbC10cmFja2luZ1wiXHJcbiAgICAgc2FuZGJveD1cImFsbG93LWZvcm1zIGFsbG93LW1vZGFscyBhbGxvdy1wb3B1cHMgYWxsb3ctcHJlc2VudGF0aW9uIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHNcIlxyXG4gICA+PC9pZnJhbWU+YCxcclxuICAgICAgICB0aXRsZTogXCJDaGFuZ2luZyB0aGUgRE9NICh0aGUgSFRNTCBvciB0aGUgcGFnZSlcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiVG8gbWFrZSB3ZWJzaXRlcyBpbnRlcmFjdGl2ZSB5b3UgbWlnaHQgd2FudCB0byBjaGFuZ2UgdGhlIHBhZ2UgYnkgYWRkaW5nIGRpZmZlcmVudCBzdHlsZXMgb3Igc2hvd2luZyBkaWZmZXJlbnQgZGF0YS4gVG8gZG8gdGhhdCB3ZSBmZXRjaCB0aGUgZWxlbWVudCAoaHRtbCB0YWcpIHRoYXQgd2Ugd2FudCB0byBjaGFuZ2UgYW5kIG1ha2Ugb3VyIGNoYW5nZXMgb24gaXQuXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJOb2RlLmpzXCIsXHJcbiAgICBzdWJUaXRsZTogXCJKYXZhU2NyaXB0IFNlcnZlci1zaWRlXCIsXHJcbiAgICBpbWc6IG5vZGVqc0ltYWdlLFxyXG4gICAgcHJlcmVxdWlzaXRzOiBbXCJqYXZhc2NyaXB0XCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJSZWFjdFwiLFxyXG4gICAgc3ViVGl0bGU6IFwiSmF2YVNjcmlwdCBVSSBMaWJyYXJ5XCIsXHJcbiAgICBpbWc6IHJlYWN0SW1hZ2UsXHJcbiAgICBwcmVyZXF1aXNpdHM6IFtcImh0bWxcIiwgXCJjc3NcIiwgXCJqYXZhc2NyaXB0XCJdLFxyXG4gIH0sXHJcbl07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=