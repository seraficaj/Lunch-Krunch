const express = require('express');
const router = express.Router();
const RestaurantsCtrl = require('../controllers/restaurants');

/* GET users listing. */
router.get('/', RestaurantsCtrl.index);
router.post('/', RestaurantsCtrl.create)
router.get('/new', RestaurantsCtrl.newRestaurantForm);
router.get('/:id', RestaurantsCtrl.show);

module.exports = router;
