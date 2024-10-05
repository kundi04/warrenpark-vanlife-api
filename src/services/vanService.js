//service/vanServices.js

const Booking = require ('../models/vanModel.js'); //model for van

const createBooking = async (createVan, getVan, getVans, getVanForHost, updateVan, deleteVan) => {

//logic for creating a van

const booking = new Booking ({
    createVan, 
    getVan, 
    getVans, 
    getVanForHost, 
    updateVan, 
    deleteVan
});

await van.save();
return van;

};

module.exports = {
    createVan,
};