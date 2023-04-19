// 1
{
  let fn = function () {
    this.name = 'peter'
    return 'Jack'
  }
  let p = new fn()
  console.log(p.name)
}

// 2
{
  ;(function () {
    var a = (b = 5)
  })()
  console.log(b)
}

// 3
{
  console.log(typeof undefined == typeof NULL)
  console.log(typeof function () {} == typeof class {})
  /*
true、true
解析
1.首先不要把NULL看成是null，js的关键字是区分大小写的，所以这就是一个普通的变量，而且没有声明，typeof对没有声明的变量使用是不会报错的，返回'undefined'，typeof对undefined使用也是'undefined'，所以两者相等
2.typeof对函数使用返回'function'，class只是es6新增的语法糖，本质上还是函数，所以两者相等

*/
}
