const router = require('express').Router();
const {
  createUser,
} = require('../database');

router.get('/', (req, res) => {
  res.render('signup', { title: 'signup' });
});

router.post('/', (req, res) => {
  createUser(req.body.username, req.body.password);
  res.render('signup', { title: 'signup' });
});

module.exports = router;
