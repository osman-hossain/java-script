console.clear();
/*console.log(window);
console.log(window.location);
console.log(location);*/

// href
console.log(location.href);
// protocol
console.log(location.protocol);
// hostname
console.log(location.hostname);
// port
console.log(location.port);
// path name
console.log(location.pathname);

let div = document.querySelector("#location-div");
let p1 = div.children[0];
p1.textContent = location.href;
let p2 = div.children[1];
p2.textContent = location.hostname;
let p3 = div.children[2];
p3.textContent = location.port;
let p4 = div.children[3];
p4.textContent = location.pathname;
let p5 = div.children[4];
p5.textContent = location.protocol;

var visitButton = document.getElementById("visit-button");
visitButton.addEventListener("click",function(){
    location.assign("https://tasman.42web.io/");
});