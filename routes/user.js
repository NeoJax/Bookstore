const router = require('express').Router();

const {
  grabAllUsers,
} = require('../database');

router.get('/', (req, res) => {
  grabAllUsers().then((data) => {
    res.render('user', { title: 'user', users: data });
  });
});

module.exports = router;
