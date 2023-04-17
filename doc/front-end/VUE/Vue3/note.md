<!--
 * @Author: binbin59 zbin59@163.com
 * @Date: 2022-09-25 23:26:54
 * @LastEditors: binbin59 zbin59@163.com
 * @LastEditTime: 2022-09-26 01:40:10
 * @FilePath: \web\study\front-end\VUE\study\vue3\note.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

#

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
