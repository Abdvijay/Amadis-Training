const createStudentSchema = {
  body: {
    type: "object",
    required: ["name", "age", "department"],
    properties: {
      name: { type: "string", minLength: 3},
      age: {type: "number"},
      department: {type: "string"},
    },
  },
};

module.exports = {
  createStudentSchema,
};