let student = {
    name : "Vijay",
    age : 25,
    city : "Tirunelveli"
};

console.log("For of using\n");
for(let key in student){
    console.log(key, student[key]);
}