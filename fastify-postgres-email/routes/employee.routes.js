const {createEmployeeController, getAllEmployeesController, getEmployeeByIdController, updateEmployeeController, deleteEmployeeController, searchEmployeeController, filterByDepartmentController, withPaginationController} = require("../controller/employee.controller");
const {EmployeeSchema} = require("../schemas/employee.schema");

async function employeeRoutes(fastify, options) {
    fastify.get("/", withPaginationController);

    fastify.post("/create-employee", {schema: EmployeeSchema}, createEmployeeController);
    
    fastify.get("/get-all-employees", getAllEmployeesController);
    
    fastify.get("/get-employee/:id", getEmployeeByIdController);

    fastify.put("/update-employee/:id", updateEmployeeController);

    fastify.delete("/delete-employee/:id", deleteEmployeeController);

    fastify.get("/search", searchEmployeeController);

    fastify.get("/filter", filterByDepartmentController);
}

module.exports = employeeRoutes;