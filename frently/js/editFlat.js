console.log("init editFlat script ")

editFlat = function(){
	return {
		addDate: function(){
			var num = 0;
			$(window).on('add-date', function(event, data){
				console.log(data)
				num +=1
				$('.flat-edit__meet-date-box').append(
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
			$('.modal-book__date-meet-container').on('click', '.l-btn', function(){
				num = $(this).attr('close-num')
				console.log(num);
				console.log('----dalie')
				$(`.meet-date-box[close-num=${num}]`).remove()
			})
		},
		init: function(){
			this.addDate()
			this.deleteMeet()
		}
	}
}


$(document).ready(function(){
	console.log('lalalalalla----------')
	editFlat().init()
})
//
// $(document).ready(function(){
// 	editFlat.init();
// })
