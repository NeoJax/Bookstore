const router = require('express').Router();
const {
  grabAllUsers,
} = require('../db/database');

router.get('/', (req, res) => {
  grabAllUsers().then((data) => {
    res.render('user', {
      title: 'user',
      users: data,
      check: req.session.check,
      user: req.session.username,
      access: req.session.access,
    });
  });
});

module.exports = router;
