var elements = document.getElementsByClassName("add_cart");

var myFunction = function(e) {
	e.preventDefault();
	let title = this.parentNode.parentNode.parentNode.querySelectorAll(".item__title a");
	let price = this.parentNode.parentNode.parentNode.querySelectorAll(".item__title .price .actual-price");
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
									<span>$</span>\
									<span class="oprice">'+price[0].innerText+'</span>\
								</div>\
								<div class="trash">\
									<a href="#"><i class="far fa-trash-alt"></i></a>\
								</div>\
							</div>';
	let block_cart = document.querySelector('.shopcard__dropdown ul');
	block_cart.appendChild(create_li);
	alert("Товары успешно добавлены в корзину!");

	deleteItemFunc();

	total_price()
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
		total_price ()
	}
}

function total_price(){
	var price_list = document.querySelectorAll(".info__price .oprice");
	var total_sum = 0;

	for (var i = 0; i < price_list.length; i++) {
		total_sum = total_sum + (+price_list[i].innerHTML)
	}
	document.querySelectorAll('.total-sum')[0].innerHTML = `$ ${total_sum} `
	document.querySelectorAll('.curr__number span')[0].innerHTML = `$ ${total_sum} `



}















// function total_price() {
// 	let count_price = document.querySelectorAll(".info__price .oprice");

// 	let total_price = 0;

// 	for (var i = 0; i < count_price.length; i++) {
// 		total_price = total_price + (+count_price[i].textContent);
// 	}

// 	document.getElementsByClassName('total_cart')[0].innerHTML = `$ ${total_price}`;
// 	document.querySelectorAll('.shopcard__total span')[0].innerHTML = `$ ${total_price}`;
	
// }