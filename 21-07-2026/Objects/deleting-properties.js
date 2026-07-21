let student = {
    name : "Vijay",
    age : 25,
    gender : "Male"
};

console.log("Before -> ",student);

delete student.gender;
delete student["age"];

console.log("After  -> ",student);

// Output :

// Before ->  { name: 'Vijay', age: 25, gender: 'Male' }
// After  ->  { name: 'Vijay' }