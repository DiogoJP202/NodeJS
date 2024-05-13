import express from "express"; // Desse jeito, podemos chamar o express usando o comando "import".

const app = express(); 

app.use(express.json()); // Avisa a nossa aplicação que os dados serão enviados em formato JSON

const users = [];

app.get("/users", (request, response) => {
    // Retorna a resposa e converte ela para o formato json.
    // "".json()"" é um método de "response" que converte ela para json.
    console.log(request.query);
    return response.json({users}); 
});

// Podemos definir as rotas com mesmos nomes, porém somente quando usar métodos diferentes.
app.post("/users", (request, response) => {
    const {name, password} = request.body;
    
    users.push({name, password});
    
    return response.json({Dados: "Dados enviados com sucesso!", name, password});
}); 

app.listen(3000);