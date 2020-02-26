'use strict'
const app = require('../FitFood.Api/bin/express');
const variables = require('../FitFood.Api/bin/configuration/variables');

app.listen(variables.Api.port, ()=>{
    console.info(`API inicializada na porta ${variables.Api.port}`);
});
