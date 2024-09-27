const mongoose = require('mongoose');
const fridgeItemSchema = new mongoose.Schema({
    name: String,
    dateAdded: { type: Date, default: Date.now },
    userId: { type: String, required: true }
})

module.exports = mongoose.model('FridgeItem', fridgeItemSchema)