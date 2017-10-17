const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('details', { title: 'details' });
});

module.exports = router;
