let student = {
    name : "Vijay",
    age : 25,
    city : "Chennai"
};

console.log(`Keys only\n`);
for(let key in student){
    console.log(key);
}

console.log(`\nValues only\n`);
for(let value in student){
    console.log(student[value]);
}

console.log(`\nKeys and Values\n`);
for(let key in student){
    console.log(key,student[key]);
}

console.log(`\n Another way(Destructing and Entries Property\n`);
for(let [key,value] of Object.entries(student)){
    console.log(key,value);
}

// Output :

// Keys only

// name
// age
// city

// Values only

// Vijay
// 25
// Chennai

// Keys and Values

// name Vijay
// age 25
// city Chennai

//  Another way(Destructing and Entries Property

// name Vijay
// age 25
// city Chennai