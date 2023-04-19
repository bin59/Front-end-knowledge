const fs = require('fs')

let filesRoute = null
// 在 Node.js 中读取文件最简单的方式是使用 fs.readFile() 方法，向其传入文件路径、编码、以及会带上文件数据（以及错误）进行调用的回调函数：
fs.readFile(__dirname + '/doc/front-end/filename.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  filesRoute = data
  console.log(data, filesRoute)
})

// todo 写入失败
// https://blog.csdn.net/weixin_45969777/article/details/106116252

// 在 Node.js 中写入文件最简单的方式是使用 fs.writeFile() API。
fs.writeFile(__dirname + '/filesRoute/filesRoute.md', filesRoute, err => {
  if (err) {
    console.error(err)
    return
  }
})
