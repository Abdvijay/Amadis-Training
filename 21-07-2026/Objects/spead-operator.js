let student = {
    name : "Vijay"
};

let details = {
    ...student,
    city : "Tirunelveli"
};

console.log(details);

// Output : { name: 'Vijay', city: 'Tirunelveli' }