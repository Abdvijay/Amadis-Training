function student(name,age,city){
    this.name = name;
    this.age = age;
    this.city = city;
}

let s1 = new student("Vijay",25,"Tirunelveli");
let s2 = new student("Dheeksha", 1, "Nagercoil");

console.log(s1["name"],s1["age"],s1["city"],s1["gender"]);
console.log(s2["name"],s2["age"],s2["city"],s2["gender"]);

// Output :

// Vijay 25 Tirunelveli undefined
// Dheeksha 1 Nagercoil undefined