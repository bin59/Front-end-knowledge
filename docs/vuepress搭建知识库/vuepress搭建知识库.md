# vuepress 搭建知识库

## 一、vuepress 初始化

**1.依赖环境**

- `vuepress - v2.0`
- 管理工具：`pnpm - v8.10.5`
- `Node.js - v20.9.0`

**2.初始化项目**

```bash
pnpm init
```

**3.将 VuePress 安装为本地依赖**

```bash
pnpm add -D vuepress@next @vuepress/client@next vue
```

**4.在 package.json 中添加一些 scripts**

```js
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

**5.将默认的临时目录和缓存目录添加到 .gitignore 文件中**

```bash
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore
```

**6.创建`docs`文件夹，并添加`README.md`或`index.md`作为首页**

```bash
mkdir docs
echo '# Hello VuePress' > docs/README.md
```

**7.在本地启动服务器来开发你的文档网站**

```bash
pnpm docs:dev
```

运行后，会在`docs`文件夹生成`.vuepress`目录，`.vuepress`目录包含-默认的临时目录`.temp`和缓存目录`.cache`

通过`http://localhost:8080/`在浏览器访问

## 配置文件

1. 在`.vuepress`目录中添加配置文件`config.js`

基础的配置：

```js
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
})
```

所有配置：[vuepress 配置](基础的配置)

2. 客户端配置文件`client.js `：[客户端配置的使用方法](https://vuepress.github.io/zh/advanced/cookbook/usage-of-client-config.html)

## 静态资源

### Public 文件

你可以把一些静态资源放在 Public 目录中，它们会被复制到最终生成的网站的根目录下。

默认的 Public 目录是 `.vuepress/public` ，可以通过 public 配置项来修改。

### 相对路径

你可以在你的 Markdown 内容中使用相对路径来引用静态资源：

```md
![图片](./image.png)

![图片](image.png)
```

## 插件

**1. 回到顶部**

```bash
pnpm i -D @vuepress/plugin-back-to-top@next
```

更多配置查看：[vuepress 官网](https://vuepress.github.io/zh/)

# Frontmatter

[Frontmatter](https://vuepress.github.io/zh/reference/default-theme/frontmatter.html)
