{/*
构造函数
    是一种特殊的函数，主要用来创建和初始化对象，也就是为对象的成员变量赋初始值。它与 `new` 一起使用才有意义

    我们可以把对象中一些公共的属性和方法抽取出来，然后封装到这个构造函数里面。

构造函数和普通函数的区别
    其实普通函数也是属于构造函数，构造函数的创建方式和普通函数没有区别，不同的是构造函数习惯上首字母大写。

    主要功能的区别之外，构造函数的主要功能为初始化对象(初始化对象添加属性和方法)，特点是和new关键字一起使用

    this 的指向也有所不同
        1.以函数的形式调用时，this 永远都是 window。比如`fun();`相当于`window.fun();`
        2.以方法的形式调用时，this 是调用方法的那个对象
        3.以构造函数的形式调用时，this 是新创建的实例对象
*/
    // 使用构造函数
    function Student(_id,_name,_age,_sex){
        this.id = _id
        this.name = _name
        this.age = _age
        this.sex = _sex
        this.identity = '学生'
        this.say = function (){
            console.log(`我是${this.identity}${this._name}`);
        }
    }

    // 实例化对象之前不能添加属性
    // Student.a = 1
    // console.log(Student.a)

    // 实例化对象
    let s1 =new Student(1,'小明',18,'男')
    let s2 =new Student(2,'小红',17,'女')
    
    console.log(s1)
    console.log(s2)
    s2.say()//我是学生小红
    console.log(s1.identity == s2.identity)//true

    // 实例化对象之后可以添加属性
    s1.vip = '富二代'
    console.log(s1)

    // 每次new都是开辟了一个新的内存空间，是相互独立的
    let s3 =new Student(2,'小红',17,'女')
    console.log(s1.id == s2.id)//false
    console.log(s2 == s3)//false

    /* 
    new 一个构造函数的执行流程
        new关键字会做下面这四件事：
        （1）开辟内存空间，在内存中创建一个新的空对象;
            let obj ={}
        （2）让this指向这个新的对象;
            将这个空对象的_proto_指向构造函数里面的原型对象（prototype属性）。
            cat1.__proto__ = Cat().prototype
        （3）执行构造函数里面的代码，给这个新对象添加属性和方法;
            将构造函数的作用域赋给新对象，Cat构造函数的this指向的是新对象cat1，对cat1对象赋值成员比如：name、id、color
            Cat.call(this,name,id.color)
        （4）返回这个新对象（返回this）;
            所以构造函数里面不需要 return
            return cat1
    */

    /*
    静态成员和实例成员
        JavaScript 的构造函数中可以添加一些成员，可以在构造函数本身上添加，
        也可以在构造函数内部的 this 上添加。通过这两种方式添加的成员，
        就分别称为静态成员和实例成员。
        -   静态成员：在构造函数本上添加的成员称为静态成员，只能由构造函数本身来访问。
        -   实例成员：在构造函数内部创建的对象成员称为实例成员，只能由实例化的对象来访问。

    类、实例
        使用同一个构造函数创建的对象，我们称为一类对象，
        也将一个构造函数称为一个 类。
        通过一个构造函数创建的对象，称为该类的实例。

    instanceof
        使用 instanceof 可以检查**一个对象是否为一个类的实例**。
        对象 instanceof 构造函数;
        如果是，则返回 true；否则返回 false。
    */


    function Person() {}
    function Dog() {}

    var person1 = new Person(),
        dog1 = new Dog()

    console.log(person1 instanceof Person)// 打印结果： true
    console.log(dog1 instanceof Person) // 打印结果：false

    // 根据上方代码中的最后一行，需要补充一点：所有的对象都是 Object 的后代，因此 `任何对象 instanceof Object` 的返回结果都是 true**。

}

{
    

// 1. instanceof是如何判断的?
// * 表达式: A instanceof B
// * 如果B函数的显式原型对象在A对象的原型链上, 返回true, 否则返回false
// 2. Function是通过new自己产生的实例



/*
案例1
 */
function Foo() {  }
var f1 = new Foo()
console.log(f1 instanceof Foo) // true
console.log(f1 instanceof Object) // true

/*
案例2
 */
console.log(Object instanceof Function) // true
console.log(Object instanceof Object) // true
console.log(Function instanceof Function) // true
console.log(Function instanceof Object) // true

function Foo() {}
console.log(Object instanceof  Foo) // false

}