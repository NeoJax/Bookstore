const router = require('express').Router();
const {
  checkUser,
} = require('../public/scripts');

router.get('/', (req, res) => {
  res.render('login', { title: 'login' });
});

router.post('/', (req, res) => {
  checkUser(req.body.username, req.body.password);
  res.render('login', { title: 'login', blah: true });
});

module.exports = router;
