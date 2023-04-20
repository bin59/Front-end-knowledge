/*
async和await
    async是一个函数，处理异步任务的方法，返回的是Promise对象
    (提供了在不阻塞主线程的情况下使用同步代码异步访问资源的能力)

    await
    用于等待一个async函数执行完成( async的返回值)

    async函数还是基于Promise的一些封装，而Promise是属于微任务的一种；
    因此会把await async2()后面的所有代码放到Promise的then回调函数中去
*/

// 1、async使用
{
    // 方式一
    async function fn(){
        return '我是fn函数'
    }
    // console.log(fn())//Promise {<fulfilled>: '我是fn函数'}
    // fn().then(res=>console.log(res))//我是fn函数

    // 方式二
    // ;(async ()=> '我是自执行函数')().then(res=>console.log(res))//我是自执行函数
}

// 2、async和await结合使用
{
   async function fn(){

        // 一
        // setTimeout(()=>{
        //     console.log('1')
        // },2000)

        // 二
      let res=  await new Promise((res,rej)=>{
            setTimeout(()=>{
                console.log('1')
                res('11111')//要给一个状态(成功)
            },2000)
        })

        console.log('8:',res);

       console.log('2')
       return '3'
    } 
    fn().then(res=>console.log(res))

    //一：打印的是   2 3  1
    // 二：打印的是  1  8:111112 3 
}

{
    // 封装函数
    function promiseFn(ms){
        return new Promise(res=>{
            setTimeout(()=>{res(ms+1000)},ms)
        })
    }

    // 模拟请求三个接口函数，并且输入的ms时间不同
    function fn1(ms){
        console.log('fn1:'+ms)
        return promiseFn(ms)
    }

    function fn2(ms){
        console.log('fn2:'+ms)
        return promiseFn(ms)
    }

    function fn3(ms){
        console.log('fn3:'+ms)
        return promiseFn(ms)
    }

    // 1、用promise   .then
    function pFn(){
        const t = 1000
        fn1(t).then(res=>{
            console.log('res1:'+res)
            return fn2(res)
        }).then(res=>{
            console.log('res2:'+res)
            return fn3(res)
        }).then(res=>{
            console.log('res3:'+res)
        })
    }
    // pFn()

    // 2、使用async和await
    async function aFn(){
        const t = 1000
        let t1 = await fn1(t),
            t2 = await fn2(t1),
            t3 = await fn3(t2)
    }
    aFn()
}