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
  console.log(req.body);
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    grabUser(req.body.username).then((data) => {
      console.log('other lol');
      if (!data.username) {
        createUser(req.body.username, hash);
        console.log('that one lol');
        res.status('300');
        req.session.username = req.body.username;
        req.session.access = 'user';
        req.session.check = true;
        res.redirect('/');
      } else {
        res.render('signup', {
          title: 'signup',
          check: req.session.check,
          user: req.session.username,
          access: req.session.access,
        });
      }
    });
  });
});

module.exports = router;
