const mongoose = require('mongoose');

const Schema = require mongoose.Schema;

const restaurantSchema = new Schema({
   name: String,
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