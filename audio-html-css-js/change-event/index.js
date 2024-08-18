console.clear();
/*var input = document.querySelector("input[name=name]");
//console.log(input);

input.addEventListener("change", changeHandler);

function changeHandler(e){
    //console.log('changed');
    //console.log(e);
    //console.log(e.type);
    //console.log(e.target);
    //console.log(e.target.className);
    //console.log(e.target.id);
    console.log(e.target.value);
}*/
var programs = document.querySelectorAll("input[name=programme]");
console.log(programs);

Array.from(programs).map((program)=>{
    program.addEventListener("change",programHandler);
});

function programHandler(x){
if(x.target.checked){
    console.log(x.target.value);
};
}

var selectDepart = document.querySelector("#department");
console.log(selectDepart);

selectDepart.addEventListener("change",eventHandler);
function eventHandler(x){

    console.log(x.target.value);
}