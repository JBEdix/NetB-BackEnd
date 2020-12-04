// -----------------------------------------------------------------------------------------------
// ---------------------------------------- insertar ---------------------------------------------
// -----------------------------------------------------------------------------------------------

db.users.insertMany([
    {
    "_id":ObjectId(),
    "name":"Jheral",
    "lastName": "Blanco",
    "email": "jheral.blanco@gmail.com",
    "typeUser": [],
    "password": "",
    "cart": [{
        "products": [],
        "subtotal": 12
    }],
    "pricingSelected": [], 
    "userStatus": "A",
    "billing": [
        {
            "_id": ObjectId(),
            "products": [],
            "subtotal": 12,
            "discount": 0.12,
            "taxes": 0.12,
            "total": 12,
            "date": "",
            "shippingAddress": "Comayaguela MDC"
        }
    ]
}]);

db.pricing.insertMany([
    {
        "_id": ObjectId(),
        "description": "Free",
        "price": 0
    },
    {
        "_id": ObjectId(),
        "description": "Oro",
        "price": 15
    },
    {
        "_id": ObjectId(),
        "description": "Platino",
        "price": 35
    },
    {
        "_id": ObjectId(),
        "description": "Diamante",
        "price": 45
    },
]);

db.typeUsers.insertMany([
    {
        "_id": ObjectId(),
        "description": "Administrador"
    },
    {
        "_id": ObjectId(),
        "description": "Empresa"
    },
    {
        "_id": ObjectId(),
        "description": "Cliente"
    },
]);

db.stores.insertMany([{
    "_id": ObjectId(),
    "nameStore": "Gaming Store",
    "address": "Comayaguela MDC",
    "logo": "../assets/img/iddkls/logo.png",
    "themes": [{
        "nameTheme": "Tema Pricipal",
        "css": "",
        "html": "",
        "js":""
    }],
    "products": [
        {
            "_id": ObjectId(),
            "nameProduct": "AMD Ryzen 7 3700X",
            "price": 12,
            "image": [],
            "description": "Procesador de la familia Ryzen",
            "specs": "Nucleos: 8, numero de hilos: 16, Frecuencia: 3.6Ghz - 4.4Ghz, Temperatura max",
            "amount": 20,
            "categories": ["PC Gamer", "Procesador", "amd", "ryzen"],
            "shippingPrice": 400,
            "statusProduct": "AV"
        },
        {
            "_id": ObjectId(),
            "nameProduct": "AMD Ryzen 7 3700X",
            "price": 12,
            "image": [],
            "description": "Procesador de la familia Ryzen",
            "specs": "Nucleos: 8, numero de hilos: 16, Frecuencia: 3.6Ghz - 4.4Ghz, Temperatura max",
            "amount": 20,
            "categories": ["PC Gamer", "Procesador", "amd", "ryzen"],
            "shippingPrice": 400,
            "statusProduct": "AV"
        },
        {
            "_id": ObjectId(),
            "nameProduct": "AMD Ryzen 7 3700X",
            "price": 12,
            "image": [],
            "description": "Procesador de la familia Ryzen",
            "specs": "Nucleos: 8, numero de hilos: 16, Frecuencia: 3.6Ghz - 4.4Ghz, Temperatura max",
            "amount": 20,
            "categories": ["PC Gamer", "Procesador", "amd", "ryzen"],
            "shippingPrice": 400,
            "statusProduct": "AV"
        },
    ],
    "statusStore":"A"
}]);

db.themes.insertMany([{
    "_id": ObjectId(),
    "nameTheme": "",
    "css": "",
    "html": "",
    "js":""
}]);

// -----------------------------------------------------------------------------------------------
// ----------------------------------Hasta aqui insertar------------------------------------------
// -----------------------------------------------------------------------------------------------
db.products.insertMany([{
    "_id": ObjectId(),
    "nameProduct": "AMD Ryzen 7 3700X",
    "price": 12,
    "image": [],
    "description": "Procesador de la familia Ryzen",
    "specs": "Nucleos: 8, numero de hilos: 16, Frecuencia: 3.6Ghz - 4.4Ghz, Temperatura max",
    "amount": 20,
    "categories": ["PC Gamer", "Procesador", "amd", "ryzen"],
    "shippingPrice": 400
}]);

db.billing.insertMany([{
    "_id": ObjectId(),
    "products": [],
    "subtotal": 12,
    "discount": 0.12,
    "taxes": 0.12,
    "total": 12,
    "date": "",
    "shippingAddress": "Comayaguela MDC"
}]);

