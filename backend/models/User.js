const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  log: String,
  date: Date,
});

module.exports = mongoose.model("User", UserSchema);
