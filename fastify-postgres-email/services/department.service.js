const { Op } = require("sequelize");
const Department = require("../models/department.model")
const Employee = require("../models/employee.model");
const EmployeeProfile = require("../models/employee-profile.model");
const Project = require("../models/project.model");

async function startDepartment(){
    return true;
}

async function getDepartmentWithEmployees(id) {
    const department = await Department.findByPk(id, {
        attributes: ["id", "name"],
        include: {
            model: Employee,
            as: "employees",
            attributes: ["name","email","departmentId"],
            // where: {
            //     name: {
            //         [Op.iLike] : `%Vi%`
            //     }
            // }
            // required: true,
            include: [
                {
                    model: EmployeeProfile,
                    as: "profile",
                    attributes: ["id", "employeeId", "phone", "designation"],
                },
                {
                    model: Project,
                    as: "projects",
                    attributes: ["id", "name", "description"],
                    through: {
                        attributes: []
                    }
                }
            ]
        },
        // raw: true
    });

    return department;
}

module.exports = {
    getDepartmentWithEmployees,
    startDepartment
}