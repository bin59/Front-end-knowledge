import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { defaultTheme } from 'vuepress'
export default {
  lang: 'zh-CN',
  // 站点的标题。
  // 它将会作为所有页面标题的后缀，并且在默认主题的导航栏中显示
  title: '晚霞的前端博客',
  // 站点的描述。
  // 它将会在最终渲染出的 HTML 中作为 <meta name="description" /> 标签的 content 属性。它会被每个页面的 Frontmatter 中的 description 字段覆盖。
  description: '欢迎来到晚霞的前端学习博客！',
  // 在最终渲染出的 HTML 的 <head> 标签内加入的额外标签
  head: [['link', { rel: 'icon', href: '/images/touxiang.jpg' }]],

  theme: defaultTheme({
    // Logo 图片将会显示在导航栏的左端。
    logo: '/images/touxiang.jpg',

    // 它将被用作 仓库链接 的链接。仓库链接 将会显示为导航栏的最后一个元素。
    repo: 'https://github.com/bin59/Front-end-knowledge',
    // 项目仓库的标签
    // repoLabel: '项目仓库的标签',
    // 是否启用 编辑此页 链接
    editLink: false,
    //是否启用 最近更新时间戳 。
    lastUpdated: false,
    // 是否启用 贡献者列表 。
    contributors: false,
    //导航栏
    navbar: [
      {
        text: '前端开发必备网站',
        link: '/前端开发必备网站.md',
      },
      {
        text: '基础知识',
        children: [
          {
            text: 'HTML',
            link: '/HTML、CSS/HTML/HTML介绍.md',
          },
          {
            text: 'CSS',
            link: '/HTML、CSS/CSS/1.CSS介绍.md',
          },
          {
            text: 'JavaScript',
            link: '/JavaScript/JavaScript介绍.md',
            /*  children: [
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
                  },
                  {
                    text: '14.try_catch语句',
                    link: '/JavaScript/14.try_catch语句/try_catch语句.md',
                  },
                ], */
          },
        ],
      },
      {
        text: '进阶',
        children: [
          {
            text: 'ECMAScript',
            link: '/JavaScript/ECMAScript/1.ECMAScript简介.md',
          },
          {
            text: 'TypeScript',
            link: '/TypeScript/TypeScript.md',
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
        link: '/vuepress搭建知识库/vuepress搭建知识库.md',
      },
    ],
    // 侧边栏
    sidebar: {
      '/tools/': [
        {
          text: 'npm',
          collapsible: true, //是否可折叠
          children: ['/tools/npm/npm.md'],
        },
        {
          text: 'pnpm',
          collapsible: true,
          children: ['/tools/pnpm/pnpm.md'],
        },
      ],
    },
  }),
  /* The `backToTopPlugin()` is a plugin provided by the `@vuepress/plugin-back-to-top`
  package. It adds a "back to top" button to the website, allowing users to easily scroll
  back to the top of the page. */
  plugins: [
    // 回到顶部
    backToTopPlugin(),
    docsearchPlugin({
      // https://vuepress.github.io/zh/reference/plugin/docsearch.html#%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95
      // 配置项
    }),
  ],
}
