const nodemailer = require("nodemailer");
require("dotenv").config();

async function verifyEmailConnection() {
    try {
        await transporter.verify();
        console.log("Gmail SMTP connection successful");
    } catch (error) {
        console.error("Gmail SMTP connection failed:", error.message);
    }
}

// Nodemailer using testAccount
// async function createEmailTransporter() {
//     // const testAccount = await nodemailer.createTestAccount();
//     const transporter = nodemailer.createTransport({
//         host: testAccount.smtp.host,
//         port: testAccount.smtp.port,
//         secure: testAccount.smtp.secure,
//         auth: {
//             user: testAccount.user,
//             pass: testAccount.pass,
//         },
//     });

//     return {
//         transporter,
//         testAccount,
//     };
// }

// async function sendWelcomeEmailService(to, name) {
//     const { transporter, testAccount } = await createEmailTransporter();
//     const info = await transporter.sendMail({
//         from: `"Fastify Training" <${testAccount.user}>`,
//         to: to,
//         subject: "Welcome to Fastify Training",
//         text: `Hello ${name}, welcome to our application!`,
//         html: `
//             <h2>Hello ${name}!</h2>
//             <p>Welcome to our Fastify application.</p>
//             <p>Your registration was successful.</p>
//         `,
//     });

//     // const previewUrl = nodemailer.getTestMessageUrl(info);
//     console.log("Email sent successfully");
//     console.log("Message ID:", info.messageId);
//     console.log("Preview URL:", previewUrl);
//     return {
//         messageId: info.messageId,
//         previewUrl,
//     };
// }

// Nodemailer using from,to our own address
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    }
});

async function sendWelcomeEmailService(to, name, department) {
    const info = await transporter.sendMail({
        from: `"Fastify Training" <${process.env.MAIL_USER}>`,
        to: to,
        subject: "Welcome to Our Company",
        text: `
            Hello ${name},
            Welcome to our company.
            Your employee account has been created successfully.

            Name: ${name}
            Email: ${to}
            Department: ${department}

            We are happy to have you as part of our team.

            Regards,
            Fastify Training Team
        `,
        html: `
            <!doctype html>
            <html>
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Welcome Email</title>
                </head>

                <body style="margin: 0; padding: 0; background-color: #f4f6f8; font-family: Arial, Helvetica, sans-serif">
                    <div
                        style="
                            max-width: 600px;
                            margin: 40px auto;
                            background-color: #ffffff;
                            border-radius: 10px;
                            overflow: hidden;
                        "
                    >
                        <!-- Header -->

                        <div style="background-color: #2563eb; padding: 30px; text-align: center">
                            <h1 style="color: #ffffff; margin: 0; font-size: 28px">Welcome to Our Company!</h1>
                        </div>

                        <!-- Main Content -->

                        <div style="padding: 30px">
                            <h2 style="color: #222222; margin-top: 0">Hello ${name},</h2>
                            <p style="color: #555555; font-size: 16px; line-height: 1.6">
                                Welcome to our company! We are happy to have you as part of our team.
                            </p>

                            <!-- Employee Details -->

                            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 25px 0">
                                <h3 style="color: #333333; margin-top: 0">Employee Details</h3>
                                <p style="color: #555555">
                                    <strong>Name:</strong>
                                    ${name}
                                </p>

                                <p style="color: #555555">
                                    <strong>Email:</strong>
                                    ${to}
                                </p>

                                <p style="color: #555555">
                                    <strong>Department:</strong>
                                    ${department}
                                </p>
                            </div>

                            <p style="color: #555555; font-size: 16px; line-height: 1.6">
                                Your employee registration has been completed successfully.
                            </p>

                            <!-- Button -->

                            <div style="text-align: center; margin: 30px 0">
                                <a
                                    href="#"
                                    style="
                                        display: inline-block;
                                        background-color: #2563eb;
                                        color: #ffffff;
                                        padding: 12px 25px;
                                        text-decoration: none;
                                        border-radius: 6px;
                                        font-weight: bold;
                                    "
                                >
                                    Welcome to the Team
                                </a>
                            </div>
                        </div>

                        <!-- Footer -->

                        <div style="background-color: #f1f5f9; padding: 20px; text-align: center">
                            <p style="margin: 0; color: #777777; font-size: 13px">© 2026 Fastify Training Team</p>
                            <p style="margin: 8px 0 0; color: #999999; font-size: 12px">
                                This is an automated email. Please do not reply.
                            </p>
                        </div>
                    </div>
                </body>
            </html>
        `
    });

    console.log("Email sent successfully");
    console.log("Message ID : ",info.messageId);
    return info;
}

module.exports = {
    sendWelcomeEmailService,
    verifyEmailConnection
};