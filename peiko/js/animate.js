advantAnimation =function(){
	contWidth = $('.advant .l-container').width();
	let amount = 1;
	if( contWidth >= 940  ){
		amount = 3;
	} else if (contWidth >= 720) {
		amount = 2;
	} else {
		amount = 1;
	}
	// console.log(amount);
	items = $('.advant .advant__item');
	items.addClass('wow fadeInLeft');
	items.attr('data-wow-duration','.8s')
	switch(amount){
		case(1):
			break;
		case(2):
			for (var i = 0; i < items.length; i++) {
				if ((((i+1)%2))) {
					items.eq(i).attr('data-wow-delay','.3s')
				}
			}
			break;
		case(3):
			items.eq(0).attr('data-wow-delay','.6s');
			items.eq(1).attr('data-wow-delay','.3s');
			items.eq(2).attr('data-wow-delay','0s');
			items.eq(3).attr('data-wow-delay','.8s');
			items.eq(4).attr('data-wow-delay','.5s');
			items.eq(5).attr('data-wow-delay','.2s');
			// for (var i = 0; i < items.length; i++) {
			//   if ((i%3)) {
			//     items.eq(i).attr('data-wow-delay','0s')
			//     items.eq(i+2).attr('data-wow-delay','.3s')
			//
			//     items.eq(i+1).attr('data-wow-delay','.6s')
			//   }
			//
			// }
			break;
	}
	console.log(contWidth)
}

techAnimation =function(){
	contWidth = $('.tech .l-container').width();
	let amount = 1;
	if( contWidth >= 940  ){
		amount = 4;
	} else if (contWidth >= 720) {
		amount = 3;
	} else {
		amount = 2;
	}
	console.log(amount);
	items = $('.tech .tech__item');
	items.addClass('wow fadeInLeft');
	items.attr('data-wow-duration','.8s')
	switch(amount){
		case(4):
		for (var i = 0; i < items.length; i++) {
			if (!((i+1)%4)) {
				// console.log(i+1)
				items.eq(i).attr('data-wow-delay','0s')
				items.eq(i-1).attr('data-wow-delay',`.3s`)
				items.eq(i-2).attr('data-wow-delay',`.6s`)
				items.eq(i-3).attr('data-wow-delay',`.9s`)
			}
		}
		break;
		case(3):
		for (var i = 0; i < items.length; i++) {
			if (!((i+1)%3)) {
				// console.log(i+1)
				items.eq(i).attr('data-wow-delay','0s')
				items.eq(i-1).attr('data-wow-delay',`.3s`)
				items.eq(i-2).attr('data-wow-delay',`.6s`)
			}
		}
		break;
		case(2):
		for (var i = 0; i < items.length; i++) {
			if (!((i+1)%2)) {
				// console.log(i+1)
				items.eq(i).attr('data-wow-delay','0s')
				items.eq(i-1).attr('data-wow-delay',`.3s`)
			}
		}
		break;
	}
}






$(document).ready(function(){

	stars = $('#spaceobj .cls-6');
	$('#spaceobj .cls-6').css({fill: '#6595e5'});
	$('#spaceobj .cls-6').addClass('animate');
	for (var i = 0; i < stars.length; i++) {
		stars.eq(i).css({'animation-delay': `${Math.random()}s`})
		stars.eq(i).css({'animation-duration': `${Math.floor(Math.random()*(5 - 1) + 1)}s`})
	}


	advantAnimation();
	techAnimation();
})
