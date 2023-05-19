const weatherService = require('../services/weatherService');

describe('Weather Service', () => {
    it('should fetch the current weather for a specific location', async () => {
        const weatherData = await weatherService.getCurrentWeather('London');
        expect(weatherData).toBeDefined();
    });

    it('should fetch the weather forecast for a specific location', async () => {
        const forecastData = await weatherService.getWeatherForecast('London');
        expect(forecastData).toBeDefined();
    });
});