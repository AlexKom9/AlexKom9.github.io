console.log('separate-flat.js')

function separateFlat(){
	var s = {
		features: '.separate-flat__features',
		featuresActive: '.separate-flat__features--active',
		featureItem: '.separate-flat__features-item',
		showMore: '.separate-flat__show-more',
		showMoreActive: 'separate-flat__show-more--active',
		showMoreElem: '<div class="separate-flat__show-more"><span>Показать больше</span></div>'
	}
	var maxAmount = 3
	return {
		slidersActivate: function(){
			// Slick sliders
			$('.flat-card__slider').each(function(index){
				var self = this
				$(this).slick({
					prevArrow: $(self).parent().find('.flat-card__slider-prevArrow'),
					nextArrow: $(self).parent().find('.flat-card__slider-nextArrow'),
					dots: true,
					appendDots: $(self).closest('.flat-card__head').find('.flat-card__dots')
				})
			})
			// $('.flexslider').flexslider();
			// $('#carousel').flexslider({
			// 	animation: "slide",
			// 	controlNav: false,
			// 	animationLoop: false,
			// 	slideshow: false,
			// 	itemWidth: 210,
			// 	itemMargin: 5,
			// 	asNavFor: '#slider'
			// });
			// $('#slider').flexslider({
			// 	animation: "slide",
			// 	controlNav: false,
			// 	animationLoop: false,
			// 	slideshow: false,
			// 	sync: "#carousel"
			// });
			// INIT Big slider
			 $('.slider-for').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				// fade: true,
				asNavFor: '.slider-nav',
				prevArrow: $('#bigSliderPrevArrow'),
				nextArrow: $('#bigSliderNextArrow'),
			});
			$('.slider-nav').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				asNavFor: '.slider-for',
				// dots: true,
				centerMode: true,
				focusOnSelect: true
			});

			$('.flat-card__body').on('click', function(event){
				console.log('click slick arrow')
				event.stopPropagation()
			})
		},
		initialHideFeatures: function(){
			$(s.features).each(function(elem){
				var featureItems = $(this).find(s.featureItem)
				var amount = $(this).find(s.featureItem).length
				if (amount > maxAmount) {
					$(this).append(s.showMoreElem)
					featureItems.each(function(index){
						if ( index > maxAmount - 1 ) {
							$(this).hide()
						}
					})
				}
				console.log($(this).find(s.featureItem).length)
			})
		},
		clickShowFeatures: function(){
			var self = this;
			$(s.showMore).on('click', function(){
				$(this).toggleClass(s.showMoreActive)
				if ($(this).hasClass(s.showMoreActive)){
					$(this).find('span').html('Скрыть')
				} else {
					$(this).find('span').html('Показать больше')
				}
				var features = 	$(this).closest(s.features);
				features.toggleClass(s.featuresActive);
				self.showHideFeatures(features);

			})
		},
		showHideFeatures: function(elem){
			if($(elem).hasClass(s.featuresActive)){
				console.log('hasClass')
				console.log(elem)
				$(elem).find(s.featureItem).each(function(index){
					console.log(this)
					$(this).show()
				})
			} else {
				$(elem).find(s.featureItem).each(function(index){
					if( index > maxAmount - 1 )
					$(this).hide()
				})

			}
		},
		init: function(){
			this.slidersActivate();
			this.initialHideFeatures();
			this.clickShowFeatures();
		}
	}
}

function initMap(){
	var uluru = {lat: -25.363, lng: 131.044};
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 4,
			center: uluru
		});
		var marker = new google.maps.Marker({
			position: uluru,
			map: map
		});
}

$(document).ready(function(){
	separateFlat().init()
})
