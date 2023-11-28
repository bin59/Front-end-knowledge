# HTML 基础

## 简介

- HTML（Hypertext Markup Language）超文本标记语言

- 它负责网页的三个要素中的结构。
- HTML 使用标签的形式来标记网页中的不同组成组成部分。
- 所谓的超文本指的是超链接，使用超链接可以让我们从一个页面跳转到另一个页面。

迭代 网页的版本：HTML4、HTML2.0、HTML5、...

## HTML5 的基本结构

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta 属性="该属性下的子属性" content="子属性对应的属性值" />
    <meta name="keywords" content="HTML5,前端，CSS3" />
    <meta name="description" content="这是一个不错的网站！" />
    <title>HTML</title>
    <style>
      body {
        padding: 0 100px;
      }
    </style>
  </head>
  <body></body>
</html>
```

### 文档声明（doctype）

用来告诉浏览器当前网页的版本

HTML5 的文档声明

```html
<!DOCTYPE html>

<!DOCTYPE html>
```

### html 的根标签（元素）

网页中的所有内容的都要先写根元素里面

```html
<html></html>
```

### head 网页的头部

head 中的内容不会在网页中直接出现，主要是用来帮助浏览器或搜索引擎来解析网页

```html
<head>
  <meta charset="UTF-8" />
  <meta 属性="该属性下的子属性" content="子属性对应的属性值" />
  <meta name="keywords" content="HTML5,前端，CSS3" />
  <meta name="description" content="这是一个不错的网站！" />
  <title>HTML</title>
  <style>
    body {
      padding: 0 100px;
    }
  </style>
</head>
```

### meta 元信息

所谓的元信息，指的是对网页进行描述的信息。

网页本身就是一个信息，同时带有其他属性。

作者、主要讲解、采用的是什么语言。

现在市场上几乎所有的搜索引擎都是根据搜索机器人自动查找到 meta 值（元信息）来进行分类。

meta 标签用来设置网页的元素数据，元数据不是给用户看的

- charset -指定网页的字符集，避免乱码

- name -指定数据的名称

- content -指定数据的内容

meta 的属性主要有两种：

- name

- http-equiv。

  1.name 属性:主要是用来描述网页，对应于 content 属性，便于机器人的查找、分类。

常见的 name 属性：

- keywords:表示网页的关键字,用于向搜索引擎说明可以同时指定多个关键字，关键字之间用','隔开

```html
<meta name="keywords" content="网站 公司 互联网 购物平台" />
```

- description:用于指定网站的描述，向搜索引擎概括性地描述这个网页的主要内容；

```html
<meta
  name="description"
  content="亚马逊（Amazon），是一家跨国电子商务公司，由杰夫·贝佐斯于1995年创立......"
/>
```

网站的描述会显示在搜索引擎的搜索结果中（--title 标签的内容会作为搜索结果的超链接上的文字显示）

- author:向搜索引擎说明该网站的作者

- copyright:该网站的版权

  2.http-equiv 属性：相当于 http 的文件头作用。向浏览器传递有用的信息。

常见的 http-equiv 属性：refresh content-type expires set-cookie windows-target

- content-type:设置网页内容的编码类型；
- refresh:用于定时让网页在指定的时间内刷新，如带有 url 参数，那就会执行页面的跳转
- expires:用于设定 cookie 缓存的过期时间，如果网页过期，缓存 cookie 就会被删除掉；
- windows:用于告知网页在当前窗口中以独立页面的方式显示，防止自己的网页被其他人当做 iframe 调用，即防止被钓鱼。

设置字符编码

通过 charset 去定义网页的编码格式

- GKB:表示简体中文，对 GBK 2312 的扩展，GBK 2312：也是表示简体中文，大概有 6000 多个汉字；
- ASCII:表示英文编码
- Unicode: 包含了世界上所有的字符，并且每一个符号都是独一无二的。标准有很多种：utf-8 utf-16 utf-32

```html
<meta charset="UTF-8" />

<meta 属性="该属性下的子属性" content="子属性对应的属性值" />
<meta name="keywords" content="HTML5,前端，CSS3" />
<meta name="description" content="这是一个不错的网站！" />
```

将页面重定向到另一个网站,如：3 秒后跳转到百度

```html
<meta http-equiv="refresh" content="3;url=https://www.baidu.com" />
```

### title：网页的标题

title 中的内容会显示在浏览器的标题栏，搜索引擎会主要根据 title 中的内容来判断网页的主要内容

```html
<title>HTML</title>
```

### CSS -层叠样式表

网页实际上是一个多层的结构，通过 CSS 可以分别为网页的每一个层来设置样式

而最终我们能看到只是网页最上边的一层 -总之一句话，CSS 用来设置网页中元素的样式

```html
<link href="style/reset.css" rel="stylesheet">
<link href="style/style.css" rel="stylesheet">
</style>
    body {
    padding: 0 100px;
    }
</style>

```

body 是 HTML 的子元素，表示网页的主体，网页中所有的可见内容都应该写在 body 里

```html
<body>
 <header></header>
 <nav></nav>
 <main>
   <p><a href="#bottom" id="top">去底部</a></p>
   <!-- 标签 -->
   <div>
     <a href="">目录</a>
     <!--   标签一般成对出现，但是也有一些自结束标签,如下： -->
     <img /> <img /> <input /> <input />

     <!--
        标签按照闭合特征怎么分类？按照换行特征又怎么分类？

            按闭合特征分类:
                单标签元素，如<br/><hr/>
                双标签元素，如<p><p/>
            按换行特征分类:
                块元素，如<h1>,<p>,<ul>,<table>
                行内元素，如<b>,<td>,<a>,<img>
             -->

     <!--属性-->
     <h1>这是我的<font color="red" size="12">第一个</font>网页!</h1>
   </div>
 </main>

</body>
</html>
```

## 标题标签

```html

            <div>
                <a href="">目录</a>
                <p id="biaoti"></p>
                <!--
                    在网页中html专门用来负责网页的结构
                        所以在使用html标签时，应该关注的是标签的语义，而不是它的样式

                        标题标签：
                            h1-h6 一共有六级标题，从h1-h6重要性递减
                            h1在网页中的重要性仅次于title标签，一般一个页面只会有一个h1
                            一般情况下标题标签只会使用到h1-h3,h4-h6很少用
                            标题标签都是块元素
                -->
                <h1>一级标题</h1>
                <h2>二级标题</h2>
                <h3>三级标题</h3>
                <h4>四级标题</h4>
                <h5>五级标题</h5>
                <h6>六级标题</h6>

                <!--
                    hgroup标签用来为标题分组，可以将一组相关的标题同时放入到hgroup
                -->
                <hgroup>
                    <h1>回乡偶书</h1>
                    <h2>其一</h2>
                </hgroup>

                <p>在p标签中的内容就表示一个段落，p标签可以表示页面中的一个段落</p>
                <p>p也是一个块元素</p>

                <!-- em标签用于表示语音语调的一个加重-->
                <p>今天天气<em>真</em>不错！</p>
                <!-- strong表示强调，重要内容 -->
                <p>你今天必须要<strong>完成作业</strong>!</p>

                鲁迅说：
                <!-- blockquote表示一个长引用 -->
                <blockquote>
                    这句话我没有说过！
                </blockquote>

                <!-- q表示一个短引用 -->
                子曰<q>学而时习之，乐呵乐呵</q>

                <!-- br标签表示页面中的换行 -->
                <br>
            </div>

<!--  文本标签-->
            <div>
                <a href="">目录</a>
                <p id="wenben">文本标签</p>
                <!--
                 1.加重（加粗）标签
                    b和strong都可以加粗文本，但在意义上有很大的不同。
                    b标签，它的目的仅仅是为了加粗文本，一种风格上面的需求，物理行为，告诉浏览器这个字体要加粗一下；
                    strong标签：一种逻辑标记行为。目的是为了加强该文本的重要性，不仅仅是为了让读者意识到这段文字很重要，搜索引擎也可以更好检索到。一些盲人阅读器、无障碍功能，当识别到strong标签时，会加重读音和语气。

                2.斜体标签
                    i标签，也仅仅是对文本进行倾斜操作，单纯风格上的改变；
                    em标签和strong标签意义，是一种逻辑标记行为。

                3.删除标签和新增标签
                    del
                    ins
                    后期可通过'text-decoration'来装饰文本的线条

                4.上标和下标
                    下标标签：<sub></sub>
                    上标标签:<sup></sup>

                5.ruby标签
                    ruby一般用来展示东亚文字的注音
                        rb代表内容的主体；
                        rt代表的就是上方注释的内容；
                        rp代表浏览器不兼容时备选的显示内容。
            -->

                <ruby>
                    <rb>文字</rb>
                    <rt>wenzi</rt>
                    <rp>备选</rp>
                </ruby>

            </div>

<!-- html5新增的元素 -->
            <div class="html5_xz">
                <a href="">目录</a>
                <p id="html5_xz">html5新增的元素</p>
                <div>
                <!--
                    1.新增结构标签
                        html5新增的、section、header用的多，其他用的不是很多,平时div用的最多，nav
                        header:表示网页的头部
                        main:表示网页的主体部分（一个网页中只有一个main）
                        footer:表示网页的底部
                        nav:表示网页的导航
                        aside:表示和主体相关的其他内容（侧边栏）
                        article:表示一个独立的文章,article里面可以有小article
                            <article>
                                <article>111</article>
                                <article>222</article>
                            </article>
                        sectioon:表示一个独立的区块，上边的标签都不能表示时使用section

                        div:没有语义，就用来表示一个区块，目前来讲div还是我们主要的布局元素
                            div可以代替上面的所有标签，
                        span:行内元素，没有语义，一般用于在网页中选中文字
                    -->

                    <header id="header"></header>
                    <main></main>
                    <footer></footer>

                    <nav></nav>
                    <aside></aside>
                    <article></article>

                    <section></section>

                    <div></div>

                    <span></span>
                    <br>

                    <p>页面的布局</p>
                    <img src="./picture/html/%F1V4UVK}F3I}P3RUT($NQU.jpg" alt="">
                    <br>

                    <!-- 频繁的使用div标签布局，不利于后续开发人员的维护，没法从直观的布局上了解到页面的结构。另外，通过纯DIV+CSS布局，对SEO也不太友好，因为DIV对于搜索引擎来说是一个无意义的标签。

                        HTML5新元素是为了开发工程师提供了更多的选择，在开发时适当、合理地使用，能够让后续的维护成本降低。
                        只要是合理开发，是否使用新元素并不重要。但由于新增元素比单纯的DIV更有助于结构的搭建以及SEO的优化，建议开发者在主流浏览器中使用。
                    -->
                    <div>
                        <header>页面的头部</header>
                        <nav>网站的导航部分</nav>
                        <main>
                            <!-- header和footer不同于main，并不是只能出现一个，可以写多个 -->
                            <section>
                                页面的内容区
                                <header>页面内容的头部</header>
                                <article>页面内容的主体</article>
                                <footer>页面内容的底部</footer>
                            </section>
                            <aside>页面的侧边栏</aside>
                        </main>
                        <footer>页面的底部，主要是版权区</footer>
                    </div>

                    <br>

                    <!-- 2.html5新增的功能标签 -->
                    <a href="#catalogue">目录</a>
                    <p id="media">播放音视频</p>
                    <!--
                        audio标签用向页面中引入一个外部的音频文件
                            音视频文件引入时，默认情况下不允许用户在自己控制播放停止
                        属性：
                            controls 是否允许用户控制播放
                            autoplay 音频文件是否自动播放
                                -如果设置了autoplay 则音乐在打开页面时自动播放
                                但是目前大部分浏览器不会自动对音乐进行播放，怕突然播放影响用户体验
                            loop 音乐是否循环播放
                            muted:音频输出时为静音播放;
                            preload：当页面加载时，音频就开始进行加载并预备播放；
                                -auto：
                        -->
                        <audio src="media/audio/wünsche - Birds.mp3" controls></audio>
                        <br>

                        <!-- 除了通过src来指定外部文件的路径以外，还可以通过source指定 -->
                        <!-- 为了兼容老版本浏览器，使用下面的方法  -->
                        <audio controls>
                            <!-- 当浏览器不支持时显示插件时，会显示文字 -->
                            <!-- 对不起，您的浏览器不支持播放音频，请升级浏览器！ -->
                            <!-- 前面的音视频不支持是进行下一个 -->
                            <source src="./media/audio/MKJ,Antoine Chambe,Otter Berry - Andalusia (MKJ Remix).ogg" type="audio/ogg">
                            <source src="./media/audio/MKJ,Antoine Chambe,Otter Berry - Andalusia (MKJ Remix).mp3" type="audio/mp3">
                            <!-- 正常浏览器用source,不正常浏览器用source加embed -->
                            <embed src="./media/audio/MKJ,Antoine Chambe,Otter Berry - Andalusia (MKJ Remix).mp3" type="audio/mp3" width="300" height="100">
                        </audio>
                        <br>

                        <!-- video标签引入视频，和audio使用方法基本一样 -->
                        <!--  -->
                        <video controls>
                            <!-- poster 视频的封面，播放视频前会使用这张图-->
                            <!-- poster -->
                            <source src="./media/video/野良神第二季-10.webm"></source>
                            <source src="./media/video/野良神第二季-10.mp4">
                            <embed src="./media/video/野良神第二季-10.mp4" type="video/mp4">
                        </video>

                        <br><br>
                        <iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=m3232y7dieh" allowFullScreen="true" width="500" height="300"></iframe>
                </div>
            </div>

<!-- 块元素、行内元素，显示与隐藏 -->
            <div>
                <a href="">目录</a>
                <p id="block_inline">块元素、行内元素，显示与隐藏</p>
                <!--
                    空(void)元素:<br> <hr> <img> <input> <link> <meta>

                    1.块元素、行内元素
                        1.1块元素(block element)：页面中单独占一行的元素
                            -在网页中一般通过块元素来对页面进行布局
                                例如：<h1>, <p>, <ul>, <table>、<div>
                            -能够设置宽高和外边距

                        1.2行内元素（内联元素）（inline element）：在页面中不会单独占一行的元素
                            例如：<b>, <td>, <a>, <img>、<input>、<span>
                            -行内元素能够与其他元素（非块级）元素共处一行

                            -不可设置宽高？img\input可以设置宽高
                            -行内级非置换元素，它的宽高由内容撑开，并且不能设置宽高；例如，a\p
                                通过 display: block; 设置显示属性为块级就可以设置宽高

                            -外边距失效

                        1.3 书写规则
                        -一般情况下会在块元素中放行内元素，而不会在行内元素中放块元素
                        -块元素中基本上什么都能放，
                            有几个特殊的块级元素只能包含内嵌元素，不能包含块级元素，
                            这几个特殊标签是：h1、h2、h3、h4、h5、h6、p、dt

                            <div><h1>对</h1><p>对</p></div>
                            <a href="#"><span>对</span></a>
                            <span><div>错</div></span>

                            块级元素与块级元素并列、内嵌元素与内嵌元素并列
                            <div><h2>对</h2><p></p>对</div>
                            <div><a href="#">对</a><span>对</span></div>
                            <div><h2>错</h2><span>错</span></div>

                            浏览器在解析网页时，会自动对网页中不规范的内容进行修正
                                比如：
                                    标签写在根元素外部
                                    p元素中嵌套了块元素（p中不能放任何元素）
                                    根元素中出现了除head和body以外的子元素
                                    ... ...

                            在浏览器中按f12查看Elements中的代码和在这写的代码对比

                            <p>
                                <h1>哈哈</h1>
                            </p>

                    2.置换元素与非置换元素
                        2.1置换元素  例如：img\input\select
                            CSS渲染模型不会考虑对比此内容进行渲染，也就是说浏览器会根据元素的标签和数学，来决定元素的具体显示内容。
                            比如说，浏览器会根据img标签的src属性的值，来读取图片属性并显示出来，但是查看具体的HTML代码，则看不到图片的具体信息。
                        2.2 非置换元素
                            HTML大多数标签都是非置换元素，他们的特点就是：内容是什么，页面就渲染什么
                        2.3 行内级置换元素的宽高定义
                            如果宽高的计算值为auto，并且元素有固定的宽高，那么这个置换元素的宽度就是它固定的宽度；
                            若宽度为auto，但是高度非auto，并且该元素有固定的宽高比，那元素的宽度就等于 实际高度值*固定宽高比。

                    1. 显示属性 ———display
                        规定元素的展示类型。通过该属性可以让与元素呈现另一个元素的显示效果。
                        display 用来设置元素显示的类型
                        3.1 可选值：
                            inline  将元素设置为行内元素
                            block   将内容设置为块元素
                            inline-block 将内容设置为行内块元素
                                -行内块，既可以设置宽高又不会独占一行
                                -行内块不适合作为外部的布局容器
                            table 将元素设置为一个表格
                            none 元素不在页面中显示
                            list-item:此元素会作为列表显示；
                            table:此元素会作为块级表格来显示；

                        3.2 display属性在开发中的实际用途
                            在一些特定的情况下，需要改变该标签的显示属性，让他同时具有行内、块级两者兼备的属性；
                                在一些超链接文本中，可以设置它的显示属性为行内块或块级，从而改变它的宽高来扩大超链接可点击的区域
                                对于图像，设置display:block 或者浮动来将图像标签下面的几个像素空隙去掉；如下：
                                    img{
                                        width: 100px;
                                        height: 100px;
                                        display: block;
                                    }
                                    div{background-color: red;}

                                    <div><img src="./picture/binbin.jpg" alt=""></div>
                            通过JS或者其它交互行为时，元素可能存在特殊效果，就会频繁使用到display:none和display:block控制元素的显示隐藏。

                    4.元素的显示隐藏
                        大部分页面中，都可以看到关于元素显示隐藏的一些效果。比如购物网站的二级商品标签，某些网站首页的导航栏下拉菜单。这里的原理大部分是通过
                    JS的一些事件监听功能来触发元素的显示或者隐藏。元素的显示隐藏可以通过更改透明度、可见度或者显示方式来控制。

                    4.1控制元素显示隐藏的方式
                        4.1.1透明度 opacity
                            0 完全透明
                            1 完全不透明

                        4.1.2 visibilit
                        用设置元素的显示状态，规定元素是否可见
                            可选值：
                                visible 默认值，元素在页面中正常显示
                                hidden 元素在页面中隐藏  不显示，但是依旧占据页面的位置
                        4.1.3 显示方式 display
                        不仅可以让元素显示为行内、块级等，也可以通过none让元素直接不渲染,从而达到一个隐藏效果。
                        display:none;

                    4.2 三种显示隐藏方式的区别

                        区别一
                        通过样式的比较，可以发现三个元素都隐藏了。
                            opacity和visibility：仍然保持在原来的位置上，没有影响页面结构
                            display元素没有渲染在页面上，那也没有对应的结构。


                        区别二
                        在每个box添加一个子元素，然后将子元素单独显示出来
                            visibility的子元素可以通过visibility:visible将元素重新显示出来；
                            op和dis的子元素无论如何都没有显示
                        区别三
                        通过交互效果，对每一个隐藏的盒子添加点击事件，点击后让另一个盒子显示。
                            visibility display：绑定在元素上的事件无法被触发；
                            opacity:注册在该元素上的事件可以被触发。


                        属性                    页面结构    后代元素        绑定事件
                        opacity:0             宽高正常    不可单独显示      能触发事件
                        visibility:hidden      宽高正常    可单独显示      不能触发事件
                        display:none                        都不渲染

                    5.回流与重绘
                        通过上面的例子可以发现，使用display:none将元素隐藏后，由于存在宽高的变化，可能会导致页面的布局发生改变。由于后面的
                    结构，都是基于前面的的结构进行布局的。所以结构发生变化，整个页面将需要重新渲染。

                    5.1页面的渲染过程
                        浏览器将HTML页面解析为一个DOM树（Docunment Object Model 文档对象模型），DOM树的构建过程是一个深度遍历的过程；简单来说，就是
                    当前节点的所有子字节都构建好后，才会构建当前节点的下一个兄弟节点；
                        将CSS解析成CSS规则树（CSS Object Model CSS对象模型）；
                        构建：将DOM树和CSS树构建成一个reder树（渲染树），渲染树不等于DOM树，像display:none;折中没有具体内容的元素是不会进入到渲染树当中的；
                        布局：根据渲染树，浏览器可以计算出网页中有哪些节点，各个节点的css及其从属关系，然后可以计算出每个节点在屏幕当中的位置；
                        绘制：遍历渲染树，进行绘制页面中的各个元素
                    这时，如果通过display去更改了元素的隐藏效果，页面结构也会发生改变。此时浏览器机会重新构建渲染树，然后在进行一次布局和绘制，如果仅仅是改变
                    了opacity和visibility等这种不影响布局的属性，这种改变只会触发浏览器的重绘机制，只需要一次重绘过程，就能将新的外观重新绘制到元素上了。

                    回流肯定有重绘，但是重绘不一定导致回流
                -->
                        <!-- 隐藏盒子，鼠标放上去显示 -->
                        <!-- .hidden{
                            display: none;
                            color: coral;
                        }
                        .box:hover .hidden{
                            display: block;
                        } -->

                        <div class="box">
                            111
                            <div class="hidden">
                                1111
                            </div>
                        </div>

            </div>

<!-- 实体字符 -->
            <div>
                <a href="">目录</a>
                <p id="shiti">字符实体</p>
                <!--
                    在网页中编写多个空格时默认情况会自动被浏览器解析为一个空格
                    在HTML中不能直接写一些特殊符号，如：连续的多个空格、字母两侧的大于小于号

                    如果我们需要在网页中书写这些特殊符号，则需要使用html中的实体（转义字符）
                    实体的语法：&实体的名字;
                        &nbsp;  -空格
                        &gt;    -大于号
                        &lt;    -小于号
                        &copy;  -版权符号
                        ...
                    更多实体：w3school:
                    https://www.w3school.com.cn/html/html_entities.asp
                -->
                <p>今天&nbsp;&nbsp;&nbsp;天气真不错！</p>
                <p>a&lt;b&gt;c</p>
            </div>

            <!--  -->
            <div>
                <a href="">目录</a>
                <p id="list">列表</p>
                <!--
                        在HTML中有三种列表（list）：
                        1、有序列表ol：使用ol标签来创建有序列表
                            使用li来表示列表项
                        2、无序列表ul：使用ul标签来创建无序列表，无序列表用的最多，可以用来创建菜单
                            使用li来表示列表项
                        3、定义列表dl:使用dl标签来创建定义列表，dl可以用来创建下拉菜单
                            使用dt来表示定义的内容
                            使用dd来对内容解释说明
                        列表之间可以相互嵌套
                    -->

                    <ol type="1" reversed >
                        <li>我是整整齐齐的第1个帅老师</li>
                        <li>我是整整齐齐的第2个帅老师</li>
                        <li>我是整整齐齐的第3个帅老师</li>
                        <li>我是整整齐齐的第4个帅老师</li>
                        <li>我是整整齐齐的第5个帅老师</li>
                    </ol>
                    <br>
                    <ol type="I" start="IV">
                    <li>结构</li>
                    <li>表现</li>
                    <li>行为</li>
                    <li>结构</li>
                    <li>表现</li>
                    <li>行为</li>
                </ol>

                <!--
                    tpye属性：指定编号的类型,1,A,a,i(罗马数字),I（大写罗马数字）
                    reversed属性:代表列表中的项目是否倒序排列true或者fales,可以直接
                    -->

                    <hr>

                ul>li{我是第$个}*10
                <!-- 快捷键 -->

                <ul>
                    <li>我是第1个</li>
                    <li>我是第2个</li>
                    <li>我是第3个</li>
                    <li>我是第4个</li>
                    <li>我是第5个</li>
                </ul>

                    <ul>
                        <li>结构</li>
                        <li>表现</li>
                        <li>行为</li>
                    </ul>
                    <hr>

                    <dl>
                        <dt>结构</dt>
                        <dd>结构表示网页的结构，结构用来规定网页中哪里是标题、哪里是段落</dd>
                        <dd>结构表示网页的结构，结构用来规定网页中哪里是标题、哪里是段落</dd>
                        <dd>结构表示网页的结构，结构用来规定网页中哪里是标题、哪里是段落</dd>
                        <dt>1</dt>
                        <dd>2</dd>
                    </dl>
                <hr>

                <ol type="1">
                    <li>Windows 95</li>
                    <li>Windows 98</li>
                    <li>Windows NT
                        <ul type="disc">
                            <li>Windows NT Workstation</li>
                            <li>Windows NT Server</li>
                        </ul>
                    </li>
                    <li>Windows Me</li>
                    <li>Windows  2000
                        <ul type="square">
                            <li>Windows  2000 Perfessional</li>
                            <li>Windows  2000 Server</li>
                            <li>Windows  2000 Advanced Server</li>
                        </ul>
                    </li>
                    <li>Windows  XP
                        <ul>
                            <li>Windows  XP Home Edition</li>
                            <li>Windows  Xp Perfessional</li>
                        </ul>
                    </li>
                </ol>


                <hr>

                <!-- 为什么有序列表里面的无序列表前面的实心变成空心 -->
                <!-- 在无序列表中,它的着重号会随着层级改变 -->
                <!-- 有序列表不会和无序列表一样，随着层级的改变而改变 -->
                <ul>
                    <li>
                        aa
                        <ul>
                            <li>aa-1</li>
                            <li>aa-2
                                    <ul>
                                        <li>aa-3</li>
                                        <li>aa-4</li>
                                    </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                <hr>
            </div>


            <p id= "table">table表格</p>
            <div class="table">
                <a href="./table表格.html">table表格</a>
            </div>
            <hr>

            <a href="#catalogue">目录</a>
            <p id="form">form表单</p>
            <div>
                <a href="./form表单.html"></a>
            </div>
            <hr>
            <br>




            <!--  -->
            <div>
                <a href="">目录</a>

            </div>

            <!--  -->
            <div>
                <a href="">目录</a>

            </div>


    <a href="#catalogue">目录</a>
    <p id= "chaolianjie">超链接</p>
            <!--
                超链接可以让我们从一个页面跳转到其它页面，或者是当前页面的其他位置
                使用a标签来定义超链接
                    属性：
                        href：指定跳转的目标路径
                            -值可以是一个外部页面的地址
                            -也可以写一个内部页面的地址

                        target：用来指定超链接打开的位置
                            可选值：
                                _self 在当前页面中打开超链接，没有则默认_self
                                _blank 在一个新的页面中打开超链接

                超链接也是一个行内元素，在a标签中可以嵌套除它自身外的任何元素
            -->
            <a href="https://www.baidu.com" target="_blank">百度</a>
            <br>
            <!--
            当我们需要跳转到一个服务器的内部页面时，一般我们都会使用相对路径
                相对路径都会使用./或../开头
                ./可以省略不写。如果不写./也不写../就相当于写了./

                ./表示当前文件所在的目录
                    - 在这里当前页面就是test1.html
                    - ./就等于 test1.html所在的目录 test

                ../表示当前文件所在目录的上一级目录，这里是HTML
            -->
            <p id="inline_box">相对路径,跳转到:<a href="../lianxi_test/css练习/京东左侧导航栏.html" target="_self">京东左侧导航栏</a></p>

            <p id="target">12</p>
            <a name="target">11</a>或<a href="#target"></a>

            <br><br>
            <a href="#header">去header</a>
            <br><br>

            <a href="#bottom">去底部</a>
            <br><br>

            <p>星星</p>
            <br><br>

            <!-- 在开发中可以将#作为超链接的路径展位符使用 -->
            <a href="#">这是一个新的超链接！</a>
            <br><br>

            <!-- 可以使用javascript:; 来作为href的属性，此时点击什么也不会发生 -->
            <a href="javascript:;">这是一个新的超链接！</a>
            <br><br>

            <!--
                可以直接将超链接的href属性设置为#，这样点击超链接后
                    页面不会发生跳转，而是转到页面的顶部的位置

                跳转到页面的指定位置，只需将href属性设置： #目标元素的id值

                id属性(唯一不重复的)
                    -每一个标签可以添加一个id属性
                    -id属性就是元素的唯一标识，同一个页面中不能出现重复的id属性

                class 是一个html中的标签属性，它和id类似，不同的是class可以重复使用
                    可以通过class属性为元素分组
                    可以同时为一个元素指定多个class属性
            -->
            <a id="bottom" href="#top">回到顶部</a>

            <!-- 其它功能： -->
            <a href="sms:17336464201" >点我发送</a>
            <a href="tel:17336464201" >点我发送</a>
            <a href="mailto:邮箱地址" >点我发送</a>

    <!--
            src和href的区别？
            1.href是Hypertext Reference的简写，表示的是超文本引用，用来建立当前元素和文档之间的链接，它与页面直接的关系为链接的关系，在加载它的时候页面本身也不会停止其他内容的加载。
            常用的有：link、a。例如：
                <a href="http://www.baidu.com"></a>
                <link type="text/css" rel="stylesheet" href="common.css">

            浏览器会识别该文档为css文档，并行下载该文档，并且不会停止对当前文档的处理。这也是建议使用link，而不采用@import加载css的原因。

            2.src是source的简写，表示的是引入文件，目的是要把文件加载到html页面中去，当浏览器解析的时候会暂停其他的内容而会先加载src内容，必须要等到src的内容加载完成之后才会执行后面。这就是为什么js文件往往放在了html文件的最下面的原因。如果是在页面head上放了js文件，目前我知道的一种方法来实现js最后加载的方法就是在js脚本里使用:window.onload事件处理。
            src的内容是页面必不可少的一部分。src指向的内容会嵌入到文档中当前标签所在的位置。常用的有：img、script、iframe。例如
                <img src="img/girl.jpg"/>
                <frame src="top.html">
                <iframe src="top.html">
                <script src="show.js"></script>

            简而言之，src用于替换当前元素；href用于在当前文档和引用资源之间建立联系。

            href:Hypertext Reference,与外部的资源建立一个链接，并不会替代这个标签的内容；
            src:将外部资源引入到页内进行替换，并且在读取资源时，会先完成src的加载才会进行下一步的读取。
    -->

    <a href="#catalogue">目录</a>
    <p id="picture">图片标签</p>
            <!--
                图片标签：img 自结束标签
                img这种元素属于替换元素（块和行内元素之间，具有两种元素的特点）
                属性：
                    -src 属性指定的是外部图片的路径（路径规则和超链接一样）
                    -alt 图片的描述，这个描述默认情况下不会显示，有些浏览器会在图片无法显示时显示
                        搜索引擎会根据alt的内容来识别图片，如果不写alt属性则图片不会被搜索引擎所收录
                    -width 图片的宽度（单位是像素）
                    -height 图片的高度
                        如果宽度和高度中只修改了一个，则另一个会等比例缩放
                        写的时候一般只写一个，两个都写图片比例可能被改变

                    注意：
                        一般情况下在pc端，不建议修改图片的大小
                            大图缩小浪费内存，小图放大，图片失真
                            最好是需要多大的图片就裁多大
                        但是在移动端像素高一点，会使用大图片，经常需要对图片进行缩放（大图缩小）

                图片格式：
                    -jpeg(jpg)、gif、png、
                    -webp
                        -谷歌新推出的专门用来表示网页中图片的一种格式
                        -它具备其他图片格式的所有优点，而且文件还特别小
                        -缺点：兼容性不好
                -base64
                        -将图片使用base64编码，这样可以将图片转换为字符，通过字符的形式引入图片
                        -一般都是一些需要和网页一起加载的图片才会使用base64
                        -如，背景可以用
                        效果一样，用文件小的,效果不一样，用效果最好的
            -->
            <!-- <img src="./picture/binbin.jpg" alt="好看动漫图图片"> -->

            <!-- 从网页中引入图片，一般不用，图片一删除就没，有的没版-->
            <img width="50px" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190928%2F19%2F1569670620-jXRFnBhPEC.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617931986&t=2ef246ceab10e86a177f10b1fd135b7c" alt="好看图片">


                <a href="#catalogue">目录</a>
                <p id="iframe">内联框架</p>
            <!--
                iframe内联框架，用于在当前页面中引入一个其他页面,现在用的不多
                    src 指定引入的网页的路径
                    frameborder 指定内联框架的边框
            -->
            <iframe src="https://www.baidu.com" width="800" height="600" frameborder="0"></iframe>


        </main>
        <footer>

        </footer>
     </body>
</html>

<h1>我就要写在html标签的外部！</h1>


<!-- 注释中不能写注释 -->

<!--
    快捷键：
        ! 然后按tab键，一键生成网页结构
        注释  Ctrl+/
        标签   比如： p+tab  h1+tab
-->
    <h1></h1>
    <p></p>


<!-- ! 然后按tab键，一键生成网页结构 -->
<!--
<!DOCTYPE html>
<html lang="en">  -lang表示网页语言  en 英文网页     zh中文网页
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>
-->

```
