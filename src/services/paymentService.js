//service/paymentServices.js

const Payment = require ('../models/paymentModel.js'); //model for payment

const createPayment = async (userId, createPayment, getPayment) => {

//logic for creating a payment

const payment = new Payment ({
    userId,
    createPayment,
    getPayment,
});

await payment.save();
return payment;

};

module.exports = {
    createPayment,
};