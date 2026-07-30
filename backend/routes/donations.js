const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');
const { sendDonationConfirmation } = require('../services/emailService');

// GET all donations
router.get('/', async (req, res) => {
  try {
    const { status, limit = 100, page = 1 } = req.query;
    const query = status ? { status } : {};
    
    const donations = await Donation.find(query)
      .sort({ createdAt: -1 })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit));
    
    const total = await Donation.countDocuments(query);
    
    const totalAmount = await Donation.aggregate([
      { $match: { status: 'completed' } },
      { $group: { _id: null, total: { $sum: '$amount' } } }
    ]);
    
    res.json({
      success: true,
      data: donations,
      summary: {
        totalDonations: total,
        totalAmount: totalAmount.length > 0 ? totalAmount[0].total : 0
      },
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// POST new donation
router.post('/', async (req, res) => {
  try {
    console.log('📥 Received donation data:', req.body);
    
    const donationData = req.body;
    const donation = new Donation(donationData);
    await donation.save();
    await sendDonationConfirmation(donation);
    
    console.log('✅ Donation saved:', donation._id);
    
    res.status(201).json({
      success: true,
      message: 'Donation recorded successfully',
      data: donation
    });
  } catch (error) {
    console.error('❌ Donation save error:', error);
    res.status(400).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// GET single donation
router.get('/:id', async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id);
    if (!donation) {
      return res.status(404).json({ 
        success: false, 
        error: 'Donation not found' 
      });
    }
    res.json({ 
      success: true, 
      data: donation 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// PUT update donation status
router.put('/:id', async (req, res) => {
  try {
    const { status, transactionId } = req.body;
    const updates = { status, transactionId };
    
    if (status === 'completed') {
      updates.completedAt = Date.now();
    }
    
    const donation = await Donation.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true, runValidators: true }
    );
    
    if (!donation) {
      return res.status(404).json({ 
        success: false, 
        error: 'Donation not found' 
      });
    }
    
    res.json({
      success: true,
      message: 'Donation updated successfully',
      data: donation
    });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// DELETE donation
router.delete('/:id', async (req, res) => {
  try {
    const donation = await Donation.findByIdAndDelete(req.params.id);
    if (!donation) {
      return res.status(404).json({ 
        success: false, 
        error: 'Donation not found' 
      });
    }
    res.json({ 
      success: true, 
      message: 'Donation deleted successfully' 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// Add this route
router.get('/export/csv', async (req, res) => {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 });
    
    const csvData = donations.map(d => ({
      'Name': d.anonymous ? 'Anonymous' : d.name,
      'Email': d.anonymous ? '---' : d.email,
      'Amount': d.amount,
      'Payment Method': d.paymentMethod,
      'Status': d.status,
      'Message': d.message || '',
      'Date': d.createdAt.toISOString().split('T')[0],
    }));

    res.json({ success: true, data: csvData });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;