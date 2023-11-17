//1.移除数组 arr[1, 2, 3, 4, 2] 中的2。不要直接修改数组 arr，结果返回新的数组
let arr = [1, 2, 3, 4, 2];
let arr1 = [];
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] !== 2) {
// 		arr1.push(arr[i]);
// 	};
// };

arr.forEach(function(val){
	if(val != 2){
		arr1.push(val);
	};
});
console.log(arr1);


//2.定义一个函数,能在数组 arr[1, 2, 3, 4, 2] 的 "2"后面添加元素 "Melon"。不要直接修改数组 arr，结果返回新的数组
let arr2 = [1, 2, 3, 4, 2];
let newArr2 = [];
// for(let i=0;i<arr2.length;i++){
// 	newArr2.push(arr2[i]);
// 	if(arr2[i] === 2){
// 		newArr2.push("Melon");
// 	}
// }

arr2.forEach(function(val){
    newArr2.push(val);
    if(val == 2){
        newArr2.push("Melon");
    };
});

console.log(newArr2);

//3.统计数组 arr[1, 2, 3, 4, 2] 中2出现的次数
let arr3 = [1, 2, 3, 4, 2];
let num =0;
// for(let i = 0;i<arr3.length;i++){
// 	if(arr3[i] ===2){
// 		num++;
// 	};
// };

arr3.forEach(function(val){
    if(val == 2){
        num++;
    };
});

console.log("2出现的次数:"+num);


//4.找出数组 arr[1, 2, 3, "melon", 4, "melon", 2, 4, "melon"] 中重复出现过的元素,并用数组将重复元素装起来输出
let arr4 = [1, 2, 3, "melon", 4, "melon", 2, 4, "melon"];
let newArr4 = [],Arr4 = [];

// for(let i=0;i<arr4.length;i++){
	/*
	//方法一 includes（)   但是要定义两个新数组
	// if(newArr4.includes(arr4[i]) == false){
	// 	newArr4.push(arr4[i]);
	// }else if(Arr4.includes(arr4[i]) ==false){    //若没加 if(Arr4.includes(arr4[i]) ==false)条件则把重复元素不论重复次数输出，加了以后只输出一次重复的
	// 	Arr4.push(arr4[i]);
	// };

	//方法二    indexOf() + lastIndexOf()
	// if(arr4.indexOf(arr4[i]) != arr.lastIndexOf(arr4[i]) &&!Arr4.includes(arr4[i])){// !Arr4.includes(arr4[i])   即==>   Arr4.includes(arr4[i]) ==false  
	if(arr4.indexOf(arr4[i]) != arr.lastIndexOf(arr4[i]) && Arr4.indexOf(arr4[i]) == -1){
		Arr4.push(arr4[i]);
	};
};

//方法三  for + for
// for(let i=0;i<arr4.length;i++){
// 	for(let j =i+1;j<arr4.length;j++){
// 		// if( arr4[i]==arr4[j] && Arr4.includes(arr4[i])==false ){
// 		if( arr4[i]==arr4[j] && Arr4.indexOf(arr4[i]) == -1 ){
// 			Arr4.push(arr4[i]);
// 		};
// 	};
// };
*/

// Arr4= arr4.filter(function(val,index){
//     return (arr4.indexOf(val) != arr4.lastIndexOf(val) && !Arr4.includes(val));
// });//2,melon,4,melon,2,4,melon   //这里Arr4还是空数组，filter()运行结束前不会变化

arr4.forEach(function(val){
    if(arr4.indexOf(val) != arr4.lastIndexOf(val) && !Arr4.includes(val)) {
        Arr4.push(val);
    }
});

console.log("重复出现过的元素:"+Arr4);		  


//5.在arr里面输出年龄小于17的对象
let arr5 = [
	{ name: "111", sex: "boy", age: 18 },
	{ name: "222", sex: "girl", age: 17 },
	{ name: "333", sex: "boy", age: 16 },
	{ name: "444", sex: "girl", age: 15 },
	{ name: "555", sex: "boy", age: 20 }
];
console.log("年龄小于17的对象:");
// for(let i=0;i<arr5.length;i++){
// 	if(arr5[i].age<17){
// 		console.log(arr5[i]);
// 	};
// };

let Arr5 = [];
Arr5 = arr5.filter(function(val){
	return val.age<17;
});
console.log(Arr5);




/*****
去重
*****/
let array = ["a","b","a","c","d","c"] 
// 去除数组重复的值，返回新数组

// 方法一：includes() 、indexOf()方法
function quchong(){
    let array1=[];
    for(let i=0;i<array.length;i++){
        // if(array1.includes(array[i]) == false){  //includes()方法判断新数组是否包含原数组中的值，没有就返回false
        // if(！array1.includes(array[i])){  //！arr1.includes(arr[i])  ==> arr1.includes(arr[i]) == false
        if(array1.indexOf(array[i]) == -1){    //indexOf()方法:原数组中的值在新数组中查找不到时indexOf==-1
            array1.push(array[i]);
        }
    }
    return array1;
}

console.log(quchong(array));

// 方法二
// ES6 new Set()
console.log(new Set(array));

// 方法三

// let arra =[];
// arra=array.filter(function(val,index){
//     return arra.includes(val) ==false;  //这里arra还是空数组,filter()运行结束前不会变化，所以这个条件一直符合，都输出
// });

array.forEach(function(val,index){
    if(arra.indexOf(val) == -1){    
        arra.push(val);
    };
});
console.log(arra);