const express = require('express');
const router = express.Router();
const stores = require('../models/stores.model');
const mongoose = require('mongoose');

//Ver stores
//http://localhost:7777/store
router.get('/', (req, res) => {
    stores.find({},{})
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