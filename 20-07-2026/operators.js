/* Arithmetic Operators */

console.log("Arithmetic Operators Examples")
console.log("10 + 5  => ",10+5);
console.log("10 - 2  => ",10-2);
console.log("10 * 3  => ",10*3);
console.log("10 % 3  => ",10%3);
console.log("10 ** 2 => ",10**2);
console.log("10 / 2  => ",10/2);

console.log("\nAssignment Operators Examples")
let a = 10;
console.log("a => ",a);
console.log("a += 10 => ",a+=10);
console.log("a -= 10 => ",a-=10);
console.log("a /= 10 => ",a/=10);
console.log("a %= 10 => ",a%=10);
console.log("a *= 10 => ",a*=10);
console.log("a **= 2 => ",a**=2);

console.log("\nComparison Operators Examples")
let num1 = 10,num2 = 20;
console.log("num1 = ",num1," num2 = ",num2);
console.log(num1," > ",num2,"    => ",num1>num2);
console.log(num1," >= ",num2,"   => ",num1>=num2);
console.log(num1," < ",num2,"    => ",num1<num2);
console.log(num1," <= ",num2,"   => ",num1<=num2);
console.log(num1," == ",num2,"   => ",num1==num2);
console.log(num1," === ",num2,"  => ",num1===num2);
console.log(num1," != ",num2,"   => ",num1!=num2);
console.log(num1," !== ",num2,"  => ",num1!==num2);

console.log("\nLogical Operators Examples")
let m = 10,n = 20;
console.log("m = ",m," n = ",n);
console.log(m," > ",n," && ", m, " < ",n," => ",(m>n && m<n));
console.log(m," > ",n," || ", m, " < ",n," => ",(m>n || m<n));
console.log("!( ",m," > ",n," && ", m, " < ",n,")"," => ",!(m>n && m<n));