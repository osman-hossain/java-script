// console.clear();
// // console.log(window);

// fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method:'DELETE',
//     // headers:{
//     //     "Content-type": "application/json; charset=UTF-8",
//     // },
//     // body: JSON.stringify({
//     //     title:'sunam',
//     // }),
// })
// .then(rec=>{
//     if(!rec.ok){
//         const message = `Error: ${rec.status}`
//         throw new Error(message);
//     }
//     else{
//         return rec.json();
//     }
// })
// .then(rec=> console.log(rec))
// .catch(rec=> console.log(rec))
// ;
// *** another ***
// console.clear();
// fetch('https://jsonplaceholder.typicode.com/posts/101')
// .then(res =>{
//     if(!res.ok){
//         let message = `Error: ${res.status}`;
//         throw new Error(message);
//     }
//     else{
//         return res.json();
//     }
// })
// .then(res => console.log(res))
// .catch(err => console.log(err))
// ;

console.clear();
const makeRequest = async(url,method) =>{
    const data = await fetch(url,method);
    if(!data.ok){
        const message= `Error: ${data.status}`;
        throw new Error(message);
    }
    const res = await data.json();
    return res;
}
// const getData = () =>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts')
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err))
//     ;
// }
// getData();

const updatesingleData = ()=>{

    makeRequest('https://jsonplaceholder.typicode.com/posts/1',{
        method:'PATCH',
        headers:{
            'Content-type':'application/json; charset=UTF-8',
        },
        body:JSON.stringify({
            title: 'fuwang',
            body: 'bar',
            userId: 1,
        }),
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    ;
}
updatesingleData();