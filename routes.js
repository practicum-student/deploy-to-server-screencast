const router = require('express').Router();
const { users } = require('./db.js');

router.get('/users', (req, res) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    res.status(400).send('Authorization Required\n');
  } else {
    res.send(users);
  }
});

router.get('/users/:id', (req, res) => {
  if (!users[req.params.id]) {
    res.send(`This user doesn't exist`);
    return;
  }
  const { name, age } = users[req.params.id];
  res.send(`User ${name}, ${age} years old`);
});

module.exports = router;
