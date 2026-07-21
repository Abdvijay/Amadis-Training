let students = [
    {id : 1, name : "Vijay", city : "Tirunelvlei"},
    {id : 2, name : "Dheeksha", city : "Nagercoil"},
    {id : 3, name : "Swathi", city : "Thanjavur"}
];

console.log(students);

console.log("");
console.log(students[1]);

console.log("");
for(let student in students){
    console.log(student, students[student]);
}

console.log("");
for(let student of students){
    console.log(student);
}

// Output :

// [
//   { id: 1, name: 'Vijay', city: 'Tirunelvlei' },
//   { id: 2, name: 'Dheeksha', city: 'Nagercoil' },
//   { id: 3, name: 'Swathi', city: 'Thanjavur' }
// ]

// { id: 2, name: 'Dheeksha', city: 'Nagercoil' }

// 0 { id: 1, name: 'Vijay', city: 'Tirunelvlei' }
// 1 { id: 2, name: 'Dheeksha', city: 'Nagercoil' }
// 2 { id: 3, name: 'Swathi', city: 'Thanjavur' }

// { id: 1, name: 'Vijay', city: 'Tirunelvlei' }
// { id: 2, name: 'Dheeksha', city: 'Nagercoil' }
// { id: 3, name: 'Swathi', city: 'Thanjavur' }