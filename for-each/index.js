//var numbers = [2,4,5,3,8];

/*for(var i=0; i<numbers.length; i++)
    {
        console.log(numbers[i]);
        document.write(numbers[i]+"</br>");
    }
    */
   // * alternative
    /*numbers.forEach(myFunction);

    function myFunction(x){
        console.log(x);
    }
    */
   // * similar

/*numbers.forEach(function(x){
    console.log(x);
});*/
/*var squareNumber = [];
numbers.forEach(function(x){
    squareNumber.push(x*x);
});
document.write(squareNumber);*/

/*console.log(numbers);
numbers.forEach(function(x,index,array1){
    array1[index]= x+5;
});
console.log(numbers);*/

// start.................

/*var numbers = [3,2,5,8];
var squareNumber = [];
numbers.forEach(function(x){
    squareNumber.push(x*x);
});
console.log(squareNumber);*/

//similar

/*var numbers = [2,5,3,8,6];

var squareNumber = numbers.map(function(x){
    return x*x;
});
console.log(squareNumber);*/

// write a programme that print bigger number to 10

var numbers= [5,10,30,50,37,89];
var bigNumber = numbers.filter(function(x){
    return x>10;
});
console.log(bigNumber);