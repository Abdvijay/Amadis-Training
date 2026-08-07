async function appInfoPlugin(fastify, options) {
    console.log("appInfoPluggin file loaded...");
    fastify.decorate("appName", "Fastify Learning API");
    fastify.decorate("welcome", ()=> {return "Welcome you all"});
    console.log("Application Name : ",fastify.appName);
    console.log(fastify.welcome());
}

module.exports = appInfoPlugin;