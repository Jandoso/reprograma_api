const express = require('express');
const app = express();

//Rotas
const index = require('./routes/index');
const alunas = require('./routes/alunasRoute')

app.use("/", index);
app.use("/alunas", alunas);

module.exports = app;