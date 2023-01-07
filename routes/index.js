const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Aubrey Bialorucki');
});
routes.get('/test', (req, res) => {
  res.send('Bonnie Bialorucki');
});
routes.get('/test2', (req, res) => {
  res.send('Carl Bialorucki');
});

module.exports = routes;
