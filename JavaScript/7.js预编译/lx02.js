// 一、
function test(a, b) {
    /*
    1.函数demo执行前生成AO{}
    2.寻找函数的形参和var变量声明，作为是AO对象的属性名，并赋值为undefined
        AO = {
        a:undefined
        b:undefined
    }
    3.实参形参统一
    AO = {
        a:1
        b:undefined
    }
    4.寻找function函数声明 如果函数声明和变量声明名称一致的话会覆盖变量的声明
    AO = {
        a:function a(){}
        b:undefined
    }
    预编译完成
    */
    console.log(a);//f a(){}
    console.log(b);//undefined
    var b = 234;
    console.log(b);//234
    a = 123;
    console.log(a);//123

    function a() {}
    var a;
    b = 234;
    var b = function () {}
    console.log(a);//123
    console.log(b);//f (){}
}
test(1);

// 二、
/* 
1.先生成GO{}
2.找变量声明，将变量名作为GO属性名，值为undefined
GO={
    a:undefined
}
3.查找函数声明，赋值函数体
GO = {
    a:undefined
    demo:function demo(e) {}    
}
*/ 
a = 100;
function demo(e) {
    /*
    AO = {
        e:undefined => 1 => f e(){} 
        b:undefined 
        c:undefined
        a:undefined 
    }
    */
    function e() {}
    arguments[0] = 2;
    console.log(e);//2
    console.log(b);//undefined
    if (a) {
        var b = 123;
    }
    var c;
    a = 10;
    var a;
    console.log(b);//undefined
    f = 123;
    console.log(c);//undefined
    console.log(a);//10
}
var a;
demo(1);
console.log(a);//100
console.log(f);//123  

// 三、
/*
执行分析
GO{
　　global:undefined 
　　fn:function(){}
}
*/
global = 100;

function fn() {
    /* 
    AO{
    　　global:undefined
    }
    */
    console.log(global);//undefined
    global = 200;
    console.log(global);//200
    var global = 300;
}
fn();
var global;

// 四、
function a(a) {
    /*
    AO={
        d：undefined 
        c:undefined  =>function c() {}
        a:undefined => 5=>function a() {}
        b:undefined 
    }
    */
    var d;
    var c;
    b = 10;
    var a;
    console.log(a);//function a() {}
    a = 123;

    function a() {}
    console.log(a);//123
    var b;
    console.log(b);//10

    function c() {}
    console.log(c);//function c() {}
    console.log(d);//undefined
    d = 100;
    console.log(d);//100
}
a(5);