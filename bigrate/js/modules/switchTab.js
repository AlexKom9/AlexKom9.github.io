console.log('switchTab')

$('.switch-tab').on('click', function(){
	$('.switch-tab').removeClass('active');
	$(this).addClass('active');
	var id = $(this).data('id');
	$('.switch-content').hide();
	$('#'+id).show();
});

$(document).ready(function () {
	$('.switch-tab.active').trigger('click')
});

$('.card__head--hint').on('click', function(){
	var arrow  = $(this).parent().find('.card__arrow');
	var inner = $(this).parent().find('.card__inner--hint');
	inner.toggle()
	arrow.toggleClass('opened')
});



var transactionTable = function(){

	var mainTable = $('#wallet-transaction-card').find('table[data-table="main"]');
	var mainThList = mainTable.find('.table__row--head').find('th');
	var footerTable = $('#wallet-transaction-card').find('table[data-table="footer"]');
	var footerTdlist = footerTable.find('.table__row').find('td');

	var mainTable = $('#wallet-transaction-card').find('.c-tab[data-table="main"]');
	var mainTdList = mainTable.find('.c-tab__row').find('.c-tab__cell');

	var footerTable = $('#wallet-transaction-card').find('table[data-table="footer"]');
	var footerTdlist = footerTable.find('.table__row').find('td');


	return {
		tableSum: function(){

			var cellWidth = [];

			mainThList.each(function (index) {
				cellWidth.push($(this).width());
			});

			footerTdlist.each(function(index){
				$(this).attr('width', cellWidth[index])
			});
		},
		setWidth: function(){
			console.log(mainTable);
			console.log(mainTdList);
			var amound = mainTable.find('.c-tab__row::nth(0)')
		},
		getMobile: function(){
			// gitStatus.
		},
		init: function(){
			console.log(this);
			// this.tableSum();
			// this.setWidth();

		}

	}

};

window.onload = function() {
	transactionTable().init();
};


