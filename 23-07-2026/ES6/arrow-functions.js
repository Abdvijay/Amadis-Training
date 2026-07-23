function greet(name){
    return `Hello ${name}`;
}
const result = greet("Vijay");
console.log(result);

const student = (name) =>{
    return `Hello ${name}`;
}
console.log(student("Vijay"));

const print = name => {
    console.log(`Hello ${name}`);
}
print("Vijay");

const addition = (a,b) => a+b;
console.log(`Addition of 5 and 6 is ${addition(5,6)}`);

const employee = () => ({
    name : "Vijay",
    age : 25
});
console.log(employee());

const numbers = [10,20,30,40,50];
numbers.forEach((num)=>{
    console.log(num*num);
});

const double = numbers.map((num) => num * num);
console.log(double);

const person = {
    name : "Vijay",
    greet : ()=>{
        console.log(`Hi ${this.name}`);
    }
}
person.greet(); // Hi undefined

const users = [
    {name:"Vijay"},
    {name:"Rahul"},
    {name:"Arun"}
];

users.forEach((user)=>{
    console.log(`Hi ${user.name}`);
})

setTimeout(() => {
    console.log("Done");
}, 1000);

const calling = () => "Welcome";
console.log(`Hello ${calling()}`);

const text = `Hi
Hello
Vijay
Swathi`;
console.log(text);

const name = "Vijay";
const html = `<h1>${name}</h1>`;
console.log(html);

const age = 20;
console.log(`${age >= 18 ? "You are eligible" : "You are not eligible"}`);

const user = {
    name: "Vijay",
    role: "Python Developer",
    company: "ABC Pvt Ltd"
};

console.log(`
Name    : ${user.name}
Role    : ${user.role}
Company : ${user.company}
`);