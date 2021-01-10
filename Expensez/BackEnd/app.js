const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.set('Access-Control-Allow-Origin', '*')
    next();
  });

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

const mysql = require('mysql');
const connection = require('./connection.js')


var test = require('./router/test.js');
var login = require('./router/login.js');
var register = require('./router/register.js');
var AddorUpdate = require('./router/AddorUpdate');
var category = require('./router/category');
var getData = require('./router/getData');
var deleted = require('./router/delete.js');


app.use(login)
app.use(test)
app.use(register)
app.use(AddorUpdate)
app.use(category)
app.use(getData)
app.use(deleted)

app.listen(3000,()=>{
    console.log("app start")
})

module.exports = app