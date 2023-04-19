<template>
  <div class="home">
    <div>
      <div v-for="item in list" :key="item.id">
        <!-- 关于这个key值的绑定，后面再说 -->
        <button @click="handler(item)">
          {{ item.name }}点击跳转到详细页面
        </button>
      </div>
      <div v-if="isLogin">{{ user }}已登录</div>
      <div v-else>未登录</div>
    </div>
    <div>
      <!-- 弹出盒子 -->

      <sec v-show="isShow">
        <template v-solt> 你确定要去购物车吗？ </template>
      </sec>
      <div
        class="btn"
        :isShow="isShow"
        @submit="handlerSubmit"
        @cancel="handlerCancel"
      >
        <button @click="isShow = true">进入</button>
      </div>
    </div>
    <!-- xlsx预览 -->
    <div v-html="table"></div>
    <div
      id="luckyexcel"
      style="
        margin: 0px;
        padding: 0px;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
      "
    ></div>
    <!-- pdf -->
    <!-- <iframe :scr="pdf文件下载地址"></iframe> -->
     
    <div class="pdf-content">
          
      <div v-if="src">
        <!-- 循环显示pdf内容 -->
               <pdf
          v-for="i in numsPage"
          :key="i"
          :src="pdfSrc"
          :page="i"
        ></pdf>
            
      </div>
            
    </div>
  </div>
</template>

<script>
// 引入vue-pdf组件

// 使用vue-pdf4.2.0  依赖包里面的pdfjf-dist里面加es5文件夹，把legacy文件夹爱的文件复制到es5文件夹

// 要用npm导入

//
/* 

删除node_modules文件夹


同时删除package.json  yarn.lock等里面的vue-pdf:xxx（因为使用yarn 构建项目，使用yarn下载依赖的话会出问题）


package.json里面删除的时候空格没删也报错

 根据 https://github.com/FranckFreiburger/vue-pdf/issues/314  里的建议


 固定版本为vue-pdf@4.2.0  +  pdfjs-dist@2.7可解决


*/
import axios from 'axios'
import pdf from 'vue-pdf'
import { mapState } from 'vuex'
import XLSX from 'xlsx'
import sec from '../components/Sec.vue'
export default {
  name: 'Home',
  components: {
    sec,
    pdf,
  },
  data() {
    return {
      table: null,
      isShow: false,
      excelSheet: [],
      src: '',
      numsPage: 0,
    }
  },
  mounted() {
    const options = {
      container: 'luckyexcel', // luckyexcel为容器id
      title: 'luckyexcel', // 表 头名
      lang: 'zh', // 中文
    }

    // luckyexcel.create(options)
  },
  computed: {
    // isLogin() {
    //   return this.$store.state.user.isLogin
    // },
    // user() {
    //   return this.$store.state.user.user
    // },
    // list() {
    //   return this.$store.state.user.list
    // },
    ...mapState('user', ['isLogin', 'user', 'list']),
    // 辅助函数的工作机制
    // mapState(模块的名称，[具体你要使用的仓库的数据1，具体你要使用的仓库的数据2])
    // 返回一个对象,...将返回结果的{}打开，要符合Vue的计算属性的语法规则

    // {
    //   视图上使用的变量1:()=>{
    //     return this.$store.state.模块名.具体你要使用的仓库的数据1
    //   },
    //   视图上使用的变量2:() =>{
    //     return this.$store.state.模块名.具体你要使用的仓库的数据2
    //   },
    // isLogin:() =>{
    //   return this.$store.state.user.isLogin
    // },
    //  ...
    //  ...
    // }

    // 解决PDF中文字体丢失的问题
    pdfSrc() {
      let src = pdf.createLoadingTask({
        url: this.src,
        // 引入字体
        cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.5.207/cmaps/',
        cMapPacked: true,
      })
      return src
    },
  },
  created() {
    // this.getView()
    this.preview()
  },
  methods: {
    async getView() {
      axios({
        url: 'http://192.168.2.87:8088/',
        method: 'get',
        params: '',
        responseType: 'arraybuffer', // 注意：后台需要传递文件流过来，前台在接收时responseType需要设置为arraybuffer
      }).then(res => {
        console.log(res) // 创建blob对象，解析流数据
        this.download(res, 'application/excel;charset=UTF-8', '1.xlsx')
      })
    },
    download(res, type, filename) {
      // 创建blob对象，解析流数据
      const blob = new Blob([res.data], {
        // 设置返回的文件类型
        // type: 'application/pdf;charset=UTF-8' 表示下载文档为pdf，如果是word则设置为msword，excel为excel
        type: type,
      })

      const file = new File([blob], filename, {
        type: 'application/excel;charset=UTF-8',
      })

      // https://zhuanlan.zhihu.com/p/537287859
      // 这里需要注意的是xlsx包的版本为0.16.0，亲测有效，之前xlsx版本是最新的0.18系列则显示不出来
      let workbook = XLSX.read(new Uint8Array(res.data), { type: 'array' }) // 解析数据
      var worksheet = workbook.Sheets[workbook.SheetNames[0]] // workbook.SheetNames 下存的是该文件每个工作表名字,这里取出第一个工作表
      this.table = XLSX.utils.sheet_to_html(worksheet) // 渲染

      console.log(file)
      /*       LuckyExcel.transformExcelToLucky(
        file,
        function (exportJson, luckyexcelfile) {
          console.log(exportJson)
          // 获得转化后的表格数据后，使用luckyexcel初始化，或者更新已有的luckyexcel工作簿
          // 注：luckyexcel需要引入依赖包和初始化表格容器才可以使用
          window.luckyexcel.create({
            container: 'luckyexcel', // luckyexcel is the container id
            data: exportJson.sheets,
            title: exportJson.info.name,
            userInfo: exportJson.info.name.creator,
          })
        },
        function (err) {
          logger.error('Import failed. Is your fail a valid xlsx?')
        }
      ) */

      // 这里就是创建一个a标签，等下用来模  拟点击事件
      /*   const a = document.createElement('a') // 兼容webkix浏览器，处理webkit浏览器中href自动添加blob前缀，默认在浏览器打开而不是下载
      const URL = window.URL || window.webkitURL // 根据解析后的blob对象创建URL 对象
      const herf = URL.createObjectURL(blob) // 下载链接
      a.href = herf // 下载文件名,如果后端没有返回，可以自己写a.download = '文件.pdf'
      a.download = filename
      document.body.appendChild(a) // 点击a标签，进行下载
      a.click() // 收尾工作，在内存中移除URL 对象
      document.body.removeChild(a)
      window.URL.revokeObjectURL(herf) */
    },

    handler(item) {
      /*
        完成跳转页面   home  =>detail

        通过js方式跳转路由，称之为编程式导航
        而通过router-link跳转,称之为声明式导航
      */
      //  1、动态路由传递
      // this.$router.push(`/detail/${item.id}`)

      // 2、普通参数传递
      // this.$router.push({name:'detail',params:{id:item.id}})

      // 3、查询参数传递
      // 查询参数传递只要看到路径上有问号? 说明当前组件传递数据的方式
      // 是查询参 注意的是接收数据的字段不是params而是query
      this.$router.push(`/detail?id=${item.id}`)
    },

    handlerSubmit() {
      this.isShow = false
      console.log('点击了是')
    },
    handlerCancel() {
      this.isShow = false
      console.log('点击了否')
    },

    preview() {
      axios({
        url: 'http://192.168.2.87:8088/',
        method: 'get',
        params: '',
        responseType: 'arraybuffer', // 注意：后台需要传递文件流过来，前台在接收时responseType需要设置为arraybuffer
      }).then(res => {
        // this.download(res, 'application/excel;charset=UTF-8', '1.xlsx')
        this.src = this.getUrl(res) || ''
        // 获取pdf页码
        this.getPageNums()
      })
    },
    getUrl(res, fileName) {
      let blob = new Blob([res.data], { type: 'application/pdf;charset-UTF-8' })
      let url = URL.createObjectURL(blob)
      return url
    },
    getPageNums() {
      let loadingTask = pdf.createLoadingTask(this.src)
      loadingTask.promise.then(pdf => {
        this.numsPage = pdf.numPages
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.btn {
  position: absolute;
  bottom: 10vh;
  left: 50vw;
}

.pdf-content {
  width: 100%;
  height: 100%;
}
</style>
