/*
定义函数的方式
    1. function fun(){}          //命名函数有（函数名） 以函数声明的方式声明函数
    2. let fn = function(){}     //匿名函数（无函数名） 以函数表达式的方式声明函数
    3. new Function();           //实例化对象（构造函数）
*/

//命名函数   
function fn1(){
    console.log("我是f1函数");
};
                
// 匿名函数     
let fn2 = function(){
    console.log("我是f2函数");
};

//自执行函数（自动执行）
(function(){
    console.log("我是自执行函数");
})();

// 构造函数
let fn3 = new Function(console.log("我是f3函数"));

fn1();
fn2();
fn3();

console.log(fn1);  //ƒ fn1(){}
console.log(fn2);  //ƒ (){}
console.log(fn3);   //ƒ anonymous() {}
//通过name属性去判断函数是否为匿名函数
console.log(fn1.name);  //ƒ1
console.log(fn2.name);  //ƒ2
console.log(fn3.name);   //ƒ anonymous

/*
函数的参数：
    在调用函数的时候，解析器每次都向函数传递两个隐藏的参数
    1、this（函数的上下文）
    以函数的形式调用，this指向永远是window

    2.arguments参数
    *arguments是类数组(无数组方法、有数组的长度属性)，它可以通过索引值操作数据以及获取长度
    *arguments.length可以用来获取实参的长度
    *arguments里面的callee属性，对应的是函数对象(当前这个函数)

    形参 和实参
    1.形参
        形式上的参数·（
        (它不是实际存在的变量，所以又称虚拟变量)
    2、实参
    实际上的参数(固定值)  (实参可以是变量、函数、常量等等)

    return关键字  停止当前函数执行, 并且返回对应值
*/
function fn(){
    // console.log(this);
    // console.log(a);
    // console.log(b);

    console.log(arguments[0]);//"我是实参1"
    console.log(arguments[1]);//"我是实参2"
    console.log(arguments.length);//2
    console.log(arguments);
    console.log("我是fn函数");
}
//  fn("我是实参1","我是实参2");



// n个数累加
function fun(a){
    let a=0;
    for(let i=1;i<=100;i++){
      a+=i
    }
return a;
}
fun(100);//5050

// n个数累加  return（停止当前函数的执行，并且返回对应值）
function fn(n){
    let b=n*(n+1)/2;

    //没有写retrun话, 默认是在函数体最后面 retrun;,也就是函数默认的返回值是 undefined;
    return b;//
}
// fn(100);            //这样不输出  
console.log(fn(100))  //5050    要打印输出
        
let sum = fn(100);//这样的话，sum变量的值为函数的返回值
console.log(sum)//5050


// 局部变量 如：函数大括号内声明的变量在外面没有用
function fun(){
    var a = 3;
}
console.log(a);//报错： a is not defined








// *javascript调用函数时什么时候加括号，什么时候不用加括号      
// !重点：加括号后表示立即执行，不加括号一般用在触发某个事件后才执行

var btn = document.getElementById( "btn");
//加括号，随即触发函数（页面加载完成后)

btn.onclick = demo();
//拆分为↓
btn.onclick = function demo() {
    var m   = 5;
    alert(m);
}();

btn.onclick = demo;
//拆分为↓
btn.onclick = function demo(){
    var m = 5;
    alert(m);
};


//不加括号--点击后才触发函数
btn.onclick = demo;
function demo(){
    var m = 5;
    alert(m);
}


// 不带括号的调用 function ： 函数体对象为参数
// 带括号的调用 function（）：立即执行函数后返回的值为参数


