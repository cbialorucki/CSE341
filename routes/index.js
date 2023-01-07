const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Aubrey Bialorucki');
});

module.exports = routes;
