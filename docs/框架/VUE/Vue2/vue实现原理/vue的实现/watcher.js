/**
 * 功能:
 * 1.当数据发生变化的时候，dep通知所有watcher观察者对象的实例更新视图
 * 2.区分不同的watcher对象，他们cb更新视图函数的不同
 */
class Watcher {
  constructor(vm, key, cb) {
    // vm和key为了获取数据，比较新旧数据
    // cb 每个观察者都是不同的cb函数
    this.vm = vm
    this.key = key
    this.cb = cb

    // 把watcher对象添加到Dep类中的静态属性taarget
    Dep.target = this

    // 记录上一次的数据
    this.oldValue = vm[key]

    // 避免重复添加
    Dep.target = null
  }
  updated() {
    // 判断新旧值是否相等
    // 相等-终止 ，不相等-调用对应的cb函数
    let newValue = this.vm[this.key]
    if (newValue == this.oldValue) return
    // 让cb函数可以获取最新的数据，等待模板更新（视图更新
    this.cb(newValue)
  }
}
