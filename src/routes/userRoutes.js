const express = require('express');

const router = express.Router ();

const userService = require ('../services/userService.js');

//getting all users
router.get('/available' , async (req,res) =>{
    try {
        const users = await userService.getAvailableUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message:'Error fetching available users', error 
        });
    }
}),

//getting specific user
router.get('/:id' , async (req,res) =>{
    try {
        const userId = req.params.id;
        const users = await userService.getUserById(userId);
        
        if (user){
            res.status(200).json (user);
        } 
        else {
            res.status(404).json({
                message: 'User not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            message:'Error fetching user', error 
        });
    }
})

//posting

router.post('/' , async (req,res) =>{
    try {
        const userData = req.body;
        const newUser = await userService.createUser(userData);
        res.status (201).json(newUser);

    } catch (error) {
        res.status(500).json({
            message:'Error creating user', error 
        });
    }
})

router.put('/:id/availability' , async (req,res) =>{
    try {
        const userId = req.params.id;
        const availability = req.body.availability;
        const updatedUser = await userService.updateUserAvailability(userId, availability);

        if (updatedUser){
            res.status(200).json (updatedUser);
        } 
        else {
            res.status(404).json({
                message: 'User not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            message:'Error updating user availability', error 
        });
    }
})

//delete
router.delete('/:id' , async (req,res) =>{
    try {
        const userId = req.params.id;
        const deletedUser = await userService.deleteUser(userId);

        if (deletedUser){
            res.status(200).json ({
                message:'User deleted successfully'
            });
        } 
        else {
            res.status(404).json({
                message: 'User not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            message:'Error deleting user', error 
        });
    }
})

module.exports = router;