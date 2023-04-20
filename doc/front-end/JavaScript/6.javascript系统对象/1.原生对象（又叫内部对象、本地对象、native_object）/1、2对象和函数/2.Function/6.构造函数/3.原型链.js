/*
原型链
实例对象(proto)与原型(prototype)之间的连接，叫原型链
js在创建对象的时候，都有内置属性proto，用于指向构造函数的原型对象(prototype)

(内部原型)proto和(构造器原型)prototype
1、每个对象都有proto属性，原型链上的对象正是依赖这个属性连接在一起；

2、作为一个对象，当你访问一个属性和方法的时候，如果当前对象无该属性或方法的时候，
js将会访问这个对象的proto属性所指的上一个对象，并在那个对象里面找到属性或方法，
如果找不到，那么就会继续通过那个对象的proto属性指向的对象向上查找，直到这个链表结束;
*/

/*
1. 原型链(图解)
  * 访问一个对象的属性时，
    * 先在自身属性中查找，找到返回
    * 如果没有, 再沿着__proto__这条链向上查找, 找到返回
    * 如果最终没找到, 返回undefined
  * 别名: 隐式原型链
  * 作用: 查找对象的属性(方法)
2. 构造函数/原型/实体对象的关系(图解)
3. 构造函数/原型/实体对象的关系2(图解)
*/

  // console.log(Object)
  //console.log(Object.prototype)
  console.log(Object.prototype.__proto__)
  function Fn() {
    this.test1 = function () {
      console.log('test1()')
    }
  }
  console.log(Fn.prototype)
  Fn.prototype.test2 = function () {
    console.log('test2()')
  }

  var fn = new Fn()

  fn.test1()
  fn.test2()
  console.log(fn.toString())
  console.log(fn.test3)
  // fn.test3()


  /*
  1. 函数的显示原型指向的对象默认是空Object实例对象(但Object不满足)
   */
  console.log(Fn.prototype instanceof Object) // true
  console.log(Object.prototype instanceof Object) // false
  console.log(Function.prototype instanceof Object) // true
  /*
  2. 所有函数都是Function的实例(包含Function)
  */
  console.log(Function.__proto__===Function.prototype)
  /*
  3. Object的原型对象是原型链尽头
   */
  console.log(Object.prototype.__proto__) // null
