<template>
  <div id="app">
    <!-- 
      如何在Vue中新建一个页面
      step1 Views新建一个vue文件
      step2去到router里面的index.js编写路由规则
    -->
    <nav>
      <!-- router-link 原理是通过a标签跳转 -->
      <router-link to="/detail">Detail</router-link> |
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/father">Father</router-link> |
      <router-link to="/login">Login</router-link> |
    </nav>
    <main>
      <!-- <transition name="fade" mode="out-in"> -->
      <router-view></router-view>
      <!-- </transition> -->

      <!-- router-view
        此时浏览器路径 /
        页面显示的内容是Home.vue的内容 
    -->

      <!-- 
      整套流程如下:n 
      根据浏览器访问的路径，再根据你编写的路由规则，会调用不同页面组件
      该页面组件会在router-view组件显示
    -->

      <button @click="view = 'box'">显示box</button>
      <button @click="view = 'box1'">显示box1</button>
      <br />
      <button @click="send">点击请求</button>
      <keep-alive include="box">
        <component :is="view"></component>
      </keep-alive>
      <!-- 
      当我们使用keep-alive之后设置include属性
      不让组件销毁，正常初始化的生命周期就不会执行
      随之而然的，产生了两个新的生命周期函数
      activated deactivated
     -->
    </main>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

// .xx-enter    定义开始状态
// .xx-leave-to  定义元素结束的状态
// .xx-enter-active  编写元素从没有到有的过渡效果
// .xx-leave- -active  编写元素从有到没有有的过渡效果
// 最后，为了保证过渡效果的完整设置一个mode

nav {
  line-height: 10vh;
  background-color: rgb(111, 187, 183);
  display: flex;
  justify-content: center;
  color: rgb(71, 212, 255);
}
main {
  height: 90vh;
  padding-left: 40%;
  background-color: rgb(248, 165, 150);
}
</style>

<script>
import box from './components/Box.vue'
import box1 from './components/Box1.vue'

// 关键字from后面，带文件路径和不带的区别:
// 带文件路径：根目录里面寻找，不带文件路径在node_model里面寻找

import { getData } from './assets/js/request.js'

export default {
  data() {
    return {
      view: 'box',
    }
  },
  components: {
    box,
    box1,
  },
  methods: {
    async send() {
      let res = await getData({ id: 1 })
      console.log(res)
    },
  },
}
</script>
