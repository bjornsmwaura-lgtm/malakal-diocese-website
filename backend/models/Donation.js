// backend/models/Donation.js

const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  amount: { type: Number, required: true },
  currency: { type: String, default: 'USD' },
  paymentMethod: { type: String, required: true },
  message: { type: String },
  anonymous: { type: Boolean, default: false },
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

// ✅ Important: This should be the model name
module.exports = mongoose.model('Donation', DonationSchema);