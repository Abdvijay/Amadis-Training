let numbers = [10,20];

console.log(`Original Elements - ${numbers}`);

numbers.push(30);
console.log(`After using push(30) - ${numbers}`);

numbers.unshift(0);
console.log(`After using unshift(0) - ${numbers}`);

numbers.pop();
console.log(`After using pop() - ${numbers}`);

numbers.shift();
console.log(`After using shift() - ${numbers}`);

console.log(`Array length - ${numbers.length}`)

// array.splice(start, deleteCount, items)
let values = [10,20,30,40];
console.log(`Before using splice - ${values}`);
values.splice(1,2);
console.log(`After using splice(1,2) - ${values}`);

// Here 1 - position to add, 0 - do not delete any, rest of values
let colors=["Red","Green"];
console.log(`Before adding using splice - ${colors}`);
colors.splice(1,0,"Blue","Orange");
console.log(`After adding using splice - ${colors}`);

// Here 1 - position, 1 - remove one element, next value insert same position
let fruits=["Apple","Orange","Mango"];
console.log(`Before replace using splice - ${fruits}`);
fruits.splice(1,1,"Banana");
console.log(`After replace using splice - ${fruits}`);

let nums = [10,20,30,40];
console.log(`Numbers - ${nums}`);
console.log(`After using slice(1,3) - ${nums.slice(1,3)}`);

console.log(`Finding Last Finding Index of [10,20,10,20,30,10] - ${[10,20,10,20,30,10].lastIndexOf(10)}`)

console.log(`Fruits List - ${fruits}`);
console.log(`Mango Index value - ${fruits.indexOf("Mango")}`);

console.log(`Checking Inside Fruits["Apple","Orange","Mango"] Blue is there or not - ${fruits.includes("Blue")}`);

let a = [1,2];
let b = [3,4];
let c = [...a,...b];
console.log(`a - ${a} and b - ${b}`);
console.log(`After using concat - ${a.concat(b)}`);
console.log(`After using spread - ${c}`);

console.log(`Joined using - ${colors.join("-")}`);

console.log(`Before using reverse - [50,40,30,20,10]`);
console.log(`After using reverse - ${[50,40,30,20,10].reverse()}`);

// By default, sort() compares values as strings. For numeric sorting, we need to use callback function to achieve this.
console.log(`Before using sorting - [5,2,4,3,11,1]`);
console.log(`After using sorting - ${[5,2,4,3,11,1].sort((a,b)=>a-b)}`);

let names = ["Vijay", "Dheeksha", "Swathi"];
console.log(`Before sorting names - ${names}`);
names.sort();
console.log(`After sorting names - ${names}`);

let square = [10,20,30,40].map(num=>num * num);
console.log(`Map using finding square - ${square}`);

let gt25 = [10,20,30,40].filter(num=>num>=25);
console.log(`Filter using finding gt25 elements - ${gt25}`);

let total = [10,20,30,40].reduce(function(sum,num){
    return sum+num;
},0);
console.log(`Total finding using reduce - ${total}`);

let gt20 = [10,20,30,40].find(num=>num>20);
console.log(`Find using match first element - ${gt20}`);

console.log("\nForEach");
console.log(names);
names.forEach(function(name){
    console.log(name);
})

console.log(`\nArray Destructing`)
let [name1,name2] = names;
console.log(name1,name2);

// Output :

// Original Elements - 10,20
// After using push(30) - 10,20,30
// After using unshift(0) - 0,10,20,30
// After using pop() - 0,10,20
// After using shift() - 10,20
// Array length - 2
// Before using splice - 10,20,30,40
// After using splice(1,2) - 10,40
// Before adding using splice - Red,Green
// After adding using splice - Red,Blue,Orange,Green
// Before replace using splice - Apple,Orange,Mango
// After replace using splice - Apple,Banana,Mango
// Numbers - 10,20,30,40
// After using slice(1,3) - 20,30
// Finding Last Finding Index of [10,20,10,20,30,10] - 5
// Fruits List - Apple,Banana,Mango
// Mango Index value - 2
// Checking Inside Fruits["Apple","Orange","Mango"] Blue is there or not - false
// a - 1,2 and b - 3,4
// After using concat - 1,2,3,4
// After using spread - 1,2,3,4
// Joined using - Red-Blue-Orange-Green
// Before using reverse - [50,40,30,20,10]
// After using reverse - 10,20,30,40,50
// Before using sorting - [5,2,4,3,11,1]
// After using sorting - 1,2,3,4,5,11
// Before sorting names - Vijay,Dheeksha,Swathi
// After sorting names - Dheeksha,Swathi,Vijay
// Map using finding square - 100,400,900,1600
// Filter using finding gt25 elements - 30,40
// Total finding using reduce - 100
// Find using match first element - 30

// ForEach
// [ 'Dheeksha', 'Swathi', 'Vijay' ]
// Dheeksha
// Swathi
// Vijay

// Array Destructing
// Dheeksha Swathi