const { getAdminPage, getAllStudents, getParticularStudent, createStudent, updateStudent, deleteStudent } = require("../controllers/student.controller");
const {verifyUser} = require("../middlewares/auth.middleware");
const {createStudentSchema} = require("../schemas/student.schema");
async function studentRoutes(fastify, options) {

    // fastify.get('/admin', {preHandler: async(request,reply) => {
    //     console.log("Admin Page Pre Handler Executed...");
    //     const name = "Vijay";
    //     if(name !== "vijay"){
    //         return reply.code(403).send({
    //             message: "Only Admin can access this page"
    //         })
    //     }
    // }}, getAdminPage);

    fastify.post('/admin', {preHandler: verifyUser},getAdminPage);

    fastify.get('/get-all-students', {onRequest: async(request, reply) => {
        console.log("Get All Student onRequest Executed...");
    }}, getAllStudents);

    fastify.get('/get-student/:id', getParticularStudent)

    fastify.post('/create-student', 
        {
            preValidation: async(request,reply) => {
                console.log("Created student prevalidation executed...");
                if(!request.body.name){
                    return reply.code(400).send({
                        message: "Name is required"
                    });
                }
                request.body.name = request.body.name.toUpperCase();
            },
            schema: createStudentSchema
        }, createStudent);

    fastify.put('/update-student/:id', updateStudent);

    fastify.delete('/delete-student/:id', deleteStudent);

};

module.exports = studentRoutes;