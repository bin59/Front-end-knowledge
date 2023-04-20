// 1.for...in   主要用于遍历对象，不建议用来遍历数组
// 遍历对象（可枚举的属性）
    // 枚举：对象里面的属性是可以遍历的

    // for(let key in obj){// key是键名，obj是对象
        // 执行代码块
    // }

    // for in 当然也可以用来遍历数组（只是不建议），此时的 key 是数组的索引
    let arr = ["1","a",3,"J","哈哈哈"];
    for(let key in arr){
        //注意：遍历数组的键名（key）返回的是字符串,不适合 ++ 操作
        
        console.log(key);//0,1,2,3,4   数组的键名是下标
        console.log(arr[key]);
    }

 // Object.defineProperty
        // 直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
        // obj
        //      要定义属性的对象。
        // prop
        //      要定义或修改的属性的名称或 Symbol 。
        // descriptor
        //      要定义或修改的属性描述符。
        // 普通对象
    let obj ={
        name:"aaa",
        id:2
    };
    Object.defineProperty(obj,"id",{
        enumerable:false  //设置id不可枚举
    });
    for(let key in obj){
         console.log(obj[key]);//2没有打印
    };

console.log("----------------");
// 2.for...of循环（ES6)
    // 支持遍历数组、类对象（DOM NodeList)、字符串
    // 不支持遍历普通对象

    let arr2 = ["1","1","3"];
    let obj2 = {
        id:11,
        name:"ss"
    }
    for(let val of arr2){//val: 值
        console.log(val);//1  1  3
    }

    // 遍历普通对象时
    // for(let val of obj2){
    //     console.log(val);
    // }// obj2 is not iterable

    // Object.keys()  
    // 返回一个表示给定对象的所有可枚举属性的字符串数组。 
    for(let val of Object.keys(obj2)){
        console.log(val);//id   name
    };