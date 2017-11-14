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
  const limit = 10;
  const offset = limit * (page - 1);
  grabAllBooks(limit, offset).then((data) => {
    console.log(data);
    res.render('index', { title: 'index', books: data });
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

module.exports = router;
