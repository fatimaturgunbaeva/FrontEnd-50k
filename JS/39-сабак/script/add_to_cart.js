var elements = document.getElementsByClassName("add_cart");

var myFunction = function(e) {
	e.preventDefault();
	let title = this.parentNode.parentNode.parentNode.querySelectorAll(".item__title a");
	let price = this.parentNode.parentNode.parentNode.querySelectorAll(".item__title .price span");
	let img = this.parentNode.parentNode.parentNode.querySelectorAll(".item__img img");
	let create_li = document.createElement('li');
	create_li.classList.add('bag__item');
	create_li.innerHTML = '<div class="bag__img">\
								<a href="#">\
									<img src=" '+img[0].src +'" alt="">\
								</a>\
							</div>\
							<div class="bag__info">\
								<p class="info__title"><a href="?search=#">'+title[0].innerText+'</a></p>\
								<div class="info__price">\
									<span>'+price[0].innerText+'</span>\
								</div>\
								<div class="trash">\
									<a href="#"><i class="far fa-trash-alt"></i></a>\
								</div>\
							</div>';
	let block_cart = document.querySelector('.shopcard__dropdown ul');
	block_cart.appendChild(create_li);
	alert("Товары успешно добавлены в корзину!");

	deleteItemFunc();
};

for (var i = 0; i < elements.length; i++) {
	elements[i].addEventListener('click', myFunction, false);
}	


function deleteItemFunc(){
	var trash = document.querySelectorAll(".trash");
	for (var i = 0; i < trash.length; i++) {
		trash[i].addEventListener('click', deleteItem, false);
	}

	function deleteItem(e){
		e.preventDefault();
		this.parentNode.parentNode.remove();
		console.log("Товары удален из корзины!");
	}
}