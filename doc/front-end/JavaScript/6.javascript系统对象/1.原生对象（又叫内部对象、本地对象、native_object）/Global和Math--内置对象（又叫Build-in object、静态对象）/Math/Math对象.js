/*
Math对象
    Math.random()    随机数
    Math.round()     四舍五入
    Math.ceil()     小数点向上取整
    Math.floor()     小数点向上取整
    Math.abs()      取绝对值
    Math.max()      求最大值
    Math.min() 

*/

// Math.random()
// [0-1)随机数
console.log(Math.random())
// [0-10)  （包含小数）
console.log(Math.random() * 10)
console.log('------')

// Math.round()
console.log(Math.round(0.5)) //1
console.log(Math.round(0.2)) //0
console.log('------')

// Math.ceil()
console.log(Math.ceil(0.5)) //1
console.log(Math.ceil(0.2)) //1
console.log('------')

//Math.floor()
console.log(Math.floor(0.5)) //0
console.log(Math.floor(0.2)) //0
console.log('------')

// Math.abs()
console.log(Math.abs(-20)) //20
console.log('------')
// Math.max()、Math.min()
console.log(Math.max(20, 100, 0.5)) //100
console.log(Math.min(10, 0.02, 90)) //0.02
console.log('------')

// 1.定义一个函数，求[1-m]的随机数
console.log('1.定义一个函数，求[1-m]的随机数')
function fn1(num) {
  // Math.random()*num +1 -->  [0-mun+1）
  // 向下取整    [0-num]
  return Math.floor(Math.random() * num + 1)

  // 向上取整
  // return Math.ceil(Math.random()*num);
}
console.log(fn1(2))

//2.定义一个函数，求[n-m]的随机数
// [4,10]
console.log('2.定义一个函数，求[n-m]的随机数')
function fn2(n, m) {
  return Math.floor(Math.random() * (m - n + 1) + n) //先获取区间，[n-m]一共有m-n+1位
}
console.log(fn2(1, 2))

// 3.定义一个函数，求[n-m)的随机数
console.log('3.定义一个函数，求[n-m)的随机数')
function fn3(n, m) {
  return Math.floor(Math.random() * (m - n) + n)
}
console.log(fn3(0, 1))

// 4.定义一个函数，求(n-m)的随机数
console.log('4.定义一个函数，求(n-m)的随机数')
function fn4(n, m) {
  return Math.floor(Math.random() * (m - n - 1) + n + 1)
}
console.log(fn4(0, 1))

// 5.定义一个函数，求(n-m]的随机数
console.log('5.定义一个函数，求(n-m]的随机数')
function fn5(n, m) {
  return Math.floor(Math.random() * (m - n) + n + 1)
}
console.log(fn5(0, 1))
