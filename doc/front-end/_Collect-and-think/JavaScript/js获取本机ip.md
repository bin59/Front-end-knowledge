# JS 获取电脑本地的 IP 地址

经验证， 第二种方式获取的是打包的那台电脑的 IP,不可使用； 第一种方式因为不能确保每一个浏览器都设置打开 webRTC，所以也放弃了。 最终还是从后端获取 IP 了

原文：https://juejin.cn/post/7018844565624848392

vue 项目中如何获取当前网络本机分配的 IP？

需求

页面需要加上水印，加上当前登陆终端(浏览器)所连接网络的 IP，那么问题是如何获取当前所连网络的 IP 呢？

解决方案

最容易想到的是从 nodejs os.networkInterfaces() 模块中直接获取不就完事了吗？

试了一下，发现拿到的是空对象

```
mounted () {
    console.log(require('os').networkInterfaces())
},
```

为空的原因期望看到的大佬评论补充，自己也将持续探索~

第一种获取方式
代码如下

定义方法：

```
methods: {
    // 获取当前网络ip
    getUserIP (onNewIP) {
      const MyPeerConnection =
        window.RTCPeerConnection ||
        window.mozRTCPeerConnection ||
        window.webkitRTCPeerConnection

      const pc = new MyPeerConnection({
        iceServers: []
      })
      const noop = () => {}
      const localIPs = {}
      const ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g
      const iterateIP = (ip) => {
        if (!localIPs[ip]) onNewIP(ip)
        localIPs[ip] = true
      }

      pc.createDataChannel('')

      pc.createOffer()
        .then((sdp) => {
          sdp.sdp.split('\n').forEach(function (line) {
            if (line.indexOf('candidate') < 0) return

            line.match(ipRegex).forEach(iterateIP)
          })

          pc.setLocalDescription(sdp, noop, noop)
        })
        .catch((reason) => {})

      pc.onicecandidate = (ice) => {
        if (
          !ice ||
          !ice.candidate ||
          !ice.candidate.candidate ||
          !ice.candidate.candidate.match(ipRegex)
        ) { return }

        ice.candidate.candidate.match(ipRegex).forEach(iterateIP)
      }
    }
   }
```

用到的地方获取：

```
mounted () {
    this.getUserIP((rs) => {
      console.log(rs)
    })
},
```

备注
获取不到可能是因为 chrome 浏览器版本过高，需要修改浏览器配置如下

在 chrome 地址栏输入：chrome://flags/#enable-webrtc-hide-local-ips-with-mdns
把 Anonymize local IPs exposed by WebRTC 设置为 disabled。
第二种获取方式（推荐）
在 vue.config.js 中 webpack 构建时定义 process.env 属性，这样全局可获得

```
// 获取本机ip
function getIpAdress () {
  const interfaces = require('os').networkInterfaces()
  for (const devName in interfaces) {
    const iface = interfaces[devName]
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i]
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address
      }
    }
  }
}
```

```
module.exports = {
    ...,
    config.plugin('define').tap(args => {
      args[0]['process.env'].CURRENT_IP = JSON.stringify(getIpAdress())
      return args
    })
  },
  ...
}
```
