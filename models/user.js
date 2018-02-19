const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create a schema for GeoLocation
const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
});


// create user schema
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "name field is required"]
  },
  age: {
    type: Number,
    required: [true, "age is required"]
  },
  available: {
    type: Boolean,
    default: false
  },
  // add in geo location
  geometry: GeoSchema
});

const User = mongoose.model('user', userSchema);
module.exports = User;
