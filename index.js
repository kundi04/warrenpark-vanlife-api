const express = require('express')
const mongoose = require('mongoose');
// const Vans = require('./src/models/vanModel.js');
const app = express()

app.use(express.json())





app.get('/', (req, res) => {
    res.send("hello from node api")
})


app.post('/api/Vans', async (req, res) => {
    try {
     const Vans = await Vans.create(req.body);
     res.status(200).json(Vans)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



mongoose.connect("mongodb+srv://muzhonakundai:Eukmal04@cluster0.k57c9.mongodb.net/")
    .then(() => {
        console.log("Connected to database");
        app.listen(5002, () => {
            console.log('Server is running on port 5002')
        });
    })
    .catch(() => {
        console.log("Connection failed!");
    });

app.use(express.json());



// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });



// app.post('/api/vans'),(req,res) => {
// console.log(req.body);
//     res.send("req.body");
// }

