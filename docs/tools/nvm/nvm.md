# nvm

## 一、命令

1. nvm 安装路径
   nvm root
2. nvm 当前版本号
   nvm version

3. 卸载当前指定的 node 版本
   nvm uninstall 指定版本号

4. 列出所有已经安装的 node 版本
   nvm ls

5. 查看可以安装的 node 版本
   nvm list available

6. 安装指定版本

   nvm install 指定版本号

7. 下载最新的 node 版本和与之对应的 npm 版本
   nvm install latest
8. 启用该版本的 node

   nvm use 指定版本号

9. 当前 node 版本

   nvm current

10. 下载、编译、安装、使用当前的稳定版

    nvm install stable

注意：如果安装新的 nodejs 和 npm 后，在 npm install 安装 vue 项目的依赖包时可能会报错

解决办法：执行 npm cache clean --force，然后再 npm install 就好了
