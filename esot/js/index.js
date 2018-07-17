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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var mobileMenu = function mobileMenu() {
	return {
		clickBurger: function clickBurger() {
			self = this;
			$('.header__burger').on('click', function (event) {
				event.stopPropagation();
				$(this).toggleClass('header__burger--active');
				var hasClass = $('.header__burger').hasClass('header__burger--active');
				if (hasClass) {
					self.openMenu();
				} else {
					self.closeMenu();
				}
			});
		},
		openMenu: function openMenu() {
			$('#mobileMenu').show();
		},
		closeMenu: function closeMenu() {
			$('#mobileMenu').hide();
		},
		otherClick: function otherClick() {
			var _this = this;

			$(window).on('click', function () {
				_this.closeMenu();
				$('.header__burger').removeClass('header__burger--active');
			});
		},
		init: function init() {
			this.clickBurger();
			this.otherClick();
		}
	};
};

exports.default = mobileMenu;

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var interfaceUnit = function interfaceUnit() {
	var s = {
		loadFile: 'cab__load-file',
		loadFilePlaceholder: 'cab__load-file-placeholder',
		tab: 'in-tab',
		tabContent: 'in-content-container'
	};
	return {
		loadFile: function loadFile() {
			// var placeholder = $(`.${s.loadFile}`).find(`.${s.loadFilePlaceholder}`).data('placeholder');
			var placeholder = 'Выберите файл';
			// $(`.${s.loadFile}`).find(`.${s.loadFilePlaceholder}`).html(placeholder)
			// $(`.${s.loadFile}`).find()
			$('.' + s.loadFile).find('input[type="file"]').on('change', function (event) {
				var fileName = this.files[0].name;
				console.dir(fileName);
				// console.log('file was changed')
				if (fileName) {
					$('.' + s.loadFile).find('.' + s.loadFilePlaceholder).html(fileName);
				} else {
					$('.' + s.loadFile).find('.' + s.loadFilePlaceholder).html(placeholder);
				}
			});
		},
		tabSwitch: function tabSwitch() {
			// initialShow content
			var currentId = $('.in-tab--active').data('id');
			this.showContent(currentId);
			var self = this;
			$('.' + s.tab).on('click', function () {
				// console.log('---- tab click')
				$('.' + s.tab).removeClass('in-tab--active');
				$(this).addClass('in-tab--active');
				currentId = false;
				currentId = $(this).data('id');
				if (!currentId) {
					currentId = $(this).parent().find('input:checked').data('id');
				}
				console.log('currentId ----- ', currentId);
				self.hideContent();
				self.showContent(currentId);
			});
		},
		switchSubtab: function switchSubtab() {
			var self = this;
			$('.in-tab-inner input[type="radio"]').on('change', function () {
				var currentId = $(this).data('id');
				self.hideContent();
				self.showContent(currentId);
			});
		},
		hideContent: function hideContent(id) {
			// console.log('-----id----',id)
			if (id) {
				// console.log('hereerere')
				$('#' + id).hide();
				return;
			}
			// console.log('away hereerere')
			$('.' + s.tabContent).hide();
		},
		showContent: function showContent(id) {
			console.log(id);
			$('#' + id).show();
		},
		inputPlaceholder: function inputPlaceholder() {
			$('input,textarea').focus(function () {
				if ($(this).attr('type') === 'tel') return;
				$(this).data('placeholder', $(this).attr('placeholder')).attr('placeholder', '');
			}).blur(function () {
				$(this).attr('placeholder', $(this).data('placeholder'));
			});
		},
		init: function init() {
			this.loadFile();
			this.tabSwitch();
			this.switchSubtab();
			this.inputPlaceholder();
		}
	};
};

exports.default = interfaceUnit;

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);


/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interfaceUnit = __webpack_require__(10);

var _interfaceUnit2 = _interopRequireDefault(_interfaceUnit);

var _new_hexGrid = __webpack_require__(23);

var _new_hexGrid2 = _interopRequireDefault(_new_hexGrid);

var _mobileMenu = __webpack_require__(1);

var _mobileMenu2 = _interopRequireDefault(_mobileMenu);

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('index.js');


var popup = function popup() {
	// console.log()
	var s = {
		tab: '.popup-tab',
		content: '.popup-content'
	};
	var tab = (0, _jquery2.default)(s.tab);
	var conent = (0, _jquery2.default)(s.window);
	var timer;
	return {
		main: function main() {
			var self = this;
			(0, _jquery2.default)(s.tab).on('mouseover', function (event) {
				event.stopPropagation();
				var id = (0, _jquery2.default)(this).data('id');
				console.log('------------', id);
				(0, _jquery2.default)(window).trigger('closePopoup');
				self.showContent(id);
				(0, _jquery2.default)(window).trigger('hexGrid');
				clearTimeout(timer);
			});

			(0, _jquery2.default)('.popup-content').on('mouseover', function (event) {
				event.stopPropagation();
				console.log('-------contetn');
				clearTimeout(timer);
			});

			(0, _jquery2.default)(window).on('mouseover', function (event) {
				console.log('------- leave');
				clearTimeout(timer);
				timer = setTimeout(function () {
					(0, _jquery2.default)(window).trigger('closePopoup');
				}, 500);
			});
			(0, _jquery2.default)(window).on('resize', function () {
				(0, _jquery2.default)(window).trigger('closePopoup');
			});
		},
		// close: function(){
		// 	$(window)
		//
		// },
		showContent: function showContent(id) {
			(0, _jquery2.default)('#' + id).show();
		},
		content: function content() {},

		events: function events() {
			(0, _jquery2.default)(window).on('closePopoup', function () {
				(0, _jquery2.default)(s.content).hide();
				console.log('close');
			});
		},
		init: function init() {
			console.log('---------popup');
			this.main();
			this.events();
		}
	};
};

console.clear();

(0, _jquery2.default)(document).ready(function () {
	(0, _interfaceUnit2.default)().init();
	(0, _mobileMenu2.default)().init();
	(0, _new_hexGrid2.default)().init();
	(0, _jquery2.default)('#hero-slider').slick({
		infinite: true,
		dots: true,
		arrows: false
		// centerMode: true
	});
	popup().init();
});

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
// import $ from 'jquery';
var hexGrid = function hexGrid() {
	return {
		grid: function grid() {
			var realSize = $('.hexGrid').parent().width();
			console.log('realSize -------- ', realSize);
			var hexBox = $('.hex-container').width();
			// $('.hexGrid-wrap').css('margin-right', -hexBox)
			var width = $('.hexGrid').width();
			var styleBox = $('.hex-style');
			var hexList = $('.hex-container');
			var hexListLength = hexList.length;
			var k = 0;
			console.log(hexList, length);
			console.log(width);
			// let hexBox = 185;
			console.log(hexBox);
			// for (var i = 0; i < hexListLength; i++) {
			// 	$(hexList[hexListLength - i - 1]).css('z-index', i+10)
			// }
			var hexContWidth = 0;
			var hexCount = 0;
			(function () {
				var i = 0;
				hexCount = 0;
				hexContWidth = 0;
				while (hexContWidth < width) {
					i++;
					hexCount = i;
					hexContWidth += i * 0.25 * hexBox;
				}
			})();
			// conditions
			console.log('----hexContWidth----', hexContWidth);
			console.log('----hexCont----', hexCount);

			var conditions = function conditions() {
				if (width > hexBox * 6) {
					console.log('width <= 1110 && width > 925');
					console.log('--this');
					var _k = 6;
					var size = 0;
					// for (var i = 0; i <= 6; i++) {
					// 	size += hexBox*0.2*i
					// }
					// hexList.css('width', width/6.1)
					var rest = width - size;
					for (var i = 0; i < hexListLength; i++) {
						$(hexList[i * _k]).find('.hex').css({ "transform": "translate(0, 0)" });
						$(hexList[i * _k + 1]).find('.hex').css({ "transform": "translate(-25%, 50%" });
						$(hexList[i * _k + 2]).find('.hex').css({ "transform": "translate(-50%, 0)" });
						$(hexList[i * _k + 3]).find('.hex').css({ "transform": "translate(-75%, 50%)" });
						$(hexList[i * _k + 4]).find('.hex').css({ "transform": "translate(-100%, 0)" });
						$(hexList[i * _k + 5]).find('.hex').css({ "transform": "translate(-125%, 50%)" });
					}
				}
				if (width <= hexBox * 6 && width > hexBox * 5) {
					console.log('width <= 1110 && width > 925');
					console.log('--this');
					// hexList.css('width', width/5.1)
					var _k2 = 5;
					for (var i = 0; i < hexListLength; i++) {
						$(hexList[i * _k2]).find('.hex').css({ "transform": "translate(0, 0)" });
						$(hexList[i * _k2 + 1]).find('.hex').css({ "transform": "translate(-25%, 50%" });
						$(hexList[i * _k2 + 2]).find('.hex').css({ "transform": "translate(-50%, 0)" });
						$(hexList[i * _k2 + 3]).find('.hex').css({ "transform": "translate(-75%, 50%)" });
						$(hexList[i * _k2 + 4]).find('.hex').css({ "transform": "translate(-100%, 0)" });
					}
				}
				if (width <= hexBox * 5 && width > hexBox * 4) {
					console.log('width <= 925 && width > 740');
					// hexList.css('width', width/4.1)
					var _k3 = 4;
					for (var i = 0; i < hexListLength; i++) {
						$(hexList[i * _k3]).find('.hex').css({ "transform": "translate(0, 0)" });
						$(hexList[i * _k3 + 1]).find('.hex').css({ "transform": "translate(-25%, 50%" });
						$(hexList[i * _k3 + 2]).find('.hex').css({ "transform": "translate(-50%, 0)" });
						$(hexList[i * _k3 + 3]).find('.hex').css({ "transform": "translate(-75%, 50%)" });
					}
				}
				if (width <= hexBox * 4 && width > hexBox * 3) {
					console.log('width <= 740 && width > 555');
					// hexList.css('width', width/3.1)
					var _k4 = 3;
					for (var i = 0; i < hexListLength; i++) {
						$(hexList[i * _k4]).find('.hex').css({ "transform": "translate(0, 0)" });
						$(hexList[i * _k4 + 1]).find('.hex').css({ "transform": "translate(-25%, 50%" });
						$(hexList[i * _k4 + 2]).find('.hex').css({ "transform": "translate(-50%, 0)" });
					}
				}
				if (width <= hexBox * 3 && width > hexBox * 2) {
					console.log('width <= 555 && width > 370');
					// hexList.css('width', width/2.1)
					var _k5 = 2;
					for (var i = 0; i < hexListLength; i++) {
						$(hexList[i * _k5]).find('.hex').css({ "transform": "translate(0, 0)" });
						$(hexList[i * _k5 + 1]).find('.hex').css({ "transform": "translate(-25%, 50%" });
					}
				}
				if (width <= hexBox * 2) {
					console.log('width <= 555 && width > 370');
					var _k6 = 1;
					for (var i = 0; i < hexListLength; i++) {
						$(hexList[i * _k6]).find('.hex').css({ "transform": "translate(0, 0)" });
					}
				}
			};

			conditions();
		},
		resize: function resize() {
			var self = this;
			console.log('---init resize');
			var containerSize = $('.hexGrid').width();
			$(window).resize(function () {
				// console.log('resize')
				// self.grid();
				$(window).trigger('hexGrid');
			});
		},
		getHexContainerSize: function getHexContainerSize() {
			for (var i = 0; i < array.length; i++) {}
		},
		gridInit: function gridInit() {
			var _this = this;

			this.grid();
			$(window).on('hexGrid', function () {
				_this.grid();
			});
		},
		initialState: function initialState() {
			// this.grid()
		},

		init: function init() {
			this.gridInit();
			this.resize();
			// this.showGrid();
		}
	};
};

exports.default = hexGrid;

/***/ })

/******/ });
//# sourceMappingURL=index.js.map