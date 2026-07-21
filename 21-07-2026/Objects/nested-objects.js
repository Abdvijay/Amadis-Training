let student = {
    college_name : "Hindusthan",
    college_code : "HICET",
    person : {
        name : "Vijay",
        age  : 25,
        city : "Tirunelveli",
        address : {
            door_no : 14/19,
            state : "Tamil Nadu",
            pincode : 627426
        }
    }
};

console.log(student.person.address["state"]);
console.log(student["person"]["address"]["pincode"]);

// Output :

// Tamil Nadu
// 627426