// server.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes'); // Import the routes module
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Use the routes defined in routes.js
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
