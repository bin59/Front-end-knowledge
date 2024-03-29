# CSS 层叠规则及元素隐藏

## 一、CSS 世界的层叠规则

![](bVbe8dT.webp)

声明：CSS 中并不只是 z-index 能够决定元素的 z 轴顺序。

### 1.1 元素层叠顺序(stacking level)

补充说明：

位于最下面的 background/border 特指层叠上下文元素（后面会详解）的边框和背景色。每一个层叠顺序规则仅适用于当前层叠上下文元素的小世界；
inline 水平盒子指的是包括 inline/inline-block/inline-table 元素的“层 叠顺序”，它们都是同等级别的；

单纯从层叠水平上看，实际上 z-index:0 和 z-index:auto 是可以看成是一样的，实际上，两者在层叠上下文领域有着根本性的差异
记忆要诀：

由于网页是图文展示为主，inline 会高于标准流盒子和浮动盒子
元素一旦成为定位元素，其 z-index 就是默认的 auto，根据上面的层叠顺序表，就会覆盖 inline 或 block 或 float 元素

### 1.2 层叠上下文(stacking context)

层叠上下文是一个概念，跟“块状格式化上下文” (BFC)类似。然而，概念这个东西是比较虚、比较抽象的，要想轻松理解，我们需要将其具象化。
怎么个具象化法呢？我们可以把层叠上下文理解为一种“层叠结界”，自成一个小世界。界中可能有其他的“层叠结界”，而自身也可能处于其他“层叠结界”中。

如何创建层叠上下文

（1）天生派：页面根元素天生具有层叠上下文，称为根层叠上下文（html 标签）

（2）正统派：z-index 值为数值的定位元素的传统“层叠上下文”

对于 position 值为 relative/absolute 以及 Firefox/IE(不包括 Chrome)下含有 position:fixed 声明的定位元素，当其 z-index 值不是 auto 的时候，会创建层叠上下文

（3）扩招派：CSS3 属性创建

元素为 flex 布局元素(父元素 display:flex | inline-flex)，同时 z-index 值不是 auto

元素的 opacity 值不是 1
元素的 transform 值不是 none
元素 mix-blend-mode 值不是 normal
元素的 filter 值不是 none
元素的 isolation 值是 isolate
元素的 will-change 属性值为上面 2~6 的任意一个(如 will-change: opacity、will-chang:transform 等)
元素的-webkit-overflow-scrolling 设为 touch
CSS3 创建层叠上下文引证：

```html
<!-- 2在1之上 -->
<img src="1.jpg" style="position:relative" />
<img src="2.jpg" style="transform:scale(1);" />

<!-- 1在2之上 -->
<img src="2.jpg" style="transform:scale(1);" />
<img src="1.jpg" style="position:relative" />
```

由于层叠问题引发的 bug：

描述：有一个绝对定位的黑色半透明层覆盖在图片上。但是，一旦图片开始走 fadeIn 淡出的 CSS3 动画，文字就跑到图片后面去了，因为文字一直是 100%透明的纯白色，文字变淡是因为跑到图片后面，而图片半透明，文字穿透显示而已

原因：fadeIn 动画本质是 opacity 透明度的变化，“元素的 opacity 值不是 1”时会创建层叠上下文，为 1 时为普通元素。导致层级发生变化时引发 bug

图片描述

### 1.3 层叠黄金准则（重点）

（1）谁大谁上：当具有明显的层叠水平标识的时候，如生效的 z-index 属性值，在同一个层叠上下文领域，层叠水平值大的那一个覆盖小的那一个

（2）后来居上：当元素的层叠水平一致、层叠顺序相同的时候，在 DOM 流中处于后面的元素会覆盖前面的元素

下面有两个案例，请问两种情况的层叠顺序：

```html
<div style="position:relative; z-index:auto;">
  <img src="1.jpg" style="position:absolute; z-index:2;" />
</div>
<div style="position:relative; z-index:auto;">
  <img src="2.jpg" style="position:relative; z-index:1;" />
</div>
<div style="position:relative; z-index:0;">
  <img src="1.jpg" style="position:absolute; z-index:2;" />
</div>
<div style="position:relative; z-index:0;">
  <img src="2.jpg" style="position:relative; z-index:1;" />
</div>
```

答案：（1）1 在上 2 在下；（2）1 在下 2 在上

分析：z-index: auto 所在的`<div>`元素是一个普通定位元素，于是，里面的两个`<img>`元素的层叠比较就不受父级的影响，两者直接套用“谁大谁上”的准则;而 z-index 一旦变成数值，哪怕是 0，就会创建一个层叠上下文。此时遵循“层叠黄金准则”的另外一个准则“后来居上”，根据在 DOM 文档流中的位置决定谁在上面

思考：在不居中层级错乱时，可以找找父级元素的层级与目标元素(或父级)层级比较

### 1.4 zIndex 可以为负值

对照着上面的层叠顺序图，我们可以知道 zIndex 为负值时是介于背景和普通流盒子之间的，直接看一个例子，请问下面的层叠情况

```html
/* 情况一 */
<div class="father">
  <div class="son">son</div>
</div>

/* 情况二 */
<div class="father transform">
  <div class="son">son</div>
</div>

.father { width: 200px; height: 200px; background-color: rgba(0, 0, 255, .7); }
.son { position: relative; z-index: -1; width: 200px; height: 100px;
background-color: rgba(255, 0, 0, .7); } .transform { margin-top: 20px;
transform: scale(1); }
```

![](bVbe8fU.webp)

分析：

情况一：当.father 是普通元素时，.son 元素所在的层叠上下文元素一是.father 的某个祖先元素；.son 是 z-index 负值元素，.father 是 block 元素，也就是.son 应该在.father 元素的后面显示，因此，.son 会被.father 元素的蓝色背景覆盖；

情况二：当.father 是层叠上下文元素时，z-index 负值元素在层叠上下文元素的背景上，因此，.son 在.father 元素的蓝色背景上；

## 二、元素隐藏

### 2.1 元素各种隐藏方法

（1）如果希望元素不可见，同时不占据空间，辅助设备无法访问，但资源有加载，DOM 可访问，则可以直接使用 display:none 隐藏

.dn { display: none; }
（2）如果希望元素不可见，同时不占据空间，辅助设备无法访问，但显隐的时候可以有 transition 淡入淡出效果

.hidden {
position: absolute;
visibility: hidden;
}
（3）如果希望元素不可见，不能点击，辅助设备无法访问，但占据空间保留，则可以使用 visibility:hidden 隐藏

.vh { visibility: hidden; }
（4）如果希望元素不可见，不能点击，不占据空间，但键盘可访问，则可以使用 clip 剪裁隐藏

.clip {
position: absolute;
clip: rect(0 0 0 0);
}
（5）如果希望元素不可见，不能点击，但占据空间，且键盘可访问，则可以试试 relative 隐藏。例如，如果条件允许，也就是和层叠上下文之间存在设置了背景色的父元素， 则也可以使用更友好的 z-index 负值隐藏

.lower {
position: relative;
z-index: -1;
}
（6）如果希望元素不可见，但可以点击，而且不占据空间，则可以使用透明度

.opacity {
position: absolute;
opacity: 0;
filter: Alpha(opacity=0);
}
（7）如果单纯希望元素看不见，但位置保留，依然可以点可以选，则直接让透明度为 0

.opacity {
opacity: 0;
filter: Alpha(opacity=0);
}

### 2.2 display 与 visiblity 隐藏比较

空间占据：

display:none 隐藏后的元素不占据任何空间

visibility:hidden 隐藏的元素空间依旧存在

后代隐藏原理：

display 属性值为 none 时，该元素以及所有后代元素都隐藏

visibility 属性值 hidden 时，子元素也会看不见，因为子元素继承了 visibility:hidden

因此，当子元素设置 visibility:visible;时，子元素又会显现

```html
<ul style="visibility:hidden;">
  <li style="visibility:visible;">列表1</li>
  <li>列表 2</li>
  <li>列表 3</li>
  <li style="visibility:visible;">列表4</li>
</ul>
```

最终列表 1 和列表 4 依然会显示

## 三、总结

CSS 层叠上下文理解和创建

CSS 层叠顺序和规则

元素隐藏的各种方式及对比

> 思否：同梦奇缘 [《CSS 世界》笔记五：CSS 层叠规则及元素隐藏](https://segmentfault.com/a/1190000015960615)
