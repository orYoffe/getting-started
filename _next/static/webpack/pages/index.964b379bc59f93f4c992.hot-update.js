webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9kYXRhL25vZGUuanMiXSwibmFtZXMiOlsibm9kZWpzIiwibmFtZSIsInN1YlRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWciLCJub2RlanNJbWFnZSIsInByZXJlcXVpc2l0cyIsInBhcnRzIiwiZW1iZWQiLCJ0aXRsZSIsImJvdHRvbVRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFNQSxNQUFNLEdBQUc7QUFDYkMsTUFBSSxFQUFFLFNBRE87QUFFYkMsVUFBUSxFQUFFLHNDQUZHO0FBR2JDLGFBQVcsRUFDVCxnWkFKVztBQUtiQyxLQUFHLEVBQUVDLG1EQUxRO0FBTWJDLGNBQVksRUFBRSxDQUFDLFlBQUQsQ0FORDtBQU9iQyxPQUFLLEVBQUUsQ0FDTDtBQUNFQyxTQUFLLG9UQURQO0FBRUU7QUFDQTtBQUNBQyxTQUFLLEVBQUUsK0JBSlQ7QUFLRU4sZUFBVyxFQUNULG9mQU5KO0FBT0VPLGNBQVUsRUFDUjtBQVJKLEdBREssRUFXTDtBQUNFRixTQUFLLCtUQURQO0FBRUVDLFNBQUssRUFBRSxtQ0FGVDtBQUdFTixlQUFXLEVBQ1QsK1dBSko7QUFLRU8sY0FBVSxFQUNSO0FBTkosR0FYSyxFQW1CTDtBQUNFRixTQUFLLCtUQURQO0FBRUVDLFNBQUssRUFDSCxvR0FISjtBQUlFTixlQUFXLEVBQ1QseWJBTEo7QUFNRU8sY0FBVSxFQUNSO0FBUEosR0FuQks7QUFQTSxDQUFmO0FBc0NlVixxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45NjRiMzc5YmM1OWY5M2Y0Yzk5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbm9kZWpzSW1hZ2UgfSBmcm9tIFwiLi4vaW1hZ2VzXCI7XHJcblxyXG5jb25zdCBub2RlanMgPSB7XHJcbiAgbmFtZTogXCJOb2RlLmpzXCIsXHJcbiAgc3ViVGl0bGU6IFwiSmF2YVNjcmlwdCBTZXJ2ZXItc2lkZSwgd2l0aG91dCBodG1sXCIsXHJcbiAgZGVzY3JpcHRpb246XHJcbiAgICBcIk5vZGUuanMgaXMgdGhlIHdheSB0byBydW4gSmF2YVNjcmlwdCBvbiB5b3VyIG1hY2hpbmUgb3V0c2lkZSBvZiB0aGUgYnJvd3Nlci4gV2hldGhlciB5b3Ugd2FudCB0byBidWlsZCBhIHNlcnZlciBvciBqdXN0IGEgc2NyaXB0IHRoYXQgcmVhZHMgYW5kIHdyaXRlcyBmaWxlcywgTm9kZS5qcyBpcyB1c2VmdWwgaW4gbWFueSB3YXlzIHRvIGV4dGVuZCB5b3VyIGNhcGFiaWxpdGllcyB3aXRoIEphdmFTY3JpcHQgb3V0c2lkZSBvZiB0aGUgYnJvd3Nlci4gTWFrZSBzdXJlIHRvIGluc3RhbGwgTm9kZS5qcyB0byB5b3VyIG1hY2hpbmUgYmVmb3JlIHN0YXJ0aW5nIHRoaXMgZ3VpZGUuIFlvdSBjYW4gZmluZCB0aGUgZG93bmxvYWQgbGluayBoZXJlOiBodHRwczovL25vZGVqcy5vcmcvZW4vZG93bmxvYWQvXCIsXHJcbiAgaW1nOiBub2RlanNJbWFnZSxcclxuICBwcmVyZXF1aXNpdHM6IFtcImphdmFzY3JpcHRcIl0sXHJcbiAgcGFydHM6IFtcclxuICAgIHtcclxuICAgICAgZW1iZWQ6IGA8aWZyYW1lIGhlaWdodD1cIjEwMDBweFwiIHdpZHRoPVwiMTAwJVwiIHNyYz1cImh0dHBzOi8vcmVwbC5pdC9AT3JZb2ZmZS9Db25jcmV0ZURlY2lzaXZlTWVkaWE/bGl0ZT10cnVlXCIgc2Nyb2xsaW5nPVwibm9cIiBmcmFtZWJvcmRlcj1cIm5vXCIgYWxsb3d0cmFuc3BhcmVuY3k9XCJ0cnVlXCIgYWxsb3dmdWxsc2NyZWVuPVwidHJ1ZVwiIHNhbmRib3g9XCJhbGxvdy1mb3JtcyBhbGxvdy1wb2ludGVyLWxvY2sgYWxsb3ctcG9wdXBzIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHMgYWxsb3ctbW9kYWxzXCI+PC9pZnJhbWU+YCxcclxuICAgICAgLy8gICBlbWJlZDogYCA8aWZyYW1lIGZyYW1lYm9yZGVyPVwiMFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjUwMHB4XCIgc3JjPVwiaHR0cHM6Ly9zdGFja2JsaXR6LmNvbS9lZGl0L2pzLWZwMnZwej9kZXZ0b29sc2hlaWdodD0zMyZlbWJlZD0xJmZpbGU9aW5kZXguanMmdGhlbWU9ZGFya1wiPjwvaWZyYW1lPmAsXHJcbiAgICAgIC8vICAgZW1iZWQ6IGAgPGlmcmFtZSBmcmFtZWJvcmRlcj1cIjBcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI1MDBweFwiIHNyYz1cImh0dHBzOi8vcmVwbC5pdC9AT3JZb2ZmZS9Db25jcmV0ZURlY2lzaXZlTWVkaWE/bGl0ZT10cnVlXCI+PC9pZnJhbWU+YCxcclxuICAgICAgdGl0bGU6IFwiQW5vdGhlciB3YXkgdG8gcnVuIEphdmFTY3JpcHRcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJZb3UgY2FuIGRvIG1hbnkgdGhpbmdzIHdpdGggTm9kZS5qcywgdGhlIGZpcnN0IHBhcnQgdG8gZ2V0IHRocm91Z2ggaXMgcnVubmluZyBhIEphdmFTY3JpcHQgZmlsZSBvbiB5b3VyIG1hY2hpbmUgd2l0aCBpdC4gVHJ5IGRvaW5nIHRoaXMgeW91cnNlbGYgb24geW91ciBtYWNoaW5lLiBJZiB5b3UgZW5jb3VudGVyIGlzc3VlcyB3aXRoIHRoZSB0ZXJtaW5hbCAoTWFjKSBvciBjb21tYW5kLWxpbmUgKFdpbmRvd3MpLCBkb24ndCBiZSBzaHkgYW5kIEdvb2dsZSB0byBob3cgdG8gY2hhbmdlIGRpcmVjdG9yeSB3aXRoIHRoZSBcXFwiY2RcXFwiIGNvbW1hbmQgYW5kIGFueSBvdGhlciBpc3N1ZSB5b3UgbWlnaHQgaGF2ZS4gVGhlcmUncyBhbiBhbnN3ZXIgdG8gYW55IGlzc3VlLCBzaW5jZSBtYW55IHRhY2tsZWQgaXQgYmVmb3JlIHlvdSBhbmQgbWUuIFRyeSB0byBiZSBzcGVjaWZpYyBhcyBwb3NzaWJsZSB3aGVuIHNlYXJjaGluZyBhbmQgdHJ5IGRpZmZlcmVudCBzZWFyY2ggdGVybXMuXCIsXHJcbiAgICAgIGJvdHRvbVRleHQ6XHJcbiAgICAgICAgJ1lvdSBjYW4gY3JlYXRlIHlvdXIgb3duIC5qcyBmaWxlcyBsaWtlIHRoaXMgXCJpbmRleC5qc1wiIG9yIFwiYW55LW5hbWVfeW91X3dhbnQuanNcIiBhbmQgcnVuIHRoZW0gaW4geW91ciB0ZXJtaW5hbC9jb21tYW5kLWxpbmUgYnkgcnVubmluZyBcIm5vZGUgaW5kZXguanNcIiBmcm9tIHRoZSBmb2xkZXIgdGhlIGZpbGUgaXMgaW4uJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGVtYmVkOiBgPGlmcmFtZSBoZWlnaHQ9XCIxMDAwcHhcIiB3aWR0aD1cIjEwMCVcIiBzcmM9XCJodHRwczovL3JlcGwuaXQvQE9yWW9mZmUvV2FybGlrZU9yZ2FuaWNQcm9jZWR1cmFsbGFuZ3VhZ2U/bGl0ZT10cnVlXCIgc2Nyb2xsaW5nPVwibm9cIiBmcmFtZWJvcmRlcj1cIm5vXCIgYWxsb3d0cmFuc3BhcmVuY3k9XCJ0cnVlXCIgYWxsb3dmdWxsc2NyZWVuPVwidHJ1ZVwiIHNhbmRib3g9XCJhbGxvdy1mb3JtcyBhbGxvdy1wb2ludGVyLWxvY2sgYWxsb3ctcG9wdXBzIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHMgYWxsb3ctbW9kYWxzXCI+PC9pZnJhbWU+YCxcclxuICAgICAgdGl0bGU6IFwiUmVxdWlyaW5nIG90aGVyIGZpbGVzIGFuZCBtb2R1bGVzXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiTm9kZS5qcyBjb21lcyB3aXRoIGEgYnVpbHQtaW4gZnVuY3Rpb24gY2FsbGVkICdyZXF1aXJlJyB0byBmZXRjaCBvdGhlciBKYXZhU2NyaXB0IGZpbGVzIGFuZCBNb2R1bGVzIGFuZCAnbW9kdWxlLmV4cG9ydHMnIHRvIGV4cG9ydCBmdW5jdGlvbmFsaXR5IGFuZCBkYXRhIHRvIG90aGVyIEphdmFTY3JpcHQgZmlsZXMuIE5vZGUuanMgYWxzbyBjb21lcyB3aXRoIG1hbnkgJ2NvcmUgbW9kdWxlcycgc3VjaCBhcyAnZnMnIChmaWxlIHN5c3RlbSkgYW5kIG1hbnkgbW9yZS4gVG8gY2hlY2sgbW9yZSBvZiB0aGUgJ2NvcmUgbW9kdWxlcycgaGVhZCBvdmVyIHRvIGh0dHBzOi8vd3d3Lnczc2Nob29scy5jb20vbm9kZWpzL3JlZl9tb2R1bGVzLmFzcC5cIixcclxuICAgICAgYm90dG9tVGV4dDpcclxuICAgICAgICBcIlRyeSB0aGlzIHNjcmlwdCBvbiB5b3VyIG93biBjb21wdXRlci4gVGhlIGJlc3Qgd2F5IHRvIGxlYXJuIGlzIGJ5IGRvaW5nLiBUcnkgd3JpdGluZyBhIHNjcmlwdCB0aGF0IHdpbGwgd3JpdGUgYW5kIHByaW50cyBzdHVmZiB5b3UgbmVlZCB0byBkbywgbGlrZSBhIHRvZG8gbGlzdC5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGVtYmVkOiBgPGlmcmFtZSBoZWlnaHQ9XCIxMDAwcHhcIiB3aWR0aD1cIjEwMCVcIiBzcmM9XCJodHRwczovL3JlcGwuaXQvQE9yWW9mZmUvV2FybGlrZU9yZ2FuaWNQcm9jZWR1cmFsbGFuZ3VhZ2U/bGl0ZT10cnVlXCIgc2Nyb2xsaW5nPVwibm9cIiBmcmFtZWJvcmRlcj1cIm5vXCIgYWxsb3d0cmFuc3BhcmVuY3k9XCJ0cnVlXCIgYWxsb3dmdWxsc2NyZWVuPVwidHJ1ZVwiIHNhbmRib3g9XCJhbGxvdy1mb3JtcyBhbGxvdy1wb2ludGVyLWxvY2sgYWxsb3ctcG9wdXBzIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHMgYWxsb3ctbW9kYWxzXCI+PC9pZnJhbWU+YCxcclxuICAgICAgdGl0bGU6XHJcbiAgICAgICAgXCJUaGUgJ3BhY2thZ2UuanNvbicgZmlsZSwgbnBtIChub2RlLmpzIHBhY2thZ2UgbWFuYWdlcikgYW5kIGV4cHJlc3MgKGEgc2ltcGxlIHdlYiBzZXJ2ZXIgZnJhbWV3b3JrKVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAnTm9kZS5qcyBwcm9qZWN0cyBtYW5hZ2UgdGhlaXIgXCJkZXBlbmRlbmNpZXNcIiwgc2NyaXB0cyAoY29tbWFuZHMpIGFuZCBvdGhlciBtZXRhIGRhdGEgYWJvdXQgdGhlIHByb2plY3QuIFRvIGluc3RhbGwgbGlicmFyaWVzIG9yIGFueSBvdGhlciBtb2R1bGUgZm9yIHlvdSBwcm9qZWN0LCBtb3N0IE5vZGUuanMgZGV2ZWxvcGVycyB1c2UgbnBtLCB0aGUgTm9kZS5qcyBwYWNrYWdlIG1hbmFnZXIuIEJ5IGVudGVyaW5nIFwibnBtIGluc3RhbGwgZXhwcmVzc1wiIGluIHlvdXIgdGVybWluYWwvY29tbWFuLWxpbmUgaW4geW91ciBwcm9qZWN0LCBcXCdleHByZXNzXFwnIHdpbGwgYmUgYWRkZWQgdG8geW91ciBsaXN0IG9mIGRlcGVuZGVuY2llcyBhbmQgeW91IGNhbiByZXF1aXJlKFwiZXhwcmVzc1wiKSBpbiB5b3VyIHByb2plY3QgYW5kIHVzZSBpdCB0byBidWlsZCBhIHdlYiBzZXJ2ZXIuJyxcclxuICAgICAgYm90dG9tVGV4dDpcclxuICAgICAgICBcIlRyeSB0aGlzIHNjcmlwdCBvbiB5b3VyIG93biBjb21wdXRlci4gV2hlbiB5b3UgcnVuIGEgd2ViIHNlcnZlciBvbiB5b3VyIG1hY2hpbmUsIHRoZSBkb21haW4gd2lsbCBiZSBsb2NhbGhvc3Qgc28geW91IGNhbiBhY2Nlc3MgaXQgdG8gdGhlIHBvcnQgaXQgaXMgbGlzdGVuaW5nIHRvLCBsaWtlIDgwODAgaW4gdGhpcyBleGFtcGxlLiBZb3UgY2FuIG9wZW4gdGhlIGJyb3dzZXIgYXQgaHR0cDovL2xvY2FsaG9zdDo4MDgwXCIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBub2RlanM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=