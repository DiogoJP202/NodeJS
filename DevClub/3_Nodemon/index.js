import express from "express"; // Utilizando uma biblioteca.

const server = express(); 
const port = 3000;

server.get("/mensagemHtml", (request, response) => response.send("Mensagem: Olá mundo!"));

server.get("/mensagemJSON", (request, response) => response.json({mensagem: "Olá mundo!"}));

server.listen(port, () => console.log(`Servidor iniciado, na porta ${port}!`)); // Iniciando servidor.