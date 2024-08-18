class students {
    constructor(id,name){
        this.id = id;
        this.name = name;
    }

    set studentName(name){
        this.name = name;
    }

    get studentInfo(){
        return this.name+" "+this.id;
    }
}

let s1 = new students(18102054,"Hamza Ali");
console.log(s1);
let s2 = new students(18102055,"Ali Banat");
console.log(s2);
console.log(s2.id);
console.log(s1.name);

s1.studentName = "Karam";
console.log(s1);
console.log(s1.studentInfo);