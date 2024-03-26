const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/random', async (req, res) => {
  try {
    const response = await axios.get('https://icanhazdadjoke.com/', {
      headers: { 'Accept': 'application/json' }
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch random joke' });
  }
});

router.get('/search', async (req, res) => {
  try {
    const term = req.query.term || '';
    const response = await axios.get(`https://icanhazdadjoke.com/search?term=${term}`, {
      headers: { 'Accept': 'application/json' }
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to search for jokes' });
  }
});

module.exports = router;
