var input = document.querySelector("input");
var p = document.querySelector("p");
input.addEventListener("copy",function(){
    console.log("copied") ;
    p.innerText= "text is copied";
});
input.addEventListener("cut",function(){
    console.log("cuted");
    p.innerText = "text is cut";
});
input.addEventListener("paste",function(){
    console.log("paste");
    p.innerText = "text is paste";
});