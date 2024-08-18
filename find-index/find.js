let numbers = [5,7,8,11,12];
// let firstEven = numbers.findIndex(x => x%2===0);
// console.log(firstEven);

let evenNumber = (value,index,arr) =>{
    if(value%2===0)
        return value;
}

const firstevenNumber = numbers.find(evenNumber);
const firstevennumberIndex = numbers.findIndex(evenNumber);
console.log(firstevennumberIndex);
console.log(firstevenNumber); 