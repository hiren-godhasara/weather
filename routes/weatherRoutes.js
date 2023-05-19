const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

// Route for getting the current weather for a specific location
router.get('/weather/:location', weatherController.getCurrentWeather);

// Route for getting the forecast for a specific location
router.get('/forecast/:location', weatherController.getWeatherForecast);

module.exports = router;