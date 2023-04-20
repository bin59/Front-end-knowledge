{
    async function async1() {
        console.log('async1 start')
        await async2()
        console.log('async1 end')
    }
    async function async2() {
        console.log('async2')
    }
    async1()
    console.log('script end')
}

/*
    我们知道async函数还是基于Promise的一些封装，而Promise是属于微任务的一种；
    因此会把await async2()后面的所有代码
    放到Promise的then回调函数中去，因此，如果把上面代码进行如下改写，会好理解很多：
*/ 
{
    async function async1() {
        console.log('async1 start')
        new Promise(function(resolve){
            console.log('async2')
            resolve()
        }).then(function(){
            console.log('async1 end')
        })
    }
    async1()
    console.log('script end')
}
