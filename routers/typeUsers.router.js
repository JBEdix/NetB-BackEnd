const express = require('express');
const router = express.Router();
const typeUsers = require('../models/TypeUsers.model');
const mongoose = require('mongoose');

// Listar tipos de usuario
router.get('/', (req, res)=>{
    typeUsers.find({}, {})
    .then( result => {
        res.send(result);
        res.end();
    })
    .catch( err => {
        res.send(err);
        res.end();
    });
});

module.exports = router;