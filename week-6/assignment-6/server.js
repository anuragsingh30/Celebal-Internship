// server.js
require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

// Initialize Express app
const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Alian', {
 
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});
// Use user routes
app.use('/api', userRoutes);

// Define port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
