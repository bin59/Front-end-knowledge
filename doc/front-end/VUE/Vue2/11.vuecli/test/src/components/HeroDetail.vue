<template>
  <div>
      显示英雄的id，根据id请求数据
      {{id}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      id:''
    }
  },
  created() {
    // 当使用嵌套路由的时候，数据变化，并不代表生命周期会重新执行
    // this.id = this.$route.params.id
  },
  // 监听了路径变化
  watch:{
    $route:{
      // 配置立即监听，默认殖是false
      immediate:true,
      handler(newValue){
        console.log(newValue)
        this.id=newValue.params.id
      }
    }
  // 当路径发生变化的时候，会自动触发这个handler
  // newValue就可以动态的获取最新值

  }
}
</script>

<style>

</style>