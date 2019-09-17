const router = require('express').Router();
const {
  createBook,
} = require('../db/database');

router.get('/', (req, res) => {
  console.log(req.session.access);
  if (req.session.access === 'user') {
    res.render('user', {
      title: 'user',
      check: req.session.check,
      user: req.session.username,
      access: req.session.access,
    });
  } else if (req.session.access === 'admin' || 'superadmin') {
    res.render('admin', {
      title: 'admin',
      check: req.session.check,
      user: req.session.username,
      access: req.session.access,
    });
  } else {
    res.render('login', {
      title: 'login',
      check: req.session.check,
      user: req.session.username,
      access: req.session.access,
    });
  }
});

router.post('/', (req, res) => {
  createBook(req.body.title, req.body.author, req.body.genre, req.body.height, req.body.publisher);
  res.render('admin', {
    title: 'admin',
    check: req.session.check,
    user: req.session.username,
    access: req.session.access,
  });
});

module.exports = router;
