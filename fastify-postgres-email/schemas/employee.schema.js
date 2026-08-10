const createEmployeeSchema = {
    body: {
        type: "object",

        required: ["name", "email", "department"],

        properties: {
        name: {
            type: "string",
            minLength: 3,
        },

        email: {
            type: "string",
            format: "email",
        },

        department: {
            type: "string",
            minLength: 2,
        },
        },
    },
};

module.exports = {
    createEmployeeSchema,
};