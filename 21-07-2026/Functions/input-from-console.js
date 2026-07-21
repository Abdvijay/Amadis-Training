const readline = require("readline");

function factorial(n){
    if(n==1) return 1;
    return n * factorial(n-1);
}

let r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

r1.question("Enter the n value : ",(input) => {
    console.log("Factorial of ",input, " is ",factorial(input));
    r1.close();
})