/*
    箭头函数
        1、箭头函数不会自动创建this(没有this)，它的this会从自己当前作用域往上一层继承this
        2、call、apply.bind是无法修改箭头函数的this
        3、箭头函数的this是在创建时就确定了

*/

//  function fn(){
//      console.log(this)//window
//  }

//  let fn1 = ()=>{
//      console.log(this)//window
//  }
//  fn1()

let num = 888
//  var num = 888
// num = 888
let obj = {
  num: 999,
  fn2: () => {
    console.log(this) //window
    console.log(this.num) //(1)let num = 888时,num:undefined ,(2) var num =888或者num =888时（var有变量提示挂载到window上）,num:888
  },
  fn3: function () {
    console.log(this) //obj
    console.log(this.num) ////999
  },
}
//  obj.fn2()
//  obj.fn3()

var str = '我是全局变量str'
function fn() {
  let str = '我是fn函数的变量'

  function fn1() {
    console.log(this.str) //我是全局变量str
  }
  fn1() //window.fn1()  wiindow调用fn1()

  let fn2 = () => {
    console.log(this.str) //我是全局变量str
  }
  fn2()
}
fn()
