# String 字符串练习(2)

### 1.已知有字符串 foo=”get-element-by-id”,写一个 function 将其转化成驼峰表示法”getElementById”.

```js
let foo = 'get-element-by-id'
```

方法一

```js
function funFoo(foo) {
  let foo1 = ''
  foo = foo.split('-').forEach((val, index) => {
    if (index) {
      val = val.charAt(0).toUpperCase() + val.slice(1)
    }
    foo1 += val
  })
  return foo1
}

console.time()
console.log(funFoo(foo))
console.timeEnd()
```

方法二

```js
function fn1(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == '-') {
      str = str.replace(
        str.charAt(i) + str.charAt(i + 1),
        str.charAt(i + 1).toUpperCase()
      )
    }
  }
  return str.split('-')[0]
}

console.time()
console.log(fn1(foo))
console.timeEnd()
```

方法三

```js
function fn2(str) {
  let newStr
  newStr = str
    .split('-')
    .map((item, index) =>**
      index ? item.replace(item[0], item[0].toUpperCase()) : item
    )
  return newStr.join('')
}

console.time()
console.log(fn2(foo))
console.timeEnd()

```

方法四

```js
function fn3(str) {
  let newStr = ''
  str
    .split('-')
    .forEach(
      (item, index) =>
        (newStr += index ? item.replace(item[0], item[0].toUpperCase()) : item)
    )
  return newStr
}

console.time()
console.log(fn3(foo))
console.timeEnd()
```

方法五

```js
function toHump(name) {
  return name.replace(/\-(\w)/g, (all, letter) =>
    //   console.log(all) //"_T"
    //   console.log(letter) //"T"
    letter.toUpperCase()
  )
}

console.time()
console.log(toHump(foo))
console.timeEnd()
```

4.定义一个函数,将"今天是什么鬼天气，这么热，明天要去游泳！"里面的有"天"的下标输出(用 indexof())

```js
let str2 = '今天是什么鬼天气，这么热，明天要去游泳！'

function fun4(str2) {
  let num = ''

  // 方法一
  for (let i = 0; i < str2.length; i++) {
    if (str2.charAt(i) == '天') {
      num += str2.indexOf(str2.charAt(i), i) + ' '
    }
  }
  return num

  // 方法二
  while (true) {
    num = str2.indexOf('天', num)
    if (num == -1) {
      break
    }
    console.log(num)
    num++
  }
}
console.log(fun4(str2))
```

5.定义一个函数,将"今天是什么鬼天气，这么热，明天要去游泳！"里面的有"天"替换成"日"(用 replace())

```js
let str3 = '今天是什么鬼天气，这么热，明天要去游泳！'
function fn2(str3) {
  // 方法一 会修改原字符串
  for (let i = 0; i < str3.length; i++) {
    if (str3.charAt(i) == '天') {
      // 这样会修改原字符串
      // str3 = str3.replace(str3.charAt(i),"日");
    }
  }
  return str3

  // 定义一个新数组就行
  let newStr3 = str3**
  for (let i = 0; i < str3.length; i++) {
    if (newStr3.charAt(i) == '天') {
      newStr3 = newStr3.replace(str3.charAt(i), '日')
    } else {
    }
  }
  return newStr3
}
console.log(fn2(str3))
```

7.查找字符串中(abbcccddddd)出现最多的字符和个数

```js
let str = 'abbcccdddd'
let obj = {}
```

```js
for (let i = 0; i < str.length; i++) {
  if (obj[str[i]]) {
    obj[str[i]]++
  } else {
    obj[str[i]] = 1
  }
}
console.log(obj) //{ a: 1, b: 2, c: 3, d: 4 }
```

```js
let max = 1 //假设最大值，出现的最大次数
let item = '' //出现最多的字符

// for...in 用于循环对象
// 参数：key 键名
for (let key in obj) {
  if (obj[key] > max) {
    max = obj[key]
    item = key
  }
}
console.log('出现最多的字符：' + item, '次数:' + max)
```

```js
let str = 'abcabcabcbbccccc'
let num = 0
let char = ''

// 使其按照一定的次序排列
str = str.split('').sort().join('')
// "aaabbbbbcccccccc"

// 定义正则表达式
let re = /(\w)\1+/g
str.replace(re, ($0, $1) => {
  if (num < $0.length) {
    num = $0.length
    char = $1
  }
})
console.log(`字符最多的是${char}，出现了${num}次`)
```

```js
let str = 'abcabcabcbbccccc'
let strObj = {} // 存放不重复字符及个数
let max = 0 // 存储出现最多的字符个数
let keyVal = 0 // 键值
let strObjKey = ''
let strSort = str.split('').sort()
// 输出为['a','a','a', 'b','b','b','b','b','c','c','c','c','c','c','c','c']

for (let i = 0; i <= strSort.length; i++) {
  if (strSort[i] != strSort[i + 1]) {
    strObj[strSort[i]] = i + 1
  }
}
//strObj 输出为 {a: 3, b: 8, c: 16}
for (let key in strObj) {
  if (max < strObj[key] - max) {
    max = strObj[key] - keyVal
    keyVal = strObj[key]
    strObjKey = key
  }
}
console.log('最大为' + strObjKey + '个数为' + max)
console.log(strObj)
```

首先写一个函数，传入一个字符串

```js
function getMaxCharacters(str) {
  const map = {}
  //match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
  let arr = str.match(/(\w)\1+/g)
  let max = arr[0].length
  arr.map(v => (max = Math.max(max, v.length)))
  const maxArr = arr.filter(v => v.length === max)
  maxArr.forEach(v => {
    map[v[0]] = v.length
  })
  return map
}

getMaxCharacters('abcaakjbb') // { a: 2, b: 2 }

console.log(getMaxCharacters('abcaakjbb'))
```
