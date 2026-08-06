const Fastify = require('fastify');
const app = Fastify({ logger: true});

const url = '/';
app.get(url, async(request, res) => {
    // console.log(request.headers);
    // console.log(request.ip);
    // res.status(200).send({
    //     message: "Project runned successfully"
    // });

    // res.send({
    //     message: "Project runned successfully"
    // });

    // res.code(200).send({
    //     message: "Project runned successfully"
    // });

    // res.header("company", "training");

    return {
        message: "Project runned successfully"
    }
});

// GET API
app.get('/users', async() => {
    return [
        { id: 1, name: "Vijay"},
        { id: 2, name: "Swathi"}
    ]
});

// GET API USING REQUEST PARAMS
// localhost:3000/users/10
app.get('/users/:id', async(request, reply) => {
    const {id} = request.params;
    return {
        message: "Data fetched successfully using params",
        studentId: id
    }
})

// GET API - REQUEST QUERY
// localhost:3000/users?page=1&limit=10
app.get('/users/', async(request, reply) => {
    const {page, limit} = request.query;
    const data = {
        page: page,
        limit: limit
    }

    return {
        message: "Data fetched successfully using query",
        data: data
    }
})

// POST API - REQUEST BODY
app.post('/users', async(request, reply) => {
    const data = request.body;
    return {
        message: "Data fetched successfully",
        data: [data]
    }
});

// PUT API
app.put('/users/:id', async(request, reply) => {
    reply.status(200).send({
        message: "Data updated successfully",
    })
});

// DELETE API
app.delete('/users/:id', async(request, reply) => {
    return {
        message: "Deleted successfully"
    }
});

app.listen({port: 3000});