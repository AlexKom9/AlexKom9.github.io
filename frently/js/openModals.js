function openModals(){
	return {
		openModal: function(){
			$('.show-modal').on('click', function(){
				$('.modal-container').hide()
				var id = $(this).data('id')
				console.log($(this))
				console.log('id=',id)
				$('.l-page').addClass('l-page--modal-active')
				$('#'+id).css('display','flex')
			})
		},
		closeModal: function(){
			$('.modal__close-icon').on('click', function(){
				$('.l-page').removeClass('l-page--modal-active')
				$(this).closest('.modal-container').hide()
			})
		},
		outClick: function(){
			$('.modal').on('click', function(event){
				event.stopPropagation()
			})
			$('.modal-container').on('click', function(event){
				$('.l-page').removeClass('l-page--modal-active')
				$(this).hide()
			})
		},
		// show Edit flat, Add flat sections
		showAdditionSection: function(){
			$('.show-section').on('click', function(){
				$('.main-content').hide()
				var id = $(this).data('id')
				console.log($(this))
				console.log('id=',id)
				$('.additional-section').hide()
				$('#'+id).show()
			})
		},
		backToMainContent: function(){
			$('.back__inner').on('click', function(){
				$('.additional-section').hide()
				$('.main-content').show()
			})
		},
		initialState: function(){
			$('.additional-section').hide()
			// temp
			// $('.l-page').addClass('l-page--modal-active')
			// $('#modal-profile').show()
		},
		init: function(){
			this.openModal();
			this.closeModal();
			this.showAdditionSection();
			this.backToMainContent();
			this.outClick();
			this.initialState();
		}
	}
}

$(document).ready(function(){
	console.log('openModals')
	openModals().init()
})
