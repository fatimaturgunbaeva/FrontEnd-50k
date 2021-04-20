var elements = document.getElementsByClassName("add_cart");

var myFunction = function(evt) {
	let title = this.parentNode.parentNode.parentNode.querySelectorAll(".item__title a");

	console.log(title[0]);
};

for (var i = 0; i < elements.length; i++) {
	elements[i].addEventListener('click', myFunction, false);
}	

