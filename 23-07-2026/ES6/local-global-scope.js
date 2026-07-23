var name = "Vijay";
function display(){
    var name = 10;
    console.log(name);
}
display();
console.log(name);

let stud = "Swathi";
function display_stud(){
    let stud = 20;
    console.log(stud);
}
display_stud();
console.log(stud);

const laddu = "Dheeksha";
function display_stud(){
    const laddu = 30;
    console.log(laddu);
}
display_stud();
console.log(laddu);

if(true){
    var x = 10;
}
console.log(x);

if(true){
    let y = 10;
}
// console.log(y); It throws error because let is blocked scope.

if(true){
    const z = 10;
}
// console.log(z); It throws error because const is blocked scope.

const student = {
    name : "Vijay"
};
console.log(student.name);
student.name = "Abd"; // It didn't throw error because it just change the property not the variable value.
console.log(student.name);

// student = {}; It throws error.

const numbers = [10,20];
console.log(numbers);
numbers.push(30,40);
console.log(numbers); // it didn't throw error;
// numbers = []; But it throw error.