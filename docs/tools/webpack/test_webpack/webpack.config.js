// 根文件有关，就会跟路径有关
// 引入nodejs中path的目录
// nodejs遵循COMMANDjs
const path = require('path');

// 引入plugin插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin =require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { apply } = require('file-loader');

// 在webpack所有的插件都有一个固定的写法

// 思考:根据我们插件的功能，决定我们要挂到那个生命周期函数勾子,
// 如何了解webpack中有哪些钩子? (看文档)
class MyPlugin{
    apply(compiler){
        // 插件的apply是会自动调用
        // 下面的代码代表自动挂钩(输出前生命周期函数钩子99.5)
        compiler.hooks.emit.tap('MyPlugin',(compilation) =>{
            // 就是当生命周期函数emit执行的时候，执行这个cb函数

            /*
                compilation 是可以获取webpack上下文
                简单理解:我们可以通过compilation获取webpack所有的信息
                在当前这个插件的逻辑功能中，我们只需要获取这个参数的文件
                因为当前插件的功能，去除dist里面所有js文件的 ** 
            */
            // 1.找到所有的js文件，依赖compilation来获取所以的js文件
                // console.log(compilation.assets)//compilation.assets可以获取所有文件
                for(let name in compilation.assets){
                    if(name.endsWith('.js')){
                        // 当属性的字符串是以.js结尾，就会进入判断
                        // 说明当前属性是一个js文件
                        // 获取内容:官方有一个source()可以获取对应文件的文件内容
                        let content = compilation.assets[name].source()
                       // 2.书写一个正则  /***/
                       // 3.通过replace将这些字符替换成 ''
                        let withoutStar = content.replace(/\/\*\*+\*\//g,'') 
                        // withoutStar重新书写文件的内容
                        // 4.重新写入到webpack中，最终输出到dist
                        compilation.assets[name] ={
                            // withoutStar重新写入到webpack中
                            source:()=>withoutStar
                            // size,官方要求要写,现在可以
                            // ,size:()=>withoutStar.length
                        }
                    }
                }
            // 返回 true 以输出 output 结果，否则返回 false
            return true
        })
    }
}

module.exports = {
    /*
        1、模式(Mode)指示webpack使用相应模式的配置
        mode 有三个值
            - none 不设置
            - development 开发环境
            - production 生产环境
            现阶段，后面根据环境配置不同的webpack配置

        npm run serve =>进入的是开发环境=>走开发环境的wepack
        npm run build =>进入的是生成环境=>走生成环境的wepack
    */
    mode:'none',

    // 2、入口(Entry)指示webpack以哪个文件为入口起点开始打包，分析构建内部依赖图
    entry:{
        index:'./src/js/index.js',
        about:'./src/js/about.js'
    },

    // 3、输出(Output)指示webpack打包后的资源bundles输出到哪里去，以及如何命名
    output:{
        /*
            path配置输出路径node.js
            如果你想改变输出路径,
            _dirname nodejs的变量，指的是根目录
        */
        path:path.join(__dirname,'dist'),
        // filename配置输出的js文件名
        filename:'[name].js'
    },
    /*
        设置输出打包之后的文件
        给plugin,每一次的打包都能自动覆盖上一次的内容 
        webpack只认识js后缀的文件
        不认识.css文件
    */
    
    // 4、module属性专门配置各类loader
    module:{
        rules:[
            {
                test:/.md$/,
                // 思路一的
                // use:['html-loader','./markDown.js']
                // 思路二的
                use:['./markDown.js']
            },
            {
                // 通过正则找到对应非js的文件
                test:/.css$/,
                /*
                    5、Loader让webpack能够去处理那些非JavaScript文件(webpack自身只理解JavaScript

                    将匹配的文件丢给对应use中的loader做处理
                    注意: use是一个数组位置的要求很严格，执行顺序，从右到左
                */
                use:[
                    //创建style标签，将js中的样式资源插入进行，添加到head中生效
                    'style-loader',
                    //将css文件变成commonjs模块加载js中，里面内容是样式字符串
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
                    // 编译出来的图片是base64图片（无序的字符串，会放到内存，增加项目的体积）
                    // options对象就使用来添加这个loader的使用条件
                    // limit属性用来限制大小
                },
                /*
                    关于图片处理的最佳实践应该如下：
                    如果图片不超过大小，比如50kb，我们就走url-loader
                    否则，走file-loader
                */
            },
            {
                test:/.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        // 要用到的这个loader的插件
                        // presets 你要使用的子插件
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    },

    // 上面引入plugin插件之后
    plugins:[
        // 在打包过程中，先将dist目录清空，输出打包产物
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // 你要引入的html文件路径
            template:'./src/common/index.html',
            // 设置输出文件名
            filename:'index.html',
            // 需要给name动态赋值
            // 是通过配置chunks属性可以给.上面输出目录的name动态赋值
            chunks:['index']
        }),
        new HtmlWebpackPlugin({
            template:'./src/common/about.html',
            filename:'about.html',
            chunks:['about']
        }),
        new CopyWebpackPlugin({
            patterns:[
                {
                    // from默认是从s根目录里面找
                    // 复制public的所有内容
                    from:'./src/public',
                    // 默认在dist
                    to:'./public'
                }
            ]
        }),
        new MyPlugin()
    ]

}