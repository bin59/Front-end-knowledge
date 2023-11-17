/*********
变量的解构赋值
    解构赋值：ES6 允许我们按照一一对应的方式，从数组或者对象中提取值，再将提取出来的值赋值给变量。
        解构：分解数据结构；
        赋值：给变量赋值。

    1、数组的解构赋值：将数组中的值按照位置提取出来，然后赋值给变量。
        **数组的元素是按次序排列的，变量是根据位置进行一一对应来赋值的
    2、对象的解构赋值：将对象中的值按照属性匹配的方式提取出来，然后赋值给变量。
        **对象的属性没有次序,变量是根据属性名进行一一对应来赋值的(根据键来取值赋给变量)
******/

//*1、数组的解构赋值 
//（1）根据位置进行一一对应进行赋值
// 只要等号两边的模式相同，左边的变量就会被赋予对应的值
{ 
    let [a, b, c] = [1, 2, 3]
    console.log(a,b,c)

    let [a1, [[b1], c1]] = [1, [[2], 3]]  
    console.log(a1,b1,c1)

    let [ , , c2] = ["foo", "bar", "baz"]
    console.log(c2)

    let [x,, y] = [1, 2, 3]
    console.log(x,y)

    let [x1, ...arr] = [1, 2, 3, 4]
    console.log(x1,arr)

    let [x2, y2, ...z2] = ['a']
    console.log(x2,y2,z2)
}


//（2）未匹配到的情况
// 当左边的数量大于右边的数量（变量的数量大于值的数量）
{ 
    let [a,b,c] = [1,2]
    console.log(a,b,c)
    // 多余的变量会被赋值为 undefined
}
    
//（3）解构时，左边允许有默认值
    // 一个变量时
    let [foo = true] =[]
    console.log(foo)
{  
    // 多个变量
    let [a,b= '小黑'] =['小红']
    console.log(a,b)
}
// (4)将右边的 `undefined`和`null`赋值给变量
    // undefined
    let [e,f='小黄']=['小蓝',undefined]
    console.log(e,f)// f虽然被赋值为undefined，但f会用默认值
{
    // null
    let [a,b='小黑']=['小红',null]
    console.log(a,b)//b 被赋值为 null
}
    //  undefined：相当于什么都没有，此时 b 采用默认值。
    // null：相当于有值，但值为 null。

// *2、对象的解构赋值
// (1)根据键来取值
{ 
{
    let person = { 
        name: 'zhubin', 
        age: 23,
        sex: '男' 
    }
    // 对象的结构赋值
    let { name, age, sex } = person
    console.log(name,age,sex)
}
 

{
    const zhao = {
        name: '小黑',
        age: '1岁',
        col: function(){
            console.log("黑色");
        }
    };

    let {name, age, col} = zhao
    // console.log(name,age)
    // col()
}
{
    let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 }
    // console.log(x,y,z)
}
}

// (2)未匹配到的情况
{ 
    let person = { 
        name: 'zhubin', 
        age: 23
    }
    // 对象的结构赋值
    let { name, age, sex } = person
    console.log(name,age,sex)//多余的变量会被赋值为 undefined
}
// (3)给左边的变量自定义命名
{
    let person = { 
        name: 'qianguyihao', 
        age: 28 
    }

    let{ name: myName, age: myAge }=person

    console.log(myName) 
    console.log(myAge) 

    // console.log(name) //报错：Uncaught ReferenceError: name is not defined
    // console.log(age) // Uncaught ReferenceError: age is not defined

/*
上面代码：let { name: myName, age: myAge } = person
    等号左边的属性名 name、age 是对应等号右边的属性名。
    等号左边的 myName、myAge 是左边自定义的变量名。

    将右边 name 的值赋值给左边的 myName 变量，
    将右边 age 的值赋值给左边的 myAge 变量
*/

let { x2:num = 100} ={num:1000}
console.log(x2)//x2  is not defined
console.log(num)//100  取默认值  如果右边是x2:1000那么num = 1000

}
//? (4)圆括号的使用
// 如果变量 foo 在解构之前就已经定义了，此时再去解构，就会出现问题。
{
    let foo = 'haha'
	// ;{ foo } = { foo: 'smyhvae' }
    // 只需解构的语句外边，加一个圆括号
    // ;({ foo } = { foo: 'smyhvae' })
	console.log(foo)
}

// *3、字符串解构
// 字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。
{
    const [a, b, c, d,e] = 'hello';
    // console.log(a,b,c,d,e);
    // console.log(typeof a)

    // 类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
    let {length : len} = 'hello';
    // console.log(len)
}
//*4、函数参数解构
{
    let xueyue = {
        name:'小黑',
        age: 18,
    }
    function getAge({ name, age }) {
        console.log(`${name}今年${age}岁`)
    }
    // getAge(xueyue) 


    function add([x, y]){
        return x + y;
    }
    // console.log(add([1, 2]))
}

/**********************************/ 
// 链式解构赋值
let all = [first,second] = [1,2,3,4]
// console.log(first,second,all)

{
    // 交换两个变量的值
    let a=1,b=2
    ;[a,b]=[b,a]
    // console.log(a,b)

    // 交换对象的值
    let obj1={
        id:1,
        name:'小黑'
    },
    obj2={
        id:2,
        naem:'小红'
    }
    ;[obj1.id,obj2.id]=[obj2.id,obj1.id]
    // console.log(obj1,obj2)
}

{
    // 解析一个从函数返回的数组
    function f() {
        return [1,2,3]
    }
    
    let [a, b] = f()
    // console.log(a,b) 
}
{
// 函数参数的定义
    // 解构赋值可以方便地将一组参数与变量名对应起来
    // 参数是一组有次序的值
    function f([x, y, z]) {console.log(x)}
    // f([1, 2, 3])


    // 参数是一组无次序的值
    function f1({x, y, z}) {console.log(x) }
    // f1({z: 3, y: 2, x: 1})

}
   
{
    // 在后台服务器传输来的数据，大多是JSON格式，那么要提取有用的数据，用解构赋值就会非常的容易。
	let jsonData={
		id:42,
		status:"OK",
		data:[867,5309]
	}
	let{id,status,data:number}=jsonData;
	// console.log(id,status,number)
}

// For of 迭代和解构
{
    var people = [
        {
          name: "Mike Smith",
          family: {
            mother: "Jane Smith",
            father: "Harry Smith",
            sister: "Samantha Smith"
          },
          age: 35
        },
        {
          name: "Tom Jones",
          family: {
            mother: "Norah Jones",
            father: "Richard Jones",
            brother: "Howard Jones"
          },
          age: 25
        },
        {
            name: "小黑",
            family: {
              mother: "小红",
              father: "小黄",
              brother: "小白"
            },
            age: 1
          }
    ]
    // 找出所有儿子和父亲
    for (let {name: n, family: { father: fa } } of people) {
        console.log("Name: " + n + ", Father: " + fa)
    }
}




{
    let url = "https://developer.mozilla.org/en-US/Web/JavaScript"
    let parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url)

    // console.log(parsedURL); // ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]

    var [, protocol, fullhost, fullpath] = parsedURL;
    // console.log(fullpath); // "https"
}
