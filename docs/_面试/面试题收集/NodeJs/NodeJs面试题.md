<!--
 * @Author: binbin59 zbin59@163.com
 * @Date: 2022-10-22 18:42:23
 * @LastEditors: binbin 81745365+bin59@users.noreply.github.com
 * @LastEditTime: 2023-04-18 23:10:00
 * @FilePath: \Front-end-knowledge\doc\front-end\面试\面试题\面试题收集\NodeJs\NodeJs面试题.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

## 概念：

    1. Node.js是一个基于Chrome V8引擎的javascipt的运行环境。
    2. Node.js使用了一个事件驱动、非阻塞I/O的模型，
    3. Node.js轻量又高效,能够使我们在本地运行javascript

## NodeJS 能做什么？

    1、提供数据给浏览器展示
    2、保存用户提交过来的数据
    3、数据统计与分析

## 为什么说 Node.js 适合做高并发的互联网应用？

    Node.js采用一系列“非阻塞”库来支持事件循环的方式。本质上就是为文件系统、数据库之类的资源提供接口。
    Node.js使用事件驱动，非阻塞I/O模型而得以轻量和高效，非常适合在分布式设备上运行数据密集型的实时应用。

## 服务器 Node.js 和浏览器 js 的区别是什么？

    1.node.js 是平台，JavaScript 是编程语言；
    2.javascript 是客户端编程语言，需要浏览器的 javascript 解释器进行解释执行；
    3.node.js 是一个基于 Chrome JavaScript 运行时建立的平台，它是对 Google V8 引擎进行了封装的运行环境；
    4.node.js 就是把浏览器的解释器封装起来作为服务器运行平台，用类似 javascript 的结构语法进行编程，在 node.js 上运行。

## NodeJS 中五大核心的模块

    模块          作用
    http          开启一个 Web 服务，给浏览器提供服务
    url           给浏览器发送请求用，还可以传递参数(GET)
    querystring   处理浏览器通过 GET/POST 发送过来的参数
    path          查找文件的路径
    fs            在服务器端读取文件用的

## Node.js 把 js 从客户端迁移到服务端，主要做了哪些工作？

    1. 运行 node.js
    2. 开启主线程，I/O 线程
    3. 运行 js 文件，在内存中开启一个 REPL 环境用来执行 js 代码

## xpress 框架：

    基于 Node.js 平台，快速、开放、极简的 web 开发框架。
