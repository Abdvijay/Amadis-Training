let student = {
    name : "Vijay"
};

let person = Object.create(student);
person.age = 25;
person.city = "Tirunelveli";

console.log(student);
console.log(person);

// Output :

// { name: 'Vijay' }
// { age: 25, city: 'Tirunelveli' }