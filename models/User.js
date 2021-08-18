const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Represents a user in the database
 */
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  teams: {
    type: Array,
    default: [],
  },
});

module.exports = User = mongoose.model("user", UserSchema);
