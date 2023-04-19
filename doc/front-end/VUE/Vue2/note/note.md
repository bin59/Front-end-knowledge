<!--
 * @Author: binbin59 zbin59@163.com
 * @Date: 2022-07-15 23:06:40
 * @LastEditors: binbin59 zbin59@163.com
 * @LastEditTime: 2022-09-26 21:19:17
 * @FilePath: \web\study\front-end\VUE\study\vue2\note.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

1. 执行顺序 beforeCreate ->inject -> Props -> Methods -> Data -> Computed -> Watch ->provide-> created

inject 传值

2. vue 中为什么不建议 v-if 和 v-for 一起使用？

一、作用
v-if 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 true 值的时候被渲染
v-for 指令基于一个数组来渲染一个列表。v-for 指令需要使用 item in items 形式的特殊语法，其中 items 是源数据数组或者对象，而 item 则是被迭代的数组元素的别名
在 v-for 的时候，建议设置 key 值，并且保证每个 key 值是独一无二的，这便于 diff 算法进行优化
两者在用法上

```html
<Demo v-if="isShow" />

<li v-for="item in items" :key="item.id">{{ item.label }}</li>
```

二、优先级
v-if 与 v-for 都是 vue 模板系统中的指令
在 vue 模板编译的时候，会将指令系统转化成可执行的 render 函数
示例
编写一个 p 标签，同时使用 v-if 与 v-for

```html
<div id="app">
  <p v-if="isShow" v-for="item in list">{{ item.name }}</p>
</div>
```

注意：3.x 版本中 v-if 总是优先于 v-for 生效。由于语法上存在歧义，建议避免在同一元素上同时使用两者。比起在模板层面管理相关逻辑，更好的办法是通过创建计算属性筛选出列表，并以此创建可见元素

当 v-for 和 v-if 处于同一个节点时，v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中。如果要遍历的数组很大，而真正要展示的数据很少时，这将造成很大的性能浪费 2.这种场景建议使用 computed，先对数据进行过滤

三、注意事项
永远不要把 v-if 和 v-for 同时用在同一个元素上，带来性能方面的浪费（每次渲染都会先循环再进行条件判断）
如果避免出现这种情况，则在外层嵌套 template（页面渲染不生成 dom 节点），在这一层进行 v-if 判断，然后在内部进行 v-for 循环

```
<template v-if="isShow">
    <p v-for="item in list">
</template>


```

如果条件出现在循环内部，可通过计算属性 computed 提前过滤掉那些不需要显示的项

```
computed: {
    items: function() {
      return this.list.filter(function (item) {
        return item.isShow
      })
    }
}
```


```

<template>
  <div id="app">

  </div>
</template>

<script>

export default {
    name: 'app',
        data() {
            return {
                message: 'xuxiao is boy'
            };
        },
        components: {
            <!-- 组件 -->
        },
    beforeCreate: function() {
        console.group('beforeCreate 创建前状态===============》');
        // 举个栗子：可以在这加个loading事件 
    },
    created: function() {
        console.group('created 创建完毕状态===============》');
        // 在这结束loading，还做一些初始化，实现函数自执行 
    },
    beforeMount: function() {
        console.group('beforeMount 挂载前状态===============》');
    },
    mounted: function() {
        console.group('mounted 挂载结束状态===============》');
         // 在这发起后端请求，拿回数据，配合路由钩子做一些事情
    },
    beforeUpdate: function() {
        console.group('beforeUpdate 更新前状态===============》');
    },
    updated: function() {
        console.group('updated 更新完成状态===============》');
    },
    beforeDestroy: function() {
        console.group('beforeDestroy 销毁前状态===============》');
        // 你确认删除XX吗？ destroyed ：当前组件已被删除，清空相关内容
    },
    destroyed: function() {
        console.group('destroyed 销毁完成状态===============》');
    }
};
</script>

<style>

</style>
```