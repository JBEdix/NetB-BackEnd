const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const database = require('./modules/database.module');
const usersRouter = require('./routers/users.router');
const storesRouter = require('./routers/stores.router');
const pricingRouter = require('./routers/pricing.router');
const typeUsersRouter = require('./routers/typeUsers.router')

const app = express();

//midlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/users', usersRouter);
app.use('/stores', storesRouter);
app.use('/pricing', pricingRouter);
app.use('/type-users', typeUsersRouter);


app.listen(7777, () => {
    console.log('Server up en 7777');
});