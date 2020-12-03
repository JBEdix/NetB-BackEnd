const mongoose = require('mongoose');
const bd = 'netb';
const port = '27017';
const host = 'localhost';

class Database{
    constructor(){
        this.conectar();
    }

    conectar(){
        mongoose.connect(`mongodb://${host}:${port}/${bd}`, 
        { useNewUrlParser: true, useUnifiedTopology: true })
        .then(resultado=>{
            console.log('se conecto a mongodb');
        })
        .catch(err => console.log(err));
    }
}

module.exports = new Database();