function greet(name = "guest", callback){
    console.log("Hello " + name);
    callback();
}

function sayBye(){
    console.log("Task ended !!!")
}

greet("vijay", sayBye);