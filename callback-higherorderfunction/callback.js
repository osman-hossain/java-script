function square(x){
    console.log(`square of ${x} is ${x*x}`);
}
square(4);
// const y = square;
// y(5);

function higherOrder(num,callback){
    callback(num);
}
higherOrder(9,square);


// not serialwise load fast come fast
// function taskOne(){
//     console.log("task 1");
// }
// function taskTwo(){
//     console.log("task 2");
// }
// function taskThree(){
//     setTimeout(()=>{
//         console.log("task 3");
//     },2000);
// }
// function taskFour(){
//     console.log("task 4");
// }
// function taskFive(){
//     console.log("task 5");
// }

// taskOne();
// taskTwo();
// taskThree();
// taskFour();
// taskFive();
// * serial wise print no metter loading time
const taskOne = (callBack) =>{
    console.log("task 1");
    callBack();
}
const taskTwo = (callBack) =>{
    console.log("task 2");
    callBack();
}
const taskThree = (callBack) =>{
    setTimeout(()=>{
        console.log("task 3");
        callBack();
    },2000);
}
const taskFour = (callBack) =>{
    console.log("task 4");
    callBack();
}
const taskFive = () =>{
    console.log("task 5");
}

taskOne(function f1(){
    taskTwo(function f2(){
        taskThree(function f3(){
            taskFour(()=>{
                taskFive();
            });
        });
    });
});

console.log("hello");
document.querySelector("button").addEventListener('click',()=>{
    console.log("Button is clicked.");
});
console.log("Bye");