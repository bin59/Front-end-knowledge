/****** 
数据类型 9种
简单数据类型和复杂数据类型
    1.简单数据类型(又叫做基本数据类型或者值类型)：在存储时变量中存储的是值本身，因此也叫值类型；
        Number、String、Boolean、Undefined、Null、Symbol
        
        但是null比较特殊，返回的是一个对象，如果有个对象我们打算以后存储为对象，暂时没有想好放啥，这个时候就给null
        console.log(typeof  null);//object

    2.复杂（引入）数据类型：在存储时，变量中存储的仅仅是地址，因此叫做引用数据类型。
        Object、Array、Function
        通过new创建的对象都叫做复杂数据类型Object Array Date等

    字符串的颜色是黑色的，数值类型是蓝色的，布尔类型也是蓝色的，undefined和null是灰色的
******/

// 一、基本(简单)数据类型  
  //1、 String 字符串类型类
      console.log("1.String");
      // string类型用于表示0或多个Unicode字符组成的字符序列,即字符串

      var str1 = "我是字符串";
      var str2 = "\"str1\"";// 不能同时出现两个相同的引号，要使用转义符（String字符串数据类型包含特殊的字符，用于表示非打印字符 \ ）
      var str3 = "'str2'";

      console.log(str1);
      console.log(str2);

      var str4 = "<\/script>";
      console.log(str4);

      // length  字符串的长度 string.length
      console.log(str4.length);

      // + 加号实现字符串拼接
      console.log(str1+str2);


  //2、 Number数字类型
      console.log("2.Number");

      var num1 = 123;
      console.log(num1);
      console.log(123e4);

      // 精度
      // 1.整数  精确到15位
      console.log(999999999999999);
      // 超过15位
      console.log(9999999999999999);

      // 2.小数  精确到小数点17位
      // 如0.1+0.2  
      console.log(0.1+0.2);//控制台显示的是： 0.30000000000000004   小数点后面有17位

      // 数字.toString(进制)  
      // 如将数字转为二进制  
      var a = 0.1;
      var b = 0.2;
      console.log(a.toString(2));//控制台显示为：0.0001100110011001100110011001100110011001100110011001101

      var sum = a  + b;
      console.log(sum);
      // 0.1 + 0.2=0.3的解决方案
      var sum1 = ((a * 10) + (b * 10)) /10;
      console.log(sum1);

      
      //两个值交换，如a,c交换
      
      // 第一个思路:使用第三方的变量进行交换
      var a = 1,b = 2,c;
      b=a
      a=c;
      c=b;
      console.log(a,b);

      // 二、最安全且最快的办法是利用异或门(^)来进行;一般适用于数字的交换，
      var num1 = 10,num2 = 20;
      num1 = num1 ^ num2;
      num2 = num1 ^ num2;
      num1 = num1 ^ num2;
      console.log(num1, num2);

      //第三种方法：es6中的数组
      var a = 1,b = 2;
     [a,b]=[b,a]
      console.log(a,b);

    // 对象
    var obj_a = {key: 1};
    var obj_b ={key: 2};
    [obj_a,obj_b] = [obj_b, obj_a]
    console.log(obj_a) // {key: 2}
    console.log(obj_b) // {key: 1}

  //3、Boolean  布尔数值类型
      console.log("3.Boolean ");
      // 布尔类型:的值有两个,一个是true(真),一个是false(假)
      // 计算机内部存储：true为1，false为0
      // false、0、NaN (Not A Number)、空字符串、undefined、null
      // 他们的布尔值都是false
      var str = "0";
      var str1 = "";
      var bo1,bo2,bo3,bo4,bo5,bo6;
      bo1 = true;
      bo2 = 0;
      bo3 = 1;
      bo4 = "";
      bo5 = " ";
      bo6 = "哈哈哈";
      bo7 = NaN;

      console.log(Boolean(str));//true
      console.log(Boolean(str1));//false
      console.log(Boolean(bo1));//true
      console.log(Boolean(bo2));//false
      console.log(Boolean(bo3));//true
      console.log(Boolean(bo4));//false   空字符
      console.log(Boolean(bo5));//true    空格
      console.log(Boolean(bo6));//true
      console.log(Boolean(bo7));//false

  // 4、Undefined、Null  数据类型
      console.log("4、Undefined、Null 数据类型");
      // Undefined 声明变量但是没有赋值，表无意义(空值)
      // Null 空值，空对象(不存在的对象)，空的对象指针
      // 用typeof检测它们分别返回:undefined、object
      null !={};


      var und,und1,und2,und3;
      und1 = undefined;
      und2 = "undefined";
      und3 = null;

      console.log(und);// undefined
      console.log(und1);//undefined
      console.log(und2);//"undefined"
      console.log(und3);// null

    //如何理解 null == undefined 返回 true，null === undefined 返回 false？
      // 规范中提到， 要比较相等性之前，不能将 null 和 undefined 转换成其他任何值，并且规定null 和 undefined 是相等的。
      // null 和 undefined都代表着无效的值。
      // 全等于状态下，是false，这个很好理解了。它们不属于同一数据类型。
      // console.log( undefined === null )  //false

      // ==  只需值一样，不需要类型一致， null 和undefined都是无效的值，用==是相等的 
      // ===  需要类型一致，否则为false

    // 什么时候会得到 undefined？
      // 在变量提升（预解析）阶段，只声明未定义，默认值就是undefined。
      // 在JS的严格模式下（“use strict”），没有明确的主体，this指的就是undefined。
      // 函数定义没有返回值（return或者return后面什么也不带），默认的返回值就是undefined。
      // 函数定义形参不传值，默认就是undefined。
      // 对象没有这个属性名，属性值默认就是undefined。
      // 在数组的find方法中，没有找到的情况下是undefined。
      // Object.prototype._proto_的值也是undefined。
      // 数组的forEach方法，没有返回值，返回的是undefined

        // 声明变量没有赋值
        // 预解析时声明变量未定义
        // 对象没有的属性名
        // 函数定义未传参或者没有return
        // 数组的forEach方法，没有返回值，返回的是undefined

    // null
      // 手动设置变量的值或者对象某一个属性值为null（此时不赋值，会在后面的代码中进行赋值，相当于初始化。）
      // 在JS的DOM元素获取中，如果没有获取到指定的元素对象，结果一般是null。
      // js正则表达式的 match方法，如果匹配不到就会返回null。
      // 在正则捕获的时候，如果没有捕获到结果，默认也是null。


  //5、Symbol数据类型
      console.log("3.Function");
      // 表示独一无二的值, 最大的用法是用来定义对象的唯一属性名(ES6新增数据类型)

      var sy = Symbol("kk");
      var sy1 = ("kk");
      console.log(sy);
      console.log(sy1);

// 二.js引入数据类型   (又叫做引用类型)
  // 1. Object 对象
      console.log("3.Function");
      // 一组数据和功能的集合，对象可以通过new操作符去创建对象
      var obj =  new Object();
      var obj1 = {};

      // 键值对的形式去存放属性或方法
      // { 键名:键值 }
      var obj2 =  {
        name:"ky",
        id:1
      };

      console.log(obj);
      console.log(obj1);
      console.log(obj2);

  // 2. Array  数组
      console.log("2. Array  数组");
      
      var arr = new Array();
      var arr0 = new Array(1,2,3,4,5);
      var arr1 = [];
      var arr2= [1,2,3,4]
      var arr3= [1,2,{name:"ky"},4]
        
      console.log(arr);
      console.log(arr0);
      console.log(arr1);
      console.log(arr2);
      console.log(arr3);

  // 3.Function 函数 也叫方法
      console.log("3.Function");

      //创建函数 
      var fn = new Function();
      //匿名函数：
      var fn1 = function(){};
      //命名函数：
      function fn2(){
        console.log("我是fn2的函数");
      };

      console.log(fn);
      console.log(fn1);
      // console.log(fn2);
      fn2();//调用fn2函数
