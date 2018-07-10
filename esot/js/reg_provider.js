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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
// var reg = "Registration script"
// import $ from 'jquery';
// const jQuery = $;
// import Inputmask from "inputmask";

var mask = function mask() {
	return {
		phoneMask: function phoneMask() {
			$('.phone-mask').mask('+380(99) 999-9999');
			$('.phone-mask').attr('placeholder', "+380(__) ___-____");
		},
		initialState: function initialState() {},
		init: function init() {
			this.phoneMask();
			this.initialState();
		}
	};
};
exports.default = mask;

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(29);


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reg = __webpack_require__(4);

var _reg2 = _interopRequireDefault(_reg);

var _mask = __webpack_require__(2);

var _mask2 = _interopRequireDefault(_mask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {
	(0, _reg2.default)().init();
	(0, _mask2.default)().init();
});

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import jQuery from 'jquery'
// import Inputmask from "inputmask";

var reg = function reg() {
	return {
		clickNext: function clickNext() {
			var counter = 0;
			(0, _jquery2.default)('.reg-window__next-btn').on('click', function () {
				(0, _jquery2.default)('.reg-window__box').hide();
				counter++;
				console.log('---click');
				(0, _jquery2.default)('.reg-window__box').each(function (index) {
					if (index === counter) (0, _jquery2.default)(this).show();
				});
			});
		},
		initialState: function initialState() {
			(0, _jquery2.default)('.reg-window__box').hide();
			(0, _jquery2.default)('.reg-window__box').each(function (index) {
				if (index === 0) (0, _jquery2.default)(this).show();
			});
		},
		init: function init() {
			this.clickNext();
			this.initialState();
		}
	};
}; // var reg = "Registration script"
exports.default = reg;

/***/ })

/******/ });
//# sourceMappingURL=reg_provider.js.map