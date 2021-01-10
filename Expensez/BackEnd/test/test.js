var backend = require('../app');
var chai = require('chai');
var chaihttp = require('chai-http');
var assert = require("chai").assert;
chai.use(chaihttp)
var mocha = require('mocha')
var describe = mocha.describe;
chai.should();

describe('ทดสอบ backend', () => {

    describe('ทดสอบ router test',()=>{
        it('test',(done)=>{
            chai.request(backend)
                .get('/test')
                .then((data)=>{
                    console.log(data.body)
                    assert.strictEqual(data.body.Message,'test connect success')
                    setTimeout(done);
                })
                
               
                
        })
    })

    describe('ทดสอบ router AddorUpdate', () => {
        it('Add expense', (done) => {
            chai.request(backend)
                .post('/AddorUpdate')
                .send({ des: "soup", price: "100", user_id: "1", cate_id: "1" })
                .then( (data)=>{
                    console.log(data.body)
                    assert.strictEqual(data.body.Message,'Add item Success!')
                    setTimeout(done);
                })
            
           
        }),
            it('Update expense', (done) => {
                chai.request(backend)
                    .post('/AddorUpdate')
                    .send({ des: "soup", price: "100", user_id: "1", cate_id: "1", id: 1 })
                    .then((data)=>{
                        console.log(data.body)
                        assert.strictEqual(data.body.Message,'Update Success!')
                        setTimeout(done);
                    })
                
         
            })
    })

    describe('ทดสอบ router category',()=>{
        it('ดึงข้อมูล category',(done)=>{
            chai.request(backend)
                .post('/datacategory')
                .send({user_id:"1"})
                .then((data)=>{
                    console.log(data.status)
                    data.should.have.status(200)
                    setTimeout(done);
                })
                
                
        }),
        it('เพิ่มข้อมูล category',(done)=>{
            chai.request(backend)
                .post('/category')
                .send({user_id:1,name:'test',color:'red'})
                .then((data)=>{
                    console.log(data.status)
                    data.should.have.status(200)
                    setTimeout(done);
                })
                
                
        })
    })

    describe('ทดสอบ router delete',()=>{
        it('ลบข้อมูล รายจ่าย',(done)=>{
            chai.request(backend)
                .post('/delete')
                .send({id:1})
                .then((data)=>{
                    console.log(data.body)
                    data.should.have.status(200)
                    assert.strictEqual(data.body.Message,"ลบข้อมูลเรียบร้อย")
                    setTimeout(done);
                })
                
               
        })
    })

    describe('ทดสอบ router getData',()=>{
        it('ดึงข้อมูล รายจ่าย',(done)=>{
            chai.request(backend)
                .post('/getData')
                .send({expense_id:1})
                .then((data)=>{
                    data.should.have.status(200)
                    setTimeout(done);
        })
        })
    })

    describe('ทดสอบ router login และ register',()=>{
        it('login',(done)=>{
            chai.request(backend)
                .post('/login')
                .send({username:"test",password:"test",type:"normal"})
                .then((data)=>{
                    data.should.have.status(200)
                    done()
                })
                
                
      
        }),
        it('register',(done)=>{
            chai.request(backend)
                .post('/register')
                .send({username:"test",password:"test"})
                .then((data)=>{
                    data.should.have.status(200)
                    done()
                })
          
                
        })
    })

   
    
        
})


