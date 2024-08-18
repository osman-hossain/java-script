const taskOne = ()=>{
    return new Promise((resolve,reject)=>{
        resolve("Task 1 solved");
    });
}
const taskTwo = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Task 2 solved");
        },2000);
    });
}
const taskThree = () =>{
    return new Promise((resolve,reject)=>{
        resolve("Task 3 solved");
    });
}
const taskFour = () =>{
    return new Promise((resolve,reject)=>{
        reject("Task 4 rejected");
    });
}

// async function callallTask(){
const callallTask = async()=>{
    try{
        const t1 = await taskOne();
        console.log(t1);
        const t2 = await taskTwo();
        console.log(t2);
        const t3 = await taskThree();
        console.log(t3);
        const t4 = await taskFour();
        console.log(t4);
    }catch(err){
        console.log(err);
    }

}


callallTask();