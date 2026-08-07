const { getAdminPageService, getParticularStudentService, getAllStudentsService, createStudentService, updateStudentService, deleteStudentService } = require("../services/student.service");

async function getAdminPage(request, reply) {
    const result = await getAdminPageService();
    return reply.code(200).send({
        success: true,
        message: "Admin page displayed successfully"
    })
}

async function getAllStudents(request, reply) {
    const result = await getAllStudentsService();
    return reply.code(200).send({
        message: "Students fetched successfully",
        total_studens: result.length,
        data: result
    });
}

async function getParticularStudent(request, reply) {
    const {id} = request.params;
    const result = await getParticularStudentService(Number(id));

    if(!result) {
        return reply.code(404).send({
            success: false,
            message: "Student not found"
        })
    }

    return reply.send({
        success: true,
        message: "Student found successfully",
        data: result
    });
}

async function createStudent(request, reply) {
    const student = request.body;
    const result = await createStudentService(student);
    return reply.code(201).send({
        success: true,
        message: "New student inserted successfully",
        data: result
    });
}

async function updateStudent(request, reply) {
    const {id} = request.params;
    const student = request.body;

    const result = await updateStudentService(Number(id),student);
    
    if(!result) {
        return reply.code(404).send({
            success: false,
            message: "Student not found"
        })
    }

    return reply.send({
        success: true,
        message: "Update student successfully",
        data: result
    })
}

async function deleteStudent(request, reply) {
    const {id} = request.params;

    const deleted = await deleteStudentService(Number(id));

    if(!deleted) {
        return reply.code(404).send({
            success: false,
            message: "Student not found"
        })
    }
    
    return reply.send({
        success: true,
        message: "Student deleted successfully"
    });
}

module.exports = {
    getAdminPage,
    getAllStudents,
    getParticularStudent,
    createStudent,
    updateStudent,
    deleteStudent
}