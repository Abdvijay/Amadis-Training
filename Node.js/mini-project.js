const Fastify = require('fastify');
const app = Fastify({ logger: true});

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

// GET ALL STUDENTS
app.get('/students', async(request, reply) => {
    return {
        message: "Students Fetched Successfully",
        total_records: students.length,
        data: students,
    }
});

// GET PARTICULAR STUDENT USING PARAMS
app.get('/students/:id', async(request, reply) => {
    const id = Number(request.params.id);
    const student = students.find((item) => item.id === id);

    if(!student) {
        reply.status(404).send({
            message: "Student Not Found"
        })
    }

    return {
        message: "Student record found",
        data: student
    }
});

// CREATE NEW STUDENT USING REQUEST BODY
app.post('/students', async(request, reply) => {
    const {name, age, department} = request.body;

    if(!name || !age || !department){
        return reply.status(400).send({
            message: "All fields are required"
        })
    }

    if(name.length <= 3) {
        return {
            message: "Name should have minimum 3 characters"
        }
    }

    if(typeof age != "number"){
        return reply.code(400).send({
            message: "Age should be numeric"
        })
    }

    const newStudent = {
        id: students.length + 1,
        name: name,
        age: age,
        department: department
    };

    students.push(newStudent);
    return {
        message: "Student added successfully",
        new_student_data: newStudent
    }
});

// UPDATE STUDENT USING REQUEST PARAMS
app.put('/students/:id', async(request, reply) => {
    const id = Number(request.params.id);
    const index = students.findIndex((item) => item.id === id);

    if(index === -1){
        return reply.status(404).send({
            message: "Student Not Found"
        });
    }

    const {name, age, department} = request.body;
    students[index] = {id, name, age, department};

    return reply.status(200).send({
        message: "Student Updated Successfully",
        updated_data: students[index]
    })
})

// DELETE STUDENT USING REQUEST PARAMS
app.delete('/students/:id', async(request, reply) => {
    const id = Number(request.params.id);
    const index = students.findIndex((item) => item.id === id);

    if(index === -1){
        return reply.code(200).send({
            message: "Student Not Found"
        })
    }

    students.splice(index, 1);

    return reply.code(200).send({
        message: "Student deleted successfully",
        total_students: students.length,
        students: students
    })
});

app.get('/students/search', async(request) => {
    const {input} = request.query;

    if(!input) {
        return students;
    }

    const result = students.filter(student => 
        student.name.toLowerCase().includes(input.toLowerCase())
    )

    return {
        message: "Data fetched successfully",
        data: result
    };
})

app.get('/students/filter_with_pagination', async(request, reply) => {
    let {department, page, limit} = request.query;

    if(!department){
        return reply.code(400).send({
            message: "Department is required"
        });
    }

    department = department.toLowerCase();
    page = Number(page) || 1;
    limit = Number(limit) || 5;

    const filtered = students.filter(student => student.department.toLowerCase() === department);

    if(filtered.length === 0){
        return reply.code(404).send({
            message: "No Students Found"
        })
    }

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const result = filtered.slice(startIndex, endIndex);

    return reply.code(200).send({
        message: "Students fetched successfully",
        page: page,
        limit: limit,
        total_filtered_students: filtered.length,
        total_pages: Math.ceil(filtered.length / limit),
        data: result
    });
});

app.get('/students/sort', async(request, reply) => {
    let {sort, order} = request.query;

    sort = sort || "id";
    order = order || "asc";

    let result = [...students];

    if (sort === 'age') {
        result.sort((a,b) => order === "asc" ? a.age - b.age : b.age - a.age);
    } else if (sort === 'name') {
        result.sort((a,b) => order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
    } else if (sort === 'id') {
        result.sort((a,b) => order === "asc" ? a.id - b.id : b.id - a.id);
    }

    return {
        message: "Students fetched successfully",
        students: result
    }
})

app.listen({port: 3000}, async(err) => {
    console.log("Server Running...");
});