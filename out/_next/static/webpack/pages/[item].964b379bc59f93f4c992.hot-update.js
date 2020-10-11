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
    embed: "<iframe height=\"1000px\" width=\"100%\" src=\"https://repl.it/@OrYoffe/WarlikeOrganicProcedurallanguage?lite=true\" scrolling=\"no\" frameborder=\"no\" allowtransparency=\"true\" allowfullscreen=\"true\" sandbox=\"allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals\"></iframe>",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9kYXRhL25vZGUuanMiXSwibmFtZXMiOlsibm9kZWpzIiwibmFtZSIsInN1YlRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWciLCJub2RlanNJbWFnZSIsInByZXJlcXVpc2l0cyIsInBhcnRzIiwiZW1iZWQiLCJ0aXRsZSIsImJvdHRvbVRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFNQSxNQUFNLEdBQUc7QUFDYkMsTUFBSSxFQUFFLFNBRE87QUFFYkMsVUFBUSxFQUFFLHNDQUZHO0FBR2JDLGFBQVcsRUFDVCxnWkFKVztBQUtiQyxLQUFHLEVBQUVDLG1EQUxRO0FBTWJDLGNBQVksRUFBRSxDQUFDLFlBQUQsQ0FORDtBQU9iQyxPQUFLLEVBQUUsQ0FDTDtBQUNFQyxTQUFLLG9UQURQO0FBRUU7QUFDQTtBQUNBQyxTQUFLLEVBQUUsK0JBSlQ7QUFLRU4sZUFBVyxFQUNULG9mQU5KO0FBT0VPLGNBQVUsRUFDUjtBQVJKLEdBREssRUFXTDtBQUNFRixTQUFLLCtUQURQO0FBRUVDLFNBQUssRUFBRSxtQ0FGVDtBQUdFTixlQUFXLEVBQ1QsK1dBSko7QUFLRU8sY0FBVSxFQUNSO0FBTkosR0FYSyxFQW1CTDtBQUNFRixTQUFLLCtUQURQO0FBRUVDLFNBQUssRUFDSCxvR0FISjtBQUlFTixlQUFXLEVBQ1QseWJBTEo7QUFNRU8sY0FBVSxFQUNSO0FBUEosR0FuQks7QUFQTSxDQUFmO0FBc0NlVixxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9baXRlbV0uOTY0YjM3OWJjNTlmOTNmNGM5OTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5vZGVqc0ltYWdlIH0gZnJvbSBcIi4uL2ltYWdlc1wiO1xyXG5cclxuY29uc3Qgbm9kZWpzID0ge1xyXG4gIG5hbWU6IFwiTm9kZS5qc1wiLFxyXG4gIHN1YlRpdGxlOiBcIkphdmFTY3JpcHQgU2VydmVyLXNpZGUsIHdpdGhvdXQgaHRtbFwiLFxyXG4gIGRlc2NyaXB0aW9uOlxyXG4gICAgXCJOb2RlLmpzIGlzIHRoZSB3YXkgdG8gcnVuIEphdmFTY3JpcHQgb24geW91ciBtYWNoaW5lIG91dHNpZGUgb2YgdGhlIGJyb3dzZXIuIFdoZXRoZXIgeW91IHdhbnQgdG8gYnVpbGQgYSBzZXJ2ZXIgb3IganVzdCBhIHNjcmlwdCB0aGF0IHJlYWRzIGFuZCB3cml0ZXMgZmlsZXMsIE5vZGUuanMgaXMgdXNlZnVsIGluIG1hbnkgd2F5cyB0byBleHRlbmQgeW91ciBjYXBhYmlsaXRpZXMgd2l0aCBKYXZhU2NyaXB0IG91dHNpZGUgb2YgdGhlIGJyb3dzZXIuIE1ha2Ugc3VyZSB0byBpbnN0YWxsIE5vZGUuanMgdG8geW91ciBtYWNoaW5lIGJlZm9yZSBzdGFydGluZyB0aGlzIGd1aWRlLiBZb3UgY2FuIGZpbmQgdGhlIGRvd25sb2FkIGxpbmsgaGVyZTogaHR0cHM6Ly9ub2RlanMub3JnL2VuL2Rvd25sb2FkL1wiLFxyXG4gIGltZzogbm9kZWpzSW1hZ2UsXHJcbiAgcHJlcmVxdWlzaXRzOiBbXCJqYXZhc2NyaXB0XCJdLFxyXG4gIHBhcnRzOiBbXHJcbiAgICB7XHJcbiAgICAgIGVtYmVkOiBgPGlmcmFtZSBoZWlnaHQ9XCIxMDAwcHhcIiB3aWR0aD1cIjEwMCVcIiBzcmM9XCJodHRwczovL3JlcGwuaXQvQE9yWW9mZmUvQ29uY3JldGVEZWNpc2l2ZU1lZGlhP2xpdGU9dHJ1ZVwiIHNjcm9sbGluZz1cIm5vXCIgZnJhbWVib3JkZXI9XCJub1wiIGFsbG93dHJhbnNwYXJlbmN5PVwidHJ1ZVwiIGFsbG93ZnVsbHNjcmVlbj1cInRydWVcIiBzYW5kYm94PVwiYWxsb3ctZm9ybXMgYWxsb3ctcG9pbnRlci1sb2NrIGFsbG93LXBvcHVwcyBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1zY3JpcHRzIGFsbG93LW1vZGFsc1wiPjwvaWZyYW1lPmAsXHJcbiAgICAgIC8vICAgZW1iZWQ6IGAgPGlmcmFtZSBmcmFtZWJvcmRlcj1cIjBcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI1MDBweFwiIHNyYz1cImh0dHBzOi8vc3RhY2tibGl0ei5jb20vZWRpdC9qcy1mcDJ2cHo/ZGV2dG9vbHNoZWlnaHQ9MzMmZW1iZWQ9MSZmaWxlPWluZGV4LmpzJnRoZW1lPWRhcmtcIj48L2lmcmFtZT5gLFxyXG4gICAgICAvLyAgIGVtYmVkOiBgIDxpZnJhbWUgZnJhbWVib3JkZXI9XCIwXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNTAwcHhcIiBzcmM9XCJodHRwczovL3JlcGwuaXQvQE9yWW9mZmUvQ29uY3JldGVEZWNpc2l2ZU1lZGlhP2xpdGU9dHJ1ZVwiPjwvaWZyYW1lPmAsXHJcbiAgICAgIHRpdGxlOiBcIkFub3RoZXIgd2F5IHRvIHJ1biBKYXZhU2NyaXB0XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiWW91IGNhbiBkbyBtYW55IHRoaW5ncyB3aXRoIE5vZGUuanMsIHRoZSBmaXJzdCBwYXJ0IHRvIGdldCB0aHJvdWdoIGlzIHJ1bm5pbmcgYSBKYXZhU2NyaXB0IGZpbGUgb24geW91ciBtYWNoaW5lIHdpdGggaXQuIFRyeSBkb2luZyB0aGlzIHlvdXJzZWxmIG9uIHlvdXIgbWFjaGluZS4gSWYgeW91IGVuY291bnRlciBpc3N1ZXMgd2l0aCB0aGUgdGVybWluYWwgKE1hYykgb3IgY29tbWFuZC1saW5lIChXaW5kb3dzKSwgZG9uJ3QgYmUgc2h5IGFuZCBHb29nbGUgdG8gaG93IHRvIGNoYW5nZSBkaXJlY3Rvcnkgd2l0aCB0aGUgXFxcImNkXFxcIiBjb21tYW5kIGFuZCBhbnkgb3RoZXIgaXNzdWUgeW91IG1pZ2h0IGhhdmUuIFRoZXJlJ3MgYW4gYW5zd2VyIHRvIGFueSBpc3N1ZSwgc2luY2UgbWFueSB0YWNrbGVkIGl0IGJlZm9yZSB5b3UgYW5kIG1lLiBUcnkgdG8gYmUgc3BlY2lmaWMgYXMgcG9zc2libGUgd2hlbiBzZWFyY2hpbmcgYW5kIHRyeSBkaWZmZXJlbnQgc2VhcmNoIHRlcm1zLlwiLFxyXG4gICAgICBib3R0b21UZXh0OlxyXG4gICAgICAgICdZb3UgY2FuIGNyZWF0ZSB5b3VyIG93biAuanMgZmlsZXMgbGlrZSB0aGlzIFwiaW5kZXguanNcIiBvciBcImFueS1uYW1lX3lvdV93YW50LmpzXCIgYW5kIHJ1biB0aGVtIGluIHlvdXIgdGVybWluYWwvY29tbWFuZC1saW5lIGJ5IHJ1bm5pbmcgXCJub2RlIGluZGV4LmpzXCIgZnJvbSB0aGUgZm9sZGVyIHRoZSBmaWxlIGlzIGluLicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBlbWJlZDogYDxpZnJhbWUgaGVpZ2h0PVwiMTAwMHB4XCIgd2lkdGg9XCIxMDAlXCIgc3JjPVwiaHR0cHM6Ly9yZXBsLml0L0BPcllvZmZlL1dhcmxpa2VPcmdhbmljUHJvY2VkdXJhbGxhbmd1YWdlP2xpdGU9dHJ1ZVwiIHNjcm9sbGluZz1cIm5vXCIgZnJhbWVib3JkZXI9XCJub1wiIGFsbG93dHJhbnNwYXJlbmN5PVwidHJ1ZVwiIGFsbG93ZnVsbHNjcmVlbj1cInRydWVcIiBzYW5kYm94PVwiYWxsb3ctZm9ybXMgYWxsb3ctcG9pbnRlci1sb2NrIGFsbG93LXBvcHVwcyBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1zY3JpcHRzIGFsbG93LW1vZGFsc1wiPjwvaWZyYW1lPmAsXHJcbiAgICAgIHRpdGxlOiBcIlJlcXVpcmluZyBvdGhlciBmaWxlcyBhbmQgbW9kdWxlc1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIk5vZGUuanMgY29tZXMgd2l0aCBhIGJ1aWx0LWluIGZ1bmN0aW9uIGNhbGxlZCAncmVxdWlyZScgdG8gZmV0Y2ggb3RoZXIgSmF2YVNjcmlwdCBmaWxlcyBhbmQgTW9kdWxlcyBhbmQgJ21vZHVsZS5leHBvcnRzJyB0byBleHBvcnQgZnVuY3Rpb25hbGl0eSBhbmQgZGF0YSB0byBvdGhlciBKYXZhU2NyaXB0IGZpbGVzLiBOb2RlLmpzIGFsc28gY29tZXMgd2l0aCBtYW55ICdjb3JlIG1vZHVsZXMnIHN1Y2ggYXMgJ2ZzJyAoZmlsZSBzeXN0ZW0pIGFuZCBtYW55IG1vcmUuIFRvIGNoZWNrIG1vcmUgb2YgdGhlICdjb3JlIG1vZHVsZXMnIGhlYWQgb3ZlciB0byBodHRwczovL3d3dy53M3NjaG9vbHMuY29tL25vZGVqcy9yZWZfbW9kdWxlcy5hc3AuXCIsXHJcbiAgICAgIGJvdHRvbVRleHQ6XHJcbiAgICAgICAgXCJUcnkgdGhpcyBzY3JpcHQgb24geW91ciBvd24gY29tcHV0ZXIuIFRoZSBiZXN0IHdheSB0byBsZWFybiBpcyBieSBkb2luZy4gVHJ5IHdyaXRpbmcgYSBzY3JpcHQgdGhhdCB3aWxsIHdyaXRlIGFuZCBwcmludHMgc3R1ZmYgeW91IG5lZWQgdG8gZG8sIGxpa2UgYSB0b2RvIGxpc3QuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBlbWJlZDogYDxpZnJhbWUgaGVpZ2h0PVwiMTAwMHB4XCIgd2lkdGg9XCIxMDAlXCIgc3JjPVwiaHR0cHM6Ly9yZXBsLml0L0BPcllvZmZlL1dhcmxpa2VPcmdhbmljUHJvY2VkdXJhbGxhbmd1YWdlP2xpdGU9dHJ1ZVwiIHNjcm9sbGluZz1cIm5vXCIgZnJhbWVib3JkZXI9XCJub1wiIGFsbG93dHJhbnNwYXJlbmN5PVwidHJ1ZVwiIGFsbG93ZnVsbHNjcmVlbj1cInRydWVcIiBzYW5kYm94PVwiYWxsb3ctZm9ybXMgYWxsb3ctcG9pbnRlci1sb2NrIGFsbG93LXBvcHVwcyBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1zY3JpcHRzIGFsbG93LW1vZGFsc1wiPjwvaWZyYW1lPmAsXHJcbiAgICAgIHRpdGxlOlxyXG4gICAgICAgIFwiVGhlICdwYWNrYWdlLmpzb24nIGZpbGUsIG5wbSAobm9kZS5qcyBwYWNrYWdlIG1hbmFnZXIpIGFuZCBleHByZXNzIChhIHNpbXBsZSB3ZWIgc2VydmVyIGZyYW1ld29yaylcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgJ05vZGUuanMgcHJvamVjdHMgbWFuYWdlIHRoZWlyIFwiZGVwZW5kZW5jaWVzXCIsIHNjcmlwdHMgKGNvbW1hbmRzKSBhbmQgb3RoZXIgbWV0YSBkYXRhIGFib3V0IHRoZSBwcm9qZWN0LiBUbyBpbnN0YWxsIGxpYnJhcmllcyBvciBhbnkgb3RoZXIgbW9kdWxlIGZvciB5b3UgcHJvamVjdCwgbW9zdCBOb2RlLmpzIGRldmVsb3BlcnMgdXNlIG5wbSwgdGhlIE5vZGUuanMgcGFja2FnZSBtYW5hZ2VyLiBCeSBlbnRlcmluZyBcIm5wbSBpbnN0YWxsIGV4cHJlc3NcIiBpbiB5b3VyIHRlcm1pbmFsL2NvbW1hbi1saW5lIGluIHlvdXIgcHJvamVjdCwgXFwnZXhwcmVzc1xcJyB3aWxsIGJlIGFkZGVkIHRvIHlvdXIgbGlzdCBvZiBkZXBlbmRlbmNpZXMgYW5kIHlvdSBjYW4gcmVxdWlyZShcImV4cHJlc3NcIikgaW4geW91ciBwcm9qZWN0IGFuZCB1c2UgaXQgdG8gYnVpbGQgYSB3ZWIgc2VydmVyLicsXHJcbiAgICAgIGJvdHRvbVRleHQ6XHJcbiAgICAgICAgXCJUcnkgdGhpcyBzY3JpcHQgb24geW91ciBvd24gY29tcHV0ZXIuIFdoZW4geW91IHJ1biBhIHdlYiBzZXJ2ZXIgb24geW91ciBtYWNoaW5lLCB0aGUgZG9tYWluIHdpbGwgYmUgbG9jYWxob3N0IHNvIHlvdSBjYW4gYWNjZXNzIGl0IHRvIHRoZSBwb3J0IGl0IGlzIGxpc3RlbmluZyB0bywgbGlrZSA4MDgwIGluIHRoaXMgZXhhbXBsZS4gWW91IGNhbiBvcGVuIHRoZSBicm93c2VyIGF0IGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbm9kZWpzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9