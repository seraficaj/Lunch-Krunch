const Restaurant = require('../models/Restaurant');

module.exports  = {
    index,
    newRestaurantForm,
    create,
    show,
    // deleteRestaurant,
    // editForm,
    // update
}

function index(req,res) {
    Restaurant.find({}, (err,foundRestaurants) => {
        res.render('restaurants/index', {restaurants: foundRestaurants});
    })
}

function newRestaurantForm(req,res) {
    res.render('restaurants/new')
}

function create(req,res) {
    const newRestaurant = new Restaurant({
        name: req.body.name,
        taste: req.body.taste,
        rating: req.body.value
    });
    newRestaurant.save((err) => {
        if (err) console.log(err);
        res.redirect('/restaurants')
    });
}

function show(req,res) {
    Restaurant.findById(req.params.id, (err, foundRestaurant) => {
        res.render('restaurants/show', {restaurant: foundRestaurant});
    });
}