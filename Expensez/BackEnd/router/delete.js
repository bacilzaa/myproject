const express = require("express");
const deleted = express.Router();

const mysql = require('mysql');
const connecttion = require('../connection.js');

deleted.post('/delete',(req,res)=>{
    console.log(req.body)
    var sql = `DELETE FROM expense_item WHERE id = ${req.body.id}`
    connecttion.con.query(sql,(err,result)=>{
      if(err) throw err;
      console.log("Delete success")
      res.send({Message:"ลบข้อมูลเรียบร้อย"})
    })
})

module.exports = deleted