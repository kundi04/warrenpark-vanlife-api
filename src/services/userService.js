//service/UserServices.js

const User = require ('../models/userModel.js'); //model for Users

const createBooking = async (createUser,updateUser) => {

//logic for creating a user

const user = new User ({
    createUser,
    updateUser,
});

await user.save();
return user;

};

module.exports = {
    createUser,
};