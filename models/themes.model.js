const mongoose = require('mongoose');
const schema = mongoose.Schema({
    nameTheme: String,
    css: String,
    html: String,
    js: String
});
module.exports = mongoose.model('themes', schema);