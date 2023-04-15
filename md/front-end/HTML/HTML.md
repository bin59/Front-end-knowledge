<!-- 
-   HTML（Hypertext Markup Language）超文本标记语言

-   它负责网页的三个要素中的结构。
-   HTML使用标签的形式来标记网页中的不同组成组成部分。
-   所谓的超文本指的是超链接，使用超链接可以让我们从一个页面跳转到另一个页面。
 -->

<!--
     迭代
          网页的版本：HTML4、HTML2.0、HTML5、...
          文档声明（doctype）：用来告诉浏览器当前网页的版本
              -html5的文档声明：
              <!doctype html>
              <!Doctype HTML>                    
-->
<!doctype html>
<!-- html的根标签（元素），网页中的所有内容的都要先写根元素里面 -->
<html>
    <!-- head是网页的头部，head中的内容不会在网页中直接出现，主要是用来帮助浏览器或搜索引擎来解析网页 -->
    <head>
        <!-- 
            meta 元信息
                所谓的元信息，指的是对网页进行描述的信息。
                网页本身就是一个信息，同时带有其他属性。作者、主要讲解、采用的是什么语言。现在市场上几乎所有的搜索引擎都是根据搜索机器人自动查找到meta值（元信息）来进行分类。
            meta标签用来设置网页的元素数据，元数据不是给用户看的
                -charset  -指定网页的字符集，避免乱码
                -name     -指定数据的名称
                -content  -指定数据的内容
            meta的属性主要有两种：name和http-equiv。O
                1.name属性:主要是用来描述网页，对应于content属性，便于机器人的查找、分类。
                常见的name属性：
                    -keywords:表示网页的关键字,，用于向搜索引擎说明可以同时指定多个关键字，关键字之间用','隔开
                        <meta name="keywords" content="网站 公司 互联网 购物平台">
                    -description:用于指定网站的描述，向搜索引擎概括性地描述这个网页的主要内容；
                        <meta name="description" content="亚马逊（Amazon），是一家跨国电子商务公司，由杰夫·贝佐斯于1995年创立......">
                        网站的描述会显示在搜索引擎的搜索结果中（--title标签的内容会作为搜索结果的超链接上的文字显示）
                    -author:向搜索引擎说明该网站的作者
                    -copyright:该网站的版权
                2.http-equiv属性：相当于http的文件头作用。向浏览器传递有用的信息。

                常见的http-equiv属性：refresh content-type expires set-cookie windows-target
                    ●content-type:设置网页内容的编码类型；
                    ●refresh:用于定时让网页在指定的时间内刷新，如带有 url参数，那就会执行页面的跳转
                    ●expires:用于设定 cookie 缓存的过期时间，如果网页过期，缓存cookie就会被删除掉；
                    ●windows:用于告知网页在当前窗口中以独立页面的方式显示，防止自己的网页被其他人当做 iframe 调用，即防止被钓鱼。
        -->
        <!-- 
            设置字符编码
            通过 charset去定义网页的编码格式
                GKB:表示简体中文，对GBK 2312的扩展，GBK 2312：也是表示简体中文，大概有6000多个汉字；
                ASCII:表示英文编码
                Unicode: 包含了世界上所有的字符，并且每一个符号都是独一无二的。标准有很多种：utf-8  utf-16 utf-32
         -->
        <meta Charset="UTF-8">
        
        <meta 属性="该属性下的子属性" content="子属性对应的属性值">
        <meta name="keywords" content="HTML5,前端，CSS3">
        <meta name="description" content="这是一个不错的网站！">

        <!-- 将页面重定向到另一个网站,如：3秒后跳转到百度 -->
        <!-- <meta http-equiv="refresh" content="3;url=https://www.baidu.com"> -->
        
        <!-- title：网页的标题，title中的内容会显示在浏览器的标题栏，搜索引擎会主要根据title中的内容来判断网页的主要内容 -->
        <title>HTML</title>

        <!-- 
            CSS
                -层叠样式表
                -网页实际上是一个多层的结构，通过CSS可以分别为网页的每一个层来设置样式
                    而最终我们能看到只是网页最上边的一层
                -总之一句话，CSS用来设置网页中元素的样式
        -->
        <!-- <link href="style/reset.css" rel="stylesheet"> -->
        <!-- <link href="style/style.css" rel="stylesheet"> -->
        <style>
            body{
                padding: 0 100px;
            }
        </style> 
        
    </head>
    <!-- body是HTML的子元素，表示网页的主体，网页中所有的可见内容都应该写在body里 -->
    <body>
        <header></header>
        <nav></nav>
        <main>
            <p> <a href="#bottom" id="top">去底部</a></p>
            <!-- 目录 -->
            <div class="catalogue">
                <p id="catalogue">目录</p>
                <ul>
                    <li><a href="#biaoti">标题标签</a></li>
                    <li><a href="#wenben">文本标签</a></li>
                    <li><a href="#html5_xz">html5新增的元素</a></li>
                    <li><a href="#media">html5新增功能标签，音视频播放</a></li>
                    <li><a href="#block_inline">块元素、行内元素，显示与隐藏</a></li>
                    <li><a href="#shiti">字符实体</a></li>
                    <li><a href="#list">列表</a></li>
                    <li><a href="#table">表格</a></li>
                    <li><a href="./table表格.html">table表格.html</a></li>
                    <li><a href="#form">form表单</a></li>
                    <li><a href="./form表单.html">form表单.html</a></li>
                    <li><a href="#chaolianjie">超链接</a></li>
                    <li><a href="#picture">图片标签</a></li>
                    <li><a href="#iframe">内联框架</a></li>
                    <li><a href="./CSS.html">CSS</a></li>
                    <li><a href="javascript:;">CSS(./style/style.css)</a></li>
                    
                    <br>
                    <li><a href="javascript:;">练习</a></li>
                    <li><a href="../lianxi_test/css练习/图片列表.html">图片列表</a></li>
                    <li><a href="#inline_box">京东左侧导航栏</a></li>
                    <li><a href="../lianxi_test/css练习/网易新闻列表.html">网易新闻列表列表</a></li>
                    <br>

                    <li><a href="../HTML、CSS/盒模型.html">盒模型</a></li>
                    <li><a href="../HTML、CSS/2.浮动.html">2.浮动</a></li>
                    <li><a href="../HTML、CSS/2.1_导航条.html">2.1_导航条</a></li>
                    <li><a href="../HTML、CSS/2.2_简单的布局.html"></a>2.2_简单的布局</li>
                    <li><a href="../HTML、CSS/2.3_高度塌陷问题.html"></a>2.3_高度塌陷问题</li>
                    <li><a href="../HTML、CSS/2.4_clear.html"></a>2.4_clear</li>
                    <li><a href="../HTML、CSS/2.5_使用after伪元素解决高度塌陷.html"></a>2.5_使用after伪元素解决高度塌陷</li>
                    <li><a href="../HTML、CSS/2.6_clearfix.html"></a>2.6_clearfic</li>
                    <li><a href="../HTML、CSS/3.定位position.html"></a>3.定位position</li>
                    <li><a href="../HTML、CSS/3.1绝对定位元素的布局.html"></a>3.1绝对定位元素的布局</li>
        
                    <br>
                    <li><a href="../JavaScript/JavaScript.html">JavaScript</a></li>
                </ul>
            </div>
          
<!-- 标签 -->
            <div>
                <a href="">目录</a>
                <!--   标签一般成对出现，但是也有一些自结束标签,如下： -->
                <img>   <img />  <input>   <input />
                
                <!-- 标签按照闭合特征怎么分类？按照换行特征又怎么分类？
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

<!-- 标题标签 -->
            <div>
                <a href="">目录</a>
                <p id="biaoti">标题标签</p>
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
              
                    3. 显示属性 ———display
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
            <img src="./picture/binbin.jpg" alt="好看动漫图图片">

            <!-- 从网页中引入图片，一般不用，图片一删除就没，有的没版-->
            <img width="50px" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190928%2F19%2F1569670620-jXRFnBhPEC.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617931986&t=2ef246ceab10e86a177f10b1fd135b7c" alt="好看图片">

            <img width="200px" src="data:image/jpg;base64,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" alt="base64">   

            
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