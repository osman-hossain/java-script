var photos = ["../colorinsertremoveupdown/nature.jpeg","../colorinsertremoveupdown/hill.jpeg","../images/nature.jpg","../images/cloud.jpg"];
var imageLink = document.querySelector("img");

count = 0;

function next(){
    count++;
    if(count>=photos.length)
    {
        count = 0;
        imageLink.src = photos[count];
    }
    else
    {
        imageLink.src = photos[count];
    }
}

function prev(){
    count--;
    if(count<0)
    {
        count = photos.length-1;
        imageLink.src = photos[count];
    }
    else
    {
        imageLink.src = photos[count];
    }
}