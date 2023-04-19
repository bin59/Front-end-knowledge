/* 
    在这里编写的promise的肯定不是和源码-样
    是一个阉割版，也可以称为面试专用版。

    需求分析：
    1.Promise是一个类，并且这个类需要传递一个函数，并且这个函数是在类的内部执行
    2.Promise中有三种状态并且状态一旦改变就无法更改
        pending 等待态
        fulfilled 成功态
        rejected 失败态

        一旦 new Promise 已经是一个等待态 pending
        直到调用resolve() pending  => fulfilled
        直到调用reject() pending  => rejected

    3.resolve或者reject理解为更改状态、
    4.当状态一更改，在.then方法中判断当前的状态
        如果是resolve (参数) 自动传递给.then的成功回调中的参数
        如果是reject (参数) 自动传递给.then的失败回调中的参数
*/
let p =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('成功')
    })
})

p.then(res=>{
    console.log(res)
},err=>{
    console.log(err)
})

p.then(res=>{
    console.log(res)
},err=>{
    console.log(err)
})

p.then(res=>{
    console.log(res)
},err=>{
    console.log(err)
})