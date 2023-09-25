const mongoose = require('mongoose');

// Define a Subscriber schema and model
const contactSchema = new mongoose.Schema({
  email: { type: String, required: true},
  name: { type: String, required: true },
  number: { type: String, required: true },
  message: { type: String, required: true },
});

const contactModel = mongoose.models.contact || mongoose.model('contact',contactSchema);

module.exports = contactModel;