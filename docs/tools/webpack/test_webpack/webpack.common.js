
const path = require('path');

const HtmlWebpackPlugin =require('html-webpack-plugin')

module.exports = {
    mode:'none',
    entry:{
        index:'./src/js/index.js',
        about:'./src/js/about.js'
    },
    output:{
     
        path:path.join(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/.css$/,

                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/.png$|.jpg$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:50*1024 //都要转换成 b bit计算机中最小的单位
                    }
                },
 
            },
            {
                test:/.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/common/index.html',
            filename:'index.html',
            chunks:['index']
        }),
        new HtmlWebpackPlugin({
            template:'./src/common/about.html',
            filename:'about.html',
            chunks:['about']
        })
    ]

}