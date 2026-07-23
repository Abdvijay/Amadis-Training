const colors = ["Red", "Green", "Blue"];

// const [first, second, third] = colors;

// console.log(first);
// console.log(second);
// console.log(third);

const [first, , third] = colors;

console.log(first);
// console.log(second);
console.log(third);

// const student = {
//     name: "Vijay",
//     age: 24,
//     city: "Chennai"
// };

// const {name,age,city} = student;
// console.log(name);
// console.log(age);
// console.log(city);

let a = 10;
let b = 20;
console.log(`Before swap : ${a}, ${b}`);
[a,b] = [b,a]
console.log(`After  swap : ${a}, ${b}`);

const employee = {
    p1 : "Swathi"
};

const {p1,dis="Thanjavur"} = employee;
console.log(p1);
console.log(dis);

function display({id,salary}){
    console.log(id);
    console.log(salary);
}
display({
    id : 100,
    salary : 10000
});

const students = [
    {name : "Vijay", age : 25, city : "Tirunelveli"},
    {name : "Swathi", age : 25, city : "Thanjavur"},
    {name : "Dheeksha", age : 1, city : "Nagercoil"}
];

students.forEach((student)=>{
    console.log(student.name,student.age,student.city);
})

students.forEach(({name,age,city})=>{
    console.log(name,age,city);
})