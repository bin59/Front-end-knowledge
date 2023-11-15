// 静态属性Class本身的属性，直接ClassName.属性，而不是实例对象this上的属性
// 静态方法Class本身的方法，直接ClassName.方法()，而不是实例对象this上的方法
class Person {
    //关键字static，定义一个静态属性num
    static num = 100
    //关键字static，定义一个静态方法fn
    static fn(){
        return  '我是静态方法fn'
    }
}
// 旧方法(ES6之前)
Person.id = 1

console.log(Person.num)
console.log(Person.id)
console.log(Person.fn())

class fn extends Person{}
console.log(fn.num)
console.log(fn.id)
console.log(fn.fn())

// 
let p1 = new Person()
console.log(p1.num)
console.log(p1.id)
// console.log(p1.fn())