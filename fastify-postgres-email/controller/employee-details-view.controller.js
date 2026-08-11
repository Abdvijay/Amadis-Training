const { getEmployeesDetailedView } = require("../services/employee-details-view.service");

async function getEmployeesDetailedViewController(request, reply) {
    const employees = await getEmployeesDetailedView();

    if(!employees) {
        return reply.code(404).send({
            success: false,
            message: "Employee not found"
        })
    }

    return reply.code(200).send({
        success: true,
        message: "Employee returned successfully",
        data: employees
    });
}

module.exports = {
    getEmployeesDetailedViewController
}