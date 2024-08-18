// // let and var differences

// var a = 5;
// if(true){
//     var x = 4; // inside bracket working outside bracket too
// }
// console.log(x); // changed to 4

// let b = 5;
// if(true){
//     let b = 4; // inside bracket working only inside not outside for using "let" instead "var"
// }
// console.log(b); // changed to 5

// var x = 11;

// for(x=1; x<10; x++)
//     {

//     }
//     console.log(x);

// let x = 11;
// for(let x = 1; x<=10; x++)
//     {
//         // console.log(x);
//     }
//     console.log(x);

// const x = 5; 
// if(true){
//     x = 6;
// }
// console.log(x);
// // answer is error

// var x = 5;
// var y = 6;
// var sum = x+y;
// console.log("The Sum is : "+ sum+" end");

let x = 7; 
let y = 6; 
let sum = x+y;
console.log(`The sum is : ${sum} end`);

let name = "Dipraj Sareng";
let message = `I am ${name}. I live in sundarban. It's inside Khulna city.`
console.log(message);

function add(a,b){

    sum = a+b;
    console.log(sum);
}

add(2,7);

const minus = (a,b) =>{
    let sub = a-b;
    console.log(sub);
}
add(9,5);
minus(9,5);

