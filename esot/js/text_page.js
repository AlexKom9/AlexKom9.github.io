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
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
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
		tabContent: 'in-content-container',
		numLimit: 'in-input-num--limit'
	};
	return {
		loadFile: function loadFile() {
			// var placeholder = $(`.${s.loadFile}`).find(`.${s.loadFilePlaceholder}`).data('placeholder');
			var placeholder = 'Выберите файл';
			$('.' + s.loadFile).find('input[type="file"]').on('change', function (event) {
				var fileName = this.files[0].name;
				console.dir(fileName);
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
		inputNumLimit: function inputNumLimit() {
			// console.log()
			$('.' + s.numLimit).on('keypress, keydown', function (e) {
				if (e.ctrlKey || e.altKey || e.metaKey) return;
				console.log('----char');
				var chr = String.fromCharCode(e.keyCode).toLowerCase();
				console.log(chr);
				console.log(e.keyCode);
				if (chr == null) return;
				if (chr < '0' || chr > '9' || $(this).val().length >= 5) {
					if (e.keyCode != 8 && e.keyCode != 46) {
						if (1) {
							console.log('false');
							return false;
						}
					}
				}
			});
		},
		init: function init() {
			this.loadFile();
			this.tabSwitch();
			this.switchSubtab();
			this.inputPlaceholder();
			this.inputNumLimit();
		}
	};
};

exports.default = interfaceUnit;

/***/ }),

/***/ 2:
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

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(37);


/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mobileMenu = __webpack_require__(2);

var _mobileMenu2 = _interopRequireDefault(_mobileMenu);

var _interfaceUnit = __webpack_require__(1);

var _interfaceUnit2 = _interopRequireDefault(_interfaceUnit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {
	(0, _mobileMenu2.default)().init();
	(0, _interfaceUnit2.default)().init();
});

/***/ })

/******/ });
//# sourceMappingURL=text_page.js.map