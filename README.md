# Weather API RESTful Service

This is a RESTful API built with Node.js, Express.js, and integration with a weather API to fetch weather data. The API provides endpoints to retrieve the current weather and weather forecast for a specific location.

## Prerequisites

- Node.js (version 12 or above)
- npm (Node Package Manager)

## Getting Started

1. Clone the repository:

```shell
git clone https://github.com/hiren-godhasara/weather.git

```

2. Install dependencies:

```shell
cd weather-api
npm install
```

3. Create a .env file in the root of the project directory with the following contents:

```shell
PORT=3000
WEATHER_BASE_URL ='https://api.openweathermap.org/data/2.5'
WEATHER_API_KEY=YOUR_WEATHER_API_KEY
```
4. Run the application:

```shell
npm start
```

The server will start running on http://localhost:3000.



# API Endpoints

```shell
GET /api/weather/:location
//Retrieve the current weather for a specific location.
```
```shell
GET /api/forecast/:location
Retrieve the weather forecast for a specific location.
Replace :location with the desired city name or identifier.
```
Replace :location with the desired city name or identifier.

# Running Tests

To run the unit tests, use the following command:

```shell
npm test
```

Make sure you have set up the .env file with the weather API key before running the tests.