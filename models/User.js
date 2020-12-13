const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
   name: String,
   email: String,
   password: String,
   // collection of user's entries
   // entries: []
   /* 
      entry: {
         Restaurant: RestaurantId
         MenuItem: Name
         Price: Number
         Rating: Number
         Value: Number
         Date
      }
   */
});

module.exports = mongoose.model('User', userSchema);