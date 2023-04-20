/*
    compile	在 1.5 版本中已废弃。 编译正则表达式。

    exec	检索字符串中指定的值。返回找到的值，并确定其位置。
    test	检索字符串中指定的值。返回 true 或 false。
    toString	返回正则表达式的字符串。

        test()  用于检测一个字符串是否匹配某个模式. 如果字符串中有匹配的值返回 true ，否则返回 false。
            new RegExp().test(str)
*/
let str = "5465354"

// 检索不存在的值
let rg = new RegExp("8","g")
console.log(rg)//   /8/g
console.log(rg.test(str))//false

let str1="Hello world!";

//查找"Hello"
let patt1=/Hello/g;
console.log(patt1.test(str1))//true

//查找 "Runoob"
patt2=/Runoob/g;
console.log(patt2.test(str1))//false




let patt3 =/^(?=[0-9A-Z]*[A-Z]) (?=[0-9A-Z]*[A-Z]) [0-9A-Z]{4,11}$/

console.log(patt3.test("1111"));

// // 最少包含2个大写字母、2个小写字母、2个数字、2个指定的特殊字符、长度10到20”
// var n1 = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()])       [\da-zA-Z!@#$%^&*()]{10,20}$/;
//  // 应该怎么处理？其实很简单只要将断言写两遍即可
// var n2 = /^(?=.*\d)(?=.*[A-Z]) (?=.*[a-z]) (?=.*[!@#$%^&*()]) (?=.*\d)(?=.*[A-Z]) (?=.*[a-z])(?=.*[!@#$%^&*()])        [\da-zA-Z!@#$%^&*()]{10,20}$/;

// console.log(n2.test("1111A1A"));