const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 255,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    maxlength: 255,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 255,
  },
  posts: [
    {
      type: String,
      maxLength: 1024
    }
  ],
});

module.exports = mongoose.model('User', userSchema);
// MongoDB will create a collection of name users