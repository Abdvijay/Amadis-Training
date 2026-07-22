document.getElementById("btn").addEventListener("click",()=>{
    console.log(document.getElementById("username").value.trim());
    alert("Hi " + document.getElementById("username").value.trim());
})