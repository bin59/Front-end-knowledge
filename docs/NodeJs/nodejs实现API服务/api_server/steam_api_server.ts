// 使用express模块：```npm i express```

// const express = require('express')
// 这种写法在ts中不支持,使用下面的ES Module规范
import express from 'express'
// import { DataStore } from './data'
// express不存在？
//先 yarn add express
//再  yarn add @types/express

const app = express()
/* 
app.all('*', function (req, res, next) {
  //处理跨域
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
}) */

/* // 假如客户端发送一个GET请求
// req请求，res响应
app.get('/', (req, res) =>
  // 向客户端回写数据
  // 通过end()方法回吐给客户端
  // res.send('1122')
 


  // 作为json格式的数据返回客户端
  res.json(DataStore.list)
)
 
// 二维码中间件 */

//  文件流
const fs = require('fs')
const path = require('path')

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  // const qrcodeName = Date.now() + '-' + Math.random().toString(36).slice(-6);
  const filePath = path.resolve(
    __dirname,
    `./steam_test/JavaScript Succinctly.pdf`
  )
  // JavaScript Succinctly.pdf
  // 给客户端返回一个文件流

  //格式必须为 binary，否则会出错
  // 创建文件可读流
  const cs = fs.createReadStream(filePath)
  cs.on('data', (chunk: any) => {
    res.write(chunk)
  })
  cs.on('end', () => {
    res.status(200)
    res.end()
  })
})

// 调用listen()方法
app.listen(8088, () => {
  console.log('服务已开启：' + 'http://localhost:8088/')
})
