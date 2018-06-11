
console.log('separate-flat.js')

$(document).ready(function(){
	console.log('ready')
	$('.flat-card__slider').each(function(index){
		console.log(this)
		console.log(index)
		var self = this
		console.log( $(self).find('.lalla'))
		$(this).slick({
			prevArrow: $(self).parent().find('.flat-card__slider-prevArrow'),
			nextArrow: $(self).parent().find('.flat-card__slider-nextArrow'),
			// autoplay: true,
			// autoplaySpeed: 2000,
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
