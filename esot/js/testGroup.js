console.log('----group.js');
// 
// $(document).ready(function() {
// 	$('.honeycombs').honeycombs();
// });


$.coinFlip = function () {
  return Math.random() > .95;
}
$(document).ready(function () {
  honey();
});
var arr = [2, 2, 2, 2, 3, 5, 5, 6, 8, 8, 9, 11, 11, 12, 14, 14, 15, 17, 17, 18, 20, 20, 21, 23, 23, 25, 27, 27, 29, 31, 31, 33];

function honey() {
  var hexWidth = 65;

  var h = Math.ceil($(document).outerHeight() / hexWidth);
  var w = arr[Math.ceil($(document).outerWidth() / hexWidth) + 1];

  var cnt = ((h * (1 + ((h / w) * 1.5))) * w);
  $('#honeycomb').css({ 'height': (h * 65) + 'px', 'width': (w * 65) + 'px' });
  for (var i = 0; i < cnt; i++) {
    var hex = $('.hex').first().clone();
    $('#honeycomb').append(hex);
    $(hex).attr('i', i);
    if ($.coinFlip()) {
      $(hex).find('span').css({ 'transform': 'rotateZ(' + Math.round(Math.random() * 180) + 'deg)' }).text('🐝');
    }
  }

  $('.hex').click(function () {
    document.title = $(this).attr('i');
  });
}
