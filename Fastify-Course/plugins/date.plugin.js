async function datePluggin(fastify, options) {
    console.log("date pluggin file loaded...");
    fastify.decorate("date", new Date().toDateString());
    console.log("Today date is ",fastify.date);
}

module.exports = datePluggin;