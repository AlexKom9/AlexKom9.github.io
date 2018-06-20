console.log('landlord_cabinet.js')

function mainCabinet(){
	var curentTab = false;
	return {
		switchMainTabs: function(){
			$('.cabinet-tab').on('click', function(){
				var area = $(this).data('area');
				$('.cabinet-tab').removeClass('cabinet__tab--active')
				// $('cabinet__tab[data-area="'+area+'"]').addClass('cabinet__tab--active')
				$('.cabinet__tab').each(function(){
					key = $(this).data('area');
					console.log(key)
					console.log(area)
					if (key === area){
						$(this).addClass('cabinet__tab--active')
					}
				})
				$('.cabinet__area').hide()
				$('#'+area+'-area').show()
			})
		},
		swhitchCalendarTimeLine: function(){
			$('.cabinet__container-side .cabinet__subtub').on('click', function(){
				$('.cabinet__container-side .cabinet__subtub').removeClass('cabinet__subtub--active');
				$(this).addClass('cabinet__subtub--active')
				var id = $(this).data('id')
				console.log($(this))
				$('.cabinet__side-content').children('div').hide()
				$('#'+id).show()
			})
		},
		switchMeetsTabs: function(){
			var self = this;
			$('.cabinet__meetings .cabinet__subtub').on('click', function(){
				// console.log('meet tub')
				$('.cabinet__meetings .cabinet__subtub').removeClass('cabinet__subtub--active')
				$(this).addClass('cabinet__subtub--active')
				var status = $(this).data('status')
				self.meetSwitcherFilter(status)
			})
		},
		meetSwitcherFilter: function(status){
			console.log(status)
			switch(status){
				case 'all':
					$('.cabinet-meet__no-meet').hide()
					$('.cabinet-meet__new-meets').show()
					$('.cabinet-meet__filter').show()
					$('.cabinet-meet__address').show()
					$('.cabinet-meet__all-meets .cabinet-meet__card').show()
					break
				case 'approved':
					$('.cabinet-meet__no-meet').hide()
					$('.cabinet-meet__new-meets').hide()
					$('.cabinet-meet__filter').show()
					$('.cabinet-meet__all-meets .cabinet-meet__card').hide()
					$('.cabinet-meet__all-meets .cabinet-meet__card[data-status="approved"]').show()
					$('.cabinet-meet__address').hide()
					$('.cabinet-meet__address[data-status="approved"]').show()
					break
				case 'abolished':
					$('.cabinet-meet__no-meet').show()
					$('.cabinet-meet__new-meets').hide()
					$('.cabinet-meet__filter').hide()
					$('.cabinet-meet__all-meets .cabinet-meet__card').hide()
					$('.cabinet-meet__address').hide()
					break
			}
		},
		switchObjTabs: function(){
			$('.cabinet__objs .cabinet__subtub').on('click', function(){
				// console.log('meet tub')
				$('.cabinet__objs .cabinet__subtub').removeClass('cabinet__subtub--active')
				$(this).addClass('cabinet__subtub--active')
			})
		},

		choseCalendatDate: function(){
			$('.calendar__days li').on('click', function(){
				$('.calendar__days li'	).removeClass('calendar__day--active')
				$(this).addClass('calendar__day--active')
			})
		},
		uploadImg: function(){
			function readURL(input, boxImg, boxEdit) {
				if (input.files && input.files[0]) {
					// console.log()
					var reader = new FileReader()
						reader.onload = function(e) {
							boxImg.css("background-image",'url('+e.target.result+')')
							boxEdit.show()
						}
					reader.readAsDataURL(input.files[0])
				}
			}

			$(".flat-edit__photo-upload").change(function() {
				console.log('on change work well')
				var boxImg = $(this).closest('.flat-edit__photo-item').find('.flat-edit__photo-img-container')
				var boxEdit = $(this).closest('.flat-edit__photo-item').find('.flat-edit__photo-edit')
				readURL(this, boxImg, boxEdit)
			})
		},

		imgAction: function(){
			$('.flat-edit__photo-delete').on('click',function(){
				var imgInp = $(this).closest('.flat-edit__photo-item').find('.flat-edit__photo-upload')
				var boxImg = $(this).closest('.flat-edit__photo-item').find('.flat-edit__photo-img-container')
				var boxEdit = $(this).closest('.flat-edit__photo-item').find('.flat-edit__photo-edit')
				imgInp.val('')
				boxImg.css("background-image",'')
				boxEdit.hide()
			})
			// flat-edit__photo-rotate
			$('.flat-edit__photo-rotate').on('click',function(){
				var imgInp = $(this).closest('.flat-edit__photo-item').find('.flat-edit__photo-upload')
				var boxImg = $(this).closest('.flat-edit__photo-item').find('.flat-edit__photo-img-container')
				var boxEdit = $(this).closest('.flat-edit__photo-item').find('.flat-edit__photo-edit')
				var rotation = boxImg.attr('data-rotate')
				console.log(rotation)

				if (!rotation){
					boxImg.css("transform",'rotate(90deg)')
					boxImg.attr( 'data-rotate', -90 )
					return
				}
				var newRotate = Number(rotation) - 90

				boxImg.attr('data-rotate', newRotate)
				boxImg.css("transform",'rotate('+newRotate+'deg)')
				// boxEdit.hide()
			})

		},
		initialState: function(){
			console.log('mainCabinet script works')
			$('.cabinet__area').hide()
			$('#'+$('.cabinet__tab--active').data('area')+'-area').show()
			$('#timeline').hide()
			$('.calendar__days li').first().addClass('calendar__day--active')
			$('.calendar__days li:eq(2)').addClass('calendar__day--solid')
			$('.calendar__days li:eq(10)').addClass('calendar__day--dashed')
			$('.calendar__days li:eq(25)').addClass('calendar__day--dashed')
			// temp
			// $('.cabinet').hide()
			// $('#flat-edit--edit').show()



			this.meetSwitcherFilter('all')
		},
		init: function(){
			this.initialState()
			this.switchMainTabs()
			this.swhitchCalendarTimeLine()
			this.switchMeetsTabs()
			this.switchObjTabs()
			this.choseCalendatDate()
			this.imgAction()
			this.uploadImg()
		},
	}
}

$(document).ready(function(){
	mainCabinet().init()
	// $('#imgInput').on('click',function() {
	// 	var imgBox = $(this).parent('.flat-edit__photo-item')
	// 	readURL(this, imgBox)
	// })
	//
	// function readURL(input, imgBox) {
	// 	if (input.files && input.files[0]) {
	// 		var reader = new FileReader()
	// 		reader.onload = function(e) {
	// 			console.log('lalalal')
	// 			// console.log($(this).parent('.flat-edit__photo-item')).css("background-image",'url('+e.target.result+')')
	// 			$('#blah').attr('src', e.target.result)
	// 			// $('.flat-edit__photo-item').css("background-image",'url('+e.target.result+')')
	// 			// imgBox.css("background-image",'url('+e.target.result+')')
	// 			// $('#test').attr('src', e.target.result)
	// 		}
	// 		reader.readAsDataURL(input.files[0])
	// 	}
	// }

})
