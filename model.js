let users=[{
    idUser:'',
    name:'',
    lastName: '',
    email: '',
    typeUser: {
        id: '',
        description: ''
    },
    password: '',
    cart: [{
        products: [],
        subtotal: 12
    }],
    pricingSelected: [{
        idPricing: '',
        description: '',
        price: 12,
        dateSelected: ''
    }], 
    userStatus: ''
}];

let store = [{
    idStore: '',
    nameStore: '',
    address: '',
    logo: '',
    themes: [{
        idThemes: '',
        nameTheme: '',
        css: '',
        html: '',
        js:''
    }],
    idUser: ''
}];

let themes = [{
    idThemes: '',
    nameTheme: '',
    css: '',
    html: '',
    js:''
}];

let products = [{
    idProduct: '',
    nameProduct: '',
    price: 12,
    image: '',
    description: '',
    specs: '',
    amount: '',
    categories: [],
    shippingPrice: 12
}];

let billing = [{
    idBilling: '',
    products: [],
    subtotal:12,
    discount: 0.12,
    taxes: 0.12,
    total: 12,
    date: '',
    hour: '',
    shippingAddress: ''
}];

let pricing = [{
    idPricing: '',
    description: '',
    price: 12
}]