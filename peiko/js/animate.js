$(document).ready(function(){

  stars = $('#spaceobj .cls-6');
  $('#spaceobj .cls-6').css({fill: '#6595e5'});
  $('#spaceobj .cls-6').addClass('animate');
  for (var i = 0; i < stars.length; i++) {
    stars.eq(i).css({'animation-delay': `${Math.random()}s`})
  }
})
