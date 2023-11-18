/*
    全局变量 process 
        提供与当前进程互动的接口
        无须require可直接使用
        获取进程信息
        执行进程操作
*/
// process工作中对资源的消耗
// 1 资源：cpu 内存

const { platform } = require("os")

// 内存的
// const fs = require('fs')   //导入fs,发现heapUsed的值增加
// Buffer.alloc(1000)     //，发现arrayBuffers的值加了1000
console.log(process.memoryUsage())
/* 获取到
{
  rss: 21180416,           //常驻内存 
  heapTotal: 4988928,      //当前脚本在执行初或刚开始所申请的总内存大小
  heapUsed: 4186616,       //实际使用的内存大小
  external: 372149,        //表示c或c++核心模块所占据的大小
  arrayBuffers: 11146       //一个独立的空间大小，不占据v8占据的内存，(高版本中新加的，本来也是在external中的)
}*/ 

// cpu
console.log(process.cpuUsage())
// 获取到 用户和系统执行的过程中占据的时间片段
// { user: 62000, system: 15000 }



// 2 运行环境：运行目录、node环境、cpu架构、用户环境、系统平台

console.log(process.cwd())     //运行目录，当前的工作目录
console.log(process.version)   //v17.0.1

// console.log(process.versions)   
/*{
    node: '17.0.1',
    v8: '9.5.172.21-node.12',
    uv: '1.42.0',
    zlib: '1.2.11',
    brotli: '1.0.9',
    ares: '1.17.2',
    modules: '102',
    nghttp2: '1.45.1',
    napi: '8',
    llhttp: '6.0.4',
    openssl: '3.0.0+quic',
    cldr: '39.0',
    icu: '69.1',
    tz: '2021a',
    unicode: '13.0',
    ngtcp2: '0.1.0-DEV',
    nghttp3: '0.1.0-DEV'
  }*/

console.log(process.arch)             // x64   当前的cpu架构
// env  环境相关
console.log(process.env.NODE_ENV)     //undefined  获取使用webpack和vue配置的生产环境还是开发环境
// console.log(process.env.PATH)      //  系统环境变量
console.log(process.env.USERPROFILE)   //C:\Users\Administrator  本机的管理员目录   win用户--USERPROFILE,mac--HOME  
console.log(process.platform)           //win32     


// 3.运行状态： 启动参数、PID、运行时间
console.log(process.argv);
/*
[
  'C:\\Program Files\\nodejs\\node.exe',
  'H:\\binbin\\bin\\web\\study\\front-end\\NodeJs\\Nodejs全局对象\\2.process.js'     
]*/

console.log(process.argv0)//node
console.log(process.argv1)//undefined  只有一个快捷方式argv0

console.log(process.pid)//3164  当前2.process.js运行时作为一个程序，在操作系统内占据一个唯一id
console.log(process.uptime()) //当前脚本的运行时间


// 4.事件

// 通过 on 监听事件
// exit 退出的那个时间点
process.on('exit',(code)=>{ 
  console.log('exit'+code)
  // exit里面只能执行同步代码
  // setTimeout(()=>{
  //   console.log('111')
  // },1000)
})

// beforeExit 退出前
process.on('beforeExit',(code)=>{ 
  console.log('before exit'+code)
  // beforeExit可以执行异步代码
  // setTimeout(()=>{
  //   console.log('222')
  // },1000)
})

console.log('代码执行完了')
/*
执行顺序：
代码执行完了
before exit0
exit0
*/

// process.exit()  //自定义退出，并不是程序主动退出，会发现beforeExit没有执行
// console.log('我执行吗？');


// 5.标准输出、输入、错误

/*
stdin：标准输入流  （终端键盘输入）
stdout： 标准输出流 （终端显示）
pipe


stdout的简单使用，以及它是一个可写流

重写一些log输出  console.log 底层是基于 process.stdout.write 实现的

process.stdout.write 函数只接受字符串，如果传别的类型就会报错。
而 console.log 可以接收任意类型，因为在输出前经过了 format 函数格式化

process.stdout.write 函数默认不会换行，
而 console.log 函数因为在最后拼接了一个换行符 \n ，导致每次输出都会换行

在 npm 包源码中，因为不希望每次都换行，而是在一行内输出，因此用了 process.stdout.write

*/
console.log=function(data){
  process.stdout.write('---' + data +'---'+ '\n')
}

console.log(11) //---11---


const fs = require('fs')
// 创建一个可读流  把2test.txt中的数据拿出来
fs.createReadStream('2test.txt')
  // 通过管道流给下一个环节   
  .pipe(process.stdout)//小黑该睡觉了
   

// process.stdin.pipe(process.stdout)

process.stdin.setEncoding('utf-8')//设置编码防止乱码

process.stdin.on('readable',()=>{
  let chunk = process.stdin.read()
  if(chunk!=null){
    process.stdout.write('data：'+chunk)
  }
})
