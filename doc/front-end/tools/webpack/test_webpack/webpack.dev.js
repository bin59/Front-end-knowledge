const common = require('./webpack.common')

const {merge} = require('webpack-merge')

module.exports = merge(common,{
    mode:'development',
    // 实时更新 npm install webpack-dev-server --dev
    // 命令 npm run serve 运行，要关闭在终端按Ctrl + C 
    devServer:{
        // 默认是false,要改为true开启
        open:true,
        // 基于服务器之间通讯没有请求的原则,服务器之间没有跨域

        // proxy劫持
        // 某个请求路径中以/api路径的请求，webpack会拦截这个请求
        proxy:{
            './api':{
                target:'http://localhost:8080/',
                // 重写./api  
                pathRewrite:{
                    './api':''
                },
                changeOrigin:true
            }
        }
        // '/server' webpack会自动添加上去
        // 最终形成 http://local:8080/server

        // 此时是webpack的内置服务器发送的不是前端发送的请求，所以不会有跨域问题
        // 记得每次修改webpack的配置文件都要重启服务器

    }
})