var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.render('restaurants/index');
});

router.get('/show', (req, res) => {
   res.render('restaurants/show');
 });

module.exports = router;
