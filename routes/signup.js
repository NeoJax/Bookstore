const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('signup', { title: 'signup' });
});

module.exports = router;
