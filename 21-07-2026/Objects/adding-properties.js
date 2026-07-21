let student = {
    name : "Vijay"
};

console.log("Before -> ",student);
student.age = 25;
student["city"] = "Tirunelveli";

console.log("After  -> ",student);

// Output :

// Before ->  { name: 'Vijay' }
// After  ->  { name: 'Vijay', age: 25, city: 'Tirunelveli' }