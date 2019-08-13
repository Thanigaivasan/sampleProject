const mongoose = require("mongoose");
const { Schema } = mongoose;

const userData = new Schema({
  fname: String,
  lname: String,
  email: String,
  bloodGroup: String,
  phNumber: Number,
  city: String,
  latitude: Number,
  longitude: Number
});

module.exports = mongoose.model("userData", userData);
