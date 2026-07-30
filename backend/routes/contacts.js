const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { sendContactNotification, sendAutoReply } = require('../services/emailService');

// GET all contacts
router.get('/', async (req, res) => {
  try {
    const { status, limit = 100, page = 1 } = req.query;
    const query = status ? { status } : {};
    
    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit));
    
    const total = await Contact.countDocuments(query);
    
    res.json({
      success: true,
      data: contacts,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET single contact
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ success: false, error: 'Contact not found' });
    }
    res.json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST new contact
router.post('/', async (req, res) => {
  try {
    const contactData = req.body;
    
    const contact = new Contact(contactData);
    await contact.save();
    await sendContactNotification(contact);
    await sendAutoReply(contact)
    
    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: contact
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// PUT update contact status
router.put('/:id', async (req, res) => {
  try {
    const { status, respondedBy, responseMessage } = req.body;
    const updates = { status, respondedBy, responseMessage };
    
    if (status === 'replied') {
      updates.responseDate = Date.now();
    }
    
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true, runValidators: true }
    );
    
    if (!contact) {
      return res.status(404).json({ success: false, error: 'Contact not found' });
    }
    
    res.json({
      success: true,
      message: 'Contact updated successfully',
      data: contact
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// DELETE contact
router.delete('/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ success: false, error: 'Contact not found' });
    }
    res.json({ success: true, message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Add this route
router.get('/export/csv', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    
    const csvData = contacts.map(c => ({
      'Full Name': c.fullName,
      'Email': c.email,
      'Phone': c.phone || '',
      'Parish': c.parish || '',
      'Subject': c.subject,
      'Priority': c.priority,
      'Message': c.message,
      'Status': c.status,
      'Date': c.createdAt.toISOString().split('T')[0],
    }));

    res.json({ success: true, data: csvData });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;