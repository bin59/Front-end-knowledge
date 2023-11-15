
// 所谓的loader 在底层本质来说是一个回调函数
// 参数：是通过正则匹配到的文件资源
const marked = require('marked')
module.exports = (source)=> {
    /*
        source这个参数是通过正则后面拿到的文件资源 如 ：note.md
        需要对文件资源做处理

        接下来做什么处理就需要根据当前你的这个loader需求所定
        
        需要一个插件来解析md语法 ## 的  h2
        npm install marked --dev
        帮助我们将md语法变成html语法
        有两种思路:
    */
    const html = marked(source)
    // console.log(html)

    // 思路一：
    // return html
    /*
        如果这里返回了超文本标记语言，
        我们还需要依赖另一个html-loader处理这个语言
        npm install html-loader --dev
    */

    // 思路二
    let res = JSON.stringify(html) //保留空格和换行
    return `module.exports=${res}`

    // 处理完了以后,需要返回的内容符合ECMA规范的代码给webpack去打包后渲染
    // 说明返回后的内容是js规范
}