// var title = document.getElementsByClassName('item-title');
// console.log(title[0].innerHTML);

// forEach
// var fruits = ["Яблоко", "Апельсин", "Груша"];
// console.log(fruits);
// fruits.forEach(function(item, i) {
//   console.log( i + item);
// });



// FILTER
// var myNumbers = [1, -1, 2, -2, 3, -4];

// var positiveArr = myNumbers.filter(function(number) {
//   return number < 0;
// });

// console.log( positiveArr ); // 1,2,3


// MAP
// var names = ['HTML', 'CSS', 'JavaScript', 'React'];

// var nameLengths = names.map(function(name) {
//   return name.length;
// });

// // получили массив с длинами
// console.log( nameLengths ); // 4,3,10


//REduce

// var myNum = [1, 2, 3, 4, 5, 6, 4];

// // для каждого элемента массива запустить функцию,
// // промежуточный результат передавать первым аргументом далее
// var result = myNum.reduce(function(sum, current) {
//   return sum + current;
// }, 0);

// console.log(result); // 21


// var title = document.getElementsByClassName('item-title');
// // console.log(title[0].innerHTML);
// // console.log(title[1].innerHTML);
// // console.log(title[2].innerHTML);
// // console.log(title[3].innerHTML);
// // console.log(title[4].innerHTML);

// for (let item of title){
//     // console.log(item.innerHTML);
// }

// var addBtns = document.getElementsByClassName('add-to-card');


// var addToBasketFunction = function(){
//     var title = this.parentNode.parentNode.getElementsByClassName('item-title');
//     console.log(title[0].innerText);
// };

// for (var i = 0; i < addBtns.length; i++ ){
//    addBtns[i].addEventListener('click', addToBasketFunction, false);
// }


// Function DECLARATION 
// greet('Fatima Turgunbaeva');

// function greet(name) {
//     console.log('Hello World ' + name);
// }


// function example(a, b){
//     console.log(b - a);
// } 

// example(5, 12);



// var myFunc = function() {
//     console.log('Hello Function Expression');
// }

// myFunc();

// var dog = {
//     name: 'Momo',
//     age: 2,
//     eat: false,
//     params : {
//         color: "black",
//         isFemale: true
//     }
// };
// console.log(dog.params);

// for (let n in dog){
//    if (typeof dog[n] == "object"){
//         for ( let p in dog[n]) {
//             console.log(dog[n][p]);
//         } 
//     } else {
//         console.log(dog[n]);
//     }

// }
// FUNCTION

// function bishek() {
//     console.log('Heelo Biskek!');
// }

//Жебе функция, Arrow function, Стрелочная функция

// var bishkekFunc = (a, b=3) => { return a + b };


// console.log(bishkekFunc(5, 6));
// DATA TYPES, Маалыматтардын турлор 
// ЕТОДЫ И СВОЙСТВА, ЫКМАЛАР ЖАНА КАСЕИТТЕР
// 1. number
// 2. string
// 3. boolen (true/false)
// 4. undefind
// 5. null
// 6. objeckt

//-----NUMBER METHODS
// var myNum = 8.896;
// // myNum = myNum.toString();
// myNum = myNum.toFixed(0);   
// var date = '512';
// date = Number(date);
// console.log(1 + date);



//-----STRING METHODS
// var str = 'kino bish';

// var str = "Please   locate where is";
// var pos = str.search("lo");

// console.log(pos);

// var str = "Apple, Banana, Kiwi";
// var res = str.slice(0, 5);
// console.log(res)

// var str = "Please visit Microsoft!";
// var n = str.replace("visit", "go");

// console.log(n);

// var str = "Please visiT Microsoft!";
// var n = str.toLowerCase();

// console.log(n);
var str = "  Hello World!";

console.log());
