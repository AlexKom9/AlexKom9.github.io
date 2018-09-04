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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ({

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(26);


/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function InfoPage() {
	var state = void 0;
	var s = {
		tab: 'card-tab__tab',
		tabActive: 'card-tab__tab--active',
		tableInner: 'card-tab__inner',
		opened: 'opened-deal',
		completed: 'completed-deal',
		content: 'js-group-content'
	};

	return {
		switchTab: function switchTab(data) {
			var group = data.group,
			    elem = data.elem;

			$('.' + s.content).hide();
			$('.' + s.content + '[data-group="' + group + '"]').show();
			$('.' + s.tab).removeClass(s.tabActive);
			$(elem).addClass(s.tabActive);
		},

		actions: function actions() {
			var self = this;
			$('.' + s.tab).on('click', function () {
				var group = $(this).data('group');
				var data = {
					group: group,
					elem: this
				};
				self.switchTab(data);
			});
		},

		initState: function initState() {
			var elem = $('.' + s.tabActive);
			var group = elem.data('group');
			var data = {
				group: group,
				elem: elem
			};
			console.log(data);
			this.switchTab(data);
		},

		init: function init() {
			console.log('--- InfoPage - works');
			this.initState();
			this.actions();
		}
	};
}

$(document).ready(function () {
	InfoPage().init();
});

/***/ })

/******/ });
//# sourceMappingURL=cabinet_verified-users_page.js.map