console.log('separate-flat.js')

$(document).ready(function(){
	sliderList = []
	$('.flat-card__slider-container').each(function(index){
		var self = this
		var nextId = 'nextSlickArrow' + index
		var prevId = 'prevSlickArrow' + index
		var slickSliderId = 'slick' + index

		$(this).find('.flat-card__slider-nextArrow').attr('id', nextId)
		$(this).find('.flat-card__slider-prevArrow').attr('id', prevId)
		$(this).children('.flat-card__slider').attr('id', slickSliderId)

		data = {
			slider: slickSliderId,
			nextArrow: nextId,
			prevArrow: prevId
		}
		sliderList.push(data)
	})

	for (var i = 0; i < sliderList.length; i++) {
		console.log(sliderList[i])
		$('#'+sliderList[i].slider).slick({
				arrows: true,
				prevArrow: $('#' + sliderList[i].prevArrow),
				nextArrow: $('#' + sliderList[i].nextArrow),
				dots: true,
				appendDots: $('#'+sliderList[i].slider).closest('.flat-card__head').find('.flat-card__dots'),
				infinite: true,
		})
	}
})
