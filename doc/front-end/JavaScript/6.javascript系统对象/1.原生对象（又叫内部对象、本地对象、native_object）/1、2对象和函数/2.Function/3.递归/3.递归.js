/*
JavaScript之递归
什么是递归？
程序调用自身的编程技巧称为递归（ recursion）。递归策略只需少量的程序就可描述出解题过程所需要的多次重复计算，大大地减少了程序的代码量 。

递归的能力在于用有限的语句来定义对象的无限集合。

一般来说，递归需要有边界条件、递归前进段和递归返回段。当边界条件不满足时，递归前进；当边界条件满足时，递归返回。

 function f(n){
    if(n == 1)   // 递归终止条件 
        return 1;    // 简单情景
    return n*f(n-1);  // 相同重复逻辑，缩小问题的规模
}
console.log(f(4));
*/

//1.1累加1···100
    function getSum(num) {
        if(num === 1) 
            return num;
        // return num + getSum(num - 1) // 如果 var getterSum = getSum, getSum = null 会报错
        return num + arguments.callee(num - 1)
    }
    console.log(getSum(100))

// 1.2累加包括0
    function fn(n){
        if(n ==0){
            return 0;
        }
        return fn(n-1)+n;
    }
    console.log(fn(100));

// 2.累乘,1*2*3*4*...*n
    function fn(n){
        if(n ==1||n==0){//0的阶乘为0
            return n;
        }else{
            return fn(n-1)*n;
        }
    }
    console.log(fn(5));

// 2.1奇数项 求和
// 第0项为1，第1项为3···
     function foo(n){
        if(n == 0) return 1;
        return foo(n-1) + 2;
    }

    function sum(n){
        if(n == 0) return 1;
        return foo(n) + sum(n-1);
    }

    console.log(sum(1)) // 4

// 偶数项 求和

// 第0项为2，第1项为4···
    function fn(n){
        if(n == 0) return 2;
        return fn(n-1) + 2;
    }
    function sum(n){
        if(n==0) return 2;
        return fn(n) + sum(n-1);
    }
    console.log(sum(1)) // 6

//  尾递归
// 函数在尾部调用自身就成为尾递归。


        function factorial(n) {
            if(n === 1) return n
            return n * factorial(n - 1)
        }
        // 计算n的阶乘，最多需要保存n个调用记录，复杂度为O(n)
        console.time(1)
        console.log(factorial(5)) // 120
        console.timeEnd(1) // 1: 1.60400390625ms

        // 如果改为尾递归，只需要保留一个调用记录，复杂度为O(1)
        function factorial01(n, tntal) {
            if(n === 1) return tntal
            return factorial(n - 1, n * tntal)
        }
        console.time(2)
        console.log(factorial01(5, 1)) // 120
        console.timeEnd(2) // 2: 0.14404296875ms

 

// Fibonacci（斐波那契）数列

        function Fibonacci(n) {
            if(n <= 1) return 1
            return Fibonacci(n - 1) + Fibonacci(n - 2)
        }

        console.time(1)
        console.log(Fibonacci(20)) // 10946
        console.timeEnd(1) // 1: 4.115966796875ms

        // console.time(2)
        // console.log(Fibonacci(100)) // 10946
        // console.timeEnd(2) // stack overflow 堆栈溢出

// Fibonacci（斐波那契）数列改写
// 通过一个正常形式的阶乘函数factorial，调用尾递归函数tailFactorial。

        // 尾递归优化
        function Fibonacci01(n, ac1 = 1, ac2 = 1) {
            if(n <= 1) return ac2
            return Fibonacci01(n - 1, ac2, ac1 + ac2)
        }

        console.time(3)
        console.log(Fibonacci01(100)) // 573147844013817200000
        console.timeEnd(3) // 3: 0.52197265625ms

// 柯里化（currying）
// 通过柯里化，将尾递归函数tailFactorial变为只接受一个参数的factorial。

// ES5：

        function currying(fn, n) {
            return function (m) {
                return fn.call(this, m, n); 
            };
        } 
 
        function tailFactorial(n, total) {
            if (n === 1) return total;
            return tailFactorial(n - 1, n * total);
        } 
 
        const factorial = currying(tailFactorial, 1); 
 
        factorial(5) // 120

// ES6：


        function factorial(n, total = 1) {
            if (n === 1) return total;
            return factorial(n - 1, n * total);
        } 
 
        factorial(5) // 120 




