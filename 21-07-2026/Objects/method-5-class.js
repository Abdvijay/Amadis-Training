class student {
    constructor(name, age, city){
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

let s1 = new student("Vijay", 25, "Tirunelveli");
let s2 = new student("Dheeksha", 1, "Nagercoil");

console.log(s1);
console.log(s2);

// Output :

// student { name: 'Vijay', age: 25, city: 'Tirunelveli' }
// student { name: 'Dheeksha', age: 1, city: 'Nagercoil' }