// 查找字符串中(abbcccddddd)出现最多的字符和个数
let str="abbcccdddd";
let obj ={};

for(let i =0;i<str.length;i++){
    if(obj[str[i]]) {
        obj[str[i]]++;
    } else{
        obj[str[i]] = 1;
    }
};
console.log(obj);   //{ a: 1, b: 2, c: 3, d: 4 }

let max = 1;//假设最大值，出现的最大次数
let item = "";//出现最多的字符

// for...in 用于循环对象
// 参数：key  键名
for(let key in obj ){
    // console.log(key);
    // console.log(obj.key);//undefined   通过.不能获取键值
    // console.log(obj[key]);//1,2,3,4    []可以获取键值

    if(obj[key] > max){
        max=obj[key];
        item = key;
    };

};
console.log("出现最多的字符："+item,"次数:"+max); 


// 16. 找出数组中年龄小于18岁的女生的信息重新组成新的数组,并且将她们count变为现有的平方（10）
var arr = [{
    name: "111",
    sex: "boy",
    age: 18,
    count: 20
},
{
    name: "222",
    sex: "girl",
    age: 17,
    count: 30
},
{
    name: "333",
    sex: "boy",
    age: 16,
    count: 40
},
{
    name: "444",
    sex: "girl",
    age: 15,
    count: 50
},
{
    name: "555",
    sex: "boy",
    age: 20,
    count: 60
},
{
    name: "666",
    sex: "girl",
    age: 13,
    count: 70
},
{
    name: "777",
    sex: "boy",
    age: 14,
    count: 80
}
]

var arr1 = [];
arr.forEach(function(val){
(val["age"]<18&&val["sex"]=="girl")&&(arr1.push(val)&&(val["count"] *= val["count"]));
})
console.log(arr1)