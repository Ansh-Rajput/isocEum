const mongoose = require('mongoose');

// Define a Subscriber schema and model
const subscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  subscribed: { type: Boolean, default: true },
});

const subscriberModel = mongoose.models.subscriber || mongoose.model('subscriber',subscriberSchema);

module.exports = subscriberModel;