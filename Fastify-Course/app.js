const Fastify = require('fastify');
const fastify = Fastify();

const studentRoutes = require('./routes/student.routes');
const employeeRoutes = require('./routes/employee.routes');
const loggerPluggin = require("./plugins/logger.plugin");
const appInfoPluggin = require('./plugins/app-info.plugin');
const programmerPlugin = require("./plugins/programmer.plugin");
const datePluggin = require("./plugins/date.plugin");

fastify.addHook("onRequest", async (request, reply) => {

    // DELETE API Can't Work
    if(request.method === 'DELETE') {
        return reply.code(403).send({
            message: "DELETE Not Allowed"
        });
    }

    console.log("\nIncoming Request coming...");
    console.log(`Request method is : ${request.method}`);
    console.log(`Request URL    is : ${request.url}`);
    console.log(`Request ip     is : ${request.ip}`);
    console.log(`Request query  is : ${request.query}`);
    console.log(`Request params is : ${request.params.id}`);
})

// PLUGINS
fastify.register(loggerPluggin, {
    company: "Amadis Technology",
    location: "Nagercoil"
});
fastify.register(appInfoPluggin);
fastify.register(programmerPlugin);
fastify.register(datePluggin);

// ROUTES
fastify.register(studentRoutes, {prefix: "/students"});
fastify.register(employeeRoutes, {prefix: "/employees"});
fastify.register(require("@fastify/jwt"), { secret: "your-secret-key" });
fastify.register(require("@fastify/cors"));
fastify.register(require("@fastify/swagger"));

fastify.addHook("onRequest", async(request, reply) => {
    console.log("Global Hook Executed Successfully");
})

// fastify.addHook("preValidation", async(request, reply) => {
//     console.log("Global Pre Validation Executed...");
    
//     if(!request.body.age){
//         request.body.age = 10;
//     }

//     request.body.name = request.body.name.trim();
// })

fastify.addHook("preHandler", async(request, reply) => {
    console.log("Global Pre Handler Executed...");
})

fastify.addHook("onSend", async(request, reply, payload) => {
    console.log("Global onSend Executed...");
    console.log("Response statuscode : ",reply.statusCode);
    reply.header("Training", "Fastify Learning");
    const response = JSON.parse(payload);
    return JSON.stringify({
        success: true,
        response: response
    });
})

fastify.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.error("Fastify failed to start:", err.message);
        process.exit(1);
    }
});