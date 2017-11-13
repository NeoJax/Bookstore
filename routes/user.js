const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('user', { title: 'user' });
});

module.exports = router;
