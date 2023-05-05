##

###

1. vue3.0 不用把组件内容全部包裹在某一个 div，一个 template 里面可以有多个根节点元素
2. vue3.0 取消了 2.0 部分 api，所以路由跳转传值方式有所不同。
   新增 API：useRouter(路由跳转)和 useRoute（有参数的话，在接收页面引入 API--useRoute）

```ts
<script setup lang="ts">
 //1. useRouter(路由跳转)

  import { useRouter } from 'vue-router'
  const router = useRouter()

  router.push('home')
  //router.push({
  //    path: `/page`,
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
