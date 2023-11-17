// console对象  https://segmentfault.com/a/1190000004528137


console.dir() //可以显示一个对象所有的属性和方法。


1、控制台对象方法

虽然 console.log 几乎在每个代码库中都无处不在，但实际上还有很多其他方法可以在控制台对象上调用。

想要在表格中显示您的数组或对象，可以使用 console.table()。

const users = [ 
   { 
      "first_name":"Harcourt",
      "last_name":"Huckerbe",
      "gender":"Male",
      "city":"Linchen",
      "birth_country":"China"
   },
   { 
      "first_name":"Allyn",
      "last_name":"McEttigen",
      "gender":"Male",
      "city":"Ambelókipoi",
      "birth_country":"Greece"
   },
   { 
      "first_name":"Sandor",
      "last_name":"Degg",
      "gender":"Male",
      "city":"Mthatha",
      "birth_country":"South Africa"
   }
]
console.table(users, ['first_name', 'last_name', 'city']);
┌─────────┬────────────┬─────────────┬───────────────┐
│ (index) │ first_name │  last_name  │     city      |├─────────┼────────────┼─────────────┼───────────────┤
│    0    │ 'Harcourt' │ 'Huckerbe'  │   'Linchen'   │
│    1    │  'Allyn'   │ 'McEttigen' │ 'Ambelókipoi' │
│    2    │  'Sandor'  │   'Degg'    │   'Mthatha'   │
└─────────┴────────────┴─────────────┴───────────────┘
您可以只使用一个或多个参数调用 console.table() 。您可以自定义要查看的列。

什么时候需要那个定时器功能？想知道一段代码需要多少时间？你可以使用console.time() & console.timeEnd()

您可以通过传入一个字符串来命名每个计时器实例。

console.time("timer1");
console.time("timer2");
setTimeout(() => {
  console.timeEnd("timer1");
}, 1000);
// Output: 'timer1: 1005.445ms'

setTimeout(() => {
  console.timeEnd("timer2");
}, 2000);
// Output: 'timer2: 2005.025ms'
想知道您控制台记录了多少次内容？就可以使用console.count()，示例如下：

console.count('Hello');
// Hello: 1
console.count('Hello');
// Hello: 2
console.count('Hello');
// Hello: 3
仅在某些内容为假时才打印？就可以使用console.assert()。

const age = 19;
console.assert(age > 17, "User is unable to drive");
// No logs
console.assert(age > 21, "User is below 21");
// Assertion failed: U