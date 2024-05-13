// Para armazenar os dados dentro do moongose, precisamos de uma estrutura para esses dados e essa estrutura é chamada de Schema.
// Normamente, nossos Schemas ficam em uma pasta chamada "models".

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { // Nome do nosso campo.
        // Parâmetros dos campos: 
        type: String,  // Tipo de dado do campo.
        required: true // Se ele é obrigatório.
    }, 
    password: {
        type: String,
        required: true
    }, 
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

export default mongoose.model("User", userSchema); // Dando um nome e exportando o nosso Schema.