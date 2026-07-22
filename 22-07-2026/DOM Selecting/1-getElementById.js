const title = document.getElementById("title");
console.log(title);
console.log(title.innerHTML);
console.log(title.innerText);

title.addEventListener("mouseover", () => {
    title.innerText = "Welcome Vijay";
    title.style.color = "Red";
});

title.addEventListener("mouseout", () => {
    title.textContent = "JavaScript DOM";
    title.style.color = "Black";
});