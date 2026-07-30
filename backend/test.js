const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

console.log('Starting test server...');

// Test route
app.get('/test', (req, res) => {
  res.json({ message: 'Test server is working!' });
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/malakal_diocese')
.then(() => {
  console.log('✅ Connected to MongoDB');
  
  // Start server after successful connection
  const PORT = 5001;
  app.listen(PORT, () => {
    console.log(`✅ Test server running on http://localhost:${PORT}`);
    console.log(`📡 Test endpoint: http://localhost:${PORT}/test`);
  });
})
.catch((error) => {
  console.error('❌ MongoDB connection error:', error.message);
});

// Donation route test
app.post('/test-donation', async (req, res) => {
  try {
    console.log('Test donation received:', req.body);
    res.json({ 
      success: true, 
      message: 'Test donation received!',
      data: req.body 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});