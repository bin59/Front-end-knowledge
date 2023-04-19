// 数据类型转换
//1.全局方法 String()  将数字转换为字符串
var str = '123'
var num = 999
var flag = true
var ud = undefined
var n = null
var str1 = '我是字符串'

console.log(String(num))
console.log(String(flag))
console.log(String(ud))
console.log(String(n))
console.log(String(str1))
/*
999
true
undefined
null
我是字符串
*/
//2.对象方法 toString   将数字转换为字符串
// 和String()的区别:  变量有意义才能调用.toString()使用转换,不支持undefined、null类型的转换 （会报错，查找不到toString的方法）

console.log(num.toString()) //999
// console.log(ud.toString())

//3.全局方法  Number()
//将其他数据类型转换为数字类型
console.log(Number(str)) //123
console.log(Number(flag)) //1
console.log(Number(ud)) //NaN
console.log(Number(n)) //0
console.log(Number(str1)) //NaN

//4.全局方法 Boolean()
//将其他数据类型转换为布尔类型
// 返回值  true、false

var str = '123'
var str1 = '我是字符串'
var str2 = ''
var num = 999
var flag = true
var ud = undefined
var n = null
console.log(Boolean(str)) // true
console.log(Boolean(flag)) // true
console.log(Boolean(ud)) // false
console.log(Boolean(n)) // false
console.log(Boolean(str1)) //  true
console.log(Boolean(str2)) //  false
