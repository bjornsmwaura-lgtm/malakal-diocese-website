// backend/models/Volunteer.js

const mongoose = require('mongoose');

const VolunteerSchema = new mongoose.Schema({
  fullName: { 
    type: String, 
    required: [true, 'Full name is required'] 
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'],
    match: [/.+\@.+\..+/, 'Please enter a valid email address']
  },
  phone: { type: String, default: '' },
  interest: { type: String, default: '' },
  skills: { type: String, default: '' },
  availability: { type: String, default: '' },
  message: { type: String, default: '' },
  type: { type: String, default: 'volunteer' },
  status: { type: String, default: 'pending' },
  // Optional: Additional fields from your form
  country: { type: String, default: '' },
  motivation: { type: String, default: '' },
  experience: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Volunteer', VolunteerSchema);