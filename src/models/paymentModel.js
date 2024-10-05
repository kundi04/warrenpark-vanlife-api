


const mongoose = require('mongoose');

const PaymentSchema = mongoose.Schema(

    {
        PaymentId: String,
        RentalId: String,
        PaymentMethod: String,
        Currency: String,
        PaymentType: String,
        PaymentDate: Date,
        PaymentAmount: Number,
        TransactionId: String,
        PaymentStatus: String,
        PaymentNotes: String,

        Timestamp: true
    }

);

module.exports = mongoose.model('Payment', PaymentSchema);
