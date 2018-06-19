
function header(){
	return {
		mobileMenu: function(){
			$('.header__burger').on('click', function(){
				// console.log('lalalka')
				var id = $(this).data('id')
				console.log(id)
				$('#'+id).toggle()
				$(this).find('.burger').toggleClass('burger--active')
			})
			$('.header-wrap').on('click', function(event){
				event.stopPropagation()
			})
			$(window).on('click', function(){
				$(window).trigger('closeMobileMenu')
			})
			$('.popup').on('click', function(){
				$(window).trigger('closeMobileMenu')
			})

		},
		popupWrapClick(){
			$('.popup-wrap').on('click', function(event){
				$(window).trigger('closeAllDropdown')
				event.stopPropagation()
				var id = $(this).data('id')
				var status = $(this).attr('status')
				console.log('-----popup-click')
				$('.popup-wrap').each(function(index){
					$(this).attr('status', 'closed')
				})
				// console.log('---'+status)
				switch(status){
					case 'opened':
						$(window).trigger('closePopup')
					break
					case 'closed':
					console.log('closed')
						$(this).attr('status', 'opened')
						$(window).trigger('openPopup', id)
					break
				}
			})
			$(window).on('click', function(){
				$('.popup').hide()
				$('.popup-wrap').each(function(index){
					$(this).attr('status', 'closed')
				})
			})
		},
		openClosePopup: function(){
			$(window).on('openPopup', function(event, id){
				console.log(event, id)
				$('.popup').hide()
				$('#'+id).show()
			})
			$(window).on('closePopup', function(event, id){
				$('.popup').hide()
				$('#'+id).show()
			})
		},
		closeMobileMenu: function(){
			$(window).on('closeMobileMenu', function(){
				$('#main-mobile-menu').hide();
				$('.header__burger').find('.burger').removeClass('burger--active')
			})
		},
		resizeWindow: function(){
			$(window).on('resize', function(){
				$(window).trigger('closeMobileMenu')
			})
		},
		initialState: function(){
			// $('.popup-wrap').each(function(){
			// 	$(this).attr('status', 'closed')
			// })
		},
		init: function(){
			this.initialState()
			this.mobileMenu()
			this.popupWrapClick()
			this.openClosePopup()
			this.resizeWindow()
			this.closeMobileMenu()
		}
	}
}


$(document).ready(function(){
	header().init()

})
