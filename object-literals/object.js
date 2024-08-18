var bioData = (a,b)=>{
    return {
        name:a,
        age:b
    }
}
console.log(bioData("ali hamza",19));

var dataBio = (name,age,salary,phone,height)=>{
    return{
        name,
        age,
        salary,
        phone,
        height
    }
}
console.log(dataBio("ali",18,20000,1928040616,5));

let message = {
    body: function(){

        return "hi, this is object";
    }
}
console.log(message.body());

// alternative

let messages = {
    body(){
        return "hi, this is inside object";
    }
}
console.log(messages.body());

// use space between call name

let mes = {
    'body message'(){
        return "hi, this is inside body message object";
    }
}
console.log(mes['body message']());