const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {type:String, require:true},
    lastName: {type:String, require:true},
    email: {type:String, require:true},
    password: {type:String, require:true},
    typeUser: {type:Array, require:true},
    cart: {type:Array, require:true},
    pricingSelected: {type:Array, require:true},
    userStatus: {type:String, require:true},
    billing: {type:Array, require:true},
    address: {type:String, require:true},
    address2: {type:String},
    city: {type:String, require:true},
    country: {type:String, require:true},
    phone: {type:String, require:true},
    webPage: {type:String},
    zipCode: {type:String, require:true},
    terms:{type: Boolean, require:true},
    date:{type: Date, require: true}
});
module.exports = mongoose.model('users', userSchema);