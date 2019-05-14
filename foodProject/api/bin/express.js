const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors')
const variables = require('../bin/configuration/variables');
//routers
const categoryRouter = require('../routes/category-router');
const productRouter = require('../routes/product-router');
const userRouter = require('../routes/user-router');
//invocando a API do express
const app = express();

app.use(cors());
//configuração de parse JSON
app.use(bodyParser.json({limit:'10mb'}));
app.use(bodyParser.urlencoded({limit:'10mb', extended:false}));

//configurando uma conexao com o db
mongoose.connect(variables.Database.connection, {useNewUrlParser:true});

//configurando rotas
app.use('/api/categoria', categoryRouter);
app.use('/api/produto', productRouter);
app.use('/api/usuario', userRouter);

//exportando API
module.exports = app;
