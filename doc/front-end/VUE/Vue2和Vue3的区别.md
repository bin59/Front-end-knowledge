# vue3 和 vue2 的区别

## 一些变化和改进

1. 更小，更快：Vue 3 的核心包的体积比 Vue 2 小 40%，性能也得到了一定的提升。
2. Composition API：Vue 3 引入了 Composition API，提供了一种更直观、更灵活的组合组件逻辑的方式。
3. 更好的 TypeScript 支持：Vue 3 支持使用 TypeScript 的时候，提供了更好的类型推断和类型推导。
4. 更好的自定义渲染器 API：Vue 3 中的自定义渲染器 API 被设计为更加通用、灵活和易于使用。
5. Teleport：Vue 3 引入了 Teleport，这是一个更好的组件模板插槽定位方式，可以用于创建可以在任何地方渲染的组件。

6. vue3.0 不用把组件内容全部包裹在某一个 div，一个 template 里面可以有多个根节点元素
7. vue3.0 取消了 2.0 部分 api，所以路由跳转传值方式有所不同。
   新增 API：useRouter(路由跳转)和 useRoute（有参数的话，在接收页面引入 API--useRoute）

```ts
<script setup lang="ts">
 //1. useRouter(路由跳转)

  import { useRouter } from 'vue-router'
  const router = useRouter()

  router.push('home')
  //router.push({
  // path: `/page`,
  //})

  ...
 //2. useRoute  有参数的话，在接收页面引入API--useRoute

  import { useRoute } from 'vue-router'
  //query
  let userId=route.query.userId;

  //params
  let userId=route.params.userId;

</script>
```

## 生命周期方面

Vue 3 的生命周期函数和 Vue 2 的大体相同，但是有一些变化：

1. beforeCreate 和 created 生命周期函数被合并成了一个新的生命周期函数：setup。这个新的函数在组件实例被创建之前执行，可以用来设置组件的初始状态、提取响应式状态和副作用等。

2. Vue 3 中去掉了 beforeMount 和 mounted 生命周期函数中的同步执行，这些函数现在是异步执行的，因此在这些函数中不能再使用 $el 属性。

3. beforeUpdate 和 updated 生命周期函数仍然存在，但是它们的触发时机与 Vue 2 有所不同。在 Vue 3 中，如果一个组件的响应式状态发生变化，会先触发一个 pre-flush-callback，然后在 nextTick 中再触发 beforeUpdate 和 updated 。

4. Vue 3 中增加了一个新的生命周期函数：beforeUnmount。这个函数在组件卸载之前执行，可以用来清理组件中的事件监听器和定时器等。

5. Vue 3 中去掉了 deactivated 和 activated 生命周期函数，这些函数在 Vue 2 中用来处理当一个组件被 keep-alive 缓存起来或者从缓存中恢复时的情况，但是在 Vue 3 中，这些功能被重新设计为钩子函数。

总体来说，Vue 3 的生命周期函数仍然保持着 Vue 2 的特点，但是通过一些小的调整和优化，使得它们更加灵活和易于使用。
