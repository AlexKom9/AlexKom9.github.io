
function modalBook(){
	return {
		addDate(){
			var num = 0;
			$(window).on('add-date', function(event, data){
				console.log(data)
				num +=1
				$('.modal-book__date-meet-container').append(
					`
						<div class="meet-date-box" close-num=${num}>
							<div class="meet-date"><img src="img/icons/office-briefcase-accent-color.png">${data.day} в ${data.time}</div>
							<div id="delete" class="l-btn l-btn--transparent l-btn--diss" close-num=${num}>Удалить интервал</button>
						</div>
					`
				)
			})
		},
		deleteMeet(){
			console.log('---initdeleteMeet')
			var num = 0;
			$('.modal-book__date-meet-container').on('click', '.l-btn', function(){
				num = $(this).attr('close-num')
				console.log(num);
				console.log('----dalie')
				$(`.meet-date-box[close-num=${num}]`).remove()
			})
		},
		init: function(){
			this.addDate();
			this.deleteMeet();
		}
	}
}

$(document).ready(function(){
	modalBook().init()
})
