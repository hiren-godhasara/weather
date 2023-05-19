require('dotenv').config();

exports.server = {
    PORT: process.env.PORT,
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
    WEATHER_BASE_URL: process.env.WEATHER_BASE_URL,
};

