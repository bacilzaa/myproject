const express = require('express');
const register = express.Router();

const mysql = require('mysql');
const connection = require('../connection.js');

const jwt = require("jwt-simple");

register.post("/register", (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    var sql_1 = `SELECT * FROM users WHERE username = "${username}"`;
    var sql_2 = `INSERT into users (username,password) VALUES ("${username}","${password}")`;
    connection.con.query(sql_1, (err, result) => {
        if (err) throw err
        if (result[0] == undefined) {
            connection.con.query(sql_2, (err, result) => {
                if (err) throw err

                const payload = {
                    sub: username,
                    main: result.insertId,
                    created: new Date().getTime()//มาจากคำว่า issued at time (สร้างเมื่อ)
                 };
                const SECRET = "MY_SECRET_KEY";

                res.send({Message:"register success",Status:true,Token:jwt.encode(payload, SECRET)})
            })
        }
        else if(result[0].username == username) {
            console.log(result[0].username)
            res.send({ Message: "username is Already exists" ,Status:false})
        }
    })
})

module.exports = register;