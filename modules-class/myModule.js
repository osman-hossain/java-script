export let text = "Welcome to module";

export function myFunction(x,y){
    text =  x+y;
}
// let text = "Welcome to module";

//  function myFunction(x,y){
//     text =  x+y;
// }

export {text as message};

