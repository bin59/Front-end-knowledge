// 引入common.js
const common = require('./webpack.common')

// 就相当于拥有了common的loader和plugin

// 请求dist 复制ico
// 引入生产环境特有的插件

const CopyWebpackPlugin = require('copy-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

// 如何将新的插件跟common融合在一起？
// webpack 推荐了merge插件
// npm install webpack-merge --dev

const {merge} = require('webpack-merge')
// merge(参数1，参数2) 用来融合两个配置的方法


module.exports = merge(common,{
    mode:'production',
    plugins:[
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns:[
                {
                    from:'./src/public',
                    to:'./public'
                }
            ]
        })
    ]
})