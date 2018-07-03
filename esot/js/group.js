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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('group.js');


var hexGrid = function hexGrid() {
	return {
		grid: function grid() {
			// $()
			var width = (0, _jquery2.default)('.hexGrid').width();
			var styleBox = (0, _jquery2.default)('.hex-style');
			var hexList = (0, _jquery2.default)('.hex-container');
			var hexListLength = hexList.length;
			var k = 0;
			console.log(hexList, length);
			console.log(width);
			var hexBox = (0, _jquery2.default)('.hex-container').width();
			// let hexBox = 185;

			console.log(hexBox);
			if (width > hexBox * 6) {
				console.log('width <= 1110 && width > 925');
				console.log('--this');
				var _k = 6;
				// hexList.css('width', width/6.1)
				for (var i = 0; i < hexListLength; i++) {
					(0, _jquery2.default)(hexList[i * _k]).find('.hex').css({ "transform": "translate(0, 0)" });
					(0, _jquery2.default)(hexList[i * _k + 1]).find('.hex').css({ "transform": "translate(-25%, 50%" });
					(0, _jquery2.default)(hexList[i * _k + 2]).find('.hex').css({ "transform": "translate(-50%, 0)" });
					(0, _jquery2.default)(hexList[i * _k + 3]).find('.hex').css({ "transform": "translate(-75%, 50%)" });
					(0, _jquery2.default)(hexList[i * _k + 4]).find('.hex').css({ "transform": "translate(-100%, 0)" });
					(0, _jquery2.default)(hexList[i * _k + 5]).find('.hex').css({ "transform": "translate(-125%, 50%)" });
				}
			}
			if (width <= hexBox * 6 && width > hexBox * 5) {
				console.log('width <= 1110 && width > 925');
				console.log('--this');
				// hexList.css('width', width/5.1)
				var _k2 = 5;
				for (var i = 0; i < hexListLength; i++) {
					(0, _jquery2.default)(hexList[i * _k2]).find('.hex').css({ "transform": "translate(0, 0)" });
					(0, _jquery2.default)(hexList[i * _k2 + 1]).find('.hex').css({ "transform": "translate(-25%, 50%" });
					(0, _jquery2.default)(hexList[i * _k2 + 2]).find('.hex').css({ "transform": "translate(-50%, 0)" });
					(0, _jquery2.default)(hexList[i * _k2 + 3]).find('.hex').css({ "transform": "translate(-75%, 50%)" });
					(0, _jquery2.default)(hexList[i * _k2 + 4]).find('.hex').css({ "transform": "translate(-100%, 0)" });
				}
			}
			if (width <= hexBox * 5 && width > hexBox * 4) {
				console.log('width <= 925 && width > 740');
				// hexList.css('width', width/4.1)
				var _k3 = 4;
				for (var i = 0; i < hexListLength; i++) {
					(0, _jquery2.default)(hexList[i * _k3]).find('.hex').css({ "transform": "translate(0, 0)" });
					(0, _jquery2.default)(hexList[i * _k3 + 1]).find('.hex').css({ "transform": "translate(-25%, 50%" });
					(0, _jquery2.default)(hexList[i * _k3 + 2]).find('.hex').css({ "transform": "translate(-50%, 0)" });
					(0, _jquery2.default)(hexList[i * _k3 + 3]).find('.hex').css({ "transform": "translate(-75%, 50%)" });
				}
			}
			if (width <= hexBox * 4 && width > hexBox * 3) {
				console.log('width <= 740 && width > 555');
				// hexList.css('width', width/3.1)
				var _k4 = 3;
				for (var i = 0; i < hexListLength; i++) {
					(0, _jquery2.default)(hexList[i * _k4]).find('.hex').css({ "transform": "translate(0, 0)" });
					(0, _jquery2.default)(hexList[i * _k4 + 1]).find('.hex').css({ "transform": "translate(-25%, 50%" });
					(0, _jquery2.default)(hexList[i * _k4 + 2]).find('.hex').css({ "transform": "translate(-50%, 0)" });
				}
			}
			if (width <= hexBox * 3 && width > hexBox * 2) {
				console.log('width <= 555 && width > 370');
				// hexList.css('width', width/2.1)
				var _k5 = 2;
				for (var i = 0; i < hexListLength; i++) {
					(0, _jquery2.default)(hexList[i * _k5]).find('.hex').css({ "transform": "translate(0, 0)" });
					(0, _jquery2.default)(hexList[i * _k5 + 1]).find('.hex').css({ "transform": "translate(-25%, 50%" });
				}
			}
			if (width <= hexBox * 2) {
				console.log('width <= 555 && width > 370');
				var _k6 = 1;
				for (var i = 0; i < hexListLength; i++) {
					(0, _jquery2.default)(hexList[i * _k6]).find('.hex').css({ "transform": "translate(0, 0)" });
				}
			}
		},
		resize: function resize() {
			var self = this;
			console.log('---init resize');
			var containerSize = (0, _jquery2.default)('.hexGrid').width();
			(0, _jquery2.default)(window).resize(function () {
				console.log('resize');
				self.grid();
			});
		},
		showGrid: function showGrid() {
			// $('.hexGrid-wrap').show();
		},
		initialState: function initialState() {
			// this.grid()
		},

		init: function init() {
			this.grid();
			this.resize();
			// this.showGrid();
		}
	};
};

(0, _jquery2.default)(document).ready(function () {
	hexGrid().init();
});

/***/ })
/******/ ]);
//# sourceMappingURL=group.js.map