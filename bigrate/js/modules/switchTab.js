console.log('switchTab')

$('.switch-tab').on('click', function(){
	$('.switch-tab').removeClass('active');
	$(this).addClass('active');
	var id = $(this).data('id');
	$('.switch-content').hide();
	$('#'+id).show();
});

$(document).ready(function () {
	$('.switch-tab.active').trigger('click')
});

$('.card__head--hint').on('click', function(){
	var arrow  = $(this).parent().find('.card__arrow');
	var inner = $(this).parent().find('.card__inner--hint');
	inner.toggle()
	arrow.toggleClass('opened')
});


