/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ({

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'OrderRow',
    data: function data() {
        return {
            state: 'online'
        };
    },

    props: ['item'],
    computed: {
        maxRate: function maxRate() {
            return Number(this.item.max_amount).toFixed(2);
        },
        minRate: function minRate() {
            return Number(this.item.min_amount).toFixed(2);
        },
        profit: function profit() {
            return Number(this.item.profit).toFixed(2);
        },
        rate: function rate() {
            return Number(this.item.rate).toFixed(2);
        }
    },
    template: '\n        <div class="i-tab__row">\n          <div class="i-tab__cell online">\n            <p class="i-tab__prod-name">{{item.user.username}}<span class="dot"></span></p>\n            <div class="i-tab__rat">\n              <div class="rat">\n                <div class="rat__str">\u0420\u0435\u0439\u0442\u0438\u043D\u0433</div>\n                <div class="rat__line">\n                  <div class="rat__inner abs"></div>\n                 </div>\n              </div>\n            </div>\n          </div>\n           \n          <div class="i-tab__cell">\n            \n            <p v-for="processor in item.processors" class="i-tab__payment">{{processor.name}}</p>\n          </div>\n          \n          <div class="i-tab__cell">\n            <p class="i-tab__price-usd">{{rate}}&nbsp<span>{{item.currency.name}}</span></p>\n            <p class="i-tab__price-hint">\u041D\u0430\u0446\u0435\u043D\u043A\u0430</p>\n            <p class="i-tab__price-markup">{{profit}}%</p>\n          </div>\n          \n          <div class="i-tab__cell">\n            <p class="i-tab__limit">{{minRate}} - {{maxRate}} USD</p>\n          </div>\n          \n          <div class="i-tab__cell">\n            <div class="i-tab__buy"><a class="l-btn l-btn--secondary i-tab__buy-btn" href="#">\u041A\u0443\u043F\u0438\u0442\u044C</a></div>\n          </div>\n        </div>\n    '
};

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(30);


/***/ })

/******/ });
//# sourceMappingURL=OrderRow.js.map