/* NOTE LOOK AT THE FUCKING NOT FOUND SHIT IM TIRED AND DONT WANT TO DO IT also sorry for caps */

const router = require('express').Router();
const {
  updateBook,
  deleteBook,
  grabAllBooks,
} = require('../db/database');

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
      bookSize: data.length,
      check: req.session.check,
      user: req.session.username,
      access: req.session.access,
      page,
    });
  });
});

router.post('/change', (req, res) => {
  updateBook(req.body.oldtitle, req.body.newtitle, req.body.newauthor, req.body.newgenre);
  res.render('admin', {
    title: 'admin',
    check: req.session.check,
    user: req.session.username,
    access: req.session.access,
  });
});

router.post('/delete', (req, res) => {
  deleteBook(req.body.title);
  res.render('admin', {
    title: 'admin',
    check: req.session.check,
    user: req.session.username,
    access: req.session.access,
  });
});

router.post('/logout', (req, res) => {
  req.session.username = 'guest';
  req.session.access = 'visitor';
  req.session.check = false;
  res.redirect('/login');
});

router.post('/lookup', (req, res) => {
  console.log(req.body);
  const newObject = JSON.parse(req.body.text);
  console.log(newObject.username);
  res.render('lookup', {
    title: 'lookup',
    lookUser: newObject.username,
    lookPass: newObject.password,
    lookAccess: newObject.access,
    check: req.session.check,
    user: req.session.username,
    access: req.session.access,
  });
});

module.exports = router;
