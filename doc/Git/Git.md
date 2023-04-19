# Git 的使用

Git 是一种分布式的版本管理系统。简单来说，它就是一个版本控制软件，而且也是世界上现在最流行最先进的。

Git 的一个具体作用就是对文件进行版本管理。由于每次项目上线，可能会产生一些无法预料的 bug，这时就需要选择上一个正常的版本进行回滚操作。而 Git 的存在，就是为了开发人员能够方便地在不同版本之间进行切换。

**Github、码云 Gitee**，在某种程度上来说，就是代码的网盘。也有开源的开发商作为代码发布、存放、征集 bug 的地方。

除了版本管理这个功能，Git 在团队协作开发上也有很大的优势。由于每个模块的代码都是独立的，并不会影响到其他人员的模块代码。开发完成后，项目负责人会通过 git 命令，去把每个模块的**分支**合并到一个叫**master 主分支**上面，项目正式上线的时候，就会把 master 主分支进行上线部署。

SVN，也是一个版本管理系统，但是它必须要在指定的网络环境上才能进行开发和管理。所以一旦网络崩溃或者说服务器宕机了，那么 SVN 的版本控制功能也就崩溃了。Git —— 分布式，可以让每个开发人员都能将整个代码完整地下载到本地，包括这个项目的分支、版本更新记录。如果线上环境崩溃，完全可以通过本地选择上一个正常的呆板，然后进行回滚，再将代码覆盖至线上就能进行恢复了。

## 1.工作原理

### 1.1 工作区

Git 在本地初始化一个仓库后，会存在一个.git 文件夹，他还会存在三个工作区域：工作目录（工作区），暂存区，资源区。如果从远端仓库拉取的项目，那就会多一个工作区域，就是远程 git 仓库。
_ 工作区（workspace）：平时开发代码、写代码的地方；
_ 暂存区（Stage / Index）：用于临时保存代码的改动；
_ 本地仓库（Repository）：用于存放所有版本的数据；
_ 远程仓库（Remote）：保存代码的地方，Github、码云；

```html
| <-- git reset HEAD文件名 <-- | | | 工作区 修改了A页面 ---> git add . --->
暂存区 --> git commit --> 本地仓库 | git push | 远程仓库 码云、Github
```

## 2.Git 命令

### 2.1 Git 基础操作命令

#### 2.1.1 Git 四步走

```html
#添加当前工作区文件到暂存区 git add . #将暂存区的代码提交到本地仓库 git commit
-m "备注信息" #将远程仓库代码拉取到本地 git pull #将本地仓库的代码推送到远端仓库
git push
```

将远程仓库的代码克隆到本地，如果你本地没有这些代码的情况下，使用这个命令

```html
git clone https://gitee.com/binxiaobina/git-testa.git
```

### 2.2 Git 配置命令

#### 2.2.1 查看配置命令

```html
#查看所有配置 git config -l #查看系统配置 git config --system -l #查看全局配置
git config --global -l
```

=#### 配置全局

```html
git config --global user.name "lyan_test" git config --global user.email
"1055869654@qq.com"
```

### 2.3 新建一个

在 gitee 上面新建一个仓库，

新建一个文件夹，文件夹地址栏输入：cmd
在 cmd 界面输入：git init 初始化
然后输入：git remote add origin https://gitee.com/binxiaobina/git-testa.git 添加一个远程仓库  
在新建的文件夹下面新建一个不是空的 README.txt 文件，
在 cmd 界面输入： git add .
然后输入：git commit -m "first commit"  
再然后输入：git push -u origin master
弹出窗口输入用户名密码即可

### 2.4 上传到别人的仓库

在要操作的文件夹地址栏输入：cmd

1.将远程仓库的代码克隆到本地,如果你本地没有这些代码的情况下，使用这个命令

```html
git clone https://gitee.com/binxiaobina/git-testa.git
```

然后在克隆下来的文件夹地址栏输入：cmd

2.git 四步走

```html
git add . git commit -m "备注信息"
#如果在你提交之前，别人更新了，需要重新拉取代码 将远程仓库代码拉取到本地 git
pull git push
```

### 2.5 查看当前文件的状态

```html
git status
```

- Untracked：未跟踪，文件在工作区内，但是并没有经过 Git 的管理，要通过 `git add` 将文件加到暂存区，然后状态变为 `Staged` ；
- Unmodify：文件已经进入 Git 版本库，此时 Git 会将版本库中的文件与工作区内的文件进行对比，如果内容完全一致，则代表文件未修改，也就是现在文件的状态。可以通过 `git rm` 将文件移出版本库，变为 Untracked 状态的文件；
- Modified：文件已进入 Git 版本库，并且经对照后发现文件已经发生修改，但没有添加到暂存区。此时文件可以通过 `git add` 进入暂存区，或者通过 `git checkout` 命令，**用版本库中的文件覆盖掉工作区的文件**，此时文件状态会变为 Unmodify；
- Staged：文件处于暂存区，通过 `git commit` 命令提交到本地仓库中。可以使用 `git reset HEAD filename` 取消暂存，文件状态将变为 Modified。

#### 可能存在的问题

如果当前电脑之前登陆过码云，这时用的是另一个账号，会出现问题
解决方法：
Windows：打开控制面板-用户账户-凭据管理器-window 凭据-找到对应的 gitee 凭据删除即可
Mac ：钥匙串访问--搜索 git,会出现 gitee.com 的一个钥匙串，右键删除即可

#### 进阶操作

恢复到某个阶段的代码

```html
#恢复到上一次版本 git reset --hard HEAD^ #恢复到前3次提交的版本 git reset --hard
HEAD~3 #恢复到指定的hash版本 git reset --hard commit_id #强制提交
当本地仓库没有包含远程仓库所有的历史记录时，强制推送会导致远程仓库的历史记录丢失，产生不可逆的影响。
git push -f
```

sd

## 3.忽略文件

在项目根目录下面创建一个：.gitignore 文件，文件里面写上需要排除的文件名即可。

```html
#如果想要忽略所有以某个后缀名为后缀的文件 *.md
#排除某个文件，不让被忽略，加：！即可 !README.md
#排除根目录下面的文件夹：/+文件夹名字,其它目录下面的没有被忽略 /test
排除所有文件夹下的test文件夹 */test #或 test/
```

如果说忽略文件之前就已经提交了这个文件，那就要在工作目录先执行一次删除文件操作，再把这次操作提交到我们的本地仓库中进行同步。那下次

```html
rm -f .DS_Store
```

## 4.分支

### 4.2

查看本地所有分支

```html
git branch
```

查看远程所有分支

```html
git branch -r
```

新建分支

```html
git branch 分支名
```

切换开发分支

```html
git checkout 分支名
```

新建并进入分支

```html
git checkout -b 分支名
```

切换分支前，要提交已经修改的代码。否则另一条分支的代码将会覆盖工作区的代码文件，当然 git 不允许这样操作

### 4.2 分支提交到远程

提交报错：The current branch zhubin has no upstream branch.
解决方法：

1.建立远程分支 dev 和 关联本地 dev 和远程 dev

```html
git push -u origin 分支名
```

2.将远程 dev 分支和本地 dev 分支相关联

```html
git push --set-upstream origin 分支名
```

**合并分支**
业内术语 mr

```html
git merge 分支名B
```

假设当前是分支 A，运行后则是把 B 的内容合并到 A 之中，如果有冲突就去和开发人员商讨如何保留

**删除分支**

1.删除本地

```html
# -d -delete git branch -d 分支名 #强制删除 git branch -D 分支名
```

要删除的分支中代码存在差异，会导致删除失败。因为 GIT 认为该操作会导致代码丢失的情况出现，确认没问题之后可以用，强制删除
要切换到其它分支才能删除当前分支，在当前分支不能删除当前的分支

2.删除远程分支

```html
git branch -dr [remote/branch] #
这个方法只是将本地的远程信息删除，并不会实际影响到远程仓库的分支
#直接删除远程仓库的分支 git push origin --delete 分支名
```
