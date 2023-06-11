# Verdaccio

<details markdown="1">
  <summary>目录</summary>

- [Verdaccio](#verdaccio)
  - [什么是 Verdaccio？](#什么是-verdaccio)
  - [Registry 是什么？](#registry-是什么)
  - [简而言之](#简而言之)
  - [安装](#安装)

</details>

官网：https://verdaccio.org/zh-cn/

## 什么是 Verdaccio？

[Verdaccio](https://verdaccio.org/zh-cn/) 是一个 Node.js 创建的轻量的私有 npm proxy registry

## Registry 是什么？

- 包的资源库，它执行 CommonJS Compliant Package Registry specification 来阅读包信息
- 提供与 npm clients (yarn/npm/pnpm) 兼容的 API
- Verdaccio 表示意大利中世纪晚期 fresco 绘画中流行的一种绿色的意思。

## 简而言之

- 它是基于 Node.js 的网页应用程序
- 它是私有 npm registry
- 它是本地网络 proxy
- 它是可插入式应用程序
- 它相当容易安装和使用
- 我们提供 Docker 和 Kubernetes 支持
- 它与 yarn, npm 和 pnpm 100% 兼容
- 它 forked 于sinopia@1.4.0并且 100% 向后兼容

## 安装

使用 npm

```bash
npm install --location=global verdaccio
```

或使用 yarn

```bash
yarn global add verdaccio
```
