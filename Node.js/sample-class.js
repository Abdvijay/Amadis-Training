const Fastify = require("fastify");

const app = Fastify({ logger: true});

// http://127.0.0.1:3000/

app.get("/", async() => {

    return {
        message: "Fastify Home"
    }

});

// http://127.0.0.1:3000/users/:5

app.get("/users/:id", async(request) => {

    return {
        id: request.params.id
    }

});

// http://127.0.0.1:3000/products?category=laptop&brand=HP

app.get("/products", async(req) => {

    return req.query

});

// Inside body - json format
// {
//     "name": "Vijay",
//     "age": 25
// }

app.post("/users", async(request, reply) => {

    reply.code(201).send({
        message: "User created successfully",
        data: request.body
    });

})

app.listen({ port: 3000});