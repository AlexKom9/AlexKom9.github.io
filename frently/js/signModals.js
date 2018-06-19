function signModals(){
	return {
		showPasword: function(){
			if (navigator.userAgent.search(/Safari/) > 0) {
				$('.modal-sign__show-password').hide()
			}
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
		makePhoneMask: function(){
			$('.modal-sign__input--phone').mask("+380(99) 999-9999");

		},
		init: function(){
			this.showPasword()
			this.makePhoneMask()
		}
	}
}
$(document).ready(function(){
	signModals().init()
})
