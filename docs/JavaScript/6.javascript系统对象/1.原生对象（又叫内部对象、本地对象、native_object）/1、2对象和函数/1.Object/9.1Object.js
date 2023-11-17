/********
Object 对象
    JavaScript所有的事物都是可以称为对象，例如String、Number、Array、Function...

例子:
    生活中的汽车就是一个对象，
    零件、颜色、尺寸、型号等等这些就是对象的属性，汽车可以载人、飙车等等这些就是对象的方法(功能)

总结:万物皆对象
********/

// js如何创建对象
// 1.通过new关键字
let obj1 = new Object()
console.log(obj1)

// 2.对象字面量
let obj2 = {}
console.log(obj2)

//4.构造函数创建对象的方式

// yi
obj1['fn'] = function fn1(a, b) {
  console.log('我是fn1的函数')
}
console.log(obj1)

// er
function f(name, age) {
  this.name = name
  this.age = age
}
var son = new f('张三', 20)
var son2 = new f('王五', 20)
console.log(son)
console.log(son2)

//4.Object.create(原型)返回一个新对象
function Person() {}
Person.prototype.lasteName = 'xu'

//相当于obj2借用了Person()的原型，复制了一份，让他成为自己的原型
var obj4 = Object.create(Person.prototype)

console.log(obj4)

console.log('----------------')
//一.设置对象的属性
// 1.通过点的形式  obj.属性
obj1.name = 'hy'
obj1.id = 1
console.log(obj1)

// 2.中括号的方式  obj["属性"]
obj2['name'] = '小明'
obj2['id'] = 2
console.log(obj2)

// 区别
// 比如键名为数字

obj1['0'] = '1'
obj1['0'] = '2'
console.log(obj1)
// 键名是独一无二的，如果出现一样的键名，那么后则余覆盖前者

// obj1."1" = "1";//报错
// obj1.1 = "1";//报错

// 相对来说 []使用更广泛

console.log('----------------')
// 二、获取对象属性
console.log(obj1.name, obj1.id) // . 方式
console.log(obj1['name'], obj1['id']) // []方式

// 获取不存在的属性时
console.log(obj1.aaa) ///undefined
console.log(obj1['aaa']) ///undefined

console.log('----------------')
// 三、修改对象的属性值
// 先获取对象属性，再重新赋值
obj1['name'] = 'xiaohong'
console.log(obj1['name'])

// 修改obj1的fn中函数体
// 修改前
console.log(obj1['fn'])
obj1['fn']() //我是fn1的函数

// 修改后
obj1['fn'] = function fn1(a, b) {
  console.log('我是修改后的fn1的函数')
}
console.log(obj1['fn'])
obj1['fn']() //我是fn1的函数

console.log(obj1)

console.log('----------------')
// 四.删除对象的属性
// delete 关键词
// delete 属性名;

console.log(obj1.name) //xiaohong
delete obj1.name
console.log(obj1.name) //undefined
