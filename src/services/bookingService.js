const Booking = require('../models/Booking');

// Create a new booking
const createBooking = async (userId, hostId, vanId, startDate, endDate) => {
  const newBooking = new Booking({
    userId,
    hostId,
    vanId,
    startDate,
    endDate,
    pendingApproval: true,
    isApproved: false,
  });
  return await newBooking.save();
};

// Update booking info
const updateBooking = async (bookingId, bookingData) => {
  return await Booking.findByIdAndUpdate(bookingId, bookingData, { new: true });
};

// Get all bookings by a user
const getBookingsForUser  = async (userId) => {
  return await Booking.find({ userId });
};

// Get all bookings for a host
const getBookingsForHost = async (hostId) => {
  return await Booking.find({ hostId });
};

// Delete a booking by ID
const deleteBooking = async (bookingId) => {
  return await Booking.findByIdAndDelete(bookingId);
};

module.exports = {
  createBooking,
  updateBooking,
  getBookingsForUser ,
  getBookingsForHost,
  deleteBooking,
};