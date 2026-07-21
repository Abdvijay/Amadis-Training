function student(name,age){
    this.name = name;
    this.age = age;
}

let s1 = new student("Vijay",25);
let s2 = new student("Dheeksha",1);

console.log(s1);
console.log(s2);

// Output :

// student { name: 'Vijay', age: 25 }
// student { name: 'Dheeksha', age: 1 }