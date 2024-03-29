const express = require("express");
const cors = require("cors");

// Iniciando o App
const app = express();
app.use(express.json());

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'POST');
    app.use(cors());
    next();
});

// Rotas
app.use('/api', require("./src/routes"));

app.listen(3890);
