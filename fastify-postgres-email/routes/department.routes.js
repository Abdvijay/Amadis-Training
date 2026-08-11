const { startDepartmentController, getDepartmentWithEmployeesController } = require("../controller/department.controller");

async function departmentRoutes(fastify, options){
    fastify.get("/", startDepartmentController);

    fastify.get("/:id/employees", getDepartmentWithEmployeesController);
}

module.exports = departmentRoutes;