/* var - Reassigned, Redeclared - Allowed */

var a = 10;
a = 15;
var a = 20;
console.log(a);

// let - Reassigned allowed but Redeclaration not allowed

let b = 20;
b = 25;
// let b = 30; // Throws Identifier has already been declared error.
console.log(b);

// const - not allowed both Reassign and Redeclaration.

const c = 30;
// c = 35; It throws type error because const cannot allo reassign.
// const c = 40; // It also throws already declared error.
console.log(c);