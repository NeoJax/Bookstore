const router = require('express').Router();
const {
  grabBook,
  createHistory,
} = require('../db/database');

router.post('/', (req, res) => {
  grabBook(req.body.type, req.body.text).then((data) => {
    if (data === false) {
      console.log('no such book');
    }
    createHistory(req.session.username, req.body.type, req.body.text).then(() => {
      res.render('results', {
        title: 'results',
        books: data,
        check: req.session.check,
        user: req.session.username,
        access: req.session.access,
      });
    });
  });
});

module.exports = router;
