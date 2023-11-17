/*
在js中，异步编程只有四种情况:
    定时器都是异步编程的     宏任务
    所有的事件绑定都是异步编程的
    Ajax读取数据都是异步编程的，我们一般设置为异步编程
    回调函数都是异步编程的
*/

{
  console.log('1')
  // 微任务优先于宏任务处理
  // 宏任务
  setTimeout(() => {
    console.log('2')
  })

  // 微任务  .then微任务
  new Promise((res, rej) => {
    console.log('3')
    res('4')
  })
    .then(res => {
      console.log(res)
    })
    .catch(rej => {
      console.log(rej)
    })
  console.log('5')

  // 1 3 5 4 2
}

/*
JS分为同步任务和异步任务

    同步任务在主线程上执行

    异步任务放在主线程之外的一个任务队列

    主线程执行完毕后，读取任务队列的内容

宏任务(macro)task:当前主线程上执行的就是一个宏任务。 例: script 的代码、setTimeout、 setInterval、 postMessage等。
微任务: microtask。 例: Promise.then、 await后面的代码。
在执行当前宏任务时(同步执行时)， 遇到setTimeout会把它放到宏任务队列。遇到Promise.then会放到微任务队列。
当前宏任务执行完毕后，会先查看微任务队列，如果有任务，优先执行，否则执行下一个宏任务。所以promise.then会先于
setTimeout执行。


*/
