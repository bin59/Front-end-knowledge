<!--
 * @Author: binbin59 zbin59@163.com
 * @Date: 2022-10-22 18:49:33
 * @LastEditors: binbin 1959409749@qq.com
 * @LastEditTime: 2022-11-09 09:15:57
 * @FilePath: \web\study\front-end\面试\vue\vue2.0、vue3.0比较.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

## VUE2.0 和 VUE3.0 的区别

### 1.默认目录结构的变化

vue-cli2.0 与 3.0 在目录结构方面，有明显的不同
vue-cli3.0 移除了配置文件目录，config 和 build 文件夹
同时移除了 static 静态文件夹，新增了 public 文件夹，打开层级目录还会发现， index.html 移动到 public 中

### 2.配置项

3.0 config 文件已经被移除，但是多了.env.production 和 env.development 文件，除了文件位置，实际配置起来和 2.0 没什么不同
没了 config 文件，跨域需要配置域名时，从 config/index.js 挪到了 vue.config.js 中，配置方法不变

### 3.渲染

Vue2.x 使用的 Virtual Dom 实现的渲染

Vue3.0 不论是原生的 html 标签还是 vue 组件，他们都会通过 h 函数来判断，如果是原生 html 标签，在运行时直接通过 Virtual Dom 来直接渲染，同样如果是组件会直接生成组件代码

### 4.数据监听

Vue2.x 大家都知道使用的是 es5 的 object.defineproperties 中 getter 和 setter 实现的，而 vue3.0 的版本，是基于 Proxy 进行监听的，其实基于 proxy 监听就是所谓的 lazy by default，什么意思呢，就是只要你用到了才会监听，可以理解为‘按需监听’，官方给出的诠释是：速度加倍，同时内存占用还减半。

### 5.按需引入

Vue2.x 中 new 出的实例对象，所有的东西都在这个 vue 对象上，这样其实无论你用到还是没用到，都会跑一变。而 vue3.0 中可以用 ES module imports 按需引入，如：keep-alive 内置组件、v-model 指令，等等。

### 6. vue2 和 vue3 双向数据绑定原理发生了改变

vue2 的双向数据绑定是利用 ES5 的一个 API Object.definePropert()对数据进行劫持 结合 发布订阅模式的方式来实现的。

vue3 中使用了 es6 的 ProxyAPI 对数据代理。

相比于 vue2.x，使用 proxy 的优势如下
1.defineProperty 只能监听某个属性，不能对全对象监听
可以省去 for in、闭包等内容来提升效率（直接绑定整个对象即可） 2.可以监听数组，不用再去单独的对数组做特异性操作 vue3.x 可 3.以检测到数组内部数据的变化

### 7.默认进行懒观察（lazy observation）

在 2.x 版本里，不管数据多大，都会在一开始就为其创建观察者。当数据很大时，这可能会在页面载入时造成明显的性能压力。3.x 版本，只会对「被用于渲染初始可见部分的数据」创建观察者，而且 3.x 的观察者更高效。

### 8.更精准的变更通知

比例来说：2.x 版本中，使用 Vue.set 来给对象新增一个属性时，这个对象的所有 watcher 都会重新运行；3.x 版本中，只有依赖那个属性的 watcher 才会重新运行。

### 9. vue3.0 新加入了 TypeScript 以及 PWA 的支持

### 10. vue3.0 的生命周期也发生了变化

| 2.0 周期名称  | 3.0 周期名称    | 说明                          |
| ------------- | --------------- | ----------------------------- |
| beforeCreate  | setup           | 组件创建之前                  |
| created       | setup           | 组件创建完成                  |
| beforeMount   | onBeforeMount   | 组件挂载之前                  |
| mounted       | onMounted       | 组件挂载完成                  |
| beforeUpdate  | onBeforeUpdate  | 数据更新，虚拟 DOM 打补丁之前 |
| updated       | onUpdated       | 数据更新，虚拟 DOM 渲染完成   |
| beforeDestroy | onBeforeUnmount | 组件销毁之前                  |
| destroyed     | onUnmounted     | 组件销毁后                    |

[vue2 与 vue3 的区别](https://blog.csdn.net/weixin_43638968/article/details/108800361?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2-108800361-blog-112320662.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2-108800361-blog-112320662.pc_relevant_default&utm_relevant_index=5)

| 选项 API        | Hook inside inside setup |
| --------------- | ------------------------ |
| beforeCreate    | Not needed               |
| created         | Not needed               |
| beforeMount     | onBeforeMount            |
| mounted         | onMounted                |
| beforeUpdate    | onBeforeUpdate           |
| updated         | onUpdated                |
| beforeUnmount   | onBeforeUnmount          |
| unmounted       | onUnmounted              |
| errorCaptured   | onErrorCaptured          |
| renderTracked   | onRenderTracked          |
| renderTriggered | onRenderTriggered        |
