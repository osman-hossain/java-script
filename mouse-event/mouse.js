console.clear();
/*const div = document.querySelector("div");
div.addEventListener("click",function(e){
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.innerHTML);
    console.log(e.target.textContent);
    console.log(e.target.innerText);
    
});*/
/*div.addEventListener("dblclick",function(){
    console.log("double click is occured");
});

div.addEventListener("mouseup",function(){
    console.log("mouseup");
});

div.addEventListener("mousedown",function(){
    console.log("mousedown is occured");
});

div.addEventListener("mouseenter",function(){
    console.log("mouse entered");
});
div.addEventListener("mouseleave",function(){
    console.log("mouse left");
});
div.addEventListener("mousemove", function(e){ */
    //console.log("mouse move");
    //console.log("clientX = "+e.clientX+", clientY = "+e.clientY); // compare window screen
 /*   console.log("offsetX = "+e.offsetX+" offsetY = "+e.offsetY);
});
div.addEventListener("mouseover",function(){
    console.log("mouseover");
});*/


var button = document.querySelectorAll("#btn");
console.log(button);

Array.from(button).map((but)=>{
    but.addEventListener("click",buttonHandler);
});

function buttonHandler(e){
    console.log(e.target.innerHTML);
}