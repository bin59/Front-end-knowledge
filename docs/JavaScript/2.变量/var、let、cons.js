//*var、let、const的区别
    // let和const是es6中新增定义,都是为了弥补var的一些缺陷而新设计出来的。
    // let是修复了var的作用域的一些bug，变的更加好用

//*（1）var声明的变量会挂载在window上，而let和const声明的变量不会：
    var a = 100;
    console.log(a,window.a);    // 100 100

    let b = 10;
    console.log(b,window.b);    // 10 undefined

    const c = 1;
    console.log(c,window.c);    // 1 undefined

//*（2）var声明变量存在变量提升，let和const不存在变量提升
    console.log(a2); // undefined  ===>  a已声明还没赋值，默认得到undefined值
    var a2 = 100;

    console.log(b2); 
        //我们可以看到这里的日志输出出现了报错，
        // ‘Uncaught ReferenceError: Cannot access ‘b2’ before initialization’
        // 未捕获的引用错误：在初始化之前无法访问“b2”
    let b2 = 10;

    console.log(c2); // 报错
    const c2 = 10;
    /*************************
    js中的暂时性死区（ temporal dead zone，简称TDZ ）
    当程序的控制流程在新的作用域（module function 或 block作用域）进行实例化时，在此作用域中
    用let/const声明的变量会先在作用域中被创建出来，但因此时还未进行词法绑定，所以是不能被访问的，如果访问就会抛出错误。
    因此，在这运行流程进入作用域创建变量，到变量可以被访问之间的这一段时间，就称之为暂时死区。
    *************************/

//*（3）let和const声明形成块级块作用域,只会在所在的代码块内有效。var全局声明，全局作用域有效；
    //ES5的var只有全局作用域和函数作用域，没有块级作用域,ES6的let让js真正拥有了块级作用域

    if(1){
        var aa = 100;
        let bb = 10;
        const cc = 1;
    }
    console.log(aa); // 100
    console.log(bb)  // 报错：bb is not defined  ===> 找不到b这个变量
    console.log(cc)  // 报错：cc is not defined  ===> 找不到c这个变量

    function test(){
        let n = 1;
        if (true) {
            let n = 2;
        }
        console.log(n); //值不会被修改，输出1
    }
    test();

    /*************************
    ES6之块级作用域，块级作用域可以嵌套   注：不是函数作用域
    块级作用域：通俗的讲 就是一对花括号中的区域{...}
    if(){}
    switch(){}
    for(){} //小括号里是一个作用域，大括号里又是另外子集作用域
    try{}catch(err){}
    {}
    *************************/

    // for(let a = 1;a< 5 ;a++){}
    // for(var a = 1;a< 5 ;a++){}
    // console.log(a);//let形成块级作用域，报错//var可以在外面取


    // 有趣的面试例子
    // 面试的时候很经常遇到一个例子：

    for (var i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }
    //这个例子执行完输出什么结果？

    //答案是 5,5,5,5,5

    //如果想要输出0,1,2,3,4改怎么实现？
    //其中一种方案就是把var换成let就可以了。let的块级作用域在这里就体现出来了。
    for (let i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }

// 也可以通过闭包的方式，但是会造成内存泄漏


//*（4）同一作用域下let和const不能声明同名变量，而var可重复声明同一个变量（后面声明的值会覆盖前面的声明）
    var a = 100;
    console.log(a); // 100

    var a = 10;
    console.log(a); // 10

    let a = 100;
    let a = 10;
    //控制台报错：Identifier 'a' has already been declared  ===> 标识符a已经被声明了。


//*（5）let 和 const 存在“变量死区”
    var a3 = 100;
    if(1){
        a3 = 10;
        // 在当前块作用域中存在a3使用let/const声明的情况下，给a3赋值10时，只会在当前作用域找变量a3，
        //而这时，还未到声明时候，所以控制台Error:a3 is not defined
        let a3 = 1;
    }

//*（6）const
    /*************************
     用来定义常量(可以是字符串，数组，函数，对象等)
        
        const声明的变量只可以在声明时赋值,声明必须赋值,不可随意修改,这是最大的特点
        
        声明一个基本类型的时候为常量，不可修改；
        声明的是复合类型数据，可以修改其属性
    *************************/

    const a4;  //报错.
    const b4 = 1;//正确
    b4 = 3//报错，因为定义常量之后不能成重新赋值！！


    // eg1:
    const arr = [1, 2];
    arr.push(1);//正确 [1, 2, 1]
    arr[0] = 3;//正确 [3, 2, 1]

    arr = [];//错误TypeError: invalid assignment to const `arr'

    // eg2:
    const list = [];
    list[0] = 10;
    console.log(list);　　// [10]

    const obj = {a:100};
    obj.name = 'apple';
    obj.a = 10000;
    console.log(obj);　　// {a:10000,name:'apple'}
    // 可见，如果有需要，可以改变const里所存储的值，但它的指向空间是无法操作的。


    // 对于复合类型的变量，如数组和对象，变量名不指向数据，而是指向数据所在的地址。
    // const命令只是保证变量名指向的地址不变，并不保证该地址的数据不变，所以将一个对象声明为常量必须非常小心。

    // 推荐数组对象使用const 声明
    const names = [];
    names = [1,2,3] //出错，因为变量names指向的地址不能发生改变，应始终指向[]所在的地址！！！[1,2,3]与[]不是同一个地址

    //不会报错，因为names指向的地址不变，改变的只是内部数据
    const names = [];
    names[0] = 1
    names[1] = 2
    names[2] = 3


    // 如果想让定义的对象或数组的内部数据也不能够修改和改变，可以使用object.freeze(names)进行冻结，这样为对象添加新属性就不起作用。
    // 除了将对象本身冻结，对象的属性也应该冻结。下面是一个将对象彻底冻结的函数
    var constantize = (obj) => {
        Object.freeze(obj);
        Object.keys(obj).forEach( (key) => {
            if ( typeof obj[key] === 'object' ) {
            constantize( obj[key] );
            }
        });
    };

