const Fastify = require("fastify");
const fastify = Fastify({logger: true});

// CONFIGS
const {connectDatabase, sequelize} = require("./config/database");
require("./models/associations");

// ROUTES
const emailRoutes = require('./routes/email.routes');
const employeeRoutes = require("./routes/employee.routes");
const departmentRoutes = require("./routes/department.routes");
const employeeDetailedViewRoutes = require("./routes/employee-details-view.routes");

// SERVICES
const {verifyEmailConnection} = require("./services/email.service");

// REGISTERED API
fastify.register(emailRoutes, {prefix: "/email"});
fastify.register(employeeRoutes, {prefix: "/employees"});
fastify.get("/", async () => {
    return {
        message: "Fastify running successfully"
    }
});
fastify.register(departmentRoutes, {prefix: "/departments"});
fastify.register(employeeDetailedViewRoutes, {prefix: "/views"});

// ERROR HANDLED IN GLOBAL
fastify.setErrorHandler((error, request, reply) => {
    request.log.error(error);

    // Duplicate email
    if (error.name === "SequelizeUniqueConstraintError") {
        return reply.code(409).send({
            success: false,
            message: "Email already exists",
        });
    }

    // Sequelize validation error
    if (error.name === "SequelizeValidationError") {
        return reply.code(400).send({
            success: false,
            message: "Invalid employee data",
        });
    }

    // Fastify schema validation error
    if (error.validation) {
        return reply.code(400).send({
            success: false,
            message: "Invalid request data",
            errors: error.validation,
        });
    }

    // Unknown / unexpected error
    return reply.code(500).send({
        success: false,
        message: "Internal server error",
    });
});

// STARTING SERVER WITH DB CONNECTION
const startServer = async () => {
    try {
        await connectDatabase();
        await sequelize.sync();
        console.log(`Database tables synchronized`);
        await fastify.listen({
            port: 3000,
        });
        console.log(`Server running on port 3000`);
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
};

startServer();
verifyEmailConnection();