// console.log('work');
$(document).ready(function(){
  // console.log('jq work');
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
});

var scrollWidth;
$(document).ready(function(){
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
  scrollWidth = -1*scrollWidth/2;
  // console.log(scrollWidth);
  $(".header__menu").click(function() {
    console.log('click menu');
    let menuWidth = $('.header__menu').width();
    console.log(menuWidth);
    $('.header__close').css({width: menuWidth})
    $(".header").toggleClass("header--modal-active");
    $("#m-menu").toggleClass("modal--active");
    $('.l-page').toggleClass("l-page--modal-opened");
    $('.header').css({'margin-left': scrollWidth})
  });
})




$(".write_us").click(function() {
    console.log('click write');
    if($('.l-page').hasClass("l-page--modal-opened")){
    } else {
      $('.l-page').addClass("l-page--modal-opened")
    }
    $('.contact').addClass("modal--active")
});

$(".job__btn").click(function() {
    // console.log('click job__btn');
    if($('.l-page').hasClass("l-page--modal-opened")){
    } else {
      $('.l-page').addClass("l-page--modal-opened")
    }
    $('.send-cv').addClass("modal--active")
});

$(".vacancy__response").click(function() {
    console.log('click job__btn');
    if($('.l-page').hasClass("l-page--modal-opened")){
    } else {
      $('.l-page').addClass("l-page--modal-opened")
    }
    $('.send-cv').addClass("modal--active")
});




$(".close-btn").click(function() {
    $('.l-page').removeClass("l-page--modal-opened");
    $('.modal').removeClass("modal--active")
    $(".header").removeClass("header--modal-active");
    $('.header').css({'margin-left': 0})
    return false
});

//!!!Lan-block!!!
$(".lang").click(function(){
  $('.lang').removeClass("lang--active")
  $(this).toggleClass("lang--active");
});

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



$('.card').on('mouseenter', function(){
  $(this).addClass('mouseentered');
})

$('.card').on('mouseleave', function(){
  self = this;
  setTimeout(function(){ $(self).removeClass('mouseentered')}, 1000);
})

// !!! TABLE !!!




$(document).ready(function(){

  findAmound = function(){
    ans = 0;
    for (var i = 0; i < $('.vacancy__content').length; i++) {
      curr = $('.vacancy__content').eq(i).find('.vacancy__row').length;
      if ( curr > ans){
        ans = curr;
      }
    }
    return ans;
  }
  let rowAmount = findAmound();
  // rowAmount = $(`.vacancy__content[data-cont="${id}"] .vacancy__row`).length;

  let tab = $('.vacancy__tab');
  let content = $('.vacancy__content');
  let tabActiveClass = 'vacancy__tab--active';
  let contentActiveClass = 'vacancy__content--active';
  let windowBig = false;
  let id = 1;
  $(`.vacancy__tab[data-tab="${id}"]`).addClass(tabActiveClass);
  $(`.vacancy__content[data-cont="${id}"]`).addClass(contentActiveClass);

  let padding = rowAmount*64 + 10;
  if ($('.vacancy .l-container').width() >= 720) {$('.vacancy__table-container').css({'padding-bottom': padding+"px"});}






  if($(window).width() >= 766+scrollWidth){
    var tabsHeight = $('.vacancy__tabs').height();
    windowBig = true;
  }
  $(window).on('resize',function(){
    console.log('resize')
    if($(window).width() < 766+scrollWidth*2){
      windowBig = false;
      $('.vacancy__table-container').css({'padding-bottom': 0});
    } else {
      // rowAmount = $(`.vacancy__content[data-cont="${id}"] .vacancy__row`).length;
      let padding = rowAmount*64 + 10;
      $('.vacancy__table-container').css({'padding-bottom': padding+"px"});
    }
  })

  tab.on('click',function(){
    id = +$(this).attr('data-tab');
    console.log(id)
    tab.removeClass(tabActiveClass);
    content.removeClass(contentActiveClass);
    $(this).addClass(tabActiveClass);
    // rowAmount = $(`.vacancy__content[data-cont="${id}"] .vacancy__row`).length;
    let padding = rowAmount*64 + 10;
    if ($('.vacancy .l-container').width() >= 720) {$('.vacancy__table-container').css({'padding-bottom': padding+"px"});}
    console.log('rowAmount='+rowAmount);
    $(`.vacancy__content[data-cont="${id}"]`).addClass(contentActiveClass)
  })
})
