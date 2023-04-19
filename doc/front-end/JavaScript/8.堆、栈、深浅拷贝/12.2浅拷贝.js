/*
浅拷贝
    把父对象的属性，全部拷贝给子对象，也能实现继承；
    对象存在数据成员拥有堆资源，但复制过程未实现数据成员的拷贝
*/

//父对象
let obj = {
    id:1,
    name:"zhubin",
    arr:[1,2,3]
};

console.log("------实现浅拷贝-----");
// 实现浅拷贝
let newObj = {};
for(let key in obj){
    newObj[key]  = obj[key];
};
console.log(newObj);

console.log("-----------");
//对于简单数据，发现obj没有被修改
newObj["id"] = 999;
console.log(obj);//{ id: 1, name: 'zhubin', arr: [ 1, 2, 3 ] }
console.log(newObj);//{ id: 999, name: 'zhubin', arr: [ 1, 2, 3 ] }

console.log("-----------");
//但是对于arr，发现里面的obj数组被修改
newObj["arr"][0] = 555;
console.log(obj);//{ id: 1, name: 'zhubin', arr: [ 555, 2, 3 ] }
console.log(newObj);//{ id: 999, name: 'zhubin', arr: [ 555, 2, 3 ] }

console.log("-----ES6 浅拷贝------");
//ES6 浅拷贝Object.assign(子对象，父对象)；
let newObj1  =Object.assign({},obj);
newObj1["id"] = 222;
newObj1["name"] = "zhu-l";
console.log(obj);
console.log(newObj1);
