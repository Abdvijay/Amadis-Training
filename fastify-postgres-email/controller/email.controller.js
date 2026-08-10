const {sendWelcomeEmailService} = require("../services/email.service")
;
async function sendWelcomeEmailController(request, reply) {
    const { name, email } = request.body;
    const result = await sendWelcomeEmailService(email, name);
    return reply.code(200).send({
        success: true,
        message: "Email sent successfully",
        previewUrl: result.previewUrl,
    });
}

module.exports = {
    sendWelcomeEmailController
}