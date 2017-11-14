const router = require('express').Router();
const bcrypt = require('bcrypt');
const {
  createUser,
} = require('../database');

router.get('/', (req, res) => {
  res.render('signup', {
    title: 'signup',
    check: req.session.check,
    user: req.session.username,
    access: req.session.access,
  });
});

router.post('/', (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    createUser(req.body.username, hash);
  });
  res.render('signup', { title: 'signup' });
});

module.exports = router;
