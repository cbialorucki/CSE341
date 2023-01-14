const router = require('express').Router();
router.use('/contacts', require('./contacts'))

router.get('/', (req, res) => {
  res.send('Aubrey Bialorucki');
});
router.get('/test', (req, res) => {
  res.send('Bonnie Bialorucki');
});
router.get('/test2', (req, res) => {
  res.send('Carl Bialorucki');
});

module.exports = router;
