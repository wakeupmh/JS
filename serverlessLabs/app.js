const express = require('express');
const app = express();
const router = express.Router();
//Routes
const poetry = require('./routes/poetry');
app.use('/poetry', poetry);

module.exports = app;
