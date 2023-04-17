# nodejs 安装+Vue 环境搭建+VSCode

参考 1： https://blog.csdn.net/junshangshui/article/details/80376489

## 一、安装 Node.js（js 的运行环境）

1.Node.js 官网下载 https://nodejs.org/en/download/ 2.安装后，win+r 输入 cmd，打开命令行，查看版本号
node -v
npm –v

新版的 Node.js 已自带 npm（类似.net 中的 nuget 包管理器），安装 Node.js 时会一起安装。（将来要更新 npm 可用这个命令 npm intall npm@latest -g）

3.可以看到系统环境变量也已经自动配置好了。
path: C:\Program Files\nodejs\

同时在用户变量中可以看到 npm 包管理器的默认下载目录
C:\Users\Administrator\AppData\Roaming\npm

4.在命令行输入 node 回车，再输入 console.log(“hello”); 查看到输出结果就说明安装成功了。

5.配置 npm 的全局模块的存放路径以及缓存的路径(先要退出上一步已进入的 node，输入.exit 或者按两次 Ctrl+C 就退出了 node)

npm 全局模块的存放路径以及 cache 的路径的配置，默认是在 C 盘 "C:\Users\用户" 下(因为默认会将模块安装到【C:\Users\用户名\AppData\Roaming\npm】路径中，会占 C 盘空间,下面两行的命令是修改模块保存的路径)

在 node.js 的安装目录下 新建两个文件夹全局模块的安装路径 node_cache 和缓存 node_global，方便集中管理。

npm config set prefix "F:\HK network engineering\You need to install\Nodejs\node_global"

npm config set cache "F:\HK network engineering\You need to install\Nodejs\node_cache"

将来用 npm install XXX -g 安装以后模块就在这两个文件夹里。

命令行输入 npm config ls，可以查看 npm 当前配置

```
C:\Users\Administrator>npm config ls
  ; "user" config from C:\Users\Administrator\.npmrc

  cache = "F:\\HK network engineering\\You need to install\\Nodejs\\node_cache"
  prefix = "F:\\HK network engineering\\You need to install\\Nodejs\\node_global"

  ; node bin location = F:\HK network engineering\You need to install\Nodejs\node.exe
  ; cwd = C:\Users\Administrator
  ; HOME = C:\Users\Administrator
  ; Run `npm config ls -l` to show all defaults.
```

然后在 C:\Users\用户名 下用记事本打开.npmrc 文件，出现下面文本就说明设置成功了。
prefix=F:\HK network engineering\You need to install\Nodejs\node_global
cache=F:\HK network engineering\You need to install\Nodejs\node_cache

7.配置 npm 的环境变量（因为上面修改了路径）

在系统变量 path 中新增一个变量:
F:\HK network engineering\You need to install\Nodejs\
F:\HK network engineering\You need to install\Nodejs\node_global\node_modules

然后在用户变量中修改变量为:
F:\HK network engineering\You need to install\Nodejs\node_global

最后就可以删掉 C:\Users\用户名\AppData\Roaming 下的 npm 目录了。（这里得显示隐藏的项目才能看到 AppData 目录）
（注意：修改了环境变量后要重新打开命令行界面）

8..测式 npm
安装个 module 测试下，例如最常用的 express 模块。

npm install express –g

完成后在 C:\Program Files\nodejs\node_global\node_modules 目录下就可看到 express 文件夹和它的文件了。

## 二、安装 cnpm（淘宝的 npm）

因为 npm 安装插件是从国外服务器下载，受网络影响大，可能出现异常。 1.下载安装 cnpm 并且使用淘宝的服务器做为的包源 。

```
npm install –g cnpm --registry=https://registry.npm.taobao.org  注意registry前面是两个杠啊。

cnpm –v 查看到相关信息。

在node_global\node_modules目录下可看到cnpm文件夹和它的文件,在node_global可看到cnpm和cnpm.cmd文件。
```

## 三、安装 webpack（js 应用程序的静态模块打包器(module bundler)）

当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

Vue 的组件是.vue 或.wxml 等文件，无法被浏览器解析，需要被翻译和打包为.js 文件

```

全局安装webpack和webpack-cli:
cnpm install webpack webpack-cli –g

```

完成后在 node_global\node_modules 目录下可看到 webpack 文件夹和它的文件,在 node_global 可看到 webpack 和 webpack.cmd 文件。

## 四、安装 vue-cli（用来生成 vue 模版的工具）

vue-cli 这个构建工具大大降低了 webpack 的使用难度，支持热更新，有 webpack-dev-server 的支持，相当于启动了一个请求服务器。
vue-cli 是脚手架，就是用配置好的模版快速搭起一个项目来，省去配置 webpack 的基本内容。通过 vue init 模版名 项目名，然后再有几个简单设置就建起项目了。

1.vue vue-cli 安装

```
cnpm install vue vue-cli –g
```

完成后在 node_global\node_modules 目录下可看到 vue-cli 文件夹和它的文件了,还有在\node_global 可看到 vue 的六个文件。

六、安装 VSCode（ 官网https://code.visualstudio.com/Download）

安装过程就不写了，下一步下一步就完成了。 1.安装 vetur 插件，是 vue 语法的高亮插件。 2.安装 eslint 插件，是智能错误检测插件。

这两年插件安装，先要打开：文件-〉首选项-〉设置，在用户设置中输入如下代码

```
"emmet.syntaxProfiles": {
    "vue-html": "html",
    "vue": "html"
  }

"eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    "vue"
],

"eslint.options": {
    "plugins": ["html"]
}
```

也可以通过左边的扩展，然后搜索相应插件安装。

3.安装 prettier 插件，是代码格式化工具

装完后重启 VSCode，然打开设置，搜索 eslint，接首在右侧用户配置添加相关配置

具体相关配置代码如下：

```
"editor.detectIndentation": false,
  "editor.tabSize": 2,
  "prettier.tabWidth": 2,
  "prettier.eslintIntegration": true, //让prettier使用eslint的代码格式进行校验
  "prettier.semi": false, //去掉代码结尾的分号
  "prettier.singleQuote": true, //使用带引号替代双引号
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true, //让函数(名)和后面的括号之间加个空格
  "vetur.format.defaultFormatter.html": "js-beautify-html", //格式化.vue中html
  "vetur.format.defaultFormatter.js": "vscode-typescript", //让vue中的js按编辑器自带的ts格式进行格式化
```

4.打开项目 test1

5.运行项目

在终端输入 cnpm install 先检查和下载依赖，然后输入 cnpm run dev 运行项目
最后给出提示，打开浏览器输入 http://localhost:8080 访问

# 使用 vscode 运行第一个 vue 程序

一、环境安装
Node.js: javascript 运行环境(runtime),不同系统直接运行各种编程语言

webpack: 它主要的用途是通过 CommonJS 的语法把所有浏览器端需要发布的静态资源做相应的准备，比如资源的合并和打包。

vue-cli: 用户生成 Vue 工程模板

1.1 安装 Node
1，安装 Node.js 直接官网下载，一路 next

cmd 中输入 node -v,查看是否能够正确打印出版本号即可！

2，安装 Node.js 淘宝镜像加速器（cnpm）

npm install cnpm -g

1.2 安装 webpack
npm install webpack -g

npm install webpack-cli -g

测试是否安装成功

webpack -v

1.3 安装 vue-cli 脚手架构建工具
cnpm install vue-cli -g

二、使用 vscode 初始化一个简单的项目
2.1 首先选定目录，然后在命令行中把目录转到选定的目录。执行以下命令：
vue init webpack demo

2.2 在安装时会询问你:
G:\binbin\web\project>vue init webpack vue2-pro

? Project name vue2-pro
? Project description A Vue.js project
? Author binbin <81745365+bin59@users.noreply.github.com>
? Vue build runtime
? Install vue-router? Yes
? Use ESLint to lint your code? No
? Set up unit tests No
? Setup e2e tests with Nightwatch? No
? Should we run `npm install` for you after the project has been created? (recommended) yarn

进入项目目录
cd test_1

输入下载安装项目的依赖：
cnpm install

完成后可在 test_1\node_modules 目录中看到所有有依赖.

2.3 通过 npm run dev 启动项目
npm run dev

2.4 按住 Ctrl 点击 URL 就可以访问了
