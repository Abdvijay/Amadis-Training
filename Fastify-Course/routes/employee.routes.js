async function employeeRoutes(fastify, options) {
    fastify.get('/all-employees', async() => {
        return {message: "Employees displayed successfully"}
    });
}

module.exports = employeeRoutes;