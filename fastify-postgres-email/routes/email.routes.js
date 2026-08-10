const {sendWelcomeEmailController} = require("../controller/email.controller");

async function emailRoutes(fastify, options) {
    fastify.post("/send-email", sendWelcomeEmailController);
}

module.exports = emailRoutes;