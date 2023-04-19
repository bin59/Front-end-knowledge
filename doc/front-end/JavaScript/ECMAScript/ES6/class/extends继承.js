   // 定义一个Person父类
   class Person {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    say() {
        console.log(this.name + "说: 我真🐂 ")
    }
    sport() {
        console.log(this.name + "正在运动")
    }
}

// 定义一个子类
// 继承：extends关键字
class P1 extends Person {
    constructor(name, age, sex, height) {
        // super关键字， 改变this指向(super代表的是父类, 返回的是子类实例)
        // 等价于Person.prototype.constructor.apply(this, arguments)
        super(name, age, sex)
        // console.log(super(name, age, sex));
        // P1类添加独有属性
        this.height = height
    }

    say() {
        console.log(this.name + "说: 我真帅 ");
    }
};
let p1 = new P1("Jack", 28, "男", "180");
console.log(p1)
// console.log(new Person());
p1.sport();
// p1.say();
// console.log(p1.a); undefied