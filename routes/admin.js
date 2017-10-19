const router = require('express').Router();
const {
  createBook,
} = require('../database');

router.get('/', (req, res) => {
  res.render('admin', { title: 'admin' });
});

router.post('/', (req, res) => {
  createBook(req.body.title, req.body.author, req.body.genre, req.body.height, req.body.publisher);
  res.render('admin', { title: 'admin' });
});

module.exports = router;
