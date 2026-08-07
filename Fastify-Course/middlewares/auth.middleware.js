async function verifyUser(request, reply) {
    const role = request.body.role;
    if(role !== "admin"){
        return reply.code(403).send({
            message: "Access Denied"
        })
    }
}

module.exports = {
    verifyUser
};