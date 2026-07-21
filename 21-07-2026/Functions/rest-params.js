function rest_params(...numbers){
    let total = 0;
    for(let num of numbers){
        total += num;
    }
    return total;
}

console.log(rest_params(10,20,30));
console.log(rest_params(100,900));