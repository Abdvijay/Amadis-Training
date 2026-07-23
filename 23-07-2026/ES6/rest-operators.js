// Without Rest 

// function add(a,b,c,d,e){
//     console.log(a,b,c,d,e);
// }

// add(10,20,30,40,50);

// With Rest

// function add(...numbers){
//     console.log(numbers);
// }

// add(10,20,30,40,50);

function find_total(...numbers){
    let total = 0;
    for(let num of numbers){
        total += num;
    }
    return total;
}

console.log(find_total(10,20,30));
console.log(find_total(10,20,30,40,50));

function student(name,...marks){
    console.log(name,marks);
}
student("Vijay",10,20,30);
student("Swathi",20,30,30,43,34);

const numbers = [10,20,30,40,50];
const [first,second,...remaining] = numbers;
console.log(`First : ${first}`);
console.log(`second : ${second}`);
console.log(`Remaining : ${remaining}`);

const person = {
    name : "Dheeksha",
    age : 1,
    city : "Nagercoil"
};

const {name,...details} = person;
console.log(name);
console.log(details);