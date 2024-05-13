const api = axios.create({baseURL: "http://localhost:3000"}); // acessa a url do servidor.
const form = document.querySelector("form");

function listaUsuario(){
    api.get("/usuarios")
    .then(response => {
        const ul = document.querySelector(".result");
        ul.innerHTML = "";

        for(let objeto of response.data){
            const li = `<li> Nome: ${objeto.nome} <br> Senha:${objeto.senha} <br>`;
            ul.innerHTML += li;
        }
    })
    .catch(erro => console.log(erro));
};

function newUser(inputs){
    let user = {
        nome: inputs[0].value,
        senha: inputs[1].value
    }


    api.post("/usuarios", user)
    .then(response => {
        console.log(response)
        listaUsuario();
    })
    .catch(error => console.log(error));
};

listaUsuario();

form.addEventListener("submit", event => {
    event.preventDefault();

    const inputs = document.querySelectorAll("input[type=text]");
    newUser(inputs);
});