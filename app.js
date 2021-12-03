const express = require('express');
const router = require('./routes.js');

const app = express();
app.use('/', router);

const { PORT = 3000 } = process.env;

app.use((req, res) => {
  res.status(404).send('Requested resource not found');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${3000}...`);
});
