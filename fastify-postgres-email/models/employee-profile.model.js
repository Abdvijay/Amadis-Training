const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const EmployeeProfile = sequelize.define(
    "EmployeeProfile",

    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        employeeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },

        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        designation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },

    {
        tableName: "employee_profiles",
    },
);

module.exports = EmployeeProfile;