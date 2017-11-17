const router = require('express').Router();
const bcrypt = require('bcrypt');
const {
  createUser,
  grabUser,
} = require('../db/database');

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
    grabUser(req.body.username).then((data) => {
      if (!data.username) {
        createUser(req.body.username, hash);
        res.redirect('/', {
          title: 'index',
          check: req.session.check,
          user: req.session.username,
          access: req.session.access,
        });
      }
      res.render('signup', {
        title: 'signup',
        check: req.session.check,
        user: req.session.username,
        access: req.session.access,
      });
    });
  });
});

module.exports = router;
