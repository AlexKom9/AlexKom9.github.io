
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
		addDate: function(){
			var num = 0;
			$(window).on('add-date', function(event, data){
				console.log(data)
				num +=1
				$('.meet-date__container').append(
					`
						<div class="meet-date-box" close-num=${num}>
							<div class="meet-date"><img src="img/icons/office-briefcase-accent-color.png">${data.day} в ${data.time}</div>
							<div id="delete" class="l-btn l-btn--transparent l-btn--diss" close-num=${num}>Удалить интервал</button>
						</div>
					`
				)
			})
		},
		deleteMeet: function(){
			console.log('---initdeleteMeet')
			var num = 0;
			$('.meet-date__container').on('click', '.l-btn', function(){
				num = $(this).attr('close-num')
				console.log(num);
				console.log('----dalie')
				$(`.meet-date-box[close-num=${num}]`).remove()
			})
		},
		init: function(){
			this.clickAddMore();
			this.addDate();
			this.deleteMeet();
		}
	}
}

$(document).ready(function(){
	viewBook().init()
})
