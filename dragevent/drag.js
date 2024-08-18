const p = document.querySelector("p");
const div = document.querySelector("div");

p.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("Ali",e.target.id); // get ready to transfer using id
});

div.addEventListener("dragover",function(e){
    e.preventDefault();
});

div.addEventListener("drop",function(c){
   let id = c.dataTransfer.getData("Ali"); // get the id here
   console.log(id);
   div.appendChild(document.getElementById(id)); // adjust with div
   c.preventDefault();
});