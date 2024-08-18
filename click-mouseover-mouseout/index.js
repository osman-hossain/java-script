/*document.querySelector("button").addEventListener("click",orderFunction);

function orderFunction(){
    alert("hello!");
}
*/

document.querySelector("button").addEventListener("click",function(){
    alert("World don't understand which is good and what is bad!");
});

/*var selectHead = document.getElementById("myText");
selectHead.classList.add("myStyle");*/

/*document.querySelector("h1").addEventListener("click", function(){
    this.classList.add("myStyle");
});
*/
document.querySelector("h1").addEventListener("mouseover", function(){
    this.classList.add("myStyle");
});


document.querySelector("h1").addEventListener("mouseout", function(){
    this.classList.remove("myStyle");
});

var selectHead2 = document.querySelector("h2");
document.querySelectorAll(".myButton")[0].addEventListener("click",function(){
selectHead2.classList.add("myStyle1");
});
document.querySelectorAll(".myButton")[1].addEventListener("click",function(){
    selectHead2.classList.remove("myStyle1");
})
document.querySelectorAll(".myButton")[2].addEventListener("click",function(){
    const text = this.innerHTML;
    selectHead2.innerHTML=text+" is clicked";
    selectHead2.style.color="green";
});

var len = document.querySelectorAll(".myButton1").length;
for(var i=0; i<len; i++)
    {
        document.querySelectorAll(".myButton1")[i].addEventListener("click",function(){
            
            text1 = this.innerHTML;
            document.querySelector(".headIng2").innerHTML= text1 +" is clicked";

        });
    }

/*const len = document.querySelectorAll(".myButton").length;
for(var i=0; i<len; i++)
    {
        document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
    
            var head1 = document.querySelector("h1");
            text = this.innerHTML;
            head1.innerHTML = text+" is clicked";
            head1.classList.add("myStyle");
            this.classList.add("myStyle");
        });
    }
*/