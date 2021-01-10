const express = require('express');
const login = express.Router();

const mysql = require('mysql');
const connection = require('../connection.js');

const jwt = require("jwt-simple");

login.post("/login", (req, res) => {
    console.log(req.body)
    var username = req.body.username;
    var password = req.body.password;
    var type = req.body.type;



    if (type == 'normal') {
        console.log(type)
        var sql = `SELECT * FROM users WHERE username = "${username}" AND password = "${password}"`;
        connection.con.query(sql, (err, result) => {
            if (err) throw err
            if (result[0] == undefined) {
                res.send({ Message: "login fail", Status: false })
            }
            else if (result[0].username == username && result[0].password == password) {
                const payload = {
                    sub: result[0].username,
                    main: result[0].id,
                    created: new Date().getTime()//มาจากคำว่า issued at time (สร้างเมื่อ)
                };
                const SECRET = "MY_SECRET_KEY"
                res.send({ Message: "login success", Token: jwt.encode(payload, SECRET), Status: true })
            }
        })
    }
    else if (type == 'google') {
        var sql = `SELECT * FROM users WHERE username = "${username}" AND password = "${password}"`;
        var sql_2 = `INSERT into users (username,password) VALUES ("${username}","${password}")`;
        connection.con.query(sql, (err, result) => {
            if (err) throw err
            if (result[0] == undefined) {
                console.log("noid")
                connection.con.query(sql_2, (err, result) => {
                    if (err) throw err

                    const payload = {
                        sub: username,
                        main: result.insertId,
                        created: new Date().getTime()//มาจากคำว่า issued at time (สร้างเมื่อ)
                    };
                    const SECRET = "MY_SECRET_KEY";

                    res.send({ Message: "login success", Token: jwt.encode(payload, SECRET), Status: true })
                })
            }
            else {
                if (result[0].username == username && result[0].password == password) {
                    const payload = {
                        sub: result[0].username,
                        main: result[0].id,
                        created: new Date().getTime()//มาจากคำว่า issued at time (สร้างเมื่อ)
                    };
                    const SECRET = "MY_SECRET_KEY"
                    res.send({ Message: "login success", Token: jwt.encode(payload, SECRET), Status: true })
                }
            }
        })
    }
})



module.exports = login;