const express = require('express');
const gData = express.Router();


const connection = require('../connection.js');

gData.post("/getData", (req, res) => {
    console.log(req.body)

    var expense_id = req.body.expense_id
    var user_id = req.body.user_id;
    var cate_id = req.body.cate_id;
    var sql_1;
    var sql_2;
    var sql_3;


    if(expense_id != undefined){
        sql_1 = `SELECT * FROM expense_item WHERE id = ${expense_id}`
        connection.con.query(sql_1, (err_1, result_1) => {
            if (err_1) throw err_1
            res.send({Data:result_1})
        })
    }

    if(cate_id != undefined){
    if (cate_id == '0') {
        sql_1 = `SELECT sum(price) as SUM FROM expense_item WHERE user_id=${user_id}`;
        sql_2 = `SELECT * FROM category INNER JOIN expense_item ON category.id=expense_item.category_id WHERE category.user_id=${user_id}`
        sql_3 = `SELECT * FROM category INNER JOIN expense_item ON category.id=expense_item.category_id WHERE category.user_id=${user_id} GROUP BY expense_item.category_id`

        connection.con.query(sql_1, (err_1, result_1) => {
            if (err_1) throw err_1
            connection.con.query(sql_2, (err_2, result_2) => {
                if (err_2) throw err_2
                connection.con.query(sql_3, (err_3, result_3) => {
                    if (err_3) throw err_3
                    res.send({ Data: result_2, SUM: result_1,result_3})
                })
            })
        })
    } else {
        sql_1 = `SELECT sum(price) as SUM FROM expense_item WHERE user_id=${user_id} AND category_id=${cate_id}`;
        sql_2 = `SELECT * FROM category INNER JOIN expense_item ON category.id=expense_item.category_id WHERE category.user_id=${user_id} AND category.id=${cate_id}`

        connection.con.query(sql_1, (err_1, result_1) => {
            if (err_1) throw err_1
            connection.con.query(sql_2, (err_2, result_2) => {
                if (err_2) throw err_2
                    res.send({ Data: result_2, SUM: result_1})
                })
            })
    }
}

})

module.exports = gData