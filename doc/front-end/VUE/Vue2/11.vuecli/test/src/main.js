import Vue from 'vue'
import App from './App.vue'
import http from './assets/js/http.js'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/*
将http服务放到Vue原型对象上,
每个组件都是Vue的实例
说明每个Vue实例，每个组件都有$http
就可以直接在组件中调用，不需要每个引入
带$说明是自己配封装的，不是官方配置
*/
Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
