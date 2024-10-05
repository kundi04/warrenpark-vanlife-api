

const mongoose = require('mongoose');

const BookingSchema = mongoose.Schema(

    {
        User_id: String,
        HostId: String,
        VanId: String,
        StartDate: Date,
        EndDate: Date,
        PendingApproval: Boolean,
        isApproved: Boolean,

        Timestamp: true
    }

);

module.exports = mongoose.model ('Booking', BookingSchema);

