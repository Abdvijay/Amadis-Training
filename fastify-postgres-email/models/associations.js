const Employee = require("./employee.model");
const Department = require("./department.model");
const EmployeeProfile = require("./employee-profile.model");
const Project = require("./project.model");

Employee.belongsTo(Department, {
    foreignKey: "departmentId",
    as: "department",
});

Employee.hasOne(EmployeeProfile, {
    foreignKey: "employeeId",
    as: "profile"
});

Department.hasMany(Employee, {
    foreignKey: "departmentId",
    as: "employees"
})

Employee.belongsToMany(Project, {
    through: "employee_projects",
    foreignKey: "employeeId",
    otherKey: "projectId",
    as: "projects",
})

Project.belongsToMany(Employee, {
    through: "employee_projects",
    foreignKey: "projectId",
    otherKey: "employeeId",
    as: "employees"
});