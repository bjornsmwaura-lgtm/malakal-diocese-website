const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Contact = require('../models/Contact');
const Donation = require('../models/Donation');
const Partnership = require('../models/Partnership');
const Volunteer = require('../models/Volunteer');  // add at top with other models
const { loginLimiter } = require('../middleware/rateLimiter');

// ---------- AUTH MIDDLEWARE ----------
const requireAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, error: 'No token provided' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'change-me');
    req.admin = decoded;
    next();
  } catch {
    return res.status(401).json({ success: false, error: 'Invalid or expired token' });
  }
};

// ---------- LOGIN ----------
router.post('/login', (req, res) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ success: false, error: 'Password required' });
  }
  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ success: false, error: 'Invalid password' });
  }
  const token = jwt.sign(
    { role: 'admin' },
    process.env.JWT_SECRET || 'change-me',
    { expiresIn: '7d' }
  );
  res.json({ success: true, token });
  router.post('/login', loginLimiter, (req, res) => {
  // existing code
});
});

// ---------- DASHBOARD STATS ----------
router.get('/stats', requireAdmin, async (req, res) => {
  try {
    const [
      totalContacts,
      pendingContacts,
      urgentContacts,
      prayerRequests,
      totalDonations,
      donationsSum,
      totalPartnerships,
      totalVolunteers,
    ] = await Promise.all([
      Contact.countDocuments(),
      Contact.countDocuments({ status: 'pending' }),
      Contact.countDocuments({ priority: 'urgent' }),
      Contact.countDocuments({ priority: 'prayer-request' }),
      Donation.countDocuments(),
      Donation.aggregate([
        { $group: { _id: null, total: { $sum: '$amount' } } }
      ]),
      Partnership.countDocuments(),
      Volunteer.countDocuments(),
      
    ]);

    // Recent items
    const recentContacts = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(5);

    res.json({
      success: true,
      data: {
        contacts: {
          total: totalContacts,
          pending: pendingContacts,
          urgent: urgentContacts,
          prayerRequests: prayerRequests,
        },
        donations: {
          total: totalDonations,
          totalAmount: donationsSum[0]?.total || 0,
        },
        partnerships: {
          total: totalPartnerships,
        },
        recentContacts,
      },
      volunteers: {
  total: totalVolunteers,
},
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = { router, requireAdmin };