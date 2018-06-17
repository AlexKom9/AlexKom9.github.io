
console.log('separate-flat.js')

$(document).ready(function(){
	$('.flat-card__slider-container').each(function(index){
		var self = this
		var nextId = 'nextSlickArrow' + index
		var prevId = 'prevSlickArrow' + index
		var slickSliderId = 'slick' + index

		$(this).children('.flat-card__slider-nextArrow').attr('id', nextId)
		$(this).children('.flat-card__slider-prevArrow').attr('id', prevId)
		$(this).children('.flat-card__slider').attr('id', slickSliderId)

		$('#'+slickSliderId).slick({
			prevArrow: $(this).children('#'+prevId),
			nextArrow: $(this).children('#'+nextId),
			dots: true,
			appendDots: $(self).closest('.flat-card__head').find('.flat-card__dots')
		})
	})

	// // $('.flexslider').flexslider();
	// $('#carousel').flexslider({
	// 	animation: "slide",
	// 	controlNav: false,
	// 	animationLoop: false,
	// 	slideshow: false,
	// 	itemWidth: 210,
	// 	itemMargin: 5,
	// 	asNavFor: '#slider'
	// });
	//
	// $('#slider').flexslider({
	// 	animation: "slide",
	// 	controlNav: false,
	// 	animationLoop: false,
	// 	slideshow: false,
	// 	sync: "#carousel"
	// });
})
