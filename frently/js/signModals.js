function signModals(){
	return {
		showPasword: function(){
			$('.modal-sign__show-password').on('mousedown', function(event){
				// event.stopPropagation()
				console.log('show')
				$(this).parent('.modal-sign__form-group').find('input').attr('type','text')
			})
			$('.modal-sign__show-password').on('mouseup', function(event){
				// event.stopPropagation()
				console.log('hide')
				$(this).parent('.modal-sign__form-group').find('input').attr('type','password')
			})
		},
		init: function(){
			this.showPasword()
		}
	}
}
$(document).ready(function(){
	signModals().init()
})
