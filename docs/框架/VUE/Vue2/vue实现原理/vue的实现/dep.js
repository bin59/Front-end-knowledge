class Dep {
  constructor() {
    // 事件中心，记录所有依赖的地方
    this.sub = []
  }
  // 添加订阅者（观察者）
  addSub(sub) {
    if (sub && sub.update) {
      this.subs.push(sub)
    }
  }
  // 发送通知
  notify() {
    this.subs.forEach(sub => {
      sub.update()
    })
  }
}
