const router = require('express').Router();
router.use('/contacts', require('./contacts'))

router.get('/', (req, res) => {
  res.send('Aubrey Bialorucki');
  // #swagger.description = 'Returns Aubrey Bialoruckis name.'
});
router.get('/test', (req, res) => {
  res.send('Bonnie Bialorucki');
  // #swagger.description = 'Returns Bonnie Bialoruckis name.'
});
router.get('/test2', (req, res) => {
  res.send('Carl Bialorucki');
  // #swagger.description = 'Returns Carl Bialoruckis name.'
});

module.exports = router;
