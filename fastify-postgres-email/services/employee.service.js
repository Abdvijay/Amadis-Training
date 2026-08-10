const Employee = require("../models/employee.model");
const {sendWelcomeEmailService} = require("../services/email.service");
const {Op} = require("sequelize");

async function createEmployee(data) {
    const employee = await Employee.create({
        name: data.name,
        email: data.email,
        department: data.department
    });

    let emailSent = false;

    try {
        const emailResult = await sendWelcomeEmailService(
            employee.email,
            employee.name,
            employee.department
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
    const employees = await Employee.findAll();
    // const employees = await Employee.findAll({
    //     attributes: ["name", "email", "department"]
    // })
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
            name: { [Op.iLike]: "%Vi%"}
        }
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
        limit: limit,
        page: page,
        order: [["createdAt", "DESC"]]
    });

    return employees;
}

module.exports = {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee,
    searchEmployee,
    filterByDepartment,
    withPagination
}