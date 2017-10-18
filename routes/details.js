const router = require('express').Router();
const {
  grabDetails,
} = require('../database');

router.post('/', (req, res) => {
  grabDetails(req.body.text).then((data) => {
    console.log(data);
    res.render('details', { title: 'details', book: data });
  });
});

module.exports = router;
