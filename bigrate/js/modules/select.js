

console.log('index.js');
const select = function(){
	let x, i, j, selElmnt, a, b, c;
	// return {
	// }
};
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {

	x[i].classList.add('sel');
	selElmnt = x[i].getElementsByTagName("select")[0];
	console.dir(selElmnt);
		/*for each element, create a new DIV that will act as the selected item:*/
	a = document.createElement("DIV");
	a.setAttribute("class", "sel__premier");
	a.innerHTML = "<span>" + selElmnt.options[selElmnt.selectedIndex].innerHTML + "</span>";

	x[i].appendChild(a);
	/*for each element, create a new DIV that will contain the option list:*/
	b = document.createElement("DIV");
	b.setAttribute("class", "sel__drop sel-hide");
	for (j = 0; j < selElmnt.length; j++) {
		/*for each option in the original select element,
		create a new DIV that will act as an option item:*/
		c = document.createElement("DIV");
		c.innerHTML = selElmnt.options[j].innerHTML;
		c.classList.add("sel__item");
		if (j === selElmnt.selectedIndex) {
			c.classList.add("sel__item--active")
		}
		c.addEventListener("click", function(e) {
			/*when an item is clicked, update the original select box,
			and the selected item:*/
			var y, i, k, s, h;
			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			h = this.parentNode.previousSibling;
			console.log(h);
			for (i = 0; i < s.length; i++) {
				if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					// a.appendChild(arrow);
					y = this.parentNode.getElementsByClassName("sel__item");
					for (k = 0; k < y.length; k++) {
						y[k].classList.remove("sel__item--active");
					}
					this.classList.add("sel__item--active");
					break;
				}
			}
			h.click();
		});
		b.appendChild(c);
	}
	x[i].appendChild(b);
	// console.log(x[i])
	a.addEventListener("click", function(e) {
		/*when the select box is clicked, close any other select boxes,
		and open/close the current select box:*/
		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle("sel-hide");
		this.classList.toggle("select-arrow-active");
	});
}
function closeAllSelect(elmnt) {
	/*a function that will close all select boxes in the document,
	except the current select box:*/
	var x, y, i, arrNo = [];
	x = document.getElementsByClassName("sel__drop");
	y = document.getElementsByClassName("select-selected");
	for (i = 0; i < y.length; i++) {
		if (elmnt == y[i]) {
			arrNo.push(i)
		} else {
			y[i].classList.remove("select-arrow-active");
		}
	}
	for (i = 0; i < x.length; i++) {
		if (arrNo.indexOf(i)) {
			x[i].classList.add("sel-hide");
		}
	}
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);




