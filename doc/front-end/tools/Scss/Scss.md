# Scss

## Scss 的简介、语法

    由于CSS并不是一门编程语言，缺少了对应的变量、条件语句、函数等，导致为了

实现某些重复度较高的样式，我们仍然需要一行一行的单纯去描述，这是一件非常繁琐的事情。

    于是，就有人开始为CSS加入了一些编程元素，这些工具就被叫做css预处理器。它的基

本思想是用一种专门的编程语言来进行网页样式的开发，然后再编译成 CSS 文件。而 Scss 就是目
前 css 预处理器中，最热门的一个。

## Sass/Scss、Less 是什么?

    Sass (Syntactically Awesome Stylesheets)是一种动态样式语言，Sass语法属于缩排语法，

比 css 比多出好些功能(如变量、嵌套、运算,混入(Mixin)、继承、颜色处理，函数等)，更容易阅读。

### Sass 与 Scss 是什么关系?

    Sass的缩排语法，对于写惯css前端的web开发者来说很不直观，也不能将css代码加入到Sass里面，

因此 sass 语法进行了改良，Sass 3 就变成了 Scss(sassy css)。与原来的语法兼容，只是用{}取代了原来的缩进。

    Less也是一种动态样式语言. 对CSS赋予了动态语言的特性，如变量，继承，运算， 函数. Less既可以在

客户端上运行 (支持 IE 6+, Webkit, Firefox)，也可在服务端运行 (借助 Node.js)。

## 1.安装 Scss

    安装：https://www.sass.hk/install/
    node版本对应sass版本：https://github.com/sass/node-sass
    如：node 16 对应 sass 6.0

### 1.1 要先安装 ruby

    由于sass是ruby语言开发的，所以安装sass时，必须安装ruby环境

    Windows 用户需要先[安装 Ruby](https://rubyinstaller.org/downloads/)，安装完成后，在 CMD 运行如下命令

```bash
ruby -v
# 安装成功，会提示以下信息
ruby 3.0.1p64 (2021-04-05 revision 0fb782ee38) [x86_64-darwin19]
```

安装完 ruby 后，就可以安装 scss 了

```bash
gem install sass
```

安装完成后，检查是否安装成功

```bash
sass -v
# 出现下面命令代表安装成功
Ruby Sass 3.x.x
```

### 2. 编译 Scss

#### 2.1 命令行编译

命令行编译，首先要直接进入项目的根目录（这个目录就包含 css、sass 文件夹和 index 文件）

##### 2.1.1 单文件编译

```bash
scss --watch index.scss:index.css
```

这行命令的意思是，scss 会**自动监听当前文件夹**下的 `index.scss` 文件，当 sass 发生修改并保存时，它会自动编译成名为 `index.css` 的 css 文件，然后默认将它保存在当前目录下。

如果想要将某个文件夹下的 scss 文件进行编译，并且保存到另一个文件夹下，便可以这么写

```bash
scss --watch ./scss/index.scss:./css/index.css
```

这行命令的意思就是，把当前目录下的 scss 文件夹内的 index.scss 编译并保存到 当前目录下的 css 文件夹内的 index.css 。

##### 2.1.2 多文件编译

开发过程中，肯定不会只有单个的样式文件，当 scss 下存在多个样式文件时，我们可以将它们批量侦听并编译

```bash
scss --watch scss:css
```

把当前目录下的`scss`文件夹内的所有 scss 文件编译并保存到当前目录下的`css`文件夹内。

### 2.2 vscode 插件编译

    在 vscode 插件中心安装 `Live Sass Compiler` 这个插件，安装完后，还需要稍微设置一番。

    由于插件默认的编译生成路径是 scss 文件所在的目录，这里就需要更改一下输出的路径


    vscode左下角--设置--扩展--live sass compiler--在settings.json中编辑

    ```json
    "liveSassCompile.settings.formats": [
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "~/../css"
        },
        {
            "format": "compressed",
            "extensionName": ".min.css",
            "savePath": "~/../css"
        }
    ],
    ```

### 2.3 导入其他样式文件

在开发过程中，可能不同的页面存在很多相同的样式代码。这时，可以先把公共的样式单独写在
一个文件内，然后在需要它的样式文件中引入进来即可，这样可以节省大量的代码时间。要导入其他样式文件，
可以通过@import 来实现

```scss
@import 'reset.scss';
```

### 2.4 忽略编译（局部文件）

如果有些文件不需要编译成 css，比如样式重置文件，只需要导入到对应的 scss 文件中，所以不需要让它生
成 reset.css 文件，因为没有用了。scss 需要忽略编译的文件，以下划线开头。另外，在引入这个局部文件时，可以不带上下划线。

    reset.scss

### 2.5 静默注释

在 css 中，可以通过注释来进行样式的说明。但有些情况下，并不希望每个人都可以打开 F12 控制它然后看到所有的注释。

scss 另外就提供了一种不同于 css 标准注释格式/_..._/的注释语法，即静默注释，其注释的内容不会被编译到 css 文件中。

```scss
body {
  margin: 0; // 这段注释不会被编译到css文件中
  padding: 0; /* 这段注释会被编译 */
}
```

### 3. Scss 五大基础语法

下面的语法，都是按照 scss 语法来做的，Scss 其实和 Sass 是一样，只不过是 Sass 的第三代语法，相对于 Sass 来说，Scss 的语法更加直观清爽。

#### 3.1 变量声明

变量声明的作用是，将一段不太好写的代码以一个**变量名**的方式存储起来，在需要用到的地方调用这个变量名即可

```sass
$变量名:变量值;
```

##### 3.1.1 局部变量和全局变量

在实际开发时，我们会把大量出现的样式存储到变量中，那如果在某一个网页的某一个模块中，也同样存在大量的重复样式，这时我们可以在这个模块的元素中声明一个局部变量（这个局部变量，只会在当前模块下生效，在模块之外是无法调用的）。

- 局部变量：在元素里面声明的变量；
- 全局变量：在元素外面定义的变量；

在局部变量所在的模块中，局部变量会覆盖同名的全局变量。

```css
$color: #87ceeb;

header {
  color: $color; // #87ceeb
}

main {
  color: $color; // #87ceeb

  .container {
    $color: pink;

    .son {
      color: $color; // pink
    }
  }
}
```

#### 3.2 Scss 的嵌套规则

##### 3.2.1 标签嵌套规则

**scss 源文件**

```scss
.box {
  // 头部
  header {
    width: 1280px;

    // 头部内的导航栏
    nav {
      float: left;
    }
  }
}
```

编译完后的 css 文件

```css
.box header {
  width: 1280px;
}

.box header nav {
  float: left;
}
```

##### 3.2.2 属性嵌套规则

在 scss 当中，除了标签存在一个父子关系的嵌套外，在属性上也有对应的从属关系。存在相同属性前缀时，就可以使用属性嵌套规则。

```scss
p {
  font: {
    size: 30px;
    weight: bold;
    style: italic;
  }
  flex: {
    shrink: 1;
    grow: 1;
    basis: auto;
  }
}
```

##### 3.2.3 父选择器

```scss
a {
  color: $color;
  font-size: 50px;
  border: 1px solid #000;

  &:hover {
    color: yellow;
  }
}
```

在 a 括号内部，本应该表示的是 a 的子元素，但是可以通过 `&` 来表示一个父选择器，这个选择器将会指向 `a` 标签。

父选择器不仅可以来操控 `hover` 等状态效果，也能实现 `before` 和 `after` 的添加。

#### 3.3 继承

在 Scss 中，它允许一个选择器继承另一个选择器的属性

```scss
.font-modify {
  color: $color;
  font-size: 50px;
  font-weight: bold;
  border: 1px solid #000;
}

.wrap {
  width: 1280px;
  margin: 0 auto;

  a {
    @extend .font-modify;
  }
}
```

通过 `@extend + 选择器名` ，就可以在目标元素上即成对应样式块中的**所有样式代码**，而且编译出来的 css 会将选择器合并在一起，形成组合选择器。

如果用组合选择器的方式，可能存在后面开发人员会出现命名重复的情况，这样有可能会覆盖掉对应样式块的代码，为了防止影响到要继承到代码块，一般通过 `%` 去声明一个代码块。

```scss
%font-modify {
  color: $color;
  font-size: 50px;
  font-weight: bold;
  border: 1px solid #000;
}

.wrap {
  width: 1280px;
  margin: 0 auto;

  a {
    @extend %font-modify;
  }
}
```

`%` 在 scss 中也叫占位符，也就是说用占位符声明的代码块，如果不被 `@extend` 调用的话，它就不会被编译。

#### 3.4 Mixin 混合器

Mixin 它其实有点像 C 语言的宏(macro)，是可以重用的代码块。就像上面继承的那样，我们需要声明一个代码块才能够调用它。

```scss
// 通过 @mixin 声明一个代码块，效果和占位符一样，不通过 include 调用就不会被编译
@mixin font-color {
  color: pink;
  font-size: 100px;
  border: 10px solid skyblue;
}

// 调用 mixin 声明的代码块
footer {
  a {
    @include font-color;
  }
}
```

##### 3.4.1 向混合器传递参数

在使用混合器时，我们不一定每次都得生成相同的样式。可以通过在 `@include` 的时候，传递一个或多个参数。具体的原理是怎么实现的不用去了解，只需要掌握它如何传递参数、如何赋值即可。

```scss
@mixin common($color: pink, $fontSize: 20px) {
  color: $color;
  font-size: $fontSize;
}

a {
  @include ($fontSize: 50px, $color: skyblue);
}
```

##### 3.4.2 向混合器传递样式片段

除了上面传递已经提前指定的样式代码，scss 还允许传递自定义的样式片段。首先在 `@mixin` 声明中，添加 `@content` 语句，然后传递的代码片段将会替换掉 `@content`，然后出现在相应的位置。

```scss
@mixin common($color: pink, $fontSize: 20px) {
  color: $color;
  font-size: $fontSize;
  @content;
}

footer {
  a {
    @include common($fontSize: 50px, $color: pink) {
      border: 20px solid grey;
      width: 500px;
    }
  }
}
```

#### 3.5 自定义函数

当我们需要计算一些值时，我们可以提前写好一个函数，然后调用函数时，将计算前的值作为参数传递进去，最终函数会返回一个处理完的结果值出来。

要自定义函数，首先要通过 `@function` 来声明一个函数，然后在括号内部写上自定义参数值，最后通过 `@return` 来返回结果值。

```scss
@function cacl_width($numberA, $numberB) {
  @return $numberA + $numberB;
}

.box {
  width: cacl_width(10px, 50px); // 60px
  height: cacl_width(50px, 50px); // 100px
  background-color: pink;
}
```

函数内部的计算方式，除了简单的加减之外，也可以进行乘除运算。但是乘除运算要注意一些地方：当内部运算为乘法时，如果传递的多个参数都带有单位，比如 （50px, 50px），scss 的运算结果会变成 `2500px*px` 的一个值，而这个值在 css 中是一个非法值，最终导致这行代码编译失败。所有当有多个参数传递进行乘除运算时，只需要在其中一个值带有单位即可。
