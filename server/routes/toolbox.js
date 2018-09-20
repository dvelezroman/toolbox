const router = require('express').Router();

router.get('/test', (req, res) => {
  res.status(200).send('TEST');
});

router.post('/', (req, res) => {
  res.status(201).json(req.body);
})

module.exports = router;