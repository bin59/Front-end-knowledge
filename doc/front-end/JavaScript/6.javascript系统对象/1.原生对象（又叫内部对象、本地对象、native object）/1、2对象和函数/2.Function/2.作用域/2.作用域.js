/******** 
js执行环境(执行上下文) 
    执行上下文定义了变量或函数有权访问的其他数据, 决定了他们的各自行为。
    (js会出现多个执行环境)

三种执行环境
    1、全局环境
        代码运行运行起来后首先进入全局环境

    2、函数环境
        当函数被调用的时候，就会进入函数环境(执行当前函数中的代码)

    3、eval环境

什么是作用域?
    它是指某一变量或者函数具有访问权限的代码空间, 在js中，作用域是在函数中维护的。表示变量或者函数起作用的区域，指代它们在什么的上下文中执行(上下文环境) 

全局作用域
    声明在函数外部的变量、函数，在代码中任何地方都能访问到

局部作用域(函数作用域)
    声明在函数内部的变量、函数, 局部作用域一般只在固定的代码片段里面可以访问到

块级作用域(ES6新增)
    let、const声明只能在块作用域中访问，不逊于跨块访问，也不允许跨函数访问
    if语句中的{}、for循环语句中的{}都属于块级作用域

作用域链
    函数内部如果在当前作用域中查找不到值, 就会向上一级作用域查找, 直到查找到全局作用域，这个过程会形成一个链条，这个链条就是作用域链
************/


// 全局作用域
let str = "我是全局变量"; // 全局作用域下声明的变量(全局变量)

function fn() {
    console.log("我是函数内部打印---", str);
};
fn();
console.log("我是函数外部打印---", str);

// 全局作用域下声明的函数(全局函数)
function gbFn() {
    console.log("我是全局函数");
};


// gbFn(); // 全局环境下调用全局函数


function fn2() {
    gbFn(); // 函数环境调用全局函数
};
fn2();


// 局部作用域
function a() {
    var num = 100;
    // console.log(num);
    // console.log(this);
};
a();
// console.log(num); // num is not defined



function b() {
    function bb() {
        console.log("我是bb函数");
    };
    // 需要在函数内部才开访问得到bb函数
    console.log(bb);
};

// console.log(b);

// b();
// console.log(bb); // bb is not defined


// 块级作用域(ES6新增)
// for (let i = 1; i <= 3; i++) {
//     console.log(i);
// };

// for (let i = 1; i <= 3; i++) {
//     console.log(i);
// };

// var i;
// for (i = 1; i <= 3; i++) {
//     // console.log(i);
// };

// console.log(i); // 4

// 作用域链
let g_str = "我是全局变量g_str";

function g_fn() {
    let g_str = "我是全局函数里面的g_str变量";

    // function fn() {
    //     console.log(g_str);
    // };
    // fn();
    return function () {
        let g_str = "123123";
        return function () {
            console.log(g_str);
        }
    }
    // (function (a) {
    //     console.log(a);
    // })(g_str);
};

g_fn()()();
// g_fn();


// 函数重复定义，最后定义的函数会覆盖之前的函数
// (js不支持函数重载)
// function aaa(a) {
//     console.log(a);
// }

// function aaa(a, b) {
//     console.log(a, b);
// }
// aaa(2, 3); // 2, 3

// js模拟函数重载
function aaa() {
    // console.log(arguments);
    if (arguments.length == 1) {
        console.log("填入一个参数");
    }

    if (arguments.length == 2) {
        console.log("填入两个参数");
    }
};
aaa(2);


// var bbb = 1;
// var bbb = 2;
// console.log(bbb);
