const express = require('express');
const router = express.Router();
const RestaurantsCtrl = require('../controllers/restaurants');

/* GET users listing. */
router.get('/', RestaurantsCtrl.index);
router.post('/', RestaurantsCtrl.create)
router.get('/new', RestaurantsCtrl.newRestaurantForm);
router.get('/:id', RestaurantsCtrl.show);
router.put('/:id/', RestaurantsCtrl.update);
router.delete('/:id', RestaurantsCtrl.deleteRestaurant);
router.get('/:id/addItem', RestaurantsCtrl.newMenuItem);
router.get('/:id/edit', RestaurantsCtrl.editForm);


module.exports = router;
