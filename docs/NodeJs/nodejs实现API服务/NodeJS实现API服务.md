# NodeJs 实现 API 服务

## 初始化项目

- 新建`api_server`文件夹,并初始化项目`yarn init -y`

- ts 初始化`tsc --init`

- 新建`api_server.ts`

## 使用 express 模块

Express 是一个流行的 Node.js Web 框架，可以用于快速搭建 Web 应用程序。它提供了一系列功能强大的特性，包括路由、中间件、模板引擎等，使得开发 Web 应用变得更加简单、灵活和高效。

以下是 Express 的一些重要特性：

1. 路由：Express 提供了一种简单而灵活的路由方式，可以帮助我们将不同的请求映射到对应的处理函数上。例如，可以使用 app.get() 方法定义一个 GET 请求的路由，并指定该路由的处理函数。

2. 中间件：Express 的中间件是一种函数，可以在请求到达目标处理函数之前或之后执行，并对请求进行各种操作，如身份验证、日志记录等。可以使用 app.use() 方法添加中间件。

3. 模板引擎：Express 支持多种模板引擎，如 EJS、Pug、Handlebars 等。使用模板引擎可以方便地生成动态 HTML 页面。

4. 错误处理：Express 提供了一种统一处理错误的方式，可以在一个地方集中处理所有出错情况。

### 1. 安装 express

项目中需要使用`express`模块：，安装命令：

```bash
npm i express
```

### 2. 引入 express

在`api_server.ts`中,引入`express`

```ts
import express from 'express'
```

提示：express 不存在？

运行下面命令：

```bash
yarn add express
yarn add @types/express
```

### 3. 创建 express 实例

app 是 express 的一个实例，我们创建一个 express 实例：

```ts
const app = express()
```

### 4. 配置跨越

可以使用`express`提供的`all`方法来处理跨域：

```ts
app.all('*', function (req, res, next) {
  //处理跨域
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})
```

### 5. 发送一个 GET 请求

```ts
// req请求，res响应
app.get('/', (req, res) =>
  // 向客户端回写数据
  // 通过send()方法回吐给客户端
  res.send('1122')
)
```

调用**listen()**方法，监听端口，并打印服务开启的地址

```ts
app.listen(8088, () => {
  console.log('服务已开启：' + 'http://localhost:8088/')
})
```

## 运行

安装`npm install -g ts-node`

使用`ts-node api_server.ts`命令运行
