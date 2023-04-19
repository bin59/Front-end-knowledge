<template>
  <transition name="slide">
    <!-- 遮罩 -->
    <div class="mask" v-show="isView">
      <!-- 内容 -->
      <div class="box">
        <slot></slot>
        <button @click="$emit('submit')">是</button>
        <button @click="$emit('cancel')">否</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['isView'],
}
</script>

<style lang="scss">
.mask {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.274);
  position: fixed;
  top: 0;
  left: 0;
  &.slide-enter {
    top: -100%;
  }
  &.slide-leave-to {
    top: -100%;
  }
  &.slide-enter-active,
  &.slide-leave-active {
    transition: all 0.5s;
  }
}
.box {
  width: 300px;
  height: 200px;
  background-color: beige;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
