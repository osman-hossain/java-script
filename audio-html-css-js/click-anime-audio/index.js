var len = document.querySelectorAll("button").length;
for(var i=0; i<len; i++)
    {
        document.querySelectorAll("button")[i].addEventListener("click",function(){
            var text = this.innerHTML;
            console.log(text);
            var selectClass = this.classList[1];
            console.log(selectClass);
            playAnimation(selectClass);
            playAudio(selectClass);
        });

    }
    function playAudio(selectClass){
        switch(selectClass){
            case "a":
                var buttonA = new Audio("../../audio/v.mp3");
                buttonA.play();
                document.querySelectorAll("button")[3].addEventListener("click",function(){
                    buttonA.pause();
                });
                break;
            case "b":
                var buttonB = new Audio("../../audio/music.mp3");
                buttonB.play();
                document.querySelectorAll("button")[3].addEventListener("click",function(){
                    buttonB.pause();
                });
                
                break;
            case "c":
                var buttonC = new Audio("../../audio/apex-26621.mp3");
                buttonC.play();
                document.querySelectorAll("button")[3].addEventListener("click",function(){
                    buttonC.pause();
                });
                break;
            case "p":

                break;

        }
    }
    function playAnimation(selectClass){
        var selectButton = document.querySelector("."+selectClass);
        console.log(selectButton);
        selectButton.classList.add("anime");

        setTimeout(function(){
            selectButton.classList.remove("anime");
        },100);
    }

    document.addEventListener("keypress",function(event){
        var selectClass = event.key;
        playAudio(selectClass);
        playAnimation(selectClass);

    })