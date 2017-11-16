const router = require('express').Router();
const {
  updateBook,
  deleteBook,
  grabAllBooks,
} = require('../database');

router.get('/', (req, res) => {
  let { page } = req.query;
  if (page === undefined) {
    page = 1;
  }
  page = parseInt(page, 0);
  const limit = 10;
  const offset = limit * (page - 1);
  grabAllBooks(limit, offset).then((data) => {
    res.render('index', {
      title: 'index',
      books: data,
      check: req.session.check,
      user: req.session.username,
      access: req.session.access,
      page,
      nextPage: page + 1,
      previousPage: page - 1,
    });
  });
});

router.post('/change', (req, res) => {
  updateBook(req.body.oldtitle, req.body.newtitle, req.body.newauthor, req.body.newgenre);
  res.render('admin', { title: 'admin' });
});

router.post('/delete', (req, res) => {
  deleteBook(req.body.title);
  res.render('admin', { title: 'admin' });
});

router.post('/logout', (req, res) => {
  req.session.username = 'guest';
  req.session.access = 'visitor';
  req.session.check = false;
  res.redirect('/login');
});

module.exports = router;
