const express = require('express');
const router = express.Router();
const pricing = require('../models/pricing.model');
const mongoose = require('mongoose');

//get pricing
//http://localhost:7777/pricing
router.get('/', (req, res) => {
    pricing.find({
    },{})
    .then( result => {
        res.send(result);
        res.end();
    })
    .catch(err => {
        res.send(err);
        res.end();
    });
});

//New pricing
// http://localhost:7777/pricing
router.post('/', (req, res) => {
    pricing.insertMany({
        description: req.body.description,
        price: req.body.price
    })
    .then( result => {
        res.send(result);
        res.end();
    })
    .catch(err => {
        res.send(err);
        res.end();
    });
});

module.exports = router;