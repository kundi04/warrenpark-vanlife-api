
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(

    {
        User_id: String,
        name:
        {
            type: String,
            required: [true, 'Please enter User name']
        },

        image: {
            type: String,
            required: [false]
        },

        Email: String,
        Password:{
            type: String,
            required: true,
        } ,
        Phone: String,
        bookingHistoryIDs: [String], // Array of strings to store multiple booking history IDs
        

        Timestamp: true
    }

);

module.exports = mongoose.model ('User', UserSchema);
