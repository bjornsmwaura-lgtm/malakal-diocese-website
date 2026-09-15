const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Volunteer = require('./models/Volunteer');
const Partnership = require('./models/Partnership');
const Donation = require('./models/Donation');
const { router: adminRoutes } = require('./routes/admin');
const {
  apiLimiter,
  loginLimiter,
  formLimiter,
  adminLimiter,
} = require('./middleware/rateLimiter');
const honeypot = require('./middleware/honeypot');

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

// ✅ CORS configuration
const corsOptions = {
  origin: [
    'http://localhost:5173',
    'http://localhost:5000',
    'https://catholicdiocesemalakaltesting.netlify.app',
    'https://your-production-domain.com'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes - SIMPLE VERSION WITHOUT AUTH
const contactRoutes = require('./routes/contacts');
const donationRoutes = require('./routes/donations');


// ===== VOLUNTEER ROUTES =====

// GET all volunteers
app.get('/api/volunteers', async (req, res) => {
  try {
    const volunteers = await Volunteer.find().sort({ createdAt: -1 });
    res.json({ success: true, data: volunteers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET volunteers CSV export
app.get('/api/volunteers/export/csv', async (req, res) => {
  try {
    const volunteers = await Volunteer.find().sort({ createdAt: -1 });

    const csvData = volunteers.map((v) => ({
      'Full Name': v.fullName || '',
      'Email': v.email || '',
      'Phone': v.phone || '',
      'Country': v.country || '',
      'Interest': v.interest || '',
      'Skills': v.skills || '',
      'Availability': v.availability || '',
      'Experience': v.experience || '',
      'Motivation': v.motivation || '',
      'Message': v.message || '',
      'Status': v.status || 'pending',
      'Date': new Date(v.createdAt).toISOString().split('T')[0],
    }));

    res.json({ success: true, data: csvData });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET single volunteer
app.get('/api/volunteers/:id', async (req, res) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id);
    if (!volunteer) {
      return res.status(404).json({ success: false, message: 'Volunteer not found' });
    }
    res.json({ success: true, data: volunteer });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST new volunteer (your existing route — kept intact)
app.post('/api/volunteers', async (req, res) => {
  try {
    console.log('📝 Volunteer data received:', req.body);

    if (!req.body.fullName || !req.body.email) {
      return res.status(400).json({
        success: false,
        message: 'Full name and email are required'
      });
    }

    const volunteer = new Volunteer(req.body);
    await volunteer.save();

    console.log('✅ Volunteer saved successfully');

    res.status(201).json({
      success: true,
      message: 'Form submitted successfully! (Email notifications will be available soon)'
    });
  } catch (error) {
    console.error('❌ Volunteer error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to submit volunteer application',
      details: error.errors
    });
  }
});

// PUT update volunteer
app.put('/api/volunteers/:id', async (req, res) => {
  try {
    const volunteer = await Volunteer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!volunteer) {
      return res.status(404).json({ success: false, message: 'Volunteer not found' });
    }
    res.json({ success: true, data: volunteer });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// DELETE volunteer
app.delete('/api/volunteers/:id', async (req, res) => {
  try {
    const volunteer = await Volunteer.findByIdAndDelete(req.params.id);
    if (!volunteer) {
      return res.status(404).json({ success: false, message: 'Volunteer not found' });
    }
    res.json({ success: true, message: 'Volunteer deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
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

// 📧 Try to send confirmation — skip if not configured
try {
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    const { sendDonationConfirmation } = require('./services/emailService');
    await sendDonationConfirmation(donation);
  }
} catch (emailError) {
  console.error('⚠️ Donation email failed:', emailError.message);
}

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

// 🔍 DEBUG: Check what was imported
console.log('========= ROUTE DEBUG =========');
console.log('contactRoutes:', typeof contactRoutes);
console.log('donationRoutes:', typeof donationRoutes);
console.log('adminRoutes:', typeof adminRoutes);
console.log('================================');

// Use routes
// Apply general limiter to all /api routes
app.use('/api', apiLimiter);

// Contacts — form limiter (prevents spam)
app.use('/api/contacts', formLimiter, contactRoutes);
app.use('/api/contacts', formLimiter, honeypot(), contactRoutes);

// Donations — form limiter
app.use('/api/donations', formLimiter, donationRoutes);
app.use('/api/donations', formLimiter, honeypot(), donationRoutes);

// Admin — admin limiter
app.use('/api/admin', adminLimiter, adminRoutes);

app.post('/api/volunteers', formLimiter, async (req, res) => {
  // existing 
  app.post('/api/volunteers', formLimiter, honeypot(), async (req, res) => {
  // existing code
});
});

app.post('/api/partnerships', formLimiter, async (req, res) => {
  // existing code
  app.post('/api/partnerships', formLimiter, honeypot(), async (req, res) => {
  // existing code
});
});

// Volunteers — form limiter (applied via app.use later)

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
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('✅ Connected to MongoDB successfully');
  console.log(`📊 Database: ${mongoose.connection.db.databaseName}`);
})
.catch((error) => {
  console.error('❌ MongoDB connection error:', error.message);
});


// Start server (only once)
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  
});