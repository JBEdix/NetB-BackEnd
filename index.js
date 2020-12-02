const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

//midlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.send('Servidor backen en linea');
});


app.listen(7777, () => {
    console.log('Server up');
})