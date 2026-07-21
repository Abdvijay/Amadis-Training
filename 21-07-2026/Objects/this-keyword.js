let student = {
    name : "Vijay",
    age : 25,
    city : "Tirunelveli",
    display(){
        console.log(this.name,"came from",this.city);
    }
}

student.display();

// Output : Vijay came from Tirunelveli