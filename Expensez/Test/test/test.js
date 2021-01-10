var linkedlist = require('../linkedlist.js');
var assert = require("chai").assert;
var mocha = require('mocha');
var describe = mocha.describe;

describe('Test getHead,Tail', () => {
    it('getHead', () => {
        var list = new linkedlist();
        var res = list.getHead()
        assert.strictEqual(res, null)
    })

    it('getTail', () => {
        var list = new linkedlist();
        var res = list.getTail()
        assert.strictEqual(res, null)
    })

})

describe('Test append And Prepend', () => {
    it('prepend 1 value', () => {
        var list = new linkedlist();
        var res = list.prepend("1");
        assert.strictEqual(res.head.value, "1")
        console.log(res)
    })
    it('append 1 value', () => {
        var list = new linkedlist();
        var res = list.append("1");
        assert.strictEqual(res.head.value, "1")
        console.log(res)
    })
    it('prepend 1 value append 1 value', () => {
        var list = new linkedlist();
        var res = list.prepend("1");
        res = list.append("2");
        console.log(res)
        assert.strictEqual(res.head.value, "1")
        assert.strictEqual(res.tail.value, "2")

    })
    it('prepend 2 value', () => {
        var list = new linkedlist();
        var res = list.prepend("1");
        res = list.prepend("2");
        console.log(res)
        assert.strictEqual(res.head.value, "2")
        assert.strictEqual(res.head.next.value, "1")
    })
    it('append 2 value', () => {
        var list = new linkedlist();
        var res = list.append("1");
        res = list.append("2");
        console.log(res)
        assert.strictEqual(res.head.value, "2")
        assert.strictEqual(res.next.value, "1")
    })
})


describe("test find", () => {
    it('find 2 of (1,2)', () => {
        var list = new linkedlist();
        var res = list.prepend("1")
        res = list.prepend("2")
        res = list.find("2")
        console.log(res)
        assert.strictEqual(res.value, "2")
    })

    it('find Head = null', () => {
        var list = new linkedlist();
        var res = list.find()
        console.log(res)
        assert.strictEqual(res, null)

    }

    )

    it('find none value', () => {
        var list = new linkedlist();
        var res = list.prepend("1")
        res = list.prepend("2")
        res = list.find()
        console.log(res)
        assert.strictEqual(res, null)
    })

})

describe('test delete', () => {
    it('delete none node', () => {
        var list = new linkedlist();
        var res = list.delete()
        console.log(res)
        assert.strictEqual(res, null)
    })
    it('delete 2 of (1,2)', () => {
        var list = new linkedlist();
        var res = list.prepend("1")
        res = list.prepend("2")
        res = list.delete("2")
        console.log(res)
        assert.strictEqual(res.next.value, "1")

    })

    it('deleteHead', () => {
        var list = new linkedlist();
        var res = list.prepend("1")
        res = list.append("2")
        res = list.deleteHead()
        console.log(res)
        assert.strictEqual(res.value, "1")
        assert.strictEqual(res.next.value, "2")
    })

    it('deleteHead tail=null', () => {
        var list = new linkedlist();
        var res =list.prepend("1")
        res =list.deleteHead()
        console.log(res)
        assert.strictEqual(res.value, '1')
    })

    it('deleteHead none node', () => {
        var list = new linkedlist();
        var res = list.deleteHead()
        console.log(res)
        assert.strictEqual(res,null)
    })

    it('deleteAll', () => {
        var list = new linkedlist();
        var res =list.prepend("1")
        res =list.append("2")
        res =list.delete("1")
        res =list.delete("2")
        console.log(res)
        assert.strictEqual(res.value,'2')
    })

    it('delete tail', () => {
        var list = new linkedlist();
        var res =list.prepend("1")
        res =list.append("2")
        res =list.append("3")
        res =list.delete("3")
        console.log(res)
        assert.strictEqual(res.value,'3')

    })


})

describe("to array", () => {
    it("to array 1 value", () => {
        var list = new linkedlist()
        var res =list.prepend("1")
        res =list.toArray()
        console.log(res)
        assert.strictEqual(res[0].value,"1")
    })
    it("to array 2 value", () => {
        var list = new linkedlist()
        var res =list.prepend("1")
        res =list.append("2")
        res =list.toArray()
        console.log(res)
        assert.strictEqual(res[0].value,"1")
        assert.strictEqual(res[0].next.value,"2")
    })
})

describe("to String", () => {
    it('toString 1 value', () => {
        var list = new linkedlist()
        var res =list.prepend("1")
        res =list.toLinkString()
        console.log(res)
        assert.strictEqual(res,"1")
    })
	it('toString 2 value', () => {
        it('toString 2 value',()=>{
        var list = new linkedlist()
        var res =list.prepend("1")
        res =list.append("2")
        res =list.toLinkString()
        console.log(res)
        assert.strictEqual(res,"12")
    })
    })
})
describe('test reverse', () => {
     it('reverse 3 value',()=>{
         var list = new linkedlist()
        var res =list.prepend("1")
        res =list.append("2")
        res =list.append("3")
        res =list.reverse()
        console.log(res)
        assert.strictEqual(res.head.value,"3")
        assert.strictEqual(res.head.next.value,"2")
        assert.strictEqual(res.head.next.next.value,"1")
    })
})