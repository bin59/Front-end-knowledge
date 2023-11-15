
// 1.得到n个随机数放入数组
let n = 5;

// for
let arr = [];
for (let i = 1; i <= n; i++) {
  let res = Math.ceil(Math.random() * n);
  // if(arr.includes(res) ){
  if (arr.indexOf(res) == -1) {
    arr.push(res);
  } else {
    i--;
  }
}
console.log(arr);

// while
let arr1 = [];
while (true) {
  let num = Math.ceil(Math.random() * n);
  // if(arr1.length == n){
  //     break;
  // }else if(!arr1.includes(num)){
  //     arr1.push(num);
  // }

  // 这样写代码更少
  if (arr1.length == n) {
    break;
  }
  !arr1.includes(num) && arr1.push(num);
}
console.log(arr1);





  // // 2把下面数组成员排序打乱
  // var arr = [10, 20, 30, 40, 50, 60];
  // let newArr = [];
  // function fn1() {
  //     while (true) {
  //         let a = Math.ceil(Math.random() * arr.length) - 1;
  //         if (newArr.length == arr.length) {
  //             break;
  //         }
  //         !newArr.includes(arr[a]) && newArr.push(arr[a]);
  //     }
  //     console.log(newArr);
  // };
  // fn1(arr);