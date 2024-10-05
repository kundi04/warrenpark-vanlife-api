//service/reviewServices.js

const Review = require ('../models/reviewModel.js'); //model for reviews

const createReview = async (userId, createReview, getReviewForHost, hostId) => {

//logic for creating a review

const review = new Review ({
    userId,
    hostId,
    createReview,
    getReviewForHost,
});

await review.save();
return review;

};

module.exports = {
    createReview,
};