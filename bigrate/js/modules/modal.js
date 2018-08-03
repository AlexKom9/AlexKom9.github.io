var modal = function(){
	// console.log('init')
	return {
		modalEvents: function(){
			var self =  this;
			$('.call-modal').on('click', function(evetn){
				event.stopPropagation();
				var id = $(this).data('id');
				console.log('click -- id == ' + id);
				if (id) self.showModal(id);
			});

			$('.modal').on('click', function(){
				event.stopPropagation();
			});

			$(document).on('click', this.closeModals)
		},

		closeModals: function(){
			$('.l-page').removeClass('l-page--modal');
			$('.l-wrap').removeClass('l-wrap--modal');
			$('.modal-wrap').removeClass('modal-wrap--active');

		},

		showModal: function(id){
			this.closeModals();
			$('.l-page').addClass('l-page--modal');
			$('.l-wrap').addClass('l-wrap--modal');
			$('#' + id).addClass('modal-wrap--active');
		},

		init: function(){
			this.modalEvents();
			this.closeModals();
		}
	}
};

modal().init();

// modal().showModal('modal-license')