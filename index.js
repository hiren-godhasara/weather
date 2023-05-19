const { PORT } = require('./config').server;
const express = require('express');
const app = express();
const weatherRoutes = require('./routes/weatherRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/', weatherRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(PORT || 3000, () => {
    console.log(`Server started on port ${PORT || 3000}`);
});

module.exports = app;