import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { defaultTheme } from 'vuepress'
export default {
  lang: 'zh-CN',
  title: '晚霞的前端学习之路',
  description: '欢迎来到晚霞的前端学习知识库！',
  theme: defaultTheme({
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '前端开发必备网站',
        link: '/前端开发必备网站.md',
      },

      {
        text: 'HTML、CSS',
        link: '/HTML、CSS',
      },
      {
        text: 'JavaScript',
        children: [
          {
            text: 'JavaScript介绍',
            link: '/JavaScript/JavaScript介绍.md',
          },
          {
            text: '2.变量',
            link: '/',
          },
          {
            text: '3.数据类型',
            link: '/',
          },
          {
            text: '4.运算符',
            link: '/',
          },
          {
            text: '5.流程控制',
            link: '/',
          },
          {
            text: '6.javascript系统对象',
            link: '/JavaScript//javascript系统对象.md',
          },
          {
            text: '7.js预编译',
            link: '/',
          },

          {
            text: '8.堆、栈、深浅拷贝',
            link: '/',
          },
          {
            text: '9.元素的位置坐标',
            link: '/',
          },
          {
            text: '10.josn',
            link: '/JavaScript/10.josn/14.json.html',
          },
          {
            text: '11.浏览器存储',
            link: '/JavaScript/11.浏览器存储/cookie/cookie.html',
          },
          {
            text: '12.懒加载、预加载',
            link: '/JavaScript/12.懒加载、预加载/懒加载.html',
          },
          {
            text: ' 13.异步编程',
            link: '/JavaScript/12.懒加载、预加载/懒加载.html',
            /* 
           1.事件循环(event_loop)
             线程机制与事件机制
          2.异步编程，宏、微任务任务
          3.ajax、fetch、axios
              1.ajax
                      3.packPageAjax
              2.fetch
                  4.跨域
          4.Promise
            2、Promise封装AJAX
                promise源码
         5.ES7_Async_Await函数
          */
          },
          {
            text: '14.try_catch语句',
            link: '/JavaScript/14.try_catch语句/try_catch语句.md',
          },
        ],
      },
      {
        text: 'ECMAScript',
        link: '/ECMAScript/1.ECMAScript简介.md',
      },
      {
        text: 'TypeScript',
        children: [
          {
            text: 'TypeScript',
            link: '/TypeScript/TypeScript.md',
          },
        ],
      },
      {
        text: 'VUE',
        children: [
          {
            text: 'Vue2',
            link: '/VUE/Vue2/vue2学习.md',
          },
          {
            text: 'Vue3',
            link: '/VUE/Vue3/1.认识Vue3.md',
          },
          {
            text: 'Vue2和Vue3的区别',
            link: '/VUE/Vue2和Vue3的区别.md',
          },
        ],
      },
      {
        text: 'NodoJs',
        children: [
          {
            text: 'NodeJs简介',
            link: '/NodeJs/NodeJs.md',
          },
        ],
      },
      {
        text: 'webpack',
        children: [
          {
            text: 'webpack简介及快速上手',
            link: '/webpack/webpack简介及快速上手.md',
          },
        ],
      },
      {
        text: '小程序',
        children: [
          {
            text: '小程序',
            link: '/小程序/小程序.md',
          },
        ],
      },
      {
        text: '优化',
        children: [
          {
            text: 'html、css优化',
            link: '/优化/html、css优化/html、css优化.md',
          },
          {
            text: 'JavaScript优化',
            link: '/优化/JavaScript优化/JavaScript优化.md',
          },
          {
            text: 'vue优化',
            link: '/优化/vue优化/vue优化.md',
          },
          {
            text: '加载优化',
            link: '/优化/加载优化.md',
          },
        ],
      },

      {
        text: '前端工具',
        children: [
          {
            text: 'npm',
            link: '/tools/npm/npm.md',
          },
          {
            text: 'pnpm',
            link: '/tools/pnpm/pnpm.md',
          },
          {
            text: 'yarn',
            link: '/tools/yarn/yarn.md',
          },
          {
            text: 'nvm',
            link: '/tools/nvm/nvm.md',
          },
          {
            text: 'Scss',
            link: '/tools/Scss/Scss.md',
          },
        ],
      },
      {
        text: '浏览器',
        children: [
          {
            text: '浏览器渲染机制',
            link: '/浏览器/浏览器渲染机制.md',
          },
        ],
      },

      {
        text: 'HTTP',
        children: [
          {
            text: 'HTTP状态码',
            link: '/HTTP/HTTP状态码.md',
          },
        ],
      },
      {
        text: 'js算法',
        children: [
          {
            text: 'js算法',
            link: '/算法/算法.md',
          },
        ],
      },
      {
        text: 'vuepress搭建知识库',
        link: '/vuepress搭建知识库.md',
      },
    ],
  }),
  plugins: [backToTopPlugin()],
}
