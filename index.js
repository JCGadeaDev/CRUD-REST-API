const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

const prodctRoutes = require('./routes/products');

// Settings
app.set('json spaces', 4); // For pretty JSON output 

// Middleware
app.use(morgan('dev')); // Log HTTP requests
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: false })); // Parse URL-encoded bodies

// Routes
app.use('/products', prodctRoutes);  // Products API routes

// Static files


// Start Server
app.listen(3000, () => {
  console.log('Server is running on', 3000);
});