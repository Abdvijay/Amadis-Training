let student = {
    name : "Vijay",
    age : 25,
    city : "Tirunelveli"
};

console.log("Before Updating : ",student);
student.name = "Vj";
student["city"] = "Nellai";
student["gender"] = "Male"; // If not in object it will as new entry
console.log("After  Updating : ",student);

// Output :

// Before Updating :  { name: 'Vijay', age: 25, city: 'Tirunelveli' }
// After  Updating :  { name: 'Vj', age: 25, city: 'Nellai', gender: 'Male' }