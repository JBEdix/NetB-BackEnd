const express = require('express');
const router = express.Router();
const users = require('../models/users.model');
const mongoose = require('mongoose');

//Ver usuarios
//http://localhost:7777/users
router.get('/', (req, res) => {
    users.find({userStatus:{$ne: 'D'}},{})
    .then( result => {
        res.send(result);
        res.end();
    })
    .catch(err => {
        res.send(err);
        res.end();
    });
});

// Agregar nuevo usuario SignIn
//http://localhost:7777/users
router.post('/', (req, res) => {
    users.insertMany(
        {
            _id: mongoose.Types.ObjectId(),
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            typeUser: req.body.typeUser,
            password: req.body.password,
            cart: [],
            pricingSelected: req.body.pricingSelected,
            userStatus: 'A',
            billing: [],

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

//http://localhost:7777/users/login
router.get('/login', (req, res) => {
    users.find({
        email: req.body.email,
        password: req.body.password
    })
    .then( result => {
        let status;
        if (result[0].length === 0) {
            status = {ok: 0}
        }else{
            status = {ok: 1}
        }
        res.send(status);
        res.end();
    })
    .catch(err => {
        res.send(err);
        res.end();
    });
});

//Editar Usuario
//http://localhost:7777/users
router.put('/:idUser', (req, res) => {
    users.update(
        {
            _id: mongoose.Types.ObjectId(req.params.idUser)
        },
        {
            $set:{
                name: req.body.name,
                lastName: req.body.lastName,
                email: req.body.email,
                typeUser: req.body.typeUser,
                password: req.body.password,
                cart: req.body.cart,
                pricingSelected: req.body.pricingSelected,
                userStatus: 'A',
                billing: req.body.billing
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


// Eliminar Usuario
//http://localhost:7777/users/delete/dsihfsdj23
router.put('/delete/:idUser', (req, res) => {
    users.update(
        {
            _id: mongoose.Types.ObjectId(req.params.idUser)
        },
        {
            $set:{
                userStatus: 'D',
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

// Cambiar contraseña changePass
//http://localhost:7777/users/changepass/dsihfsdj23
router.put('/changepass/:idUser', (req, res) => {
    users.update(
        {
            _id: mongoose.Types.ObjectId(req.params.idUser)
        },
        {
            $set:{
                password: req.body.password
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

// Agregar al carrito AddToCart
//http://localhost:7777/users/sdkfjdsf/cart
router.post('/:idUser/cart', (req, res) => {
    users.updateMany(
        {
            _id: mongoose.Types.ObjectId(req.params.idUser)
        },
        {
            $push:{
                "cart": 
                {
                    $each:[{
                        _id: mongoose.Types.ObjectId(req.body._id),
                        nameProduct: req.body.nameProduct,
                        price: req.body.price,
                        image: req.body.image,
                        description: req.body.description,
                        specs: req.body.specs,
                        amount: req.body.amount,
                        categories: req.body.categories,
                        shippingPrice: req.body.shippingPrice
                    }]
                    
                    
                }
            }
        },
        { 
            arrayFilters: [{"element.pid":1}], 
            multi: true
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