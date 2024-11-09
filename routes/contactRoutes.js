// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/ContactMessage');

// POST endpoint to handle form submission
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const contactMessage = new ContactMessage({ name, email, message });
        await contactMessage.save();  // Save to database
        res.status(201).json({ message: 'Message received successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send message' });
    }
});

module.exports = router;