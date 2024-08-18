// console.clear();

// axios
// .delete("https://jsonplaceholder.typicode.com/posts/1",{
    // method:'Put',
    // headers:{
    //     'Content-type':'application/json; charset=UTF-8',
    // },
    // body: JSON.stringify({
    //     title: 'food lover village',
    //     body: 'bar b q fry',
    //     userId: 18102054,
    //     message:'healthy food good life',
    // }),
// })
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err))
// ;

console.clear();
const makeRequest = async(method)=>{
    return await axios(method);
}

const updateData = () =>{
    makeRequest({
        url:'https://jsonplaceholder.typicode.com/posts/1',
        method:'patch',
        headers:{
            "Content-type":"application/json; charset=UTF-8",
        },
        data: JSON.stringify({
            title: 'foowang delevary',
            body: 'barcode qr scaned',
            userId: 18102054,
            message: 'good food good life',
        }),
    })
    .then(res=> console.log(res.data))
    .catch(err => console.log(err))
    ;
}
updateData();