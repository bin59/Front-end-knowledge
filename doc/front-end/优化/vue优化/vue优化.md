### 1、computed

监听 data 中的数据，发生改变的时候

### 2、缓存组件

keep-alive 组件

### 3、路由懒加载

## 运行时优化

1、使用 v-if 代替 v-show
两者的区别是：v-if 不渲染 DOM，v-show 会预渲染 DOM

除以下情况使用 v-show，其他情况尽量使用 v-if

有预渲染需求

需要频繁切换显示状态

2、v-for 必须加上 key，并避免同时使用 v-if
一般我们在两种常见的情况下会倾向于这样做:

为了过滤一个列表中的项目 比如 v-for="user in users" v-if="user.isActive"。在这种情形下，请将 users 替换为一个计算属性 (比如 activeUsers)，让其返回过滤后的列表

为了避免渲染本应该被隐藏的列表 比如 v-for="user in users" v-if="shouldShowUsers"。这种情形下，请将 v-if 移动至容器元素上 (比如 ul, ol)

3、事件及时销毁
Vue 组件销毁时，会自动清理它与其它实例的连接，解绑它的全部指令及事件监听器，但是仅限于组件本身的事件。

也就是说，在 js 内使用 addEventListener 等方式是不会自动销毁的，我们需要在组件销毁时手动移除这些事件的监听，以免造成内存泄露，如：

created() {
addEventListener('touchmove', this.touchmove, false)
},
beforeDestroy() {
removeEventListener('touchmove', this.touchmove, false)
}
复制代码
首屏优化
1、图片裁剪、使用 webp
图片需要裁剪，一般使用二倍图即可

尽量使用 webp 图片

如果使用了 vue-lazyload 插件，可以使用以下方法一键替换 webp（替换使用 v-lazy 指令的图片）

Vue.use(VueLazyload, {
error: require('./assets/img/defaultpic_small.png'),
filter: {
webp (listener: any, options: any) {
if (!options.supportWebp) return
// listener.src += '.webp'
}
}
});
 
2、资源提前请求
经测试，Vue 项目中各文件的加载顺序为：router.js、main.js、App.vue、[page].vue、[component].vue，如图：

image
其中，router 的加载时间相比于 page.vue 快近 100ms，如果 page.vue 的文件较多，时间差异会更大 所以，可以在页面挂载、渲染的同时去请求接口数据，如在 router.js 中请求数据：

import Router from 'vue-router'
import store from './store'

store.dispatch('initAjax')
 
3、异步路由
使用异步路由可以根据 URL 自动加载所需页面的资源，并且不会造成页面阻塞，较适用于移动端页面

建议主页面直接 import，非主页面使用异步路由

使用方式：

{
path: '/order',
component: () => import('./views/order.vue')
}
 
4、异步组件
不需要首屏加载的组件都使用异步组件的方式来加载（如多 tab），包括需要触发条件的动作也使用异步组件（如弹窗） 使用方式为：v-if 来控制显示时机，引入组件的 Promise 即可

<template>
  <div>
    <HellowWorld v-if="showHello" />
  </div>
</template>
<script>
export default {
  components: { HellowWorld: () => import('../components/HelloWorld.vue') },
  data() {
    return {
      showHello: false
    }
  },
  methods: {
    initAsync() {
      addEventListener('scroll', (e) => {
        if (scrollY > 100) {
          this.showHello = true
        }
      })
    }
  }
}
</script>
 
5、使用轻量级插件、异步插件
使用webpack-bundle-analyzer查看项目所有包的体积大小，较大的插件包尽量寻找轻量级的替代方案

首屏用不到的插件、或只在特定场景才会用到的插件使用异步加载（如定位插件，部分情况可以通过 URL 传递经纬度；或生成画报插件，需要在点击时触发）；插件第一次加载后缓存在本地，使用方式为：

// 以定位插件为例
const latitude = getUrlParam('latitude')
const longitude = getUrlParam('longitude')
// 如果没有经纬度参数，则使用定位插件来获取经纬度
if (!latitude || !longitude) {
// 首次加载定位插件
// webpack4 写法，若使用 webpack3 及以下，则 await import('locationPlugin')即可
if (!this.WhereAmI) this.WhereAmI = (await import('locationPlugin')).default
// do sth...
}
 
6、公用 CDN
使用公用的 CDN 资源，可以起到缓存作用，并减少打包体积

网络优化
1、减少网络请求
浏览器对同一时间针对同一域名下的请求有一定数量限制（一般是 6 个），超过限制数目的请求会被阻塞

首屏尽可能减少同域名的请求，包括接口和 js；按需减少首屏的 chunk.js，合并接口请求

2、合理使用 preload、dns-prefetch、prefetch
preload 具有较高的加载优先级，它可以利用间隙时间预加载资源，将加载和执行分离开，不阻塞渲染和 document 的 onload 事件

每次与域名连接都需要进行 DNS 解析，使用 dns-prefetch 可以预解析域名的 DNS

prefetch 会预加载页面将来可能用到的一些资源，优先级较低；对首屏渲染要求较高的项目不建议使用

三者的使用方式，在 head 标签中添加（vue-cli-3 已经做了相应配置）：

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <link rel="icon" href="/dist/favicon.ico" />
  <!-- dns-prefetch写法 -->
  <link rel="dns-prefetch" href="//www.dpfile.com" />
  <title>md-config</title>
  <!-- preload写法，as属性必须 -->
  <link href="/dist/css/app.52dd885e.css" rel="preload" as="style" />
  <link href="/dist/js/app.05faf3b5.js" rel="preload" as="script" />
  <link href="/dist/js/chunk-vendors.04343b1f.js" rel="preload" as="script" />
  <!-- prefetch写法 -->
  <link href="/dist/js/chunk-vendors.04343b1f.js" rel="prefetch" />
</head>
 
3、PWA
PWA支持缓存HTML文档、接口（get）等，降低页面白屏时间 这样即使在弱网甚至断网情况下，也能迅速展示出页面

编译打包优化
1、升级 Vue-Cli-3

vue-cli-3 采用 webpack4+babel7，对编译打包方面做了很多优化（成倍的提升），使用 yarn 作为包管理工具，并且对很多优化的最佳实践做了默认配置

经测试，将项目从 vue-cli-2 迁移到 vue-cli-3 之后，速度变化为：

编译时间：44s --> 7s 打包时间：55s --> 11s

效率提升非常明显

2、SSR

对加载性能要求较高的项目建议升级 SSR
