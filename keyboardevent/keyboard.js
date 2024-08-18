var textBox = document.querySelector("textarea");
console.log(textBox);

/*textBox.addEventListener("keypress",eventHandler);

function eventHandler(e){
    console.log(e.target.value);
}*/

/*textBox.addEventListener("keydown",function(){
    console.log("keydown");
});

textBox.addEventListener("keypress",function(){
    console.log("keypress");
});*/
/*textBox.addEventListener("keyup",function(e){
    console.log(e.key);
});*/
/*textBox.addEventListener("keyup",function(e){
    console.log(e.keyCode);
});*/


/*textBox.addEventListener("keyup",function(k){
    console.log(k.code);
});*/
/*textBox.addEventListener("keyup",function(e){
    if(e.shiftKey)
        {
            console.log("shift + "+e.key);
        }
});*/

textBox.addEventListener("keydown",function(e){
    if(e.repeat)
        {
           alert("do not repeat");
        }
        else
        console.log(e.key);
});