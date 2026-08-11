const { getEmployeesDetailedViewController } = require("../controller/employee-details-view.controller");

async function employeeDetailsViewRoutes(fastify, options) {
    fastify.get("/all-employees", getEmployeesDetailedViewController);
}

module.exports = employeeDetailsViewRoutes;