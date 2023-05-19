const request = require('supertest');
const app = require('../index');

describe('Weather API', () => {
    it('should get the current weather for a specific location', async () => {
        const res = await request(app).get('/weather/London');
        expect(res.statusCode).toEqual(200);
    });

    it('should get the weather forecast for a specific location', async () => {
        const res = await request(app).get('/forecast/London');
        expect(res.statusCode).toEqual(200);
    });
});