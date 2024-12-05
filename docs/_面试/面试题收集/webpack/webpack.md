# webpack 面试题

## 一、webpack

### 13.webpack 五个核心概念

入口(Entry) 指示 webpack 以哪个文件为入口起点开始打包，分析构建内部依赖图

输出(Output) 指示 webpack 打包后的资源 bundles 输出到哪里去，以及如何命名

Loader 让 webpack 能够去处理那些非 JavaScript 文件(webpack 自身只理解 JavaScript)

插件(Plugins) 可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等。

模式(Mode) 指示 webpack 使用相应模式的配置

### 2.如何提高 Webpack 的构建速度？

- 多入口情况下，使用 CommonsChunkPlugin 来提取公共代码
- 通过 externals 配置来提取常用库
- 利用 DllPlugin 和 DllReferencePlugin 预编译资源模块通过 DllPlugin 来对那些我们引用但是绝对不会修改的 npm 包来进行预编译，再通过 DllReferencePlugin 将预编译的模块加载进来。
- 使用 Happypack 实现多线程加速编译
- 使用 webpack-uglify-paralle 来提升 uglifyPlugin 的压缩速度。 原理上 webpack-uglify-parallel 采用了多核并行压缩来提升压缩速度
- 使用 Tree-shaking 和 Scope Hoisting 来剔除多余代码

  要注意的第一点是，通过 externals 配置来提取常用库对 file-loader 和 url-loader 支持不好，所以这两个 loader 就不需要换成 happypack 了，其他 loader 可以类似地换一下

  babel-loader 在执行的时候，可能会产生一些运行期间重复的公共文件，造成代码体积大冗余，同时也会减慢编译效率

- 不需要打包编译的插件库换成全局"script"标签引入的方式

  比如 jQuery 插件，react, react-dom 等，代码量是很多的，打包起来可能会很耗时
  可以直接用标签引入，然后在 webpack 配置里使用 expose-loader 或 externals 或 ProvidePlugin 提供给模块内部使用相应的变量

- 优化构建时的搜索路径

  在 webpack 打包时，会有各种各样的路径要去查询搜索，我们可以加上一些配置，让它搜索地更快
  比如说，方便改成绝对路径的模块路径就改一下，以纯模块名来引入的可以加上一些目录路径
  还可以善于用下 resolve alias 别名 这个字段来配置
  还有 exclude 等的配置，避免多余查找的文件，比如使用 babel 别忘了剔除不需要遍历的

### 3.webpack 的打包原理是什么？

    （1）识别入口文件

    （2）通过逐层识别模块依赖(Commonjs、amd或者es6的import，webpack都会对其进行分析，来获取代码的依赖)

    （3）webpack做的就是分析代码，转换代码，编译代码，输出代码

    （4）最终形成打包后的代码

### 4.Webpack 的构建流程主要有哪些环节？如果可以请尽可能详尽的描述 Webpack 打包的整个过程。

    （1）根据配置文件里entry找到打包入口文件
    （2）顺着入口文件代码里的import或require之类的语句，解析推断文件所依赖的资源模块
    （3）分别去解析每个资源模块对应的依赖，最后形成一颗依赖树，
    （4）递归依赖树，找到每个节点对应的资源文件，
    （5）根据配置文件 rules 属性，找到资源模块所对应的加载器，
    （6）交给对应的加载器加载对应的资源模块，
    （7）最后将加载以后的结果放入到bundle.js打包结果里，
    （8）实现整个项目的打包。

### 5.Webpack 和 grunt 和 gulp 有啥不同：

    Webpack是一个模块打包器，grunt和gulp是执行任务的，webpack可以递归的打包项目中的所有模块（递归：
    指定一个入口，分析模块的依赖，它会递归的查找所有相关的依赖），
    最终生成几个打包后的文件，他和其他的工具的最大的不同在于它支持code-splitting（代码分割），
    模块化（AMD，ESM，CommonJS）开发，全局的分析工具（分析整个项目引入的模块）

### 6.什么是 bundle，什么是 chunk，什么是 module：

- bundle 是由 webpack 打包出来的文件，
- chunk 是指 webpack 在进行模块依赖分析的时候，代码分割出来的代码块，
- module 是开发中的单个模块

### 7.什么是模块热更新：

    webpack-dev-server使用内存来存储webpack开发环境下的打包文件，并且可以使用模块热更新，他比传统的http服务器对开发更加简单高效

    优化问题一:什么是长缓存?在webpack中如何做到长缓存优化?

    答案:浏览器在用户访问页面的时候,为了加快加载速度,会对用户访问的静态资源进行存储,
    但是每-次代码升级或是更新,都需要浏览器去下载新的代码,最方便和简单的更新方式就是引
    入新的文件名称。在webpack中可以在output给输出的文件指定chunkhash ,
    并且分离经常更新的代码和框架代码。通过NamedModulesPlugin
    或是HashedModuleIdsPlugin使再次打包文件名不变

## 二、loader、plugin

### 1.说一说以及 Loader 和 Pluging 的作用以及他们的区别

作用：

    loader是资源加载器，实现资源模块的转换和加载，编译转换类 css-loader，文件操作类 file-loader、url-loader，代码检查类 eslint-loader，负责资源文件从输入到输出的资源转换，对于同一个资源可以使用多个loader,类似于管道概念

    Plugin 解决除了资源加载之外其他自动化工作（打包之前清除 dist目录、拷贝静态文件、压缩代码等等），帮助我们webpack拥有自动化的能力

区别：

    对于loader，它是一个转换器，将A文件进行编译形成B文件，这里操作的是文件，比如将A.scss转换为A.css，单纯的文件转换过程

    plugin是一个扩展器，它丰富了webpack本身，针对是loader结束后，webpack打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听webpack打包过程中的某些节点，执行广泛的任务

### 8.几个常见的 loader

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

### 9.几个常见的 plugin

    define-plugin：定义环境变量

    terser-webpack-plugin：通过TerserPlugin压缩ES6代码

    html-webpack-plugin 为html文件中引入的外部资源，可以生成创建html入口文件

    mini-css-extract-plugin：分离css文件

    clean-webpack-plugin：自动帮助我们清除dist文件目录内容

    copy-webpack-plugin 自动帮助我们复制一些不需要经过webpack打包的文件如: ico后缀文件

    happypack：实现多线程加速编译

### 10.简述 loader 的工作机制

直接举例子来说

手写一个 mdloader 的制作过程,说一遍

    （1）通过test的正则表达式，获取对应非js文件资源如.jpg . md等等
    （2）对应loader中，通过回调函数的参数可以获取对应正则匹配的文件
    （3）获取文件资源后，进行对应的处理，返回正常的ECMA规范的js内容
        如果返回不是规范内容，则需要添加更多的loader去处理，总之
        返回的内容一定是js的内容
    如:我们制作的md-loader

### 11.如何用一个 loader

    1. 安装npm install loader名称
    2. 到webpack.config.js文件中配置规则rules,一个规则一个对象
    3.写正则表达式，写你要编译的文件后缀正则
    4.丢给之前安装的loader

    注意: loader可以配置多个，但要主要他们之间的依赖关系，
    注意他们的执行顺序是从右到左

### 12.plugin 的工作机制问题

手写一个 plugin: Myplugin

功能：去除 dist 目录中所有 js 文件的连续 \*\*\*

    1.定义插件的时候通过Class语法糖来定义

    2.严格遵循webpack定义插件的语法规则，根据当前插件需求，查询文档，思考插件挂在哪个钩子上
    在apply方法里面挂，具体写法如下:
    class插件名{
        apply(compiler) {
            在这个地方上钩子
            compiler.hooks.生命周期钩子.tap(pluginName, (compilation) => {
                console.log( 'webpack构建正在启动!');
            })
        }
    }

    3.自动触发后，后者的回调函数，所有的处理都在这个回调函数中执行
    注意的是，可以通过compilation获取webpack上下文，操作文件
    更注意的是，操作完毕文件之后，一定要有重新写入的操作

    4.使用插件的时候，在plugins的地方new一下
