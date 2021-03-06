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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function Header() {

    var _mobileMenu = $('#js-mobile-menu');
    var mobileMenuBtn = $('#js-mobile-menu-btn');
    var _userMenu = $('#js-header-user-menu');
    var userMenuBtn = $('#js-header-user-menu-btn');

    return {
        close: function close() {
            $(window).on('click', function () {
                $('.header__drop').hide();
            });
        },

        userMenu: function userMenu() {
            var self = this;
            userMenuBtn.on('click', function (event) {
                event.stopPropagation();
                console.log('show drop');
                _userMenu.toggle();
                // self.closeDrops(this);
                $(window).trigger('close-another-drops', this);
            });
        },

        mobileMenu: function mobileMenu() {
            if (!_mobileMenu.length || !mobileMenuBtn.length) return;

            mobileMenuBtn.on('click', function (event) {
                event.stopPropagation();
                // console.log('window width -------- ',$(window).width());
                // console.log('window innerWidth -------- ',$(window).innerWidth());
                $(window).trigger('close-another-drops');
                console.log('click mobile btn');
                if ($(window).outerWidth() < 399) {
                    $('.l-page').toggleClass('l-page--noscroll');
                }
                // console.log('window outerWidth -------- ',$(window).outerWidth());
                $(this).toggleClass('burger--active');
                _mobileMenu.slideToggle(275);
            });

            _mobileMenu.on('click', function (event) {
                event.stopPropagation();
                _mobileMenu.show();
            });

            $(window).on('click resize', function () {
                _mobileMenu.slideUp('275');
                mobileMenuBtn.removeClass('burger--active');
                $('.l-page').removeClass('l-page--noscroll');
            });
        },

        notification: function notification() {
            var self = this;
            $('#js-header-notifications').on('click', function (event) {
                event.stopPropagation();
                console.log('show drop');
                $('#js-header-notifications-drop').toggle();
                // self.closeDrops(this);
                $(window).trigger('close-another-drops', this);

                _mobileMenu.slideUp('275');
                mobileMenuBtn.removeClass('burger--active');
                $('.l-page').removeClass('l-page--noscroll');
            });
            $(window).on('scroll', function () {
                $('#js-header-notifications-drop').hide();
            });
        },

        closeDrops: function closeDrops(elem) {
            if (!elem) {
                $('.js-header-drop').hide();
            }

            $('.js-header-drop-container').each(function () {
                if (elem === this) {
                    return;
                }
                $(this).find('.js-header-drop').hide();
            });
            $('.header-mobile-menu__item-link').on('click', function () {
                _mobileMenu.hide();
                mobileMenuBtn.removeClass('burger--active');
                $('.l-page').removeClass('l-page--noscroll');
            });
            // mobileMenu.slideUp('275');
            // mobileMenuBtn.removeClass('burger--active');
            // $('.l-page').removeClass('l-page--noscroll');
        },
        init: function init() {
            this.userMenu();
            this.notification();
            this.mobileMenu();
            console.log('mobile Menu', _mobileMenu);
        }
    };
}

exports.default = Header;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Select = function Select() {
  return {
    createSelect: function createSelect() {

      var selBox = $('<div class="sel"></div>');
      var selPremier = $('<div class="sel__premier"></div>');
      var selDrop = $('<div class="sel__drop sel-hide"><ul></ul></div>');
      var selArrow = $('<div class="sel__arrow"></div>');

      var selPremierInput = $('<div class="sel__input-box"><input class="sel__input" type="text"/><div' + ' class="sel__clear"></div></div>');

      var selPremierSpan = $('<span></span>');
      var selElem = $(this).find('select')[0];

      var selIndex = void 0;
      if (selElem.selectedIndex === 0 || selElem.selectedIndex) {
        selIndex = selElem.selectedIndex;
      } else return;

      //hack
      if (!selElem.options.length) {
        return;
      }

      selPremierSpan.html(selElem.options[selIndex].innerHTML);

      for (var i = 0; i < selElem.length; i++) {
        var selItem = $('<li class="sel__item"></li>');
        selItem.html(selElem[i].innerHTML);
        if (i === selIndex) {
          $(selItem).addClass('sel__item--active');
        }
        selDrop.find('ul').append(selItem);
      }

      if ($(this).hasClass('custom-select--filter')) {
        $(selPremier).append(selPremierInput).append(selPremierSpan).append(selArrow);
      } else {
        $(selPremier).append(selPremierSpan).append(selArrow);
      }

      $(selBox).append(selPremier).append(selDrop);

      if (!$(this).find('.sel').length > 0) {
        $(this).append(selBox);
        $(this).each(Select().selectActions);
      }
    },

    selectActions: function selectActions() {

      //SHOW/HIDE sel drop-down
      $(this).on('click', '.sel__premier', function (event) {
        // console.log('select click');
        event.stopPropagation();
        Select().closeAllSel(this);

        $(window).trigger('close-another-drops', this);

        $(this).toggleClass('sel__premier--opened');
        $(this).closest('.sel').find('.sel__drop').toggleClass('sel-hide');
        if ($(this).has('input').length) {
          $(this).find('input').focus();
        }
      });

      //SHOW/HIDE button for clean input
      $(this).on('keyup change', '.sel__input-box input', function () {
        var parent = $(this).parent();
        if ($(this).val()) {
          parent.find('.sel__clear').show();
        } else {
          parent.find('.sel__clear').hide();
        }
      });
      //initialize Clear input
      $(this).on('click', '.sel__clear', function () {
        var parent = $(this).parent();
        parent.find('input').val('');
        $(this).hide();
      }).on('click', '.sel__premier input', function (event) {
        event.stopPropagation();
        console.log('click on input');
      });

      //Chose item from select
      $(this).on('click', '.sel__item', function () {
        var text = $(this).html();
        var index = $(this).index();
        var selPrimer = $(this).closest('.sel').find('.sel__premier');
        console.log(selPrimer);
        Select().closeAllSel();
        $(this).parent().find('.sel__item').removeClass('sel__item--active');
        $(this).addClass('sel__item--active');
        $(this).closest('.sel').find('.sel__premier span').html(text);

        if ($(selPrimer).find('input').length) {
          $(selPrimer).find('input').val(text).change();
        }

        var select = $(this).closest('.sel').parent().find('select');
        select[0].selectedIndex = index;
        select[0].dispatchEvent(new Event('change'));
      });
      // close All select
      // $(window).on('click', function(){
      //     self.closeAllSel();
      // });
    },

    closeAllSel: function closeAllSel(elmnt) {
      /*a function that will close all select boxes in the document,
      except the current select box:*/
      var x = void 0,
          y = void 0,
          i = void 0,
          arrNo = [];
      x = document.getElementsByClassName("sel__drop");
      y = document.getElementsByClassName("sel__premier");
      for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
          arrNo.push(i);
        } else {
          y[i].classList.remove("sel__premier--opened");
        }
      }

      for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
          x[i].classList.add("sel-hide");
        }
      }
    },

    choseOptionValue: function choseOptionValue(data) {
      return function () {
        var select = $(this).find('select')[0];

        var selectedOption = Array.from(select.options).filter(function (option) {
          if (option.value === data) {
            return true;
          }
        })[0];

        var selectedIndex = selectedOption.index;
        var text = selectedOption.innerHTML;

        $(select).parent().find('.sel__item').removeClass('sel__item--active');
        $(select).parent().find('.sel__item').eq(selectedIndex).addClass('sel__item--active');

        $(select).parent().find('.sel').find('.sel__premier span').html(text);
        select.selectedIndex = selectedIndex;
        select.dispatchEvent(new Event('change'));
      };
    },

    choseOptionIndex: function choseOptionIndex(index) {
      return function () {
        var select = $(this).find('select')[0];
        var selectedIndex = index;

        var selectedOption = select.options[selectedIndex];
        var text = selectedOption.innerHTML;

        $(select).parent().find('.sel__item').removeClass('sel__item--active');
        $(select).parent().find('.sel__item').eq(selectedIndex).addClass('sel__item--active');

        $(select).parent().find('.sel').find('.sel__premier span').html(text);
        select.selectedIndex = selectedIndex;
        select.dispatchEvent(new Event('change'));
      };
    },

    init: function init() {
      var selectList = $('.custom-select');
      selectList.each(this.createSelect);
    }
  };
};

window.Select = Select;

exports.default = Select;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var Modals = function Modals() {
	return {
		modalEvents: function modalEvents() {
			var self = this;
			$('.js-call-modal').on('click', function (evetn) {
				event.stopPropagation();
				var id = $(this).data('id');
				console.log('click -- id == ' + id);
				if (id) self.showModal(id);
			});
			$('.modal').on('click', function () {
				event.stopPropagation();
			});
			$(document).on('click', this.closeModals);
			$('.rlog__close').on('click', this.closeModals);
		},

		closeModals: function closeModals() {
			$('.l-page').removeClass('l-page--modal');
			$('.l-wrap').removeClass('l-wrap--modal');
			$('.modal-wrap').removeClass('modal-wrap--active');
		},

		showModal: function showModal(id) {
			this.closeModals();
			$('.l-page').addClass('l-page--modal');
			$('.l-wrap').addClass('l-wrap--modal');
			$('#' + id).addClass('modal-wrap--active');
		},

		init: function init() {
			this.modalEvents();
			this.closeModals();
		}
	};
};
window.Modals = Modals();

exports.default = Modals;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function Alerts() {

    var s = {
        confirmId: 'alert-confirm',
        rejectId: 'alert-reject'
    };
    // function timer(){
    //
    // }
    var defaultTime = 2000;
    return {
        hideAllAlerts: function hideAllAlerts() {
            if (!$('.alert-wrap').length) return;
            $('.alert-wrap').fadeOut(function () {
                $('.l-page').removeClass('l-page--alert');
            });
        },
        showConfirmedAlert: function showConfirmedAlert(text, time) {
            if (!time) {
                time = defaultTime;
            }
            this.hideAllAlerts();
            var template = $('#' + s.confirmId);
            var textTag = template.find('.alert__body span');
            var alert = template.find('.alert');
            alert.hide();
            if (!text) {
                text = textTag.data('default');
            }
            textTag.html(text);
            template.css('display', 'flex');
            alert.fadeIn();
            $('.l-page').addClass('l-page--alert');
            setTimeout(this.hideAllAlerts, time);
        },
        showRejectAlert: function showRejectAlert(text) {
            this.hideAllAlerts();
            var template = $('#' + s.rejectId);
            var alert = template.find('.alert');
            alert.hide();
            var textTag = template.find('.alert__body span');
            textTag.html(text);
            template.css('display', 'flex');
            console.log(alert);
            alert.fadeIn();
            $('.l-page').addClass('l-page--alert');
            setTimeout(this.hideAllAlerts, time);
        },

        actions: function actions() {
            var _this = this;

            $(window).on('click', function () {
                _this.hideAllAlerts();
            });
        },

        init: function init() {
            this.actions();
        }
    };
}

window.Alerts = Alerts;
exports.default = Alerts;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _modal = __webpack_require__(3);

var _modal2 = _interopRequireDefault(_modal);

var _alerts = __webpack_require__(4);

var _alerts2 = _interopRequireDefault(_alerts);

var _header = __webpack_require__(1);

var _header2 = _interopRequireDefault(_header);

__webpack_require__(2);

__webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('index.js !!!'); /* init select new*/


$(document).ready(function () {
	(0, _modal2.default)().init();
	(0, _alerts2.default)().init();
	(0, _header2.default)().init();
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ })
/******/ ]);
//# sourceMappingURL=404_page.js.map