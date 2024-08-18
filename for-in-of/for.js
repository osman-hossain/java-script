var name = ["Abu Huraira","Hamzah Khan","Afzar Siddiki"]

for(let names of name)
    {
        console.log(names);
    }

var bio = {
    name: "Abu Hamza",
    id: 23,
    class: 4
}
for(let x in bio)
    {
        // console.log(x);
        // console.log(bio[x]);
        console.log(`${x}: ${bio[x]}`);
    }