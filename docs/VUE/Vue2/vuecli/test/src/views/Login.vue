<template>
  <div>
    <h2>这是登录页面</h2>
    <div v-if="isLogin">
      {{ user }}
      {{ welcome }}
    </div>

    <button @click="login" v-if="!isLogin">登录</button>
    <button @click="logout" v-else>退出</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
// Vue规定所有的方法都要定义在methods

export default {
  computed: {
    // isLogin() {
    //   // return this.$store.state.isLogin
    //   // 模块化后多一次访问 .user.isLogin
    //   console.log(this.$store)
    //   return this.$store.state.user.isLogin
    // },
    // user() {
    //   return this.$store.state.user.user
    // },
    // 引入state中的数据
    ...mapState('user', ['isLogin', 'user']),

    // VueX中state和getters 都是要在computed引入
    // welcome() {
    //   console.log(this.$store.getters)
    //   // getters 分了模块化之后，成  {user/welcome: "小红欢迎您！"}  这样的对象
    //   return this.$store.getters['user/welcome']
    // },
    // 引入getters计算属性中的方法
    ...mapGetters('user', ['welcome']),
  },
  methods: {
    // 把VueX里面的actign的方法引入到了当前页面的methods中
    ...mapMutations('user', ['loginData']),
    // ...mapActions('user', ['login']),

    // 要是重名这样写可以避免
    ...mapActions(['user/login']),

    // async handle() {
    async login() {
      // console.log(this.$route)
      this.$router.push(this.$route.query.redirect)

      /*
        用户行为会触发这个login方法，去修改数据
        在Vuex需要遵循VueX修改数据的方式
        通过mutations里面的方法去修改VueX的数据
        规则!!!一定要遵守!!!
      */
      // this.$store.mutations.login 不能这样写

      // 通过VueX的内置commin方法触发mutations定义的方法
      //第一个参数为mutations中定义的函数，第二个参数为该函数的参数，用来数据的传递
      // this.$store.commit('login', '小黄')
      // 模块化后  user/login
      // this.$store.commit('user/login', '小黄')
      // 使用辅助函数后
      // this.login('小黄')
      // ？怎么使用辅助函数调用mutations里面的数据呢
      this.loginData('小黄')

      // 通过dispatch触发actions里面的方法
      // let token = await this.$store.dispatch('user/login', '小红')
      // let token = await this.login('小红')
      let token = await this['user/login']('小红')

      sessionStorage.setItem('token', token)
    },
    logout() {
      this.$store.commit('user/logout')
    },
  },
}
</script>

<style></style>
