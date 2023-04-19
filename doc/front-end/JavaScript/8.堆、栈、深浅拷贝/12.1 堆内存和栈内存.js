/*
1.栈内存
    会自动非配内存空间，会自动释放；
    存放基本数据类型，占据固定的大小空间(String、Number、Boolean、Undefined、Symbal、Null)；
2.堆内存
    动态分配内存空间，内存大小不一定会自动释放；
    存放引用数据类型（Object、Array、Function）；
    保存在堆内存中，包含引用类型的变量实际上保存的不是变量本身而是指向该对象的指针；
*/

//堆内存
let arr = [1,2,3];//[1,2,3]存放在堆内存
let newArr1 = arr,newArr2 = arr;//复制内存地址（指针）

newArr2[0] = 999;//只修改newArr2，发现全都被修改了
newArr1[4]=2;//只修改newArr1，发现全都被修改了
console.log("arr",arr);//arr [ 999, 2, 3, <1 empty item>, 2 ]
console.log("newArr1",newArr1);//newArr1 [ 999, 2, 3, <1 empty item>, 2 ]
console.log("newArr2",newArr2);//newArr2 [ 999, 2, 3, <1 empty item>, 2 ]


let obj ={
    id:1,
}
let obj1 = obj;//复制内存地址（指针）

obj1.id=999;//修改obj1，obj也被修改；
console.log(obj.id);//999
console.log(obj1.id);//999



