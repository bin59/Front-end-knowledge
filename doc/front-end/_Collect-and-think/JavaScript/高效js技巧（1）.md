# 高效js技巧（1）
## 向下取整有很多方法, Math.floor, parseInt都可以, 不过两个非(~)运算符来取整是最方便的, 而且逻辑运算很快.
// 还可以用~~再加1来向上取整

// 双波浪号： 将内容转为数字，或小数取整（不是四舍五入）
```js
    const a = '123.9999';
    ~~a // 123
```
 数字保留小数点后N位
```js
    const num = 10/3;
    ~~(num*10000)/10000; //3.3333

```

## 两个变量快速互换值
```js
    let a = 1;
    let b = 2;
    [a,b] =[b,a]
    console.log(a) // 2
    console.log(b) // 1

    const obj_a = {key: 1};
    const obj_b ={key: 2};
    [obj_a,obj_b] = [obj_b, obj_a]
    console.log(obj_a) // {key: 2}
    console.log(obj_b) // {key: 1}
```
//最安全且最快的办法是利用异或门(^)来进行:
```js
    let a = 12;
    let b = 123;
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    console.log(a) 
    console.log(b) 

```

## 举个例子：
```js
if (available) {
    addToCart();
}
```
// 只需使用变量和函数就能缩短它：
```js
available && addToCart()

```

## 使用 length 调整大小 / 清空数组
// 如果我们要调整数组的大小：
```js
const arr = [1, 2, 3, 4, 5, 6, 7];
arr.length = 4;
console.log(arr);// [1, 2, 3, 4]
```

## 合并对象

// 在JavaScript中合并多个对象的需求一直存在, 比如在传参时需要把表单参数和分页参数进行合并后在传递给后端
// 利用ES6提供的扩展运算符让对象合并变得很简单.
```js
    const page = {
        current: 1,
        pageSize: 10
    }

    const form = {
        name: "",
        sex: ""
    }
 
    const params = {...form, ...page};
    console.log(params);// { name: '', sex: '', current: 1, pageSize: 10 }




    if(index>0){//可以直接写index  >0可以省略
    }

    if(index){//可以直接写index  >0可以省略  
    }
```
## 空(null, undefined)验证
当我们创建了一个新的变量，我们通常会去验证该变量的值是否为空(null)或则未定义(undefined)。这对于JavaScript编程来说，是一个经常要考虑到的验证。

如果直接写，那么像下面这样：

```js
if (variable1 !== null || variable1 !== undefined || variable1 !== '') { let variable2 = variable1; }
```
我们可以使用一个更加简洁的版本：
```js
let variable2 = variable1  || '';
```
如果你不信，在谷歌浏览器开发者面板的控制台下试试！
值为null的例子
```js
let variable1 = null;
let variable2 = variable1  || '';
console.log(variable2);
//输出: '' 
//值为undefined的例子
let a = new Array(); a[0] = "myString1"; a[1] = "myString2"; a[2] = "myString3";


let variable1 = undefined;let variable2 = variable1 || '';console.log(variable2);//输出: '' //正常情况let variable1 = 'hi there';let variable2 = variable1 || '';console.log(variable2);//输出: 'hi there'

```


## 避免使用RegExp对象
简化前：
```js
const re = new RegExp("\d+(.)+\d+","igm"),
result = re.exec("padding 01234 text text 56789 padding");
console.log(result); //"01234 text text 56789"
```
简化后：
```js
const result = /d+(.)+d+/igm.exec("padding 01234 text text 56789 padding");
console.log(result); //"01234 text text 56789"
```
## If 条件优化
虽然很简单，但还是值得提一下。

简化前：
```js
if (likeJavaScript === true)
```
简化后：
```js
if (likeJavaScript)
```
我们再来句一个判断非真的例子：
```js
let c;
if ( c!= true ) {
// do something...
}
```
简化后：
```js
let c;
if ( !c ) {
// do something...
}
```
## 函数参数优化
我个人倾向于使用获取对象元素的方式来访问函数参数，当然这个见仁见智啦！

通常使用的版本：
```js
function myFunction( myString, myNumber, myObject, myArray, myBoolean ) {
    // do something...
}
myFunction( "String", 1, [], {}, true );
```
我喜欢的版本：
```js
function myFunction() {
    /* 注释部分
    console.log( arguments.length ); // 返回 5
    for ( i = 0; i < arguments.length; i++ ) {
        console.log( typeof arguments[i] ); // 返回 string, number, object, object, boolean
    }
    */
// }
/*
myFunction( "String", 1, [], {}, true );
```

译者注：原文下方有评论表示不建议用楼主的方法，使用第一种方法函数参数的顺序是可以变动的，第二种你就要小心了。

## charAt()的替代品
简化前：
```js
"myString".charAt(0);
```
简化后：
```js
"myString"[0]; // 返回 'm'
```
译者注：我相信用第一种方法的人已经不多了吧！

## 函数调用还可以更短
简化前：
```js
function x() {
    console.log('x')};
    function y() {
        console.log('y')
};
let z = 3;
if (z == 3) 
{
    x();
} else 
{
    y();
}
```
简化后：
```js
function x() {console.log('x')};function y() {console.log('y')};let z = 3;
(z==3?x:y)();
```
你说四不四很短？

## 如何优雅的表示大数字
在JavaScript中，有一个简写数字的方法，也许你忽略了。1e7表示10000000。

简化前：
```js
for (let i = 0; i < 10000; i++) {
```

简化后：
```js
for (let i = 0; i < 1e7; i++) {
 ```