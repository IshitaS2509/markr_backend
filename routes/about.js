const express = require('express');
const About = require('../models/About');
const router = express.Router();

// Fetch About Content
router.get('/', async (req, res) => {
  try {
    const about = await About.findOne();
    res.json(about || { content: "Welcome to our website!" });
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
