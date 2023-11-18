JavaScript 系统对象
---本地对象（包括内置对象）、宿主对象、自定义对象

原生对象：也叫内部对象、本地对象、native object
Object、Function、Array、String、Boolean、Number、
Date、RegExp、Error、EvalError、RangeError、ReferenceError、SyntaxError、TypeError、URIError、Global
　其中 Global 和 Math 这两个对象又被称为“内置对象”，这两个对象在脚本程序初始化时被创建，不必实例化这两个对象。（不需要 new() ）

内置对象：Build-in object
Global（全局对象）、Math

宿主对象：host object
有宿主提供的对象，在浏览器中 window 对象以及其下边所有的子对象(如 bom、dom 等等)，在 node 中是 globla 及其子对象，也包含自定义的类对象。【何为“宿主对象”？ 在 web 中，ECMAScript 中的“宿主”当然就是我们网页的运行环境，即“操作系统”和“浏览器”。所有非本地对象都是宿主对象（host object），即由 ECMAScript 实现的宿主环境提供的对象。】

全局对象：一般全局对象会有两个，一个是 ecma 提供的 Global 对象，一个是宿主提供。如在浏览器中是 window、在 nodejs 中是 global。【所以啊，在浏览器中全局对象是 Global+window】
通常情况下 ecma 提供的 Global 对象对是不存在的，没有具体的对象，
全局对象：
　　 Infinity 指定一个正负无穷大的数值
NaN 指定一个 “非数字” 值
undefined 指定一个未被赋值的变



ECMA-262 定义：
原生对象：
独立于宿主环境的 ECMAScript 实现提供的对象。与宿主无关，在 javascript（远景浏览器）、nodejs（node 平台）、jscript（ie 浏览器）、typescript（微软平台）等等中均有这些对象。简单来说，本地对象就是 ECMA-262 定义的类（引用类型）。在运行过程中动态创建的对象，需要 new

内置对象：
由 ECMAScript 实现提供的、独立于宿主环境的所有对象，在 ECMAScript 程序开始执行时出现，即在引擎初始化阶段就被创建好的对象。这意味着开发者不必明确实例化内置对象，它已被实例化了

宿主对象：
即由 ECMAScript 实现的宿主环境提供的对象，包含两大类，一个是宿主提供，一个是自定义类对象，ECMAScript 官方未定义的对象都属于宿主对象,所有非本地对象都是宿主对象。宿主提供对象原理--->由宿主框架通过某种机制注册到 ECscript 引擎中的对象，如宿主浏览器（以远景为参考）会向 ECscript 注入 window 对象，构建其实现 javascript。。

DOM -> document
　　 BOM -> window

它们之间的关系
本地对象与内置对象：原生包含内置，内置是原生的一个子集。
宿主对象：内置对象的 Global 和宿主提供的一个全局对象，

本地对象为 array obj regexp 等可以 new 实例化
内置对象为 gload Math 等不可以实例化的
宿主为宿主注入到全局的对象，如浏览器的 window 等

特别说明：
内置对象之 Global
Global 即为全局对象，Global 对象是 ECMAScript 中最特别的对象，因为实际上它根本不存在！
在 ECMAScript 中，不存在独立的函数，所有函数都必须是某个对象的方法。
类似于 isNaN()、parseInt()和 parseFloat()方法等，看起来都是函数，而实际上，它们都是 Global 对象的方法。
而且 Global 对象的方法还不止这些。

拓展方法内容
无论是什么对象，均可以通过 prototype 进行功能拓展。

打印浏览器的全局对象
打印自定义的对象，会显示出源码，但是打印全局对象，因为这些全局对象是程序自带的，是二进制编译的，所以无法显示出来源代码
它就只能给你‘native code’

```js
<script>
    var myfc=function(){var a=123;}
    console.log(myfc)//浏览器全局对象之window下自定义的myfc函数
    console.log(alert)//浏览器全局对象之window的alert函数
    console.log(isNaN)//浏览器全局对象之Global的isNaN函数
</script>
```

自定义函数
