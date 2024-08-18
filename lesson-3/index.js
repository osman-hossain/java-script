document.querySelectorAll("button")[0].addEventListener("click",function(){
    var audioSelect = new Audio("../audio/v.mp3");
    audioSelect.play();
    document.querySelectorAll("button")[1].addEventListener("click",function(){
        audioSelect.pause();
    })
});