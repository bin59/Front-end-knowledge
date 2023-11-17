export default {
  bind: function (el, binding) {
    // 就根据当前你封装的指令中做的事情,
    // 现在，选项卡类名切换
    // 原本的类名nav- item激活类active
    // 只有1个事情，将激活类active默认的放在第-个元素中

    //el可以获取当前自定义指令绑定的节点元素
    // console.log('el--', el)
    // bjinding自定义指令上下文，可以获取指令所有内容，常用value属性
    // console.log('binging--', binding)

    const { className, activeName, currentIndex } = binding.value
    // console.log(className, activeName, currentIndex)
    // 在这里做dom操作
    const children = el.getElementsByClassName(className)

    // 是一 个节点集合,给第一一个 + active,注意空格
    children[currentIndex].className += ` ${activeName}`
  },
  updata: function (el, binding) {
    //  数据更新时触发

    // 生update生命周期中binding对象会多一个属性oldValue 获取上一次变化前的内容
    console.log(binding)

    //切换类名的操作，这里完成
    const { className, activeName, currentIndex } = binding.value
    const children = el.getElementsByClassName(className)
    // 在节点中添加active, 去除旧节点的active

    // 定义旧节点
    const oldOption = binding.oldValue
    const { currentIndex: oldIndex } = oldOption
    console.log(oldIndex, 'old')
    console.log(currentIndex, 'new')
    // 根据下标找新旧元素，从而修改他们样式属性
    children[currentIndex].className += ` ${activeName}`
    children[oldIndex].className = className
  },
  /*
    这两个方法都是自定义指令的生命周期函数
    生命周期函数关注: 1.函数什么时候触发2. 可以获取什么上下文
    还有很多方法，常用就这两个，其余的看文档再使用
    */
}
