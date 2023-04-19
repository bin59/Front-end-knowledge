class Fn{
    // #定义一个私有属性privateValue
    #privateValue = 100

    //引用私有属性#privatevalue
    prt(){
        console.log(this.#privateValue)
    }
    //静态方法获取私有属性
    static prt1(a) {
        // console.log(this.#privateValue)//为什么会报错
        // console.log(this)//???
        console.log(a.#privateValue)//获取不了该私有成员
        // 只能通过实例对象里面的this.#privateValue
    }
}

console.log(Fn.privateValue)

let f = new Fn()
console.log(f.privateValue)

f.prt()
Fn.prt1(new Fn())