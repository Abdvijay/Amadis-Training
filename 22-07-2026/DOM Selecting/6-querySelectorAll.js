const headings = document.querySelectorAll(".heading");
const ptags = document.querySelectorAll("p");

console.log(headings);
console.log(ptags);

headings.forEach((heading)=>{
    heading.style.color = "Red";
    heading.style.fontSize = "25px";
})

for(let i = 0; i <= ptags.length; i++){
    ptags[i].addEventListener("mouseover",()=>{
        ptags[i].style.color = "Green";
        ptags[i].style.fontSize = "40px";
        ptags[i].style.paddingBottom = "20px";
    })

    ptags[i].addEventListener("mouseout",()=>{
        ptags[i].style.color = "Black";
        ptags[i].style.fontSize = "";
        ptags[i].style.paddingBottom = "";
    })
}