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
    - [3.LoHa](#3loha)
  - [四、模型(ckpt)](#四模型ckpt)
    - [1.camelliamix:](#1camelliamix)
    - [2.majicMIX 系列](#2majicmix-系列)
    - [3.cetusMix](#3cetusmix)
    - [4.GhostMix](#4ghostmix)
    - [5. IP DESIGN | 3D 化模型](#5-ip-design--3d-化模型)
    - [6.sixZongzi 国风 配合 hanfu LoRA 使用](#6sixzongzi-国风-配合-hanfu-lora-使用)
  - [五、一些资源](#五一些资源)
  - [六、一些提示词：](#六一些提示词)
  - [七、以上都在网盘：](#七以上都在网盘)

![](https://cdn.jsdelivr.net/gh/bin59/imgs@main/00022-3489660447.png)

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

LyCORIS，LoHa，LoRA，LoCon，(IA)^3，LoKR，DyLoRA 等等，是什么意思！

其实这些是微调技术的分类和其算法。

LoRA、LyCORIS、LoCon 是一些技术项目的名称。

LoCon 已被 LyCORIS 合并，过去需要的扩展 LoCon 现在不再需要，只需安装 LyCORIS 的扩展即可。

LoHa，(IA)^3，LoKR，DyLoRA 是 LyRORIS 的学习算法之一。在算法学习时指定使用。

这些基本上在使用时不需要担心，但是如果要使用 LyCORIS 和 LoCon 学习的 LoRA，则需要注意使用 LyCORIS 专用的扩展程序（稍后会提到）。

### 1.LoRA

好用的 LoRA 模型推荐

https://zhuanlan.zhihu.com/p/627369913

- 胶片风 FilmG2 https://zhuanlan.zhihu.com/p/625912991

- LASER - 镭射衣 https://civitai.com/posts/278109
  ![](https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/a4430221-7bf0-4743-8f20-7bf70e50ef11/width=792/00042-3798378045.jpe)

- 中国服饰 LORA 合集【更新中】

https://www.liblibai.com/#/model/6053

触发词: "light green/red/blue/yellow/purple long skirt" ,"birds/flowers/leaf print"

总之，发挥想象力尽可能地改一改这些词，你的想象力越丰富，生成的种类就越丰富，当然，不能超出模型的限制。

```
prompt:

(long skirt:1.2),(blue flowers print:1.2),(yellow flowers print:1.2),(red flowers print:1.3),(birds print:1.2),(leaf print:1.2),1 girl,full body, (short hair:1.1), (realistic:1.7),((best quality)),absurdres,(ultra high res),(photorealistic:1.6),photorealistic,octane render,(hyperrealistic:1.2), (photorealistic face:1.2), (8k), (4k), (Masterpiece),(realistic skin texture), (illustration, cinematic lighting,wallpaper),( beautiful eyes:1.2),((((perfect face)))),(cute),(standing),(black hair),(short hair),black eyes,red lips, (outdoors), <lora:[LoHa] Sinsya辰砂しんしゃ Concept (With HD dataset& noise version):1>,  <lora:japaneseDollLikeness_v10:1>

Negative prompt:

(worst quality:2), (low quality:2), (normal quality:2),(uneven eyes),lowres, normal quality,bad anatomy,bad face,(uneven eyes),paintings,ugly, bad hands,open mouth,multiple girls,extra faces, extro breasts, multiple breasts,obese, fat rolls,extra arms, extra eyes,inverted nipples,extra ears,nipple rings,severed arm, bad arm, nipple bar,asymmetrical eyebrows,big mouth,

```

[![pCm6sv4.png](https://s1.ax1x.com/2023/06/13/pCm6sv4.png)](https://imgse.com/i/pCm6sv4)

[![pCm66KJ.md.png](https://s1.ax1x.com/2023/06/13/pCm66KJ.md.png)](https://imgse.com/i/pCm66KJ)

- 汉服 hanfu
- https://www.liblibai.com/#/model/1166

  v3.0 tags 触发词

明风汉服: hanfu, ming style

宋风汉服: hanfu, song style

唐风汉服: hanfu, tang style

晋风汉服: hanfu, jin style

汉风汉服: hanfu, han style

- 汉服宋风\_v3.1

https://www.liblibai.com/#/model/499

![](./QQ截图20230613221112.png)

☑️ 长衫 long shan☑️ 短衫 short shan

☑️ green/white/pink/red/blue/black/purple/yellow

☑️ 绿/白/粉/红/蓝/黑/紫/黄 + 长衫或短衫 ☑️ 浅蓝 light blue ☑️ 浅绿 light green ☑️ 黄白 yellow with white☑️ 浅黄和白绿相间的短衫 light yellow with green with white short shan

☑️ 百迭裙 pleated skirt

☑️ white/red/green/blue/pink + pleated skirt

☑️ 白/红/绿/蓝/粉 + pleated skirt

☑️ 白金 white golden ☑️ 浅蓝 light blue ☑️ 渐变绿 gradient green

☑️ 半透明白 translucent white

☑️ 红青渐变 red cyan gradient ☑️ 红绿渐变 red green gradient

☑️ 白绿相间的百迭裙 green with white

☑️ 浅黄和白绿相间的百迭裙 light yellow with green with white pleated skirt

☑️ 宋抹 songmo

☑️ red/green/blue/white/orange/pink/yellow/purple

☑️ 红/绿/蓝/白/橘/粉/黄/紫 + songmo

☑️ 绿色碎花宋抹 green floral songmo

☑️ 紫色碎花宋抹 purple floral songmo

☑️ 青色碎花宋抹 cyan floral songmo

- 汉服明风

https://www.liblibai.com/#/model/5201

![](./汉服明风.png)

汉服明风 Lora 模型，感受明朝风采吧！

汉服明风文档: https://sleepy-oyster-204.notion.site/ming-style-6afc9d984e644946b6c31f8fd6db1c8b

QQ 交流群 390640380

微信交流群添加小助手 hanfuaigc

Ming Tags
☑️ 长衫 long coat ☑️ 短衫 short coat

☑️ 马面裙 mamian skirt

☑️ 交领 overlapping collar☑️ 圆领 round collar☑️ 竖领/立领 standing collar☑️ 方领 square collar

❌ 材质优化中 (☑️ 刺绣 embroidery☑️ 织金 woven gold☑️ 妆花/仿妆花 makeup flower ☑️ 补服 bufu）

- Icfgirl LoRa

  ![](./QQ截图20230613220902.png)

https://www.liblibai.com/#/model/5298

V2 版本说明:

1.这个版本是用 v1 版本,调整 LORA 的层级数值来做出优化的。

2.这一版即使不用高清修复,效果依然还不错。

3.模型污染问题减弱,相对更受控。

4.减少油腻感。

0.6-1.1

这是一个网红脸模型,彩色的头发,半身肖像比较在行。

触发关键词 (xx)

This is an internet celebrity face model, with colorful hair, and is more skilled in half-body portraits.

keyword: (xx)

示例用到的名为 model 的基础模型在这里 https://huggingface.co/a1079602570/animefull-final-pruned/tree/main

### 2.LyCORIS

安装 LyCORIS 模块：https://github.com/KohakuBlueleaf/a1111-sd-webui-lycoris

网盘下载：Saya-pov missionary(breast grab).safetensors

### 3.LoHa

（1）

[[LoHa] Sinsya/辰砂/しんしゃ Concept (With HD dataset& noise version)](https://civitai.com/models/84700?modelVersionId=90042)

放 lora 文件夹

```
Prompt:
sinsya, japanese clothes, hair ornament, kimono, red eyes, hair flower, lantern, black hair, paper lantern, looking at viewer, bangs, floral print, red flower, red kimono, 1girl, wide sleeves, architecture, east asian architecture, long sleeves, upper body, outdoors, tassel <lora:sinsya-pynoiseloha:1>

Negative prompt:
animal ears,horns,extra fingers,fewer fingers,(low quality, worst quality:1.65), (bad anatomy), (inaccurate limb:1.2),bad composition, inaccurate eyes, extra digit,fewer digits,(extra arms:1.2),nipples,

Sampler:DPM++ 2M Karras
Model:cetusMix_Version35
CFG scale:7
Steps:20
Seed:1372389372
Clip skip:2

```

[![pCm6Ege.jpg](https://s1.ax1x.com/2023/06/13/pCm6Ege.jpg)](https://imgse.com/i/pCm6Ege)

[![pCm6A3D.jpg](https://s1.ax1x.com/2023/06/13/pCm6A3D.jpg)](https://imgse.com/i/pCm6A3D)

[![pCm6VjH.jpg](https://s1.ax1x.com/2023/06/13/pCm6VjH.jpg)](https://imgse.com/i/pCm6VjH)

[![pCm6k9O.jpg](https://s1.ax1x.com/2023/06/13/pCm6k9O.jpg)](https://imgse.com/i/pCm6k9O)

（2）[LoHa] Oboro/朧 Concept (With multires noise version)

https://www.liblibai.com/#/model/5930

![](./QQ%E6%88%AA%E5%9B%BE20230613215931.png)
![](./QQ%E6%88%AA%E5%9B%BE20230613220021.png)

## 四、模型(ckpt)

### 1.camelliamix:

下载：https://huggingface.co/Powidl43/CamelliaMix/tree/main

### 2.majicMIX 系列

https://zhuanlan.zhihu.com/p/633697969

- majic 系列分了好几个，分别是：

- majicMIX realistic：主打真实系，是通用版本。

- majicMIX sombre：和 realistic 差不太多，但是带了一点点阴暗的色调。内置了 VAE 所以不需要单独用。

- majicMIX fantasy：风格非常炸裂美好，但是远距离脸部需要 inpaint 以达成最好效果。

- majicMIX lux:融合了，realistic 和 fantasy，是适合抽卡博梦想的模型。

- majicMIX horror：偏恐怖主题。

LiblibAi 模型下载链接（国内可用）：

```

https://www.liblibai.com/#/model/4961

https://www.liblibai.com/#/model/4969

https://www.liblibai.com/#/model/4963

https://www.liblibai.com/#/model/4962

https://www.liblibai.com/#/model/6668
```

### 3.cetusMix

[AI 模型推荐（2）cetusMix 模型测评|附链接](https://www.bilibili.com/read/cv23080208/)

### 4.GhostMix

下载：https://www.liblibai.com/#/model/5775

[GhostMix 下载/使用/效果图](https://zhuanlan.zhihu.com/p/632433091)

### 5. IP DESIGN | 3D 化模型

https://www.liblibai.com/#/model/14746

针对 IP 设计训练模型，可以输出类似泡泡玛特的 3D 风格，也可以图生图将 2D 画面 3D 化，主要生成偏向 Q 版可爱风。

V1.0 版本是原生版本，V1.1 是与 samaritan3dCartoon 模型的融合版本，前者风格偏可爱和 Q 版，后者适用性更强。

Steps:30~40

推荐:768\*1024（or 正方形）

Sampler：DPM++2MKarras

![](./00007-3260741950.jpg)

```
Prompts：pixar,3D,C4D,blender,1girl,solo,wings,long hair,jacket,black hair,shorts,pointy ears,dark-skinned female,ponytail,gradient,gradient background,hands in pockets,shirt,hair ornament,white shirt,green jacket,hoodie,(fairy wings:1.2),brown eyes,jewelry,open clothes,open jacket,looking down,fairy,hooded jacket,

Neg_Prompts:(worst quality, low quality:1.4),(malformed hands:1.4),(poorly drawn hands:1.4),(mutated fingers:1.4),(extra limbs:1.35),(poorly drawn face:1.4),missing legs,(extra legs:1.4),missing arms,extra arm,ugly,huge eyes,fat,worst face,(close shot:1.1),text,watermark,blurry eyes,extra fingers,
```

![](./2004493191.jpg)

```
Pixar,1,(masterpiece),( top quality),(best quality),(official art),(unity),( 8k wallpaper),(ultra high res),(dynamic angle),( natural skin texture),(beautiful and aesthetic),(very detailed CG,complex details),Soft Light,ultra-short cheongsam,<lora:盲盒:0.7>,.

(worst quality:2),(low quality:2),(normal quality:2),collage,artist name,signature,artist logo,watermark, DeepNegativeV1.x_V175T， EasyNegativeV2.
```

![](./QQ截图20230615211221.png)

### 6.sixZongzi 国风 配合 hanfu LoRA 使用

下载：https://www.liblibai.com/#/model/1312

```
prompt:masterpiece, professional lighting, photon mapping, radiosity, physically-based rendering,1girl, full body,absurdres, highres, skyline, beautiful detailed sky, covered nipples,(white hanfu, (tang style:1.3)),<lora:hanfu_v30:0.55>,blue eyes,<lora:eyesgenLoraWIP_v1:0.4>,.

Negative prompt:(EasyNegative:1.4), (ng_deepnegative_v1_75t), (worst quality:1.4), (low quality:1.4) , (monochrome:1.1), lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, normal quality, jpeg artifacts, (signature, watermark, username:1.4), blurry, bad feet, multiple breasts, (mutated hands and fingers:1.5 ), (long body :1.3), (mutation, poorly drawn :1.2) , black-white, liquid body, liquid tongue, disfigured, malformed, mutated, anatomical nonsense, text font ui, malformed hands, long neck, blurred, lowers, bad proportions, bad shadow, uncoordinated body, unnatural body, fused breasts, bad breasts, huge breasts, poorly drawn breasts, extra breasts, liquid breasts, heavy breasts, missing breasts, huge haunch, huge thighs, huge calf, fused hand, missing hand, (holding), muscles, abs,Exposed leg,bad-artist-anime,bad_prompt.

Sampler:DPM++2MKarras
model:六个粽子 sixZongzi
CFG scale:6
steps:25
seed:793437189
```

## 五、一些资源

1. https://civitai.com/posts/151840（需要魔法上网）

![](https://mmbiz.qpic.cn/mmbiz_png/a7LwBur2oSk11EQBxg0icRl7yziaVT4lSJXOBgcmYQ75eD48f9hBpOODdpXZbiaUTtuLF0icOPZBrbfuwQEfPRk06g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

2. 模型等下载 https://huggingface.co（国内可用,下载慢）

3. 烧脑社区 https://www.hotiq.cn/

   [![pCm64PK.png](https://s1.ax1x.com/2023/06/13/pCm64PK.png)](https://imgse.com/i/pCm64PK)

4. stable-diffusion 小白使用大全+插件和模型推荐 2.0

https://zhuanlan.zhihu.com/p/630393846

5. liblibai
   模型下载、图片广场 https://www.liblibai.com/#/ 下载速度快

## 六、一些提示词：

1. https://www.hotiq.cn/8507.html

```
正面词

gradient background, standing,Wide angle
a girl, Sexy and slim,pretty face, Leakage of navel,Long silver hair,Big eyes, Shut up ,Sexy breasts,Pink decoration,Bare shoulders, casual pose, Upper body,abstract,   (realistic:0.8),<lora:chilloutmixss20_v20:0.3> <lora:dreamyGirlsFace_dreamyFace:0.4> <lora:fashionGirl_v54:0.3> <lora:shojovibe_v11:0.3> <lora:hanfu_v29:0.7>

负面词

 (worst quality:2), (low quality:2), (normal quality:2), lowres, normal quality, ((monochrome)), ((grayscale)),paintings, sketches,nipples, skin spots, acnes, skin blemishes, bad anatomy,facing away, looking away,tilted head, mult multiple girls, lowres,bad anatomy,bad hands, text, error, missing fingers,extra digit, fewer digits, blurry,bad feet,cropped,poorly drawn hands,poorly drawn face,mutation,deformed,worst quality,low quality,normal quality,jpeg artifacts,signature,watermark,extra fingers,fewer digits,extra limbs,extra arms,extra legs,malformed limbs,fused fingers,too many fingers,long neck,cross-eyed,mutated hands,polar lowres,bad body,bad proportions,gross,nipples,(bad hands:1.9), (bad feet:1.9), badhandv4

```

[![pCmcKsJ.md.jpg](https://s1.ax1x.com/2023/06/13/pCmcKsJ.md.jpg)](https://imgse.com/i/pCmcKsJ)

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
