count = 0;
document.querySelector("textarea").addEventListener("keypress",function(event){
    count++;
    var text = event.key;

    document.querySelector("p").innerHTML= "this is "+count;
   //alphabettoword(text);
   playAnimation(text);
});
/*function alphabettoword(text){
    switch(text){
        case "a":
            document.querySelectorAll("p")[0].innerHTML = "a for apple";
            break;
        case "b":
            document.querySelectorAll("p")[0].innerHTML = "b for Ball";
            break;
        case "c":
            document.querySelectorAll("p")[0].innerHTML = "c for Cat";
            
            break;
    }
}
*/

function playAnimation(text){
    var text = document.querySelector("p");
    text.classList.add("anime");
}