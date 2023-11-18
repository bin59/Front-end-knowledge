# webpack

    Webpack静态模块打包工具---是前端工程化的里程碑的工具

    在webpack看来,前端的所有资源文件(js/json/css/img/less/...)都会作为模块处理。

    它将根据模块的依赖关系进行静态分析，打包生成对应的静态资源(bundle)   

## 一、为什么这个东西诞生?

    index.html加载很多的资源文件?出现模块化?

### 1.将多个js文件通过建立的某些依赖关系，最终产出一个js

### 2.非浏览器识别的文件或语法，转换成浏览器能够识别的内容

    如：SCSS => CSS

        Es6 => Es5

### 3.用来区分环境

开发环境:专门为开发配置的环境

    怎么方便怎么来

生产环境:专门为线上配署的环境

    - 体积越小，对资源文件做压缩处理CSS jS png  jpg
    - 
    - 代码混淆，webpack存在规则(AST) 去混淆你的代码(看起来像乱码)

        存在一些工具将这些混淆的代码变成正常

webpack  => Vite（未来的趋势）

### 4.对于初级初级工程师来说，掌握到webpack什么?

Ps : webpack的配置，每家公司的配置都不一样。

- webpack的构建流程?工作机制?
- webpack的基本配置的属性有哪些?
- webpack的核心是由什么组成?
    - loader 非浏览器识别的文件或语法，转换成浏览器能够识别的内容
    - plugin 让我们的项目拥有自动化的能力
     
        scr npm run build => dist(放到服务器)

- 分别Loader和plugin的工作机制及其简单实用?
- 学会通过webpack去配置开发和生产环境?

webpack并不具备自动化功能，是plugin赋予webpack自动化功能


## 二、快速上手webpack

### 1.初始化package.json

```yarn init --yes```

### 2.安装webpack和webpack-cli

```yarn add webpack webpack-cli```

    报错：

    error enhanced-resolve@5.8.3: The engine "node" is incompatible with this module. Expected version ">=10.13.0". Got "8.14.1"
    error Found incompatible module.

    解决：输入```yarn config set ignore-engines true```

    然后再执行：```yarn add webpack webpack-cli```

当运行完上述命令之后，多了一个node_ modules的文件,存放的是插件的源码

后续通过webpack的命令去打包

### 3.准备工作

安装：
```yarn add css-loader style-loader babel-loader @babel/core @babel/preset-env sass-loader image-loader html-webpack-plugin clean-webpack-plugin copy-webpack-plugin webpack-dev-server @babel/polyfill webpack-merge node-sass --dev ```

新建文件夹:src(放源码的地方)

生成的dist是打包后的地方,可以用户自定义输入输出的文件地方

新建webpack.config.js

```js

```
### 4.常用的loader

    file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件

    url-loader：和 file-loader 类似，但是能在文件很小的情况下以 base64 的方式把文件内容注入到代码中去

    babel-loader：把 ES6 转换成 ES5
 
    css-loader：加载 CSS，支持模块化、压缩、文件导入等特性

    source-map-loader：加载额外的 Source Map 文件，以方便断点调试

    image-loader：加载并且压缩图片文件

    style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS。

    eslint-loader：通过 ESLint 检查 JavaScript 代码

文件操作类（必用）： css babvel url file

代码规范类（选用）：eslint-loader


安装的命令：如

```npm install file-loader --dev```

```npm install sass-loader --dev```

注意:只用babel-loader是不足以完成，还需要通过这个loader的插件去完成编译任务
```npm install babel-loader @babel/core @babel/preset-env --dev```

如何使用一个loader?
    1. 安装npm install loader名称
    2. 到config.js文件中配置规则rules,
        一个规则一个对象
        如：
        rules:[
            {
                test:/.css$/,
                use:['style-loader',css-loader']
            }
        ]
    3.写正则表达式，写你要编译的文件后缀正则
    4.丢给之前安装的loader

注意: loader可以配置多个，但要主要他们之间的依赖关系，
注意他们的执行顺序是从右到左

### 5.常用的plugin

常用的plugin: 

    define-plugin：定义环境变量

    terser-webpack-plugin：通过TerserPlugin压缩ES6代码

    html-webpack-plugin 为html文件中引入的外部资源，可以生成创建html入口文件

    mini-css-extract-plugin：分离css文件

    clean-webpack-plugin：自动帮助我们清除dist文件目录内容

    copy-webpack-plugin 自动帮助我们复制一些不需要经过webpack打包的文件，如: ico后缀文件

    happypack：实现多线程加速编译

不是所有的资源(图片或者ico这类)都是要被webpack处理。

什么东西是不需要被webpack打包处理的资源?

例如: ico这种本身体积不太大并且变化的机率很小的文件资源，直接copy到dist
不去加重webpack的负担

关于plugin的使用：

    1.安装对应的插件webpack-plugin
    2.引入对应的插件
    3.在plugins的数组中，new 插件
        在webpack中所有的plug in都是构造函数，要用到这些插件的功能就必须new
    4.传递不同的插件参数完成不同插件功能

    更多参数配置参考官方文档


## 三.分环境配置

### 1、配置文件

**webpack.common.js** 存放两个环境中都需要用到的laoder或者plugin
如：css-loader babel-loader html-webpack-plugin

**webpaack.prod.js** 中写一些开发环境特有的插件，执行serve就运行这个dev.js进入了开发环境

**webpack.dev.js** 中写一些生产环境特有插件，执行build就运行prod.js 进入生产环境

### 2、在package.json的scripts中修改

设置命令(package.json) 执行对应的js，测试保证运行时不同js

```js
// ...略...
"scripts":{
    "serve": "webpack-dev-server --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js",
    "dev": "webpack"
  },
  "dependencies": {
// ...略...
```

### 3、热更新 

webpack的内置服务器：**webpack-dev-server**

```npm install webpack-dev-server --dev```

webpack的一个核心功能：

    1.提供热更新的效果，让开发者无需每次都打包
    2.可以解决跨域问题

npm run serve 运行，要关闭在终端按Ctrl + C 

- npm run dev => 相当于执行 webpack =>用来打包
- 
- npm run serve => 相当于webpack-dev-server --config webpack.dev.js
- npm run build => 相当于webpack-dev-server --config webpack.prod.js





报错：Uncaught ReferenceError: regeneratorRuntime is not defined

在程序中使用了 async/await ，经过@babel/preset-env 解析后会将代码转换为一个名为regeneratorRuntime的函数，但是转换后的代码仅仅存在这个函数的调用，并没有具体的定义体现。

解决方案：

    1、先安装：babel/polyfill
    
    npm install @babel/polyfill -D

    2、使用了 async/await的入口js文件头部引入

    import '@babel/polyfill';

###  四.webpack5图片问题

1.针对 css 中引入的资源

使用webpack5内置的 assets module 处理（url-loader已废弃）

```json
{
    // 处理图片资源
    test: /\.(jpg|png|gif)$/,
    // webpack5中使用assets-module（url-loader已废弃）
    type: 'asset',
    parser: {
        dataUrlCondition: {
            maxSize: 10 * 1024
        }
    },
    generator: {
        filename: 'img/[name].[hash:6][ext]',
        publicPath: './'
    }
},
```

2.针对 html 中 img 标签图片
将 html-loader 更换为 html-withimg-loader

```npm i html-withimg-loader -D```

