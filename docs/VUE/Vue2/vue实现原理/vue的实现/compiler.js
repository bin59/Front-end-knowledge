/**
 * 功能：
 * 1.负责模版编译，处理指令v-/差值表达式
 * 2.负责页面的首次渲染工作
 * 3.当数据发生变化的时候，重新渲染视图
 *
 * 根据功能去定义类图
 * el:保存节点
 * vm:存放实例，为了获取数据。
 *
 * 为什么通过vm?我们之前已经通过数据劫持，将data劫持到了vm
 *
 * 方法：
 * 1.编译模版，处理文本节点{{}}和元素节点v-指令   v-if   v-show
 * 2.编译元素节点，处理指令
 * 当判断出来当前节点已经是元素节点，在具体操作对应的v-指令
 * 3.编译文本节点，处理差值表达式{{}}
 * 4.专门用来判断是不是v-指令
 * 5.专门用来判断是不是元素节点
 * 6.专门用来判断是不是文本节点
 *
 */

class Compiler {
  constructor(vm) {
    this.el = vm.$el
    this.vm = vm
    this.compiler(this.el)
  }
  // 编译模板
  compiler(el) {
    console.log(el)
  }
  // 辅助函数：串联
  update(node, value, attr, key) {
    let updateFn = this[attr + 'Updater']
    updateFn && updateFn.call(this, node, value, key)
  }
  textUpdater(node, value) {
    console.log(' textUpdater')
    node.textContent = value
    new Watcher(vm, key, newValue => {
      node.textContent = newValue
    })
  }
  modelUpdater(node, value) {
    console.log('modelUpdater')
    node.value = value
    new Watcher(this.vm, key, newValue => {
      node.value = newValue
    })
  }

  // 编译元素节点，处理指令
  compilerText(node) {
    // 模板初始化
    let reg = /\{\{(.+?)\}\}/
    let value = node.textContent //innerHTML  innerText
    if (reg.test(value)) {
      // count msg
      let key = RegExp.$1.trim()
      node.textContent = value.replace(reg, this.vm[key])
    }
    // 添加观察者，等待数更新，触发对应的cb函数
    new Watcher(this.vm, key, newValue => {
      node.textContent = new Value()
    })
  }
  // 编译文本节点，处理差值表达式
  compilerText() {}
  // 专门用来判断是不是v-指令
  isDirective(attrName) {
    return attrName.startsWith('v-')
  }
  //专门用来判断是不是元素节点
  isElmentNode(node) {
    return node.nodeType === 1
  }
  //专门用来判断是不是文本节点
  isTextNode(node) {
    return node.nodeType === 3
  }
}
