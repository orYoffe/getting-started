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
  prerequisits: ["html"],
  next: "javascript",
  parts: [{
    embed: "<iframe src=\"https://codesandbox.io/embed/mystifying-moore-53kvq?autoresize=1&fontsize=16&hidenavigation=1&theme=dark\"\n     style=\"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"mystifying-moore-53kvq\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
    title: "Connecting HTML and CSS",
    description: 'To insert CSS code in an HTML page we use the <style>, <link> tags or the "style" attribute.\nThe options are to write the CSS code outside the HTML page with <link rel="stylesheet" href="/any-name-you-want.css" /> or inside the page with <style>some css</style> or on the tag with "style" attribute <p style="css code">text</p>',
    bottomText: 'You can create your own css files like this "index.css" or "any-name_you_want.css", connect it to an html page and open it in your browser.'
  }, {
    image: "/selector.gif",
    embed: "<iframe src=\"https://codesandbox.io/embed/epic-sun-vugtv?autoresize=1&fontsize=16&hidenavigation=1&theme=dark\"\n     style=\"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"epic-sun-vugtv\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
    title: "Selectors",
    description: "In order to set design rules with CSS to an HTML element (tag).  We need to use a selector, to specify which element should the rules (declarations) apply to."
  }, {
    embed: "<iframe src=\"https://codesandbox.io/embed/lucid-brahmagupta-g21mu?autoresize=1&fontsize=16&hidenavigation=1&theme=dark\"\n     style=\"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"lucid-brahmagupta-g21mu\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
    title: "Pseudo selectors (special selectors)",
    description: "There are some special rules selectors to be more specific about which tags should be changed. depending on the tag state or place in the page."
  }]
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
  }, {
    embed: "<iframe src=\"https://codesandbox.io/embed/admiring-river-k0nsk?autoresize=1&fontsize=16&hidenavigation=1&theme=dark\"\n     style=\"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"admiring-river-k0nsk\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
    title: "Events in the browser",
    description: "Every tag on the page has many events that you can listen to and assign a function to be called when that event happens. Some of the basic ones are click (a left click of the mouse on the tag), hover, keydown (when a user clicks a key on the keyboard) and many more events."
  }]
}]; // future items

var futureItems = [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9pdGVtcy5qcyJdLCJuYW1lcyI6WyJpdGVtcyIsIm5hbWUiLCJzdWJUaXRsZSIsImRlc2NyaXB0aW9uIiwiaW1nIiwiaHRtbEltYWdlIiwibmV4dCIsInBhcnRzIiwiaW1hZ2UiLCJ0aXRsZSIsImVtYmVkIiwiYm90dG9tVGV4dCIsImNzc0ltYWdlIiwicHJlcmVxdWlzaXRzIiwianNJbWFnZSIsImZ1dHVyZUl0ZW1zIiwibm9kZWpzSW1hZ2UiLCJyZWFjdEltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRTyxJQUFNQSxLQUFLLEdBQUcsQ0FDbkI7QUFDRUMsTUFBSSxFQUFFLE1BRFI7QUFFRUMsVUFBUSxFQUFFLDRCQUZaO0FBR0VDLGFBQVcsRUFDVCx1SEFKSjtBQUtFQyxLQUFHLEVBQUVDLGlEQUxQO0FBTUVDLE1BQUksRUFBRSxLQU5SO0FBT0VDLE9BQUssRUFBRSxDQUNMO0FBQ0VDLFNBQUssRUFBRSxpQ0FEVDtBQUVFQyxTQUFLLEVBQUUsb0JBRlQ7QUFHRU4sZUFBVyxFQUNUO0FBSkosR0FESyxFQU9MO0FBQ0VPLFNBQUssK2dCQURQO0FBT0VELFNBQUssRUFBRSxxQkFQVDtBQVFFTixlQUFXLEVBQ1Qsb01BVEo7QUFVRVEsY0FBVSxFQUNSO0FBWEosR0FQSyxFQW9CTDtBQUNFRCxTQUFLLDRpQkFEUDtBQU9FRCxTQUFLLEVBQUUseUNBUFQ7QUFRRU4sZUFBVyxFQUNUO0FBVEosR0FwQkssRUErQkw7QUFDRU8sU0FBSyw4ZkFEUDtBQU9FRCxTQUFLLEVBQUUsd0NBUFQ7QUFRRU4sZUFBVyxFQUNUO0FBVEosR0EvQkssRUEwQ0w7QUFDRU8sU0FBSyxtaEJBRFA7QUFPRUQsU0FBSyxFQUNILGtGQVJKO0FBU0VOLGVBQVcsRUFDVDtBQVZKLEdBMUNLO0FBUFQsQ0FEbUIsRUFnRW5CO0FBQ0VGLE1BQUksRUFBRSxLQURSO0FBRUVDLFVBQVEsRUFBRSw2QkFGWjtBQUdFRSxLQUFHLEVBQUVRLGdEQUhQO0FBSUVDLGNBQVksRUFBRSxDQUFDLE1BQUQsQ0FKaEI7QUFLRVAsTUFBSSxFQUFFLFlBTFI7QUFNRUMsT0FBSyxFQUFFLENBQ0w7QUFDRUcsU0FBSyx5aEJBRFA7QUFPRUQsU0FBSyxFQUFFLHlCQVBUO0FBUUVOLGVBQVcsRUFDVCwwVUFUSjtBQVVFUSxjQUFVLEVBQ1I7QUFYSixHQURLLEVBY0w7QUFDRUgsU0FBSyxFQUFFLGVBRFQ7QUFFRUUsU0FBSyx5Z0JBRlA7QUFRRUQsU0FBSyxFQUFFLFdBUlQ7QUFTRU4sZUFBVyxFQUNUO0FBVkosR0FkSyxFQTBCTDtBQUNFTyxTQUFLLDJoQkFEUDtBQU9FRCxTQUFLLEVBQUUsc0NBUFQ7QUFRRU4sZUFBVyxFQUNUO0FBVEosR0ExQks7QUFOVCxDQWhFbUIsRUE2R25CO0FBQ0VGLE1BQUksRUFBRSxZQURSO0FBRUVDLFVBQVEsRUFBRSxxQ0FGWjtBQUdFQyxhQUFXLEVBQ1QsNEZBSko7QUFLRUMsS0FBRyxFQUFFVSwrQ0FMUDtBQU1FRCxjQUFZLEVBQUUsQ0FBQyxNQUFELEVBQVMsS0FBVCxDQU5oQjtBQU9FTixPQUFLLEVBQUUsQ0FDTDtBQUNFRyxTQUFLLGdpQkFEUDtBQU9FRCxTQUFLLEVBQUUsZ0NBUFQ7QUFRRU4sZUFBVyxFQUNUO0FBVEosR0FESyxFQVlMO0FBQ0VPLFNBQUssZ2lCQURQO0FBT0VELFNBQUssRUFBRSxxQkFQVDtBQVFFTixlQUFXLEVBQ1Q7QUFUSixHQVpLLEVBdUJMO0FBQ0VPLFNBQUssa2pCQURQO0FBT0VELFNBQUssRUFBRSxZQVBUO0FBUUVOLGVBQVcsRUFDVDtBQVRKLEdBdkJLLEVBa0NMO0FBQ0VPLFNBQUssb2lCQURQO0FBT0VELFNBQUssRUFBRSxXQVBUO0FBUUVOLGVBQVcsRUFDVDtBQVRKLEdBbENLLEVBNkNMO0FBQ0VPLFNBQUssOGlCQURQO0FBT0VELFNBQUssRUFBRSxPQVBUO0FBUUVOLGVBQVcsRUFDVDtBQVRKLEdBN0NLLEVBd0RMO0FBQ0VPLFNBQUssc2lCQURQO0FBT0VELFNBQUssRUFBRSx5Q0FQVDtBQVFFTixlQUFXLEVBQ1Q7QUFUSixHQXhESyxFQW1FTDtBQUNFTyxTQUFLLHFoQkFEUDtBQU9FRCxTQUFLLEVBQUUsdUJBUFQ7QUFRRU4sZUFBVyxFQUNUO0FBVEosR0FuRUs7QUFQVCxDQTdHbUIsQ0FBZCxDLENBc01QOztBQUNBLElBQU1ZLFdBQVcsR0FBRyxDQUNsQjtBQUNFZCxNQUFJLEVBQUUsU0FEUjtBQUVFQyxVQUFRLEVBQUUsd0JBRlo7QUFHRUUsS0FBRyxFQUFFWSxtREFIUDtBQUlFSCxjQUFZLEVBQUUsQ0FBQyxZQUFEO0FBSmhCLENBRGtCLEVBT2xCO0FBQ0VaLE1BQUksRUFBRSxPQURSO0FBRUVDLFVBQVEsRUFBRSx1QkFGWjtBQUdFRSxLQUFHLEVBQUVhLGtEQUhQO0FBSUVKLGNBQVksRUFBRSxDQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLFlBQWhCO0FBSmhCLENBUGtCLENBQXBCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhlZTYxN2Q5ODQyMWE1NzQxY2ZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGh0bWxJbWFnZSxcclxuICBjc3NJbWFnZSxcclxuICBqc0ltYWdlLFxyXG4gIG5vZGVqc0ltYWdlLFxyXG4gIHJlYWN0SW1hZ2UsXHJcbn0gZnJvbSBcIi4vaW1hZ2VzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaXRlbXMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJIVE1MXCIsXHJcbiAgICBzdWJUaXRsZTogXCJNYXJrdXAgbGFuZ3VhZ2UgZm9yIHdlYiBVSVwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdIVE1MIGlzIG1hZGUgb3V0IG9mIHRhZ3MuIFxcblRhZ3MgY2FuIGhvbGQgdmFsdWVzIHdpdGggYXR0cmlidXRlcy5cXG4gRm9yIGV4YW1wbGU6IFxcbjxodG1sIGF0dHJpYnV0ZT1cImF0dHJpYnV0ZSB2YWx1ZVwiPicsXHJcbiAgICBpbWc6IGh0bWxJbWFnZSxcclxuICAgIG5leHQ6IFwiQ3NzXCIsXHJcbiAgICBwYXJ0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaW1hZ2U6IFwiL2FuYXRvbXktb2YtYW4taHRtbC1lbGVtZW50LnBuZ1wiLFxyXG4gICAgICAgIHRpdGxlOiBcIkhUTUwgdGFnIHN0cnVjdHVyZVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJBbiBodG1sIHRhZyBpcyBtYWRlIG91dCBvZiBpdCdzIG9wZW5uaW5nIHRhZywgY2xvc2luZyB0YWcsIGl0J3MgY29udGVudCBpbiB0aGUgbWlkZGxlIGFuZCBpdCdzIGF0dHJpYnV0ZXMgYW5kIHZhbHVlcyBvbiBpdCdzIG9wZW5pbmcgdGFnLlxcbiBUaGVyZSBhcmUgdGFncyB0aGUgZG9uJ3QgaGF2ZSBjbG9zaW5nIHRhZ3MgbGlrZSB0aGUgPGJyLz4gYW5kIDxpbWcvPiB0YWdzLlwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgZW1iZWQ6IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vZW1iZWQvd2hpdGUtY2xvdWQtenllZ2w/YXV0b3Jlc2l6ZT0xJmZvbnRzaXplPTE2JmhpZGVuYXZpZ2F0aW9uPTEmdGhlbWU9ZGFya1wiXHJcbiAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlOyBoZWlnaHQ6NTAwcHg7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OmhpZGRlbjtcIlxyXG4gICAgIHRpdGxlPVwid2hpdGUtY2xvdWQtenllZ2xcIlxyXG4gICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYW1iaWVudC1saWdodC1zZW5zb3I7IGNhbWVyYTsgZW5jcnlwdGVkLW1lZGlhOyBnZW9sb2NhdGlvbjsgZ3lyb3Njb3BlOyBoaWQ7IG1pY3JvcGhvbmU7IG1pZGk7IHBheW1lbnQ7IHVzYjsgdnI7IHhyLXNwYXRpYWwtdHJhY2tpbmdcIlxyXG4gICAgIHNhbmRib3g9XCJhbGxvdy1mb3JtcyBhbGxvdy1tb2RhbHMgYWxsb3ctcG9wdXBzIGFsbG93LXByZXNlbnRhdGlvbiBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1zY3JpcHRzXCJcclxuICAgPjwvaWZyYW1lPmAsXHJcbiAgICAgICAgdGl0bGU6IFwiSFRNTCBwYWdlIHN0cnVjdHVyZVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJBbiBodG1sIHBhZ2UgaXMgdGhlIGJhc2Ugb2YgdGhlIHdlYnNpdGUuXFxuSXQgZGVmaW5lcyB0aGUgSFRNTCB2ZXJzaW9uLCBtZXRhIGRhdGEgYW5kIHRoZSBlbGVtZW50cyBvZiB0aGUgcGFnZS5cXG5Gcm9tIGRpc3BsYXlpbmcgaW5wdXRzIHRvIGxvYWRpbmcgZmlsZXMsIHlvdSBjYW4gZG8gYSBsb3Qgd2l0aCBhIGZldyBzdGVwcyBpbiBIVE1MXCIsXHJcbiAgICAgICAgYm90dG9tVGV4dDpcclxuICAgICAgICAgICdZb3UgY2FuIGNyZWF0ZSB5b3VyIG93biBodG1sIGZpbGVzIGxpa2UgdGhpcyBcImluZGV4Lmh0bWxcIiBvciBcImFueS1uYW1lX3lvdV93YW50Lmh0bWxcIiBhbmQgb3BlbiBpdCBpbiB5b3VyIGJyb3dzZXIganVzdCBieSBkb3VibGUgY2xpY2tpbmcgb24gaXQuJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGVtYmVkOiBgPGlmcmFtZSBzcmM9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL215c3RpZnlpbmctbW9udGFsY2luaS1zcnV0eD9hdXRvcmVzaXplPTEmZXNsaW50PTEmZm9udHNpemU9MTYmaGlkZW5hdmlnYXRpb249MSZ0aGVtZT1kYXJrXCJcclxuICAgICBzdHlsZT1cIndpZHRoOjEwMCU7IGhlaWdodDo1MDBweDsgYm9yZGVyOjA7IGJvcmRlci1yYWRpdXM6IDRweDsgb3ZlcmZsb3c6aGlkZGVuO1wiXHJcbiAgICAgdGl0bGU9XCJteXN0aWZ5aW5nLW1vbnRhbGNpbmktc3J1dHhcIlxyXG4gICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYW1iaWVudC1saWdodC1zZW5zb3I7IGNhbWVyYTsgZW5jcnlwdGVkLW1lZGlhOyBnZW9sb2NhdGlvbjsgZ3lyb3Njb3BlOyBoaWQ7IG1pY3JvcGhvbmU7IG1pZGk7IHBheW1lbnQ7IHVzYjsgdnI7IHhyLXNwYXRpYWwtdHJhY2tpbmdcIlxyXG4gICAgIHNhbmRib3g9XCJhbGxvdy1mb3JtcyBhbGxvdy1tb2RhbHMgYWxsb3ctcG9wdXBzIGFsbG93LXByZXNlbnRhdGlvbiBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1zY3JpcHRzXCJcclxuICAgPjwvaWZyYW1lPmAsXHJcbiAgICAgICAgdGl0bGU6IFwiPGE+VGhlIEFuY2hvciB0YWcsIGxpbmtpbmcgdGhlIHdlYi48L2E+XCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIkFuIGFjaG9yIHRhZyBjYW4gcmVkaXJlY3QgdGhlIHVzZXIgdG8gYW55IHBhZ2Ugb25saW5lIG9yIG90aGVyIGZpbGVzIG9uIHlvdSBtYWNoaW5lLlwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgZW1iZWQ6IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vZW1iZWQvZ2lmdGVkLXJpZGUteHZyYnk/YXV0b3Jlc2l6ZT0xJmZvbnRzaXplPTE2JnRoZW1lPWRhcmtcIlxyXG4gICAgIHN0eWxlPVwid2lkdGg6MTAwJTsgaGVpZ2h0OjUwMHB4OyBib3JkZXI6MDsgYm9yZGVyLXJhZGl1czogNHB4OyBvdmVyZmxvdzpoaWRkZW47XCJcclxuICAgICB0aXRsZT1cImdpZnRlZC1yaWRlLXh2cmJ5XCJcclxuICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGFtYmllbnQtbGlnaHQtc2Vuc29yOyBjYW1lcmE7IGVuY3J5cHRlZC1tZWRpYTsgZ2VvbG9jYXRpb247IGd5cm9zY29wZTsgaGlkOyBtaWNyb3Bob25lOyBtaWRpOyBwYXltZW50OyB1c2I7IHZyOyB4ci1zcGF0aWFsLXRyYWNraW5nXCJcclxuICAgICBzYW5kYm94PVwiYWxsb3ctZm9ybXMgYWxsb3ctbW9kYWxzIGFsbG93LXBvcHVwcyBhbGxvdy1wcmVzZW50YXRpb24gYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctc2NyaXB0c1wiXHJcbiAgID48L2lmcmFtZT5gLFxyXG4gICAgICAgIHRpdGxlOiBcIjxpbWc+VGhlIEltYWdlIHRhZywgZGlzcGxheWluZyBpbWFnZXMuXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIkFuIGltYWdlIHRhZyBjYW4gc2hvdyBhbiBpbWFnZSBvbmxpbmUgb3IgZnJvbSBvbiB5b3UgY29tcHV0ZXIuXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBlbWJlZDogYDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9lbWJlZC9pbnNwaXJpbmctZGV3LTB2cXhqP2F1dG9yZXNpemU9MSZmb250c2l6ZT0xNiZoaWRlbmF2aWdhdGlvbj0xJnRoZW1lPWRhcmtcIlxyXG4gICAgIHN0eWxlPVwid2lkdGg6MTAwJTsgaGVpZ2h0OjUwMHB4OyBib3JkZXI6MDsgYm9yZGVyLXJhZGl1czogNHB4OyBvdmVyZmxvdzpoaWRkZW47XCJcclxuICAgICB0aXRsZT1cImluc3BpcmluZy1kZXctMHZxeGpcIlxyXG4gICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYW1iaWVudC1saWdodC1zZW5zb3I7IGNhbWVyYTsgZW5jcnlwdGVkLW1lZGlhOyBnZW9sb2NhdGlvbjsgZ3lyb3Njb3BlOyBoaWQ7IG1pY3JvcGhvbmU7IG1pZGk7IHBheW1lbnQ7IHVzYjsgdnI7IHhyLXNwYXRpYWwtdHJhY2tpbmdcIlxyXG4gICAgIHNhbmRib3g9XCJhbGxvdy1mb3JtcyBhbGxvdy1tb2RhbHMgYWxsb3ctcG9wdXBzIGFsbG93LXByZXNlbnRhdGlvbiBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1zY3JpcHRzXCJcclxuICAgPjwvaWZyYW1lPmAsXHJcbiAgICAgICAgdGl0bGU6XHJcbiAgICAgICAgICAnVGhlIGlucHV0IHRhZyBnZXRzIGRpZmZlcmVudCB0eXBlcyBvZiBpbnB1dCBmcm9tIHRoZSB1c2VyLiA8aW5wdXQgdHlwZT1cInRleHRcIiAvPicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIldpdGggdGhlIGlucHV0IHRhZyBhbmQgdGhlIHNlbGVjdCBhbmQgb3B0aW9uIHRhZ3MgeW91IGNhbiBhc2sgdGhlIHVzZXIgbWFueSBkaWZmZXJlbnQgdHlwZXMgb2YgcXVlc3Rpb25zIHRvIGdldCBoaXMgaW5wdXQuXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJDU1NcIixcclxuICAgIHN1YlRpdGxlOiBcIlN0eWxpbmcgbGFuZ3VhZ2Ugb2YgdGhlIHdlYlwiLFxyXG4gICAgaW1nOiBjc3NJbWFnZSxcclxuICAgIHByZXJlcXVpc2l0czogW1wiaHRtbFwiXSxcclxuICAgIG5leHQ6IFwiamF2YXNjcmlwdFwiLFxyXG4gICAgcGFydHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGVtYmVkOiBgPGlmcmFtZSBzcmM9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL215c3RpZnlpbmctbW9vcmUtNTNrdnE/YXV0b3Jlc2l6ZT0xJmZvbnRzaXplPTE2JmhpZGVuYXZpZ2F0aW9uPTEmdGhlbWU9ZGFya1wiXHJcbiAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlOyBoZWlnaHQ6NTAwcHg7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OmhpZGRlbjtcIlxyXG4gICAgIHRpdGxlPVwibXlzdGlmeWluZy1tb29yZS01M2t2cVwiXHJcbiAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhbWJpZW50LWxpZ2h0LXNlbnNvcjsgY2FtZXJhOyBlbmNyeXB0ZWQtbWVkaWE7IGdlb2xvY2F0aW9uOyBneXJvc2NvcGU7IGhpZDsgbWljcm9waG9uZTsgbWlkaTsgcGF5bWVudDsgdXNiOyB2cjsgeHItc3BhdGlhbC10cmFja2luZ1wiXHJcbiAgICAgc2FuZGJveD1cImFsbG93LWZvcm1zIGFsbG93LW1vZGFscyBhbGxvdy1wb3B1cHMgYWxsb3ctcHJlc2VudGF0aW9uIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHNcIlxyXG4gICA+PC9pZnJhbWU+YCxcclxuICAgICAgICB0aXRsZTogXCJDb25uZWN0aW5nIEhUTUwgYW5kIENTU1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgJ1RvIGluc2VydCBDU1MgY29kZSBpbiBhbiBIVE1MIHBhZ2Ugd2UgdXNlIHRoZSA8c3R5bGU+LCA8bGluaz4gdGFncyBvciB0aGUgXCJzdHlsZVwiIGF0dHJpYnV0ZS5cXG5UaGUgb3B0aW9ucyBhcmUgdG8gd3JpdGUgdGhlIENTUyBjb2RlIG91dHNpZGUgdGhlIEhUTUwgcGFnZSB3aXRoIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2FueS1uYW1lLXlvdS13YW50LmNzc1wiIC8+IG9yIGluc2lkZSB0aGUgcGFnZSB3aXRoIDxzdHlsZT5zb21lIGNzczwvc3R5bGU+IG9yIG9uIHRoZSB0YWcgd2l0aCBcInN0eWxlXCIgYXR0cmlidXRlIDxwIHN0eWxlPVwiY3NzIGNvZGVcIj50ZXh0PC9wPicsXHJcbiAgICAgICAgYm90dG9tVGV4dDpcclxuICAgICAgICAgICdZb3UgY2FuIGNyZWF0ZSB5b3VyIG93biBjc3MgZmlsZXMgbGlrZSB0aGlzIFwiaW5kZXguY3NzXCIgb3IgXCJhbnktbmFtZV95b3Vfd2FudC5jc3NcIiwgY29ubmVjdCBpdCB0byBhbiBodG1sIHBhZ2UgYW5kIG9wZW4gaXQgaW4geW91ciBicm93c2VyLicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpbWFnZTogXCIvc2VsZWN0b3IuZ2lmXCIsXHJcbiAgICAgICAgZW1iZWQ6IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vZW1iZWQvZXBpYy1zdW4tdnVndHY/YXV0b3Jlc2l6ZT0xJmZvbnRzaXplPTE2JmhpZGVuYXZpZ2F0aW9uPTEmdGhlbWU9ZGFya1wiXHJcbiAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlOyBoZWlnaHQ6NTAwcHg7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OmhpZGRlbjtcIlxyXG4gICAgIHRpdGxlPVwiZXBpYy1zdW4tdnVndHZcIlxyXG4gICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYW1iaWVudC1saWdodC1zZW5zb3I7IGNhbWVyYTsgZW5jcnlwdGVkLW1lZGlhOyBnZW9sb2NhdGlvbjsgZ3lyb3Njb3BlOyBoaWQ7IG1pY3JvcGhvbmU7IG1pZGk7IHBheW1lbnQ7IHVzYjsgdnI7IHhyLXNwYXRpYWwtdHJhY2tpbmdcIlxyXG4gICAgIHNhbmRib3g9XCJhbGxvdy1mb3JtcyBhbGxvdy1tb2RhbHMgYWxsb3ctcG9wdXBzIGFsbG93LXByZXNlbnRhdGlvbiBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1zY3JpcHRzXCJcclxuICAgPjwvaWZyYW1lPmAsXHJcbiAgICAgICAgdGl0bGU6IFwiU2VsZWN0b3JzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIkluIG9yZGVyIHRvIHNldCBkZXNpZ24gcnVsZXMgd2l0aCBDU1MgdG8gYW4gSFRNTCBlbGVtZW50ICh0YWcpLiAgV2UgbmVlZCB0byB1c2UgYSBzZWxlY3RvciwgdG8gc3BlY2lmeSB3aGljaCBlbGVtZW50IHNob3VsZCB0aGUgcnVsZXMgKGRlY2xhcmF0aW9ucykgYXBwbHkgdG8uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBlbWJlZDogYDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9lbWJlZC9sdWNpZC1icmFobWFndXB0YS1nMjFtdT9hdXRvcmVzaXplPTEmZm9udHNpemU9MTYmaGlkZW5hdmlnYXRpb249MSZ0aGVtZT1kYXJrXCJcclxuICAgICBzdHlsZT1cIndpZHRoOjEwMCU7IGhlaWdodDo1MDBweDsgYm9yZGVyOjA7IGJvcmRlci1yYWRpdXM6IDRweDsgb3ZlcmZsb3c6aGlkZGVuO1wiXHJcbiAgICAgdGl0bGU9XCJsdWNpZC1icmFobWFndXB0YS1nMjFtdVwiXHJcbiAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhbWJpZW50LWxpZ2h0LXNlbnNvcjsgY2FtZXJhOyBlbmNyeXB0ZWQtbWVkaWE7IGdlb2xvY2F0aW9uOyBneXJvc2NvcGU7IGhpZDsgbWljcm9waG9uZTsgbWlkaTsgcGF5bWVudDsgdXNiOyB2cjsgeHItc3BhdGlhbC10cmFja2luZ1wiXHJcbiAgICAgc2FuZGJveD1cImFsbG93LWZvcm1zIGFsbG93LW1vZGFscyBhbGxvdy1wb3B1cHMgYWxsb3ctcHJlc2VudGF0aW9uIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHNcIlxyXG4gICA+PC9pZnJhbWU+YCxcclxuICAgICAgICB0aXRsZTogXCJQc2V1ZG8gc2VsZWN0b3JzIChzcGVjaWFsIHNlbGVjdG9ycylcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiVGhlcmUgYXJlIHNvbWUgc3BlY2lhbCBydWxlcyBzZWxlY3RvcnMgdG8gYmUgbW9yZSBzcGVjaWZpYyBhYm91dCB3aGljaCB0YWdzIHNob3VsZCBiZSBjaGFuZ2VkLiBkZXBlbmRpbmcgb24gdGhlIHRhZyBzdGF0ZSBvciBwbGFjZSBpbiB0aGUgcGFnZS5cIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkphdmFTY3JpcHRcIixcclxuICAgIHN1YlRpdGxlOiBcIlRoZSBQcm9ncmFtbWluZyBsYW5ndWFnZSBvZiB0aGUgd2ViXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJKYXZhU2NyaXB0IGlzIG1haW5seSBydW4gaW4gdGhlIGJyb3dzZXIsIGJ1dCBjYW4gcnVuIG9uIHNlcnZlcnMgYW5kIGFueSBvdGhlciBwbGFjZSB0b2RheS5cIixcclxuICAgIGltZzoganNJbWFnZSxcclxuICAgIHByZXJlcXVpc2l0czogW1wiaHRtbFwiLCBcImNzc1wiXSxcclxuICAgIHBhcnRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBlbWJlZDogYDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9lbWJlZC9wdXJwbGUtaHR0cC0zY3ZlbT9hdXRvcmVzaXplPTEmZXhwYW5kZGV2dG9vbHM9MSZmb250c2l6ZT0xNiZoaWRlbmF2aWdhdGlvbj0xJnRoZW1lPWRhcmtcIlxyXG4gICAgIHN0eWxlPVwid2lkdGg6MTAwJTsgaGVpZ2h0OjUwMHB4OyBib3JkZXI6MDsgYm9yZGVyLXJhZGl1czogNHB4OyBvdmVyZmxvdzpoaWRkZW47XCJcclxuICAgICB0aXRsZT1cInB1cnBsZS1odHRwLTNjdmVtXCJcclxuICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGFtYmllbnQtbGlnaHQtc2Vuc29yOyBjYW1lcmE7IGVuY3J5cHRlZC1tZWRpYTsgZ2VvbG9jYXRpb247IGd5cm9zY29wZTsgaGlkOyBtaWNyb3Bob25lOyBtaWRpOyBwYXltZW50OyB1c2I7IHZyOyB4ci1zcGF0aWFsLXRyYWNraW5nXCJcclxuICAgICBzYW5kYm94PVwiYWxsb3ctZm9ybXMgYWxsb3ctbW9kYWxzIGFsbG93LXBvcHVwcyBhbGxvdy1wcmVzZW50YXRpb24gYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctc2NyaXB0c1wiXHJcbiAgID48L2lmcmFtZT5gLFxyXG4gICAgICAgIHRpdGxlOiBcIkNvbm5lY3RpbmcgSFRNTCBhbmQgSmF2YVNjcmlwdFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJUbyBpbnNlcnQgSmF2YVNjcmlwdCBjb2RlIGluIGFuIEhUTUwgcGFnZSB3ZSB1c2UgdGhlIDxzY3JpcHQ+IHRhZy5cXG5UaGUgdHdvIG9wdGlvbnMgYXJlIHRvIHdyaXRlIHRoZSBKYXZhU2NyaXB0IGNvZGUgaW5zaWRlIHRoZSB0YWcgb3IgbGluayB0byBhIEphdmFTY3JpcHQgZmlsZSB3aXRoIGEgdXJsLlwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgZW1iZWQ6IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vZW1iZWQvZmVydmVudC1jZG4tMmUwcnQ/YXV0b3Jlc2l6ZT0xJmV4cGFuZGRldnRvb2xzPTEmZm9udHNpemU9MTQmaGlkZW5hdmlnYXRpb249MSZ0aGVtZT1kYXJrXCJcclxuICAgICBzdHlsZT1cIndpZHRoOjEwMCU7IGhlaWdodDo1MDBweDsgYm9yZGVyOjA7IGJvcmRlci1yYWRpdXM6IDRweDsgb3ZlcmZsb3c6aGlkZGVuO1wiXHJcbiAgICAgdGl0bGU9XCJmZXJ2ZW50LWNkbi0yZTBydFwiXHJcbiAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhbWJpZW50LWxpZ2h0LXNlbnNvcjsgY2FtZXJhOyBlbmNyeXB0ZWQtbWVkaWE7IGdlb2xvY2F0aW9uOyBneXJvc2NvcGU7IGhpZDsgbWljcm9waG9uZTsgbWlkaTsgcGF5bWVudDsgdXNiOyB2cjsgeHItc3BhdGlhbC10cmFja2luZ1wiXHJcbiAgICAgc2FuZGJveD1cImFsbG93LWZvcm1zIGFsbG93LW1vZGFscyBhbGxvdy1wb3B1cHMgYWxsb3ctcHJlc2VudGF0aW9uIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHNcIlxyXG4gICA+PC9pZnJhbWU+YCxcclxuICAgICAgICB0aXRsZTogXCJUeXBlcyBhbmQgVmFyaWFibGVzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIkphdmFTY3JpcHQgdmFyaWFibGVzIGFyZSB1c2VkIHRvIHNhdmUgc29tZSB2YWx1ZSBvciBkYXRhIHRvIHJldXNlIGl0IGxhdGVyLiBEZWNsYXJpbmcgYW5kIHVzaW5nIGEgdmFyaWFibGUgaXMgZWFzeSBzaW5jZSB5b3UgZG9uJ3QgbmVlZCB0byBzcGVjaWZ5IHRoZSB0eXBlLlwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgZW1iZWQ6IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vZW1iZWQvY29tcGV0ZW50LXdpbGRmbG93ZXItajM2MnE/YXV0b3Jlc2l6ZT0xJmV4cGFuZGRldnRvb2xzPTEmZm9udHNpemU9MTQmaGlkZW5hdmlnYXRpb249MSZ0aGVtZT1kYXJrXCJcclxuICAgICBzdHlsZT1cIndpZHRoOjEwMCU7IGhlaWdodDo1MDBweDsgYm9yZGVyOjA7IGJvcmRlci1yYWRpdXM6IDRweDsgb3ZlcmZsb3c6aGlkZGVuO1wiXHJcbiAgICAgdGl0bGU9XCJjb21wZXRlbnQtd2lsZGZsb3dlci1qMzYycVwiXHJcbiAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhbWJpZW50LWxpZ2h0LXNlbnNvcjsgY2FtZXJhOyBlbmNyeXB0ZWQtbWVkaWE7IGdlb2xvY2F0aW9uOyBneXJvc2NvcGU7IGhpZDsgbWljcm9waG9uZTsgbWlkaTsgcGF5bWVudDsgdXNiOyB2cjsgeHItc3BhdGlhbC10cmFja2luZ1wiXHJcbiAgICAgc2FuZGJveD1cImFsbG93LWZvcm1zIGFsbG93LW1vZGFscyBhbGxvdy1wb3B1cHMgYWxsb3ctcHJlc2VudGF0aW9uIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHNcIlxyXG4gICA+PC9pZnJhbWU+YCxcclxuICAgICAgICB0aXRsZTogXCJDb25kaXRpb25zXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIk1ha2luZyBjb25kaXRpb25zIGhlbHBzIHRvIGRlY2lkZSB3aGF0IHlvdXIgY29kZSB3aWxsIGRvIG5leHQuIEZvciB0aGVzZSBjYXNlIHdlIHVzZSBpZiwgZWxzZSBhbmQgc3dpdGNoIHN0YXRlbWVudHMuXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBlbWJlZDogYDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9lbWJlZC9wcmFjdGljYWwtc2t5LTk0dDBnP2F1dG9yZXNpemU9MSZleHBhbmRkZXZ0b29scz0xJmZvbnRzaXplPTE0JmhpZGVuYXZpZ2F0aW9uPTEmdGhlbWU9ZGFya1wiXHJcbiAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlOyBoZWlnaHQ6NTAwcHg7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OmhpZGRlbjtcIlxyXG4gICAgIHRpdGxlPVwicHJhY3RpY2FsLXNreS05NHQwZ1wiXHJcbiAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhbWJpZW50LWxpZ2h0LXNlbnNvcjsgY2FtZXJhOyBlbmNyeXB0ZWQtbWVkaWE7IGdlb2xvY2F0aW9uOyBneXJvc2NvcGU7IGhpZDsgbWljcm9waG9uZTsgbWlkaTsgcGF5bWVudDsgdXNiOyB2cjsgeHItc3BhdGlhbC10cmFja2luZ1wiXHJcbiAgICAgc2FuZGJveD1cImFsbG93LWZvcm1zIGFsbG93LW1vZGFscyBhbGxvdy1wb3B1cHMgYWxsb3ctcHJlc2VudGF0aW9uIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHNcIlxyXG4gICA+PC9pZnJhbWU+YCxcclxuICAgICAgICB0aXRsZTogXCJGdW5jdGlvbnNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiRnVuY3Rpb25zIGFyZSBibG9ja3Mgb2YgY29kZSB5b3UgY2FuIGRlY2xhcmUgdG8gY2FsbCAoZXhlY3V0ZSkgbGF0ZXIgYXQgdGhlIHJpZ2h0IHRpbWUuIFRoZXkgYXJlIHZlcnkgdXNlZnVsIGluIG9yZGVyIHRvIHJldXNlIHNwZWNpZmljIGNvZGUgYWN0aW9ucy5cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGVtYmVkOiBgPGlmcmFtZSBzcmM9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL3JvbWFudGljLWFyeWFiaGF0YS1qZjFwaT9hdXRvcmVzaXplPTEmZXhwYW5kZGV2dG9vbHM9MSZmb250c2l6ZT0xNCZoaWRlbmF2aWdhdGlvbj0xJnRoZW1lPWRhcmtcIlxyXG4gICAgIHN0eWxlPVwid2lkdGg6MTAwJTsgaGVpZ2h0OjUwMHB4OyBib3JkZXI6MDsgYm9yZGVyLXJhZGl1czogNHB4OyBvdmVyZmxvdzpoaWRkZW47XCJcclxuICAgICB0aXRsZT1cInJvbWFudGljLWFyeWFiaGF0YS1qZjFwaVwiXHJcbiAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhbWJpZW50LWxpZ2h0LXNlbnNvcjsgY2FtZXJhOyBlbmNyeXB0ZWQtbWVkaWE7IGdlb2xvY2F0aW9uOyBneXJvc2NvcGU7IGhpZDsgbWljcm9waG9uZTsgbWlkaTsgcGF5bWVudDsgdXNiOyB2cjsgeHItc3BhdGlhbC10cmFja2luZ1wiXHJcbiAgICAgc2FuZGJveD1cImFsbG93LWZvcm1zIGFsbG93LW1vZGFscyBhbGxvdy1wb3B1cHMgYWxsb3ctcHJlc2VudGF0aW9uIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHNcIlxyXG4gICA+PC9pZnJhbWU+YCxcclxuICAgICAgICB0aXRsZTogXCJMb29wc1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJNYW55IHRpbWVzIHlvdSB3aWxsIGZpbmQgdGhhdCB5b3Ugd2FudCB0byBnbyBvdmVyIGFuIGFycmF5IGxpc3Qgb3IgdmFsdWVzIG9mIGFuIG9iamVjdC4gVGhlcmUgYXJlIG1hbnkgd2F5cyB0byBkbyBsb29wcyBhbmQgd2UnbGwgY292ZXIgdGhlIGJhc2ljIG9uZXMgaGVyZS5cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGVtYmVkOiBgPGlmcmFtZSBzcmM9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL3NpbGVudC1maXJlZmx5LXgwaHNyP2F1dG9yZXNpemU9MSZleHBhbmRkZXZ0b29scz0xJmZvbnRzaXplPTE0JmhpZGVuYXZpZ2F0aW9uPTEmdGhlbWU9ZGFya1wiXHJcbiAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlOyBoZWlnaHQ6NTAwcHg7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OmhpZGRlbjtcIlxyXG4gICAgIHRpdGxlPVwic2lsZW50LWZpcmVmbHkteDBoc3JcIlxyXG4gICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYW1iaWVudC1saWdodC1zZW5zb3I7IGNhbWVyYTsgZW5jcnlwdGVkLW1lZGlhOyBnZW9sb2NhdGlvbjsgZ3lyb3Njb3BlOyBoaWQ7IG1pY3JvcGhvbmU7IG1pZGk7IHBheW1lbnQ7IHVzYjsgdnI7IHhyLXNwYXRpYWwtdHJhY2tpbmdcIlxyXG4gICAgIHNhbmRib3g9XCJhbGxvdy1mb3JtcyBhbGxvdy1tb2RhbHMgYWxsb3ctcG9wdXBzIGFsbG93LXByZXNlbnRhdGlvbiBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1zY3JpcHRzXCJcclxuICAgPjwvaWZyYW1lPmAsXHJcbiAgICAgICAgdGl0bGU6IFwiQ2hhbmdpbmcgdGhlIERPTSAodGhlIEhUTUwgb3IgdGhlIHBhZ2UpXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIlRvIG1ha2Ugd2Vic2l0ZXMgaW50ZXJhY3RpdmUgeW91IG1pZ2h0IHdhbnQgdG8gY2hhbmdlIHRoZSBwYWdlIGJ5IGFkZGluZyBkaWZmZXJlbnQgc3R5bGVzIG9yIHNob3dpbmcgZGlmZmVyZW50IGRhdGEuIFRvIGRvIHRoYXQgd2UgZmV0Y2ggdGhlIGVsZW1lbnQgKGh0bWwgdGFnKSB0aGF0IHdlIHdhbnQgdG8gY2hhbmdlIGFuZCBtYWtlIG91ciBjaGFuZ2VzIG9uIGl0LlwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgZW1iZWQ6IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vZW1iZWQvYWRtaXJpbmctcml2ZXItazBuc2s/YXV0b3Jlc2l6ZT0xJmZvbnRzaXplPTE2JmhpZGVuYXZpZ2F0aW9uPTEmdGhlbWU9ZGFya1wiXHJcbiAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlOyBoZWlnaHQ6NTAwcHg7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OmhpZGRlbjtcIlxyXG4gICAgIHRpdGxlPVwiYWRtaXJpbmctcml2ZXItazBuc2tcIlxyXG4gICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYW1iaWVudC1saWdodC1zZW5zb3I7IGNhbWVyYTsgZW5jcnlwdGVkLW1lZGlhOyBnZW9sb2NhdGlvbjsgZ3lyb3Njb3BlOyBoaWQ7IG1pY3JvcGhvbmU7IG1pZGk7IHBheW1lbnQ7IHVzYjsgdnI7IHhyLXNwYXRpYWwtdHJhY2tpbmdcIlxyXG4gICAgIHNhbmRib3g9XCJhbGxvdy1mb3JtcyBhbGxvdy1tb2RhbHMgYWxsb3ctcG9wdXBzIGFsbG93LXByZXNlbnRhdGlvbiBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1zY3JpcHRzXCJcclxuICAgPjwvaWZyYW1lPmAsXHJcbiAgICAgICAgdGl0bGU6IFwiRXZlbnRzIGluIHRoZSBicm93c2VyXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIkV2ZXJ5IHRhZyBvbiB0aGUgcGFnZSBoYXMgbWFueSBldmVudHMgdGhhdCB5b3UgY2FuIGxpc3RlbiB0byBhbmQgYXNzaWduIGEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gdGhhdCBldmVudCBoYXBwZW5zLiBTb21lIG9mIHRoZSBiYXNpYyBvbmVzIGFyZSBjbGljayAoYSBsZWZ0IGNsaWNrIG9mIHRoZSBtb3VzZSBvbiB0aGUgdGFnKSwgaG92ZXIsIGtleWRvd24gKHdoZW4gYSB1c2VyIGNsaWNrcyBhIGtleSBvbiB0aGUga2V5Ym9hcmQpIGFuZCBtYW55IG1vcmUgZXZlbnRzLlwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5dO1xyXG5cclxuLy8gZnV0dXJlIGl0ZW1zXHJcbmNvbnN0IGZ1dHVyZUl0ZW1zID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiTm9kZS5qc1wiLFxyXG4gICAgc3ViVGl0bGU6IFwiSmF2YVNjcmlwdCBTZXJ2ZXItc2lkZVwiLFxyXG4gICAgaW1nOiBub2RlanNJbWFnZSxcclxuICAgIHByZXJlcXVpc2l0czogW1wiamF2YXNjcmlwdFwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiUmVhY3RcIixcclxuICAgIHN1YlRpdGxlOiBcIkphdmFTY3JpcHQgVUkgTGlicmFyeVwiLFxyXG4gICAgaW1nOiByZWFjdEltYWdlLFxyXG4gICAgcHJlcmVxdWlzaXRzOiBbXCJodG1sXCIsIFwiY3NzXCIsIFwiamF2YXNjcmlwdFwiXSxcclxuICB9LFxyXG5dO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9