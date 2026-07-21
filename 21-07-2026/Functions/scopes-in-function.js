function greet(){
    let x = 10;
    console.log(x);
    return x;
}
let result = greet();
console.log(result);
// console.log(x); -> x is not defined because here function scope only inside function