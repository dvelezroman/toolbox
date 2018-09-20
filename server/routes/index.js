const router = require('express').Router();


router.use('/toolbox', require('./toolbox'));

router.use(function (req, res) {
  res.status(404).end();
});

module.exports = router;
