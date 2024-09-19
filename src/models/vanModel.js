const mongoose = require('mongoose');

const VanSchema = mongoose.Schema({

    van1: {
        van_id: "van_001",
        name: "Explorer 1",
        pictureUrl: "http://example.com/vans/explorer1.jpg",
        category: "Camper",
        capacity: "4",
        pricePerDay: 120,
        description: "A comfortable van for family trips.",
        available: true
    },

    // van2: {
    //     van_id: "van_002",
    //     name: "Adventurer 2",
    //     pictureUrl: "http://example.com/vans/adventurer2.jpg",
    //     category: "Van",
    //     capacity: "2",
    //     pricePerDay: 90,
    //     description: "Perfect for couples.",
    //     available: false
    // },
    // van3: {
    //     van_id: "van_003",
    //     name: "Voyager 3",
    //     pictureUrl: "http://example.com/vans/voyager3.jpg",
    //     category: "SUV",
    //     capacity: "5",
    //     pricePerDay: 150,
    //     description: "Spacious and comfortable SUV.",
    //     available: true
    // },

});

const Vans = mongoose.model("Vans", VanSchema);

module.exports = Vans;