const express = require('express');
const router = express.Router();
const Event = require('../models/Fair_Events');

// GET all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new event
router.post('/', async (req, res) => {
  const event = new Event({
    title: req.body.title,
    location: req.body.location,
    date: req.body.date,
    description: req.body.description,
    image: req.body.image,
  });

  try {
    const savedEvent = await event.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


module.exports = router;
