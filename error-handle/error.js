// alert("start");
// alert(x);
// alert("end");

try{
    alert("hello");
    alert(x);
    alert("world");
}catch(error){
    alert("alert department");
    console.log("alert department");
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}finally{
    alert("hello");
    alert("world");
}