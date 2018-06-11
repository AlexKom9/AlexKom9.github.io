
console.log('separate-flat.js')

function separateFlat(){
	var s = {
		features: '.separate-flat__features',
		featureItem: '.separate-flat__features-item'
	}
	return {
		slidersActivate: function(){
			// Slick sliders
			$('.flat-card__slider').each(function(index){
				var self = this
				$(this).slick({
					prevArrow: $(self).parent().find('.flat-card__slider-prevArrow'),
					nextArrow: $(self).parent().find('.flat-card__slider-nextArrow'),
				})
			})
			// $('.flexslider').flexslider();
			$('#carousel').flexslider({
				animation: "slide",
				controlNav: false,
				animationLoop: false,
				slideshow: false,
				itemWidth: 210,
				itemMargin: 5,
				asNavFor: '#slider'
			});
			$('#slider').flexslider({
				animation: "slide",
				controlNav: false,
				animationLoop: false,
				slideshow: false,
				sync: "#carousel"
			});
		},
		showMoreFeatures: function(){
			console.log('lalka')
			$(s.features).each(function(elem){
				console.log($(elem).find(s.featureItem).length)
			})

		},
		init: function(){
			this.slidersActivate();
			this.showMoreFeatures();
		}
	}
}

$(document).ready(function(){
	separateFlat().init()
})
