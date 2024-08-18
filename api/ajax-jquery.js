// ajax = asynchronous javascript and xml
console.clear();
const makeRequest = async(url,method,data)=>{
    try{
        const res = await $.ajax({
            url:url,
            method: method,
            data: data
        });
        return res;
    }catch(err){
        console.log(err);
    }
}
// const getData = () =>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts/101","GET")
//     .then(res=>console.log(res))
//     ;
// }
// getData();

// const createData = () =>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts","POST",{
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     })
//     .then(res=> console.log(res));
// }
// createData();

// const updateData = ()=>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts/1","PUT",{
//         title: 'Fool Akword',
//         body: 'Bar code',
//         userId: 18102054,
//     })
//     .then(res=>console.log(res));
// }
// updateData();

// const updatesingleData = () =>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts/1","PATCH",{
//         title: 'The Warrior King',
//         userId: 181,
//     })
//     .then(res=> console.log(res))
//     ;
// }
// updatesingleData();

const deleteData=()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/1","DELETE")
    .then(res=>console.log(res))
    ;
}
deleteData();