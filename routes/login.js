const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('login', { title: 'login' });
});

module.exports = router;
