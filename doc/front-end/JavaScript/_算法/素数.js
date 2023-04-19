// 1.判断一整数A是否素数（除了自己和1之外，不能被其它数除数）   
// var num = parseInt(prompt("请输入整数："));
let num = parseInt(Math.random()*100+1)
var flag = true;
// 直接从2开始，并且<num，这取值范围符合不能整除条件的就是素数
for (var i = 2; i < num; i++) {
    if (num % i == 0) {
        // 能被其它数整除,那么就不是素数，直接改成false
        flag = false;
        break;
    }
};

flag?console.log(num + "是素数"):console.log(num + "不是素数");

// 2.输出从小到大排序好的五个不重复的随机"素数",范围[10-58)

function fn(n,min,max){
    let arr = [];
    for(let i =1;i<=n;i++){
        let t = parseInt(Math.floor(Math.random()*(max-min) +min)),
        flag = true;
        for(let j=2;j<t;j++){
            if(t%j == 0){
                flag =false;
                break;
            };
        };
        (flag&&arr.indexOf(t) == -1)?(arr.push(t)):(i--);
    };

    arr.sort((a,b)=>a-b);
    console.log(arr);
}
fn(5,10,58);
