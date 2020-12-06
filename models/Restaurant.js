const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
   name: {type: String, required: true},
   rating: Number,
   value: Number,
   //collection of available items
   // menu: [MenuItems]

   /* 
      menuItem = {
         name: String,
         price: number,
         tasteRating: number,
         valueRating: number,
      }
   */
});

module.exports = mongoose.model('Restaurant', restaurantSchema);