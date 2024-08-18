const video = document.querySelector("video");

video.addEventListener("canplay",function(){
    console.log("canplay");
});

video.addEventListener("pause",function(){
    console.log("pause");
});

video.addEventListener("play",function(){
    console.log("play");
});

video.addEventListener("playing",function(){
    console.log("playing");
});
video.addEventListener("volumechange",function(){
    console.log("volumechange");
});

video.addEventListener("ended",function(){
    console.log("thanks for watching");
});

window.addEventListener("load",function(){
    console.log("load");
});
window.addEventListener("unload",function(){
    console.log("unload");
});
window.addEventListener("scroll",function(){
    console.log("scrolled");
});
window.addEventListener("resize",function(){
    const height = window.outerHeight;
    const width = window.outerWidth;
    console.log(`width: ${width}, height: ${height}`);
});

var details = document.querySelector("details");
details.addEventListener("toggle",function(e){
    console.log(e.target.open);
});