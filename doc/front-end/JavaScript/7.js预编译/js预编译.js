/*
js预编译
    预编译：作用域创建阶段就是预编译阶段。
    tip：预编译阶段发生变量声明和函数声明，没有初始化行为（赋值），匿名函数不参与预编译 。只有在解释执行阶段才会进行变量初始化 。
    首先JavaScript的执行过程会先扫描一下整体语法语句，如果存在逻辑错误或者语法错误，那么直接报错，程序停止执行，没有错误的话，开始从上到下解释一行执行一行。
    
    预编译分为全局预编译和函数预编译;
    1、全局预编译发生在页面加载完毕时执行
    全局预编译过程(三个步骤)
    (1)创建GO对象(Global object)
    (2)寻找var变量声明，并赋值undefined(变量名作为是G0对象的属性名)

    由于全局中没有参数的的概念，所以省去了实参形参相统一这一步。

    (3)寻找function函数声明，并赋值函数体(函数名作为是GO对象的属性名)

    2、函数预编译发生在函数执行的前一刻
    函数预编译过程(四个步骤)
    (1)创建AO对象（Area Object）
    (2)寻找函数的形参和var变量声明，作为是AO对象的属性名，并赋值为undefined(变量和形参的提升)
    (3)将实参和形参相互统一，即更改形参后的undefined为具体的形参值
    (4)寻找function函数声明，并赋值函数体(函数名作为是AO对象的属性名) , 如果函数声明和变量声明名称一致的话会覆盖变量的声明
*/


// AO对象练习
//1.
function fn(a, b) {
    /*
    AO = {
        a:undefined =>100 =>   function a() {console.log("1111");}; =>   function a() {console.log("2222");},
        b:undefined
    }
    函数预编译完成
    */
    a(); // "2222"
    console.log(a); //  f a() {console.log("2222")}
    console.log(b); //  undefined
    var a = 88;
    console.log(a); //  88

    function a() {
        console.log("1111");
    };

    function a() {
        console.log("2222");
    };
    // a = 88
    a(); // a is not a function
};
fn(100);


//2.
function fn(a,c){
	console.log(a)
	var a = 123
	console.log(a);
	console.log(c);
	function a(){}
	if(false){
		var d = 678
	}
	console.log(d);
	console.log(b);
	var b = function (){}
	console.log(b);
	function c(){}
	console.log(c); 
}
fn(1,2)
/*
1.创建AO对象AO:{}
2.找形参和变量的声明作为AO对象的属性名值为undefined
AO:{
	a:undefined,
	c:undefined,
	d:undefined,
	b:undefined	
}
3.实参和形参相统一
AO:{
	a:1,
	c:2,
	d:undefined,
	b:undefined	
}
4.找函数声明 如果函数声明和变量声明名称一致的话会覆盖变量的声明
AO:{
	a:function a(){},
	c:function c(){},
	d:undefined,
	b:undefined	
}

输出结果
ƒ a(){}
123
ƒ c(){}
undefined
undefined
ƒ (){}
ƒ c(){}
*/



// AO,GO 

//1.
 /*
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


//2.
/*
执行分析
GO:{
   a:undefined,
   test:function test(){}
}

 
AO:{
   b:undefined //不要受 if 的影响。
}
*/
function test(){
    console.log(b)
     if(a){
         var b = 100;
     }
     c = 234;
     console.log(c);
 }
 var a;
 test();
 a = 10;
 console.log(c);

//3.
/*
GO:{
	test:undefined     被覆盖=>   function test(test) {}
}

AO:{
	test:undefined=>1=> 234 =>function test() { }
}
*/

function test(test) {
	console.log(test); 
    var test = 234;
	console.log(test);
	function test() { }
}
test(1);
var test = 123; 