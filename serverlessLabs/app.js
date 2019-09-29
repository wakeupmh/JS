const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
const poetry = require('./routes/poetry');
const personality = require('./routes/personality');
app.use('/poetry', poetry);
app.use('/personality', personality);
module.exports = app;
