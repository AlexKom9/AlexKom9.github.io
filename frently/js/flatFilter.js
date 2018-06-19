function flatFilter(){
	// var initialDropdownsList = false;
	var currentDropdown = false
	return {
		hideShowFilters: function(){
			$('#rolleUpFilters').on('click', function(){
				var name = ''
				$(this).closest('.flat-filter__rollup').toggleClass('flat-filter__rollup--active')
				if($(this).closest('.flat-filter__rollup').hasClass('flat-filter__rollup--active')) {
					console.log('hasClass')
					name = $(this).data('nameactive')
					$('#filter-sec').slideDown('slow')
				} else {
					name = $(this).data('name')
					console.log($(this).data('name'))
					$('#filter-sec').slideUp('slow')
				}
				$(this).html(name)
			})
		},
		clickMoreFilters: function(){
			$('#moreFiltersBtn').click(function(){
				// $(this).html()
				if($('#moreFiltersContainer').css('display') == 'flex') {
					$(this).find('span').html('Меньше фильтров');
					$('#moreFiltersContainer').css('display', 'none')
				} else {
					$(this).find('span').html('Больше фильтров');
					$('#moreFiltersContainer').css('display', 'flex')
				}
			})
		},
		changeInterval: function(){

			// input validation
			$('.flat-filter__budget-price').on('keypress, keydown', function(e){
				if (e.ctrlKey || e.altKey || e.metaKey) return;
				console.log('----char')
				var chr = String.fromCharCode(e.keyCode).toLowerCase()
				console.log(e.keyCode)
				if (chr == null) return;
				if (chr < '0' || chr > '9' || ($(this).val().length >= 5)) {
					if(  e.keyCode != 8 && e.keyCode != 46) {
						if( e.keyCode < 37 || e.keyCode > 40){
							console.log('false')
							return false
						}
					}
				}
			})

			// make event to give num to l-dropdown-box
			$('.flat-filter__budget-price').on('keyup', function(){
				var box = $(this).closest('.l-dropdown-box')
				var parent = $(this).closest('.flat-filter__budget-price-box');
				var priceFrom = null;
				var priceTo = null;

				if ( $(this).hasClass('flat-filter__budget-price-from')){
					var priceFrom = $(this).val()
					console.log('-------priceFrom-------')
					console.log(priceFrom)
					var priceTo = parent.find('.flat-filter__budget-price-to').val()

				} else if ($(this).hasClass('flat-filter__budget-price-to')) {
						var priceTo = $(this).val()
						var priceFrom = parent.find('.flat-filter__budget-price-from').val()
						console.log('-------priceTo-------')
						console.log(priceTo)
				}
				var data = {
					from: priceFrom,
					to: priceTo,
					box: box
				}
				$(window).trigger('changeInputPrice', data)
			})


			$(window).on('changeInputPrice', function(event, data){
				var box = data.box
				var placeholder = box.data('placeholder')
				console.log('---data-type')
				console.log(data.from)

				if (!!data.from) {
					var priceFrom  = 'от '+ data.from + ' грн '
				} else {
					priceFrom = ''
				}

				if (!!data.to){
					var priceTo = ' до ' + data.to + ' грн '
				} else {
					priceTo = ''
				}
				var res = priceFrom + priceTo
				// console.log($(box).attr('id'))
				// box.css('background-color', 'red')
				console.log('res = '+res)
				if(res) {
					// console.log('take res')
					$(box).children('span').html(res)
					$(box).data('filled', true)
				} else {
					// console.log('take placeholder')
					$(box).children('span').html(placeholder)

				}
			})

		},
		initialState: function(){
		},
		init: function(){
			this.clickMoreFilters();
			this.hideShowFilters();
			this.changeInterval();
			this.initialState();
		}
	}
}

$(document).ready(function(){
	flatFilter().init()
})
