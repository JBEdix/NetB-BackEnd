const mongoose = require('mongoose');
const schema = mongoose.Schema({
    description: String
});
module.exports = mongoose.model('typeUsers', schema);