async function programmerPlugin(fastify, options) {
    fastify.decorate("programmer", {
        name: "Vijay",
        age: 25
    });
    console.log("Programmer Name : ", fastify.programmer.name);
}

module.exports = programmerPlugin;