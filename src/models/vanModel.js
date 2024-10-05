
const mongoose = require('mongoose');

const VanSchema = new mongoose.Schema(

    {
        van_id: String,
        name: String,
       
        image: {
            type: String,
            required: [false]
        },

        category: String,
        capacity:
        {
            type: String,
            required: [true]
        },

        pricePerDay: Number, // Number for daily price
        description: String,
        available:
        {
            type: Boolean, // Boolean to indicate availability
            required: [true]
        },

        // Timestamp:{
        //     required: false
        // } 
    }

);

module.exports = mongoose.model ('Van', VanSchema);

 