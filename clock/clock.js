let btn = document.querySelector(".btn1");
let para = document.querySelector(".para1");

btn.addEventListener("click",btnHandler);

function btnHandler(){
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    hours = formatTime(hours);
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);

    para.textContent = hours+":"+minutes+":"+seconds;

    setInterval(btnHandler,1000);
}

function formatTime(value){
    if(value<10)
        {
            value = "0"+value;
        }
        return value;
}
