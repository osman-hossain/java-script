console.clear();
const makeRequest = async(method)=>{
    return await axios(method);
}
const getData = ()=>{
    makeRequest({
        url:"https://jsonplaceholder.typicode.com/posts/1",
        method:"DELETE",
        // data:JSON.stringify({
        //     title: 'flood sylet held',
        //     body: 'bar code qr',
        //     userId: 18102054,
        //     message: 'all is well. do it now',
        // }),
    })
    .then(res=>console.log(res.data));

}
getData();