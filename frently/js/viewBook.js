
function viewBook(){
	return {
		clickAddMore(){
			$('.view-book__add-date-link').on('click', function(){
				var trigger = true

				var day = $(this).closest('.view-book').find('.view-book__choose-day .l-dropdown-box span').html()
				var time = $(this).closest('.view-book').find('.view-book__choose-time .l-dropdown-box span').html()
				if (day != 'Выберите день' && time != 'Выберите время'){
					var data = {
						day: day,
						time: time
					}
					$(window).trigger('add-date', data)
					$(window).trigger('reset-input')
				}

			})
		},
		init: function(){
			this.clickAddMore();
		}
	}
}

$(document).ready(function(){
	viewBook().init()
})
