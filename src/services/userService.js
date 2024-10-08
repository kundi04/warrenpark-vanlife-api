const User = require('../models/User');

// Create a new user
const createUser = async (userData) => {
  const newUser = new User(userData);
  return await newUser.save();
};

// Update a user profile
const updateUser = async (userId, userData) => {
  return await User.findByIdAndUpdate(userId, userData, { new: true });
};

module.exports = {
  createUser,
  updateUser,
};