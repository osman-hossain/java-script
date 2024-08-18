console.clear();
// function deleteSomething(){
//     const value = confirm("Do you want to delete?");
//     if(value){
//         console.log("deleted");
//     }
//     else{
//         console.log("not deleted");
//     }
// }
        
// deleteSomething();

// a programme that take a input if i input anythig it will show if not then shwo no messege. this text has to show in heading 1 in the page.
function welcomeText(){
    var h1 = document.createElement("h1");
    var value = prompt("Eneter the country: ");
    var text;
    if(value== null || value == '')
        {
            text = "No Nmae Found";
        }
        else{
            text = "welcome " +value;
        }
        var textNode = document.createTextNode(text);
        h1.appendChild(textNode);
        console.log(h1);
        document.body.appendChild(h1);
}

welcomeText();