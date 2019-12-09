const routes = require('express').Router();
const { user } = require('./app/models');
user.create({ 
    name: "Dylan",
    email: "dylan@gmail.com",
    password_hash: "sd3228djs"
});

module.exports = routes;
