# vuepress 搭建

<img src="https://vuepress.github.io/images/hero.png" />


点击=>[vuepress 官网](https://vuepress.github.io/zh/)

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
