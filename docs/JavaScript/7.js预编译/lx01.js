// 1.
/*
GO = {
    x:undefined,
    y:undefined,
    add: function add(n) {return (n = n + 3);}
}
*/
var x = 1, y = (z = 0);// 这里：window.z = 0;
function add(n) {
    /*
    AO = {
        n:undefined => 1
    }
    */
    return (n = n + 1);
};
y = add(x); // y = 4
console.log(y); // 4

// 2.1
// GO = {
//     name:undefined
// }
var name = "Tom";
(function () {//自执行没有
    // AO = {
    //     name:undefined
    // }
    // 函数预编译
    console.log(name); // undefined
    console.log(typeof name); // "undefined"
    if (typeof name == "undefined") {
        var name = "Jack";
        console.log("Goodbye " + name);
    } else {
        console.log("Hello " + name);
    }
})();// Goodbye Jack

// 2.2升级1  传参
var _name = "Tom";
(function (_name) {
    // 函数预编译
    // AO = {
    //     _name:"Tom"
    // }

    if (typeof _name == "undefined") {
        var _name = "Jack";
        console.log("Goodbye " + _name);
    } else {
        console.log("Hello " + _name);
    }
})(_name);//Hello Tom


// 2.3升级2
// GO = {
//     _name:undefined
// }
(function () {
    // AO = {} 函数预编译结束
    // console.log(_name); // Tom
    if (typeof _name == "undefined") {
        let _name = "Jack";
        console.log("Goodbye " + _name);
    } else {
        console.log("Hello " + _name);
    }
})();// Hello Tom


//3.
let obj ={
    a:10,
    fn:function (a) {
        consple.log(a);//undefined
        var a = 10;
        console.log(a);//10
    }
};
obj.fn();//undefined,10
obj.fn(obj.a)//110,10