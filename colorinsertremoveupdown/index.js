var filePoint = document.querySelector("#viewIng");

function myImage1(){
    filePoint.src = "nature.jpeg";
}
function myImage2(){
    filePoint.src = "hill.jpeg";
}
var select = document.getElementsByTagName("a")[0]; // select link 

select.href="https://www.tasman.42web.io";  // change url
select.innerHTML = "tasman webpage"; // change name
select.style.textDecoration = "none"; // no decoration
select.style.color = "blue"; // change color
select.style.fontSize= "1.0rem"; // chang font size
select.style.fontFamily= "fantasy"; // style

var headin1 = document.getElementsByTagName("h1")[0]; // select inside div with serial
var headin2 = document.getElementsByTagName("h1")[1]; // same

headin2.innerHTML = "GO Ahed";