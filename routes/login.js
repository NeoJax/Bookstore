/*
*
* Start working on redirecting and forcing users to log in first. Also make log out.
*
*/

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
    let check = '';
    if (data === false) {
      req.session.username = 'guest';
      req.session.access = 'visitor';
      req.session.check = false;
      res.render('login', {
        title: 'login',
        check: req.session.check,
        user: req.session.username,
        access: req.session.access,
        error: check,
      });
    } else if (data === 'Wrong Information') {
      res.status(400);
      check = 'There was an error with your username/password. Please try again';
      res.render('login', {
        title: 'login',
        check: req.session.check,
        user: req.session.username,
        access: req.session.access,
        error: check,
      });
    } else {
      req.session.username = data.username;
      req.session.access = data.access;
      req.session.check = data.check;
      res.redirect('/');
    }
  });
});

module.exports = router;
