
const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema(

    {
        Review_id: String,
        Reviewed_van_id:
        {
            type: String,
            required: true,
        },
        Review_date: Date,
        Review_title: String,
        Review_stars: Number, // Integer for the star rating
        Review_text: {
            Comfort: String,
            Cleanliness: String,
            Overall_experience: String,
            Recommendation: Boolean // Yes/No stored as true/false
        },
        Review_source: String,
        Timestamp: true
    }

);

module.exports = mongoose.model('Review', ReviewSchema);

