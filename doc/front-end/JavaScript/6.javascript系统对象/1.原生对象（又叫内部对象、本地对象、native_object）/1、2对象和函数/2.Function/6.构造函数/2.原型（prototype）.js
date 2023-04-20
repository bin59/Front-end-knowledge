/*
原型（对象属性）
    每个函数都有一个prototype属性，即显式原型，它默认指向一个Object空对象(即称为: 原型对象)，
    这个对象包含了通过构造函数所创建的实例对象共享的属性和方法

    原型对象中有一个属性constructor, 它指向函数对象

隐式原型（对象属性）
    实例化对象和原型之间的连接，叫做原型链（隐式连接）
    每个对象都会有一个__proto__属性(内置属性)，可称为隐式原型，用于指向创建它的构造函数里面
    的原型对象(prototype属性)

    对象的隐式原型的值为其对应构造函数的显式原型的值

实例对象的隐式原型会指向创建它的构造函数里面的显式原型


1. 读取对象的属性值时: 会自动到原型链中查找
2. 设置对象的属性值时: 不会查找原型链, 如果当前对象中没有此属性, 直接添加此属性并设置其值
3. 方法一般定义在原型中, 属性一般通过构造函数定义在对象本身上
*/

function Cat(name,color){
    this.name = name
    this.color  =color

}

// 每个函数都有一个prototype属性, 它默认指向一个对象(即称为: 原型对象)
console.log(Cat.prototype)//Cat的原型对象   {constructor: ƒ} 
console.log(typeof Cat.prototype)//'object'
// 函数原型对象中有一个属性constructor, 它指向函数对象本身
console.log(Cat.prototype.constructor)//ƒ Cat(name,color){...}
console.log(Cat.prototype.constructor===Cat)//true

// 在Cat原型上添加共享属性和方法
// 方法一般定义在原型中, 属性一般通过构造函数定义在对象本身上

// 方法一
// Cat.prototype.eat = function () {
//     console.log(this.name+'正在吃鱼')
// }
// Cat.prototype.type = '猫科动物'

//方法二：简写,清空原型prototype重新设置
Cat.prototype = {
    constructor:Cat,//要重新设置Cat
    eat(){
        console.log(this.name+'正在吃鱼')
    },
    type:'猫科动物'
}

let cat1 = new Cat('小黄猫','黄色'),
    cat2 = new Cat('小黑猫','黑色')

console.log(cat1)//Cat {name: '小黄猫', color: '黄色'}
console.log(cat2)//Cat {name: '小黑猫', color: '黑色'}
console.log(cat2.eat)//ƒ eat(){...}
console.log(cat1.type, cat2.type)//猫科动物 猫科动物

cat1.eat()//小黄猫正在吃鱼
cat2.eat()//小黑猫正在吃鱼

console.log('---_proto_属性---');        
console.log(cat1.__proto__)// 指向的是Cat的原型对象  {type: '猫科动物', constructor: ƒ, eat: ƒ}
console.log(cat2.__proto__)//{type: '猫科动物', constructor: ƒ, eat: ƒ}

cat1.__proto__.eat()//undefined正在吃鱼
console.log(cat1.__proto__.name)//undefined  __proto__  =>  Cat.prototype中没有name
console.log(cat1.__proto__.type)//猫科动物

// 对象的隐式原型的值为其对应构造函数的显式原型的值
console.log(cat1.__proto__==Cat.prototype)//true
