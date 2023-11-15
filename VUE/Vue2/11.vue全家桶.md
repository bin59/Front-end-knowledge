<details markdown="1">
  <summary>目录</summary>

- [vue 全家桶](#1)
  - [Vue-cli](#2)
  - [Vue-cli](#2-常用指令)
  - [3 操作样式](#3-操作样式)
  - [4 事件绑定](#4-事件绑定)
  - [5 vue 表单操作](#5-vue表单操作)
  - [6 v-model 的实现原理](#6-v-model的实现原理)
    - [6.1 计算属性](#61-计算属性)

</details>

<a id='1'>

# vue 全家桶

<a id='2'>

## Vue-cli

Vue 脚手架比我们原生好很多

webpack + Vue 组合而成的工具

Vue 全家桶：Vue-cli vue-route vueX vue-axios(ajax promise)

初级：非常熟悉的使用，而且还要准确的说明其原理

中高:懂得一些优化手段，你要能够简要书写

### 1、创建项目

先安装 vue-cli

`npm install -g @vue/cli`

`yarn global add @vue/cli`

1、vue create demo

第一行:脚手架默认官方配置 vue2.x

第二行:脚手架默认官方配置 vue3.x

第三行:脚手架自定义配置(选择这个)

2.选择安装一些插件

通过配置 babel router vuex css 预编译

3.你这个脚手架用什么路由配置(默认是 history)?

选择 no

4.安装你要的编译器

5.你希望把你项目中安装的插件放在哪里显示?

选择 package.json

6.问你是否保存该配置?

N0 不保存

### 2、文件夹说明

- node\_ modules 使用来放插件和脚手架的源码

- public 存放静态资源(不会被 webpack 打包) 放不经常更换的内容

  如. ico

- .gitignore.上传 忽略文件配置

  1.node\_ module npm install

  2.dist npm run build

  因为，这两个文件都可以通过 webpack 命令动态生成

- src 存放我们所有的源码， (以后编写 vue 代码的地方)

- babel. config.js

  有的第三方插件有可能需要在这里配置一 些代码,如 element-ui

- package.json

  可以看到当前项目的依赖(插件)

  可以看到具体 webpack 命令

- README.md

  介绍当前项目的一-些资料，功能，详情等等。

  快速回忆当前项目的功能，用来交接。

### src 展开说明

- assets 存放静态文件资源(是会被压缩处理)有可能会被替换的静态
  资源

- components 存放本次项目用到组件

- router 用来配置路由规则

- store 用来配置 Vuex,数据共享

- views 用来存放页面

- App.vue 是我们项目的入口界面(首页)根节点 div id="app"

- main.js 入口 js

  挂载或配置一些第三方插件，或者说是一些组件，让所有的组件或者页面都可以使用

## 3、v-route

### 路由组件传参

1、动态路由传递

    过程：
    关键：-定要在路由规则中，添加占位符! !

2、普通参数传递

3、查询参数传递

router-link 原理是通过 a 标签跳转

路由跳转方式
通过 router-link to 属性跳转,称之为声明式导航

而通过 js 方式跳转路由，称之为编程式导航

### 嵌套路由

### 重定向和别名

### 路由模式

### 哈希模式

history 模式
区别?

1.表现形式

路径上有#，就是哈希模式
没有#的，就是 history 模式
具体怎么去设置这两个模式的转换?

2.底层实现原理

哈希模式是通过 hashChange 事件监听来监听页面的变化
而 history 模式是通过 historyf 事件监听来监听页面的变

先放放，等到讲原理写代码(清晰他们之间的区别)

请说说 Vue-router 的实现原理?

经典的应用:登陆拦截

a(商品详细页) =>登录拦截=> b(购物车)

    我们将整个跳转的行为的更加的详细
    a离开的时候
    进入b的时候
    正在渲染b的时候

### 路由守卫

一共使用三大类路由守卫

区别:原理是相同的，只是设置守卫的地方不一样

1.页面的守卫

2.路由的守卫

3.组件的守卫

每个类型都有前置和后置两种，所以一共有 3 大类 6 种

## 4、vuex

### 核心概念

每一个 Vuex 应用的核心就是 store，里面又包括:
（1）state（数据）：用来存放数据源，就是公共状态;
（2）getters（数据加工）：有的时候需要对数据源进行加工，返回需要的数据；
（3）actions（事件）：要执行的操作，可以进行同步或者异步事件
（4）mutations（执行）：操作结束之后，actions 通过 commit 更新 state 数据源
（5）modules：使用单一状态树，致使应用的全部状态集中到一个很大的对象，所以把每个模块的局部状态分装使每一个模块拥有本身的 state、mutation、action、getters、甚至是嵌套子模块；

### vuex 的工作流程就是：

（1）通过 dispatch 去提交一个 actions，
（2） actions 接收到这个事件之后，在 actions 中可以执行一些异步|同步操作，根据不同的情况去分发给不同的 mutations，
（3）actions 通过 commit 去触发 mutations，
（4）mutations 去更新 state 数据，state 更新之后，就会通知 vue 进行渲染

当数据再不同的组件中同时使用的时候，那么我们可以将数据放到仓库 state 中
做集中式的管理

## 5、vue-anxios(ajax promise)

全家桶的最后一个模块

作用：请求数据

最大的特点：可以配置拦截器

拦截器的作用：将请求从两步分为四步

（详细说明 前端发送请求到后端的过程中被拦截器拦截，后-->前也被拦截）

目的:当 ajax 的流程分得越细 I 作为开发者来说，它的操作性就越强

拦截器分为：

1、请求拦截器

定义:处于前端请求和后台接收前端请求之间。

作用:可以拦截所有前端的请求，并操作(如添加 token 值和 loading 图)

2、响应拦截器

定义:处于后台返回数据和前端接收数据之间。

作用:可以拦截所有后台返回的数据，并操作(如统一报错处理，数据预解析)

每个项目:数据格式的返回都是统一-的

```js
{
  status:200，401 403 500 209 203
  //成功
  data:[数据]
  //失败
  error:[错误的信息]
}
```

step1 安装

`yarn add axios`

step2 测试

```js
 methods: {
    async send() {
      // 方式一  参数是无序的
      let res = await axios({
        url: 'http://101.34.115.22:7001/api/getProducts',
        // post请求时
        // data: {
        //   id: 1,
        // },
      })
      // .then(res => console.log(res))
      console.log(res)

      /*
        问题：
          1、这些请求严格上来说不属于该页面的逻辑
          2、axios需要每个页面手动引入 N个页面，N个axios请求

        每个项目都要做这些准备工作.

        axios二次封装的整个过程，一定要能口述出来

        作用1：将请求抽离到别的文件中,让页面的js更加专注处理对应页面的逻辑
        作用2：将请求配置在一个地方，避免多次引入，提高代码维护性


      */

      // 方式二 参数是有序的，固定了位置
      let url = 'http://101.34.115.22:7001/api/getProducts'
      // post请求
      // let url = 'http://101.34.115.22:7001/api/getProducts?id=1'
      // axios.get(url).then(res => console.log(res))

      //
    },
  },

```

step3 配置 axios

3.1 新建一个 http.js 文件放在 assets/js(放自己封装的 js)

引入并创建 axios 服务

最后，暴露出去

```js
// 引入axios
import axios from 'axios'

// 创建一个axios的服务
// 传递一些配置的参数(文档)
let http = axios.create({
  // timeout请求的过期时间
  timeout: 5000,
})

// 配置拦截器
// 请求拦截器
http.interceptors.request.use(config => {
  /*
    config参数是用来获取拦截器的配置
    通过不去修改它的默认配置
    而是去添加一些新属性，如添加token
    
    */
  let token = '123'
  if (token) {
    config.headers.token = token
  }

  // 配置loading图的显示

  // 一定要记住:操作完了config之后,
  // 一定要renturn
  return config
})

// 响应拦截
http.interceptors.response.use(response => {
  console.log(response)

  // 配置loading图的消失

  // 做数据的预解析
  return response.data
  //   if (response.status == 200) {
  //     return 1
  //   } else {
  //     return 0
  //   }
})

export default http
```

3.2 将这个 http 挂载到全局

在 main.js 中

```js
import http from './assets/js/http.js'
/*
将http服务放到Vue原型对象上,
每个组件都是Vue的实例
说明每个Vue实例，每个组件都有$http
就可以直接在组件中调用，不需要每个引入
带$说明是自己配封装的，不是官方配置
*/
Vue.prototype.$http = http
```

然后在其他页面：直接 this.$http 使用

```js
async send() {

  let res = await this.$http({
    url: 'http://101.34.115.22:7001/api/getProducts',
  })
  console.log(res)
}
```

3.3 抽离

request.js 存放请求

```js
import api from './api.js'
import http from './http.js'
export function getData(data) {
  return http({
    methods: 'GET',
    params: data,
    url: api.shop,
  })
}
```

api.js 存放地址

```js
let baseUrl = 'http://101.34.115.22:7001'
export default {
  shop: baseUrl + '/api/getProducts',
}
```

在 http.js 中配置拦截器

1、请求拦截

```js
http.interceptors.request.use(config => {
  /*
    config参数是用来获取拦截器的配置
    通过不去修改它的默认配置
    而是去添加一些新属性，如添加token
  */
  let token = '123'
  if (token) {
    config.headers.token = token
  }

  // 配置loading图的显示

  // 一定要记住:操作完了config之后,
  // 一定要renturn
  return config
})
```

2、响应拦截

```js
http.interceptors.response.use(response => {
  console.log(response)

  // 配置loading图的消失

  // 做数据的预解析
  return response.data
  //   if (response.status == 200) {
  //     return 1
  //   } else {
  //     return 0
  //   }
})
```

总结: axios

定义:。。。

使用:。。。

每个项目都要做上述的封装请求

关键:

1.提取请求 request 方法和 api 地址

2.配置对应的拦截器
如何检验?

1.能口述整个封装过程

2.自己回去写几遍，直到可以从 0 写出来

## vue 的自定义指令

v-for v-if 官方默认指令

根据文档对应的使用即可

类似一些选项卡的功能，是大量重复的使用，

1.可以封装成组件(复 用)

2.功能- -样,但是布局非常的不一-样 (slot)

3.更加简便的方式实现这种 功能一样，布局不一样的内容

Vue 的自定义指令 --- 封装功能

目的:在不同的内容内容实现同样的逻辑封装成指令

如:现在将选项卡功能封装成 v-nav
