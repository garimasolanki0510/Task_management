const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: { 
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
  image: {
    type: String,
    default: 'https://i.pravatar.cc/150', // optional default avatar
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
