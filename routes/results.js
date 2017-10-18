const router = require('express').Router();
const {
  grabBook,
} = require('../database');

router.post('/', (req, res) => {
  grabBook(req.body.type, req.body.text).then((data) => {
    console.log(data);
    res.render('results', { title: 'results', books: data });
  });
});

module.exports = router;
