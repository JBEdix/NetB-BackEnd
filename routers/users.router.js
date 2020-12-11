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
            address: req.body.address,
            address2: req.body.address2,
            city: req.body.city,
            country: req.body.country,
            phone: req.body.phone,
            webPage: req.body.webPage,
            zipCode: req.body.zipCode,
            date: new Date(),
            terms: true
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
router.post('/login', (req, res) => {
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
                billing: req.body.billing,
                address: req.body.address,
                address2: req.body.address2,
                city: req.body.city,
                country: req.body.country,
                phone: req.body.phone,
                webPage: req.body.webPage,
                zipCode: req.body.zipCode,
                date: new Date(),
                terms: true
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

// Ver productos del carrito getCart
//http://localhost:7777/users/5fc82fa082a3793044d8e4bf/cart
router.get('/:idUser/cart', (req, res) => {
    users.find(
        {
            _id: mongoose.Types.ObjectId(req.params.idUser)
        },
        {
            cart: true
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

//http://localhost:7777/users/5fc82fa082a3793044d8e4bf/delete/5fc81a0b07ab0140b5182f2c
router.delete('/:idUser/delete/:idProduct', (req, res) => {
    users.updateMany(
        {
            _id: mongoose.Types.ObjectId(req.params.idUser)
        },
        {
            $pull: {
                cart:
                {
                    _id: {
                        $eq: mongoose.Types.ObjectId(req.params.idProduct)
                    }
                }   
            }
        },
        {
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

// Select Plan
//http://localhost:7777/users/id/pricing
router.post('/:idUser/pricing', (req, res) => {
    users.updateOne(
        {
            _id: mongoose.Types.ObjectId(req.params.idUser)
        },
        {
            $push:{
                pricingSelected: {
                    _id: mongoose.Types.ObjectId(req.body._id),
                    description: req.body.description,
                    price: req.body.price
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

// Cambiar Plan
//http://localhost:7777/users/id/pricing
router.put('/:idUser/pricing', (req, res) => {
    users.updateOne(
        {
            _id: mongoose.Types.ObjectId(req.params.idUser)
        },
        {
            $set:{
                pricingSelected: {
                    _id: mongoose.Types.ObjectId(req.body._id),
                    description: req.body.description,
                    price: req.body.price
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

module.exports = router;