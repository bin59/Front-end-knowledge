/*
   1、Node 全局对象
        与浏览器平台的window不完全相同，Nodejs全局对象上挂载许多属性

        全局对象是JavaScript中的特殊对象

        Nodejs中全局对象是global，根本作用就是作为宿主

    2、Nodejs常见全局变量
        __filename: 返回正在执行脚本文件的绝对路径
        __dirname: 返回正在执行脚本所在目录
        timer类函数:执行顺序与事件循环间的关系
        process:提供与当前进程互动的接口
        require: 实现模块的加载
        module、exports:处理模块的导出
*/
console.log(global)
console.log('__filename', __filename) /*  */
console.log('__dirname', __dirname)

console.log(this) //{}

// 默认情况this是空对象，和global并不是-一样的
console.log(this == global) //false
;(function () {
  console.log(this == global) //true
})()
;(() => {
  console.log(this == global) //false
})()

/*
调用require( 'module ')的时候已经帮我们传入了一些参数
__filename 
__dirname
module
exports
*/
