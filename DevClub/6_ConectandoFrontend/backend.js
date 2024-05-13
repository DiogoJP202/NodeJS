import express from "express";
import cors from "cors";

const server = express();
const port = 3000;
const usuarios = [
    {
        nome: "Diogo",
        senha: "12345A@Abs!d1"
    },
    {
        nome: "Felipe",
        senha: "ILoveFurryLove"
    }
];

server.use(express.json()); // Avisa ao nosso servidor que trabalharemos com requisições no formato JSON.


// Configuração do CORS
server.use(cors({
    origin: "*", // Origem permitida
    methods: 'GET' // Métodos HTTP permitidos
}));
  

server.get("/usuarios", (request, response) => {
    return response.status(200).json(usuarios);
});

server.post("/usuarios", (request, response) => {
    const novoUsuario = request.body;
    console.log(novoUsuario);

    usuarios.push(novoUsuario);

    return response.status(201).json(novoUsuario);
});

server.listen(port, () => console.log(`Servidor iniciado na porta ${port}.`));