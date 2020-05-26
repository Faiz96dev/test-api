const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  sex: {
    type: String,
  },
  lastName: {
    type: String,
  },
  firstName: {
    type: String,
  },
});

module.exports = mongoose.model('user', UserSchema);
