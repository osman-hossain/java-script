// make a graphics design with canvas for webpage
var c = document.querySelector("#canVas");

var ctx = c.getContext("2d");

ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.strokeRect(10,10,480,280);

ctx.fillStyle= "green";
ctx.fillRect(12,12,476,276);

var centerX = c.width/2;
var centerY = c.height/2;

ctx.beginPath();
ctx.arc(centerX,centerY,80,0,2*Math.PI,false);
ctx.fillStyle = "red";
ctx.fill();
ctx.strokeStyle = "lightblue";
ctx.stroke();