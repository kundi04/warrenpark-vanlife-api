const express = require('express');

const router = express.Router ();

const bookingService = require ('../services/bookingService.js');

//getting all booking
router.get('/available' , async (req,res) =>{
    try {
        const bookings = await bookingService.getAvailableBooking();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({
            message:'Error fetching available bookings', error 
        });
    }
}),

//getting specific booking

router.get('/:id' , async (req,res) =>{
    try {
        const bookingId = req.params.id;
        const bookings = await bookingService.getBookingById(bookingId);
        
        if (user){
            res.status(200).json (booking);
        } 
        else {
            res.status(404).json({
                message: 'Booking not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            message:'Error fetching booking', error 
        });
    }
})

//posting

router.post('/' , async (req,res) =>{
    try {
        const bookingData = req.body;
        const newBooking = await bookingService.createBooking(bookingData);
        res.status (201).json(newBooking);

    } catch (error) {
        res.status(500).json({
            message:'Error creating booking', error 
        });
    }
})

//put
router.put('/:id/availability' , async (req,res) =>{
    try {
        const bookingId = req.params.id;
        const availability = req.body.availability;
        const updatedBooking = await bookingService.updateBookingAvailability(bookingId, availability);

        if (updatedBooking){
            res.status(200).json (updatedBooking);
        } 
        else {
            res.status(404).json({
                message: 'Booking not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            message:'Error updating booking availability', error 
        });
    }
})

//delete
router.delete('/:id' , async (req,res) =>{
    try {
        const bookingId = req.params.id;
        const deletedBooking = await bookingService.deleteBooking(bookingId);

        if (deletedBooking){
            res.status(200).json ({
                message:'Booking deleted successfully'
            });
        } 
        else {
            res.status(404).json({
                message: 'Booking not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            message:'Error deleting booking', error 
        });
    }
})

module.exports = router;