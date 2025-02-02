const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// A User can have many Post
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
      type: mongoose.Types.ObjectId,
      ref: 'Post',
    }
  ],
});

module.exports = mongoose.model('User', userSchema);
// MongoDB will create a collection of name users