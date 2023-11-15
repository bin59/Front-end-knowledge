
    // 2.需求：要求用户输入两个整数，找出最大的那个数之后输出
    // let num1 = prompt("请输入第一个整数");
    // let num2 = prompt("请输入第二个整数");
    // let maxNum =(num1 > num2)?num1:num2
    // alert(maxNum);

    // 3.需求：要求用户输入三个整数，找出最大的那个数之后输出
    let num1 = Number(prompt("请输入第一个整数"));
    let num2 = +prompt("请输入第二个整数");
    let num3 = +prompt("请输入第三个整数");
    // let maxNum =(num1 > num2)?num1:num2

    // 方法一：先两个找出最大数在于第三个数比较
    // alert((num3 > maxNum ) ? num3 : maxNum ); 

    // 方法二：Math方法中的maxmax
    // alert( Math.max(num1,num2,num3));

    // if...else...方法
    // 方法一：
    if(num1 > num2&&num1 > num3){
        console.log(num1);
    }else if(num2 > num3 && num2 > num1){
        console.log(num2);
    }else{
        console.log(num3);
    }


    
// funtion   
// arguments.length   不知道传多少参数都可以找出最大值
function fun(){
    let max = arguments[0];
    for(let i =0;i< arguments.length;i++){
        if(max < arguments[i]){
            max =arguments[i]
        };
    };
    return max;
};
console.log(fun(1,2,3,3,5,6,6,54,4,));

