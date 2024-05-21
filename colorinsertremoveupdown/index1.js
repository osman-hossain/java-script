// creating html element

var headNew = document.createElement("h1"); // added h1
var textNew = document.createTextNode("This is new textd added inside div and heading"); // added text 
headNew.appendChild(textNew); // added text in h1

var selectDiv = document.getElementById("my-div"); //select div
selectDiv.appendChild(headNew); // added h1 with text inside div

var selectbytag = document.getElementsByTagName("h1")[1]; // 1.select div then select tag
selectDiv.removeChild(selectbytag); //2. remove

var headNew1 = document.createElement("h1"); // 1. create ne heading.
var textNew1 = document.createTextNode("added new text for insert before another element"); // 2. add text
headNew1.appendChild(textNew1); // 3. text inside head attached
var selectHead1= document.getElementsByTagName("h1")[0]; // select element ,the new element  insert before it
selectDiv.insertBefore(headNew1,selectHead1); 