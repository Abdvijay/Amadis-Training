let student = {
    name : "Vijay",
    skills : ["HTML", "CSS", "JS", "PYTHON"]
};

console.log(student.skills[1]);

for(let skill in student.skills){
    console.log(skill,student.skills[skill]);
}

for(let skill of student.skills){
    console.log(skill);
}

// Output :

// CSS
// 0 HTML
// 1 CSS
// 2 JS
// 3 PYTHON
// HTML
// CSS
// JS
// PYTHON