var input = document.querySelector("input");
input.addEventListener("blur",function(e){
    //console.log("blur is occured");
    //input.style.backgroundColor="transparent";
   // console.log(e.target.value);
   input.value = e.target.value.toUpperCase();
    input.style.padding="0";
});
input.addEventListener("focus",function(){
    //console.log("focus is occured");
    input.style.backgroundColor="lightblue";
    input.style.padding="1rem";
});
/*input.addEventListener("focusin",function(){
    console.log("focus in is occured");
});
input.addEventListener("focusout",function(){
    console.log("focus out is occured");
});*/