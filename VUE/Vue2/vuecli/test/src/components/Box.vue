<template>
  <div>这是box组件</div>
</template>

<script>
export default {
  created() {
    console.log('dreated')
  },
  // 进入box的时候触发
  activated() {
    console.log('activated')
  },
  // 离开box的时候触发
  deactivated() {
    console.log('deactivated')
  },
}
</script>

<style></style>
