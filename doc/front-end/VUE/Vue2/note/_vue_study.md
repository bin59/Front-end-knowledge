<details markdown="1">
  <summary>目录</summary>
- [Vue](#vue)
  - [1 Vue 核心:](#1-vue-核心)
  - [2 常用指令](#2-常用指令)
  - [3 操作样式](#3-操作样式)
  - [4 事件绑定](#4-事件绑定)
  - [5 vue 表单操作](#5-vue-表单操作)
  - [6 v-model 的实现原理](#6-v-model-的实现原理)
    - [6.1 计算属性](#61-计算属性)
  - [7 组件的定义与注册](#7-组件的定义与注册)
    - [7.1 组件的切换](#71-组件的切换)
  - [8、组件](#8组件)
    - [8.1 父子组件通讯\_Tab](#81-父子组件通讯_tab)
    - [8.2 兄弟组件通讯](#82-兄弟组件通讯)
    - [8.3 插 slot 槽](#83-插-slot-槽)
    - [8.4 v-model 在组件中的使用](#84-v-model-在组件中的使用)
  - [9 生命周期函数](#9-生命周期函数)
  - [10 Vue 的函数式组件](#10-vue-的函数式组件)
    - [10.1 render 函数的妙用](#101-render-函数的妙用)

</details>

# Vue

<a id=1>

## 1 Vue 核心:

1 1.数据驱动视图 和 数据双向选择绑定

数据驱动视图:不再需要考虑 dom 节点的渲染，只关注数据 data 的变化

数据双向选择绑定:经典例子 v-model

2.组件化

功能:多次调用，将重复内容封装到-一个组件中，在不同的页面中使用。

## 2 常用指令

v-if 条件渲染 true 显示 false 隐藏
v-if\else 中间不要穿插其他内容 ,会有警告
除了可以设置 ture 或 falsel 以后，还可以写条件表达式

<div v-if='1==1'>你可以看到我</div>
<div v-else>你可以看到我</div>

v-show 更 v-if 很像  
 v-show 是控制 css 来决定元素的显示
v-if 是控制节点是否存在
使用场景:用在切换频率很高的组件上，用的 v-show 不会引起浏览器的重排

不推荐 v-for 和 v-if 一起使用

```js
<div v-for="item in obj2" v-if="item.age>20">
  {{ item }}
</div>
```

如何做这种数据的过滤呢?
计算属性:
step1:先在写 computed 属性
step2:添加一个函数,一定要带返回值，这个返回将来会显示在页面中
step3:回到视图，在双胡子模版语法写这个函数名
最终就会显示这个函数的返回值 I

补充:功能: 1. 过滤的操作 2.计算属性是具有缓存性

```js
<div>age大于20的 :{{newData}}</div><br>

<p>简单的模板字符串：{{firstname+lastname}}</p>
<p>计算属性完成：{{fullName}}</p>
```

上面两个实现的效果都是在页面渲染字符串 alex,但是他们底层运行原理不一样。

上者:页面每次加载都需要运行这个 + (拼接)的操作，浏览器就需要时间去操作,

下者:是通过计算属性完成拼接操作, 只会运行一次，具有缓存性,刷新之后，只要 firstname 或者 lastName 不变化，都不会再此执行这个拼接操作

```js
data:{
     firstname:'al',
     lastname:'ex'
},
computed: {
    newData(){
        return this.obj2.filter(val=>val.age>20)[0].name
    },
    fullName(){
        return this.firstname+this.lastname
    }
}
```

<a id=3>

## 3 操作样式

style 行内(面试) class 类型 (经常用)

```js
<div class="box" v-bind:style="styleObj">
    今晚吃吃鸡
</div>
<!-- 第一种：对象设置法，控制class是否存在,true-存在，false-不存在 -->
<div class="box" v-bind:class='classObj'>
    对象设置法
</div>
<!-- 第二种 数组设置法-->
<div class="box" v-bind:class='classArr'>
    数组设置法
</div>
<!-- 第三种 数组对象混合设置 -->
<div class="box" v-bind:class='classArr'>
    数组对象混合设置
</div>
<!-- 第四种 字符设置法 -->
<div class="box" v-bind:class='classStr'>
    字符设置法
</div>



 let vm = new Vue({
    el:'#app',
    data:{
        styleObj:{fontSize:'30px','width':'500px'},
        classObj:{active:true},
        classArr:['active','big'],
        classAO:['big',{active:false}],
        classStr:'big active'
    }
})
```

<a id=4>

## 4 事件绑定

不推荐 v-on:click='直接写 js 操作',

应该这样写 v-on:click=‘事件处理函数名’，一定要放在 methods 中

关于事件对象的获取，需要分情况: 1.如果事件处理函数没有参数的传递，直接在函数的定义中设置参数 e,即可获取 2.如果事件处理函数中涉及参数的传递，多设置一个$event 的参数进行传递即可

```js
<button @click='handler(1,$event)'>点击</button>{{count}}

methods: {
    handler(i,e){
            this.count++
            console.log(i,e);
    },
   ......
    keyUp(e){
        console.log(e.target.value);
        this.ipt=e.target.value
    }
}

```

'v-on:'的简写 '@'
'v-bind:' 的简写 ':' 如，:class

事件修饰符
.stop
.prevent
.capture
.self
.once
.passive

如下点击 son，baba 也会触发,加修饰符就可以阻止

```js
<div class="baba" @click='babaHandler'>
    <div class="son" @click.stop='sonHandler'></div>
</div>

```

keyup
一些常用的按键
.enter
.tab
.delete (捕获“删除”和“退格”键)
.esc
.space
.up
.down
.left
.right

```js
<input type="text" v-model='ipt'  @keyup.enter="keyUp">{{ipt}}
```

<a id=5>

## 5 vue 表单操作

v-model 主要作用:用在表单操作上，实现数据的双向绑定
使用:在 ipt 上使用，v-model="变量'，data 中声明

V- -model : 1.在表单上的基础使用 2. v-mode1 的实现原理 3. v-model 在组件上的使用(放到组件后讲)

```js
 <!-- 单行表单 -->
<input type="text" v-model='ipt'>
{{ipt}}
<!-- 多行文本 -->
<textarea name="" id="" cols="30" rows="10" v-model='areaipt'></textarea>
{{areaipt}}

<!-- 多选框 -->
<h3>选择你的喜欢</h3>
<span v-for='item in food'>
    {{item}}
    <input type="checkbox" :value='item' v-model='checkedFood'>
</span>
<h3>已选择</h3>
<span v-for="item in checkedFood">
    {{item}}
</span>

<!-- 单选框 radio-->
<h3>性别</h3>
<span v-for='item in gender'>
    {{item}}
    <input type="radio" :value='item' v-model='chooseGender'>
</span>
<p>{{chooseGender}}</p>

<!-- 下拉框 -->
<select name="" id="" v-model='chooseCity'>
    <option value="">请选择</option>
    <option v-for='item in city' :value="item" >
        {{item}}
    </option>
</select>
<p>{{chooseCity}}</p>



let vm = new Vue({
    el:'#app',
    data:{
        ipt:'',
        areaipt:'',
        food:['口水鸡','叫花鸡','炸鸡'],
        checkedFood:[],
        gender:['男','女','不详'],
        chooseGender:'',
        city:['1','2','3'],
        chooseCity:''
    }
})
```

<a id=6>

## 6 v-model 的实现原理

v-model 实现原理:
本质：v-bind + @input 实现

    @input监听用户输入内容
    :value动态设置input框的value值

v-model 是 vue 指令中的语法糖，
它的实现原理等同于 @input="ipt=$event.target.value" :value="ipt"

```js
<input type="text" v-model='ipt'>
// 相当于

<input type="text" @input='handler' :value='ipt'>
// 或
<input type="text" @input='ipt=$event.target.value' :value='ipt'>
<p>{{ipt}}</p>

 let vm = new Vue({
    el:'#app',
    data:{
        ipt:""
    },
    methods: {
        // handler(e){
        //     console.log(e.target.value);
        //     this.ipt=e.target.value
        // }
    }
})
```

### 6.1 计算属性

```html
<div id="app">
  <!-- 用户输入内容 -->
  <!-- trim 自动过滤输入内容最开始  和 最后的 空格，中间的会保留一个空格，多的会被过滤掉 -->
  <input type="text" v-model.trim="ipt" @keyup.enter="handlerIpt" />

  <!-- 渲染用户内容 -->
  <!-- 渲染未完成 arr-->
  <h2>未完成的事情</h2>
  <div v-for="item in unfinishlist">
    <input type="checkbox" @click.prevent="handlerCheck(item)" />
    {{item.contents}}
    <button @click="del(item)">删除</button>
  </div>

  <!-- 渲染已完成 arr1-->
  <h2>已完成的事情</h2>
  <div v-for="item in finishlist">
    <input type="checkbox" checked @click.prevent="handlerCheck(item)" />
    {{item.contents}}
    <button @click="del(item)">删除</button>
  </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
  let vm = new Vue({
    el: '#app',
    data: {
      ipt: '',
      list: [
        {
          id: 0,
          contents: '吃饭',
          isChecked: false,
        },
      ],
    },
    computed: {
      unfinishlist() {
        return this.list.filter(ele => ele.isChecked === false)
      },
      finishlist() {
        return this.list.filter(ele => ele.isChecked === true)
      },
    },
    methods: {
      handlerIpt() {
        if (this.ipt == '') return
        this.list.push({
          id: this.list.length,
          contents: this.ipt,
          isChecked: false,
        })
        this.ipt = ''
      },
      handlerCheck(item) {
        this.list[item.id].isChecked = !item.isChecked
      },
      del(item) {
        this.list.splice(item.id, 1)
        //因为删除之后，id是不会动态的变化
        //重新排序，给id动态赋值，为了后续删除
        this.list.forEach((ele, index) => {
          ele.id = index
        })
      },
    },
  })
</script>
```

## 7 组件的定义与注册

组件`Component`是 Vue.js 最强大的功能之一。
组件可以扩展 HTML 元素，封装可重用的代码。

模块化和组件化的区别

- 模块化：是从代码逻辑的角度进行划分的；方便代码分层开发，保证每个功能模块的职能单一
- 组件化：是从 UI 界面的角度进行划分的；前端的组件化，方便 UI 组件的重用

例如：选项卡
在同一个项目中，不同的页面都有选项卡的功能，只是数据不一样而已

特点：可以多次调用，维护性高

如何在 Vue 中使用组件
1、定义组件
全局定义

            Vue.component ('',{}) 定义 +注册
        局部定义
            使用components定义私有组件
            在Vue外定义好了组件的配置,如:let mojito = {填写配置}
    2、注册组件
        全局定义
            在Vue的配置对象中的componets属性中注册组件
    3、调用组件
        在视图上调用即可

```html
<!-- 定义组件的模板 -->
<template id="myAccount">
  <div>
    <div v-for="item in arr" v-if="isShow">{{msg}}{{item}}</div>
  </div>
</template>
<template id="mojito">
  <div>{{name}}</div>
</template>
<template id="loginTmp">
  <h3>这是私有的login组件</h3>
</template>
<div id="app">
  <!-- 调用组件 -->
  <alex></alex>
  <!-- 如果在注册私有组件时，组件的名称是驼峰命名
    那么，在标签中使用组件时，需要把大写的驼峰改为小写的字母，同时两个单词之间使用`-`进行连接 -->
  <mo-jito></mo-jito>
  <ha-haha></ha-haha>
  <mylogin></mylogin>
</div>
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
  /*
        1、全局定义 Vue.component ('',{})

        Vue.component(参数1，参数2)
        参数1:定义当前组件的名称，将来在视图上使用的
        参数2:定义这个组件的配置，是-个对象。
            对象中有若干个参数，都是用来描述当前组件的一些内容。
                如：
                template:描述当前组件在视图中渲染的标签
                    在这个属性中所有的vue的规则都是正常识别的
                    要求  template的根节点只能是一个
                data:是一个函数，还必须返回一个对象才行,用来定义组件中用到的数据

                经典面试：为什么组件中的data是一个函数呢

                因为对象是引用数据类型,保存的是数据的地址，当同一个组件多次调用的时候，如果发生数据的变化,
                那么多个组件的数据会一起变化，导致数据混乱。

                因此我们使用函数，函数会在调用组件的时候，
                开辟一个独立作用域来保存数据，让每个组件都有自己独立的数据存储,每个组件之间不会受影响

    */
  Vue.component('alex', {
    // 一定要用一个大的根元素（例如`<div>`）包裹起来。
    // template:`<div>
    //             <div v-for='item in arr' v-if='isShow'>{{msg}}{{item}}</div>
    //         </div>`,

    // 还可以把模板的定义存放在`<template>`标签中
    template: '#myAccount',
    data() {
      return {
        msg: 'hello',
        isShow: true,
        arr: [1, 2, 3],
      }
    },
  })

  // 2、局部定义
  // 写法一
  let moJito = {
    // template:`<div>{{name}}</div>`,
    template: '#mojito',
    data() {
      return {
        name: 'mojito',
      }
    },
  }

  let vm = new Vue({
    el: '#app',

    components: {
      // es6：key和value相同，可简写  moJito：moJito  =>  moJito
      moJito,
      //（左边）用在视图上的组件名:（右边）组件的配置信息
      haHaha: moJito,

      // 写法二
      mylogin: {
        template: '#loginTmp',
      },
    },
  })
</script>
```

### 7.1 组件的切换

<!-- 代码举例：（登录组件/注册组件，二选一） -->

```html
 <style>
        .v-enter,
        .v-leave-to {
            opacity: 0;
            transform: translateX(150px);
        }

        .v-enter-active,
        .v-leave-active {
            transition: all 0.5s ease;
        }
    </style>
</head>
<body>
    <div id="app">
        <!-- 一、使用v-if和v-else结合flag进行切换 -->
        <!-- `.prevent`可以阻止超链接的默认事件 -->
        <a href="" @click.prevent="flag=true">登录</a>
        <a href="" @click.prevent="flag=false">注册</a>
        <login v-if="flag"></login>
        <register v-else="flag"></register>


        <!-- 二、使用Vue提供的`<component>`标签实现组件切换 -->
        <!-- component 占位符 ,  `:is` 属性-指定要展示的组件名称。
            给is属性值设置为变量即可切换组件，变量值为组件名称
         -->
        <!-- 点击按钮后，设置变量`comName`为不同的值，代表着后面的component里显示不同的组件 -->
        <a href="" @click.prevent="comName='login'">登录</a>
        <a href="" @click.prevent="comName='register'">注册</a>
        <component :is="comName"></component>

         <!-- 通过 mode 属性,设置组件切换时候的 过渡动画 如： mode="out-in"-->
        <transition mode="out-in">
            <component :is="comName"></component>
        </transition>

    </div>
    <script>
        Vue.component('login', {
            template: '<h3>登录组件</h3>'
        })

        Vue.component('register', {
            template: '<h3>注册组件</h3>'
        })

        // 创建 Vue 实例，得到 ViewModel
        var vm = new Vue({
            el: '#app',
            data: {
                flag: false,
                comName:'login'// 当前 component中的 :is 绑定的组件的名称
            },
            methods: {}
        });
    </script>
</body>

```

## 8、组件

在 Vue 的日常开发过程中，组件的开发是必不可少的环节,

在某程度上我们应当对组件的编写要有一定的追求,

最终目的:无状态状态组件（状态:数据=>data）这个组件的数据是完全依赖

props 或者通过 slot（插槽，内容分发）进行传递

结构也是动态

组件编写越通用，你的组件就越好

**函数式组件:**

定义:没有状态，没有生命周期，没有 this 实例，就可以将这个组件标记为

functiona 1 组件(函数式组件)，改造完之后没有模版

才能去吧组件改造成这种函数式组件

**为什么用它?**

性能在 Vue 就最优解

1.没有状态，没有生命周期就不许开辟内存

2. Vue 内部不需要花事件处理视图内容

这种函数式组件，定义或者使用等等都比原本组件要复杂得多
为什么 Vue 引入?

最关键，最重要的指标:速度! ! !
前端主要考虑用户的交互

### 8.1 父子组件通讯\_Tab

组件通讯:
1 父子通讯
使用场景:通常只用在一层
优点:设置简单，逻辑清晰。
缺点:当父子层级多层，变得非常复杂
实现核心: 1.父传子 v-bind 实现 2.子传父 this.$emit 事件派发实现

2 非父子通讯
使用场景:当出现多层组件需要数据交互的时候
实现的核心:两个 Vue 的核心 api 和主线 Bus（本质是一个 Vue 的实例对象）
$emit() 事件派发
$on() 事件监听

```html
<div id="app">
  <btns @gotobaba="handlerIndex"></btns>
  <!-- btns中的数据index传递给app,因为btns 和app 他们是父子 
    子向父传递数据 index -->
  <contents :ids="index"></contents>
  <!-- 父向子传递数据 index -->
  <!-- index =1 -->
</div>
<script>
  let btns = {
      template:`
              <div>
                  <div v-for="(ele,index) in title" class="btn" >
                      <button @click="hanlder(index)">{{ele.item}}</button>
                  </div>
              </div>
                  `,
      data(){
          return{title:[{item:'html'},{item:'css'}, {item:'js'}{item:'vuejs'}]}
      },
      methods:{
          hanlder(index){
              //this.$emit(事件名称，数据数据)
              //事件派发
              this.$emit('gotobaba',index)
          }
      }
  }
  let contents = {
      // props用来声明变量
      // props中设置的名称，一定要和等号左边的名称相同
      // 已经变成了当前组件的一个可以使用的变量
      props:['ids'],
      template:`
                  <div>
                      <div v-for="(ele,index) in contents"
                          class="contents"
                          v-bind:class="{active:index==ids}">
                          {{ele.item}}
                      </div>
                  </div>
                  `,
      data(){
          return{
              contents:[{item:'html-contents'},{item:'css-contents'},{item:'js-contents'},{item:'vuejs-contents'}]}
      },
      created(){
          console.log(this.ids)
      }
  }
  let vm = new Vue({
      el:'#app',
      data:{
          index:0
      },
      components:{
          btns,
          contents
      },
      methods:{
          handlerIndex(data){
              console.log(data,'下标')
              this.index = data
          }
      }
  })
</script>
```

### 8.2 兄弟组件通讯

非父子通讯
使用场景:当出现多层组件需要数据交互的时候
实现的核心:两个 Vue 的核心 api 和主线 Bus（本质是一个 Vue 的实例对象）
$emit() 事件派发
$on() 事件监听

发布-订阅模式 是一个设计模式，讲 Vue 原理的时候用到

```HTML
<div id="app">
    <bluej></bluej>
    <yonghu></yonghu>
    <alex></alex>
</div>
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>

    let bluej={
        template:`<div>
                        bluej公众号
                        <button @click='publish'>发布文章</button>
                    </div>`,

        methods: {
            publish(){
                // 发布文章
                bus.$emit('msg','今天周六')
            }
        }
    }
    let yonghu = {
        template:`<div>普通用户
                    <button @click='look'>关注bluej</button>
                </div>`,
        created(){
            // 生命周期函数   自动执行的函数
            // 调用组件的时候，生命周期函数会自动执行
            // create其中的一个函数
            console.log('yonghu组件的created的生命周期函数');
            bus.$on('msg',(data)=>{
                console.log('当有msg事件时触发的cb',data,'yonghu');
            })
        },
        methods: {
            look(){
                console.log('yonghu');
            }
        }
    }
    let alex = {
        template:`<div>
            alex用户
            <button @click='look'>关注bluej</button>
            </div>`,
        methods: {
            look(){
                console.log('alex');
                bus.$on('msg',(data)=>{
                console.log('当有msg事件时触发的cb',data,'alex');
            })
            }
        }
    }
    let bus = new Vue()
    let vm = new Vue({
        el:'#app',
        components: {
            bluej,
            alex,
            yonghu
        }
    })
</script>
```

### 8.3 插 slot 槽

```html
<body>
  <!-- 
        默认插槽 具名插槽 作用域插槽
        经典试题：你知道Vue中的插槽吗？简述区别

        1、默认插槽
        作用：让开发者在组件中可以插入使用（显示内容），让组件更加灵活、自定义
        步骤：
            挖坑
                在组件中写一个slot标签，在组件中挖好了坑，等待填坑
            填坑
                在对应的视图组件双标签的内部，编写
                <template v-slot>
                这里编写的内容就是组件中显示的内容
                </template>

        2.具名插槽
        step1 依照默认插槽的操作方式
        step2 在组件中需要给
            <slot name= ="boy"></slot>
            给坑取名字.
        step3 在视图中设置v-slot:boy实现一个萝卜一个坑。

        3、作用域插槽
        step1在组件中绑定一个数据
            <slot :名称="数据"></slot>
        step2在视图中，编写
            <template slot-scope="props">
                {{props.名称}}
            </template>
            最终视图会显示“数据”的内容

    -->
  <div id="app">
    <alex>
      <!-- 1、默认插槽 -->
      <!-- <template v-slot>
                1、默认插槽
            </template> -->
      <!-- 2.具名插槽 -->
      <!-- 男孩插槽 -->
      <!-- <template v-slot:boy>
                2.具名插槽-boy
            </template> -->
      <!-- 女孩插槽 -->
      <!-- <template v-slot:girl>
                2.具名插槽-girl
            </template> -->
      <!-- 3.作用域插槽 -->
      <template slot-scope="props"> 3.作用域插槽 {{props.item}} </template>
    </alex>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  <script>
    Vue.component('alex', {
      // 1、默认插槽
      // template:`<div>
      //             <h3>
      //                 <slot></slot>
      //             </h3>
      //         </div>`,
      // 2.具名插槽
      // template:`<div>
      //             <h3>
      //                 <slot name='boy'></slot>
      //             </h3>
      //             <div>
      //                 <slot name='girl'></slot>
      //             </div>
      //         </div>`,
      // 3、作用域插槽
      template: `<div>
                        <h3>
                            <slot :item=15></slot>
                        </h3>
                    </div>`,
    })
    let vm = new Vue({
      el: '#app',
    })
  </script>
</body>
```

### 8.4 v-model 在组件中的使用

```html
<body>
  <!-- 在组件中使用v-model，可以帮助我们将组件中需要双向绑定的数据如这里的ipt，
    将组件中定义ipt 提取到全局data，此时组件中的ipt就不用声明了。 -->
  <div id="app">
    <demo v-model="ipt"></demo>
    <!-- <demo :value="ipt" @input="ipt=$event"></demo> -->
    <!-- :value="ipt"  给demo组件传递了value 数值是ipt
       @input="ipt=$event"  给demo组件设置了一个监听@input事件 -->
    {{ipt}}
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  <script>
    let demo = {
      props: ['value'], //1
      template: `
        <input type="text" 
          :value="value"
          @input="$emit('input',$event.target.value)"/>
      `,
      // data(){
      //         ipt:''
      // }
    }
    let vm = new Vue({
      el: '#app',
      components: {
        demo,
      },
      data: {
        ipt: '1',
      },
    })
  </script>
</body>
```

## 9 生命周期函数

生命周期函数，就是自动执行的函数，在不同的阶段会自动执行某些函数。
Vue 的生命的执行顺序
分三大阶段：
1、初始化阶段
beforeCreate
*created (常用)
beforeMount
*mounted (常用)

        为什么Vue的生命周期中需要分渲染前后?
        答: Vue是利用虚拟dom去渲染页面，(特点 :批量处理,异步) .
        beforeMount主要作用不是去渲染页面，收集节点关系和数据，丢到内存中处理
        mounted通过Fragument批量的去做渲染真实dom

        数据修改大多数是同步操作，Fragument 批量处理是异步操作
        数据全部修改完毕之后，一次性渲染页面，避免之前无用的dom操作

    2、数据更新阶段
        beforeUpdate
        updated

        当Vue的响应式数据发生变化的时候，就会触发

    3、销毁阶段
        beforeDestory
        bestoryed

        作用:清除定时器，清除事件监听等等的操作

        只有在关闭浏览器的时候触发，很难看到效果
        基本不会在全局的生命周期中使用，常用在组件的生命周期
        (全局的生命周期，指的是Vue的根节点app的生命周期)

组件的生命周期：和全局的生命周期一样

当我们引入并调用组件的时候, 进入到组件的生命周期函数，也同样经历
了上述的三大阶段 1.初始化 2.数据更新 3.销毁

当生命周期遇到父子组件的时候，注意他们的执行顺序?
他们的初始化阶段如下：
beforeCreate
created
beforeMount
demo 的 beforeCreate
demo 的 created
demo 的 beforeMount
demo 的 mounted
mounted
注意：
1、如果涉及 ajax 的返回值传递到组件的时候，-定要注意生命周期的选择
2、当 Vue 的数据发生变化的时候，父子组件的 update 阶段生命周期函数，是如何执行的?
如果父子组件共享了某个数据,并且数据发生改变的时候，
他们的更新阶段的生命周期函数执行如下:
爸爸 beforeUpdate
beforeUpdate
updated
爸爸 updated

小总结：1、能够描述出 Vue 有多少个生命周期，并且每个生命周期的作用?
2、父子间生命周期的执行顺序又是什么?
3、为什么 Vue 的生命周期中需要分渲染前后?

```html
<div id="app">
  <div class="demo">小龙虾</div>
  {{msg}}
  <demo v-if="isShow" :msg="msg"></demo>
</div>
<script src="./vue.js"></script>
<script>
  Vue.component('demo', {
    props: ['msg'],
    template: `<div>aaa</div>`,
    data() {
      return {
        age: 18,
        count: 0,
        Timer: null,
      }
    },
    beforeCreate() {
      console.log('demo的beforeCreate')
      // 这里只是演示，实战不到万不可以不要写DOM操作
      // let demo = document.querySelector('.demo')
      // console.log(demo)
      // demo.innerHTML='皮皮虾'
      // console.log(this)
      // console.log(this.msg)//undefined
      /*
                模版已经被编译,节点可以获取，但是
                无法获取Vue中的数据，因为数据data还没有注入到Vue中,
                说明此时的数据并非响应式(数据驱动)
                作用：1.绝对不再这里操作数据
                    2.在这个地方做一些初始化的工作:如，第三方插件
                这里常写一些插件的准备工作
                不常用
            */
    },
    created() {
      console.log('demo的created')
      // console.log(this.msg)//hello
      /*
                能够访问data中变量，说明当前的数据是响应式
                并且这里是最快能够拿到Vue的响应式数据的生命周期
                因此我们会在这个地方去做ajax请求， 然后做数据渲染的工作。
                比如、页面的请求都是在这里做

            */
      // this.Timer = setInterval(()=>{
      //     this.count++
      //     console.log(this.count);
      // },1000)
    },
    beforeMount() {
      // 渲染前
      console.log('demo的beforeMount')
      // let demo = document.querySelector('.demo')
      // console.log(demo)
      // demo.innerHTML='帝王蟹'
      // console.log(demo)
      /*
                能够获取DOM节点，但是不能在这里左dom操作（做了没效果）
                作用：处理一些数据（不常用）
            */
    },
    mounted() {
      // 渲染后
      console.log('demo的mounted')
      // let demo = document.querySelector('.demo')
      // console.log(demo)
      // demo.innerHTML='帝王蟹'
      // console.log(demo)
      /*
                作用：1、可以做DOM操作，
                    2、ajax请求，进行页面数据的操作
            */
      setTimeout(() => {
        this.msg = '哈哈'
      })
    },
    beforeUpdate() {
      console.log('demo的beforeUpdate')
    },
    updated() {
      console.log('demo的updated')
    },
    beforeDestory() {
      console.log('demo的beforeDestory')
      this.Timer
    },
    destoryed() {
      console.log('demo的destoryed')
    },
  })
  let vm = new Vue({
    el: '#app',
    data: {
      msg: 'hello',
      isShow: true,
    },
    beforeCreate() {
      console.log('beforeCreate')
      //     // 这里只是演示，实战不到万不可以不要写DOM操作
      //     let demo = document.querySelector('.demo')
      //     console.log(demo)
      //     demo.innerHTML='皮皮虾'
      //     console.log(this)
      //     console.log(this.msg)//undefined
      //     /*
      //         模版已经被编译,节点可以获取，但是
      //         无法获取Vue中的数据，因为数据data还没有注入到Vue中,
      //         说明此时的数据并非响应式(数据驱动)
      //         作用：1.绝对不再这里操作数据
      //             2.在这个地方做一些初始化的工作:如，第三方插件
      //         这里常写一些插件的准备工作
      //         不常用
      //     */
    },
    created() {
      console.log('created')
      //     console.log(this.msg)//hello
      //     /*
      //         能够访问data中变量，说明当前的数据是响应式
      //         并且这里是最快能够拿到Vue的响应式数据的生命周期
      //         因此我们会在这个地方去做ajax请求， 然后做数据渲染的工作。
      //         比如、页面的请求都是在这里做

      //     */
    },
    beforeMount() {
      // 渲染前
      console.log('beforeMount')
      //     let demo = document.querySelector('.demo')
      //     console.log(demo)
      //     demo.innerHTML='帝王蟹'
      //     console.log(demo)
      //     /*
      //         能够获取DOM节点，但是不能在这里左dom操作（做了没效果）
      //         作用：处理一些数据（不常用）
      //     */
    },
    mounted() {
      // 渲染后
      console.log('mounted')
      //     let demo = document.querySelector('.demo')
      //     console.log(demo)
      //     demo.innerHTML='帝王蟹'
      //     console.log(demo)
      //     /*
      //         作用：1、可以做DOM操作，
      //             2、ajax请求，进行页面数据的操作
      //     */
    },
    beforeUpdate() {
      console.log('beforeUpdate')
    },
    updated() {
      console.log('updated')
    },
    // beforeDestory(){
    //     console.log('beforeDestory')
    // },
    // destoryed(){
    //     console.log('destoryed')
    // }
  })
</script>
```

## 10 Vue 的函数式组件

```html
<div id="app">
  <demo :list="list"></demo>
  <demo1 :list="list"></demo1>
</div>
<script src="./vue.js"></script>
<script>
  // 函数式组件写法一
  Vue.component('demo', {
    functional: true,
    props: ['list'],
    // 开启functional，template失效,使用render代替
    render(createElement, content) {
      console.log(this.list) //undefined
      // 没有this，用content指上下文
      // 简单理解:指的是当前Vue的demo组件所有的内容
      console.log(content) //FunctionalRenderContext{}
      console.log(content.props.list) //['alex', 'jimmy', 'tommy', __ob__: Observer]

      /*  
                创建节点
                参数1渲染的节点
                参数2是一个对象，用来面熟这个节点属性，可以不写，推荐{}
                参数3填写参数1子节点，如果是字符串, 代表文本节点，如果参数1这个节点中嵌套很多的子节点
                需要写成数组的形式。
                    注意: 数组里面的节点都需要通过createElement这个方法来创建
            */
      // return createElement('h1',{attrs:{class:'demo'}},[
      //     createElement('div',{},'alex'),
      //     createElement('div',{},'小黑')
      // ])
      return createElement(
        'h1',
        { attrs: { class: 'demo' } },
        content.props.list.map(name => {
          return createElement(
            'div',
            {
              on: {
                click: () => {
                  console.log(name)
                },
              },
            },
            `${name}`
          )
        })
      )
    },
  })

  // 函数式组件写法二:通过是用render函数去渲染结构，比上面的写法做了小小的改进(有了this)
  Vue.component('demo1', {
    // 注意两点: 1. functional:true,不需要设置
    // 2. rende r函数传递的参数createElement , content只需传递 h函数
    props: ['list'],
    render(h) {
      console.log(this.list) //['alex', 'jimmy', 'tommy', __ob__: Observer]
      return h('h2', { attrs: { class: 'demo' } }, '小黑')
    },
  })

  let vm = new Vue({
    el: '#app',
    data: {
      list: ['alex', 'jimmy', 'tommy'],
    },
  })
</script>
```

### 10.1 render 函数的妙用

1-7 决定了当前 msg 显示加粗程度:

有一个组件 demo : level="3"

```html
<div id="app">
  <input type="text" v-model="ipt" />
  <demo :level="ipt">
    <template v-slot> 今晚吃小龙虾 </template>
  </demo>
</div>
<script src="./vue.js"></script>
<script>
  Vue.component('demo', {
    props: ['level'],
    render(h) {
      let a = 'h' + this.level
      !this.level && (a = 'h6')
      // return h(a,{},[h('slot')])
      // this.$slots.default获取slot
      return h(a, {}, this.$slots.default)
    },
  })
  let vm = new Vue({
    el: '#app',
    data: {
      ipt: '',
    },
  })
</script>
```

###

对于模板语法（差值表达式）{{}} 为什么会这样显示

因为在 Vue 的内部中有一个方法，专门来处理模版语法.
所有的 v-指令，浏览器不认识
明显 Vue 的内部也存在一个方法，解析 Vue 指令

compiler 编译模板
解析 Vue 视图中，浏览器不能识别的内容，如{{}}和各类 Vue 指令
