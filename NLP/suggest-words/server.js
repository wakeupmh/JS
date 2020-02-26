const express = require('express')
const bodyParser = require('body-parser');
const app = express();
let routes = require('./routes/routes');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: '10mb'}));

routes.assignRoutes(app);

app.listen(5000);