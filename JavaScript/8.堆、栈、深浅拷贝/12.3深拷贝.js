/*
深拷贝
    深度拷贝就是把父对象拷贝到子对象上，并且两者的内存和以后的操作都是互不影响的
*/

// 1.递归方法实现深克隆
// 父对象
let obj = {
    id:1,
    name:"zhubin",
    arr:[1,2,3,["hahaha","hehehehe"]],
    ob:{
        a:111,
        fn:function(){}
    }
};

// 子对象
let childObj = [];
let a = deepClone(childObj,obj);
function deepClone(newObj,oldObj) {
    //当父对象是普通对象
    for (let k in oldObj){
        if(oldObj[k] instanceof Array){//先判断数组why?
            newObj[k] = [];//定义一个新数组开辟一个新空间
            deepClone( newObj[k],oldObj[k]);//递归
        }else if(obj[k] instanceof Object){
            newObj[k]={};
            deepClone( newObj[k],oldObj[k]);
        }else{
          newObj[k]=oldObj[k];
        };
    };
    return newObj;
};

console.log(obj);
console.log(childObj);
console.log(a);

/*****
2.通过JSON.parse(JSON.stringify());实现深克隆  
    JSON.parse()
        把字符串解析为JSON对象
    JSON.stringify()
        把对象解析为JSON字符串

    利用JSON.stringify()将js对象序列化（JSON的字符串），
    再利用JSON.parse()反序列化（JSON的对象），序列化的作用是存储。
    
    注意：复杂的数据不太介意使用，如下：
        克隆不了对象里面的函数、undefined，在序列化的过程会丢失
        对象里面的NaN，在序列化的过程中会变成null
        只能克隆可枚举的对象属性
*****/

let jsonObj = {
    "id":1,
    "name":"zhubin"
}

// xmml和json

let strJSON = JSON.stringify(jsonObj);

console.log(strJSON);//把对象解析为JSON字符串
console.log(JSON.stringify(strJSON));//把字符串解析为JSON对象
console.log(jsonObj);

let deepJsonClone = JSON.parse(JSON.stringify(obj ) ) ;

deepJsonClone.id = 888;
deepJsonClone.arr[0] = 7777;
deepJsonClone.arr[3][0] ="数组成员4";
console.log ( "JSON",deepJsonClone) ; //深克隆