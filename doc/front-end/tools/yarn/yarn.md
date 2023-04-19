<!--
 * @Author: binbin59 zbin59@163.com
 * @Date: 2021-11-10 11:08:03
 * @LastEditors: bina 1959409749@qq.com
 * @LastEditTime: 2022-11-20 19:49:04
 * @FilePath: \myf:\binbin\web\study\front-end\命令\yarn.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

### 1、安装 yarn

**yarn 的安装和使用**：https://blog.csdn.net/yw00yw/article/details/81354533

`npm install -g yarn`

**yarn 升级最新版本**

npm install yarn@latest -g

**查看 yarn 历史版本**

npm view yarn versions --json

**yarn 升级指定版本 （例：升级到 1.22.19 版本）**
yarn upgrade v1.22.19

**yarn 降低到指定版本（先卸载，再安装）**
npm uninstall yarn -g
npm install -g yarn@1.3.2

**如果 yarn install 有误时。可重新 install 或者清除 重新执行**
yarn install --force
yarn cache clean

**yrm 是一个 yarn 源管理器，允许你快速地在源间切换**

`npm install -g yrm --registry=https://registry.npm.taobao.org`
新地址是什么？

查看 yarn 当前镜像源
yarn config get registry
1
3.2.2 设置 yarn 使用淘宝镜像源

**列出当前可用的所有镜像源**

`yarm ls`

**使用淘宝镜像源**

`yarn config set registry https://registry.npmmirror.com/`

**查看当前使用的源**

`npm config get registry` // 查看 npm 当前镜像源

`yarn config get registry` // 查看 yarn 当前镜像源

**初始化一个新项目**

yarn init

**安装项目的全部依赖**

yarn

或者

yarn install

**快速删除 node_modules**

安装：`npm install rimraf -g`

使用：`rimraf node_modules`

rimraf 是 node 的一个包，可以快速删除 node_modules，再也不用等半天了

**yarn.lock 文件**

这个文件已经把依赖模块的版本号全部锁定，当你执行**yarn install**的时候，yarn 会读取这个文件获得依赖的版本号，然后依照这个版本号去安装对应的依赖模块，这样依赖就会被锁定，以后再也不用担心版本号的问题了。其他人或者其他环境下使用的时候，把这个 yarn.lock 拷贝到相应的环境项目下再安装即可。
注意：这个文件不要手动修改它，当你使用一些操作如 yarn add 时，yarn 会自动更新 yarn.lock。

**yarn global dir**

yarn 全局文件所放置的地方

初始化
npm init
yarn init

安装依赖包
npm i | install
yarn (install)

安装生产依赖并保存包名
npm i 「依赖名称」 --S | --save
yarn add「依赖名称」

安装开发依赖并保存包名
npm i 「依赖名称」–D | --save-dev
yarn add 「依赖名称」-D

删除依赖包
npm un | uninstall 「依赖名称」
yarn remove「依赖名称」

更新依赖
方法一：
yarn upgrade-interactive --latest
// 需要手动选择升级的依赖包，按空格键选择，a 键切换所有，i 键反选选择

**全局安装**
npm i -g | npm -g i「依赖名称」
yarn global add「依赖名称」

**nodejs16.10**以上版本安装时**自带了 yarn**，通过 corepack 即可安装，执行命令如下：
`corepack enable`

全局移除
npm un -g 「依赖名称」
yarn global remove「依赖名称」

运行命令
npm run dev
yarn dev | run dev
