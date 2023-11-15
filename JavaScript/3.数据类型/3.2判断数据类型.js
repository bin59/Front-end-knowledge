// 一、获取(判断)数据的类型
// 1.typeof判断数据类型（比较适合判断简单数据类型）
    // 基本数据类型
    var str = "我是字符串";
    var num = 9999;
    var nu = null;
    var bool = true;
    var unde = undefined;
    var sy = Symbol("sy");
    // 引用数据类型
    var obj = {};
    var arr = [];
    var fn = function () {};

    // typeof判断数据类型
    // 基本数据类型
    console.log(typeof str); // string
    console.log(typeof num); // number

    console.log(typeof nu); //  object   返回的应该是null判断不准确
    // 简单数据类型null返回的是一个空的对象
    // 如果有个对象我们打算以后存储为对象，暂时没有想好放啥，这个时候就给null

    console.log(typeof bool); // boolean
    console.log(typeof unde); // undefined
    console.log(typeof sy); //  symbol

    // 引用数据类型
    console.log(typeof obj); // object
    console.log(typeof arr); // object   判断不准确
    console.log(typeof fn); // function

// 2.instance判断数据类型
console.log("2.instanceof");
    // instance用于检测构造函数的原型对象(prototype)属性是否出在某个实例对象的原型上
    // 语法:
    //     检测数据类型instance
    //     构造函数返回布尔值(true、false) 
    var str1 = new String("我是字符串");
    var obj1 = {};
    var arr1 = [];
    // console.log(arr1);
    console.log(str1 instanceof String); // true
    console.log(obj1 instanceof Object); // true
    console.log(arr1 instanceof Array); // true

// 3.使用对象的原型去判断数据类型
    // console.log("使用对象的原型去判断数据类型");
    // 语法：
    // Object.prototype.toString.call(检测的数据)

    var obj2 = {};
    var arr2 = [];
    var str2 = "hahahah";
    var n1 = null;

    console.log(Object.prototype.toString.call(obj2)); // [object Object]
    console.log(Object.prototype.toString.call(arr2)); // [object Array]
    console.log(Object.prototype.toString.call(str2)); // [object String]
    console.log(Object.prototype.toString.call(n1)); // [object Null]