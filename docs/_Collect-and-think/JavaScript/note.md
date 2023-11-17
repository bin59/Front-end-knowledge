```js
// 1.滚动到页面顶部
const goToTop = () => window.scrollTo(0, 0)
goToTop()

// 2.华氏/摄氏转换
const celsiusToFahrenheit = celsius => (celsius * 9) / 5 + 32
const fahrenheitToCelsius = fahrenheit => ((fahrenheit - 32) * 5) / 9
// 事例
celsiusToFahrenheit(15) // 59
celsiusToFahrenheit(0) // 32
celsiusToFahrenheit(-20) // -4
fahrenheitToCelsius(59) // 15
fahrenheitToCelsius(32) // 0

// 3.检查当前浏览器是否在苹果设备上
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform)
console.log(isAppleDevice)

// 4.检查当前浏览器是否支持触摸事件
const touchSupported = () => {
  'ontouchstart' in window ||
    (window.DocumentTouch && document instanceof window.DocumentTouch)
}
console.log(touchSupported())
// 如果支持触摸事件，将返回true，如果不支持则返回false。

//   5.检查当前是否有元素处于焦点中
// 我们可以使用document.activeElement属性检查一个元素是否当前处于焦点。

const elementIsInFocus = el => el === document.activeElement
elementIsInFocus(anyElement)
// 如果在焦点中返回true，如果不在焦点中返回 false

// 6.保留 n 位小数
const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed)
// 事例
toFixed(25.198726354, 1) // 25.1
toFixed(25.198726354, 2) // 25.19
toFixed(25.198726354, 3) // 25.198
toFixed(25.198726354, 4) // 25.1987
toFixed(25.198726354, 5) // 25.19872
toFixed(25.198726354, 6) // 25.198726

// 7.从一个日期获取时间
const timeFromDate = date => date.toTimeString().slice(0, 8)

console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0)))
// "17:30:00"

console.log(timeFromDate(new Date()))
// 打印当前的时间

// 8.检查当前标签是否隐藏
// Document.hidden （只读属性）返回布尔值，表示页面是（true）否（false）隐藏。

const isBrowserTabInView = () => document.hidden
isBrowserTabInView()
// 场外：无意间发现爱奇艺广告播放时间居然是在当前标签页激活的时候才会进行倒计时，离开当前标签页的时候，倒计时停止，百度一下发现document.hidden这个东东。

// document.hidden是h5新增加api使用的时候有兼容性问题。

var hidden
if (typeof document.hidden !== 'undefined') {
  hidden = 'hidden'
} else if (typeof document.mozHidden !== 'undefined') {
  hidden = 'mozHidden'
} else if (typeof document.msHidden !== 'undefined') {
  hidden = 'msHidden'
} else if (typeof document.webkitHidden !== 'undefined') {
  hidden = 'webkitHidden'
}
console.log('当前页面是否被隐藏：' + document[hidden])

// 使用下划线简化数字
// 在 ES2021 中引入，现在可以使用下划线分隔数字，以便于快速阅读。

// ES2020
const oneMillion = 1000000

// ES2021
const oneMillion = 1_000_000

String.prototype.replaceAll

// 到目前为止，人们需要使用带有全局标志的正则表达式来替换给定字符串中的字符/单词。

const result = 'Hello World'.replace(/\s/g, '-')
// result => 'Hello-World'
// 现在我们可以简单地使用 replaceAll 字符串方法。

const result = 'Hello World'.replaceAll(' ', '-')
// result => 'Hello-World'

// 逻辑赋值运算符

// 空赋值运算符

// 在 ES2021 之前，我们可以使用三元运算符或 OR 来分配确定的可选类型变量（即可能有也可能没有值的变量）；

// 使用三元运算符

// Using Ternary Operator
let template
console.log(template)
// undefined
template = template != null ? template : 'default'
console.log(template)
// default
// 使用 If 语句

// Using If statement
let template
console.log(template)
// undefined
if (template == null) {
  template = 'default'
}
console.log(template)
// default
// 但在使用ES2021，它的任务要简单得多；

let template
console.log(template)
// undefined
template ??= 'default'
console.log(template)
// default
// 逻辑 OR 赋值运算符

// 逻辑 OR 赋值运算符的工作方式与 Nullish 赋值运算符类似，不同之处在于它不是 null 或 undefined，而是在变量的计算结果为 false 时，将其赋值给给定的变量。

const user = { id: 18, first_name: 'Aidan' }
console.log(user)
// {id: 18, first_name: "Aidan"}
if (!user.profile_picture) {
  user.profile_picture = 'https://picsum.photos/id/237/200/300'
}
console.log(user)
// {id: 18, first_name: "Aidan", profile_picture: "https://picsum.photos/id/237/200/300"}
// 逻辑 AND 赋值运算符

// 如果变量的计算结果为真值，则逻辑 AND 赋值运算符会分配一个值。

user = { id: 18, first_name: 'Aidan' }
user &&= { ...user, loggedIn: true }
console.log(user)
// {id: 18, first_name: "Aidan", loggedIn: true}
```
