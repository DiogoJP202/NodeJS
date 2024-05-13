import express from "express";
import mongoose from "mongoose"; //Biblioteca que facilita a utilização do mongoDB.

import User from "./models/Users.js"; // Importando o Schema.

const server = express();
const port = 3000;

server.use(express.json()); // Faz validações, otimizações e conversões nas respostas que nosso servidor recebe com Middleware.

server.get("/users", async (request, response) => {
    const users = await User.find(); // Retorna a base de dados.

    return response.status(200).json(users); // Retorna como resposta a base de dados e o status http 200.
});

server.post("/users", async (request, response) => {
    const user = request.body;

    const newUser = await User.create(user); // Cria um usuário no banco de dados.

    return response.status(201).json(newUser); // Retorna como resposta o usuário criado.
});

// mongoose utiliza uma promisse para conectar com o banco dados
mongoose
    .connect("mongodb+srv://diogojp202:hlMgAbqpOw30Wpa9@diogo.jaweiuj.mongodb.net/?retryWrites=true&w=majority&appName=Diogo")
    .then(() => console.log("Conectado!"))
    .catch(() => console.log("Erro!"));

server.listen(port, () => console.log(`Servidor iniciado, na porta ${port}!`)); // Iniciando servidor.