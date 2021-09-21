const express = require('express');
const router = require('./routes.js');

const app = express();
app.use('/', router);

const { PORT = 3000 } = process.env;

app.listen(3000, () => {
  console.log('App listening on port 3000...');
});