const { getDepartmentWithEmployees, startDepartment } = require("../services/department.service")

async function startDepartmentController(request, reply) {
    try{
        await startDepartment();
        return reply.code(200).send({
            success: true,
            message: "Department server running..."
        })
    } catch (err) {
        return {
            success: false,
            message: "Server Fails..."
        }
    }
}

async function getDepartmentWithEmployeesController(request, reply) {
    const department = await getDepartmentWithEmployees(request.params.id);

    if(!department){
        return reply.code(404).send({
            success: false,
            message: "Department not found"
        });
    }

    return reply.code(200).send({
        success: true,
        message: "Department found successfully",
        data: department
    })
}

module.exports = {
    getDepartmentWithEmployeesController,
    startDepartmentController
}