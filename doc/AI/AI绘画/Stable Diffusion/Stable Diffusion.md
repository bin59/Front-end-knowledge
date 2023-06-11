# Stable Diffusion 资源

- [Stable Diffusion 资源](#stable-diffusion-资源)
  - [一、Stable Diffusion 安装包](#一stable-diffusion-安装包)
  - [二、插件](#二插件)
    - [1.sdweb-easy-prompt-selector 提示词插件](#1sdweb-easy-prompt-selector-提示词插件)
    - [2.SadTalker 本地生成数字人](#2sadtalker-本地生成数字人)
    - [3.Deforum 相关](#3deforum-相关)
    - [4.sd-webui-controlnet](#4sd-webui-controlnet)
  - [三、LoRA](#三lora)
    - [1.LoRA](#1lora)
    - [2.LyCORIS](#2lycoris)
  - [四、模型(ckpt)](#四模型ckpt)
    - [1.camelliamix:](#1camelliamix)
  - [五、一些资源](#五一些资源)
  - [六、一些提示词：](#六一些提示词)
  - [七、以上都在网盘：](#七以上都在网盘)

## 一、Stable Diffusion 安装包

![CSDN图标](https://mmbiz.qpic.cn/mmbiz_png/a7LwBur2oSk11EQBxg0icRl7yziaVT4lSJV5YXUic3f2OzjN3t2XbjWxKm9hEAHNeRq3p8axLict4VnQxM8aToVDrQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1 'CSDN图标')

github 地址：https://github.com/AUTOMATIC1111/stable-diffusion-webui

## 二、插件

### 1.sdweb-easy-prompt-selector 提示词插件

拥有 3000+的提示词

github 地址：https://github.com/blue-pen5805/sdweb-easy-prompt-selector

汉化安装包：https://pan.baidu.com/s/1BpvqIBORFnZlzjVoGeltzw?pwd=a9s6 提取码: a9s6

下载后放到 扩展文件夹下面

### 2.SadTalker 本地生成数字人

见这篇文章：【如何布置 sadtalker,本地生成数字人，get 高效引流工具！】https://zhuanlan.zhihu.com/p/626464675

附 ffmpeg 下载地址：https://www.gyan.dev/ffmpeg/builds/

### 3.Deforum 相关

用于创建动画视频，例如：瞬息全宇宙类型视频

https://github.com/deforum-art/sd-webui-deforum

![](https://mmbiz.qpic.cn/mmbiz_png/a7LwBur2oSk11EQBxg0icRl7yziaVT4lSJbyV4BBps9nZz3XXvIB438dXkGxb5JgWbwUIlFqeNCsBwcPlE2JQhYg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

### 4.sd-webui-controlnet

精准绘图

https://github.com/Mikubill/sd-webui-controlnet.git

- 打开“扩展”选项卡。
- 打开选项卡中的“从 URL 安装”选项卡。
- 输入“扩展的 git 存储库的 URL”。https://github.com/Mikubill/sd-webui-controlnet.git
- 按“安装”按钮。
- 等待 5 秒钟，您将看到消息“已安装到
  stable-diffusion-webui\extensions\sd-webui-controlnet。使用“已安装”选项卡重新启动”。
- 转到“已安装”选项卡，单击“检查更新”，然后单击“应用并重新启动 UI”。（下次您也可以使用这些按钮更新 ControlNet。
- 完全重新启动 A1111 webui，包括您的终端。（如果您不知道什么是“终端”，则可以重新启动计算机以达到相同的效果。
- 下载模型。
- 将模型放入正确的文件夹后，可能需要刷新才能看到模型。刷新按钮位于“模型”下拉菜单中。

## 三、LoRA

[关于 LoRA、LyCORIS 和 LoCon 的类型说明、使用方法和插件神器](https://zhuanlan.zhihu.com/p/626260866)

### 1.LoRA

### 2.LyCORIS

安装 LyCORIS 模块：https://github.com/KohakuBlueleaf/a1111-sd-webui-lycoris

网盘下载：Saya-pov missionary(breast grab).safetensors

## 四、模型(ckpt)

### 1.camelliamix:

下载：https://huggingface.co/Powidl43/CamelliaMix/tree/main

## 五、一些资源

https://civitai.com/posts/151840（需要上网）

![](https://mmbiz.qpic.cn/mmbiz_png/a7LwBur2oSk11EQBxg0icRl7yziaVT4lSJXOBgcmYQ75eD48f9hBpOODdpXZbiaUTtuLF0icOPZBrbfuwQEfPRk06g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

https://huggingface.co（国内可用）

## 六、一些提示词：

<!-- NSFW

可用 camelliamix NSFW + Saya-pov missionary(breast grab).safetensors 尝试

1.  Prompt

```
nsfw,(nogizaka girl:1),(best quality:1),(high_quality:1),fullbody,4k,8k,RAW photo,(intricate_details:1),(ultra-detailed:1),(distinct_image:1),(masterpiece:1),(ultra detailed:1),volumetric lighting,light from the front,1girl,vaginal, breast grab,arms up <lora:Saya-pov missionary(breast grab):1>closed eyes,
```

Negative prompt

```
(low quality:1.4), (worst quality:1.4), EasyNegative, no face, (opened mouth, teeth:1.3), polar lowres, bad anatomy, bad hands, bad body, bad proportions, gross proportions, text, error, missing fingers, missing arms, missing legs, extra digit, extra fingers, fewer digits, extra limbs, extra arms, extra legs, malformed limbs, fused fingers, too many fingers, long neck, cross-eyed, mutated hands, cropped, poorly drawn hands, poorly drawn face, mutation, deformed, worst quality, low quality, normal quality, jpeg artifacts, (big eye:1.2), big face, big breast,badhand, easynegative, paintings, sketches, (worst quality:2), (low quality:2), (normal quality:2), low res, normal quality, (monochrome:1.2), (grayscale:1.2), skin spots, acnes, skin blemishes, age spot, glans, extra fingers, fewer fingers, strange fingers, bad hand, mole, (extra legs:1.2), (extra hands:1.2), bad-hands-5, (hands:2)
```

2.  Prompt

```
(masterpiece:1.2, best quality), 1milf, nsfw, 1boy, face close up, fellatio, huge breasts, cuming, semen, short hair, top view, front view, penis, blonde.
```

Negative prompt

```
(worst quality, low quality:1.4), EasyNegative, multiple views, multiple panels, blurry, watermark, letterbox, text, (side view:1.2),
```

3.

```
(masterpiece:1.2, best quality), 1milf, blonde, nsfw, cuming, cum, semen, wet body, (sex with a man:1.2), back position, riding position, on bed, standing, hands on her knee
```

```
(worst quality, low quality:1.4), EasyNegative, multiple views, multiple panels, blurry, watermark, letterbox, text,
```
 -->

## 七、以上都在网盘：

百度网盘资源一：

链接：https://pan.baidu.com/s/16iox6hCpOiKzXkP81pAmVA?pwd=q168

二维码：

![](https://mmbiz.qpic.cn/mmbiz_png/a7LwBur2oSk11EQBxg0icRl7yziaVT4lSJS0U9PKibrKxv5fvc6qRcM57AuWDsSViaDnxvlltRasvbRwwVF9XEopHQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

夸克网盘资源二：https://pan.quark.cn/s/09e0d1591242
