const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  favoriteColor: {
    type: String,
    required: true
  },
  birthday: {
    type: String,
    required: true
  }
});

const Contact = mongoose.model('Contact', contactSchema, 'contacts');

module.exports = Contact;
