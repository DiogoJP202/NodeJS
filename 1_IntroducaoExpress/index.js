const express = require("express"); // A função require nos retorna uma biblioteca na pasta node_modules. 
console.log(express); // express nos auxilia a criar um servidor.

const server = express(); // Armazenamos o express ativado na variável server para podemos ter acesso a ele a qualquer momento.

// Embora nosso servidor tenha apenas uma porta, podem haver várias rotas no nosso server que podem servir para propósitos e funções diferentes. Exemplo: cadastro.com.br/funcionarios, cadastro.com.br/clientes, cadastro.com.br/administradores. 

// Também é possivel haver vários tipos de rotas, como get, post ou delete e cada uma delas servem um propósito diferente; 

server.get("/abacate", (request, response) => { // Cria uma rota http utilizado o método get.
    // request -> é o valor que nos é enviado.
    // Ao acessar uma rota, podemos enviar uma variável para o "request", basta adicionar ?(query/consulta)+nomeVariável=valorVariável
    console.log(request.query.secreto); 


    // response -> é o valor que nós retornamos.
    return response.send("Abacate é verde!"); // Envia uma resposta para o cliente.
});

server.get("/morango", (request, response) => {
    return response.send("morango é vermelho!");
});

server.get("/uva", (request, response) => {
    return response.send("uva é roxa!");
});


server.listen(3000); // Faz o servidor ficar "escutando" a porta "3000" aguardando por dados ou requisições.