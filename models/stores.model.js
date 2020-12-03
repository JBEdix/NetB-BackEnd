const mongoose = require('mongoose');
const schema = mongoose.Schema({
    nameStore: String,
    address: String,
    logo: String,
    themes: Array,
    products: Array
});
module.exports = mongoose.model('stores', schema);