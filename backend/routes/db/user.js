const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/websitedb')

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  password: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  wishlist: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'PRODUCT',
  }],
  order: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'PRODUCT',
  }],
  card: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'PRODUCT',
  }]
});

userSchema.methods.comparePassword = function (inputPassword) {
  return this.password === inputPassword; 
};


module.exports = mongoose.model('Userinfo', userSchema);
