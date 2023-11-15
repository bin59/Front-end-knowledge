/**
 * 功能：
 *      负责把data选项中的属性转换成响应式数据
 *      data中的某个属性也是对象，也要该属性转换成响应式数据
 *      数据发生变化的时候，发送通知
 * 类图
 * walk()
 *      用来判断每个数据是不是响应式数据和是不是引用数据{} []
 *      如果是，调用defineReactive进行数据的深度监听
 * defineReactive()
 *      做深度监听用的
 */
class Observe {
  constructor(data) {
    this.walk(data)
  }
  walk(data) {
    //内容才能写判断
    console.log(data, 'observer')

    // 判断一下这个value值是不是对象，不是对象

    if (!data || typeof data !== 'object') {
      return
    }
    Object.keys(data).forEach(key => {
      // msg count person
      this.defineReactive(data, key, data[key])
    })
  }
  defineReactive(obj, key, value) {
    //
    let that = this
    let dep = newDep()
    this.walk(value)
    // 如果不是对象，终止wa lk方法的执行,
    // 只需-层劫持，下面

    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get() {
        // 收集依赖，添加观察者的过程
        // dep.addSub()

        // 在添加订阅者到订阅中心之前，需要先添加观察者
        Dep.target && dep.addSub(Dep.target)
        // 判断当前Dep类中有没有target属性，
        // 如果有，把这个target属性添加到订阅者中心

        return value
      },
      set(newValue) {
        if (newValue === value) return
        // 发送通知，触发watcher的update
        value = newValue
        that.walk(newValue)
        dep.notify()
      },
    })
  }
}
