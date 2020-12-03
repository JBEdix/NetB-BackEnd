const mongoose = require('mongoose');
const schema = mongoose.Schema({
    description: String,
    price: Number
});
module.exports = mongoose.model('pricing', schema);