const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Volunteer = require('./models/Volunteer');
const Partnership = require('./models/Partnership');
const Donation = require('./models/Donation');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes - SIMPLE VERSION WITHOUT AUTH
const contactRoutes = require('./routes/contacts');
const donationRoutes = require('./routes/donations');

// backend/server.js

app.post('/api/volunteers', async (req, res) => {
  try {
    console.log('📝 Volunteer data received:', req.body);
    
    // Validate required fields
    if (!req.body.fullName || !req.body.email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Full name and email are required' 
      });
    }
    
    const volunteer = new Volunteer(req.body);
    await volunteer.save();
    
    console.log('✅ Volunteer saved successfully');
    


// Comment out the email sending code
// await transporter.sendMail(mailOptions);

// Just return success without email
res.status(201).json({
  success: true,
  message: 'Form submitted successfully! (Email notifications will be available soon)'
});


  } catch (error) {
    console.error('❌ Volunteer error:', error);
    // Send detailed error for debugging
    res.status(500).json({ 
      success: false, 
      message: error.message || 'Failed to submit volunteer application',
      details: error.errors // Mongoose validation errors
    });
  }
});


// ===== PARTNERSHIP ROUTES =====
app.post('/api/partnerships', async (req, res) => {
  try {
    console.log('📝 Partnership data received:', req.body);
    
    const partnership = new Partnership(req.body);
    await partnership.save();
    
    console.log('✅ Partnership saved successfully');
    
    res.status(201).json({ 
      success: true, 
      message: 'Partnership request submitted successfully!',
      data: partnership 
    });
  } catch (error) {
    console.error('❌ Partnership error:', error);
    res.status(500).json({ 
      success: false, 
      message: error.message || 'Failed to submit partnership request' 
    });
  }
});

app.get('/api/partnerships', async (req, res) => {
  try {
    const partnerships = await Partnership.find().sort({ createdAt: -1 });
    res.json({ success: true, data: partnerships });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});


// ===== DONATION ROUTES =====
app.post('/api/donations', async (req, res) => {
  try {
    console.log('📝 Donation data received:', req.body);

    const donationData = {
      fullName: req.body.fullName,
      email: req.body.email,
      phone: req.body.phone || '',
      amount: req.body.amount || req.body.customAmount,
      currency: req.body.currency || 'USD',
      paymentMethod: req.body.paymentMethod || 'paypal',
      message: req.body.message || '',
      anonymous: req.body.anonymous || false
    };

    const donation = new Donation(donationData);
    await donation.save();

    console.log('✅ Donation saved:', donation);

    res.status(201).json({
      success: true,
      message: 'Donation submitted successfully!',
      data: donation
    });
  } catch (error) {
    console.error('❌ Donation error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to submit donation'
    });
  }
});

// Get all donations
app.get('/api/donations', async (req, res) => {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 });
    res.json({ success: true, data: donations });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Use routes
app.use('/api/contacts', contactRoutes);
app.use('/api/donations', donationRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    name: 'Catholic Diocese of Malakal API',
    version: '1.0.0',
    endpoints: {
      contacts: '/api/contacts',
      donations: '/api/donations',
      health: '/api/health'
    }
  });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/malakal_diocese')
.then(() => {
  console.log('✅ Connected to MongoDB successfully');
  console.log(`📊 Database: ${mongoose.connection.db.databaseName}`);
})
.catch((error) => {
  console.error('❌ MongoDB connection error:', error.message);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📡 API endpoints:`);
  console.log(`   - http://localhost:${PORT}/api/contacts`);
  console.log(`   - http://localhost:${PORT}/api/donations`);
  console.log(`   - http://localhost:${PORT}/api/health`);
});