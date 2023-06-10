const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  log: String,
});

module.exports = mongoose.model("User", UserSchema);
