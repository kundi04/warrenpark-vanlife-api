const express = require('express');

const router = express.Router ();

const vanService = require ('../services/vanService.js');

//getting all vans
router.get('/available' , async (req,res) =>{
    try {
        const vans = await vanService.getAvailableVans();
        res.status(200).json(vans);
    } catch (error) {
        res.status(500).json({
            message:'Error fetching available vans', error 
        });
    }
}),

//getting specific van
router.get('/:id' , async (req,res) =>{
    try {
        const vanId = req.params.id;
        const vans = await vanService.getVanById(vanId);
        
        if (van){
            res.status(200).json (van);
        } 
        else {
            res.status(404).json({
                message: 'Van not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            message:'Error fetching van', error 
        });
    }
})

//posting

router.post('/' , async (req,res) =>{
    try {
        const vanData = req.body;
        const newVan = await vanService.createVan(vanData);
        res.status (201).json(newVan);

    } catch (error) {
        res.status(500).json({
            message:'Error creating van', error 
        });
    }
})

router.put('/:id/availability' , async (req,res) =>{
    try {
        const vanId = req.params.id;
        const availability = req.body.availability;
        const updatedVan = await vanService.updateVanAvailability(vanId, availability);

        if (updatedVan){
            res.status(200).json (updatedVan);
        } 
        else {
            res.status(404).json({
                message: 'Van not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            message:'Error updating van availability', error 
        });
    }
})

//delete
router.delete('/:id' , async (req,res) =>{
    try {
        const vanId = req.params.id;
        const deletedVan = await vanService.deleteVan(vanId);

        if (deletedVan){
            res.status(200).json ({
                message:'Van deleted successfully'
            });
        } 
        else {
            res.status(404).json({
                message: 'Van not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            message:'Error deleting van', error 
        });
    }
})

module.exports = router;