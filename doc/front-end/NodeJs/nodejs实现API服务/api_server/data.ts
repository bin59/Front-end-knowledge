// 处理list.json放在DataStore，然后把数据返回给客户端
import list from './list.json'
// 报错 找不到模块“./list.json”。请考虑使用 "--resolveJsonModule" 导入带 ".json" 扩展的模块。
//在tsconfig.json中加入： "resolveJsonModule":true

export class DataStore{
    static list = list
}