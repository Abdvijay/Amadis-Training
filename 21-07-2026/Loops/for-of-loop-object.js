let student = {
    name : "Vijay",
    age : 25,
    city : "Tirunelveli"
};

console.log("Student data \n");
for(let [key,value] of Object.entries(student)){
    console.log(key,value);
}

// Output :

// Student data 

// name Vijay
// age 25
// city Tirunelveli