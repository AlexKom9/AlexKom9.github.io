//scroll
$("#hero__look").click(function() {
  windowHeight = $(window).height();
  let scrollHeight = windowHeight;
  if ($('.hero').height() > windowHeight){
    scrollHeight = $('.hero').height()
  }
  $('html, body').animate({
      scrollTop: scrollHeight }, 500);
});
//
// $(document).ready(function(){
//   $.scrollify({
//     section : ".section",
//     scrollSpeed: 1500,
//   });
// });
