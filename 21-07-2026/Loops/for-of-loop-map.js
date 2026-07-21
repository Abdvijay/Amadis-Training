let userRoles = new Map([
    ["Vijay", "Manager"],
    ["Dheeksha", "CEO"]
]);

for(let [user,role] of userRoles){
    console.log(`${user} is an ${role}`);
}

// Output :

// Vijay is an Manager
// Dheeksha is an CEO