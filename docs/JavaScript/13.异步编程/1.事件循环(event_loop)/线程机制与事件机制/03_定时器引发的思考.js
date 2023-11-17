/*
定时器引发的思考
  1. 定时器真是定时执行的吗?
    * 定时器并不能保证真正定时执行
    * 一般会延迟一丁点(可以接受), 也有可能延迟很长时间(不能接受)
  2. 定时器回调函数是在分线程执行的吗?
    * 在主线程执行的, js是单线程的
  3. 定时器是如何实现的?
    * 事件循环模型
*/
  let start = Date.now()
      setT_runTime=0
  setTimeout(function () {
    console.log('定时器执行了', Date.now()-start)
  }, 200)

  // 做一个长时间的工作
  for (let i = 0; i < 1000000000; i++) {

  }
  console.log('for循环执行了', Date.now()-start)
