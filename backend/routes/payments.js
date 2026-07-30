const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');

// Placeholder - returns message that payment system is coming soon
router.post('/create-payment-intent', auth, async (req, res) => {
  res.json({
    success: true,
    message: 'Payment system coming soon!',
    clientSecret: 'placeholder_secret'
  });
});

router.post('/confirm-payment', auth, async (req, res) => {
  res.json({
    success: true,
    message: 'Payment confirmation placeholder'
  });
});

// Webhook endpoint (public - no auth)
router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  res.json({ received: true });
});

module.exports = router;