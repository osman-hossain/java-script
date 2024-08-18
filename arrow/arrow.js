var studentsInfo = [
    {
        name: "Ali Hamza",
        id:1,
        cgpa: 2.32
    },
    {
        name: "Kashab Rahman",
        id: 2,
        cgpa: 3.32
    },
    {
        name: "Rafsan Khan",
        id: 3,
        cgpa: 4.22
    },
    {
        name: "Dipraaj Sareng",
        id: 4,
        cgpa: 1.33
    }
]
// function outPut(){
//     return studentsInfo.filter(function(x){
//         return x.cgpa > 3;
//     }).map(function(y){
//         return y.name;
//     });

// }
// console.log(outPut());

const studentDetails = () =>{
    return studentsInfo.filter((x)=> x.cgpa > 3).map((y)=> y.name);
}
console.log(studentDetails());