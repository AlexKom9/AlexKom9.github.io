console.log('index.jssssss');

$('.flat-card__slider').each(function(index){
	var self = this
	$(this).slick({
		prevArrow: $(self).parent().find('.flat-card__slider-prevArrow'),
		nextArrow: $(self).parent().find('.flat-card__slider-nextArrow'),
		dots: true,
		appendDots: $(self).closest('.flat-card__head').find('.flat-card__dots'),
	})
})

function initMap(){
	console.log('initMap')
	var uluru = {lat: -25.363, lng: 131.044};
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 4,
			center: uluru
		});
		var marker = new google.maps.Marker({
			position: uluru,
			map: map
		});
};
initMap();
