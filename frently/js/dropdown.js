// console.log('DROPDOWn')

function DropDown(){
	var currentDropdown = false
	return {
		// close all dropdowns on out click
		clickOut: function(){
			$('.modal').on('click', function(){
				$('.l-dropdown').hide()
				$('.l-dropdown-box').data('status','closed')
			})
			$(document).on('click', function(){
				console.log('clickOut')
				$('.l-dropdown').hide()
				$('.l-dropdown-box').data('status','closed')
				$('.l-dropdown-box').each(function(){
					$(this).data('status', 'closed')
					if ($(this).find($('.l-dropdown__input-text-filter')).length != 0){
						$(this).find('.l-dropdown__input-text-filter').hide()
						$(this).find('span').show()
					}
				})
			})
		},
		clickDropdown: function(){
			$('.l-dropdown').click(function(event){
				event.stopPropagation();
			})
		},
		clickDropdownBox: function(){
			$('.l-dropdown-box').on('click', function(event){
				event.stopPropagation();

				var status = $(this).data('status')
				console.log(status)
				$('.l-dropdown').hide()
				// $('.l-dropdown-box').attr('data-status','closed')
				if (status == 'closed'){
					console.log('openning')
					$(this).find('.l-dropdown').show()
					$(this).data('status','opened')
					console.log(this)
					console.log($(this).data('status'))
					// console.log($(this).find($('.l-dropdown__input-text-filter')))
					if ($(this).find($('.l-dropdown__input-text-filter')).length != 0){
						console.log('----------has')
						$(this).find('.l-dropdown__input-text-filter').show()
						$(this).find('.l-dropdown__input-text-filter').focus()
						$(this).find('span').hide()
					}
				} else {
					console.log('closing')
					$(this).find('.l-dropdown').hide()
					$(this).data('status','closed')

					if ($(this).find($('.l-dropdown__input-text-filter')).length != 0){
						$(this).find('.l-dropdown__input-text-filter').hide()
						$(this).find('span').show()
					}

				}
			})
		},
		clickChoseItems: function(){
			$('.dropdown-chose-item').on('mouseup', function(event){
				event.stopPropagation();
				var val = $(this).html()
				var placeholder = $(this).closest('.l-dropdown-box').data('placeholder')

				var box = $(this).closest('.l-dropdown-box');

				if ($(box).find($('.l-dropdown__input-text-filter')).length != 0){
					$(box).find('.l-dropdown__input-text-filter').hide()
					$(box).find('span').show()
				}

				$(box).data('status','closed')
				$(box).children('span').html(val)
				$(box).data('filled', true)
				$(this).closest('.l-dropdown').hide()

			})
		},
		onCheckBoxChange: function(){
			$('.l-dropdown__checkboxes-container input[type="checkbox"]').on('change',function(){

				// console.log($(this).data('any'))
				if( $(this).data('any') === true && (this.checked === true)){
					$('input[type=checkbox]').each(function() {
								console.log('disabled')
								this.checked = false;
								this.disabled = true;
						})
					this.disabled = false
					this.checked = true
				}
				else if ($(this).data('any') === true && (this.checked === false)){
					$('input[type=checkbox]').each(function() {
								console.log('disabled')
								this.checked = false;
								this.disabled = false;
						})
					this.disabled = false
					this.checked = false
				}
				var placeholder = $(this).closest('.l-dropdown-box').data('placeholder')
				var lsVal = []
				var boxVal = $(this).closest('.l-dropdown-box').children('span').html();

				$(this).parent().children('input:checked').each(function(index, elem){
					console.log($(elem).next('label').html())
					lsVal.push($(elem).next('label').html())
				})

				if(lsVal.length == 0){
					// console.log('length  = 0')
					lsVal.push(placeholder)
				}
				$(this).closest('.l-dropdown-box').children('span').html(lsVal.sort().join())
				// $(this).closest('.l-dropdown-box').data('filled', 'true')

				return

			})
		},
		resetInput: function(){
			$(window).on('reset-input', function(event){
				$('.l-dropdown-box').each(function(){
					var placeholder = $(this).data('placeholder')
					$(this).children('span').html(placeholder)
					$('input[type=checkbox]').each(function() {
								this.checked = false;
						})
				})
			})
		},
		inputTextFilter: function(){
			$('.l-dropdown__input-text-filter').on('click', function(event){
				event.stopPropagation()
				var parent = $(this).parent('.l-dropdown-box')
				$('.l-dropdown-box').data('status', 'closed')
				$('.l-dropdown').hide()
				parent.data('status', 'opened')
				parent.find('.l-dropdown').show()
			})
			$('.l-dropdown__input-text-filter').on('keyup', function(){
				// console.log('---on change')
				var key =  $(this).val().toLowerCase()
				$(this).parent('.l-dropdown-box').find('.dropdown-chose-item').each(function(){
					var city = $(this).html().toLowerCase()
					// console.log(city)
					console.log(city.includes(key))
					if (city.includes(key)){
						$(this).show()
					} else {
						$(this).hide()
					}
				})
			})
		},
		initialState(){
			$('input[type=checkbox]').each(function(){
				this.checked = false
			})
			$('.l-dropdown__input-text-filter').hide()
			// $('.l-dropdown-box').each(function(){
			// 	// $(this).data('filled', false)
			// })
		},
		init: function(){
			this.clickDropdown();
			this.clickDropdownBox();
			this.clickChoseItems();
			this.onCheckBoxChange();
			this.clickOut();
			this.initialState()
			this.inputTextFilter()
			this.resetInput()
		}
	}
}

$(document).ready(function(){
	DropDown().init()

})
