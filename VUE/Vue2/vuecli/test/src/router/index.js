import Vue from 'vue'
import VueRouter from 'vue-router'
import HeroDetail from '../components/HeroDetail.vue'
import Nav from '../components/Nav.vue'
import OtherSon from '../components/OtherSon.vue'
import Son from '../components/Son.vue'
import Detail from '../views/Detail.vue'
import Father from '../views/Father.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

// 编写规则 一个页面一个对象
const routes = [
  {
    path: '/',
    alias: '/home', //别名
    name: 'home',
    component: Home,
  },
  {
    path: '/nav',
    name: 'nav',
    component: Nav,
  },
  {
    path: '/aaa',
    redirect: '/', //重定向
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 路由懒加载，属于Vue的性能优化，按需加载，只要当路径访问到当前path相当路径的时候，才会去加载对应的组件
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // component: About 这种写法不管当前组件是否被调用，都会被引入进来,说明项目的体积增大了，增加首页渲染的负担。
    // 实战中除了首页用到的页面之外都采用按需加载的路由配值
  },
  {
    // path: '/detail/:id',// 动态路由传递  /detail/占位符
    path: '/detail/',
    name: 'detail',
    component: Detail,
    // 这里的路由守卫是不需要判断meta ,只需要判断有没有登陆即可
    // beforeEnter(to,from,next){
    //    if(sessionStorage.getItem('isLogin')){
    //      next()
    //    }else{
    //      next('/login?redirect'+to.fullPath)
    //    }

    // }
    // 设置元信息，会在登陆拦截那里用到
    // meta:{
    //   isLogin:true
    // }
  },
  {
    path: '/login/',
    name: 'login',
    component: Login,
  },
  {
    path: '/father',
    name: 'father',
    component: Father,
    children: [
      {
        path: '/father/herodetail/:id',
        name: 'herodetail',
        component: HeroDetail,
      },
      {
        path: '/father/son',
        name: 'son',
        component: Son,
      },
      {
        path: '/father/otherson',
        name: 'otherson',
        component: OtherSon,
      },

      // {
      //   path: '/father/herodetail/:id',
      //   name: 'herodetail',
      //   // component: HeroDetail,
      //   component: () => import('../components/HeroDetail.vue'),
      // },
      // {
      //   path: '/father/son',
      //   name: 'son',
      //   component: () => import('../comoonents/Son.vue'),
      // },
      // {
      //   path: '/father/otherson',
      //   name: 'otherson',
      //   component: () => import('../comoonents/OtherSon.vue'),
      // },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

// 重复点击按钮的时候不报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 这里是编写全局的路由拦截器的位置
// router.beforeEach((to, from, next) => {
/*
    to即将到达的路由
    from将要离开的路由
    next相当push帮助我们跳转

    在判断有没有登陆之前，还需要一层判断,
    判断当前页面是否需要拦截(设置路由元信息)

    a =>判断登录 =>b
          ||
          登录

    第一层判断:判断页面是否需要拦截
    判断每个路由规则是否带有路由元信息 detail
  */
//  console.log(to,'');
//  console.log(from,'');
//  if(to.meta.isLogin){
//    // 说明页面需要拦截
//   //  第二层:判断用户有没有登陆
//   if(sessionStorage.getItem('isLogin')){
//     // 用户已经登陆  正常跳转
//     next()
//   }else{
//     // 跳转到登陆页，让用户登陆
//     // 为了让我们可以登陆之后依旧实现原本的跳转目的地的效果
//     next('/login?redirect'+to.fullPath)

//   }
//  }else{
//   //  正常跳转
//   next()
//  }

// })

export default router
