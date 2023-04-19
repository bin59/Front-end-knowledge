
```css

@charset "UTF-8";
/* 防止有的情况HTML中的编码影响到CSS这里的编码,如果没有写，会引入外部HTML中的编码

/* 
    目录 
        一、基本语法
        二、样式重置
        三、选择器
        四、CSS三大属性
*/

/* 
    一、CSS基本语法：选择器 声明块（声明块{}中可以包含多个属性） 
        选择器：通过选择器可以选中页面中的指定元素
            语法：标签名{}
            例子：p{}   h1{}   div{}

        声明块：为元素设置样式
            声明块由一个个声明组成
            声明是一个名值对结构
                一个样式名对应一个样式值，名和值之间以":"连接，以";"结尾
*/
h1,span{
    color:brown;
}

/*  二、样式重置
        一般浏览器会为元素设置一些默认样式，会影响到页面布局
        通常情况下编写网页时必须要去掉默认样式（PC端的页面）
*/

/*      1.调配选择器去除，普通的页面小练习demo这样去除，但还会有去除不掉的 */
*{
    margin:0;
    padding:0;
}
/* 
        2.真正的项目用重置样式表（用其中一个） ，因为实际开发中会存在很多层级结构和元素，页面层次的结构特别复杂。如果用通配符，相当于存在很多的重要继承、重复渲染的次数。重复继承的次数越多，页面性能就会严重下降。所以说最好还是通过标签来清除样式。
        reset.css      直接去除所有样式
        normalize.css  对默认样式进行统一。既然浏览器提供了这些默认样式，那它就是有意义的。既然不同浏览器的默认样式不一致，那么，normalize.css就将这些默认样式设置为一致。
*/

/* 三、选择器 */
/* 
    1.基础选择器
        标签选择器（元素选择器）
        交集选择器
        选择器分组（并集选择器）
        通配选择器
        类选择器和id选择器
        关系选择器
            子元素选择器
            后代元素选择器
            相邻兄弟选择器
    2.复杂选择器
        属性选择器
        伪类选择器
        伪元素选择器

    选择器的使用规则
    强烈建议大家以类名选择器为主。主要原因在于：类名选择器可以同时选择多个元素，类似的元素可以使用同一个类名，
    就比ID选择器灵活。同时，元素选择器，范围选择太广了。一般开发以类名 + 标签为主。
 */

/* 
    通配选择器：选中页面中的所有元素
        语法： * 

    标签选择器：
        标签名{}
        p{}   h1{}   div{} 

    id选择器：根据元素的id属性值选中一个元素
        语法：#id属性值{}
        例子： #box{}  #red{} 
*/

*{
    color:red;
}
p{
    color:red;
}
#red{
    color:red;
}

/* 思考：
    什么时候用类名选择器什么时候用id选择器？
        1.id与class的区别
            -id相当于人的身份证，不可以重复
            -class相当于人的名称可以重复
            -一个html标签只能绑定一个id名称
            -一个html标签可以绑定多个class名称
        2.id选择器与class选择器的区别
            -id选择器是以#开头
            -class选择器是以.开头
        3.注意点
            -id一般情况下是给js用的，所有除非特殊情况下，否则不要用id去设置样式
            -在企业中一个开发人员对类的使用可以看出这个开发人员的技术水平，一般情况下企业开发中要注重冗余代码的抽取，
            可以将一些公共的代码抽取到一个类选择器中然后让标签和这个类绑定即可

    他们的优先级谁大谁小？权重多少？id选择器、类选择器、标签选择器、通配选择器
        id > class 

        内联样式               1000
        id选择器                100
        类和伪元素选择器          10
        元素选择器                1
        通配选择器                0
        继承的样式           没有优先级 
*/

/* 复合选择器：类选择器、 交集选择器、选择器分组（并集选择器）*/
/*
    类选择器：根据元素的class属性选中一组元素
        语法：class属性值
                                                   
    class 是一个html中的标签属性，它和id类似，不同的是class可以重复使用
        可以通过class属性为元素分组
        可以同时为一个元素指定多个class属性
*/
.blue{
    color:blue;
}
.abc{
    font-size:30px;
}

/* 
    交集选择器：选中同时符合多个条件的元素
        语法：选择器1选择器2选择器3选择器4选择器5选择器n{}
*/
div.blue{
    color: red;
    font-size:50px;
}
.a.b.c{
    color:aquamarine;
}
/*
    <p>少小离家老大回</p>
    <p id="red">乡音无改改鬓毛衰</p>
    <p class="blue">今天天气真不错！</p>
    <p class="abc">今天天气真不错！</p>
    <p class="a b c">今天天气真不错！</p>

    <div class="blue">我是div</div>

    <h1>今天天气真不错！</h1>
    <span>今天天气真不错！</span> 
*/

/* 
    选择器分组（并集选择器）：同时选中多个选择器对应的元素
    语法:选择器1,选择器2,选择器3,选择器n{}
*/
#b1,.p1,h1,div,.red{
    color: cadetblue;
}

/* 关系选择器： */
/* 
    父元素：直接包含子元素的元素叫父元素
    子元素：直接被父元素包含
    祖先元素：
        -直接或间接包含后代元素的元素
        -一个元素的父元素也是祖先元素
    后代元素
        -直接或间接被祖先元素包含
        -子元素也是后代元素
    兄弟元素：拥有相同的父元素

    <div class="box">
        我是一个div
        <p>我是div中的p元素
            <span>我是p元素中的span元素</span>
        </p>
        <span>我是div中的span元素</span>
    </div>
    <span>我是div外的span</span> 
*/

/* 
    子元素选择器 :选中指定父元素的指定子元素，只有子元素变后代不变
         语法：父元素 > 子元素
 */
div.box > span{
    color: gold;
}

div > p > span{
    color:lawngreen
}

/* 
    后代元素选择器：选择指定元素内的指定子元素，子元素和后代都变
        语法：祖先 后代
*/
div span{
    color: indigo;
}

/* 
    相邻兄弟选择器:选择下一个兄弟
        语法：前一个 + 后一个
    选择下面所有兄弟
            语法：兄 ~ 弟
*/
p + span{
    color:grey;
}
p ~ span{
    color: hotpink;
}

/* 组合使用 */
p + span ~span{
    color: sandybrown;
}

/* 
    属性选择器
        简单属性选择器：选择具有某个属性的标签，而不管属性的值是什么
            [属性名]选择含有指定属性的元素
            如：img[alt]、p[title]
        精确属性选择器：如果某个属性存在多个属性值，在使用时，一定要加上所有属性值才能正确匹配，如下
            [属性名=属性值]选择含有指定属性和指定属性值的元素   
                失败匹配：
                    div[data-zhubin-test="bg"]{
                                background-color:red;
                            }
                成功匹配：
                    div[adta-zhubin-test="bg fz"]{
                        background-color:red;
                    }
                 <div data-zhubin-test="bg fz"></div>
        部分匹配选择器：
            1.选择包含某个词的一组词
                [属性名-=属性值]
                如果选择的元素当中含有foo属性，且它的值包含bar这个词。
                div[foo-="bar"] { color:red; }
                
                div[data-zhubin~="testB"] { color:blue; }
                <div data-zhbin="testA testB testC"></div>
            2.选择包含某个字串
                [属性名*=属性值]选择属性值中含有 某属性值(如下面的abc)的元素
            3.选择以某个子串为起始
                [属性名^=属性值]选择属性值以指定属性值开头的元素
            4.选择以某个子串为结尾
                [属性名$=属性值]选择属性值以指定属性值结尾的元素

        起始值属性选择器

 */
 
input[type=""]{ 
    color: rgb(213, 105, 228);
}
p[title]{
    color: rgb(213, 105, 228);
}

 /* p[title]{}
 p[title=abc]{}
 p[title^=abc]{}
 p[title$=abc]{}
 p[title*=abc]{} */
/* 
    <p title="abc">少小离家老大回</p>
    <p title="abcdef">乡音无改改鬓毛衰</p>
    <p title="helloabc">今天天气真不错！</p>
    <p >今天天气真不错！</p> 
*/

/* 
   伪类选择器 
        大致分为两种:
            1.结构类的伪类选择器，它可以选择到具体的某个元素。
            2.用户界面相关的伪类选择器，它表示的是元素的某个状态
        伪类（不存在的类，特殊的类）
        -伪类用来描述一个元素的特殊状态
            比如：第一个子元素、被点击的的元素、鼠标移入的元素......
        -伪类一般情况下都是以:开头
            :first-child 第一个子元素
            :last-child  最后一个子元素
            :nth-child() 选中第n个子元素
                特殊值：
                    n 第n个 n的范围：o——正无穷
                    2n 或 even 表示选中偶数位元素
                    2n+1 或 odd 表示选中奇数位元素
            -以上这些伪类（child大排行）都是根据所有的子元素进行排序,选中的元素刚好是就会变色
*/

/* 1.结构类的伪类选择器 */
/* 
    ul中所有子元素中的第一个子元素就变成红色 
    如下面li不变色，是因为在所有的子元素中第一个子元素是span不是li。
 */
ul > li:first-child{
    color: red;
    }
/* 也不变色，li的父元素ul下的第一个元素是li时变色，但是不是li是span */
li:last-child{
    color: #9CDCFE;
}
/* 
    <ul>
        <span>我是一个span</span>
        <li>li</li>
        <li>li</li>
        <span:>我是一个span</span:
    </ul>   
*/

/* 
            -下面这几个伪类的功能和上述的类似，不同的是他们在同类型元素中进行排序 
            :first-of-type
            :last-of-type
            :nth-of-type()      
*/
 
/*ul中的第一个li */
/* 如下面的li则会变色，因为是在同类型元素（li）中排序 */
ul > li:first-of-type{
    color:red;
} 
/* 
    <ul>
        <span>我是一个span</span>
        <li></li>
        <li></li>
    </ul> 
*/

/* 除了第三个li的所有li变成红色 */
ul > li:not(:nth-of-type(3)){
    color: red;
} 
/* <ul>
    <span>我是一个span</span>
    <li></li>
    <li></li>
    <li></li>
</ul> */

ul > li:first-child{
    color: red;
}
ul > li:nth-child(2n+1){
    color: red;
}
ul > li:nth-child(even){
    color: red;
}
ul > li:first-of-type{
    color:red;
}

/* 2.用户界面相关的伪类选择器 */
/* 
    首先最常见的是a标签
        a标签的默认样式：
            a:link { color:blue; }      链接未访问（正常的链接）
            a:visited { color:purple; } 链接已访问（由于隐私的原因:所以visited这个伪类只能修改链接的颜色）
            a:hover { font-size:50px; } 鼠标悬停时的样式
            a:activ { color:red; }      链接被点击时

            思考：a标签设置伪类状态时，必须遵从的一个设定顺序？
                lvha

            a:link 和 a:visited 这两个谁写在前面都没关系。
            因为 a:hover 的作用是鼠标经过才生效，所以 a:link 和 a:visited 必须写在 a:hover 前面。
            a:active 的作用是点击时才生效，而点击之前鼠标是必须放到<a>标签上的，所以在触发 a:active 之前，肯定先触发 a:hover 。如果 a:active 写在 a:hover 前面，那么无论怎么点击，都只会触发 a:hover 的效果（浏览器的就近原则）。因为它们优先级相同，所以浏览器采用源码顺序的规则。

            由于“LoVe/HAte”比较有记忆点，所以现在默认都是用 a:link -> a:visited -> a:hover -> a:active 这个顺序 lvha。


            另外 :link 和 a的样式有可能会冲突
                #test{
                    color:yellow;
                }
                #test:link{
                    color:red!important;
                }
            
            <a href="#" id="test">sss</a>

            总结：当 <a> 标签的 href 属性为空的时候，:link样式不会生效，所以正常的  color : yellow 会生效；当 <a> 标签的 href 属性不为空的时候，:link 样式才会生效，这时候，如果 <a> 标签正常样式 和 a：link 冲突了的话，以写在后面的那个为准；


            
        除了a标签外，其它标签也能设置上面的伪类选择器，比如 input元素。
*/

/* 超链接 a元素的伪类*/
/*  :link 用来表示没访问过的链接*/
a:link{
    color: red;
}
/* :visited 用来表示访问过的链接*/
a:visited{
    color: orange;
    font-size:50px;
}
/*  :hover用来表示鼠标移入的状态*/
a:hover{
    color:aqua;
    font-size: 50px;
}
/*  :active 用来表示鼠标点击的状态*/
a:active{
    color: chartreuse;
}


/* 元素框被聚焦时的状态 */
input:focus{
    border: 10px solid red;
}
input:checked{
    width: 100px;
    height: 100px;
    background-color: royalblue;
}
/* 思考：怎么去改变选择框选中时的背景颜色？ */


/* 
    伪元素选择器
        伪元素 ，表示页面中一些特殊的并不真实存在的元素（特殊的位置）
        伪元素使用"::"开头
            ::first-letter 表示第一个字母，可以用于装饰任何  ”非行内元素“的首字母，或者开头的标点符号和首字母。常用场景：首字母下沉或首字母大小。
            ::first-line 表示第一行，注意的是，由于首行的宽度受很多因素影响，例如字号、字符间距、父级容器的宽度。所以首行由多少词或者多少字都能被应用上样式，完全是动态改变的。
                这两个无法作用在行内元素上
            ::selection 表示选中的内容
            ::before 元素的开始
            ::after  元素的最后
                - before 和 after 必须结合content属性来使用，如下：div::before、div::after

                除了可以通过content属性，我们还可以通过边框、背景、宽高去生成一个自定义的图形，来代替content显示在页面上。哪怕没有具体的内容，如果想要这些自定义图形展示在页面上，我们也需要加上content:""属性。否则，整个内容将不再显示

                除了直接用双引号""来表示没有具体内容外，也可以用"\200B"来表示一个零宽度的空格。

        p::first-letter{font-size:30px;}
        这个规则相当于浏览器以一个虚拟的元素包裹了每个在p元素中的首字母，类似下面的效果
        
        <p>
            <first-letter>今</first-letter>
            天是星期一
        </p>

*/
p::first-letter{
    font-size: 50px;
}
p::first-line{
    background-color:lightgreen;
}
p::selection{
    background-color:moccasin;
}

div::before{
    content:"『";
    color:red;
}
div::after{
    content:"』";
    color:blue;
}
/* <div>Hello hello how are you</div> */
/* 『Hello hello how are you』 */
/* 在文字开头和结尾添加的也不会被鼠标选中 */

/* 
    定义
    伪类：
        用于选择DOM树之外的信息，比如:visited，:active；
        或是不能用简单选择器进行表示的信息，包含那些满足一定逻辑条件的DOM树中的元素，
        比如:first-child，:first-of-type，:target。

    伪元素：
        DOM树没有定义的虚拟元素。不同于其他选择器，它不以元素为最小选择单元，
        它选择的是元素指定内容。比如::before表示选择元素内容的之前内容，
        也就是""；::selection表示选择元素被选中的内容。
    注意：
        1.伪类本质上是为了弥补常规CSS选择器的不足，以便获取到更多信息；
        2.伪元素本质上是创建了一个有内容的虚拟容器；
        3.CSS3中伪类和伪元素的语法不同；
        4.可以同时使用多个伪类，而只能同时使用一个伪元素；
*/



/* 
    四、CSS三大属性
        1、层叠性：
            多个样式作用于一个标签，结果就是所有样式的的叠加
            通过不同选择器为一个标签设置样式   最后是叠加的效果
        2、继承性
            样式的继承：
                我们为一个元素设置的样式同时也会应用到它的后代元素上，比如字体、颜色、字体大小....等
                继承发生在祖先和后代之间
                继承的设计是为了方便我们的开发，
                    利用继承我们可以将一些通用的样式统一设置到共同的祖先元素上，
                        这样只需设置一次即可让所有的元素都具有该样式
                
                注意：并不是所有的样式都会被继承：
                    比如 背景相关的，布局相关等的这些样式不会被继承。
                可以被继承的有：
                    (1)所有设置字体的CSS属性都可
                    (2)a标签不能继承颜色   h1~h6不要去继承文字大小
                    (3)text-decoration子元素无法清除父元素设置的文本修饰

                    坑：父元素设置各种线，然后子元素清除不掉。 

        3、权重（优先级），选择器的权重
*/
div{
    color: red;
}
/* p和span继承div的样式都变成红色 */
/* 
    <div>
         我是一个div
         <p>我是div中的p元素
             <span>我是p元素中的span元素</span>
         </p>
     </div>
*/

/* 
        3.选择器的权重
            样式的冲突
                -当我们通过不同的选择器，选中相同的元素，并且为相同的样式设置不同的值时，此时就发生了样式的冲突
            发生冲突时，应用哪个样式由选择器的权重（优先级）决定

            选择器的权重（优先级）
                内联样式                        1000
                id选择器                        100
                类、伪类、属性选择器             10
                元素选择器、伪元素选择器          1
                通配选择器、子代、相邻选择器       0
                继承的样式                        没有优先级 

                （1）复合选择器的权重等于通用的叠加的结果;比较优先级时，需要将所有的选择器的优先级进行相加计算，优先级高的优先显示（但分组选择器单独计算）
                （2）优先级较低的选择器不管复合多少次，也没有一个优先级高的选择器大  如：类选择器在高也不会超过id选择器
                （3）如果优先级计算后相同，此时优先级使用靠下的样式
            
                在某一个样式后面添加 ！important ，则此时该样式会获取最高样式，甚至超过内联样式
                    注意：在开发中这个玩意一定慎用！不到迫不得已不要用！！！

                p{color:red}                      0001
                div p{color:red}                  0002
                .shuai p{color:red}               0011
                .shuai input[type="password"]     0021
                   10   1       10
                #shuai div p { color:red}         0102
                #shuai .shuai *[type="text"]      0120
                 100     10   0    10
                #shuai .shuai p[type="text"]      0121
                 100     10   1    10
*/
#box1{
    color: blue;
}

.red{
    color: black;
    font-size: 20px;
}
.d1{
    background-color: purple !important;
}
div{
    color: red;
}

*{
    font-size: 50px;
}
div{
    font-size: 20px;
}
/*span中的字体大小为50px,虽然div设置20px，但是span是继承的样式没有优先级，所以为统配选择器设置的50px */

/* 优先级相加 */
div#box1{
    color: yellow;
}
/* 分组选择器单独计算 div是div p是p span是span */
div,p,span{
    color: yellowgreen;
}
/* <div id="box1" class="red d1 d2 d3 d4" style="background-color:orange"><span>我是div中的span</span>我是一个div</div> */

```

