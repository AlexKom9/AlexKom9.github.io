function flatFilter(){
	// var initialDropdownsList = false;
	var currentDropdown = false
	return {
		hideShowFilters: function(){
			$('#rolleUpFilters').on('click', function(){
				var name = ''
				$(this).closest('.flat-filter__rollup').toggleClass('flat-filter__rollup--active')
				if($(this).closest('.flat-filter__rollup').hasClass('flat-filter__rollup--active')) {
					console.log('hassClass')
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
		resizeWindow: function(){
			$(window).on('resize', function(){
				// if( !$('.flat-filter__rollup').hasClass('flat-filter__rollup--active')) {
				// 	name = $('#rolleUpFilters').data('nameactive')
				// 	$('#filter-sec').slideDown('slow');
				// 	$('#rolleUpFilters').html(name)
				// }



			})

		},
		init: function(){
			this.clickMoreFilters();
			this.hideShowFilters();
			this.resizeWindow();
		}
	}
}

$(document).ready(function(){
	flatFilter().init()
})
