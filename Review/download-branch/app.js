const express = require('express');
const app = express();
const http = require('http').Server(app);
app.use(`/`, require('./routes'));

let server = http.listen(3000, () => {
  console.log('server is running on port', server.address().port);
});
