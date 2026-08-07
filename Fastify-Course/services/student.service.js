// SAMPLE STUDENTS DATA IN ARRAY FORMAT
const students = [

    {id:1,name:"Vijay",age:24,department:"IT"},
    {id:2,name:"Kumar",age:22,department:"CSE"},
    {id:3,name:"Rahul",age:23,department:"ECE"},
    {id:4,name:"Priya",age:21,department:"IT"},
    {id:5,name:"Arun",age:20,department:"CSE"},
    {id:6,name:"Divya",age:22,department:"IT"},
    {id:7,name:"Karthik",age:25,department:"ECE"},
    {id:8,name:"Meena",age:21,department:"IT"},
    {id:9,name:"Ravi",age:26,department:"CSE"},
    {id:10,name:"Surya",age:22,department:"ECE"}

]

async function getAdminPageService() {
    return true;
}

async function getAllStudentsService() {
    return students;
}

async function getParticularStudentService(id) {
    return students.find((student) => student.id === id);
}

async function createStudentService(student) {
    const newStudent = {
        id: students.length + 1,
        ...student
    }

    students.push(newStudent);
    return newStudent;
}

async function updateStudentService(id, student) {
    const index = students.findIndex((student) => student.id === id);
    
    if(index === -1) {
        return null
    }

    students[index] = {
        id,
        ...student
    };

    return students[index];

}

async function deleteStudentService(id) {
    const index = students.findIndex(student => student.id === id);

    if(index === -1){
        return false
    }

    students.splice(index, 1);
    return true
}

module.exports = {
    getAdminPageService,
    getAllStudentsService,
    getParticularStudentService,
    createStudentService,
    updateStudentService,
    deleteStudentService,
};
