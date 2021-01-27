const mongoose = require('mongoose');
const schema = mongoose.Schema({
    nameStore: {type:String, require:true},
    address: {type:String, require:true},
    logo: {type:String, require:true},
    themes: {type:Array, require:true},
    products: {type:Array, require:true},
    statusStore: {type:String, require:true},
    idUser: {type: mongoose.Schema.Types.ObjectId, ref:'users', require:true}
});
module.exports = mongoose.model('stores', schema);