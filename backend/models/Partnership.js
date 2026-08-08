// backend/models/Partnership.js

const mongoose = require('mongoose');

const PartnershipSchema = new mongoose.Schema({
  fullName: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true 
  },
  phone: { 
    type: String 
  },
  interest: { 
    type: String 
  },
  skills: { 
    type: String 
  },
  availability: { 
    type: String 
  },
  message: { 
    type: String 
  },
  type: { 
    type: String, 
    default: 'partner' 
  },
  status: { 
    type: String, 
    default: 'pending' 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('Partnership', PartnershipSchema);