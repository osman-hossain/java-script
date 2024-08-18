// console.log("welcome");
// const promise1 = new Promise((resolve,reject)=>{
//     let complitedpromise = false;
//     if(complitedpromise){
//             resolve("promise complited fully");
//         }
//         else{
//             reject(new Error("promise not  complited"));
//         }
// });
// // console.log(promise1);
// promise1.then((res)=>{ // use then for resolve and use catch for reject
//     console.log(res);
// })
// .catch(err =>{
//     console.log(err.message);
// })
// ;

// const promise2 = new Promise((resolve,reject)=>{
//     resolve("The case is resolved");
// });
// promise2.then(res => {console.log(res)});
// console.log("end");

// console.log("Welcome");
// const promise1 = new Promise((resolve,reject)=>{
//     let complitedPromise = true;
//     if(complitedPromise){
//         resolve("Promise complited");
//     }
//     else{
//         reject("Promise not complited.");
//     }
// });
// const promise2 = new Promise((resolve,reject)=>{
//     resolve("Case resolved");
// });


// Promise.all([promise1,promise2]).then(([rec1,rec2])=>{console.log(rec1,rec2)});

// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("complete resolve 1.");
//     },2000);
// });
// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("complete resolve 2.");
//     },1000);
// });

// Promise.race([promise1,promise2]).then(rec=>{console.log(rec)});


// **

const taskOne = () =>{
    return new Promise((resolve,reject)=>{
        resolve("Task one is completed");
    });
}
const taskTwo=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Task two completed");
        },2000);
    });
}
const taskThree=()=>{
    return new Promise((resolve,reject)=>{
        reject("Task three not complete");
    });

}
const taskFour = ()=>{
    return new Promise((resolve,reject)=>{
        resolve("Task four completed");
    });
}

taskOne()
.then((rec)=>{console.log(rec)})
.then(taskTwo)
.then((rec)=>{console.log(rec)})
.then(taskThree)
.then((rec)=>{console.log(rec)})
.then(taskFour)
.then((rec)=>{console.log(rec)})
.catch((arr)=>{console.log(arr)})
;