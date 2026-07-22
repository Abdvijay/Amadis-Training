const headings = document.getElementsByClassName("heading");
console.log(headings);
console.log(headings[0]);
console.log(headings[1].innerText);

// let i = 0;
// while(i<=headings.length){
//     headings[i].style.color = "Green";
//     i++;
// }

for(let i = 0; i <= headings.length; i++){
    headings[i].addEventListener("mouseover",()=>{
        headings[i].style.color = "Green";
    })

    headings[i].addEventListener("mouseout",()=>{
        headings[i].style.color = "Black";
    })
}