const express = require('express');

const router = express.Router ();

const paymentService = require ('../services/paymentService.js');

//getting all payments
router.get('/available' , async (req,res) =>{
    try {
        const payments = await paymentService.getAvailablePayments();
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({
            message:'Error fetching available payments', error 
        });
    }
}),

//getting specific payments
router.get('/:id' , async (req,res) =>{
    try {
        const paymentId = req.params.id;
        const payments = await paymentService.getPaymentById(paymentId);
        
        if (payment){
            res.status(200).json (payment);
        } 
        else {
            res.status(404).json({
                message: 'Payment not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            message:'Error fetching payment', error 
        });
    }
})

//posting

router.post('/' , async (req,res) =>{
    try {
        const paymentData = req.body;
        const newPayment = await paymentService.createPayment(paymentData);
        res.status (201).json(newPayment);

    } catch (error) {
        res.status(500).json({
            message:'Error creating payment', error 
        });
    }
})

router.put('/:id/availability' , async (req,res) =>{
    try {
        const paymentId = req.params.id;
        const availability = req.body.availability;
        const updatedPayment = await paymentService.updatePaymentAvailability(paymentId, availability);

        if (updatedPayment){
            res.status(200).json (updatedPayment);
        } 
        else {
            res.status(404).json({
                message: 'Payment not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            message:'Error updating payment availability', error 
        });
    }
})

//delete
router.delete('/:id' , async (req,res) =>{
    try {
        const paymentId = req.params.id;
        const deletedPayment = await paymentService.deletePayment(paymentId);

        if (deletedPayment){
            res.status(200).json ({
                message:'Payment deleted successfully'
            });
        } 
        else {
            res.status(404).json({
                message: 'Payment not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            message:'Error deleting payment', error 
        });
    }
})

module.exports = router;