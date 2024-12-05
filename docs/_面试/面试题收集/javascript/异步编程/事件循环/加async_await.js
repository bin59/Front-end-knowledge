// 一
{
  // async function async1(){
  //     console.log('async1 start')
  //     await async2()
  //     console.log('async1 end')
  // }
  // async function async2(){
  //     console.log('async2')
  // }
  // console.log('script start')
  // setTimeout(function(){
  //     console.log('setTimeOut')
  // }, 0)
  // async1()
  // new Promise(function(resolve){
  //     console.log('promise1')
  //     resolve()
  // }).then(function(){
  //     console.log('promise2')
  // })
  // console.log('script end')
}

// 二
{
  // setTimeout(function(){
  //     console.log('1')
  // }, 2000)
  // async function async1(){
  //     console.log('3')
  //     await async2()
  //     console.log('4')
  // }
  // async function async2(){
  //     console.log('5')
  //     let a= await new Promise((res)=>{
  //         console.log('6')
  //         res('7')
  //         console.log('2')
  //     })
  //     console.log(a)// 7进入微任务， async1被阻塞，执行后面的aaa
  // }
  // setTimeout(function(){
  //     async1()//
  //     new Promise((res)=>{//aaa
  //         console.log('8')
  //         res('9')
  //     }).then((res)=>{
  //         console.log(res) // 9
  //     })
  // }, 1000)
} // 3 5 6 2  8 7 9 4 1    (//! 7 9 4 )

// 三
{
} // 5 1 6 8 2 3 7 4 2 4

// 四
{
  async function async1() {
    console.log(1)
    await async2()
    setTimeout(() => {
      console.log(2)
    }, 0)
  }
  async function async2() {
    setTimeout(() => {
      console.log('3')
    }, 0)
  }
} //4 1  5  7 6 3  2
