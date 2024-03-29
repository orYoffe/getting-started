webpackHotUpdate_N_E("pages/[item]",{

/***/ "./util/data/node.js":
/*!***************************!*\
  !*** ./util/data/node.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images */ "./util/images.js");

var nodejs = {
  name: "Node.js",
  subTitle: "JavaScript Server-side, without html",
  description: "Node.js is the way to run JavaScript on your machine outside of the browser. Whether you want to build a server or just a script that reads and writes files, Node.js is useful in many ways to extend your capabilities with JavaScript outside of the browser. Make sure to install Node.js to your machine before starting this guide. You can find the download link here: https://nodejs.org/en/download/",
  img: _images__WEBPACK_IMPORTED_MODULE_0__["nodejsImage"],
  prerequisits: ["javascript"],
  parts: [{
    embed: "<iframe height=\"1000px\" width=\"100%\" src=\"https://repl.it/@OrYoffe/ConcreteDecisiveMedia?lite=true\" scrolling=\"no\" frameborder=\"no\" allowtransparency=\"true\" allowfullscreen=\"true\" sandbox=\"allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals\"></iframe>",
    //   embed: ` <iframe frameborder="0" width="100%" height="500px" src="https://stackblitz.com/edit/js-fp2vpz?devtoolsheight=33&embed=1&file=index.js&theme=dark"></iframe>`,
    //   embed: ` <iframe frameborder="0" width="100%" height="500px" src="https://repl.it/@OrYoffe/ConcreteDecisiveMedia?lite=true"></iframe>`,
    title: "Another way to run JavaScript",
    description: "You can do many things with Node.js, the first part to get through is running a JavaScript file on your machine with it. Try doing this yourself on your machine. If you encounter issues with the terminal (Mac) or command-line (Windows), don't be shy and Google to how to change directory with the \"cd\" command and any other issue you might have. There's an answer to any issue, since many tackled it before you and me. Try to be specific as possible when searching and try different search terms.",
    bottomText: 'You can create your own .js files like this "index.js" or "any-name_you_want.js" and run them in your terminal/command-line by running "node index.js" from the folder the file is in.'
  }, {
    embed: "<iframe height=\"1000px\" width=\"100%\" src=\"https://repl.it/@OrYoffe/WarlikeOrganicProcedurallanguage?lite=true\" scrolling=\"no\" frameborder=\"no\" allowtransparency=\"true\" allowfullscreen=\"true\" sandbox=\"allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals\"></iframe>",
    title: "Requiring other files and modules",
    description: "Node.js comes with a built-in function called 'require' to fetch other JavaScript files and Modules and 'module.exports' to export functionality and data to other JavaScript files. Node.js also comes with many 'core modules' such as 'fs' (file system) and many more. To check more of the 'core modules' head over to https://www.w3schools.com/nodejs/ref_modules.asp.",
    bottomText: "Try this script on your own computer. The best way to learn is by doing. Try writing a script that will write and prints stuff you need to do, like a todo list."
  }, {
    embed: "<iframe src=\"https://codesandbox.io/embed/web-server-e5icx?autoresize=1&expanddevtools=1&fontsize=16&theme=dark\"\n     style=\"width:100%; height:1000px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"web server\"\n     allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\n     sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n   ></iframe>",
    title: "The 'package.json' file, npm (node.js package manager) and express (a simple web server framework)",
    description: 'Node.js projects manage their "dependencies", scripts (commands) and other meta data about the project. To install libraries or any other module for you project, most Node.js developers use npm, the Node.js package manager. By entering "npm install express" in your terminal/comman-line in your project, \'express\' will be added to your list of dependencies and you can require("express") in your project and use it to build a web server.',
    bottomText: "Try this script on your own computer. When you run a web server on your machine, the domain will be localhost so you can access it to the port it is listening to, like 8080 in this example. You can open the browser at http://localhost:8080"
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (nodejs);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9kYXRhL25vZGUuanMiXSwibmFtZXMiOlsibm9kZWpzIiwibmFtZSIsInN1YlRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWciLCJub2RlanNJbWFnZSIsInByZXJlcXVpc2l0cyIsInBhcnRzIiwiZW1iZWQiLCJ0aXRsZSIsImJvdHRvbVRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFNQSxNQUFNLEdBQUc7QUFDYkMsTUFBSSxFQUFFLFNBRE87QUFFYkMsVUFBUSxFQUFFLHNDQUZHO0FBR2JDLGFBQVcsRUFDVCxnWkFKVztBQUtiQyxLQUFHLEVBQUVDLG1EQUxRO0FBTWJDLGNBQVksRUFBRSxDQUFDLFlBQUQsQ0FORDtBQU9iQyxPQUFLLEVBQUUsQ0FDTDtBQUNFQyxTQUFLLG9UQURQO0FBRUU7QUFDQTtBQUNBQyxTQUFLLEVBQUUsK0JBSlQ7QUFLRU4sZUFBVyxFQUNULG9mQU5KO0FBT0VPLGNBQVUsRUFDUjtBQVJKLEdBREssRUFXTDtBQUNFRixTQUFLLCtUQURQO0FBRUVDLFNBQUssRUFBRSxtQ0FGVDtBQUdFTixlQUFXLEVBQ1QsK1dBSko7QUFLRU8sY0FBVSxFQUNSO0FBTkosR0FYSyxFQW1CTDtBQUNFRixTQUFLLHdnQkFEUDtBQU9FQyxTQUFLLEVBQ0gsb0dBUko7QUFTRU4sZUFBVyxFQUNULHliQVZKO0FBV0VPLGNBQVUsRUFDUjtBQVpKLEdBbkJLO0FBUE0sQ0FBZjtBQTJDZVYscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2l0ZW1dLjY3MTIwZmQ2Mzc1Y2NjZTBhODM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBub2RlanNJbWFnZSB9IGZyb20gXCIuLi9pbWFnZXNcIjtcclxuXHJcbmNvbnN0IG5vZGVqcyA9IHtcclxuICBuYW1lOiBcIk5vZGUuanNcIixcclxuICBzdWJUaXRsZTogXCJKYXZhU2NyaXB0IFNlcnZlci1zaWRlLCB3aXRob3V0IGh0bWxcIixcclxuICBkZXNjcmlwdGlvbjpcclxuICAgIFwiTm9kZS5qcyBpcyB0aGUgd2F5IHRvIHJ1biBKYXZhU2NyaXB0IG9uIHlvdXIgbWFjaGluZSBvdXRzaWRlIG9mIHRoZSBicm93c2VyLiBXaGV0aGVyIHlvdSB3YW50IHRvIGJ1aWxkIGEgc2VydmVyIG9yIGp1c3QgYSBzY3JpcHQgdGhhdCByZWFkcyBhbmQgd3JpdGVzIGZpbGVzLCBOb2RlLmpzIGlzIHVzZWZ1bCBpbiBtYW55IHdheXMgdG8gZXh0ZW5kIHlvdXIgY2FwYWJpbGl0aWVzIHdpdGggSmF2YVNjcmlwdCBvdXRzaWRlIG9mIHRoZSBicm93c2VyLiBNYWtlIHN1cmUgdG8gaW5zdGFsbCBOb2RlLmpzIHRvIHlvdXIgbWFjaGluZSBiZWZvcmUgc3RhcnRpbmcgdGhpcyBndWlkZS4gWW91IGNhbiBmaW5kIHRoZSBkb3dubG9hZCBsaW5rIGhlcmU6IGh0dHBzOi8vbm9kZWpzLm9yZy9lbi9kb3dubG9hZC9cIixcclxuICBpbWc6IG5vZGVqc0ltYWdlLFxyXG4gIHByZXJlcXVpc2l0czogW1wiamF2YXNjcmlwdFwiXSxcclxuICBwYXJ0czogW1xyXG4gICAge1xyXG4gICAgICBlbWJlZDogYDxpZnJhbWUgaGVpZ2h0PVwiMTAwMHB4XCIgd2lkdGg9XCIxMDAlXCIgc3JjPVwiaHR0cHM6Ly9yZXBsLml0L0BPcllvZmZlL0NvbmNyZXRlRGVjaXNpdmVNZWRpYT9saXRlPXRydWVcIiBzY3JvbGxpbmc9XCJub1wiIGZyYW1lYm9yZGVyPVwibm9cIiBhbGxvd3RyYW5zcGFyZW5jeT1cInRydWVcIiBhbGxvd2Z1bGxzY3JlZW49XCJ0cnVlXCIgc2FuZGJveD1cImFsbG93LWZvcm1zIGFsbG93LXBvaW50ZXItbG9jayBhbGxvdy1wb3B1cHMgYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctc2NyaXB0cyBhbGxvdy1tb2RhbHNcIj48L2lmcmFtZT5gLFxyXG4gICAgICAvLyAgIGVtYmVkOiBgIDxpZnJhbWUgZnJhbWVib3JkZXI9XCIwXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNTAwcHhcIiBzcmM9XCJodHRwczovL3N0YWNrYmxpdHouY29tL2VkaXQvanMtZnAydnB6P2RldnRvb2xzaGVpZ2h0PTMzJmVtYmVkPTEmZmlsZT1pbmRleC5qcyZ0aGVtZT1kYXJrXCI+PC9pZnJhbWU+YCxcclxuICAgICAgLy8gICBlbWJlZDogYCA8aWZyYW1lIGZyYW1lYm9yZGVyPVwiMFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjUwMHB4XCIgc3JjPVwiaHR0cHM6Ly9yZXBsLml0L0BPcllvZmZlL0NvbmNyZXRlRGVjaXNpdmVNZWRpYT9saXRlPXRydWVcIj48L2lmcmFtZT5gLFxyXG4gICAgICB0aXRsZTogXCJBbm90aGVyIHdheSB0byBydW4gSmF2YVNjcmlwdFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIllvdSBjYW4gZG8gbWFueSB0aGluZ3Mgd2l0aCBOb2RlLmpzLCB0aGUgZmlyc3QgcGFydCB0byBnZXQgdGhyb3VnaCBpcyBydW5uaW5nIGEgSmF2YVNjcmlwdCBmaWxlIG9uIHlvdXIgbWFjaGluZSB3aXRoIGl0LiBUcnkgZG9pbmcgdGhpcyB5b3Vyc2VsZiBvbiB5b3VyIG1hY2hpbmUuIElmIHlvdSBlbmNvdW50ZXIgaXNzdWVzIHdpdGggdGhlIHRlcm1pbmFsIChNYWMpIG9yIGNvbW1hbmQtbGluZSAoV2luZG93cyksIGRvbid0IGJlIHNoeSBhbmQgR29vZ2xlIHRvIGhvdyB0byBjaGFuZ2UgZGlyZWN0b3J5IHdpdGggdGhlIFxcXCJjZFxcXCIgY29tbWFuZCBhbmQgYW55IG90aGVyIGlzc3VlIHlvdSBtaWdodCBoYXZlLiBUaGVyZSdzIGFuIGFuc3dlciB0byBhbnkgaXNzdWUsIHNpbmNlIG1hbnkgdGFja2xlZCBpdCBiZWZvcmUgeW91IGFuZCBtZS4gVHJ5IHRvIGJlIHNwZWNpZmljIGFzIHBvc3NpYmxlIHdoZW4gc2VhcmNoaW5nIGFuZCB0cnkgZGlmZmVyZW50IHNlYXJjaCB0ZXJtcy5cIixcclxuICAgICAgYm90dG9tVGV4dDpcclxuICAgICAgICAnWW91IGNhbiBjcmVhdGUgeW91ciBvd24gLmpzIGZpbGVzIGxpa2UgdGhpcyBcImluZGV4LmpzXCIgb3IgXCJhbnktbmFtZV95b3Vfd2FudC5qc1wiIGFuZCBydW4gdGhlbSBpbiB5b3VyIHRlcm1pbmFsL2NvbW1hbmQtbGluZSBieSBydW5uaW5nIFwibm9kZSBpbmRleC5qc1wiIGZyb20gdGhlIGZvbGRlciB0aGUgZmlsZSBpcyBpbi4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZW1iZWQ6IGA8aWZyYW1lIGhlaWdodD1cIjEwMDBweFwiIHdpZHRoPVwiMTAwJVwiIHNyYz1cImh0dHBzOi8vcmVwbC5pdC9AT3JZb2ZmZS9XYXJsaWtlT3JnYW5pY1Byb2NlZHVyYWxsYW5ndWFnZT9saXRlPXRydWVcIiBzY3JvbGxpbmc9XCJub1wiIGZyYW1lYm9yZGVyPVwibm9cIiBhbGxvd3RyYW5zcGFyZW5jeT1cInRydWVcIiBhbGxvd2Z1bGxzY3JlZW49XCJ0cnVlXCIgc2FuZGJveD1cImFsbG93LWZvcm1zIGFsbG93LXBvaW50ZXItbG9jayBhbGxvdy1wb3B1cHMgYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctc2NyaXB0cyBhbGxvdy1tb2RhbHNcIj48L2lmcmFtZT5gLFxyXG4gICAgICB0aXRsZTogXCJSZXF1aXJpbmcgb3RoZXIgZmlsZXMgYW5kIG1vZHVsZXNcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJOb2RlLmpzIGNvbWVzIHdpdGggYSBidWlsdC1pbiBmdW5jdGlvbiBjYWxsZWQgJ3JlcXVpcmUnIHRvIGZldGNoIG90aGVyIEphdmFTY3JpcHQgZmlsZXMgYW5kIE1vZHVsZXMgYW5kICdtb2R1bGUuZXhwb3J0cycgdG8gZXhwb3J0IGZ1bmN0aW9uYWxpdHkgYW5kIGRhdGEgdG8gb3RoZXIgSmF2YVNjcmlwdCBmaWxlcy4gTm9kZS5qcyBhbHNvIGNvbWVzIHdpdGggbWFueSAnY29yZSBtb2R1bGVzJyBzdWNoIGFzICdmcycgKGZpbGUgc3lzdGVtKSBhbmQgbWFueSBtb3JlLiBUbyBjaGVjayBtb3JlIG9mIHRoZSAnY29yZSBtb2R1bGVzJyBoZWFkIG92ZXIgdG8gaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9ub2RlanMvcmVmX21vZHVsZXMuYXNwLlwiLFxyXG4gICAgICBib3R0b21UZXh0OlxyXG4gICAgICAgIFwiVHJ5IHRoaXMgc2NyaXB0IG9uIHlvdXIgb3duIGNvbXB1dGVyLiBUaGUgYmVzdCB3YXkgdG8gbGVhcm4gaXMgYnkgZG9pbmcuIFRyeSB3cml0aW5nIGEgc2NyaXB0IHRoYXQgd2lsbCB3cml0ZSBhbmQgcHJpbnRzIHN0dWZmIHlvdSBuZWVkIHRvIGRvLCBsaWtlIGEgdG9kbyBsaXN0LlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZW1iZWQ6IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vZW1iZWQvd2ViLXNlcnZlci1lNWljeD9hdXRvcmVzaXplPTEmZXhwYW5kZGV2dG9vbHM9MSZmb250c2l6ZT0xNiZ0aGVtZT1kYXJrXCJcclxuICAgICBzdHlsZT1cIndpZHRoOjEwMCU7IGhlaWdodDoxMDAwcHg7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiA0cHg7IG92ZXJmbG93OmhpZGRlbjtcIlxyXG4gICAgIHRpdGxlPVwid2ViIHNlcnZlclwiXHJcbiAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhbWJpZW50LWxpZ2h0LXNlbnNvcjsgY2FtZXJhOyBlbmNyeXB0ZWQtbWVkaWE7IGdlb2xvY2F0aW9uOyBneXJvc2NvcGU7IGhpZDsgbWljcm9waG9uZTsgbWlkaTsgcGF5bWVudDsgdXNiOyB2cjsgeHItc3BhdGlhbC10cmFja2luZ1wiXHJcbiAgICAgc2FuZGJveD1cImFsbG93LWZvcm1zIGFsbG93LW1vZGFscyBhbGxvdy1wb3B1cHMgYWxsb3ctcHJlc2VudGF0aW9uIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHNcIlxyXG4gICA+PC9pZnJhbWU+YCxcclxuICAgICAgdGl0bGU6XHJcbiAgICAgICAgXCJUaGUgJ3BhY2thZ2UuanNvbicgZmlsZSwgbnBtIChub2RlLmpzIHBhY2thZ2UgbWFuYWdlcikgYW5kIGV4cHJlc3MgKGEgc2ltcGxlIHdlYiBzZXJ2ZXIgZnJhbWV3b3JrKVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAnTm9kZS5qcyBwcm9qZWN0cyBtYW5hZ2UgdGhlaXIgXCJkZXBlbmRlbmNpZXNcIiwgc2NyaXB0cyAoY29tbWFuZHMpIGFuZCBvdGhlciBtZXRhIGRhdGEgYWJvdXQgdGhlIHByb2plY3QuIFRvIGluc3RhbGwgbGlicmFyaWVzIG9yIGFueSBvdGhlciBtb2R1bGUgZm9yIHlvdSBwcm9qZWN0LCBtb3N0IE5vZGUuanMgZGV2ZWxvcGVycyB1c2UgbnBtLCB0aGUgTm9kZS5qcyBwYWNrYWdlIG1hbmFnZXIuIEJ5IGVudGVyaW5nIFwibnBtIGluc3RhbGwgZXhwcmVzc1wiIGluIHlvdXIgdGVybWluYWwvY29tbWFuLWxpbmUgaW4geW91ciBwcm9qZWN0LCBcXCdleHByZXNzXFwnIHdpbGwgYmUgYWRkZWQgdG8geW91ciBsaXN0IG9mIGRlcGVuZGVuY2llcyBhbmQgeW91IGNhbiByZXF1aXJlKFwiZXhwcmVzc1wiKSBpbiB5b3VyIHByb2plY3QgYW5kIHVzZSBpdCB0byBidWlsZCBhIHdlYiBzZXJ2ZXIuJyxcclxuICAgICAgYm90dG9tVGV4dDpcclxuICAgICAgICBcIlRyeSB0aGlzIHNjcmlwdCBvbiB5b3VyIG93biBjb21wdXRlci4gV2hlbiB5b3UgcnVuIGEgd2ViIHNlcnZlciBvbiB5b3VyIG1hY2hpbmUsIHRoZSBkb21haW4gd2lsbCBiZSBsb2NhbGhvc3Qgc28geW91IGNhbiBhY2Nlc3MgaXQgdG8gdGhlIHBvcnQgaXQgaXMgbGlzdGVuaW5nIHRvLCBsaWtlIDgwODAgaW4gdGhpcyBleGFtcGxlLiBZb3UgY2FuIG9wZW4gdGhlIGJyb3dzZXIgYXQgaHR0cDovL2xvY2FsaG9zdDo4MDgwXCIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBub2RlanM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=