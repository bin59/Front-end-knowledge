# npm

###

[都 2022 年了，你总不能还只会 npm i 吧?](https://mp.weixin.qq.com/s/yk315F-aAmGf3jHeXQNtmQ)

### 淘宝镜像源

http://npm.taobao.org和 http://registry.npm.taobao.org 将在 2022.06.30 号正式下线和停止 DNS 解析。

新域名为 npmmirror.com, 相关服务域名切换规则请参考：

http://npm.taobao.org => http://npmmirror.com
http://registry.npm.taobao.org => http://registry.npmmirror.com

修改 npm 至新的淘宝镜像源：

npm config set registry http://registry.npmmirror.com

需要解除镜像并恢复到官方源：

npm config set registry https://registry.npmjs.org

查看 npm 源地址有没有换成功：

npm config get registry

###
