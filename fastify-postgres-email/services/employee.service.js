const Department = require("../models/department.model");
const EmployeeProfile = require("../models/employee-profile.model");
const Employee = require("../models/employee.model");
const Project = require("../models/project.model");
const {sendWelcomeEmailService} = require("../services/email.service");
const {Op, literal} = require("sequelize");

async function createEmployee(data) {
    const employee = await Employee.create({
        name: data.name,
        email: data.email,
        departmentId: data.departmentId
    });

    let emailSent = false;

    try {
        const emailResult = await sendWelcomeEmailService(
            employee.email,
            employee.name,
            employee.departmentId
        );

        emailSent = true;
    } catch (err) {
        console.log("Welcome email failed : ",err.message);
    }

    return {
        employee,
        emailSent
    }
}

async function getAllEmployees() {
    // const employees = await Employee.findAll();
    const employees = await Employee.findAll({
        attributes: [
            "id", 
            "name", 
            "email", 
            "departmentId",
            [literal(`
                    CASE
                        WHEN "departmentId" = 1
                            THEN 'IT'
                        WHEN "departmentId" = 2
                            THEN 'CSE'
                        WHEN "departmentId" = 3
                            THEN 'ECE'
                        ELSE 'OTHER'
                    END`), 
                    "department_name"
            ]
        ]
    })
    return employees;
}

async function getEmployeeById(id) {
    const employee = await Employee.findByPk(id);
    // const employee = await Employee.findOne({
    //     attributes: ["name", "email"],
    //     where: {
    //         id: id
    //     }
    // });
    return employee;
}

async function updateEmployee(id, data) {
    const employee = await Employee.findByPk(id);
    
    if(!employee) {
        return null
    }

    await employee.update({
        name: data.name,
        email: data.email,
        department: data.department
    });

    return employee;
}

async function deleteEmployee(id){
    const employee = await Employee.findByPk(id);

    if(!employee) {
        return null
    }

    await employee.destroy();
    return employee;
}

async function searchEmployee(name) {
    // const employees = await Employee.findAll({
    //     where: {
    //         name: { [Op.like]: "%Vi%"}
    //     }
    // })
    const employees = await Employee.findAll({
        where: {
            name: { [Op.iLike]: `%${name}%`}
        },
        attributes: ["id", "name", "email", "departmentId"],
    })

    return employees;
}

async function filterByDepartment(dept) {
    const employees = await Employee.findAll({
        where: {
            department: {[Op.iLike] : `%${dept}%`}
        }
    });

    return employees;
}

async function withPagination(page, limit){
    const offset = (page - 1) * limit;
    const employees = await Employee.findAndCountAll({
        limit,
        offset,
        order: [["createdAt", "DESC"]],
        attributes: ["id", "name", "email", "departmentId"]
    });

    return employees;
}

async function getEmployeeWithProfile(id) {
    // const employee = await Employee.findByPk(id, {
    //     include: {
    //         model: EmployeeProfile,
    //         as: "profile"
    //     },
    // });

    const employee = await Employee.findByPk(id, {
        attributes: ["id", "name", "email", "departmentId"],
        include: [
            {
                model: Department,
                as: "department",
                attributes: ["id", "name"],
                required: true // Works like INNER JOIN
            },
            {
                model: EmployeeProfile,
                attributes: ["employeeId", "phone", "designation"],
                as: "profile"
            }
        ],
        raw: true
    })

    return employee;
}

async function getEmployeeWithProject(id){
    const employee = await Employee.findByPk(id,{
        attributes: ["id", "name", "email", "departmentId"],
        include: {
            model: Project,
            as: "projects",
            attributes: ["id", "name", "description"], // Here it will handled only project table
            through: {
                attributes: ["employeeId", "projectId"] // Junction table attributes handled attributes property inside through
            },
            where: {
                // id: 1
            }
        },
        raw: true,
        // nest: true
    });

    return employee;
}

async function getEmployeeFullDetails(id){
    const employee = Employee.findByPk(id, {
        attributes: ["id", "name", "email", "departmentId"],
        include: [
            {
                model: EmployeeProfile,
                as: "profile",
                attributes: ["id", "employeeId", "phone", "designation"]
            },
            {
                model: Department,
                as: "department",
                attributes: ["id", "name"],
            },
            {
                model: Project,
                as: "projects",
                attributes: ["id", "name", "description"],
                through: {
                    attributes: []
                }
            }
        ],
        raw: true
    });

    return employee;
}

module.exports = {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee,
    searchEmployee,
    filterByDepartment,
    withPagination,
    getEmployeeWithProfile,
    getEmployeeWithProject,
    getEmployeeFullDetails
}