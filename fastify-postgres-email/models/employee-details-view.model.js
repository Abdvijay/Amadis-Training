const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const EmployeeDetailsView = sequelize.define(
    "EmployeeDetailsView",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },

        name: {
            type: DataTypes.STRING,
        },

        email: {
            type: DataTypes.STRING,
        },

        departmentId: {
            type: DataTypes.INTEGER,
        },

        department: {
            type: DataTypes.STRING,
        },
    },

    {
        tableName: "employee_details_view",
        timestamps: false,
        freezeTableName: true,
    },
);

module.exports = EmployeeDetailsView;