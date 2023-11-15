// 1. 将多个数组进行去重合并；（10）
    var arr1 = [1, 2, 3],
    arr2 = [2, 3, 4, 5];

    let arr3 = arr1.concat(arr2),arr4 = [];

    // 方法一：forEach
    // arr3.forEach(function(val){
    //     (arr4.includes(val) == false)&&arr4.push(val);
    // });

    // 方法二  filter
    arr4 = arr3.filter((item,index,arr3) => {
        return arr3.indexOf(item) == index;//indexOf从左往右找，找到第一个就返回下标
    })

    console.log(arr4);

// 2. 找出数组 arr=[1, 2, 3, "melon", 4, "melon", 2, 4, "melon"] 中重复出现过的元素,并用数组将重复元素装起来输出,并且统计每个元素出现的次数（10）
    var arr=[1, 2, 3, "melon", 4, "melon", 2, 4, "melon"] ;
    var arr1=[],arr2={};
    arr.forEach((val,index) =>{
        if(arr.indexOf(val,index+1) !=-1){
            if(arr2[val]){
                arr2[val]++;
            }else{
                arr2[val] = 1;
            }
            
            (!arr1.includes(val))&&arr1.push(val);
        };
    });
    console.log("重复的元素："+arr1)
    for(let key in arr2){
        console.log(key+"出现的次数"+arr2[key])
    };


