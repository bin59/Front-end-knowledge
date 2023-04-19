# vue 面试题

1.详解 30 道 Vue 面试题(建议收藏) [https://mp.weixin.qq.com/s/yUl78yJ-3E9KFx1bWKZzzA]

## 一、基础

### 1. v-if、v-show

v-show 是控制 css 来决定元素的显示
v-if 是控制节点是否存在
使用场景:用在切换频率很高的组件上，用的 v-show 不会引起浏览器的重排

v-if 是真正的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建；也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 的 “display” 属性进行切换。所以，v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景；v-show 则适用于需要非常频繁切换条件的场景。

### 2.为什么组件中的 data 是一个函数呢

因为对象是引用数据类型,保存的是数据的地址，当同一个组件多次调用的时候，如果发生数据的变化,那么多个组件的数据会一起变化，导致数据混乱。

因此我们使用函数，函数会在调用组件的时候，
开辟一个独立作用域来保存数据，每个组件之间不会受影响

### 3.this.$route 和 this. $router 有什么区别?

前者是获取路由信息，后者使用用于跳转的行

### 4.说说你对 SPA 单页面的理解，它的优缺点分别是什么？

SPA（ single-page application ）仅在 Web 页面初始化时加载相应的 HTML、JavaScript 和 CSS。一旦页面加载完成，SPA 不会因为用户的操作而进行页面的重新加载或跳转；取而代之的是利用路由机制实现 HTML 内容的变换，UI 与用户的交互，避免页面的重新加载。优点：

用户体验好、快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染；
基于上面一点，SPA 相对对服务器压力小；
前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理；
缺点：

初次加载耗时多：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面按需加载；
前进后退路由管理：由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理；
SEO 难度较大：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。

### 5.Class 与 Style 如何动态绑定？

Class 可以通过对象语法和数组语法进行动态绑定：

```js
<div v-bind:class="{ active: isActive, 'text-danger': hasError }"></div>

data: {
  isActive: true,
  hasError: false
}
// 或
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>

data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```

Style 也可以通过对象语法和数组语法进行动态绑定：

```js
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

data: {
  activeColor: 'red',
  fontSize: 30
}
// 或

<div v-bind:style="[styleColor, styleSize]"></div>

data: {
  styleColor: {
     color: 'red'
   },
  styleSize:{
     fontSize:'23px'
  }
}
```

### 6.关于 key 值

在用 v-for 更新已渲染的元素列表的时候，会使用就地复用的策略；这就是说列表数据修改的时候，他会根据 key 值去判断某个值是否修改，如果修改了就重新渲染，不然就复用之前的元素。
总结一下，就是通过 key 值来提升渲染的效率。

Vue: v-for 的键值 key:[https://blog.csdn.net/qq_41609404/article/details/84064064]

## 二、进阶

### 1.

### 2.v-model 实现原理

本质：v-bind + @input 实现

@input 监听用户输入内容

:value 动态设置 input 框的 value 值

v-model 是 vue 指令中的语法糖，它的实现原理等同于

@input="ipt=$event.target.value" :value="ipt"

### 3.经典试题：你知道 Vue 中的插槽吗？简述区别

### 4.

### 5.vuex 工作机制

vuex 中会开辟一个空间，就是保存数据的仓库，根据 vue 的原则数据渲染视图，
Action 用户的行为影响仓库的数据时，仓库的数据会影响视图的改变

View  
State 驱动应用的数据源 仓库
Actions 用户行为

### 6.响应式数据

```js
data(){
    return{
        list:[],
        ipt:''
    }
},
method:{
    add(){
        console. log( 'haha')
        this. list. forEach(ele => {
            // ele.count = this.ipt
            this.$set(ele,'count',this.ipt)
            /*
                参数1 追加新属性的对象
                参数2 追加新属性的属性名
                参数3 追加新属性的属性值
                vm.$set() 方法去劫持新数据
            */
        });
        console. log(this.list)
    }
}
```

当我们通过方法去追加 data 的数据的新内容的时候，数据已经更新,但是新数据并没有驱动视图更新渲染

当发现数据没有更新视图--说明这 count 数据并非响应式数据

在 Vue 中，定义响应式数据是在 data,data 这个函数是 会做数据的劫持操作

结论:除了 data 中的数据是具有响应式外，其他地方追加的数据都不是响应式数据

意味着当前的 count 无法更新视图

原理: **data 中的变量会被数据劫持，数据被劫持(收集依赖，添加观察者)才能更新视图**

常见提问:如何让 data 外的数据，变成响应式数据?

解决: **vm.$set() vm 指的是实例 所有格的组件都是实例  this.$set()**

### 7.MVVM 实现原理:

Vue.js 是采用数据劫持结合发布者-订阅者模式的方式，

通过 Object.defineProperty()来劫持各个属性的 setter, getter,

在数据变动时，发布消息分给订阅者，触发响应的监听回调。

### 8.发布订阅模式

### 9.mvvm 的核心?

1.数据驱动视图
答:通过数据劫持+发布订阅模式+观察者模式结合

2.组件化
写业务写组件
问:请你谈谈你对组件的理解?先想想
重点:对 Vue 的熟悉程度，面试官可以通过你对组件的理解侧面反应你涉 Vue 的理解

### 10.组件通讯

父子
非父子$emit + $on Bus
实际 Vuex

### 11.组件内容分发

slot
具名默认作用域
组件做更深入的理解
虚拟 dom
