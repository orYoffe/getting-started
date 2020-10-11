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
  parts: [// {
  //   image: "anatomy-of-an-html-element.png",
  //   title: "HTML tag structure",
  //   description:
  //     "An html tag is made out of it's openning tag, closing tag, it's content in the middle and it's attributes and values on it's opening tag.\n There are tags the don't have closing tags like the <br/> and <img/> tags.",
  // },

  /*
  <iframe height="1000px" width="100%" src="https://repl.it/@OrYoffe/ConcreteDecisiveMedia?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
    
   */
  {
    embed: "<iframe height=\"1000px\" width=\"100%\" src=\"https://repl.it/@OrYoffe/ConcreteDecisiveMedia?lite=true\" scrolling=\"no\" frameborder=\"no\" allowtransparency=\"true\" allowfullscreen=\"true\" sandbox=\"allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals\"></iframe>",
    //   embed: ` <iframe frameborder="0" width="100%" height="500px" src="https://stackblitz.com/edit/js-fp2vpz?devtoolsheight=33&embed=1&file=index.js&theme=dark"></iframe>`,
    //   embed: ` <iframe frameborder="0" width="100%" height="500px" src="https://repl.it/@OrYoffe/ConcreteDecisiveMedia?lite=true"></iframe>`,
    title: "Another way to run JavaScript",
    description: "You can do many things with Node.js, the first part to get through is running a JavaScript file on your machine with it. Try doing this yourself on your machine. If you encounter issues with the terminal (Mac) or command-line (Windows), don't be shy and Google to how to change directory with the \"cd\" command and any other issue you might have. There's an answer to any issue, since many tackled it before you and me. Try to be specific as possible when searching and try different search terms.",
    bottomText: 'You can create your own .js files like this "index.js" or "any-name_you_want.js" and run them in your terminal/command-line by running "node index.js" from the folder the file is in.'
  }, {
    embed: "<iframe height=\"400px\" width=\"100%\" src=\"https://repl.it/@OrYoffe/WarlikeOrganicProcedurallanguage?lite=true\" scrolling=\"no\" frameborder=\"no\" allowtransparency=\"true\" allowfullscreen=\"true\" sandbox=\"allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals\"></iframe>",
    title: "Requiring other files and modules",
    description: "Node.js comes with a built-in function called 'require' to fetch other JavaScript files and Modules and 'module.exports' to export functionality and data to other JavaScript files. Node.js also comes with many 'core modules' such as 'fs' (file system) and many more. To check more of the 'core modules' head over to https://www.w3schools.com/nodejs/ref_modules.asp.",
    bottomText: "Try this script on your own computer. The best way to learn is by doing :)"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9kYXRhL25vZGUuanMiXSwibmFtZXMiOlsibm9kZWpzIiwibmFtZSIsInN1YlRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWciLCJub2RlanNJbWFnZSIsInByZXJlcXVpc2l0cyIsInBhcnRzIiwiZW1iZWQiLCJ0aXRsZSIsImJvdHRvbVRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFNQSxNQUFNLEdBQUc7QUFDYkMsTUFBSSxFQUFFLFNBRE87QUFFYkMsVUFBUSxFQUFFLHNDQUZHO0FBR2JDLGFBQVcsRUFDVCxnWkFKVztBQUtiQyxLQUFHLEVBQUVDLG1EQUxRO0FBTWJDLGNBQVksRUFBRSxDQUFDLFlBQUQsQ0FORDtBQU9iQyxPQUFLLEVBQUUsQ0FDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7Ozs7QUFJQTtBQUNFQyxTQUFLLG9UQURQO0FBRUU7QUFDQTtBQUNBQyxTQUFLLEVBQUUsK0JBSlQ7QUFLRU4sZUFBVyxFQUNULG9mQU5KO0FBT0VPLGNBQVUsRUFDUjtBQVJKLEdBWEssRUFxQkw7QUFDRUYsU0FBSyw4VEFEUDtBQUVFQyxTQUFLLEVBQUUsbUNBRlQ7QUFHRU4sZUFBVyxFQUNULCtXQUpKO0FBS0VPLGNBQVUsRUFDUjtBQU5KLEdBckJLO0FBUE0sQ0FBZjtBQXVDZVYscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2l0ZW1dLjhkMGIwMGFlOWQyZjBmMWZjZDMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBub2RlanNJbWFnZSB9IGZyb20gXCIuLi9pbWFnZXNcIjtcclxuXHJcbmNvbnN0IG5vZGVqcyA9IHtcclxuICBuYW1lOiBcIk5vZGUuanNcIixcclxuICBzdWJUaXRsZTogXCJKYXZhU2NyaXB0IFNlcnZlci1zaWRlLCB3aXRob3V0IGh0bWxcIixcclxuICBkZXNjcmlwdGlvbjpcclxuICAgIFwiTm9kZS5qcyBpcyB0aGUgd2F5IHRvIHJ1biBKYXZhU2NyaXB0IG9uIHlvdXIgbWFjaGluZSBvdXRzaWRlIG9mIHRoZSBicm93c2VyLiBXaGV0aGVyIHlvdSB3YW50IHRvIGJ1aWxkIGEgc2VydmVyIG9yIGp1c3QgYSBzY3JpcHQgdGhhdCByZWFkcyBhbmQgd3JpdGVzIGZpbGVzLCBOb2RlLmpzIGlzIHVzZWZ1bCBpbiBtYW55IHdheXMgdG8gZXh0ZW5kIHlvdXIgY2FwYWJpbGl0aWVzIHdpdGggSmF2YVNjcmlwdCBvdXRzaWRlIG9mIHRoZSBicm93c2VyLiBNYWtlIHN1cmUgdG8gaW5zdGFsbCBOb2RlLmpzIHRvIHlvdXIgbWFjaGluZSBiZWZvcmUgc3RhcnRpbmcgdGhpcyBndWlkZS4gWW91IGNhbiBmaW5kIHRoZSBkb3dubG9hZCBsaW5rIGhlcmU6IGh0dHBzOi8vbm9kZWpzLm9yZy9lbi9kb3dubG9hZC9cIixcclxuICBpbWc6IG5vZGVqc0ltYWdlLFxyXG4gIHByZXJlcXVpc2l0czogW1wiamF2YXNjcmlwdFwiXSxcclxuICBwYXJ0czogW1xyXG4gICAgLy8ge1xyXG4gICAgLy8gICBpbWFnZTogXCJhbmF0b215LW9mLWFuLWh0bWwtZWxlbWVudC5wbmdcIixcclxuICAgIC8vICAgdGl0bGU6IFwiSFRNTCB0YWcgc3RydWN0dXJlXCIsXHJcbiAgICAvLyAgIGRlc2NyaXB0aW9uOlxyXG4gICAgLy8gICAgIFwiQW4gaHRtbCB0YWcgaXMgbWFkZSBvdXQgb2YgaXQncyBvcGVubmluZyB0YWcsIGNsb3NpbmcgdGFnLCBpdCdzIGNvbnRlbnQgaW4gdGhlIG1pZGRsZSBhbmQgaXQncyBhdHRyaWJ1dGVzIGFuZCB2YWx1ZXMgb24gaXQncyBvcGVuaW5nIHRhZy5cXG4gVGhlcmUgYXJlIHRhZ3MgdGhlIGRvbid0IGhhdmUgY2xvc2luZyB0YWdzIGxpa2UgdGhlIDxici8+IGFuZCA8aW1nLz4gdGFncy5cIixcclxuICAgIC8vIH0sXHJcbiAgICAvKlxyXG4gICAgPGlmcmFtZSBoZWlnaHQ9XCIxMDAwcHhcIiB3aWR0aD1cIjEwMCVcIiBzcmM9XCJodHRwczovL3JlcGwuaXQvQE9yWW9mZmUvQ29uY3JldGVEZWNpc2l2ZU1lZGlhP2xpdGU9dHJ1ZVwiIHNjcm9sbGluZz1cIm5vXCIgZnJhbWVib3JkZXI9XCJub1wiIGFsbG93dHJhbnNwYXJlbmN5PVwidHJ1ZVwiIGFsbG93ZnVsbHNjcmVlbj1cInRydWVcIiBzYW5kYm94PVwiYWxsb3ctZm9ybXMgYWxsb3ctcG9pbnRlci1sb2NrIGFsbG93LXBvcHVwcyBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1zY3JpcHRzIGFsbG93LW1vZGFsc1wiPjwvaWZyYW1lPlxyXG4gICAgICBcclxuICAgICAqL1xyXG4gICAge1xyXG4gICAgICBlbWJlZDogYDxpZnJhbWUgaGVpZ2h0PVwiMTAwMHB4XCIgd2lkdGg9XCIxMDAlXCIgc3JjPVwiaHR0cHM6Ly9yZXBsLml0L0BPcllvZmZlL0NvbmNyZXRlRGVjaXNpdmVNZWRpYT9saXRlPXRydWVcIiBzY3JvbGxpbmc9XCJub1wiIGZyYW1lYm9yZGVyPVwibm9cIiBhbGxvd3RyYW5zcGFyZW5jeT1cInRydWVcIiBhbGxvd2Z1bGxzY3JlZW49XCJ0cnVlXCIgc2FuZGJveD1cImFsbG93LWZvcm1zIGFsbG93LXBvaW50ZXItbG9jayBhbGxvdy1wb3B1cHMgYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctc2NyaXB0cyBhbGxvdy1tb2RhbHNcIj48L2lmcmFtZT5gLFxyXG4gICAgICAvLyAgIGVtYmVkOiBgIDxpZnJhbWUgZnJhbWVib3JkZXI9XCIwXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNTAwcHhcIiBzcmM9XCJodHRwczovL3N0YWNrYmxpdHouY29tL2VkaXQvanMtZnAydnB6P2RldnRvb2xzaGVpZ2h0PTMzJmVtYmVkPTEmZmlsZT1pbmRleC5qcyZ0aGVtZT1kYXJrXCI+PC9pZnJhbWU+YCxcclxuICAgICAgLy8gICBlbWJlZDogYCA8aWZyYW1lIGZyYW1lYm9yZGVyPVwiMFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjUwMHB4XCIgc3JjPVwiaHR0cHM6Ly9yZXBsLml0L0BPcllvZmZlL0NvbmNyZXRlRGVjaXNpdmVNZWRpYT9saXRlPXRydWVcIj48L2lmcmFtZT5gLFxyXG4gICAgICB0aXRsZTogXCJBbm90aGVyIHdheSB0byBydW4gSmF2YVNjcmlwdFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIllvdSBjYW4gZG8gbWFueSB0aGluZ3Mgd2l0aCBOb2RlLmpzLCB0aGUgZmlyc3QgcGFydCB0byBnZXQgdGhyb3VnaCBpcyBydW5uaW5nIGEgSmF2YVNjcmlwdCBmaWxlIG9uIHlvdXIgbWFjaGluZSB3aXRoIGl0LiBUcnkgZG9pbmcgdGhpcyB5b3Vyc2VsZiBvbiB5b3VyIG1hY2hpbmUuIElmIHlvdSBlbmNvdW50ZXIgaXNzdWVzIHdpdGggdGhlIHRlcm1pbmFsIChNYWMpIG9yIGNvbW1hbmQtbGluZSAoV2luZG93cyksIGRvbid0IGJlIHNoeSBhbmQgR29vZ2xlIHRvIGhvdyB0byBjaGFuZ2UgZGlyZWN0b3J5IHdpdGggdGhlIFxcXCJjZFxcXCIgY29tbWFuZCBhbmQgYW55IG90aGVyIGlzc3VlIHlvdSBtaWdodCBoYXZlLiBUaGVyZSdzIGFuIGFuc3dlciB0byBhbnkgaXNzdWUsIHNpbmNlIG1hbnkgdGFja2xlZCBpdCBiZWZvcmUgeW91IGFuZCBtZS4gVHJ5IHRvIGJlIHNwZWNpZmljIGFzIHBvc3NpYmxlIHdoZW4gc2VhcmNoaW5nIGFuZCB0cnkgZGlmZmVyZW50IHNlYXJjaCB0ZXJtcy5cIixcclxuICAgICAgYm90dG9tVGV4dDpcclxuICAgICAgICAnWW91IGNhbiBjcmVhdGUgeW91ciBvd24gLmpzIGZpbGVzIGxpa2UgdGhpcyBcImluZGV4LmpzXCIgb3IgXCJhbnktbmFtZV95b3Vfd2FudC5qc1wiIGFuZCBydW4gdGhlbSBpbiB5b3VyIHRlcm1pbmFsL2NvbW1hbmQtbGluZSBieSBydW5uaW5nIFwibm9kZSBpbmRleC5qc1wiIGZyb20gdGhlIGZvbGRlciB0aGUgZmlsZSBpcyBpbi4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZW1iZWQ6IGA8aWZyYW1lIGhlaWdodD1cIjQwMHB4XCIgd2lkdGg9XCIxMDAlXCIgc3JjPVwiaHR0cHM6Ly9yZXBsLml0L0BPcllvZmZlL1dhcmxpa2VPcmdhbmljUHJvY2VkdXJhbGxhbmd1YWdlP2xpdGU9dHJ1ZVwiIHNjcm9sbGluZz1cIm5vXCIgZnJhbWVib3JkZXI9XCJub1wiIGFsbG93dHJhbnNwYXJlbmN5PVwidHJ1ZVwiIGFsbG93ZnVsbHNjcmVlbj1cInRydWVcIiBzYW5kYm94PVwiYWxsb3ctZm9ybXMgYWxsb3ctcG9pbnRlci1sb2NrIGFsbG93LXBvcHVwcyBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1zY3JpcHRzIGFsbG93LW1vZGFsc1wiPjwvaWZyYW1lPmAsXHJcbiAgICAgIHRpdGxlOiBcIlJlcXVpcmluZyBvdGhlciBmaWxlcyBhbmQgbW9kdWxlc1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIk5vZGUuanMgY29tZXMgd2l0aCBhIGJ1aWx0LWluIGZ1bmN0aW9uIGNhbGxlZCAncmVxdWlyZScgdG8gZmV0Y2ggb3RoZXIgSmF2YVNjcmlwdCBmaWxlcyBhbmQgTW9kdWxlcyBhbmQgJ21vZHVsZS5leHBvcnRzJyB0byBleHBvcnQgZnVuY3Rpb25hbGl0eSBhbmQgZGF0YSB0byBvdGhlciBKYXZhU2NyaXB0IGZpbGVzLiBOb2RlLmpzIGFsc28gY29tZXMgd2l0aCBtYW55ICdjb3JlIG1vZHVsZXMnIHN1Y2ggYXMgJ2ZzJyAoZmlsZSBzeXN0ZW0pIGFuZCBtYW55IG1vcmUuIFRvIGNoZWNrIG1vcmUgb2YgdGhlICdjb3JlIG1vZHVsZXMnIGhlYWQgb3ZlciB0byBodHRwczovL3d3dy53M3NjaG9vbHMuY29tL25vZGVqcy9yZWZfbW9kdWxlcy5hc3AuXCIsXHJcbiAgICAgIGJvdHRvbVRleHQ6XHJcbiAgICAgICAgXCJUcnkgdGhpcyBzY3JpcHQgb24geW91ciBvd24gY29tcHV0ZXIuIFRoZSBiZXN0IHdheSB0byBsZWFybiBpcyBieSBkb2luZyA6KVwiLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbm9kZWpzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9