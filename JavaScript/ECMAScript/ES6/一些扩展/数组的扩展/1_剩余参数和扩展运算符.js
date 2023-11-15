/*
*1、剩余参数
    剩余参数允许我们将不确定数量的剩余的元素放到一个数组中。

    例子：当函数的实参个数大于形参个数时，我们可以将剩余的实参放到一个数组中。
*/

//（1）ES5 中，在定义方法时，参数要确定个数,不然可能会报错
function fn(a, b, c) {
    console.log(a,b,c,d)
}
// fn(1, 2, 3)//d is not defined
//方法的参数是三个，但使用时是用到了四个参数，所以会报错

//（2）ES6 中，当不确定方法的参数时，不用担心报错的问题。
let fn1 = (...args) => {
    console.log(args[0],args[1],args[2],args[3])
    console.log(args)
}
// fn1(1, 2)//不会报错
// fn1(1, 2, 3) //不会报错

//*注：args 参数之后，不能再加别的参数，否则编译报错。

function fn2(first, ...args) {
    console.log(first); // 10
    console.log(args); // [ 20, '小红', 'hello' ]
}
// fn2(10, 20,'小红',"hello")

// 剩余参数的举例：参数求和
let sum=(...args)=>{
    return args.reduce((pre,val)=>pre+val,0)
}
// console.log(sum(10, 20, 30))

// 剩余参数和解构赋值配合使用
let students = ['张三', '李四', '王五']
let [s1, ...s2] = students;
// console.log(s1,s2); // '张三'   ['李四', '王五']

/*
*2、扩展运算符（展开语法）
    扩展运算符（...）内部使用for...of循环
    扩展运算符和剩余参数是相反的。

    剩余参数是将剩余的元素放到一个数组中
    而扩展运算符是将数组或者对象拆分成逗号分隔的参数序列。
*/

{
    const arr = [10, 20, 30];
    // console.log(...arr); // 10 20 30
    // console.log(10, 20, 30); // 10 20 30
}
// `arr`是一个数组，而`...arr`则表示`10, 20, 30`这样的序列。
// 为啥逗号不见了呢？因为逗号被当作了 console.log 的参数分隔符


//扩展运算符的应用。

//（1）数组赋值
// 将 arr1 赋值给 arr2
// let arr2 = [...arr1]
{
    let arr1 = ['aa', 'bb', 'cc']
    // 将 arr1 赋值给 arr2，其实是让 arr2 指向 arr1 的内存地址
    let arr2 = arr1 
    //往 arr2 里添加一部分内容,发现，arr1 里也有这个内容,二者指向的是同一个内存地址
    arr2.push('???'); 
    // console.log(arr1);
    // console.log(arr2);
}

// 如果不想让 arr1 和 arr2 指向同一个内存地址，我们可以借助**扩展运算符**来做：
{
    let arr1 = ['aa', 'bb', 'cc'];
    let arr2 = [...arr1]; //arr2 会开辟新的内存地址
    // console.log('arr1:' + arr1);
    // console.log('arr2:' + arr2);

    arr2.push('？？？'); //往arr2 里添加一部分内容
    // console.log('arr1:' + arr1)
}

//（2）合并对象
{
    let page = {
        current: 1,
        pageSize: 10
    },
    form = {
        name: "",
        sex: ""
    }

    // let par={form,page}
    let par={...form,...page}
    // console.log(par)
}
    
//（3）合并数组    
{
    let arr1=[1,2,3],arr2=[4,5,6],arr3=[7,8,9]
    // 方法一
    let arr4=arr1.concat(arr2).concat(arr3)
    // console.log(arr4)

    // 方法二
    let arr6=arr1.push(...arr2,...arr3)
    console.log(arr6)
    // console.log(arr1)//改变原数组
    // 方法三
    let arr5=[...arr1,...arr2,...arr3]
    // console.log(arr5);
}

//（4）将伪数组或者可遍历对象转换为真正的数组
// const myDivs = document.getElementsByClassName('div');
// 方法一：
// let arr2 = Array.from(myDiv);
// 方法二：
// const divArr = [...myDivs]; // 利用扩展运算符，将伪数组转为真正的数组

