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
      // 嵌套 Group - 最大深度为 2
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
        text: 'vuepress搭建',
        link: '/vuepress搭建.md',
      },

      // 控制元素何时被激活
      // {
      //   text: '工具',
      //   children: [
      //     {
      //       text: 'Always active',
      //       link: '/',
      //       // 该元素将一直处于激活状态
      //       activeMatch: '/',
      //     },
      //     {
      //       text: 'Active on /foo/',
      //       link: '/not-foo/',
      //       // 该元素在当前路由路径是 /foo/ 开头时激活
      //       // 支持正则表达式
      //       activeMatch: '^/foo/',
      //     },
      //   ],
      // },
    ],
  }),
  plugins: [backToTopPlugin()],
}
