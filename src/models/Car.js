const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    title: String,
    brand: String,
    price: String,
    age: Number,
    services: {
        type:Map,
        of: String
    }
});

module.exports = mongoose.model('Car',CarSchema);