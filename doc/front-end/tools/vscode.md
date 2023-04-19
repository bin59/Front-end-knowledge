# vscode

## 一、vscode 插件

### vue 相关

1. Volar(Vue Language Features): 为 vue3 开发
2. vetur 主要是 vue2

### 代码相关

1. Prettier - Code formatter
   代码格式化工具

### 美化

1. 代码分享：Polacode 快捷键 ctrl+shift+p；

2. 下班提醒小助手：go-home

3. Noctis

#### 护眼主题

4. Material Icon Theme

文件图标

5. One Dark Pro

暗黑主题

7.Color Highlight

用于给我们代码中的颜色进行高亮展示的插件，将 css 颜色属性，直观的展示了出来。

8.Highlight Matching Tag

找的是标签的对象，当我点击一下 html 标签，配对的标签就会出现下划线来指示你谁和谁是一对
9.Bracket Pair Colorizer 2

选中一个括号以后，会出现一条线帮你找到它对应的另一半括号。

10.Better Comments

一款美化注释的插件，可以根据不同种类的注释，显示不同的颜色，一目了然。

11.Error Gutters

报错的地方都有大红波浪线提示，可以说是非常的直观了。

12.Image preview

预览代码中图片的引用，鼠标移上去就会有小窗展示图片。

13.indent-rainbow

看名字就知道了，彩虹缩进，就是把代码不同的缩进展示不同的颜色。

14.Trailing Spaces

把尾随空格显示出来。

### 功能性

1.AZ AL Dev Tools/AL Code Outline

项目结构

2.Git Graph

右键单击文件选择 Git：View File History 来以列表的形式查看所有的提交记录。

3.GitLens — Git supercharged

功能比上一个要强大一些。上一个插件的演示图片中可以看到我的每一行代码都有上一次 git 提交的记录，那就是这个插件的功劳。

4.Local History

这个就很强了，本地代码的修改记录。通常我们写错代码了可以撤销，但是撤销完以后再修改，想要取消撤销就难了。有了这个插件直接看代码的修改记录。还可以跟当前版本进行对比，神器。

安装完以后，项目根目录下会自动生成 .history 的文件夹。代码的修改记录就会放在这里面。记得添加.gitignore，不然每次提交代码的时候就要遭重了。

5.koroFileHeader

自动添加 头部注释 和 函数注释 的插件。支持自定义内容，需要在 settings.json 中进行自定义配置。

```js
  //自动生成注释插件  文件头部注释
  "fileheader.customMade": {
    "Author": "一尾流莺",
    "Descripti  on": "",
    "Date": "Do not edit",
    "LastEditTime": "Do not edit",
    "FilePath": ""
  },
  //自动生成注释插件  函数注释
  "fileheader.cursorMode": {
    "description": "",
    "param": "",
    "return": ""
  },
```

6.Npm Intellisense

导入 npm 包的时候，智能提示。

7.px to rem & rpx (cssrem)

自动换算单位的插件。

8.Settings Sync

可以同步 vscode 配置的插件

9.Bookmarks

书签

### Markown 相关

- markdownlint 规范命名规则的。

* Markdown Shortcuts 为常规的 markdown 语法提供了快捷键支持。
* Markdown Preview Enhanced 预览
* markdownlint Markdown 格式检查工具

## 二、快捷键

- **(li>img[src=""][lazyload="true"][data-src="./img/img$.jpg"])21**

* **Ctrl + F**非常重要！！！在茫茫代码海中找到你真的不容易，Ctrl + F 在手一定会找到你，

- F3 和 shift + F3 明明白白上下切换找你。如果你真的一行一行找大量代码，估计要么错过要么找到目标的时候已经忘了自己要找它干嘛了
- Ctrl + 鼠标左键 点击函数名快速跳转到函数声明

- 双击 shift 或者 Ctrl + shift + F 在整个目录中全局搜索目标代码；

- ctrl+shift+N 通过文件名快速查找工程内的文件

- Ctrl + F 选中目标代码+ Ctrl + R 快速替换

- 选中函数定义，Alt + 上下 快速跳转函数名

- Ctrl + shift + 回车上面的删除键 Back 快速回到上次编辑的位置
- 选中一段代码，右键选择 local history 可以看到一段代码的历史改动情况
