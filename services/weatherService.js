
const axios = require('axios');
const { WEATHER_API_KEY, WEATHER_BASE_URL } = require('../config').server;

const getCurrentWeather = async (location) => {
    try {
        const response = await axios.get(`${WEATHER_BASE_URL}/weather`, { params: { appid: WEATHER_API_KEY, q: location } });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch current weather data');
    }
};

const getWeatherForecast = async (location) => {
    try {
        const response = await axios.get(`${WEATHER_BASE_URL}/forecast`, { params: { appid: WEATHER_API_KEY, q: location } });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch weather forecast data');
    }
};

module.exports = {
    getCurrentWeather,
    getWeatherForecast,
};