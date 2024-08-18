// var arr = [1,3,8,11,20];
// // console.log(arr[0]);
// // console.log(arr[1]);

// // let [num1,num2,num3,num4,num5] = arr;
// // console.log(`num = ${num1}num 1 = ${num2}`);
// // console.log("num1 = "+num1+" num2 = "+num2)

// let [num1,num2,...a] = arr;
// console.log(`num1 = ${num1}, num2 = ${num2}, num a = ${a}`);

// // swaping
// let one = 20, two = 30;
// // let temp;
// // temp= one;
// // one = two;
// // two = one;
// // console.log(one);

// [one,two]=[two,one];
// console.log(one);
// console.log(two);

// let bioStudent = {
//     name: "ali Banat",
//     id : 21,
//     cgpa : 3.21
// }

// console.log(bioStudent.name);
// console.log(bioStudent.id);
// console.log(bioStudent.cgpa);

// const {name,id} = bioStudent;
// console.log(name);
// console.log(id);

// let bio = {
//     names: "ali Banat",
//     id : 21,
//     cgpa : 3.21,
//     languages:{
//         native: 'Bangla',
//         biginner: 'English'
//     }
// }
// console.log(bio.names);
// const {names,languages} = bio;
// console.log(names);
// console.log(languages.native);
// const {native,biginner} = languages;
// console.log(native);

// let studentinFo =(data)=>{
//     console.log(data.fullName);
//     console.log(data.id);
//     console.log(`full name : ${data.fullName}, id = ${data.id}`);
// }

// let data = {
//     fullName: "Raisu Haque",
//     id: 30021
// }
// studentinFo(data);
let studentinFo =({fullName,id})=>{
    console.log(`full name : ${fullName}, id = ${id}`);
}

let data = {
    fullName: "Raisu Haque",
    id: 30021
}
studentinFo(data);