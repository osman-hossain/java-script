// var input = document.querySelector("input");
document.querySelector("button").addEventListener("click",function(){
    // console.log(input.value);

    var vaLue = document.querySelector("input").value;

    try{
        if(vaLue < 5)
            {
                throw "The number Is Too Low ."
            }
            else if(vaLue > 10)
            {
                throw "The Number Is Too High ."
            }
        }catch(err){
            console.log(err);
        }

});