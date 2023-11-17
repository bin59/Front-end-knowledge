# 在项目开发中需要js实现千位分隔符来分割一个整数，比如我想将数字 1234567 显示为“1,234,567”。我该怎么实现呢？
## 方法一、利用循环
 实现思路是将数字转换为字符数组，再循环整个数组， 每三位添加一个分隔逗号，最后再合并成字符串。
```js
function numberWithCommas(x) {
  x = x.toString()
  const pattern = /(-?\d+)(\d{3})/
  if (pattern.test(x)) return x.replace(pattern, '$1,$2')
}

numberWithCommas(12312124545) //'12,312,124,545'
numberWithCommas(123121245.45) //'123,121,245.45'
```
## 方法二、toLocaleString

Number.prototype.toLocaleString。它是在 JavaScript 1.5（于 1999 年推出）中实现的，因此基本上所有主要浏览器都支持它。
```js
const num = 12345.1234
num.toLocaleString() //'12,345.123'
// 注意的是这个函数在没有指定区域的基本使用时，返回使用默认的语言环境和默认选项格式化的字符串，所以不同地区数字格式可能会有一定的差异。最好确保使用 locales 参数指定了使用的语言。

// 注：我测试的环境下小数部分会根据四舍五入只留下三位。比如：

const b = 1234.4542
b.toLocaleString() //'1,234.454'
```

## 方法三、正则表达式和replace函数
使用正则表达式和replace函数，相对前两种我更喜欢这种方法，虽然正则有点难以理解。
```js
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
```
正则表达式使用 2 个前瞻断言：

一个正数，用于在字符串中查找其后连续 3 位数字的任何点，

一个否定断言，以确保该点只有 3 位数字的倍数。替换表达式在那里放置一个逗号。

注意：这个函数如果小数点后有超过3位数字的话，会在不需要的地方添加逗号。如果这是一个问题，您可以使用此功能。
```js
function numberWithCommas(x) {
  var parts = x.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}
```
更简洁，最终代码：
```js
function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
}
```
## 方法四：Intl.NumberFormat
原生js功能。支持 IE11、Edge、最新的 Safari、Chrome、Firefox、Opera、iOS 上的 Safari 和 Android 上的 Chrome。

可以把普通的数字，转换成不同的货币和格式样式字符串。

```js
let number = 1234567890
let nf = new Intl.NumberFormat('en-US')
nf.format(number) // "1,234,567,890"
```
## 更多实例：
```js
number = 123456.789

console.log(
  new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
    number
  )
)
// expected output: "123.456,79 €"

// the Japanese yen doesn't use a minor unit
console.log(
  new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(
    number
  )
)
// expected output: "￥123,457"

// limit to three significant digits
console.log(
  new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number)
)

// expected output: "1,23,000"
```