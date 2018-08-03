console.log('select-new');

selectList = $('.custom-select');

function createSelect(){
	var selBox = $('<div class="sel"></div>');
	var selPremier = $('<div class="sel__premier">');
	var selDrop = $('<div class="sel__drop sel-hide"><ul></ul></div>');
	var selArrow = $('<div class="sel__arrow"></div>');

	var selPremierSpan = $('<span></span>');
	var selElem = $(this).find('select')[0];
	var selIndex = selElem.selectedIndex;

	selPremierSpan.html(selElem.options[selIndex].innerHTML);

	for (var i = 0; i < selElem.length; i++) {
		var selItem = $('<li class="sel__item"></li>');
		selItem.html(selElem[i].innerHTML);
		if(i === selIndex){
			$(selItem).addClass('sel__item--active');
		}
		selDrop.find('ul').append(selItem);
	}

	$(selPremier).append(selPremierSpan).append(selArrow);
	$(selBox).append(selPremier).append(selDrop);

	$(this).append(selBox);
}

selectList.each(createSelect);

$('.sel__premier').on('click', function (event) {
	event.stopPropagation();
	closeAllSel(this);
	$(this).toggleClass('sel__premier--opened');
	$(this).closest('.sel').find('.sel__drop').toggleClass('sel-hide');
});

$('.sel__item').on('click', function () {
	var text = $(this).html();
	var index = $(this).index();
	closeAllSel();
	$(this).parent().find('.sel__item').removeClass('sel__item--active');
	$(this).addClass('sel__item--active');
	$(this).closest('.sel').find('.sel__premier span').html(text);
	//if input
	console.log($(this).closest('.custom-select').prev().attr('placeHolder', text))

	var select = $(this).closest('.sel').parent().find('select')[0];
	select.selectedIndex = index;
	console.log(select.value);
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


$(window).on('click', closeAllSel);









//
// selectList.forEach(function() {
// 	console.log(this)
// })
