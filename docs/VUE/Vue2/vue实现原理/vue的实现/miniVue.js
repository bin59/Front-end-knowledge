/**
 * 类图
 *  $options
 *      负责收集初始化参数
 *  $el
 *      负责记录选择器
 *  $data
 *      负责记录数据
 *  _proxyData
 *      将data的数据换成getter和setter
 */

class MiniVue {
  // 作用
  // 1.保存外部传入到Vue类的数据，后续过程会用到el和data
  // 2.执行_proxyData函数，让data中的每个属性拥有set和get能力
  // vm.msg  等于访问==》 data.msg
  constructor(options) {
    this.$options = options || []
    this.$data = options.data || {}
    this.$el =
      typeof options.el === 'string' ? document.querySelector(options.el) : null
    console.log(this.$options)
    this._proxyData(this.$data)
    // _proData只是劫持了最外层的数据
    new Observer(this.$data)
    new Compiler(this.$options)
  }

  _proxyData(data) {
    console.log('走这里吗？', data)
    Object.keys(data).forEach(key => {
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get() {
          console.log('get')
          return data[key] //key='msg'  'count'
        },
        set(newValue) {
          console.log('set')
          if (newValue === data[key]) {
            return
          }
          data[key] = newValue
        },
      })
    })
    // 劫持到当前的Vue实例中
    // Object.defineProperty()
  }
}
