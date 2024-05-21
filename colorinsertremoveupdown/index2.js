/*const liSt = document.querySelector(".studentList");
//const studentInfo = document.querySelector(".info1");
const studentsA = liSt.querySelector(".info1"); // alternative
studentsA.innerHTML = "Group A";
const studentB = liSt.children[1];
studentB.innerHTML="Group B";
*/
// select parent
/*const selectTag = document.querySelector("li"); // select a tag
const selectParant = selectTag.parentElement;
const studentA = selectParant.children[1];
studentA.style.color= "blue";
*/
/*var studentsList = document.querySelector("li");
studentsList.style.color = "blue";
var studentB = studentsList.nextElementSibling;
studentB.style.color = "red";
var studentC = studentB.nextElementSibling;
studentC.style.color = "purple";
*/
const studentC = document.querySelectorAll("li")[2];
const studentB = studentC.previousElementSibling;
studentB.style.fontFamily = "fantasy";

