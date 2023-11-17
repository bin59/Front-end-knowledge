# Vue 的实现原理

在写一个类的时候,你一定要知道的是，确定

1.这个类中有什么属性

2.这个类中有什么方法

写一个了类的方法论：

1.制度类图

2.实现属性

3.实现方法

### MVVM 实现原理:

Vue.js 是采用数据劫持结合发布者-订阅者模式的方式，

通过 Object.defineProperty()来劫持各个属性的 setter, getter,

在数据变动时，发布消息分给订阅者，触发响应的监听回调。

1. vue 基础知识 Vue 核心 Vuerouter vuex vue 生命周期
2. Vue 项目经验
3. Vue 的实现原理:. 上面这个结论。有的面试官如果了解，深入挖掘

object.defineProperty()是 ES6 新增的方法

直接的导致 Vue 不能兼容低版本浏览器

Vue 左右数据的入口，同时执行 Obserber 类去做的数据的劫持和
comilper 类的模版初始化的操作。Obserber 类通过 Object.
defineProperty()去做数据的劫持，在收集以来的过程中，
添加观察者，让每个属性拥有 update 方法。

当数据修改时，通过 set 方法自动触发对应属性的 update
从而调用对应的试图更新的回调函数，导致视图的更新。
