const EmployeeDetailsView = require("../models/employee-details-view.model");

async function getEmployeesDetailedView(){
    const employees = await EmployeeDetailsView.findAll({
        order: [
            ["id", "ASC"]
        ]
    });

    return employees;
}

module.exports = {
    getEmployeesDetailedView
}