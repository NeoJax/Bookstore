const router = require('express').Router();
const {
  checkUser,
} = require('../public/script');

router.get('/', (req, res) => {
  if (!req.session.check) {
    req.session.check = false;
    req.session.access = 'visitor';
  }
  res.render('login', {
    title: 'login',
    check: req.session.check,
    user: req.session.username,
    access: req.session.access,
  });
});

router.post('/', (req, res) => {
  checkUser(req.body.username, req.body.password).then((data) => {
    if (data === false) {
      req.session.check = false;
      req.session.access = 'visitor';
    } else {
      req.session.username = data.username;
      req.session.access = data.access;
      req.session.check = data.check;
    }
    res.render('login', {
      title: 'login',
      check: req.session.check,
      user: req.session.username,
      access: req.session.access,
    });
  });
});

module.exports = router;
