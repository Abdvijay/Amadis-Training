const { Sequelize } = require("sequelize");
require("dotenv").config();
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "postgres",
        logging: console.log,
    }
);

async function connectDatabase() {
    try {
        await sequelize.authenticate();
        console.log("PostgreSQL connected successfully");
    } catch (error) {
        console.error("PostgreSQL connection failed:", error);
        process.exit(1);
    }
}

module.exports = {
    sequelize,
    connectDatabase,
};