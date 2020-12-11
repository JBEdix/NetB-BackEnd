const mongoose = require('mongoose');
const schema = mongoose.Schema({
    description: {type:String, require:true},
    price: {type:Number, require:true},
});
module.exports = mongoose.model('pricing', schema);