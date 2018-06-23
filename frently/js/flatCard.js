$(document).ready(function(){
	$('.flat-card__arrow').on('click', function(event){
		event.preventDefault();
	})

	$('.flat-card__dots').on('click', function(event){
		event.preventDefault();
		event.stopPropagation();
		console.log('click dots')
	})

		$('.flat-card__dots').find('ul').on('click', function(event){
			event.preventDefault();
			event.stopPropagation();
			console.log('click dots')
		})
		
	// $('.flat-card__dots').find('li').on('click', function(event){
	// 	event.preventDefault();
	// 	event.stopPropagation();
	// 	console.log('click dots')
	// })
	//
	// $('.flat-card__dots').find('button').on('click', function(event){
	// 	event.preventDefault();
	// 	event.stopPropagation();
	// 	console.log('click dots')
	// })

	// $('.flat-card__slider-nextArrow').on('click', function(){
	// 	var slider = $(this).closest('.flat-card__slider-container').find('.flat-card__slider')
	// 	slider.slick('slickNext')
	// })
	//
	// $('.flat-card__slider-prevArrow').on('click', function(){
	// 	var slider = $(this).closest('.flat-card__slider-container').find('.flat-card__slider')
	// 	slider.slick('slickPrev')
	// })

	// $('.flat-card__arrow').hover(function(event){
	// 	console.log('hover')
	// 	// console.log(value)
	// 	var i = 0;
	// 	$(this).css({'display':'block', 'opacity': Math.random() + 1, 'visibility': 'visible' }).show()
	// 	event.preventDefault();
	// 	event.stopPropagation();
	// })

})
