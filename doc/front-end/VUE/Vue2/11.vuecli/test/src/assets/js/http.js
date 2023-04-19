// 引入axios
import axios from 'axios'

// 创建一个axios的服务
// 传递一些配置的参数(文档)
let http = axios.create({
  // timeout请求的过期时间
  timeout: 5000,
})

// 配置拦截器
// 请求拦截器
http.interceptors.request.use(config => {
  /*
    config参数是用来获取拦截器的配置
    通过不去修改它的默认配置
    而是去添加一些新属性，如添加token
    
    */
  let token = '123'
  if (token) {
    config.headers.token = token
  }

  // 配置loading图的显示

  // 一定要记住:操作完了config之后,
  // 一定要renturn
  return config
})

// 响应拦截
http.interceptors.response.use(response => {
  console.log(response)

  // 配置loading图的消失

  // 做数据的预解析
  return response.data
  //   if (response.status == 200) {
  //     return 1
  //   } else {
  //     return 0
  //   }
})

export default http
