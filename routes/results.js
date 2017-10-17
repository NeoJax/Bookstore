const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('results', { title: 'results' });
});

router.post('/', (req, res) => {
  res.render('results', { title: 'results', books: req.body });
});

module.exports = router;
