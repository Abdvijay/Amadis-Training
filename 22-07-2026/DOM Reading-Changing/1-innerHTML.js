const msg = document.getElementById("message");
console.log(msg);
console.log(msg.innerHTML);

msg.addEventListener("mouseover",()=>{
    msg.innerHTML = "<h1>welcome amadis</h1>";
    msg.style.color = "Red";
});

msg.addEventListener("mouseleave", () => {
    msg.innerHTML = "Hello <b>Vijay</b>";
    msg.style.color = "black";
});

let name = "Vijay";
const title = document.querySelector("#title");
title.addEventListener("mouseover", ()=>{
    title.innerHTML = "Hi" + name + ":)";
})

title.addEventListener("mouseleave", ()=>{
    title.innerHTML = "Welcome";
})