function outer(){
    console.log("outer function executed");
    function inner(){
        console.log("inner function executed");
    }
    inner();
}

outer();