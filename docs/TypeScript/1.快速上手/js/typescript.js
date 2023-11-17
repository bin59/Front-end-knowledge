/*
1、类型注解
    TypeScript 里的类型注解是一种轻量级的为函数或变量添加约束的方式。
*/
// person这个参数是string类型的
function greeter1(person) {
    return 'Hello, ' + person;
}
// let user = 'Yee'
// 改成传入一个数组
var user1 = [0, 1, 2];
// console.log(greeter1(user1)) //error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
// 没有参数时
// console  .log(greeter1()) //error TS2554: Expected 1 arguments, but got 0.
/*
2、接口
    让我们开发这个示例应用。这里我们使用接口来描述一个拥有firstName和lastName字段的对象。
    在TypeScript里，只在两个类型内部的结构兼容那么这两个类型就是兼容的。
    这就允许我们在实现接口时候只要保证包含了接口要求的结构就可以，
    而不必明确地使用 implements语句。
*/
{
    function greeter2(person) {
        return 'Hello, ' + person.firstName + ' ' + person.lastName;
    }
    var user = {
        firstName: 'Yee',
        lastName: 'Huang'
    };
    console.log(greeter2(user));
}
/*
3、类
    最后，让我们使用类来改写这个例子。
    TypeScript支持JavaScript的新特性，比如支持基于类的面向对象编程。

    让我们创建一个Student类，它带有一个构造函数和一些公共字段。
    注意类和接口可以一起共作，程序员可以自行决定抽象的级别。

    还要注意的是，在构造函数的参数上使用public等同于创建了同名的成员变量。
*/
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter3(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user2 = new Student("Jane", "M.", "User");
console.log(greeter3(user2));
/*
重新运行tsc greeter.ts，你会看到生成的JavaScript代码和原先的一样。
TypeScript里的类只是JavaScript里常用的基于原型面向对象编程的简写。
*/
