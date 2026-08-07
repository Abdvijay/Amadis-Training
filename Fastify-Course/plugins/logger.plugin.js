async function loggerPluggin(fastify, options){
    console.log("Loggerplugin file loaded...");
    console.log("Company Name : ",options.company);
    console.log("Company Location : ",options.location);
}

module.exports = loggerPluggin;