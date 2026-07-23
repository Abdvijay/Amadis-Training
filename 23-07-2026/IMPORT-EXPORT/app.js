import { addition, subtraction } from "./math.js"; // needed modules only
// import * as user from "./user.js"; // all extracting
import {name as studentName} from "./user.js"; // rename while importing
import modulos from "./math.js"; // If while export mentioned default here no need to use {}
import city,{age} from "./user.js";

console.log(`Addition of 5 and 6 is ${addition(5,6)}`);

// ReferenceError: multiply is not defined
// console.log(`Multiplication of 5 and 11 is ${multiply(5,11)}`);

console.log(studentName);
// console.log(user.age);
// console.log(user.city);

console.log(`Modulos of 10 % 2 is ${modulos(10,2)}`);
console.log(city,age);