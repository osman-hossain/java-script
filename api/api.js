// console.clear();
// event - onload(), onerror()
// property - response, responseText, responseType, responseURL, status, statusText
// function - open(), send(), setRequestHeader()

// console.log(window.XMLHttpRequest);

// const makeRequest = (method,url,data) =>{
//     return new Promise((resolve,reject)=>{

//         const xhr = new XMLHttpRequest();
//         xhr.open(method,url);
    
//         xhr.setRequestHeader('Content-Type','application/json');
        
//         xhr.onload=()=>{
//             let data = xhr.response;
//             // console.log(xhr.status);
//             console.log(JSON.parse(data));
//         }
        
//         xhr.onerror=()=>{
//             console.log("one error is here");
//         }
        
//         xhr.send(JSON.stringify(data));
//     })
// }

// const getData =()=>{
//     makeRequest('get','https://jsonplaceholder.typicode.com/posts')
//     .then(rec=>{console.log(rec)});
// }

// const sendData = () =>{
//     makeRequest('Post','https://jsonplaceholder.typicode.com/posts',{
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     });
// }

// const updateData =()=>{
//     makeRequest('Put','https://jsonplaceholder.typicode.com/posts/1',{
//         id: 1,
//     title: 'fooma',
//     body: 'barMa',
//     userId: 2
//     });
// }
// const updatesingleData= ()=>{
//     makeRequest('PATCH','https://jsonplaceholder.typicode.com/posts/1',{
//         title: 'changed',
//     });
// }
// const deleteData = () =>{
//     makeRequest('DELETE','https://jsonplaceholder.typicode.com/posts/1');
// }
// updatesingleData();
// deleteData();

// getData(); 
// sendData();
// updateData();