const Review = require('../models/Review');

// Create a new review
const createReview = async (reviewData) => {
  const newReview = new Review(reviewData);
  return await newReview.save();
};

// Get all reviews for a host
const getReviewsForHost = async (hostId) => {
  return await Review.find({ hostId });
};

module.exports = {
  createReview,
  getReviewsForHost,
};