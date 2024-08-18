const form = document.querySelector("form");
const name = form.querySelector("#name");
const email = form.querySelector("#email");
const password = form.querySelector("#password");


form.addEventListener("submit",formHandler); // select submit option

function formHandler(x){
    x.preventDefault();

    const formInfo ={
        name:name.value, // selected all submitted file location here
        email:email.value,
        password:password.value,
    };
    console.log(formInfo); // view is working or not simple
    name.value="";
    email.value="";
    password.value="";
}
