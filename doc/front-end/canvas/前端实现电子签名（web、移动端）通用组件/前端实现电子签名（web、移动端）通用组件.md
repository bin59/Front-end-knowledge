# 前端实现电子签名（web、移动端）通用组件

实现电子签名
知道几何的朋友都很清楚，线有点绘成，面由线绘成。

多点成线，多线成面。

所以我们实际只需要拿到当前触摸的坐标点，进行成线处理就可以了。

在 body 中添加 canvas 标签
在这里我们不仅需要在在 body 中添加 canvas 标签，我们还需要添加两个按钮，分别是取消和保存（后面我们会用到）。

<body>
    <canvas></canvas>
    <div>
        <button>取消</button>
        <button>保存</button>
    </div>
</body>
复制代码
添加文件
我这里全程使用js进行样式设置及添加。

// 配置内容
const config = {
width: 400, // 宽度
height: 200, // 高度
lineWidth: 5, // 线宽
strokeStyle: 'red', // 线条颜色
lineCap: 'round', // 设置线条两端圆角
lineJoin: 'round', // 线条交汇处圆角
}
复制代码
获取 canvas 实例
这里我们使用 querySelector 获取 canvas 的 dom 实例，并设置样式和创建上下文。

    // 获取canvas 实例
    const canvas = document.querySelector('canvas')
    // 设置宽高
    canvas.width = config.width
    canvas.height = config.height
    // 设置一个边框，方便我们查看及使用
    canvas.style.border = '1px solid #000'
    // 创建上下文
    const ctx = canvas.getContext('2d')

复制代码
基础设置
我们将 canvas 的填充色为透明，并绘制填充一个矩形，作为我们的画布，如果不设置这个填充背景色，在我们初识渲染的时候是一个黑色背景，这也是它的一个默认色。

    // 设置填充背景色
    ctx.fillStyle = 'transparent'
    // 绘制填充矩形
    ctx.fillRect(
        0, // x 轴起始绘制位置
        0, // y 轴起始绘制位置
        config.width, // 宽度
        config.height // 高度
    );

复制代码
上次绘制路径保存
这里我们需要声明一个对象，用来记录我们上一次绘制的路径结束坐标点及偏移量。

保存上次坐标点这个我不用说大家都懂；
为啥需要保存偏移量呢，因为鼠标和画布上的距离是存在一定的偏移距离，在我们绘制的过程中需要减去这个偏移量，才是我们实际的绘制坐标。
但我发现 chrome 中不需要减去这个偏移量，拿到的就是实际的坐标，之前在微信小程序中使用就需要减去偏移量，需要在小程序中使用的朋友需要注意这一点哦。
// 保存上次绘制的 坐标及偏移量
const client = {
offsetX: 0, // 偏移量
offsetY: 0,
endX: 0, // 坐标
endY: 0
}
复制代码
设备兼容
我们需要它不仅可以在 web 端使用，还需要在移动端使用，我们需要给它做设备兼容处理。我们通过调用 navigator.userAgent 获取当前设备信息，进行正则匹配判断。

    // 判断是否为移动端
    const mobileStatus = (/Mobile|Android|iPhone/i.test(navigator.userAgent))

复制代码
初始化
这里我们在监听鼠标按下(mousedown)(web 端)/触摸开始(touchstart)的时候进行初始化，事件监听采用 addEventListener。

    // 创建鼠标/手势按下监听器
    window.addEventListener(mobileStatus ? "touchstart" : "mousedown", init)

复制代码
三元判断说明： 这里当 mobileStatus 为 true 时则表示为移动端，反之则为 web 端，后续使用到的三元依旧是这个意思。

声明初始化方法

我们添加一个 init 方法作为监听鼠标按下/触摸开始的回调方法。

这里我们需要获取到当前鼠标按下/触摸开始的偏移量和坐标，进行起始点绘制。

Tips：web 端可以直接通过 event 中取到，而移动端则需要在 event.changedTouches[0]中取到。

这里我们在初始化后再监听鼠标的移动。

    // 初始化
    const init = event => {
        // 获取偏移量及坐标
        const { offsetX, offsetY, pageX, pageY } = mobileStatus ? event.changedTouches[0] : event

        // 修改上次的偏移量及坐标
        client.offsetX = offsetX
        client.offsetY = offsetY
        client.endX = pageX
        client.endY = pageY

        // 清除以上一次 beginPath 之后的所有路径，进行绘制
        ctx.beginPath()

        // 根据配置文件设置进行相应配置
        ctx.lineWidth = config.lineWidth
        ctx.strokeStyle = config.strokeStyle
        ctx.lineCap = config.lineCap
        ctx.lineJoin = config.lineJoin

        // 设置画线起始点位
        ctx.moveTo(client.endX, client.endY)

        // 监听 鼠标移动或手势移动
        window.addEventListener(mobileStatus ? "touchmove" : "mousemove", draw)
    }

复制代码
绘制
这里我们添加绘制 draw 方法，作为监听鼠标移动/触摸移动的回调方法。

    // 绘制
    const draw = event => {
        // 获取当前坐标点位
        const { pageX, pageY } = mobileStatus ? event.changedTouches[0] : event
        // 修改最后一次绘制的坐标点
        client.endX = pageX
        client.endY = pageY

        // 根据坐标点位移动添加线条
        ctx.lineTo(pageX , pageY )

        // 绘制
        ctx.stroke()
    }

复制代码
结束绘制
添加了监听鼠标移动/触摸移动我们一定要记得取消监听并结束绘制，不然的话它会一直监听并绘制的。

这里我们创建一个 cloaseDraw 方法作为鼠标弹起/结束触摸的回调方法来结束绘制并移除鼠标移动/触摸移动的监听。

canvas 结束绘制则需要调用 closePath()让其结束绘制

    // 结束绘制
    const cloaseDraw = () => {
        // 结束绘制
        ctx.closePath()
        // 移除鼠标移动或手势移动监听器
        window.removeEventListener("mousemove", draw)
    }

复制代码
添加结束回调监听器

    // 创建鼠标/手势 弹起/离开 监听器
    window.addEventListener(mobileStatus ? "touchend" :"mouseup", cloaseDraw)

复制代码
ok，现在我们的电子签名功能还差一丢丢可以实现完了，现在已经可以正常的签名了。

我们来看一下效果：

取消功能/清空画布
我们在刚开始创建的那两个按钮开始排上用场了。

这里我们创建一个 cancel 的方法作为取消并清空画布使用

    // 取消-清空画布
    const cancel = () => {
        // 清空当前画布上的所有绘制内容
        ctx.clearRect(0, 0, config.width, config.height)
    }

复制代码
然后我们将这个方法和取消按钮进行绑定

     <button onclick="cancel()">取消</button>

复制代码
保存功能
这里我们创建一个 save 的方法作为保存画布上的内容使用。

将画布上的内容保存为图片/文件的方法有很多，比较常见的是 blob 和 toDataURL 这两种方案，但 toDataURL 这哥们没 blob 强，适配也不咋滴。所以我们这里采用 a 标签 ➕ blob 方案实现图片的保存下载。

    // 保存-将画布内容保存为图片
    const save = () => {
        // 将canvas上的内容转成blob流
        canvas.toBlob(blob => {
            // 获取当前时间并转成字符串，用来当做文件名
            const date = Date.now().toString()
            // 创建一个 a 标签
            const a = document.createElement('a')
            // 设置 a 标签的下载文件名
            a.download = `${date}.png`
            // 设置 a 标签的跳转路径为 文件流地址
            a.href = URL.createObjectURL(blob)
            // 手动触发 a 标签的点击事件
            a.click()
            // 移除 a 标签
            a.remove()
        })
    }

复制代码
然后我们将这个方法和保存按钮进行绑定

    <button onclick="save()">保存</button>

复制代码
我们将刚刚绘制的内容进行保存，点击保存按钮，就会进行下载保存

图片
image.png
完整代码

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
    </style>
</head>
<body>
    <canvas></canvas>
    <div>
        <button onclick="cancel()">取消</button>
        <button onclick="save()">保存</button>
    </div>
</body>
<script>
    // 配置内容
    const config = {
        width: 400, // 宽度
        height: 200, // 高度
        lineWidth: 5, // 线宽
        strokeStyle: 'red', // 线条颜色
        lineCap: 'round', // 设置线条两端圆角
        lineJoin: 'round', // 线条交汇处圆角
    }

    // 获取canvas 实例
    const canvas = document.querySelector('canvas')
    // 设置宽高
    canvas.width = config.width
    canvas.height = config.height
    // 设置一个边框
    canvas.style.border = '1px solid #000'
    // 创建上下文
    const ctx = canvas.getContext('2d')

    // 设置填充背景色
    ctx.fillStyle = 'transparent'
    // 绘制填充矩形
    ctx.fillRect(
        0, // x 轴起始绘制位置
        0, // y 轴起始绘制位置
        config.width, // 宽度
        config.height // 高度
    );

    // 保存上次绘制的 坐标及偏移量
    const client = {
        offsetX: 0, // 偏移量
        offsetY: 0,
        endX: 0, // 坐标
        endY: 0
    }

    // 判断是否为移动端
    const mobileStatus = (/Mobile|Android|iPhone/i.test(navigator.userAgent))

    // 初始化
    const init = event => {
        // 获取偏移量及坐标
        const { offsetX, offsetY, pageX, pageY } = mobileStatus ? event.changedTouches[0] : event

        // 修改上次的偏移量及坐标
        client.offsetX = offsetX
        client.offsetY = offsetY
        client.endX = pageX
        client.endY = pageY

        // 清除以上一次 beginPath 之后的所有路径，进行绘制
        ctx.beginPath()
        // 根据配置文件设置相应配置
        ctx.lineWidth = config.lineWidth
        ctx.strokeStyle = config.strokeStyle
        ctx.lineCap = config.lineCap
        ctx.lineJoin = config.lineJoin
        // 设置画线起始点位
        ctx.moveTo(client.endX, client.endY)
        // 监听 鼠标移动或手势移动
        window.addEventListener(mobileStatus ? "touchmove" : "mousemove", draw)
    }
    // 绘制
    const draw = event => {
        // 获取当前坐标点位
        const { pageX, pageY } = mobileStatus ? event.changedTouches[0] : event
        // 修改最后一次绘制的坐标点
        client.endX = pageX
        client.endY = pageY

        // 根据坐标点位移动添加线条
        ctx.lineTo(pageX , pageY )

        // 绘制
        ctx.stroke()
    }
    // 结束绘制
    const cloaseDraw = () => {
        // 结束绘制
        ctx.closePath()
        // 移除鼠标移动或手势移动监听器
        window.removeEventListener("mousemove", draw)
    }
    // 创建鼠标/手势按下监听器
    window.addEventListener(mobileStatus ? "touchstart" : "mousedown", init)
    // 创建鼠标/手势 弹起/离开 监听器
    window.addEventListener(mobileStatus ? "touchend" :"mouseup", cloaseDraw)

    // 取消-清空画布
    const cancel = () => {
        // 清空当前画布上的所有绘制内容
        ctx.clearRect(0, 0, config.width, config.height)
    }
    // 保存-将画布内容保存为图片
    const save = () => {
        // 将canvas上的内容转成blob流
        canvas.toBlob(blob => {
            // 获取当前时间并转成字符串，用来当做文件名
            const date = Date.now().toString()
            // 创建一个 a 标签
            const a = document.createElement('a')
            // 设置 a 标签的下载文件名
            a.download = `${date}.png`
            // 设置 a 标签的跳转路径为 文件流地址
            a.href = URL.createObjectURL(blob)
            // 手动触发 a 标签的点击事件
            a.click()
            // 移除 a 标签
            a.remove()
        })
    }

</script>
</html>
复制代码
各内核和浏览器支持情况
Mozilla 程序从 Gecko 1.8 (Firefox 1.5 \(en-US\)[4]) 开始支持 <canvas>。它首先是由 Apple 引入的，用于 OS X Dashboard 和 Safari。Internet Explorer 从 IE9 开始支持<canvas> ，更旧版本的 IE 中，页面可以通过引入 Google 的 Explorer Canvas[5] 项目中的脚本来获得<canvas>支持。Google Chrome 和 Opera 9+ 也支持 <canvas>。

小程序中提示
在小程序中我们如果需呀实现的话，也是同样的原理哦，只是我们需要将创建实例和上下文的 Api 进行修改，因为小程序中是没有 dom，既然没有 dom，哪来的操作 dom 这个操作呢。

如果是 uni-app 则需要使用 uni.createCanvasContext[6]进行上下文创建

如果是原生微信小程序则使用`wx.createCanvasContext`[7]进行创建（2.9.0）之后的库不支持

关于本文

作者：桃小瑞
https://juejin.cn/post/7174251833773752350
