代码（html+css+JS） -->浏览器（解析） -->界面（用户看到的信息）

## 一.JavaScript 介绍

### 1. JavaScript 是什么

js 是一种属于网络的脚本语言，广泛用于 web 应用开发，常用来为网页添加各式各样的动态功能，为了给用户提供更加流畅的浏览体验

JavaScript 编程语言 流程控制

Netscape 在最初将其脚本语言命名为 LiveScript，后来 Netscape 在与 Sun 合作之后将其改名为 JavaScript。

JavaScript 运行在客户端(浏览器)的编程语言脚本语言

是一门动态类型的语言
是一门基于对象的语言
是弱语言
是单线程语言

JavaScript 的解释器被称为 JavaScript 引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在 HTML（标准通用标记语言下的一个应用）网页上使用，用来给 HTML 网页增加动态功能。

js 属于弱类型语言

强类型语言
java、c
声明变量（规定类型）：
String str = "文字";
int i = 1;
弱类型语言
声明变量（自动判断类型并且进行转换）：
var str = "文字";
var num = 123;

js 属于单线程语言
作为浏览器的脚本语言，js 的主要用途是与用户进行交互，以及操作 html 结构。这就决定他只能是
单线程。比如 js 去操作两件事，第一件事在 html 结构添加 div 元素，第二件事就是 html 结构中删掉 div 元素（两个线程）

多线程语言(java,c++,python...)
同时去做多件事（处理多个线程）

单线程语言优缺点：优点是易于编程、不需要考虑太多的状况，缺点就是效率低
多线程语言优缺点：优点效率高、性能高，缺点就是容易出现各种各样的 bug

### 2. JavaScript 最初的目的

最初的目的是为了处理表单的验证操作。
JavaScript 现在的意义(应用场景)
JavaScript 发展到现在几乎无所不能。

1. 网页特效
2. 服务端开发(Node.js)
3. 命令行工具(Node.js)
4. 桌面程序(Electron)
5. App(Cordova)
6. 控制硬件-物联网(Ruff)

### 3. JavaScript 和 HTML-CSS 的区别

HTML：提供网页的结构，提供网页中的内容
CSS: 用来美化网页
JavaScript: 可以用来控制网页内容，给网页增加动态的效果

### 4.JavaScript 的组成

JavaScript: ECMAScript BOM DOM

ECMAScript - JavaScript 的核心,定义了 JavaScript 的语法规范;
描述了语言的基本语法和数据类型，ECMAScript 是一套标准，定义了一种语言的标准与具体实现无关

BOM - 浏览器对象模型（提供与浏览器交互的方法和接口）

一套操作浏览器功能的 API
通过 BOM 可以操作浏览器窗口，比如：弹出框、控制浏览器跳转、获取分辨率等

DOM - 文档对象模型（提供与网页交互的方法和接口）

一套操作页面元素的 API
DOM 可以把 HTML 看做是文档树，通过 DOM 提供的 API 可以对树上的节点进行操作

1. 单行注释
   用两个反斜杠表示
   // 这是一个变量

一般用在一行代码的上面

2. 多行注释

用来注释多条代码
一般是用在函数或者是一段代码的上面
/\*

\*/
var age = 18;
var name = 'zs';
console.log(name, age);

// JavaScript 显示数据的四种方式

window.alert()// 弹出框。
document.write() //方法将内容写到 HTML 文档中。
innerHTML //写入到 HTML 元素。
console.log() //写入到浏览器的控制台。
