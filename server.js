const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000; // Update with your desired port number

// Enable CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Route for fetching dog-friendly restaurants
app.get('/restaurants', (req, res) => {
  const location = req.query.location;
  const url = `https://api.yelp.com/v3/businesses/search?term=dog+friendly&location=${location}`;

  axios.get(url, {
    headers: {
      'Authorization': 'Bearer YOUR_YELP_API_KEY' // Replace with your Yelp API key
    }
  })
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(error => {
      console.error('Error fetching data from Yelp API:', error);
      res.status(500).json({ error: 'Failed to fetch data from Yelp API' });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
