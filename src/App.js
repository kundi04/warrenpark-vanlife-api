const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./src/routes/userRoutes');
const vanRoutes = require('./src/routes/vanRoutes');
const bookingRoutes = require('./src/routes/bookingRoutes');
const paymentRoutes = require('./src/routes/paymentRoutes');
const reviewRoutes = require('./src/routes/reviewRoutes');
const errorMiddleware = require('./src/middlewares/errorMiddleware');
dotenv.config();
const app = express();

// Database connection
const mongoose = require('mongoose');

const uri = 'mongodb+srv://muzhonakundai:Eukmal04@cluster0.k57c9.mongodb.net/'; 

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });


// Define routes
app.use('/users', userRoutes);
app.use('/vans', vanRoutes);
app.use('/bookings', bookingRoutes);
app.use('/payments', paymentRoutes);
app.use('/reviews', reviewRoutes);
// Error handling middleware
app.use(errorMiddleware);


const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = app;