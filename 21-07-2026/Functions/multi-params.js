function addition(a,b){
    return a + b;
}

function subtraction(a,b){
    return a - b;
}

function multiplication(a,b){
    let c = a * b;
    return c;
}

function division(a,b){
    let c = a / b;
    return c;
}

let a = 5,b = 6;
let result = addition(a,b);
console.log("Addition of       ",a ," + ", b,  "is ",result);
console.log("Subtraction of    ",a ," + ", b,  "is ",subtraction(a,b));
console.log("Multiplication of ",a ," + ", b,  "is ",multiplication(a,b));
console.log("Division of       ",a ," + ", b,  "is ",division(a,b));