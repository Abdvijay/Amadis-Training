let student = {
    name : "Vijay",
    age : 25,
    city : "Tirunelveli"
};

let address = {
    door : "14/19",
    pincode : 627426
};

console.log("keys    -> ",Object.keys(student));
console.log("values  -> ",Object.values(student));
console.log("entries -> ",Object.entries(student));
console.log("has property -> ",Object.hasOwnProperty("name"));
console.log("in property  -> ","gender" in student);

let merged = Object.assign({},student,address);
console.log("assign  -> ",merged);

// Nothing going to be change
Object.freeze(student);
student.name = "Swathi"; // updating existing name but it cannot because already freezed
console.log("After using freeze -> ",student);

// Seal -> Cannot add,delete only update exisiting
Object.seal(address);
address.state = "Tamil Nadu"; // added new but it cant due to seal
address.door = "14a" // update exisiting it can because seal allows to do update only
console.log("After using seal add,update-> ",address);

delete address.door; // cannot delete because seal does not allow to add or delete
console.log("After using seal delete -> ",address);