//service/bookingServices.js

const Booking = require ('../models/bookingModel.js'); //model for booking

const createBooking = async (createBooking, updateBooking, getBookingsForUser, getBookingsForHost, deleteBooking) => {

const pendingApproval = true;
const isApproved = fasle;

//logic for creating a booking

const booking = new Booking ({
    createBooking, 
    updateBooking, 
    getBookingsForUser, 
    getBookingsForHost, 
    deleteBooking,
    pendingApproval,
    isApproved,
});

await booking.save();
return booking;

};

module.exports = {
    createBooking,
};  