var len = document.querySelectorAll("button").length;
for(var i=0; i<len; i++)
    {
        document.querySelectorAll("button")[i].addEventListener("click",function(){
            var text = this.innerHTML;
            console.log(text);
            var selectClass = this.classList[1];
            console.log(selectClass);
            playAnimation(text);
            audioPlay(text);

            /*switch(text){
                case "gameofthrones":
                    var buttonA = new Audio("../audio/v.mp3")
                    buttonA.play();
                    document.querySelectorAll("button")[3].addEventListener("click",function(){
                    buttonA.pause();
                    });
                    break;
                case "battle":
                    var buttonB = new Audio("../audio/music.mp3");
                    buttonB.play();
                    document.querySelectorAll("button")[3].addEventListener("click",function(){
                        buttonB.pause();
                    });
                    break;
                case "apex":
                    var buttonC = new Audio("../audio/apex-26621.mp3");
                    buttonC.play();
                    document.querySelectorAll("button")[3].addEventListener("click",function(){
                        buttonC.pause();
                    });
                    break;*/
                /*case "pause":
                    document.querySelectorAll("button")[3].addEventListener("click",function(){
                        buttonA.pause();
                        break;
                    });*/
                    
            });

        }


    function audioPlay(text){
        switch(text){
            case "gameofthrones":
                var buttonA = new Audio("../audio/v.mp3");
                buttonA.play();
                document.querySelectorAll("button")[3].addEventListener("click",function(){
                    buttonA.pause();
                });
                break;
            case "battle":
                var buttonB = new Audio("../audio/music.mp3");
                buttonB.play();
                document.querySelectorAll("button")[3].addEventListener("click",function(){
                    buttonB.pause();
                });
                break;
            case "apex":
                var buttonC = new Audio("../audio/apex-26621.mp3");
                buttonC.play();
                document.querySelectorAll("button")[3].addEventListener("click",function(){
                    buttonC.pause();
                });
                break;
        }
    }

    function playAnimation(text){
        var selectButton = document.querySelector("."+text);
        selectButton.classList.add("anime");

        setTimeout(function(){
            selectButton.classList.remove("anime");
        },1000);
    }