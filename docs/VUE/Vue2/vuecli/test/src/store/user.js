export default {
  // 设置独立的命名空间防止后续的方法出现重名
  namespaced: true,

  // 仓库，存放数据
  state: {
    // 登录的状态，在不同的组件上都会使用到
    // 根据需求，确立共享数据，并声明初始化到VueX的state中
    // 回到需要使用当前变量页面中，通过computed获取仓库数据

    // 当刷新之后，VueX的数据会被重置，结合缓存来操作
    // 解决：1.在每次修改数据的地方中缓存修改后的数据
    //      2.在仓库定义数据的地方中获取缓存
    //     3.通过插件来缓存数据，

    isLogin: sessionStorage.getItem('isLogin') || false,
    user: sessionStorage.getItem('user') || '',
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
  // Mutations在vuex中的定位是修改store中state的唯一方法
  mutations: {
    // state参数可以获取仓库中的所有数据
    loginData(state, name) {
      state.isLogin = true
      state.user = name
      //设置缓存
      sessionStorage.setItem('isLogin', state.isLogin)
      sessionStorage.setItem('user', state.user)
    },
    logout(state) {
      state.isLogin = false
      sessionStorage.setItem('isLogin', state.isLogin)
    },

    changeanim(state) {
      state.anim = 'l'
    },
  },
  // 存放修改仓库数据的方法(异步)
  actions: {
    /*
      本质上，修改数据的不是actions,真正修改数据的还是mutations
      跟mutations作用一样。用来改变state数据的东西
      使用方式却大不一样，异步处理的事情是在actions里面执行的
    */
    login({ commit }, username) {
      // 解构赋值  { commit } = context 得到commit
      // context VueX的上下文,拿到拿到VueX所有的属性方法
      // username 用户名，在登陆页面中获取用户名
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let token = '123' //假设后台返回的
          // 验证身份，定时器模拟请求
          // 通过commit触发mutations
          commit('loginData', username)
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
}
