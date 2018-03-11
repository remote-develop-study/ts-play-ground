require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var a=e[n]=new t.Module;r[n][0].call(a.exports,i,a,a.exports)}return e[n].exports}function o(){this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({3:[function(require,module,exports) {

},{}],2:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.VendingMachine=void 0;var e=require("fs"),n=t(e);function t(e){return e&&e.__esModule?e:{default:e}}var i=function(){function e(e){n.default.readFile("../data/drinks.json",function(e,n){})}return e.prototype.initialize=function(){},e}();exports.VendingMachine=i;
},{"fs":3}],1:[function(require,module,exports) {
"use strict";var e=require("../models/VendingMachine"),i=new e.VendingMachine(100);i.initialize();
},{"../models/VendingMachine":2}]},{},[1])