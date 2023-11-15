/*
内置模块path，用于处理文件/目录的路径

内置模块,在require 之后直接使用

path模块常用API
    basename()获取路径中基础名称
    dirname()获取路径中目录名称
    extname()获取路径中扩展名称
    isAbsolute()获取路径是否为绝对路径
    join()拼接多个路径片段
    resolve()返回绝对路径
    pasre()解析路径
    format()序列化路径
    normalize()规范化路径
*/

const path = require('path')
// 1 获取路径中的基础名称
/*
01 返回的就是接收路径当中的最后一部分
02 第二个参数表示打展名，如果说没有设置则返回完整的文件名称带后缀
03 第二个参数做为后缀时，如果没有在当前路径中被匹配到，那么就会忽略
04 处理目录路径的时候如果说，结尾处有路径分割符,则也会被忽略掉

*/
console.log(path.basename(__filename)) //3.内置模块path.js
// console.log(__filename)//H:\binbin\bin\web\study\front-end\NodeJs\Nodejs全局对象\3.内置模块path.js

// 第二个参数可传可不传，如
console.log(path.basename(__filename, '.js')) //3.内置模块path    传入.js 就是匹配.js  有就输出不带.js的
console.log(path.basename(__filename, '.css')) //3.内置模块path.js    传入.css 没有匹配的，就原样输出
console.log(path.basename('a/b/c')) //c
console.log(path.basename('a/b/c/')) //c

// 2 获取路径目录名
//返回路径中最后一 个部分的上一层目录所在路径
console.log(path.dirname(__filename)) //H:\binbin\bin\web\study\front-end\NodeJs
console.log(path.dirname('a/b/c')) //a/b
console.log(path.dirname('a/b/c/')) //a/b

// 3 获取路径扩展名
console.log(path.extname(__filename)) // .js
console.log(path.extname('a/b/c')) // 返回的是空
console.log(path.extname('a/b/c/')) // 返回的是空
console.log(path.extname('a/b/c/.')) // 返回的是空
console.log(path.extname('a/b/c/.a.')) //  返回.

// 4 解析路径
const obj = path.parse('/a/b/c/index.html')
const obj2 = path.parse('/a/b/c')
const obj3 = path.parse('./a/b/c')
console.log(obj)
console.log(obj2)
console.log(obj3)
/*
obj
{
    root: '/',
    dir: '/a/b/c',
    base: 'index.html',
    ext: '.html',
    name: 'index'
}

obj2
{ root: '/', dir: '/a/b', base: 'c', ext: '', name: 'c' }

obj3
{ root: '', dir: './a/b', base: 'c', ext: '', name: 'c' }
*/

// 5 序列化路径
console.log(path.format(obj))///a/b/c\index.html 