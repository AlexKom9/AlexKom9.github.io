;
// ***SLICK-SLIIDER***
function slickSlider(){
	$('.start__slider').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: false,
		speed: 1000,
		arrows: false,
		dots: true,
		dotsClass: 'start__dots'
	});
};

// ***SCROLLBAR WIDTH***
function scrollBarWidth(){
  var div = document.createElement('div');
  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';
  // при display:none размеры нельзя узнать
  // нужно, чтобы элемент был видим,
  // visibility:hidden - можно, т.к. сохраняет геометрию
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  scrollWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);
  // return scrollWidth
};

// ***OPEN MODAL WINDOW MAIN MENU***
function openMainMenu(){
	$(".header__menu").click(function() {
		console.log('click menu');
		let menuWidth = $('.header__menu').width();
		console.log(menuWidth);
		$('.header__close').css({width: menuWidth})
		$(".header").toggleClass("header--modal-active");
		$("#m-menu").toggleClass("modal--active");
		$('.l-page').toggleClass("l-page--modal-opened");
		// console.log('scrollWidth='+scrollWidth)
		let headerMargin = -1*scrollWidth/2;
		$('.header').css({'margin-left': headerMargin})
	});
};

// ***OPEN MODAL WINDOW CONTACT US***
function openContactUs(){
	$(".write_us").click(function() {
		console.log('click write');
		if($('.l-page').hasClass("l-page--modal-opened")){
		} else {
			$('.l-page').addClass("l-page--modal-opened")
		}
		$('.contact').addClass("modal--active")
	});
};

// ***OPEN MODAL WINDOW SEND CV***
function openSendCV(){
	$(".job__btn, .vacancy__response").click(function() {
		if($('.l-page').hasClass("l-page--modal-opened")){
		} else {
			$('.l-page').addClass("l-page--modal-opened")
		}
		$('.send-cv').addClass("modal--active")
	});
};

// ***CLOSE ALL MODAL WINDOWS***
function closeModals(){
	$(".close-btn").click(function() {
		$('.l-page').removeClass("l-page--modal-opened");
		$('.modal').removeClass("modal--active")
		$(".header").removeClass("header--modal-active");
		$('.header').css({'margin-left': 0})
		return false
	});
};

// ***LANGUAGE BLOCK***
function langBlock(){
	$(".lang").click(function(){
		$('.lang').removeClass("lang--active")
		$(this).toggleClass("lang--active");
	});
};

// $('.m-menu').on('scroll',function(){
//   console.log('modal scroll');
//   $('#header').hide("slide", { direction: "right" }, 1000);
// })

// $('.card').on('mouseenter', function(){
//   // $('.card').removeClass('mouseentered')
//   let self = this;
//   setTimeout(function(){ $('.card').removeClass('mouseentered')}, 1000);
//   setTimeout(function(){ $(self).addClass('mouseentered')}, 1000);
//   $(this).addClass('mouseentered frozen')
//   setTimeout( function() { // запускаем таймаут
//       $(self).removeClass('frozen'); // снимаем заморозку
//     }, 0); // задержка в миллисекундах
//     if($(this).filter('')) console.log('goooopa')
//   setInterval(function() {
//     if ($(self).filter(function() {
//         return $(this).is(":hover");
//     })) console.log('hovered');
//     else $(self).removeClass('mouseentered')},500);
// });


// $('.card').on('mouseleave', function(){
//   self = this;
//   if ($(this).hasClass('frozen')){
//     return
//   } else {
//     console.log('remove')
//     setTimeout(function(){
//       $(self).removeClass('mouseentered')
//     },1000)
//   }
// });


// ***FLIPPING CARDS***
function flipCards(){
	$('.card').on('mouseenter', function(){
		$(this).addClass('mouseentered');
	})
	$('.card').on('mouseleave', function(){
		self = this;
		setTimeout(function(){ $(self).removeClass('mouseentered')}, 1000);
	})
};


// ***VACANCY TABLE***
function vacancyTable(){

	function findTabsHeight(){
		return $('.vacancy__tabs').height();
	}

	function findContentHeight(){
		maxHeight = 0;
		for (var i = 0; i < $('.vacancy__content').length; i++) {
			currHeight = $('.vacancy__content').eq(i).height();
			if ( currHeight > maxHeight){
				maxHeight = currHeight;
			}
		}
		return maxHeight;
	}

	let tab = $('.vacancy__tab');
	let content = $('.vacancy__content');
	let tabActiveClass = 'vacancy__tab--active';
	let contentActiveClass = 'vacancy__content--active';
	var id = 1;
	var currContainer;


	$(`.vacancy__tab[data-tab="${id}"]`).addClass(tabActiveClass);
	$(`.vacancy__content[data-cont="${id}"]`).addClass(contentActiveClass);

	$(window).ready(function(){
		if($('.vacancy .l-container').width() < 720){
			currContainer = 'small';
		} else {
			currContainer = 'big';
		}
		$('.vacancy__table-container').trigger('containerResize',currContainer);
	})

	// Generate custom event on change container size from big to smal and backwards
	$(window).on('resize',function(){
		var containerSize;
		if($('.vacancy .l-container').width() < 720){
			containerSize = 'small';
		} else {
			containerSize = 'big';
		}
		if(containerSize != currContainer){
		$('.vacancy__table-container').trigger('containerResize',containerSize);
		currContainer = containerSize;
		} else return
	});

	//Change padding-bottom and marigin-top on container size case
	$('.vacancy__table-container').on('containerResize',function(e,size){
		console.log('subscribe',size)
		if(size === 'small'){
			$(this).css({'padding-bottom': 0});
			$('.vacancy__content').css({'margin-top': 0})
		}
		else {
			let contentHeight = findContentHeight();
			let tabsHeight = findTabsHeight();
			$(this).css({'padding-bottom': contentHeight+"px"});
			$('.vacancy__content').css({'margin-top': tabsHeight+"px"})
		}
	})

	//OPEN TAB
	tab.on('click',function(){
		id = +$(this).attr('data-tab');
		// console.log(id)
		tab.removeClass(tabActiveClass);
		content.removeClass(contentActiveClass);
		$(this).addClass(tabActiveClass);
		$(`.vacancy__content[data-cont="${id}"]`).addClass(contentActiveClass);
	})
};

$(document).ready(function(){
	var scrollWidth;
	scrollBarWidth();
	slickSlider();
	openMainMenu();
	openSendCV();
	openContactUs();
	closeModals();
	langBlock();
	flipCards();
	vacancyTable();
});
