// 1、选择题
    // (1)下面代码的输出是什么？（D ）
        function sayHi() {
        console.log(name);
        console.log(age);
        var name = "Jack";
        let age = 28;
        }
    
        // - A: Jack 和 undefined
        // - B: Jack 和 ReferenceError
        // - C: ReferenceError 和 28
        // - D: undefined 和 ReferenceError      

    // (2) 下面代码的输出是什么？（ C）
        for (var i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i);    
        }, 1);
        }
        for (let i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i);
        }, 1);
        }
    
        // - A: 0 1 2 and 0 1 2
        // - B: 0 1 2 and 3 3 3
        // - C: 3 3 3 and 0 1 2  

    // (3)  下面代码的输出是什么？（ ）
        let a = 666;
        let b = new Number(666);
        let c = 666;
        console.log(a == b);   //true
        console.log(a === b);  // false
        console.log(b === c);  // true

    //! (4) 下面代码的输出是什么？（ B）
        const a = {};
        const b = { key: "b" };
        const c = { key: "c" };
        
        a[b] = 123;
        a[c] = 456;
        console.log(a[b]);

        // - A: 123
        // - B: 456   
        // - C: undefined
        // - D: ReferenceError
    
    /*
      !对象b c当键名转为字符串
        相当于：
            a['[Object Object]']  = 123
            a['[Object Object]']  = 456
            a[b]=456
    */
        console.log(String(b));//字符串  '[Object Object]'

    // (5)  下面代码的输出是什么？（C ）
        let obj1 = {
            name: 'obj1_name',
            print: function () {
                return () => console.log(this.name);
            }
        }
        let obj2 = { name: 'obj2_name' };
        obj1.print()();  
        obj1.print().call(obj2);   //.print() ,call改变不了箭头函数的this所以还是obj1
        obj1.print.call(obj2)();    //... (obj2)()print 在obj2中执行，this指向obj2

        // - A: obj1_name obj2_name obj2_name
        // - B: obj2_name obj1_name obj2_name
        // - C: obj1_name obj1_name obj2_name

// 2、填空题
    // 第 1 题
    /*在dom操作中:
        
        获取节点方法：
        getElementById()、querySelect()、firstChild()、lastChild()

        创建节点方法：
        creatElement()、creatTextNode()

        添加节点方法：
        append()、appendChild()

        替换：
        replaceChild ()
        删除：
        remove()、removeChild()

        dom的其他操作方法：
    */
      
    // 第 2 题
        var object = {}
        // object.__proto__ === _______

        var fn = function(){}
        // fn.__proto__ === _______ 
        // fn.__proto__.__proto__ === _______ 

        var array = []
        // array.__proto__ === _______ 
        // array.__proto__.__proto__ === _______ 

        // Function.__proto__ === _______
        // Array.__proto__ === _______
        // Object.__proto__ === _______ 

        // true.__proto__ === _______ 

        // Function.prototype.__proto__ === ____

        /*
        Object.prototype

        Function.prototype  
        Object.prototype

        Array.prototype  
        Object.prototype

        Function.prototype
        Function.prototype
        Function.prototype

        Boolean.prototype

        Object.prototype
        */

        // !Array.__proto__ === Function.prototype
        // !Array 没有实例化的话就是一个普通对象：Function Array(){...}
        console.log(Array)//f Array(){}
        // !new Array().__proto__ === Array.prototype

        console.log(Function)//f Function(){}
        console.log(Object)//f Object(){}

// 3. 描述题
    // (1)什么是ajax?
    //     ajax是一种用于创建快速动态网页的技术,
    // 在不重新加载整个页面的情况下，可以与服务器交换数据并更新部分网页内容。
    // (2)
        function Fn(){
            console.log(this)
        }
        new Fn()
        // 请简要描述：
        // 请问这个 this 有哪些属性？这个 this 的原型有哪些属性？

        // 这个 this有__proto__属性、
        // this的原型：Fn.prototype
        // this的原型属性：constructor属性、__proto__属性

        /*
        this本身没有属性(隐藏属性 __proto__)
        */

    // (3)简要说下什么是event loop?
    //   主线程任务全部执行完之后，任务队列中的回调函数会再次回到调用栈中执行
    
    // (4)原型：
    //      每个函数都有一个prototype属性，它默认指向一个Object空对象(即称为: 原型对象)，这个对象包含了通过构造函数所创建的实例对象共享的属性和方法。 
    //   作用：
            // 1、为了实现继承
            // 2、数据共享、节省内存

    //   原型链：实例对象(proto)与原型(prototype)之间的连接，叫原型链

// 4.逻辑题
    // 第 1 题
        var name = 'World!'
        (function () {
            if (typeof name === 'undefined') {
                var name = 'Jack';
                console.log('Goodbye ' + name);  
            } else {
                console.log('Hello ' + name);
            }
        })()

    //  第 2 题
        var a = 10;
        function fn(){
            console.log(a);//10
        }
        function bar(f){
            var a = 20
            f()
        }
        bar(fn)//10  执行的是外面的fn 找的是a = 10

        //例1：不定义a
        function fn(){
            console.log(a);
        }
        function bar(f){
            var a = 20
            f()
        }
        bar(fn);//a is not defined

        // 如果是name
        function fn(){
            console.log(name);
        }
        function bar(f){
            var name = 20
            f()
        }
        bar(fn);//undefined  因为
        
    // 第 3 题
        function sidEffecting(ary) {
            ary[0] = ary[2];
        }
        function bar(a,b,c) {
            c = 10
            sidEffecting(arguments);
            return a + b + c
        }
        bar(1,1,1)//21

    // 第 4 题
        function say666(){
            var num = 666;
            var sayAlert = function() {
                alert(num);
            }
            num++
            return sayAlert;
        }
        var sayAlert = say666()
        sayAlert()//667

        // 闭包
        // 再打印一次呢
        sayAlert()//667  还是667

    // 第 5 题
        function logName(){
        console.log(this.name);
        }

        function doFun1(fn){
        fn();
        }

        function doFun2(o){
        o.logName()
        }

        var obj = {
        name: "Jack",
        logName: logName
        }

        var name = "Hy"

        doFun1(obj.logName);//undefined   logName函数是在window环境下执行，this指向window
        doFun2(obj);//Jack  o.logName();-->obj.logName  obj调用的，this指向window

    // 第 6 题 
        function fun(somthing) {
            console.log(this.name, somthing);//Jack HanMeiMei
        }

        function bindFun(fn, obj) {
            return function () {
                return fn.apply(obj, arguments);
            }
        }

        var obj = {
            name: "Jack"
        }

        var bar = bindFun(fun, obj)
        var b = bar("HanMeiMei")
        console.log(b);//undefined

    // 第 7 题
        test();//1
        var test = 0;
        function test() {
            console.log(1)
        }
        test();//报错test is not a function 
        test = function () {
            console.log(2)
        };
        test();//2

// 5.实操题
    // 第 1 题
    // ES5 中用构造函数模拟一个类     
        function A(name,age){
            this.name=name
            this.age=age
        }

        function B(name,age){
            A.apply(this,arguments)
        }
        function Obj(){}
        Obj.prototype = A.prototype
        B.prototype = new Obj()
        B.prototype.constructor=B
        B.prototype.Fn = function () {
            console.log("我是:"+this.name);
        }

        let C = new B('c',13)
        C.Fn()

    // ES6通过class关键字作为定义类
        class A{
            constructor(name){
                this.name=name
            }
            Fn(){
                console.log('我是:'+this.name);
            }
        }

        class B extends A{
            constructor(name,age){
                super(name)
                this.age=age
            }
        }
        let b = new B('b',18)
        b.Fn()

    // 第 2 题  使用 Promise，结合 Promise 对象简单封装 AJAX 功能(涉及 GET 请求即可)
        function ajax(_url){
            return new Promise((res, rej) => {
                let xhr = new XMLHttpRequest()
                xhr.open('GET', _url)
                xhr.send()
                xhr.addEventListener("readystatechange", () => {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            res(JSON.parse(xhr.responseText));
                        } else {
                            rej(JSON.parse(xhr.responseText));
                        }
                    }
                })
            })
        }

    // 第 3 题 数组去重复的方法有哪些（至少写出 4 种）
        let arr = [1, 2, 5, 2, 4, 5, 10, 2, 5, 1, 2, 4, 5, 8, 6, 4];
        //方法一：Set
            let arr1 = [...new Set(arr)]
            console.log(arr1);
        //方法二：includes
            let arr2 = []
            arr.forEach((val,idx) => {
                if(!arr2.includes(val)){
                    arr2.push(val)
                }
            });
            console.log(arr2);
        //方法三：indexOf
            let arr3 = []
            arr.forEach((val,idx) => {
                if(arr3.indexOf(val) === -1){
                    arr3.push(val)
                }
            })
            console.log(arr3);
        //方法四：sort
            let arr4=[arr[0]]
            arr.sort()
            for(let i=1;i<arr.length;i++){
                (arr[i] !== arr[i-1])&&arr4.push(arr[i])
            }
            console.log(arr4)
        // 方法五 filter
            let newArr = []
            newArr = arr.filter((val,idx)=>{
                return idx == arr.indexOf(val)
            })
            console.log(newArr)