// Функиялар alert, prompt, confirm

// console.log(41*2); // браузердеги инспектордо Console деген вкладкадан коргозот
// alert(85857); // модалдык терезе, аны биз озгорто албайбыз.
// var result = prompt('10 + 12 канча болот?', '0');
// console.log(result);

// if(result == 22){
//     console.log(true);
// } else {
//     console.log(false);
// }

// var result2 = confirm('Are you adult?');
// // console.log(result2);

// if(result2 == true){
//     console.log('YESS!');
// } else {
//     console.log('NOO!');
// }

function sumAll(...all) {
    let result = 0;
    for (let num of all){
        result += num
    }
    return result
};

const res = sumAll(1, 2, 3, 5);
console.log(res);