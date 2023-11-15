# String 字符串练习(1)

### 1.首字母大写

```js
let str1 = 'hi javascript! hi hello world!'
```

方法一 toUpperCase() + replace()

```js
let str2 = ''
for (let i = 0; i < str1.length; i++) {
  if (i == 0) {
    str2 = str1.substr(i, 1).toUpperCase(str1)
    str1 = str1.replace(str1[i], str2)
  } else if (str1[i] == ' ') {
    str2 = str1.substr(i + 1, 1).toUpperCase(str1)
    str1 = str1.replace(str1[i + 1], str2)
  }
}
```

方法二

```js
let newStr = ''
str1.split(' ').forEach(function (item, index) {
  item = item.charAt(0).toUpperCase() + item.slice(1)
  newStr += item + ' '
})

console.log(newStr.slice(0, -1))
```

### 2.封装一个函数实现字符串翻转

```js
function fn(str) {
  // 方法一
  str = str.split('').reverse().join('')
  return str

  // 方法二
  let newStr = ''
  for (i = str.length - 1; i >= 0; i--) {
    newStr += str[i]
  }
  return newStr
}
let str = '1234567890'
console.log(fn(str))
```

### 3.字符串 digite = "0123456789", 把前 5 个字符分割出来， 返回个单字符的数组, 注意， 返回数组里面的数字是字符串类型, string.split()

```js
let digite = '0123456789'
digite = digite.substring(0, 5).split('')
console.log(digite)
```

### 4.解析 URL Params 为对象，例如(https://www.baidu.com/s?ie=UTF-8&wd=letcode)

```js
let url = 'https://www.baidu.com/s?ie=UTF-8&wd=letcode'
let obj1 = {}
url
  .split('?')[1]
  .split('&')
  .forEach(function (val) {
    obj1[val.split('=')[0]] = val.split('=')[1]
  })
console.log(obj1)
```

### 5.转换 url

let url = "http://baidu.com?name=hy&id=1&sex=男";

(1)将 url 转格式成为:
[ "name=hy" , "id=1", "sex=男"]

```js
url = url.split('?')[1].split('&')
console.log(url)
```

(2)将 url 转格式成为:
{
name:hy,
id:1,
sex:男
}

```js
let obj = {}
url.forEach(function (val) {
  obj[val.split('=')[0]] = val.split('=')[1]
})
console.log(obj)
```
