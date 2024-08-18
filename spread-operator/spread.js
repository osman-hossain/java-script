function add( a,b,c){
    return a+b+c;
}
let numbers = [1,2,3];
console.log(add(...numbers));
let numbers1 = [4,...numbers,5];
console.log(numbers1);

let num1 = [1,2,3];
let num2 = [4,5,6,7,8];
// let num = num1.concat(num2);
let num = [...num1,...num2]
console.log(num);

let p1 = {
    name : "ali hamid",
    age : 50
}
let p2 = {

    country:"Bangladesh",
    city: "Dhaka"
}
let p = {...p1,...p2}
console.log(p);