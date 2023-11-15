// *构造函数的继承
{
  function Animal(type, name, color) {
    this.type = type
    this.name = name
    this.color = color
  }
  // 共享方法、属性
  Animal.prototype.eat = function () {
    console.log(this.name + '吃食物')
  }
  Animal.prototype.setName = function (name) {
    this.name = name
  }

  let p = new Animal('人类', '张三', '黄色')
  // p.setName('李四')
  p.name = '李四'
  console.log(p)
  p.eat()

  console.log('1、构造函数继承')
  {
    /*
*1、构造函数继承
    关键:在子类型构造函数中通用call()/apply()改变this,调用父类型构造函数
    作用：将父对象的构造函数绑定在子函数上
    缺点:无法继承父对象的原型对象(prototype)的属性
*/
    function Cat(type, name, color, age) {
      let catThis = this
      // console.log(catThis)//Cat{}
      // Animal.call(catThis,type,name,color)//通过call改变this相当于: this.Animal(type,name, color)
      Animal.apply(catThis, arguments) //通过apply改变this
      this.age = age
    }

    let cat = new Cat('猫科动物', '粉肠', '黑白', '一岁')
    // console.log(cat)//Cat{ type...}
    // 无法继承父对象的原型对象(prototype)的属性
    // cat.eat()//cat.eat is not a function
  }
  console.log('2.构造函数+原型链的组合继承')
  {
    /*
     *2.构造函数+原型链的组合继承
     */
    function Dog(type, name, color, age, hobby) {
      //（1）构造函数继承
      Animal.apply(this, arguments) //为了得到属性
      this.age = age
      this.hobby = hobby
    }
    // console.log(Dog.prototype)//Dog{}

    //（2）原型链继承
    // 子类型的原型为父类型的一个实例对象
    //Dog的原型对象被新的Animal实例对象赋值
    Dog.prototype = new Animal() //为了能看到父类型的方法
    // 让子类型的原型的constructor指向子类型
    // console.log(Dog.prototype.constructor)//Animal
    Dog.prototype.constructor = Dog //修正constructor属性
    // console.log(Dog.prototype.constructor)//Dog

    // Dog.prototype={
    //     constructor:Dog,
    //     Hobby(){
    //         console.log(this.hobby)
    //     }
    // }
    Dog.prototype.Hobby = function () {
      console.log(this.hobby)
    }

    let dog = new Dog('犬科动物', '小黑', '黑色', '8个月', '拆家')
    console.log(dog)
    // console.log(dog.name)
    dog.eat()
    dog.setName('小红')
    dog.age = '1年'
    dog.Hobby()
    console.log(dog)
  }
}

console.log('3、直接继承prototype(构造函数继承 + Prototype直接继承)  ')
{
  // 定义一个Person类（构造函数）
  function Person(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
  }
  // 在Person类的prototype
  Person.prototype.say = function () {
    console.log(this.name + '正在聊天')
  }

  // 定义一个Student类
  function Student(name, age, sex) {
    Person.apply(this, arguments)
  }

  /*    
*3、直接继承prototype(构造函数继承 + Prototype直接继承)  
    作用：对原型链继承进行优化，不需要再次对Person进行实例化对象（跳过该步骤）
    优点:减少内存的消耗，省内存
    缺点:修改子类的原型对象，父类也会受影响
    !不赞成使用
*/
  Student.prototype = Person.prototype // 直接继承prototype
  console.log(Student.prototype, Person.prototype) //Person {say:} Person {say:}
  console.log(Student.prototype === Person.prototype) //true

  let zhub = new Student('zhubin', 23, '男')
  console.log(zhub)
  zhub.say()
  {
  }

  console.log('4、利用空对象作为中介')
  /*
   *4、利用空对象作为中介
   */
  // 定义一个worker类
  function Worker(name, age, sex) {
    Person.apply(this, arguments)
  }
  //*（1）直接用new Person()占内存多
  // Worker.prototype=new Person()
  //  console.log(new Person())//Person {name:...}

  //*（2）所以利用空对象作为中介
  // Obj是空对象，几乎不占内存，这时候去修改Worker的原型对象就不会影响到Person类的原型对象
  function Obj() {}
  Obj.prototype = Person.prototype // 获取Person类的原型对象里面的属性
  Worker.prototype = new Obj()
  // console.log(new Obj())//Obj {}

  Worker.prototype.constructor = Worker
  Worker.prototype.marry = function () {
    console.log(this.name + '要结婚了')
  }

  let jake = new Worker('Jake', 28, '男')
  console.log(jake)
  jake.marry()
  console.log(new Person())
}
