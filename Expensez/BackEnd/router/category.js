const express = require('express');
const category = express.Router();

const mysql = require('mysql');
const connection = require('../connection.js');

category.post("/datacategory", function (req, res) {
  console.log(req.body)
    var sql = `SELECT * FROM category WHERE user_id = ${req.body.user_id} ORDER BY id DESC`;
    connection.con.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(result)
    })
  })

  category.post("/category",(req,res)=>{
    var sql_1 = `SELECT * FROM category WHERE user_id = ${req.body.user_id} ORDER BY id DESC`;
    var sql_2 = `INSERT INTO category (id, name_category, color, user_id) VALUES (NULL, '${req.body.name}', '${req.body.color}', '${req.body.user_id}')`;
    console.log(req.body)
    var Already = false;
    connection.con.query(sql_1,(err,result)=>{
      if(err) throw err
      for( re of result){
        console.log(re)
        if(re == undefined){
          break;
        }
        else if(re.name_category == req.body.name){
          Already = true
          res.send({Message:"Name is Already",Status:false});
        }
        else if(re.color == req.body.color){
          Already = true
          res.send({Message:"Color is Already"});
        }
      }
      if(!Already){
      connection.con.query(sql_2,(err_2,result_2)=>{
        if(err_2) throw err_2
        res.send({Message:"Add Category Success",Status:true,SelectNew:result_2.insertId})
      })
     }
    })
  })



  module.exports = category