var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/login', (req,res) => {
   res.render('login');
});

router.get('/login', (req,res) => {
   res.render('login');
});

module.exports = router;
