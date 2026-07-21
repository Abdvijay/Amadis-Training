let numbers = [10,20,30]

console.log("Numbers\n")
numbers.forEach(function(num){
    console.log(num);
})

console.log("\nUsing Index\n")
let colors = ["Red","Green","Blue"];
colors.forEach(function(color,index){
    console.log(index,color);
})

console.log("\nArrow Functions\n");
let names = ["Vijay","Dheeksha","Swathi"];
names.forEach((name)=>{
    console.log(name);
})


// Output :

// Numbers

// 10
// 20
// 30

// Using Index

// 0 Red
// 1 Green
// 2 Blue

// Arrow Functions

// Vijay
// Dheeksha
// Swathi