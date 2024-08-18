// "use strict"
// function message(text){
//     console.log(`${text}message`);
// }

// message("I give him a ");
// "use strict"

// * How to use default parameter

// function message(text = "This is defaul text "){
//     console.log(`${text}message`);
// }
// message();
// message("I give him a ");

"use strict"

// function add(a,b){
//     console.log(`Sum = ${a+b}`);
//     console.log(`${a}, ${b}`);
// }
// add(2,4);

function printNumber(a,b,...z){
    console.log(`Sum = ${a+b}`);
    console.log(`${a}, ${b}`);
    console.log(`a = ${a}, b =${b}, z=${z}`);
}
printNumber(2,4,5,6,8,9);