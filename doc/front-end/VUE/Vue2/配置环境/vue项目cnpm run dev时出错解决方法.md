E:\vue01\vue01>cnpm run dev

> vue01@1.0.0 dev E:\vue01\vue01
> webpack-dev-server --inline --progress --config build/webpack.dev.conf.js

14% building modules 34/38 modules 4 active ...1\vue01\src\components\HelloWorld.vue{ parser: "babylon" } is deprecated; we now treat it as { parser: "babel" }.
95% emitting

WARNING Compiled with 2 warnings 上午 11:54:31

✘ https://google.com/#q=import%2Fno-duplicates Resolve error: unable to load resolver "node"
src\main.js:1:1
// The Vue build version to load with the `import` command
^

✘ 1 problem (1 error, 0 warnings)

Errors:
1 https://google.com/#q=import%2Fno-duplicates

✘ https://google.com/#q=import%2Fno-duplicates Resolve error: unable to load resolver "node"
src\router\index.js:1:1
import Vue from 'vue'
^

✘ 1 problem (1 error, 0 warnings)

Errors:
1 https://google.com/#q=import%2Fno-duplicates

You may use special comments to disable some warnings.
Use // eslint-disable-next-line to ignore the next line.
Use /_ eslint-disable _/ to ignore all warnings in a file.

## 解决方法：项目 Bulid 文件夹 webpack.base.conf.js

module: {
rules: [
//...(config.dev.useEslint ? [createLintingRule()] : []), // 注释掉即可
{
test: /\.vue$/,
loader: 'vue-loader',
options: vueLoaderConfig
},
