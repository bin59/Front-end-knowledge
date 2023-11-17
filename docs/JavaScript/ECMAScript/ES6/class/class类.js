/*
    Class（面线对象编程）
    ES6提供的新语法，引入Class（类）的概念，作为对象的模板。通过class关键字作为定义类

    class 类名 {
        // 默认添加一个空的constructor()
        constructor(){
        }
    }
*/

//class
class Person{
    //构造方法 名字不能修改
    constructor(name){
        this.name = name
    }
    //方法必须使用该语法, 不能使用 ES5 的对象完整形式
    // class类的所有方法都定义在prototype上
    // 等价于 Person.prototype.say()=>{...}
    
    call(){
        console.log(this.name + "我可以打电话!!")
    }
}

let p1 = new Person('Jack1'),
    p2 = new Person('Jack2')
console.log(p1)
console.log(p2)

console.log(p1.__proto__ == Person.prototype)
console.log(p1.__proto__ == p2.__proto__)

p1.call()

