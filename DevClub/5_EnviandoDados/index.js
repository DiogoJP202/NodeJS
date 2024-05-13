import express from "express";

const server = express();
const port = 3000;

server.use(express.json()); // Avisa ao servidor que estamos trabalhando com JSON.

const users = [{
    name: "Diogo",
    age: 19
}];

// - Query params => meusite.com/users?busca=pc_gamer&quantidadeProdutos=50 // Filtrar algo. 
// - Route params => /users/2 // Buscar, deletar ou atualizar algo específico.
// - Request Body => {"name": "Diogo", "idade": 19} // informações sigilosas. 

server.get("/query", (request, response) => {
    const {nome, idade} = request.query
    response.status(200).send(`Você acessou uma rota de query! Queries enviadas: ${nome} e ${idade}.`);
});

server.get("/route/:id", (request, response) => { // Precisamos colocar ":" na rota para o express identificar que querimos usar route params e o nome do identificador.
    console.log(request.params);
    response.status(200).send(`Você acessou uma rota de Route! Identificador enviado: ${request.params.id}`);
});

server.get("/usuarios", (request, response) => {
    response.status(200).send(users);
});

server.post("/usuarios", (request, response) => {
    users.push(request.body);

    response.status(201).send("Informações enviadas com sucesso!");
});

server.delete("/usuarios/:id", (request, response) => { // Passamos o id na url para mandar o que queremos apagar.
    console.log(request.params.id);
    const id = request.params.id;

    users.splice(id, 1);

    return response.send("Usuário deletado com sucesso!");
});


server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}!`);
});