const router = require('express').Router();

router.get('/test', (req, res) => {
  res.status(200).json({ message: 'Todo Bien' });
});

router.post('/', (req, res) => {
  res.status(200).json(req.body);
})

module.exports = router;