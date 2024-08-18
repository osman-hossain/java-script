var textTag = document.querySelectorAll("p")[0];
var textTag2 = document.querySelector("#para2");

function styleAdd(){
    textTag.classList.add("para-style"); 
    textTag2.classList.add("para-style");  
}
function styleRemove(){
    textTag.classList.remove("para-style");
    
}