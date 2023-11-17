# 如何在 JavaScript 中将数字四舍五入到小数点后两位

要在 JavaScript 中将数字四舍五入到小数点后两位，请对数字调用 toFixed() 方法，即 num.toFixed(2)。toFixed() 会将数字四舍五入并将其格式化为小数点后两位。

例如：

```js
JavaScript

const num = 5.3281

const result = num.toFixed(2)
console.log(result) // 5.33

const num2 = 3.1417
const result2 = num2.toFixed(2)
console.log(result2) // 3.14
```

toFixed() 方法采用数字 F 并返回小数点后 F 位数的数字的字符串表示形式。这里的 F 由传递给 toFixed() 的第一个参数 fractionDigits 参数决定。

```js
const num = 5.3281

console.log(num.toFixed(0)) // 5

console.log(num.toFixed(1)) // 5.3

console.log(num.toFixed(2)) // 5.33

console.log(num.toFixed(3)) // 5.328

console.log(num.toFixed(4)) // 5.3281

console.log(num.toFixed(5)) // 5.32810
```

将 toFixed() 的结果解析为数字。

请记住， toFixed() 返回一个字符串表示：

```js
const num = 5.3281

const result = num.toFixed(2)

console.log(result) // 5.33
console.log(typeof result) // string
```

但是，我们总是可以使用 Number() 构造函数将结果转换为数字：

```js
const num = 5.3281

const result = Number(num.toFixed(2))
console.log(result) // 5.33
console.log(typeof result) // number
```

如果字符串有尾随零，它们将在转换中被删除：

```js
const num = 9.999999

const strResult = num.toFixed(2)
const result = Number(strResult)
console.log(strResult) //10.00
console.log(result) // 10
```

小数点后的尾随零不会改变数字的值，因此 10.00 与 10 或 10.00000000 相同。

```js
console.log(10.0 === 10) // true

console.log(10.0 == 10) // true
```

将十进制字符串四舍五入到小数点后两位。

有时输入可能存储为字符串。在这种情况下，我们首先需要使用 parseFloat() 函数将数字转换为浮点数，然后再使用 toFixed() 将其四舍五入到小数点后两位。

例如：

```js
const numStr = '17.23593'

// 👇 convert string to float with parseFloat()
const num = parseFloat(numStr)
const result = num.toFixed(2) // 17.24
console.log(result)
```

并非所有的十进制数都可以用二进制精确表示，因此在 JavaScript 的浮点数系统中存在一些舍入错误。例如：

```js
console.log(44.85 * 0.1) // 4.485

console.log(45.85 * 0.1) // 4.585

console.log(46.85 * 0.1) // 4.6850000000000005 (?)
```

在此示例中，46.85 x 0.1 等于 4.6850000000000005，因为 46.85 无法用二进制浮点格式准确表示。

```js
console.log((1.415).toFixed(2)) // 1.42

console.log((1.215).toFixed(2)) // 1.22

console.log((1.015).toFixed(2)) // 1.01 (?)
```

与第一个一样，这里的 1.015 被四舍五入到小数点后两位为 1.01 而不是 1.02，因为 1.015 在二进制数字系统中也无法准确表示。

此缺陷最常见的示例之一是经典的 0.1 + 0.2：

```js
console.log(0.1 + 0.2 === 0.3) // false

console.log(0.1 + 0.2) // 0.30000000000000004
```
