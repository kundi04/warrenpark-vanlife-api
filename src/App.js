const express = require('express');
const mongoose = require('mongoose');
const Van = require('./src/models/vanModel.js')
const app = express();
app.use = (express.json());

app.get('/', (req, res) => {
    res.send("hello from node api server")
});

app.post('/api/Vans', async (req, res) => {

    try {
        const van = await Van.create(req.body);
        res.status(200).json(van)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

mongoose.connect('mongodb+srv://muzhonakundai:Eukmal04@cluster0.k57c9.mongodb.net/')
    .then(() => {
        console.log('Connected to database');
        app.listen(5000, () => {
            console.log('server is running on port 5000');
        })
    })
    .catch(() => {
        console.log('Connection Failed');
    }); 