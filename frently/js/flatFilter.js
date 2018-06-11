function flatFilter(){
	// var initialDropdownsList = false;
	var currentDropdown = false
	return {
		// clickDropdown: function(){
		// 	$('.l-dropdown').click(function(){
		// 		event.stopPropagation();
		// 	})
		// },
		// clickDropdownBox: function(){
		// 	$('.l-dropdown-box').click(function(event){
		//
		// 		if ($(this).attr('id') === currentDropdown) {
		// 			currentDropdown = false
		// 		} else {
		// 			currentDropdown = $(this).attr('id')
		// 		}
		// 		console.log(currentDropdown)
		// 		var data = {
		// 			id: $(this).attr('id'),
		// 			currentDropdown: currentDropdown
		// 		}
		// 		$(window).trigger('clickDropdown', data)
		// 	})
		// },
		// showDropdown: function(){
		// 	$(window).on('clickDropdown', function(event, data){
		// 		// console.log('clickDropdown', id)
		// 		console.log(event, data.id, data.currentDropdown)
		// 		if (data.currentDropdown) {
		// 			$('#'+data.currentDropdown).find('.l-dropdown').fadeIn(100)
		// 		} else {
		// 			$('#'+data.id).find('.l-dropdown').fadeOut(100)
		// 		}
		// 	})
		// },
		// clickChoseItems: function(){
		// 	$('.dropdown-chose-item').on('click', function(){
		// 		var val = $(this).html()
		// 		if($(this).parent().hasClass('l-dropdown__checkboxes-container')){
		// 			var lsVal = []
		// 			var boxVal = $(this).closest('.l-dropdown-box').children('span').html();
		// 			console.log(boxVal)
		// 			if (!boxVal.includes(val)){
		// 				// console.log('includes')
		// 				// $(this).closest('.l-dropdown-box').children('span').html()
		// 			}
		// 			$(this).parent().children('input:checked').each(function(index, elem){
		// 				lsVal.push($(elem).next('label').html())
		// 			})
		//
		// 			if(lsVal.indexOf(val) === -1){
		// 				lsVal.push(val);
		// 			} else {
		// 				lsVal.splice(lsVal.indexOf(val),1)
		// 			}
		// 			if(lsVal.length == 0){
		// 				// console.log('length  = 0')
		// 				lsVal.push('Выберите время')
		// 			}
		// 			$(this).closest('.l-dropdown-box').children('span').html(lsVal.sort().join())
		// 			return
		// 		}
		// 		// console.log(val);
		// 		$(this).closest('.l-dropdown-box').children('span').html(val)
		// 	})
		// },
		clickMoreFilters: function(){
			$('#moreFiltersBtn').click(function(){
				// $(this).html()
				if($('#moreFiltersContainer').css('display') == 'flex') {
					$(this).find('span').html('Меньше фильтров');
					$('#moreFiltersContainer').css('display', 'none')
				} else {
					$(this).find('span').html('Больше фильтров');
					$('#moreFiltersContainer').css('display', 'flex')
				}
			})
		},
		init: function(){
			// this.clickDropdown();
			// this.clickDropdownBox();
			// this.showDropdown();
			// this.clickChoseItems();
			this.clickMoreFilters();
		}
	}
}

$(document).ready(function(){
	flatFilter().init()
})
