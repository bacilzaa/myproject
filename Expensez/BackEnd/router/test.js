
var express = require("express");
var test = express.Router();

const mysql = require('mysql');
const connection = require('../connection.js');

test.get("/test", (req, res) => {
    connection.con.connect((err, result) => {
        if(err) throw err
        res.send({Message:"test connect success"})
    })
})

module.exports = test;