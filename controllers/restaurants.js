const Restaurant = require('../models/Restaurant');

module.exports  = {
    index,
    newRestaurantForm,
    create,
    newMenuItem,
    createMenuItem,
    show,
    deleteRestaurant,
    editForm,
    update
}

function index(req,res) {
    Restaurant.find({}, (err,foundRestaurants) => {
        res.render('restaurants/index', {
            restaurants: foundRestaurants.sort((a, b) => (a.name > b.name) ? 1 : -1) 
        })
    });
}

function newRestaurantForm(req,res) {
    res.render('restaurants/new')
}

function create(req,res) {
    const newRestaurant = new Restaurant({
        name: req.body.name,
        value: req.body.value,
        rating: req.body.value
    });
    newRestaurant.save((err) => {
        if (err) console.log(err);
        res.redirect('/restaurants')
    });
}

function newMenuItem(req,res) {
   res.render('restaurants/newMenuItem')
}

function createMenuItem(req,res) {

}

function show(req,res) {
    Restaurant.findById(req.params.id, (err, foundRestaurant) => {
        res.render('restaurants/show', {restaurant: foundRestaurant});
    });
}

function deleteRestaurant(req,res){
    console.log(req.params.id);
    Restaurant.findByIdAndDelete(req.params.id, function (err) {
        if (err) console.log(err);
        res.redirect('/restaurants');
    });
}

function editForm(req,res){
    Restaurant.findById(req.params.id, (err, restaurant) => {
        res.render('restaurants/edit', {restaurant});
    });
}

function update(req,res){
    console.log(req.body);
    Restaurant.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        rating: req.body.rating,
        value: req.body.value
    }, function (err) {
        if (err) console.log(err);
        res.redirect('/restaurants');
    })
}