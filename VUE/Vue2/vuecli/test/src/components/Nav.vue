<template>
  <div>
    <h2>自定义指令</h2>
    <div
      class="nav"
      v-nav-active="{
        className: 'nav-item',
        activeName: 'active-red',
        currentIndex,
      }"
    >
      <div
        v-for="(item, index) in list"
        :key="item.id"
        class="nav-item"
        @mouseenter="currentIndex = index"
      >
        {{ item.name }}
      </div>
    </div>
    <!-- 
        如何将功能封装到指令中，
        1.根目录src中新建一个文件夹directives (指令)
            新建一个js文件,如：navActive.js,通常以功能命名
        2.在新建的js中写逻辑操作
            侧面告诉大家指令其实也就是一个js而已
        3.引入自定义js,注册指令，使用指令(绑定在元素中)
     -->
  </div>
</template>

<script>
import navActive from '../directives/navActive.js'
export default {
  directives: { navActive },
  data() {
    return {
      currentIndex: 0,
      list: [
        { name: '小黑', id: 1 },
        { name: '小红', id: 2 },
        { name: '小黄', id: 3 },
      ],
    }
  },
}
</script>

<style lang="scss">
.nav {
  display: flex;
  // justify-content: ;
  .nav-item {
    width: 200px;
    height: 100px;
    border: 1px black solid;
  }
  .active-black {
    background-color: rgb(117, 109, 109);
  }
  .active-red {
    background-color: rgb(238, 72, 72);
  }
  .active-yellow {
    background-color: khaki;
  }
}
</style>
