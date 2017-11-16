const router = require('express').Router();
const {
  createBook,
} = require('../database');

router.get('/', (req, res) => {
  console.log(req.session.access);
  res.render('admin', {
    title: 'admin',
    check: req.session.check,
    user: req.session.username,
    access: req.session.access,
  });
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
