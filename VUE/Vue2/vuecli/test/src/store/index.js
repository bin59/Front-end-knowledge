import Vue from 'vue'
import Vuex from 'vuex'
// user这个j s就只用来存放关于用户信息的数据共享
// cart.js 只用来存放购物车的数据共享
import user from './user.js'

Vue.use(Vuex)

export default new Vuex.Store({
  /*
  // 仓库，存放数据
  state: {
    // 登录的状态，在不同的组件上都会使用到
    // 根据需求，确立共享数据，并声明初始化到VueX的state中
    // 回到需要使用当前变量页面中，通过computed获取仓库数据

    isLogin: false,
    user: '',
    anim: 'v',
    list: [
      {
        id: 1,
        name: '小黑',
      },
      {
        id: 2,
        name: '小黄',
      },
      {
        id: 3,
        name: '小红',
      },
    ],
  },
  // 存放修改仓库数据的方法(同步)
  mutations: {
    // state参数可以获取仓库中的所有数据
    login(state, name) {
      state.isLogin = true
      state.user = name
    },
    logout(state) {
      state.isLogin = false
    },
    changeanim(state) {
      state.anim = 'l'
    },
  },
  // 存放修改仓库数据的方法(异步)
  actions: {
    // 本质上，修改数据的不是actions,真正修改数据的还是mutations
    // 跟mutations作用一样。用来改变state数据的东西
    // 使用方式却大不一样，异步处理的事情是在actions里面执行的

    login({ commit }, username) {
      // 解构赋值  { commit } = context 得到commit
      // context VueX的上下文,拿到拿到VueX所有的属性方法
      // username 用户名，在登陆页面中获取用户名
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let token = '123' //假设后台返回的
          // 验证身份，定时器模拟请求
          // 通过commit触发mutations
          commit('login', username)
          resolve(token)
        }, 2000)
      })
    },
  },
  getters: {
    // VueX里面的计算属性
    // getters里面也是定义方法这些方法一定要带返回值
    // state最大区别: getters里面的方法是具有缓存性
    welcome: state => state.user + '欢迎您！',
  },
  
  */

  // 模块化
  modules: {
    /*
      可以将这些数据共享分模块管理
      step1先在store文件里面建立js
      step2在index.js做对应的引入并使用的操作
      step3在对应的组件中修改数据引入和操作修改成模块化的

      模块化的出现，虽然让我们更方便的操作和追踪数据,
      但是问题也较为突出，访问和操作数据的书写变的复杂,

      诞生: VueX的辅助函数,
      作用:帮助开发用简单书写来引用和操作模块化VueX的数据
      原理:不变。简单来说，跟原来-样，只是字变少了

    */

    // 使用
    user,
  },
})
