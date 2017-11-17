const router = require('express').Router();
const {
  grabDetails,
  createHistory,
} = require('../db/database');

router.post('/', (req, res) => {
  grabDetails(req.body.text).then((data) => {
    if (data === false) {
      console.log('no such book');
    }
    createHistory(req.session.username, 'title', req.body.text).then(() => {
      res.render('details', {
        title: 'details',
        book: data,
        check: req.session.check,
        user: req.session.username,
        access: req.session.access,
      });
    });
  });
});

module.exports = router;
