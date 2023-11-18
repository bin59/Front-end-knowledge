## JavaScript
### 1.Date.now 与 new Date().getTime() 
都可以获取时间戳，但是实际上性能是不一样的（虽然差别不大，但是也算是一种性能的追求）
```javascript
// +new Date()
console.time('+new Date()')
for(var i = 0; i < 650000; i++) {
    var o = + new Date()
}
console.timeEnd('+new Date()')

// new Date().getTime
console.time('new Date().getTime:')
for(var j = 0; j < 650000; j++) {
    var p = new Date().getTime();
}
console.timeEnd('new Date().getTime:')

// Date.now()
console.time('Date.now()')
for(var k = 0; k < 650000; k++) {
    var q = Date.now()
}
console.timeEnd('Date.now()')

/****
+new Date():                 286.554ms
new Date().getTime:          163.262ms
Date.now():                  81.747ms
****/

``` 
+new Date() 用的时间最多，因为它涉及到类型转换，转换成数字；

Date.now() 用的时间最少 它与其它获取时间戳最大的区别就是：
    一个是 constructor的属性，其它是 constructor.prptotype的属性
    实例化的区别，显然实例化对象花的时间更多



### 2. ===比==快
==和!=操作符会在需要的情况下自动转换数据类型。
但===和!==不会，它们会同时比较值和数据类型,避免了多余的计算，这也使得它们要比==和!=快。
现在人很少利用==来做类型转换了, JS也有往强类型发展的趋势.


### 3.在循环中缓存array.length
```javascript
// 这个技巧很简单，但在循环中处理大型数组时，它会对性能产生很大影响。为了迭代数组，几乎每个人都会同时写出这样的代码：
for(vari = 0; i < array.length; i++) {
console.log(array[i]);
}
// 如果处理的是小型数组，那没问题，可是如果处理的是大型数组，那么代码会在循环的每一次迭代中重新计算数组的大小，从而造成延迟。

// 为了避免此种情况，可以将要用的array.length缓存在某个变量中，而不用在循环的每一次迭代中都调用它：

var length = array.length;
for(var i = 0; i < length; i++) {
console.log(array[i]);
}
// 想让它变短一些？这样写就可以：

 for(var i = 0, length = array.length;i < length; i++) {
console.log(array[i]);
}
```
### 4.文档碎片
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>文档碎片</title>
</head>
<body>
    <ol></ol>
    <!-- 
        document.creatDocumentFragment(节点)
        创建文档碎片
        创建虚拟节点对象
     -->
     <script>
        //  添加五个li到ol里面
         let ol = document.querySelector("ol");

        //  for(let i=1;i<=5;i++){
        //        // 这样有多少就要操作多少次appendChild（）,会消耗页面性能
        //     ol.appendChild(document.createElement("li"));
        //  };
        

        // 创建文档碎片
        let Frag = document.createDocumentFragment();
        for(let i=1;i<=5;i++){
            //在虚拟节点对象添加碎片（新的li）
            Frag.appendChild(document.createElement("li"));
         };
         console.log(Frag);

        //  相当于一次性加入所以数据
         ol.appendChild(Frag);

         
     </script>
</body>
</html>
```
### 5.懒加载
### 6.防抖和节流
### 7.webpack打包优化