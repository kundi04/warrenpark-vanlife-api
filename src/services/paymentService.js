const Payment = require('../models/Payment');

// Create a new payment
const createPayment = async (paymentData) => {
  const newPayment = new Payment(paymentData);
  return await newPayment.save();
};

// Get a payment by ID
const getPayment = async (paymentId) => {
  return await Payment.findById(paymentId);
};

module.exports = {
  createPayment,
  getPayment,
};