const router = require('express').Router();
const {
  grabDetails,
} = require('../database');

router.get('/admin', (req, res) => {
  res.render('index', { title: 'index' });
});

router.post('/', (req, res) => {
  grabDetails(req.body.text).then((data) => {
    console.log(data);
    res.render('details', { title: 'details', book: data });
  });
});

module.exports = router;
