const tags = document.getElementsByTagName("p");
console.log(tags);

for(let i = 0; i <= tags.length; i++){
    tags[i].addEventListener("mouseenter",function(){
        tags[i].style.fontSize = "20px";
        tags[i].style.fontWeight = "600";
        tags[i].style.color = "Blue";
    })

    tags[i].addEventListener("mouseleave",function(){
        tags[i].style.fontSize = "";
        tags[i].style.fontWeight = "";
        tags[i].style.color = "Black";
    })
}