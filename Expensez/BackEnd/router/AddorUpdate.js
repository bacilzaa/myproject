const express = require('express');
const AoU = express.Router();

const mysql = require('mysql');
const connection = require('../connection.js');

AoU.post("/AddorUpdate", function (req, res) {
    console.log(req.body)
    if (req.body.id == null) {
        var sql_1 = `INSERT INTO expense_item (id, description, price, created, user_id, category_id) 
                 VALUES  (NULL, '${req.body.des}', '${req.body.price}', 
                NOW(), '${req.body.user_id}', '${req.body.cate_id}')`;
        connection.con.query(sql_1, (err, result) => {

            if (err) throw err;

            console.log("add success")
            res.send({ Message: "Add item Success!" })
        })
    } else {
        var sql_2 = `UPDATE expense_item SET name='${req.body.name}',description='${req.body.des}',price=${req.body.price},updated=NOW() 
                    WHERE id=${req.body.id}`

        connection.con.query(sql_2, (err, result) => {

            if (err) throw err;

            console.log("update success")
            res.send({ Message: "Update Success!" })
        })
    }
})

module.exports = AoU