
import heading from './heading'
import '../css/index.css'
/*
    当webpack打包到这里的时候，因为没有loader处理
    所以报错，因为webpack只认识js文件

    loader是webpack核心 能力:将非js文件变成js文件
    现在要处理的是css所以要安装css-loader css=>js
    具体命令：npm install css-loader --dev

    npm install style-loader --dev
    loader将编译后的样式自动添加到html中

    

*/

const header = heading()

document.body.append(header)

import pic from '../assets/images/logo.png'
// npm install file-loader --dev
// npm install url-loader --dev

let img = new Image();
img.src=pic
document.body.append(img)

// import md from '../../../webpack简介及快速上手.md'
// document.write(md)



// fetch('http://localhost:8080').then(res=>console.log(res))
fetch('./api').then(res=>console.log(res))
