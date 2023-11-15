<template>
  <div>
    <h1>这是detail页面</h1>
    {{ id }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
    }
  },
  created() {
    // this.$route可以获取当前路由的所有信息
    // this.$route和this.$router有什么区别?
    // 前者是获取路由信息，后者使用用于跳转的行为
    // console.log(this.$route)

    // 动态、普通路由传递
    // this.id= this.$router.params.id

    // 查询参数传递
    this.id = this.$route.query.id

    console.log('created')
    /*
        ajax请求并渲染
        对于一些比如修改的频率不高的页面渲染的内容会不会改变?不会
        处理:既然你的修改频率不高，索性不销毁这个组件,created就不会执行,自然的请求不会发生
        我们对这个组件做缓存的操作，意味着这个组件不会被销毁
      */
  },
  beforeRouteEnter(to, from, next) {
    // console.log('isLogin', this.$store.state.isLogin)
    if (true) {
      next()
    } else {
      next('/login?redirect' + to.fullPath)
    }
  },
}
</script>

<style lang="scss"></style>
