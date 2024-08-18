// sessionStorage.setItem("user","Linux");

// const data = sessionStorage.getItem("user");
// console.log(JSON.stringify(data));

// sessionStorage.removeItem("user");

// sessionStorage.setItem("user1","ali banat");
// sessionStorage.setItem("user2","hamza ali");

// sessionStorage.clear();

// const data = {
//     id: 18102054,
//     name:"Ali Banat",
//     cgpa: 2.32,
// }
// sessionStorage.setItem("user",JSON.stringify(data));

const data = JSON.parse(sessionStorage.getItem("user"));
console.log(data);
// console.log(JSON.stringify(data));