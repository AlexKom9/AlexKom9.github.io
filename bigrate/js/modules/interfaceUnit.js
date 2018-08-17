$(document).ready(function(){
	console.log("-- interfaceUnit")

	function ellipsizeTextBox(className) {

		var classList = document.querySelectorAll(className);

		console.log(classList);

		for (var i = 0; i < classList.length; i++) {
			var el = classList[i];

			// console.log()

			var wordArray = el.innerHTML.split(' ');
			console.log(wordArray);

			while(el.scrollHeight > el.offsetHeight) {
				wordArray.pop();
				el.innerHTML = wordArray.join(' ') + '...';
			}
		}
	}
	ellipsizeTextBox('.prev-card__descr');

});