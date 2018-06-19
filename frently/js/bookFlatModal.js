// console.log('flatModal')
function bookFlatModal(){
	return {
		close: function(){
			$('.modal__close-icon--book').on('click', function(){
				$('.l-page').removeClass('l-page--modal-active')
				console.log('close')
				$(this).closest('.modal-container').hide()
			})
		},
		showModals: function(){
			$('.show-book-modal').on('click', function(){
				$('.modal-container').hide()
				$('.l-page').addClass('l-page--modal-active')
				$('#modal-book').css('display','flex')
			})
			$('.show-modal-book-succes').on('click', function(){
				$('.modal-container').hide()
				$('.l-page').addClass('l-page--modal-active')
				$('#modal-book-succes').css('display','flex')
			})
		},
		showPasword: function(){
			$('.modal-sign__show-password').on('mousedown', function(event){
				event.stopPropagation()
				console.log('show')
				$(this).parent('.modal-sign__form-group').find('input').attr('type','text')
			}),
			$('.modal-sign__show-password').on('mouseup', function(event){
				event.stopPropagation()
				console.log('hiede')
				$(this).parent('.modal-sign__form-group').find('input').attr('type','password')
			})
		},
		init: function(){
			// this.showPasword()
			// this.close()
			// this.showModals()
		}
	}
}
$(document).ready(function(){
	bookFlatModal().init()
})
