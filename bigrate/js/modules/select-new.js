console.log('select-new');

selectList = $('.custom-select');

function createSelect(){
	var selBox = $('<div class="sel"></div>');
	var selPremier = $('<div class="sel__premier"></div>');
	var selDrop = $('<div class="sel__drop sel-hide"><ul></ul></div>');
	var selArrow = $('<div class="sel__arrow"></div>');

	var selPremierInput = $('<div class="sel__input-box"><input class="sel__input" type="text"/><div' +
	 ' class="sel__clear"></div></div>');

	var selPremierSpan = $('<span></span>');
	var selElem = $(this).find('select')[0];

	var selIndex;
	if(selElem.selectedIndex === 0 || selElem.selectedIndex) {
		selIndex = selElem.selectedIndex;
	} else return

	selPremierSpan.html(selElem.options[selIndex].innerHTML);

	for (var i = 0; i < selElem.length; i++) {
		var selItem = $('<li class="sel__item"></li>');
		selItem.html(selElem[i].innerHTML);
		if(i === selIndex){
			$(selItem).addClass('sel__item--active');
		}
		selDrop.find('ul').append(selItem);
	}

	if ($(this).hasClass('custom-select--filter')) {
		$(selPremier).append(selPremierInput).append(selPremierSpan).append(selArrow);
	} else {
		$(selPremier).append(selPremierSpan).append(selArrow);

	}
	$(selBox).append(selPremier).append(selDrop);

	$(this).append(selBox);
}

selectList.each(createSelect);

$('body').on('click','.sel__premier', function (event) {
	event.stopPropagation();
	closeAllSel(this);
	$(this).toggleClass('sel__premier--opened');
	$(this).closest('.sel').find('.sel__drop').toggleClass('sel-hide');
	if($(this).has('input').length) {
		$(this).find('input').focus();
	}
});

$('body').on('keyup change', '.sel__input-box input', function(){
	var parent = $(this).parent();
	if($(this).val()){
		parent.find('.sel__clear').show();
	} else {
		parent.find('.sel__clear').hide();
	}
});

$('body').on('click', '.sel__clear', function(){
	console.log('--click clear');
	var parent = $(this).parent();
	parent.find('input').val('');
	$(this).hide()})
	.on('click', '.sel__premier input', function(event){
	event.stopPropagation();
	console.log('click on input')
});



$('body').on('click', '.sel__item', function () {
	var text = $(this).html();
	var index = $(this).index();
	var selPrimer = $(this).closest('.sel').find('.sel__premier');
	console.log(selPrimer);
	closeAllSel();
	$(this).parent().find('.sel__item').removeClass('sel__item--active');
	$(this).addClass('sel__item--active');
	$(this).closest('.sel').find('.sel__premier span').html(text);
	// console.log($(this).closest('.custom-select').prev().attr('placeHolder', text));
	if ($(selPrimer).find('input').length) {
		$(selPrimer).find('input').val(text).change();
	}

	var select = $(this).closest('.sel').parent().find('select');
	select[0].selectedIndex = index;
	select.change();
});




function closeAllSel(elmnt) {
	/*a function that will close all select boxes in the document,
	except the current select box:*/
	var x, y, i, arrNo = [];
	x = document.getElementsByClassName("sel__drop");
	y = document.getElementsByClassName("sel__premier");
	for (i = 0; i < y.length; i++) {
		if (elmnt == y[i]) {
			arrNo.push(i)
		} else {
			y[i].classList.remove("sel__premier--opened");
		}
	}
	for (i = 0; i < x.length; i++) {
		if (arrNo.indexOf(i)) {
			x[i].classList.add("sel-hide");
		}
	}
}

$(window).on('click', function(){
	closeAllSel();
	console.log('close')
});


var clearInput = $('<div class="form__input-clear"></div>');
$('.form__input-wrap').append(clearInput);


$('body').on('keyup change load click', '.form__input-wrap input',function(){
	var parent = $(this).parent();
	console.log($(this).val());
	if($(this).val()){
		parent.find('.form__input-clear').show();
	} else {
		parent.find('.form__input-clear').hide();
	}
});

$('body').on('click', '.form__input-wrap .form__input-clear', function(){
	$(this).closest('.form__input-wrap').find('input').val('');
	$(this).hide();
	$(this).closest('.form__input-wrap').find('input').focus();
});


// selectList.forEach(function() {
// 	console.log(this)
// })
