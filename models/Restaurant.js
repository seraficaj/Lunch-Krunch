const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//menu item subdocument
const menuSchema = new Schema({
   name: String,
   price: Number
});

const restaurantSchema = new Schema({
   name: {type: String, required: true},
   rating: Number,
   value: Number,
   menuItems: [menuSchema]
});

module.exports = mongoose.model('Restaurant', restaurantSchema);