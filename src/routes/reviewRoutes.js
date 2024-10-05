const express = require('express');

const router = express.Router ();

const reviewService = require ('../services/reviewService.js');

//getting all reviews
router.get('/available' , async (req,res) =>{
    try {
        const reviews = await reviewService.getAvailableReviews();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({
            message:'Error fetching available reviews', error 
        });
    }
}),

//getting specific review
router.get('/:id' , async (req,res) =>{
    try {
        const reviewId = req.params.id;
        const reviews = await reviewService.getReviewById(reviewId);
        
        if (user){
            res.status(200).json (review);
        } 
        else {
            res.status(404).json({
                message: 'Review not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            message:'Error fetching review', error 
        });
    }
})

//posting

router.post('/' , async (req,res) =>{
    try {
        const reviewData = req.body;
        const newReview = await reviewService.createReview(reviewData);
        res.status (201).json(newReview);

    } catch (error) {
        res.status(500).json({
            message:'Error creating review', error 
        });
    }
})

//put
router.put('/:id/availability' , async (req,res) =>{
    try {
        const reviewId = req.params.id;
        const availability = req.body.availability;
        const updatedReview = await reviewService.updateReviewAvailability(reviewId, availability);

        if (updatedReview){
            res.status(200).json (updatedReview);
        } 
        else {
            res.status(404).json({
                message: 'Review not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            message:'Error updating review availability', error 
        });
    }
})

//delete
router.delete('/:id' , async (req,res) =>{
    try {
        const reviewId = req.params.id;
        const deletedReview = await reviewService.deleteReview(reviewId);

        if (deletedReview){
            res.status(200).json ({
                message:'Review deleted successfully'
            });
        } 
        else {
            res.status(404).json({
                message: 'Review not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            message:'Error deleting review', error 
        });
    }
})

module.exports = router;