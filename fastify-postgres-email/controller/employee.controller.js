const {createEmployee, getAllEmployees, getEmployeeById, updateEmployee, deleteEmployee, searchEmployee, filterByDepartment, withPagination, getEmployeeWithProfile, getEmployeeWithProject, getEmployeeFullDetails} = require("../services/employee.service");

async function createEmployeeController(request, reply) {
    const result = await createEmployee(request.body);
    return reply.code(201).send({
        success: true,
        message: "Employee created successfully",
        data: result.employee,
        email_sent: result.emailSent
    });
}

async function getAllEmployeesController(request, reply) {
    const employees = await getAllEmployees();
    return reply.code(200).send({
        success: true,
        message: "Employees fetched successfully",
        total_employees: employees.length,
        data: employees
    });
}

async function getEmployeeByIdController(request, reply) {
    const employee = await getEmployeeById(request.params.id);
    
    if(!employee) {
        return reply.code(404).send({
            success: false,
            message: "Employee not found"
        })
    }

    return reply.code(200).send({
        success: true,
        message: "Employee returned successfully",
        data: employee
    });
}

async function updateEmployeeController(request, reply) {
    const employee = await updateEmployee(request.params.id, request.body);
    
    if(!employee) {
        return reply.code(404).send({
            success: false,
            message: "Employee not found"
        })
    }

    return reply.code(200).send({
        success: true,
        message: "Employee updated successfully",
        data: employee
    });
}

async function deleteEmployeeController(request, reply) {
    const {id} = request.params;
    const employee = await deleteEmployee(id);

    if(!employee) {
        return reply.code(404).send({
            success: false,
            message: "Employee not found"
        })
    }

    return reply.code(200).send({
        success: true,
        message: "Employee deleted successfully"
    });
}

async function searchEmployeeController(request, reply) {
    const {name} = request.query;
    const employees = await searchEmployee(name);

    if(employees.length === 0){
        return reply.code(200).send({
            success: true,
            message: "No records found"
        })
    }
    
    return reply.code(200).send({
        success: true,
        data: employees
    })
}

async function filterByDepartmentController(request, reply) {
    const {department} = request.query;
    const employees = await filterByDepartment(department);

    return reply.code(200).send({
        success: true,
        data: employees
    })
}

async function withPaginationController(request, reply) {
    let {page, limit} = request.query;
    page = Number(page) || 1;
    limit = Number(page) || 5;

    const employees = await withPagination(page,limit);

    return reply.code(200).send({
        success: true,
        page: page,
        limit: limit,
        total: employees.count,
        totalPages: Math.ceil(employees.count / limit),
        data: employees.rows
    })
}

async function getEmployeeWithProfileController(request, reply) {
    const employee = await getEmployeeWithProfile(request.params.id);

    if(!employee) {
        return reply.code(404).send({
            success: false,
            message: "Employee not found"
        })
    }

    return reply.code(200).send({
        success: true,
        message: "Employee returned successfully",
        data: employee
    });
}

async function getEmployeeWithProjectController(request, reply) {
    const employee = await getEmployeeWithProject(request.params.id);

    if(!employee) {
        return reply.code(404).send({
            success: false,
            message: "Employee not found"
        })
    }

    return reply.code(200).send({
        success: true,
        message: "Employee returned successfully",
        data: employee
    });
}

async function getEmployeeFullDetailsController(request, reply) {
    const employee = await getEmployeeFullDetails(request.params.id);

    if(!employee) {
        return reply.code(404).send({
            success: false,
            message: "Employee not found"
        })
    }

    return reply.code(200).send({
        success: true,
        message: "Employee returned successfully",
        data: employee
    });
}

module.exports = { 
    createEmployeeController,
    getAllEmployeesController,
    getEmployeeByIdController,
    updateEmployeeController,
    deleteEmployeeController,
    searchEmployeeController,
    filterByDepartmentController,
    withPaginationController,
    getEmployeeWithProfileController,
    getEmployeeWithProjectController,
    getEmployeeFullDetailsController
}