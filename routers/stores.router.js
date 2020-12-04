const express = require('express');
const router = express.Router();
const stores = require('../models/stores.model');
const mongoose = require('mongoose');

//get stores
//http://localhost:7777/stores
router.get('/', (req, res) => {
    stores.find({
        statusStore:'A'
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

// AddStore
//http://localhost:7777/stores
router.post('/', (req, res) => {
    stores.insertMany({
        nameStore: req.body.nameStore,
        address: req.body.address,
        logo: '',
        themes: [],
        products: [],
        statusStore: 'A'
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

// actualizar una store
//http://localhost:7777/stores/id
router.put('/:idStore', (req, res) => {
    stores.update(
        {
            _id: mongoose.Types.ObjectId(req.params.idStore)
        },{
            $set: {
                nameStore: req.body.nameStore,
                address: req.body.address,
                logo: req.body.logo,
                themes: req.body.themes,
                products: req.body.products
            }
        })
    .then( result => {
        if (result.length != 0) {
            res.send({ok: 1});
            res.end();
        }
    })
    .catch(err => {
        res.send(err);
        res.end();
    });
});

// Eliminar store
//http://localhost:7777/stores/delete/id
router.put('/delete/:idStore', (req, res) => {
    stores.update(
        {
            _id: mongoose.Types.ObjectId(req.params.idStore)
        },{
            $set: {
                statusStore: 'D'
            }
        })
    .then( result => {
        if (result.length != 0) {
            res.send({ok: 1});
            res.end();
        }
    })
    .catch(err => {
        res.send(err);
        res.end();
    });
});

// Agregar producto
//http://localhost:7777/stores/idStore/add-producto
router.post('/:idStore/product', (req, res) => {
    stores.updateMany(
        {
            _id: mongoose.Types.ObjectId(req.params.idStore)
        },
        {
            $push:{
                products: 
                {
                    
                    _id: mongoose.Types.ObjectId(),
                    nameProduct: req.body.nameProduct,
                    price: req.body.price,
                    image: req.body.image,
                    description: req.body.description,
                    specs: req.body.specs,
                    amount: req.body.amount,
                    categories: req.body.categories,
                    shippingPrice: req.body.shippingPrice,
                    statusStore: "AV"
                    
                }
            }
        }
    )
    .then( result => {
        res.send(result);
        res.end();
    })
    .catch(err => {
        res.send(err);
        res.end();
    });
});

// Detalle producto de una tienda.
//http://localhost:7777/stores/idStore/producto/idProducto
router.get('/:idStore/product/:idProducto', (req, res) => {
    stores.find(
        {
            _id: mongoose.Types.ObjectId(req.params.idStore),
            "products._id":  mongoose.Types.ObjectId(req.params.idProducto)
        },
        {
            "products.$": true
        }
    )
    .then( result => {
        res.send(result[0]);
        res.end();
    })
    .catch(err => {
        res.send(err);
        res.end();
    });
});

// Actualizar producto
//http://localhost:7777/stores/idStore/producto/idProducto
router.put('/:idStore/product/:idProduct', (req, res) => {
    stores.updateOne(
        {
            _id: mongoose.Types.ObjectId(req.params.idStore),
            "products._id":  mongoose.Types.ObjectId(req.params.idProduct)
        },
        {
            $set : {
                "products.$":{
                    _id: mongoose.Types.ObjectId(req.params.idProduct),
                    nameProduct: req.body.nameProduct,
                    price: req.body.price,
                    image: req.body.image,
                    description: req.body.description,
                    specs: req.body.specs,
                    amount: req.body.amount,
                    categories: req.body.categories,
                    shippingPrice: req.body.shippingPrice
                }
            }
        }
    )
    .then( result => {
        res.send(result);
        res.end();
    })
    .catch(err => {
        res.send(err);
        res.end();
    });
});

// Ver productos de una tienda
// 
router.get('/:idStore/product', (req, res) => {
    stores.find(
        {
            _id: mongoose.Types.ObjectId(req.params.idStore)
        },
        {
            products: true
        }
    )
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