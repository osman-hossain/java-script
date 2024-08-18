// setTimeout(()=>{
//     console.log("time start");
// }, 3000);

// setTimeout(display, 3000);

// function display(){
//     console.log("started");
// }

let btn = document.querySelector("#button1");
let p = document.querySelector("#para1");

// btn.addEventListener("click",btnHandler);
// function btnHandler(){
//         p.textContent = "registration successfull";

//     setTimeout(()=>{
//         p.textContent = "";
//     },3000);
// }

btn.addEventListener("click",displayCount);

function displayCount(){
    var count = 0;
    p.textContent = count;

    setInterval(()=>{
        count++;
        p.textContent = count;
    },2000);
}