// Without spread

// const numbers = [10,20,30];
// const copy = numbers;
// copy.push(40);
// console.log(numbers); // [ 10, 20, 30, 40 ]
// console.log(copy); // [ 10, 20, 30, 40 ]

// With spread

// const numbers = [10,20,30];
// const copy = [...numbers];
// copy.push(40);
// console.log(numbers); // [ 10, 20, 30 ]
// console.log(copy); // [ 10, 20, 30, 40 ]

const frontend = ["HTML","CSS"];
const backend = ["Python","Django"];
const skills = [...frontend, ...backend];
console.log(skills); // [ 'HTML', 'CSS', 'Python', 'Django' ]

const numbers = [20,30];
const newnumbers = [10, ...numbers, 30];
console.log(newnumbers); // [ 10, 20, 30, 30 ]

const student = {
    name : "Swathi",
    age : 25
};

const s1 = {...student};
console.log(s1); // { name: 'Swathi', age: 25 }

const address = {
    city : "Tirunelveli",
    state : "Tamil Nadu"
};

const merged = {...student, ...address};
console.log(merged); // { name: 'Swathi', age: 25, city: 'Tirunelveli', state: 'Tamil Nadu' }

const updatedStudent = {
    id : 100,
    ...student
};
console.log(updatedStudent); // { id: 100, name: 'Swathi', age: 25 }

const emp_name = "Vijay";
console.log([...emp_name]); // [ 'V', 'i', 'j', 'a', 'y' ]