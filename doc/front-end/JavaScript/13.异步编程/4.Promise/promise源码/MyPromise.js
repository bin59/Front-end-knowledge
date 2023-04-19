// 有状态写常量(通常是纯大写)来记录这些状态
const PENDING = 'penging'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
class MyPromise{
    constructor(executor){
        // 用来接收外面new的时候传递过来的参数  executor: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise
        /*
        executor
            这是一个双参函数，参数为resolve和reject。Promise的实现会立即执
            行executor，并传入resolve和reject函数（Promise构造器将会在返
            回新对象之前executor）。当resolve和reject函数被调用时，它们分别
            对promise执行resolve和reject。executor通常会触发一些异步运算，
            一旦运算成功完成，则resolve掉这个promise，如果出错则reject掉。
            如果executor函数执行时抛出异常，promise状态会变为rejected。
            executor的返回值也会被忽略
        */
        executor(this.resolve,this.reject)
    }
    status = PENDING
    value=''//成功的数据
    err=''//失败的数据

    // 保存.then回调函数
    successCallback = []
    failCallback = []

    resolve=(value)=>{
        if(this.status !== PENDING) return
        // 当调用resolve方法的时候，将状态变为成功态
        this.status=FULFILLED
        // 将数据保存在Promise类的value属性中
        this.value = value

        // this.successCallback && this.successCallback(this.value)
        // 因为此时this.successCallback是一个数组，里面每个元素都是一个函数
        // 提取元素 + 括号 =》 执行这个回调函数

        while(this.successCallback.length) this.successCallback.shift()(this.value)
    }
    reject=(err)=>{
        if(this.status !== PENDING) return
        // 当调用reject方法的时候，将状态变为失败态
        this.status = REJECTED
        this.err = err
        while(this.failCallback.length) this.failCallback.shift()(this.err)
    }
    then(successCallback,failCallback){

        if(this.status == FULFILLED){
            successCallback(this.value)
        }else if(this.status ==REJECTED ){
            failCallback(this.err)
        }else{
            // 说明当前的promise是等待态
            // 将当前的函数保存在这个类中，操作和value一样
            this.successCallback.push(successCallback)
            this.failCallback.push(failCallback)
        }
        // 返回一个promise
    }
}

// 语法：new Promise(executor)
let p = new MyPromise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve(2)
        reject('失败')
    },2000)
    // resolve('成功')
    // reject('失败')
})

p.then(res=>{
    console.log('可以打印吗',res)
},err=>{
    console.log(err)
})

// 再写多个时只能输出一个
// 因为 successCallback = undefined 这里会覆盖后面传过来的函数
// 所以要改成用数组存放 successCallback = []
p.then(res=>{
    console.log('可以打印吗',res)
},err=>{
    console.log(err)
})

p.then(res=>{
    console.log('可以打印吗',res)
},err=>{
    console.log(err)
})


// p.then(res=>{
//     console.log('可以打印吗',res)
// },err=>{
//     console.log(err)
// })
// .then(res=>{
//     console.log('可以打印吗',res)
// },err=>{
//     console.log(err)
// })
// .then(res=>{
//     console.log('可以打印吗',res)
// },err=>{
//     console.log(err)
// })



