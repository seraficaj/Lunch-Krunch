var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.render('restaurants/index');
});

router.get('/show', (req, res) => {
   res.render('restaurants/show');
 });

 router.get('/new', (req, res) => {
   res.render('restaurants/new');
 });

module.exports = router;
