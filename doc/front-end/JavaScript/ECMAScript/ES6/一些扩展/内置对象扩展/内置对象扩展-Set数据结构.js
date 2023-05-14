/*
Set 数据结构（ES6 提供的新的数据结构）
    Set 类似于数组，但成员的值都是唯一的，没有重复的值。

    Set的应用
        比如：页面的搜索功能里，用户可能会多次搜索重复的关键字；但是在数据存储上，不需要存储重复的关键字。
        此时，我们就可以用 Set 来存储用户的搜索记录，Set 内部会自动判断值是否重复，如果重复，则不会进行存储，十分方便。

    Set 本身就是一个构造函数，可通过 `new Set()` 生成一个 Set 的实例。
    Set 实例的属性和方法 
        属性:
            Set.prototype.constructor：构造函数，默认就是Set函数。
            size：返回Set实例的成员总数。
        方法：
        操作方法（用于操作数据）：
            add(value)：添加某个值，返回 Set 结构本身。
            delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
            has(value)：返回一个布尔值，表示该值是否为Set的成员。
            clear()：清除所有成员，没有返回值。

        遍历方法（用于遍历成员）：
            Set的遍历顺序就是插入顺序。这个特性有时非常有用，
            比如使用 Set 保存一个回调函数列表，调用时就能保证按照添加顺序调用。

            keys()：返回键名的遍历器
            values()：返回键值的遍历器
            entries()：返回键值对的遍历器
            forEach()：使用回调函数遍历每个成员         
*/
{
     let set = new Set()
    /*
    Set 内部判断两个值是否不同使用的算法叫做“Same-value-zero equality”，
    它类似于精确相等运算符（===），主要的区别:
        向 Set 加入值时认为NaN等于自身，而 === 认为NaN不等于自身。
    */
    // console.log(NaN ===NaN)

    let [a , b] = [NaN,NaN]

    set.add(a).add(b)
    // console.log(set)

    // 向 Set 加入值的时候，不会发生类型转换，比如5和"5"是两个不同的值
    set.add(5)
    set.add('5')
    set.add("5")
    // console.log(set)

    // 由于两个空对象不相等，所以它们被视为两个值
    set.add({}).add({})
    // console.log(set)
}

// 去重
{
    let p = ['小红', '小李子', '小红', '小黑']

    const set = new Set(p)// 注意set不是数组，而是Set 数据结构 
    // console.log(set)

    // 获取到真正的数组 
    let b = [...set]
    let b1=Array.from(set)
    // console.log(b)
    // console.log(b1)

    // 封装去重函数
    function dedupe(array) {
        // return Array.from(new Set(array))
        return [...new Set(array)]
    }

    // 去除数组重复成员
    // console.log(dedupe(p))
    // console.log(dedupe([1,2,3,4,5,5]))
    // console.log(dedupe(['a','b','b','c','d','c','d']))

    // 去除字符串里面的重复字符
    // console.log(dedupe('ababbcddeeffeegg').join(''))

}
{
    // 多个数组合并去重
    let arr1 = [1,2,3,3,4],
    arr2 = [1,4,6,2,4],
    arr3 = [1,3,3,4,5,6]

    // 封装多个数组合并去重函数
    function dedupe(...array) {
    let newArray =[]
    array.forEach(val=>newArray.push(...val))
    // newArray.sort((a,b)=>a-b)//排序
    return [...new Set(newArray)]
    }

    console.log(dedupe(arr1,arr2,arr3));
}
// 操作方法（用于操作数据）
{
    let s = new Set()
    s.add(1).add(2).add(2)

    // console.log(s.size)
    // console.log(s.has(1))
    // console.log(s.has(2))
    // console.log(s.has(3))
    // console.log(s.delete(2))
    // console.log(s.has(2))
    s.clear()
    // console.log(s)
}


// 遍历方法（用于遍历成员）

{
// （1）keys()，values()，entries()
    let set = new Set(['red', 'green', 'blue'])

    for (let item of set.keys()) {
        // console.log(item)
    }

    for (let item of set.values()) {
        // console.log(item);
    }
    // keys方法、values方法、entries方法返回的都是遍历器对象（Iterator对象  https://es6.ruanyifeng.com/#docs/iterator ） 
    // 由于Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致
    
    for (let item of set.entries()) {
    // console.log(item);
    }
    // entries方法返回的遍历器，同时包括键名和键值，所以每次输出一个数组，它的两个成员完全相等。

    // Set 结构的实例默认可遍历，它的默认遍历器生成函数就是它的values方法。
    // console.log(Set.prototype[Symbol.iterator] === Set.prototype.values)

    // 这意味着，可以省略values方法，直接用for...of循环遍历 Set
    for(let k of set){
        // console.log(k)
    }


// （2）forEach()
// Set 结构的实例与数组一样，也拥有forEach方法
    // 参数：键值、键名、集合本身（可选）
    set.forEach((value, key) => console.log(key + ' : ' + value))

}



{
    // 下面是一个对比，看看在判断是否包括一个键上面，Object结构和Set结构的写法不同。
    let a = 'wideh',
         b = 'width'

    // 对象的写法
    const obj = {
        'width': 1,
        'height': 1
    }
    if (obj[b]) {
        // console.log(b+':'+obj[b])
    }

    // Set的写法
    const set = new Set();
    set.add('width');
    set.add('height');

    
    if (set.has(a)) {
        // console.log(a)
    }else{
        // console.log('不存在'+a)
    }
}