const router = require('express').Router();
const { users } = require('./db.js');

router.get('/users/:id', (req, res) => { 
  if (!users[req.params.id]) {
    res.send(`This user doesn't exist`);
    return;
  }
  const { name, age } = users[req.params.id];
  res.send(`User ${name}, ${age} years old`);
});

module.exports = router;