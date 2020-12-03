const express = require('express');
const router = express.Router();
const pricing = require('../models/pricing.model');
const mongoose = require('mongoose');

// Listar precios
// http://localhost:7777/pricing
router.get('/', (req,res) => {
    pricing.find({},{})
    .then(result => {
        res.send(result);
        res.end();
    })
    .catch(err => {
        res.send(err);
        res.end();
    });
});

module.exports = router;