
const weatherService = require('../services/weatherService');

const getCurrentWeather = async (req, res) => {
    try {
        const location = req.params.location;
        const weatherData = await weatherService.getCurrentWeather(location);
        res.json(weatherData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
};

const getWeatherForecast = async (req, res) => {
    try {
        const location = req.params.location;
        const forecastData = await weatherService.getWeatherForecast(location);
        console.log(forecastData);
        res.json(forecastData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather forecast' });
    }
};

module.exports = {
    getCurrentWeather,
    getWeatherForecast,
};