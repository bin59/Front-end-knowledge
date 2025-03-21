# 在线表格选择以及导入导出实现

## 一、排除

### Univer (x 导入导出是Pro版)

Luckysheet的v3版本,有商业版本和开源版本,部分高级功能需要付费

<https://univer.ai/zh-CN>

### Handsontable (X)

‌Handsontable可以用于商业用途，但`需要购买商业许可证`。

根据官方文档和搜索结果，Handsontable 的完整功能（如数据透视表、高级筛选）需购买商业授权，免费版仅适用于非商业用途（如个人学习、科研）

Handsontable 的社区版采用 MIT 协议，但自 v7.0.0 版本起，其核心功能已转为 付费商业授权模式，仅部分基础功能免费。免费版本使用时需添加 licenseKey:"non-commercial-and-evaluation" 以规避提示，但商用场景需购买商业许可，否则可能面临法律风险

<https://handsontable.com/>

### SheetJs（x）

SheetJS（社区版）

    开源免费：遵循 Apache 2.0 开源协议，可免费用于个人或商业项目。

    基础功能：支持 Excel 文件（XLSX/XLS/CSV 等）的读写、基础格式处理（单元格合并、简单样式等）。

    适用场景：适合轻量级数据处理、原型开发或对高级功能无需求的场景。

SheetJSPro（专业版）

    商业授权：需购买商业许可证，按开发者或企业规模定价。

    增强功能：支持密码保护文件、高级格式（条件格式、图表、宏）、旧版 Excel 格式（如 Lotus 1-2-3）、大数据量优化（流式处理）等。

    适用场景：企业级应用、需要处理复杂 Excel 功能或敏感数据（如加密文件）的场景。

<https://sheetjs.com/>

### spreadjs (X)

看授权协议就可以知道了，spreadjs目前是商业和GPLv3。只有遵循GPLv3协议的开源项目可以直接使用，`商业项目必须买商业授权`

若项目预算允许，推荐 **SpreadJS（葡萄城）**：

- ✅ 完整支持 Excel 样式、公式、图表、数据透视表。
- ✅ 直接导入/导出 Excel 文件，无需额外解析。

<https://www.grapecity.com.cn/developer/spreadjs/feature/io-excel>

## 二、可选择：Luckysheet + exceljs

### Luckysheet （√）

开源协议：采用AGPLv3协议，可免费商用，但需`遵守协议要求（如开源修改后的代码）`

国产开源在线表格库，界面与Excel高度相似，支持公式、冻结行列、多Sheet操作、数据透视表等核心功能。

Ps:Luckysheet于2024年3月28日 已不再维护

<https://dream-num.github.io/LuckysheetDocs/zh/>

[如何在Vue/React项目中使用Luckysheet？](https://dream-num.github.io/LuckysheetDocs/zh/guide/FAQ.html#%E5%A6%82%E4%BD%95%E5%9C%A8vue-react%E9%A1%B9%E7%9B%AE%E4%B8%AD%E4%BD%BF%E7%94%A8luckysheet)

### exceljs (√)

开源协议：`MIT协议，允许免费商用且无限制`。
纯前端JavaScript库，支持Excel文件的读取、修改和生成，兼容XLSX格式，功能涵盖单元格样式、公式、图表等。

支持浏览器端与Node.js环境，适合数据导入导出、动态报表生成等场景。

<https://github.com/exceljs/exceljs>

具体实现细节可参考各库官方文档（如[ExcelJS中文文档](https://github.com/exceljs/exceljs/blob/master/README_zh.md)、[Luckysheet GitHub](https://github.com/mengshukeji/Luckysheet)）。

### 详细分析

#### 1. **Luckysheet**

- **功能特性**：
  - **导入本地 Excel**：需依赖 `SheetJS` 解析文件，转换为 JSON 数据后渲染到界面。
  - **样式支持**：支持部分基础样式（如单元格背景色、字体加粗），但**复杂样式（如边框、合并样式）可能丢失**。
  - **公式支持**：内置公式引擎（如 `SUM`, `VLOOKUP`），导入后公式可自动计算并显示结果。
- **适用场景**：需要界面高度还原 Excel 且支持公式计算的在线表格应用。
- **集成示例**：

  ```javascript
  // 使用 SheetJS 解析文件
  const workbook = XLSX.read(fileData, { type: 'array' })
  const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets.Sheet1, { header: 1 })

  // 渲染到 Luckysheet
  luckysheet.create({
    container: 'luckysheet',
    data: sheetData,
    options: {
      showtoolbar: true,
      showinfobar: true
    }
  })
  ```

#### 2. **ExcelJS**

- **功能特性**：
  - **导入本地 Excel**：支持完整解析 Excel 文件，包括样式和公式。
  - **样式支持**：可读取和设置字体、颜色、边框、对齐方式等完整样式。
  - **公式支持**：支持公式解析，但需手动调用计算引擎（如 `=SUM(A1:A10)` 不会自动计算）。
  - **界面渲染**：无内置表格组件，需自行实现界面渲染（如结合 `React-Table` 或 `ag-Grid`）。
- **适用场景**：需要精确控制 Excel 样式和公式的后台处理或全栈应用。
- **示例代码**：

  ```javascript
  import ExcelJS from 'exceljs'
  const workbook = new ExcelJS.Workbook()
  await workbook.xlsx.readFile('file.xlsx')
  const worksheet = workbook.getWorksheet('Sheet1')

  // 获取单元格样式和公式
  const cell = worksheet.getCell('A1')
  console.log(cell.font, cell.formula) // 输出字体样式和公式
  ```

## 三、方案：LuckySheet + LuckyExcel + exceljs实现在线表格+导入导出功能

若需 **免费商用** 的表格库结合 ExcelJS 实现完整样式与公式，以下方案更优：

**ExcelJS + Luckysheet**

- **Luckysheet 优势**

  - **开源协议**：AGPLv3 协议，允许免费商用（修改代码需开源）。
  - **功能支持**：
    - 界面高度还原 Excel，支持公式计算、冻结行列、多 Sheet 操作。
    - 可直接通过 `xlsx` 库解析 Excel 文件后渲染数据。
  - **集成示例**：

  ```javascript
  // ExcelJS 解析样式与公式
  import ExcelJS from 'exceljs'
  const workbook = new ExcelJS.Workbook()
  await workbook.xlsx.readFile('file.xlsx')
  const worksheet = workbook.getWorksheet('Sheet1')
  // 提取数据、样式、公式
  const cell = worksheet.getCell('A1')
  const formula = cell.formula // 公式表达式
  const style = cell.style // 样式对象

  // Luckysheet 渲染
  luckysheet.create({
    container: 'sheet',
    data: worksheetData,
    options: { showtoolbar: true }
  })
  ```

### 关键注意事项

1. **样式兼容性**

   - Excel 的复杂样式（如条件格式、图表）在免费方案中普遍支持有限，需通过 CSS 或自定义渲染逻辑模拟。

2. **性能问题**

   - 若需实时计算，优先选择集成公式引擎（如 Luckysheet 内置引擎）或分片加载数据。
   - 大文件导入时，Luckysheet 需分页加载，ExcelJS 需流式处理。

3. **协议合规性**

   - Luckysheet 的 AGPLv3 协议要求修改代码需开源，私有化部署时需谨慎；Tabulator、xlsx 的 MIT 协议更宽松。

4. **避免商用风险**
   - 除非已购买商业授权，否则不推荐用于商业项目。

### 技术实现

- 1. LuckySheet:还原界面 <https://mengshukeji.github.io/LuckysheetDocs/zh/guide/config.html>
- 2. luckyexcel:实现导入功能 <https://github.com/dream-num/Luckyexcel/blob/master/README-zh.md#es%E5%AF%BC%E5%85%A5>
- 3. exceljs:实现导出功能。社区导出功能实现：[luckysheet导出excel表格(使用exceljs，支持图片)](https://blog.csdn.net/zinchliang/article/details/120262185?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-0-120262185-blog-107179708.235^v43^pc_blog_bottom_relevance_base6&spm=1001.2101.3001.4242.1&utm_relevant_index=2) 注意：exportSheetExcel方法的const worksheet = workbook.addWorksheet(name)改为const worksheet = workbook.addWorksheet(table.name)

实现代码

`ExcelJsDemo`

```tsx
import { useRef, useEffect, useState } from 'react'
import LuckyExcel from 'luckyexcel'

import { Upload, Button, Space /* , Tooltip */ } from 'antd'
import {
  UploadOutlined,
  SaveOutlined
  /* BoldOutlined,
  ItalicOutlined,
  MergeCellsOutlined */
} from '@ant-design/icons'

// 使用了exceljs
import { exportSheetExcel } from './exportSheetExcel'

// 类型声明
declare global {
  interface Window {
    luckysheet: {
      create: (config: any) => void
      destroy: () => void
      getcellvalue: (row: number, col: number) => any
      getAllSheets: () => any[]
    }
  }
}

export const ExcelJsDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [fileName, setFileName] = useState('')

  // 初始化表格
  const initSpreadsheet = (data?: any[]) => {
    console.log('window.luckysheet', window.luckysheet)

    if (!window.luckysheet) return
    console.log('initSpreadsheet', data)
    let options = null

    /*    // According to the browser language
    const lang = luckysheetDemoUtil.language() === 'zh' ? 'zh' : 'en'
    const isShare = luckysheetDemoUtil.getRequest().share // '?share=1' opens the collaborative editing mode
    const gridKey = luckysheetDemoUtil.getRequest().gridKey // workbook id for collaborative editing, or directly define here

    if (isShare || gridKey) {
      // http://localhost:3000/?gridKey=12eyy789-kk45ofid-23737245
      if (!gridKey) {
        alert('If gridKey is not provided in the address bar, please add it in the source code')
      }
      options = {
        container: 'luckysheet',
        lang: lang,
        allowUpdate: true,
        updateImageUrl: location.origin + '/luckysheet/api/updateImg',
        updateUrl: 'ws://' + location.host + '/luckysheet/websocket/luckysheet',
        gridKey: gridKey,
        loadUrl: location.origin + '/luckysheet/api/load',
        loadSheetUrl: location.origin + '/luckysheet/api/loadsheet'
      }
    } */

    options = {
      container: 'luckysheet', //容器ID
      // 工作表配置
      data: data || [
        {
          name: 'Sheet1', //工作表名称
          celldata: [], //初始化使用的单元格数据
          config: {
            // merge: {}, //合并单元格
            rowlen: 25,
            columnlen: 100
            /* "rowlen":{}, //表格行高
              "columnlen":{}, //表格列宽 */
            // rowhidden: {}, //隐藏行
            // colhidden: {}, //隐藏列
            // borderInfo: {}, //边框
            // authority: {} //工作表保护
          },
          // color: '', //工作表颜色
          index: 0 //工作表索引
          // status: 1, //激活状态
          // order: 0, //工作表的下标
          // hide: 0, //是否隐藏
          // row: 36, //行数
          // column: 18, //列数
          // defaultRowHeight: 19, //自定义行高
          // defaultColWidth: 73, //自定义列宽
          // scrollLeft: 0, //左右滚动条位置
          // scrollTop: 315, //上下滚动条位置
          // luckysheet_select_save: [], //选中的区域
          // calcChain: [], //公式链
          // isPivotTable: false, //是否数据透视表
          // pivotTable: {}, //数据透视表设置
          // filter_select: {}, //筛选范围
          // filter: null, //筛选配置
          // luckysheet_alternateformat_save: [], //交替颜色
          // luckysheet_alternateformat_save_modelCustom: [], //自定义交替颜色
          // luckysheet_conditionformat_save: {}, //条件格式
          // frozen: {}, //冻结行列配置
          // chart: [], //图表配置
          // zoomRatio: 1, // 缩放比例
          // image: [], //图片
          // showGridLines: 1, //是否显示网格线
          // dataVerification: {} //数据验证配置
        }
      ],
      lang: 'zh', // 设定表格语言
      //工作簿名称 title
      showinfobar: false, //信息栏
      // 工具栏
      // showtoolbar: true,
      // 自定义配置工具栏，可以与showtoolbar配合使用，showtoolbarConfig拥有更高的优先级
      showtoolbarConfig: {
        // undoRedo: true, //撤销重做，注意撤消重做是两个按钮，由这一个配置决定显示还是隐藏
        // paintFormat: true, //格式刷
        currencyFormat: false, //货币格式
        percentageFormat: false, //百分比格式
        numberDecrease: false, // '减少小数位数'
        numberIncrease: false, // '增加小数位数
        moreFormats: false, // '更多格式'
        // font: true, // '字体'
        // fontSize: true, // '字号大小'
        // bold: true, // '粗体 (Ctrl+B)'
        // italic: true, // '斜体 (Ctrl+I)'
        // strikethrough: true, // '删除线 (Alt+Shift+5)'
        // underline: true, // '下划线 (Alt+Shift+6)'
        // textColor: true, // '文本颜色'
        // fillColor: true, // '单元格颜色'
        border: false, // '边框'
        // mergeCell: true, // '合并单元格'
        // horizontalAlignMode: true, // '水平对齐方式'
        // verticalAlignMode: true, // '垂直对齐方式'
        textWrapMode: false, // '换行方式'
        textRotateMode: false, // '文本旋转方式'
        image: false, // '插入图片'
        link: false, // '插入链接'
        chart: false, // '图表'（图标隐藏，但是如果配置了chart插件，右击仍然可以新建图表）
        postil: false, //'批注'
        pivotTable: false, //'数据透视表'
        function: true, // '公式'
        frozenMode: false, // '冻结方式'
        sortAndFilter: false, // '排序和筛选'
        conditionalFormat: false, // '条件格式'
        dataVerification: false, // '数据验证'
        splitColumn: false, // '分列'
        screenshot: false, // '截图'
        // findAndReplace: true, // '查找替换'
        protection: false, // '工作表保护'
        print: false // '打印'
      },
      showsheetbar: true, //底部sheet页
      //自定义底部sheet页
      // showsheetbarConfig: {
      //   add: false, //新增sheet
      //   menu: false, //sheet管理菜单
      //   sheet: false //sheet页显示
      // }
      //自定义单元格右键菜单
      cellRightClickConfig: {
        // copy: false, // 复制
        // copyAs: false, // 复制为
        // paste: false, // 粘贴
        // insertRow: false, // 插入行
        // insertColumn: false, // 插入列
        // deleteRow: false, // 删除选中行
        // deleteColumn: false, // 删除选中列
        // deleteCell: false, // 删除单元格
        // hideRow: false, // 隐藏选中行和显示选中行
        // hideColumn: false, // 隐藏选中列和显示选中列
        // rowHeight: false, // 行高
        // columnWidth: false, // 列宽
        // clear: false, // 清除内容
        matrix: false, // 矩阵操作选区
        sort: false, // 排序选区
        filter: false, // 筛选选区
        chart: false, // 图表生成
        image: false, // 插入图片
        link: false, // 插入链接
        data: false // 数据验证
        // cellFormat: false // 设置单元格格式
        // 用户自定义单元格右键菜单
        /* customs: [
          {
            title: `test`,
            onClick: function (clickEvent, event, params) {
              console.log('function test click', clickEvent, event, params)
            }
          }
        ]*/
      },
      //自定义sheet页右击菜单
      sheetRightClickConfig: {
        // delete: false, // 删除
        // copy: false, // 复制
        // rename: false, //重命名
        // color: false, //更改颜色
        // hide: false, //隐藏，取消隐藏
        // move: false //向左移，向右移
      },
      //唯一key gridKey
      //加载整个工作簿 loadUrl
      //加载其它页celldata loadSheetUrl
      //允许更新 allowUpdate
      //更新地址 updateUrl
      //缩略图更新地址 updateImageUrl
      //插件 plugins
      //列数 column
      //行数 row
      //亿万格式 autoFormatw
      //精度 accuracy
      //允许复制 allowCopy
      //底部计数栏 showstatisticBar
      //自定义计数栏 showstatisticBarConfig
      //允许添加行 enableAddRow
      //默认添加行的数目 addRowCount
      //允许回到顶部 enableAddBackTop
      //用户信息 userInfo
      //用户信息菜单 userMenuItem
      //返回按钮链接 myFolderUrl
      //比例 devicePixelRatio
      //功能按钮 functionButton
      //自动缩进界面 showConfigWindowResize
      //刷新公式 forceCalculation
      //行标题区域的宽度 rowHeaderWidth
      //列标题区域的高度 columnHeaderHeight
      //是否显示公式栏 sheetFormulaBar
      //初始化默认字体大小 defaultFontSize
      //是否限制工作表名长度 limitSheetNameLength
      //默认允许工作表名的最大长度 defaultSheetNameMaxLength
      //自定义图片上传 uploadImage
      //自定义图片地址处理 imageUrlHandle
      //分页器
      // pager: {
      //   pageIndex: 1, //当前页码，必填
      //   total: 100, //数据总条数，必填
      //   selectOption: [10, 20, 30], // 选择每页的行数，
      //   pageSize: 10, //每页显示多少条数据，默认10条
      //   showTotal: false, // 是否显示总数，默认关闭：false
      //   showSkip: false, //是否显示跳页，默认关闭：false
      //   showPN: false, //是否显示上下翻页，默认开启：true
      //   prevPage: '', //上翻页文字描述，默认"上一页"
      //   nextPage: '', //下翻页文字描述，默认"下一页"
      //   totalTxt: '' // 数据总条数文字描述，默认"总共：{total}"
      // }
      // 钩子函数
      hook: {
        cellDragStop: function (cell, postion, sheetFile, ctx, event) {
          // console.info(cell, postion, sheetFile, ctx, event);
        },
        rowTitleCellRenderBefore: function (rowNum, postion, ctx) {
          // console.log(rowNum);
        },
        rowTitleCellRenderAfter: function (rowNum, postion, ctx) {
          // console.log(ctx);
        },
        columnTitleCellRenderBefore: (columnAbc, postion, ctx) => {
          // console.log(columnAbc);
        },
        columnTitleCellRenderAfter: (columnAbc, postion, ctx) => {
          // console.log(postion);
        },
        cellRenderBefore: (cell, postion, sheetFile, ctx) => {
          // console.log(cell,postion,sheetFile,ctx);
        },
        cellRenderAfter: (cell, postion, sheetFile, ctx) => {
          // console.log(postion);
        },
        cellMousedownBefore: (cell, postion, sheetFile, ctx) => {
          // console.log(postion);
        },
        // 鼠标点击后
        cellMousedown: (cell: object | null, postion: object, sheetFile: object, ctx: object) => {
          console.log(cell, postion)
        },
        sheetMousemove: function (cell, postion, sheetFile, moveState, ctx) {
          // console.log(cell,postion,sheetFile,moveState,ctx);
        },
        sheetMouseup: function (cell, postion, sheetFile, moveState, ctx) {
          // console.log(cell,postion,sheetFile,moveState,ctx);
        },
        cellAllRenderBefore: function (data, sheetFile, ctx) {
          // console.info(data,sheetFile,ctx)
        },
        updated: function (operate) {
          // console.info(operate)
        },
        cellUpdateBefore: function (r, c, value, isRefresh) {
          // console.info('cellUpdateBefore',r,c,value,isRefresh)
        },
        cellUpdated: function (r, c, oldValue, newValue, isRefresh) {
          // console.info('cellUpdated',r,c,oldValue, newValue, isRefresh)
        },
        sheetActivate: function (index, isPivotInitial, isNewSheet) {
          // console.info(index, isPivotInitial, isNewSheet)
        },
        rangeSelect: function (index, sheet) {
          // console.info(index, sheet)
        },
        commentInsertBefore: function (r, c) {
          // console.info(r, c)
        },
        commentInsertAfter: function (r, c, cell) {
          // console.info(r, c, cell)
        },
        commentDeleteBefore: function (r, c, cell) {
          // console.info(r, c, cell)
        },
        commentDeleteAfter: function (r, c, cell) {
          // console.info(r, c, cell)
        },
        commentUpdateBefore: function (r, c, value) {
          // console.info(r, c, value)
        },
        commentUpdateAfter: function (r, c, oldCell, newCell) {
          // console.info(r, c, oldCell, newCell)
        },
        cellEditBefore: function (range) {
          // console.info(range)
        },
        workbookCreateAfter: function (json) {
          // console.info(json)
        },
        rangePasteBefore: function (range, data) {
          // console.info('rangePasteBefore',range,data)
          // return false; //Can intercept paste
        }
      }
    }

    window.luckysheet.create(options)
  }

  // 文件导入
  const handleImport = async (file: File) => {
    // 得到xlsx文件后
    LuckyExcel.transformExcelToLucky(
      file,
      (exportJson, luckysheetfile) => {
        // 转换后获取工作表数据
        console.log('转换后获取工作表数据', exportJson)
        setFileName(file.name.replace(/\.[^/.]+$/, ''))

        initSpreadsheet(exportJson.sheets)
      },
      (error) => {
        console.log(error)
      }
    )
    return false
  }

  // 文件导出
  const handleExport = () => {
    exportSheetExcel(window.luckysheet.getAllSheets(), fileName)
  }

  // 工具栏操作
  /*   const handleFormat = (action: 'bold' | 'italic' | 'merge') => {
    const range = window.luckysheet?.getRange()
    if (!range) return

    switch (action) {
      case 'bold':
        // 实现加粗逻辑
        break
      case 'italic':
        // 实现斜体逻辑
        break
      case 'merge':
        // 合并单元格逻辑
        break
    }
  } */

  useEffect(() => {
    initSpreadsheet()
    return () => window.luckysheet?.destroy()
  }, [])

  return (
    <div style={{ width: '100%', height: '100%', padding: 16 }}>
      {/* 自定义工具栏 */}
      <Space
        style={{
          background: '#f0f2f5',
          padding: 8,
          borderRadius: 6,
          marginBottom: 16
        }}
      >
        <Upload beforeUpload={handleImport} showUploadList={false} accept=".xlsx,.xls">
          <Button icon={<UploadOutlined />}>打开</Button>
        </Upload>

        {/*     <Tooltip title="加粗">
          <Button icon={<BoldOutlined />} onClick={() => handleFormat('bold')} />
        </Tooltip>

        <Tooltip title="斜体">
          <Button icon={<ItalicOutlined />} onClick={() => handleFormat('italic')} />
        </Tooltip>

        <Tooltip title="合并单元格">
          <Button icon={<MergeCellsOutlined />} onClick={() => handleFormat('merge')} />
        </Tooltip> */}

        <Button
          type="primary"
          icon={<SaveOutlined />}
          onClick={handleExport}
          style={{ marginLeft: 'auto' }}
        >
          保存
        </Button>
      </Space>

      {/* 表格容器 */}
      <div
        id="luckysheet"
        ref={containerRef}
        style={{
          width: '100%',
          height: 'calc(100% - 48px)',
          border: '1px solid #f0f0f0',
          borderRadius: 6
        }}
      />
    </div>
  )
}
```

`exportSheetExcel`

```tsx
import Excel from 'exceljs'
export async function exportSheetExcel(luckysheet, name = 'file') {
  // 参数为luckysheet.getluckysheetfile()获取的对象
  // 1.创建工作簿，可以为工作簿添加属性
  const workbook = new Excel.Workbook()
  // 2.创建表格，第二个参数可以配置创建什么样的工作表
  luckysheet.every((table: any) => {
    if (table.data.length === 0) return true
    const worksheet = workbook.addWorksheet(table.name)
    // 3.设置单元格合并,设置单元格边框,设置单元格样式,设置值
    setStyleAndValue(table.data, worksheet)
    setMerge(table.config.merge, worksheet)
    setBorder(table, worksheet)
    setImages(table, worksheet, workbook)
    return true
  })
  // 4.写入 buffer
  const buffer = await workbook.xlsx.writeBuffer()
  // 5.保存为文件
  saveFile(buffer, name)
}

const saveFile = function (buf, name) {
  let blob = new Blob([buf], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'
  })
  const downloadElement = document.createElement('a')
  let href = window.URL.createObjectURL(blob)
  downloadElement.href = href
  downloadElement.download = name + '.xlsx' // 文件名字
  document.body.appendChild(downloadElement)
  downloadElement.click()
  document.body.removeChild(downloadElement) // 下载完成移除元素
  window.URL.revokeObjectURL(href) // 释放掉blob对象
}

const setMerge = function (luckyMerge = {}, worksheet) {
  const mergearr = Object.values(luckyMerge)
  mergearr.forEach(function (elem) {
    // elem格式：{r: 0, c: 0, rs: 1, cs: 2}
    // 按开始行，开始列，结束行，结束列合并（相当于 K10:M12）
    worksheet.mergeCells(elem.r + 1, elem.c + 1, elem.r + elem.rs, elem.c + elem.cs)
  })
}

//获取图片在单元格的位置
const getImagePosition = function (num, arr) {
  let index = 0
  let minIndex
  let maxIndex
  for (let i = 0; i < arr.length; i++) {
    if (num < arr[i]) {
      index = i
      break
    }
  }

  if (index == 0) {
    minIndex = 0
    maxIndex = 1
    return Math.abs((num - 0) / (arr[maxIndex] - arr[minIndex])) + index
  } else if (index == arr.length - 1) {
    minIndex = arr.length - 2
    maxIndex = arr.length - 1
  } else {
    minIndex = index - 1
    maxIndex = index
  }
  let min = arr[minIndex]
  let max = arr[maxIndex]
  let radio = Math.abs((num - min) / (max - min)) + index
  return radio
}

const setImages = function (table, worksheet, workbook) {
  let {
    images,
    visibledatacolumn, //所有行的位置
    visibledatarow //所有列的位置
  } = { ...table }
  if (typeof images != 'object') return
  for (let key in images) {
    // 通过 base64  将图像添加到工作簿
    const myBase64Image = images[key].src
    //开始行 开始列 结束行 结束列
    const item = images[key]
    const imageId = workbook.addImage({
      base64: myBase64Image,
      extension: 'png'
    })

    const col_st = getImagePosition(item.default.left, visibledatacolumn)
    const row_st = getImagePosition(item.default.top, visibledatarow)

    //模式1，图片左侧与luckysheet位置一样，像素比例保持不变，但是，右侧位置可能与原图所在单元格不一致
    worksheet.addImage(imageId, {
      tl: { col: col_st, row: row_st },
      ext: { width: item.default.width, height: item.default.height }
    })
    //模式2,图片四个角位置没有变动，但是图片像素比例可能和原图不一样
    // const w_ed = item.default.left+item.default.width;
    // const h_ed = item.default.top+item.default.height;
    // const col_ed = getImagePosition(w_ed,visibledatacolumn);
    // const row_ed = getImagePosition(h_ed,visibledatarow);
    // worksheet.addImage(imageId, {
    //   tl: { col: col_st, row: row_st},
    //   br: { col: col_ed, row: row_ed},
    // });
  }
}

const setBorder = function (lucksheetfile, worksheet) {
  if (!lucksheetfile) return
  const luckyToExcel = {
    style: {
      0: 'none',
      1: 'thin',
      2: 'hair',
      3: 'dotted',
      4: 'dashDot', // 'Dashed',
      5: 'dashDot',
      6: 'dashDotDot',
      7: 'double',
      8: 'medium',
      9: 'mediumDashed',
      10: 'mediumDashDot',
      11: 'mediumDashDotDot',
      12: 'slantDashDot',
      13: 'thick'
    }
  }
  //获取所有的单元格边框的信息
  const borderInfoCompute = getBorderInfo(lucksheetfile)
  for (let x in borderInfoCompute) {
    let border = {}
    let info = borderInfoCompute[x]
    let row = parseInt(x.substr(0, x.indexOf('_')))
    let column = parseInt(x.substr(x.indexOf('_') + 1))
    if (info.t != undefined) {
      const tcolor = info.t.color.indexOf('rgb') > -1 ? rgb2hex(info.t.color) : info.t.color
      border['top'] = {
        style: luckyToExcel.style[info.t.style],
        color: { argb: tcolor.replace('#', '') }
      }
    }
    if (info.r != undefined) {
      const rcolor = info.r.color.indexOf('rgb') > -1 ? rgb2hex(info.r.color) : info.r.color
      border['right'] = {
        style: luckyToExcel.style[info.r.style],
        color: { argb: rcolor.replace('#', '') }
      }
    }
    if (info.b != undefined) {
      const bcolor = info.b.color.indexOf('rgb') > -1 ? rgb2hex(info.b.color) : info.b.color
      border['bottom'] = {
        style: luckyToExcel.style[info.b.style],
        color: { argb: bcolor.replace('#', '') }
      }
    }
    if (info.l != undefined) {
      const lcolor = info.l.color.indexOf('rgb') > -1 ? rgb2hex(info.l.color) : info.l.color
      border['left'] = {
        style: luckyToExcel.style[info.l.style],
        color: { argb: lcolor.replace('#', '') }
      }
    }
    worksheet.getCell(row + 1, column + 1).border = border
  }
}

const getBorderInfo = function (luckysheetfile) {
  let borderInfoCompute = {}
  let cfg = luckysheetfile.config
  let data = luckysheetfile.data
  let borderInfo = cfg['borderInfo']
  //设置需要计算边框的区域
  let dataset_row_st = 0,
    dataset_row_ed = data.length,
    dataset_col_st = 0,
    dataset_col_ed = data[0].length
  if (borderInfo != null && borderInfo.length > 0) {
    for (let i = 0; i < borderInfo.length; i++) {
      let rangeType = borderInfo[i].rangeType

      if (rangeType == 'range') {
        let borderType = borderInfo[i].borderType
        let borderColor = borderInfo[i].color
        let borderStyle = borderInfo[i].style

        let borderRange = borderInfo[i].range

        for (let j = 0; j < borderRange.length; j++) {
          let bd_r1 = borderRange[j].row[0],
            bd_r2 = borderRange[j].row[1]
          let bd_c1 = borderRange[j].column[0],
            bd_c2 = borderRange[j].column[1]

          if (bd_r1 < dataset_row_st) {
            bd_r1 = dataset_row_st
          }

          if (bd_r2 > dataset_row_ed) {
            bd_r2 = dataset_row_ed
          }

          if (bd_c1 < dataset_col_st) {
            bd_c1 = dataset_col_st
          }

          if (bd_c2 > dataset_col_ed) {
            bd_c2 = dataset_col_ed
          }

          if (borderType == 'border-left') {
            for (let bd_r = bd_r1; bd_r <= bd_r2; bd_r++) {
              if (cfg['rowhidden'] != null && cfg['rowhidden'][bd_r] != null) {
                continue
              }

              if (borderInfoCompute[bd_r + '_' + bd_c1] == null) {
                borderInfoCompute[bd_r + '_' + bd_c1] = {}
              }

              borderInfoCompute[bd_r + '_' + bd_c1].l = { color: borderColor, style: borderStyle }

              let bd_c_left = bd_c1 - 1

              if (bd_c_left >= 0 && borderInfoCompute[bd_r + '_' + bd_c_left]) {
                if (
                  data[bd_r] != null &&
                  getObjType(data[bd_r][bd_c_left]) == 'object' &&
                  data[bd_r][bd_c_left].mc != null
                ) {
                  let cell_left = data[bd_r][bd_c_left]

                  let mc = cfg['merge'][cell_left.mc.r + '_' + cell_left.mc.c]

                  if (mc.c + mc.cs - 1 == bd_c_left) {
                    borderInfoCompute[bd_r + '_' + bd_c_left].r = {
                      color: borderColor,
                      style: borderStyle
                    }
                  }
                } else {
                  borderInfoCompute[bd_r + '_' + bd_c_left].r = {
                    color: borderColor,
                    style: borderStyle
                  }
                }
              }

              let mc = cfg['merge'] || {}
              for (const key in mc) {
                let { c, r, cs, rs } = mc[key]
                if (bd_c1 <= c + cs - 1 && bd_c1 > c && bd_r >= r && bd_r <= r + rs - 1) {
                  borderInfoCompute[bd_r + '_' + bd_c1].l = null
                }
              }
            }
          } else if (borderType == 'border-right') {
            for (let bd_r = bd_r1; bd_r <= bd_r2; bd_r++) {
              if (cfg['rowhidden'] != null && cfg['rowhidden'][bd_r] != null) {
                continue
              }

              if (borderInfoCompute[bd_r + '_' + bd_c2] == null) {
                borderInfoCompute[bd_r + '_' + bd_c2] = {}
              }

              borderInfoCompute[bd_r + '_' + bd_c2].r = { color: borderColor, style: borderStyle }

              let bd_c_right = bd_c2 + 1

              if (bd_c_right < data[0].length && borderInfoCompute[bd_r + '_' + bd_c_right]) {
                if (
                  data[bd_r] != null &&
                  getObjType(data[bd_r][bd_c_right]) == 'object' &&
                  data[bd_r][bd_c_right].mc != null
                ) {
                  let cell_right = data[bd_r][bd_c_right]

                  let mc = cfg['merge'][cell_right.mc.r + '_' + cell_right.mc.c]

                  if (mc.c == bd_c_right) {
                    borderInfoCompute[bd_r + '_' + bd_c_right].l = {
                      color: borderColor,
                      style: borderStyle
                    }
                  }
                } else {
                  borderInfoCompute[bd_r + '_' + bd_c_right].l = {
                    color: borderColor,
                    style: borderStyle
                  }
                }
              }
              let mc = cfg['merge'] || {}
              for (const key in mc) {
                let { c, r, cs, rs } = mc[key]
                if (bd_c2 < c + cs - 1 && bd_c2 >= c && bd_r >= r && bd_r <= r + rs - 1) {
                  borderInfoCompute[bd_r + '_' + bd_c2].r = null
                }
              }
            }
          } else if (borderType == 'border-top') {
            if (cfg['rowhidden'] != null && cfg['rowhidden'][bd_r1] != null) {
              continue
            }

            for (let bd_c = bd_c1; bd_c <= bd_c2; bd_c++) {
              if (borderInfoCompute[bd_r1 + '_' + bd_c] == null) {
                borderInfoCompute[bd_r1 + '_' + bd_c] = {}
              }

              borderInfoCompute[bd_r1 + '_' + bd_c].t = { color: borderColor, style: borderStyle }

              let bd_r_top = bd_r1 - 1

              if (bd_r_top >= 0 && borderInfoCompute[bd_r_top + '_' + bd_c]) {
                if (
                  data[bd_r_top] != null &&
                  getObjType(data[bd_r_top][bd_c]) == 'object' &&
                  data[bd_r_top][bd_c].mc != null
                ) {
                  let cell_top = data[bd_r_top][bd_c]

                  let mc = cfg['merge'][cell_top.mc.r + '_' + cell_top.mc.c]

                  if (mc.r + mc.rs - 1 == bd_r_top) {
                    borderInfoCompute[bd_r_top + '_' + bd_c].b = {
                      color: borderColor,
                      style: borderStyle
                    }
                  }
                } else {
                  borderInfoCompute[bd_r_top + '_' + bd_c].b = {
                    color: borderColor,
                    style: borderStyle
                  }
                }
              }

              let mc = cfg['merge'] || {}
              for (const key in mc) {
                let { c, r, cs, rs } = mc[key]
                if (bd_r1 <= r + rs - 1 && bd_r1 > r && bd_c >= c && bd_c <= c + cs - 1) {
                  borderInfoCompute[bd_r1 + '_' + bd_c].t = null
                }
              }
            }
          } else if (borderType == 'border-bottom') {
            if (cfg['rowhidden'] != null && cfg['rowhidden'][bd_r2] != null) {
              continue
            }

            for (let bd_c = bd_c1; bd_c <= bd_c2; bd_c++) {
              if (borderInfoCompute[bd_r2 + '_' + bd_c] == null) {
                borderInfoCompute[bd_r2 + '_' + bd_c] = {}
              }

              borderInfoCompute[bd_r2 + '_' + bd_c].b = { color: borderColor, style: borderStyle }

              let bd_r_bottom = bd_r2 + 1

              if (bd_r_bottom < data.length && borderInfoCompute[bd_r_bottom + '_' + bd_c]) {
                if (
                  data[bd_r_bottom] != null &&
                  getObjType(data[bd_r_bottom][bd_c]) == 'object' &&
                  data[bd_r_bottom][bd_c].mc != null
                ) {
                  let cell_bottom = data[bd_r_bottom][bd_c]

                  let mc = cfg['merge'][cell_bottom.mc.r + '_' + cell_bottom.mc.c]

                  if (mc.r == bd_r_bottom) {
                    borderInfoCompute[bd_r_bottom + '_' + bd_c].t = {
                      color: borderColor,
                      style: borderStyle
                    }
                  }
                } else {
                  borderInfoCompute[bd_r_bottom + '_' + bd_c].t = {
                    color: borderColor,
                    style: borderStyle
                  }
                }
              }

              let mc = cfg['merge'] || {}
              for (const key in mc) {
                let { c, r, cs, rs } = mc[key]
                if (bd_r2 < r + rs - 1 && bd_r2 >= r && bd_c >= c && bd_c <= c + cs - 1) {
                  borderInfoCompute[bd_r2 + '_' + bd_c].b = null
                }
              }
            }
          } else if (borderType == 'border-all') {
            for (let bd_r = bd_r1; bd_r <= bd_r2; bd_r++) {
              if (cfg['rowhidden'] != null && cfg['rowhidden'][bd_r] != null) {
                continue
              }

              for (let bd_c = bd_c1; bd_c <= bd_c2; bd_c++) {
                if (
                  data[bd_r] != null &&
                  getObjType(data[bd_r][bd_c]) == 'object' &&
                  data[bd_r][bd_c].mc != null
                ) {
                  let cell = data[bd_r][bd_c]

                  let mc = cfg['merge'][cell.mc.r + '_' + cell.mc.c]
                  if (mc == undefined || mc == null) {
                    continue
                  }
                  if (mc.r == bd_r) {
                    if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                      borderInfoCompute[bd_r + '_' + bd_c] = {}
                    }

                    borderInfoCompute[bd_r + '_' + bd_c].t = {
                      color: borderColor,
                      style: borderStyle
                    }
                  }

                  if (mc.r + mc.rs - 1 == bd_r) {
                    if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                      borderInfoCompute[bd_r + '_' + bd_c] = {}
                    }

                    borderInfoCompute[bd_r + '_' + bd_c].b = {
                      color: borderColor,
                      style: borderStyle
                    }
                  }

                  if (mc.c == bd_c) {
                    if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                      borderInfoCompute[bd_r + '_' + bd_c] = {}
                    }

                    borderInfoCompute[bd_r + '_' + bd_c].l = {
                      color: borderColor,
                      style: borderStyle
                    }
                  }

                  if (mc.c + mc.cs - 1 == bd_c) {
                    if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                      borderInfoCompute[bd_r + '_' + bd_c] = {}
                    }

                    borderInfoCompute[bd_r + '_' + bd_c].r = {
                      color: borderColor,
                      style: borderStyle
                    }
                  }
                } else {
                  if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                    borderInfoCompute[bd_r + '_' + bd_c] = {}
                  }

                  borderInfoCompute[bd_r + '_' + bd_c].l = {
                    color: borderColor,
                    style: borderStyle
                  }
                  borderInfoCompute[bd_r + '_' + bd_c].r = {
                    color: borderColor,
                    style: borderStyle
                  }
                  borderInfoCompute[bd_r + '_' + bd_c].t = {
                    color: borderColor,
                    style: borderStyle
                  }
                  borderInfoCompute[bd_r + '_' + bd_c].b = {
                    color: borderColor,
                    style: borderStyle
                  }
                }

                if (bd_r == bd_r1) {
                  let bd_r_top = bd_r1 - 1

                  if (bd_r_top >= 0 && borderInfoCompute[bd_r_top + '_' + bd_c]) {
                    if (
                      data[bd_r_top] != null &&
                      getObjType(data[bd_r_top][bd_c]) == 'object' &&
                      data[bd_r_top][bd_c].mc != null
                    ) {
                      let cell_top = data[bd_r_top][bd_c]

                      let mc = cfg['merge'][cell_top.mc.r + '_' + cell_top.mc.c]

                      if (mc.r + mc.rs - 1 == bd_r_top) {
                        borderInfoCompute[bd_r_top + '_' + bd_c].b = {
                          color: borderColor,
                          style: borderStyle
                        }
                      }
                    } else {
                      borderInfoCompute[bd_r_top + '_' + bd_c].b = {
                        color: borderColor,
                        style: borderStyle
                      }
                    }
                  }
                }

                if (bd_r == bd_r2) {
                  let bd_r_bottom = bd_r2 + 1

                  if (bd_r_bottom < data.length && borderInfoCompute[bd_r_bottom + '_' + bd_c]) {
                    if (
                      data[bd_r_bottom] != null &&
                      getObjType(data[bd_r_bottom][bd_c]) == 'object' &&
                      data[bd_r_bottom][bd_c].mc != null
                    ) {
                      let cell_bottom = data[bd_r_bottom][bd_c]

                      let mc = cfg['merge'][cell_bottom.mc.r + '_' + cell_bottom.mc.c]

                      if (mc.r == bd_r_bottom) {
                        borderInfoCompute[bd_r_bottom + '_' + bd_c].t = {
                          color: borderColor,
                          style: borderStyle
                        }
                      }
                    } else {
                      borderInfoCompute[bd_r_bottom + '_' + bd_c].t = {
                        color: borderColor,
                        style: borderStyle
                      }
                    }
                  }
                }

                if (bd_c == bd_c1) {
                  let bd_c_left = bd_c1 - 1

                  if (bd_c_left >= 0 && borderInfoCompute[bd_r + '_' + bd_c_left]) {
                    if (
                      data[bd_r] != null &&
                      getObjType(data[bd_r][bd_c_left]) == 'object' &&
                      data[bd_r][bd_c_left].mc != null
                    ) {
                      let cell_left = data[bd_r][bd_c_left]

                      let mc = cfg['merge'][cell_left.mc.r + '_' + cell_left.mc.c]

                      if (mc.c + mc.cs - 1 == bd_c_left) {
                        borderInfoCompute[bd_r + '_' + bd_c_left].r = {
                          color: borderColor,
                          style: borderStyle
                        }
                      }
                    } else {
                      borderInfoCompute[bd_r + '_' + bd_c_left].r = {
                        color: borderColor,
                        style: borderStyle
                      }
                    }
                  }
                }

                if (bd_c == bd_c2) {
                  let bd_c_right = bd_c2 + 1

                  if (bd_c_right < data[0].length && borderInfoCompute[bd_r + '_' + bd_c_right]) {
                    if (
                      data[bd_r] != null &&
                      getObjType(data[bd_r][bd_c_right]) == 'object' &&
                      data[bd_r][bd_c_right].mc != null
                    ) {
                      let cell_right = data[bd_r][bd_c_right]

                      let mc = cfg['merge'][cell_right.mc.r + '_' + cell_right.mc.c]

                      if (mc.c == bd_c_right) {
                        borderInfoCompute[bd_r + '_' + bd_c_right].l = {
                          color: borderColor,
                          style: borderStyle
                        }
                      }
                    } else {
                      borderInfoCompute[bd_r + '_' + bd_c_right].l = {
                        color: borderColor,
                        style: borderStyle
                      }
                    }
                  }
                }
              }
            }
          } else if (borderType == 'border-outside') {
            for (let bd_r = bd_r1; bd_r <= bd_r2; bd_r++) {
              if (cfg['rowhidden'] != null && cfg['rowhidden'][bd_r] != null) {
                continue
              }

              for (let bd_c = bd_c1; bd_c <= bd_c2; bd_c++) {
                if (!(bd_r == bd_r1 || bd_r == bd_r2 || bd_c == bd_c1 || bd_c == bd_c2)) {
                  continue
                }

                if (bd_r == bd_r1) {
                  if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                    borderInfoCompute[bd_r + '_' + bd_c] = {}
                  }

                  borderInfoCompute[bd_r + '_' + bd_c].t = {
                    color: borderColor,
                    style: borderStyle
                  }

                  let bd_r_top = bd_r1 - 1

                  if (bd_r_top >= 0 && borderInfoCompute[bd_r_top + '_' + bd_c]) {
                    if (
                      data[bd_r_top] != null &&
                      getObjType(data[bd_r_top][bd_c]) == 'object' &&
                      data[bd_r_top][bd_c].mc != null
                    ) {
                      let cell_top = data[bd_r_top][bd_c]

                      let mc = cfg['merge'][cell_top.mc.r + '_' + cell_top.mc.c]

                      if (mc.r + mc.rs - 1 == bd_r_top) {
                        borderInfoCompute[bd_r_top + '_' + bd_c].b = {
                          color: borderColor,
                          style: borderStyle
                        }
                      }
                    } else {
                      borderInfoCompute[bd_r_top + '_' + bd_c].b = {
                        color: borderColor,
                        style: borderStyle
                      }
                    }
                  }
                }

                if (bd_r == bd_r2) {
                  if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                    borderInfoCompute[bd_r + '_' + bd_c] = {}
                  }

                  borderInfoCompute[bd_r + '_' + bd_c].b = {
                    color: borderColor,
                    style: borderStyle
                  }

                  let bd_r_bottom = bd_r2 + 1

                  if (bd_r_bottom < data.length && borderInfoCompute[bd_r_bottom + '_' + bd_c]) {
                    if (
                      data[bd_r_bottom] != null &&
                      getObjType(data[bd_r_bottom][bd_c]) == 'object' &&
                      data[bd_r_bottom][bd_c].mc != null
                    ) {
                      let cell_bottom = data[bd_r_bottom][bd_c]

                      let mc = cfg['merge'][cell_bottom.mc.r + '_' + cell_bottom.mc.c]

                      if (mc.r == bd_r_bottom) {
                        borderInfoCompute[bd_r_bottom + '_' + bd_c].t = {
                          color: borderColor,
                          style: borderStyle
                        }
                      }
                    } else {
                      borderInfoCompute[bd_r_bottom + '_' + bd_c].t = {
                        color: borderColor,
                        style: borderStyle
                      }
                    }
                  }
                }

                if (bd_c == bd_c1) {
                  if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                    borderInfoCompute[bd_r + '_' + bd_c] = {}
                  }

                  borderInfoCompute[bd_r + '_' + bd_c].l = {
                    color: borderColor,
                    style: borderStyle
                  }

                  let bd_c_left = bd_c1 - 1

                  if (bd_c_left >= 0 && borderInfoCompute[bd_r + '_' + bd_c_left]) {
                    if (
                      data[bd_r] != null &&
                      getObjType(data[bd_r][bd_c_left]) == 'object' &&
                      data[bd_r][bd_c_left].mc != null
                    ) {
                      let cell_left = data[bd_r][bd_c_left]

                      let mc = cfg['merge'][cell_left.mc.r + '_' + cell_left.mc.c]

                      if (mc.c + mc.cs - 1 == bd_c_left) {
                        borderInfoCompute[bd_r + '_' + bd_c_left].r = {
                          color: borderColor,
                          style: borderStyle
                        }
                      }
                    } else {
                      borderInfoCompute[bd_r + '_' + bd_c_left].r = {
                        color: borderColor,
                        style: borderStyle
                      }
                    }
                  }
                }

                if (bd_c == bd_c2) {
                  if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                    borderInfoCompute[bd_r + '_' + bd_c] = {}
                  }

                  borderInfoCompute[bd_r + '_' + bd_c].r = {
                    color: borderColor,
                    style: borderStyle
                  }

                  let bd_c_right = bd_c2 + 1

                  if (bd_c_right < data[0].length && borderInfoCompute[bd_r + '_' + bd_c_right]) {
                    if (
                      data[bd_r] != null &&
                      getObjType(data[bd_r][bd_c_right]) == 'object' &&
                      data[bd_r][bd_c_right].mc != null
                    ) {
                      let cell_right = data[bd_r][bd_c_right]

                      let mc = cfg['merge'][cell_right.mc.r + '_' + cell_right.mc.c]

                      if (mc.c == bd_c_right) {
                        borderInfoCompute[bd_r + '_' + bd_c_right].l = {
                          color: borderColor,
                          style: borderStyle
                        }
                      }
                    } else {
                      borderInfoCompute[bd_r + '_' + bd_c_right].l = {
                        color: borderColor,
                        style: borderStyle
                      }
                    }
                  }
                }
              }
            }
          } else if (borderType == 'border-inside') {
            for (let bd_r = bd_r1; bd_r <= bd_r2; bd_r++) {
              if (cfg['rowhidden'] != null && cfg['rowhidden'][bd_r] != null) {
                continue
              }

              for (let bd_c = bd_c1; bd_c <= bd_c2; bd_c++) {
                if (bd_r == bd_r1 && bd_c == bd_c1) {
                  if (
                    data[bd_r] != null &&
                    getObjType(data[bd_r][bd_c]) == 'object' &&
                    data[bd_r][bd_c].mc != null
                  ) {
                  } else {
                    if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                      borderInfoCompute[bd_r + '_' + bd_c] = {}
                    }

                    borderInfoCompute[bd_r + '_' + bd_c].r = {
                      color: borderColor,
                      style: borderStyle
                    }
                    borderInfoCompute[bd_r + '_' + bd_c].b = {
                      color: borderColor,
                      style: borderStyle
                    }
                  }
                } else if (bd_r == bd_r2 && bd_c == bd_c1) {
                  if (
                    data[bd_r] != null &&
                    getObjType(data[bd_r][bd_c]) == 'object' &&
                    data[bd_r][bd_c].mc != null
                  ) {
                  } else {
                    if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                      borderInfoCompute[bd_r + '_' + bd_c] = {}
                    }

                    borderInfoCompute[bd_r + '_' + bd_c].r = {
                      color: borderColor,
                      style: borderStyle
                    }
                    borderInfoCompute[bd_r + '_' + bd_c].t = {
                      color: borderColor,
                      style: borderStyle
                    }
                  }
                } else if (bd_r == bd_r1 && bd_c == bd_c2) {
                  if (
                    data[bd_r] != null &&
                    getObjType(data[bd_r][bd_c]) == 'object' &&
                    data[bd_r][bd_c].mc != null
                  ) {
                  } else {
                    if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                      borderInfoCompute[bd_r + '_' + bd_c] = {}
                    }

                    borderInfoCompute[bd_r + '_' + bd_c].l = {
                      color: borderColor,
                      style: borderStyle
                    }
                    borderInfoCompute[bd_r + '_' + bd_c].b = {
                      color: borderColor,
                      style: borderStyle
                    }
                  }
                } else if (bd_r == bd_r2 && bd_c == bd_c2) {
                  if (
                    data[bd_r] != null &&
                    getObjType(data[bd_r][bd_c]) == 'object' &&
                    data[bd_r][bd_c].mc != null
                  ) {
                  } else {
                    if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                      borderInfoCompute[bd_r + '_' + bd_c] = {}
                    }

                    borderInfoCompute[bd_r + '_' + bd_c].l = {
                      color: borderColor,
                      style: borderStyle
                    }
                    borderInfoCompute[bd_r + '_' + bd_c].t = {
                      color: borderColor,
                      style: borderStyle
                    }
                  }
                } else if (bd_r == bd_r1) {
                  if (
                    data[bd_r] != null &&
                    getObjType(data[bd_r][bd_c]) == 'object' &&
                    data[bd_r][bd_c].mc != null
                  ) {
                    let cell = data[bd_r][bd_c]

                    let mc = cfg['merge'][cell.mc.r + '_' + cell.mc.c]

                    if (mc.c == bd_c) {
                      if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                        borderInfoCompute[bd_r + '_' + bd_c] = {}
                      }

                      borderInfoCompute[bd_r + '_' + bd_c].l = {
                        color: borderColor,
                        style: borderStyle
                      }
                    } else if (mc.c + mc.cs - 1 == bd_c) {
                      if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                        borderInfoCompute[bd_r + '_' + bd_c] = {}
                      }

                      borderInfoCompute[bd_r + '_' + bd_c].r = {
                        color: borderColor,
                        style: borderStyle
                      }
                    }
                  } else {
                    if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                      borderInfoCompute[bd_r + '_' + bd_c] = {}
                    }

                    borderInfoCompute[bd_r + '_' + bd_c].l = {
                      color: borderColor,
                      style: borderStyle
                    }
                    borderInfoCompute[bd_r + '_' + bd_c].r = {
                      color: borderColor,
                      style: borderStyle
                    }
                    borderInfoCompute[bd_r + '_' + bd_c].b = {
                      color: borderColor,
                      style: borderStyle
                    }
                  }
                } else if (bd_r == bd_r2) {
                  if (
                    data[bd_r] != null &&
                    getObjType(data[bd_r][bd_c]) == 'object' &&
                    data[bd_r][bd_c].mc != null
                  ) {
                    let cell = data[bd_r][bd_c]

                    let mc = cfg['merge'][cell.mc.r + '_' + cell.mc.c]

                    if (mc.c == bd_c) {
                      if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                        borderInfoCompute[bd_r + '_' + bd_c] = {}
                      }

                      borderInfoCompute[bd_r + '_' + bd_c].l = {
                        color: borderColor,
                        style: borderStyle
                      }
                    } else if (mc.c + mc.cs - 1 == bd_c) {
                      if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                        borderInfoCompute[bd_r + '_' + bd_c] = {}
                      }

                      borderInfoCompute[bd_r + '_' + bd_c].r = {
                        color: borderColor,
                        style: borderStyle
                      }
                    }
                  } else {
                    if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                      borderInfoCompute[bd_r + '_' + bd_c] = {}
                    }

                    borderInfoCompute[bd_r + '_' + bd_c].l = {
                      color: borderColor,
                      style: borderStyle
                    }
                    borderInfoCompute[bd_r + '_' + bd_c].r = {
                      color: borderColor,
                      style: borderStyle
                    }
                    borderInfoCompute[bd_r + '_' + bd_c].t = {
                      color: borderColor,
                      style: borderStyle
                    }
                  }
                } else if (bd_c == bd_c1) {
                  if (
                    data[bd_r] != null &&
                    getObjType(data[bd_r][bd_c]) == 'object' &&
                    data[bd_r][bd_c].mc != null
                  ) {
                    let cell = data[bd_r][bd_c]

                    let mc = cfg['merge'][cell.mc.r + '_' + cell.mc.c]

                    if (mc.r == bd_r) {
                      if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                        borderInfoCompute[bd_r + '_' + bd_c] = {}
                      }

                      borderInfoCompute[bd_r + '_' + bd_c].t = {
                        color: borderColor,
                        style: borderStyle
                      }
                    } else if (mc.r + mc.rs - 1 == bd_r) {
                      if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                        borderInfoCompute[bd_r + '_' + bd_c] = {}
                      }

                      borderInfoCompute[bd_r + '_' + bd_c].b = {
                        color: borderColor,
                        style: borderStyle
                      }
                    }
                  } else {
                    if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                      borderInfoCompute[bd_r + '_' + bd_c] = {}
                    }

                    borderInfoCompute[bd_r + '_' + bd_c].r = {
                      color: borderColor,
                      style: borderStyle
                    }
                    borderInfoCompute[bd_r + '_' + bd_c].t = {
                      color: borderColor,
                      style: borderStyle
                    }
                    borderInfoCompute[bd_r + '_' + bd_c].b = {
                      color: borderColor,
                      style: borderStyle
                    }
                  }
                } else if (bd_c == bd_c2) {
                  if (
                    data[bd_r] != null &&
                    getObjType(data[bd_r][bd_c]) == 'object' &&
                    data[bd_r][bd_c].mc != null
                  ) {
                    let cell = data[bd_r][bd_c]

                    let mc = cfg['merge'][cell.mc.r + '_' + cell.mc.c]

                    if (mc.r == bd_r) {
                      if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                        borderInfoCompute[bd_r + '_' + bd_c] = {}
                      }

                      borderInfoCompute[bd_r + '_' + bd_c].t = {
                        color: borderColor,
                        style: borderStyle
                      }
                    } else if (mc.r + mc.rs - 1 == bd_r) {
                      if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                        borderInfoCompute[bd_r + '_' + bd_c] = {}
                      }

                      borderInfoCompute[bd_r + '_' + bd_c].b = {
                        color: borderColor,
                        style: borderStyle
                      }
                    }
                  } else {
                    if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                      borderInfoCompute[bd_r + '_' + bd_c] = {}
                    }

                    borderInfoCompute[bd_r + '_' + bd_c].l = {
                      color: borderColor,
                      style: borderStyle
                    }
                    borderInfoCompute[bd_r + '_' + bd_c].t = {
                      color: borderColor,
                      style: borderStyle
                    }
                    borderInfoCompute[bd_r + '_' + bd_c].b = {
                      color: borderColor,
                      style: borderStyle
                    }
                  }
                } else {
                  if (
                    data[bd_r] != null &&
                    getObjType(data[bd_r][bd_c]) == 'object' &&
                    data[bd_r][bd_c].mc != null
                  ) {
                    let cell = data[bd_r][bd_c]

                    let mc = cfg['merge'][cell.mc.r + '_' + cell.mc.c]

                    if (mc.r == bd_r) {
                      if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                        borderInfoCompute[bd_r + '_' + bd_c] = {}
                      }

                      borderInfoCompute[bd_r + '_' + bd_c].t = {
                        color: borderColor,
                        style: borderStyle
                      }
                    } else if (mc.r + mc.rs - 1 == bd_r) {
                      if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                        borderInfoCompute[bd_r + '_' + bd_c] = {}
                      }

                      borderInfoCompute[bd_r + '_' + bd_c].b = {
                        color: borderColor,
                        style: borderStyle
                      }
                    }

                    if (mc.c == bd_c) {
                      if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                        borderInfoCompute[bd_r + '_' + bd_c] = {}
                      }

                      borderInfoCompute[bd_r + '_' + bd_c].l = {
                        color: borderColor,
                        style: borderStyle
                      }
                    } else if (mc.c + mc.cs - 1 == bd_c) {
                      if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                        borderInfoCompute[bd_r + '_' + bd_c] = {}
                      }

                      borderInfoCompute[bd_r + '_' + bd_c].r = {
                        color: borderColor,
                        style: borderStyle
                      }
                    }
                  } else {
                    if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                      borderInfoCompute[bd_r + '_' + bd_c] = {}
                    }

                    borderInfoCompute[bd_r + '_' + bd_c].l = {
                      color: borderColor,
                      style: borderStyle
                    }
                    borderInfoCompute[bd_r + '_' + bd_c].r = {
                      color: borderColor,
                      style: borderStyle
                    }
                    borderInfoCompute[bd_r + '_' + bd_c].t = {
                      color: borderColor,
                      style: borderStyle
                    }
                    borderInfoCompute[bd_r + '_' + bd_c].b = {
                      color: borderColor,
                      style: borderStyle
                    }
                  }
                }
              }
            }
          } else if (borderType == 'border-horizontal') {
            for (let bd_r = bd_r1; bd_r <= bd_r2; bd_r++) {
              if (cfg['rowhidden'] != null && cfg['rowhidden'][bd_r] != null) {
                continue
              }

              for (let bd_c = bd_c1; bd_c <= bd_c2; bd_c++) {
                if (bd_r == bd_r1) {
                  if (
                    data[bd_r] != null &&
                    getObjType(data[bd_r][bd_c]) == 'object' &&
                    data[bd_r][bd_c].mc != null
                  ) {
                  } else {
                    if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                      borderInfoCompute[bd_r + '_' + bd_c] = {}
                    }

                    borderInfoCompute[bd_r + '_' + bd_c].b = {
                      color: borderColor,
                      style: borderStyle
                    }
                  }
                } else if (bd_r == bd_r2) {
                  if (
                    data[bd_r] != null &&
                    getObjType(data[bd_r][bd_c]) == 'object' &&
                    data[bd_r][bd_c].mc != null
                  ) {
                  } else {
                    if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                      borderInfoCompute[bd_r + '_' + bd_c] = {}
                    }

                    borderInfoCompute[bd_r + '_' + bd_c].t = {
                      color: borderColor,
                      style: borderStyle
                    }
                  }
                } else {
                  if (
                    data[bd_r] != null &&
                    getObjType(data[bd_r][bd_c]) == 'object' &&
                    data[bd_r][bd_c].mc != null
                  ) {
                    let cell = data[bd_r][bd_c]

                    let mc = cfg['merge'][cell.mc.r + '_' + cell.mc.c]

                    if (mc.r == bd_r) {
                      if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                        borderInfoCompute[bd_r + '_' + bd_c] = {}
                      }

                      borderInfoCompute[bd_r + '_' + bd_c].t = {
                        color: borderColor,
                        style: borderStyle
                      }
                    } else if (mc.r + mc.rs - 1 == bd_r) {
                      if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                        borderInfoCompute[bd_r + '_' + bd_c] = {}
                      }

                      borderInfoCompute[bd_r + '_' + bd_c].b = {
                        color: borderColor,
                        style: borderStyle
                      }
                    }
                  } else {
                    if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                      borderInfoCompute[bd_r + '_' + bd_c] = {}
                    }

                    borderInfoCompute[bd_r + '_' + bd_c].t = {
                      color: borderColor,
                      style: borderStyle
                    }
                    borderInfoCompute[bd_r + '_' + bd_c].b = {
                      color: borderColor,
                      style: borderStyle
                    }
                  }
                }
              }
            }
          } else if (borderType == 'border-vertical') {
            for (let bd_r = bd_r1; bd_r <= bd_r2; bd_r++) {
              if (cfg['rowhidden'] != null && cfg['rowhidden'][bd_r] != null) {
                continue
              }

              for (let bd_c = bd_c1; bd_c <= bd_c2; bd_c++) {
                if (bd_c == bd_c1) {
                  if (
                    data[bd_r] != null &&
                    getObjType(data[bd_r][bd_c]) == 'object' &&
                    data[bd_r][bd_c].mc != null
                  ) {
                  } else {
                    if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                      borderInfoCompute[bd_r + '_' + bd_c] = {}
                    }

                    borderInfoCompute[bd_r + '_' + bd_c].r = {
                      color: borderColor,
                      style: borderStyle
                    }
                  }
                } else if (bd_c == bd_c2) {
                  if (
                    data[bd_r] != null &&
                    getObjType(data[bd_r][bd_c]) == 'object' &&
                    data[bd_r][bd_c].mc != null
                  ) {
                  } else {
                    if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                      borderInfoCompute[bd_r + '_' + bd_c] = {}
                    }

                    borderInfoCompute[bd_r + '_' + bd_c].l = {
                      color: borderColor,
                      style: borderStyle
                    }
                  }
                } else {
                  if (
                    data[bd_r] != null &&
                    getObjType(data[bd_r][bd_c]) == 'object' &&
                    data[bd_r][bd_c].mc != null
                  ) {
                    let cell = data[bd_r][bd_c]

                    let mc = cfg['merge'][cell.mc.r + '_' + cell.mc.c] || {}

                    if (mc.c == bd_c) {
                      if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                        borderInfoCompute[bd_r + '_' + bd_c] = {}
                      }

                      borderInfoCompute[bd_r + '_' + bd_c].l = {
                        color: borderColor,
                        style: borderStyle
                      }
                    } else if (mc.c + mc.cs - 1 == bd_c) {
                      if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                        borderInfoCompute[bd_r + '_' + bd_c] = {}
                      }

                      borderInfoCompute[bd_r + '_' + bd_c].r = {
                        color: borderColor,
                        style: borderStyle
                      }
                    }
                  } else {
                    if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
                      borderInfoCompute[bd_r + '_' + bd_c] = {}
                    }

                    borderInfoCompute[bd_r + '_' + bd_c].l = {
                      color: borderColor,
                      style: borderStyle
                    }
                    borderInfoCompute[bd_r + '_' + bd_c].r = {
                      color: borderColor,
                      style: borderStyle
                    }
                  }
                }
              }
            }
          } else if (borderType == 'border-none') {
            for (let bd_r = bd_r1; bd_r <= bd_r2; bd_r++) {
              if (cfg['rowhidden'] != null && cfg['rowhidden'][bd_r] != null) {
                continue
              }

              for (let bd_c = bd_c1; bd_c <= bd_c2; bd_c++) {
                if (borderInfoCompute[bd_r + '_' + bd_c] != null) {
                  delete borderInfoCompute[bd_r + '_' + bd_c]
                }

                if (bd_r == bd_r1) {
                  let bd_r_top = bd_r1 - 1

                  if (bd_r_top >= 0 && borderInfoCompute[bd_r_top + '_' + bd_c]) {
                    delete borderInfoCompute[bd_r_top + '_' + bd_c].b
                  }
                }

                if (bd_r == bd_r2) {
                  let bd_r_bottom = bd_r2 + 1

                  if (bd_r_bottom < data.length && borderInfoCompute[bd_r_bottom + '_' + bd_c]) {
                    delete borderInfoCompute[bd_r_bottom + '_' + bd_c].t
                  }
                }

                if (bd_c == bd_c1) {
                  let bd_c_left = bd_c1 - 1

                  if (bd_c_left >= 0 && borderInfoCompute[bd_r + '_' + bd_c_left]) {
                    delete borderInfoCompute[bd_r + '_' + bd_c_left].r
                  }
                }

                if (bd_c == bd_c2) {
                  let bd_c_right = bd_c2 + 1

                  if (bd_c_right < data[0].length && borderInfoCompute[bd_r + '_' + bd_c_right]) {
                    delete borderInfoCompute[bd_r + '_' + bd_c_right].l
                  }
                }
              }
            }
          }
        }
      } else if (rangeType == 'cell') {
        let value = borderInfo[i].value

        let bd_r = value.row_index,
          bd_c = value.col_index

        if (
          bd_r < dataset_row_st ||
          bd_r > dataset_row_ed ||
          bd_c < dataset_col_st ||
          bd_c > dataset_col_ed
        ) {
          continue
        }

        if (cfg['rowhidden'] != null && cfg['rowhidden'][bd_r] != null) {
          continue
        }

        if (value.l != null || value.r != null || value.t != null || value.b != null) {
          if (borderInfoCompute[bd_r + '_' + bd_c] == null) {
            borderInfoCompute[bd_r + '_' + bd_c] = {}
          }

          if (
            data[bd_r] != null &&
            getObjType(data[bd_r][bd_c]) == 'object' &&
            data[bd_r][bd_c].mc != null
          ) {
            let cell = data[bd_r][bd_c]
            let mc = cfg['merge'][cell.mc.r + '_' + cell.mc.c] || {}

            if (value.l != null && bd_c == mc.c) {
              //左边框
              borderInfoCompute[bd_r + '_' + bd_c].l = {
                color: value.l.color,
                style: value.l.style
              }

              let bd_c_left = bd_c - 1

              if (bd_c_left >= 0 && borderInfoCompute[bd_r + '_' + bd_c_left]) {
                if (
                  data[bd_r] != null &&
                  getObjType(data[bd_r][bd_c_left]) == 'object' &&
                  data[bd_r][bd_c_left].mc != null
                ) {
                  let cell_left = data[bd_r][bd_c_left]

                  let mc_l = cfg['merge'][cell_left.mc.r + '_' + cell_left.mc.c]

                  if (mc_l.c + mc_l.cs - 1 == bd_c_left) {
                    borderInfoCompute[bd_r + '_' + bd_c_left].r = {
                      color: value.l.color,
                      style: value.l.style
                    }
                  }
                } else {
                  borderInfoCompute[bd_r + '_' + bd_c_left].r = {
                    color: value.l.color,
                    style: value.l.style
                  }
                }
              }
            } else {
              borderInfoCompute[bd_r + '_' + bd_c].l = null
            }

            if (value.r != null && bd_c == mc.c + mc.cs - 1) {
              //右边框
              borderInfoCompute[bd_r + '_' + bd_c].r = {
                color: value.r.color,
                style: value.r.style
              }

              let bd_c_right = bd_c + 1

              if (bd_c_right < data[0].length && borderInfoCompute[bd_r + '_' + bd_c_right]) {
                if (
                  data[bd_r] != null &&
                  getObjType(data[bd_r][bd_c_right]) == 'object' &&
                  data[bd_r][bd_c_right].mc != null
                ) {
                  let cell_right = data[bd_r][bd_c_right]

                  let mc_r = cfg['merge'][cell_right.mc.r + '_' + cell_right.mc.c]

                  if (mc_r.c == bd_c_right) {
                    borderInfoCompute[bd_r + '_' + bd_c_right].l = {
                      color: value.r.color,
                      style: value.r.style
                    }
                  }
                } else {
                  borderInfoCompute[bd_r + '_' + bd_c_right].l = {
                    color: value.r.color,
                    style: value.r.style
                  }
                }
              }
            } else {
              borderInfoCompute[bd_r + '_' + bd_c].r = null
            }

            if (value.t != null && bd_r == mc.r) {
              //上边框
              borderInfoCompute[bd_r + '_' + bd_c].t = {
                color: value.t.color,
                style: value.t.style
              }

              let bd_r_top = bd_r - 1

              if (bd_r_top >= 0 && borderInfoCompute[bd_r_top + '_' + bd_c]) {
                if (
                  data[bd_r_top] != null &&
                  getObjType(data[bd_r_top][bd_c]) == 'object' &&
                  data[bd_r_top][bd_c].mc != null
                ) {
                  let cell_top = data[bd_r_top][bd_c]

                  let mc_t = cfg['merge'][cell_top.mc.r + '_' + cell_top.mc.c]

                  if (mc_t.r + mc_t.rs - 1 == bd_r_top) {
                    borderInfoCompute[bd_r_top + '_' + bd_c].b = {
                      color: value.t.color,
                      style: value.t.style
                    }
                  }
                } else {
                  borderInfoCompute[bd_r_top + '_' + bd_c].b = {
                    color: value.t.color,
                    style: value.t.style
                  }
                }
              }
            } else {
              borderInfoCompute[bd_r + '_' + bd_c].t = null
            }

            if (value.b != null && bd_r == mc.r + mc.rs - 1) {
              //下边框
              borderInfoCompute[bd_r + '_' + bd_c].b = {
                color: value.b.color,
                style: value.b.style
              }

              let bd_r_bottom = bd_r + 1

              if (bd_r_bottom < data.length && borderInfoCompute[bd_r_bottom + '_' + bd_c]) {
                if (
                  data[bd_r_bottom] != null &&
                  getObjType(data[bd_r_bottom][bd_c]) == 'object' &&
                  data[bd_r_bottom][bd_c].mc != null
                ) {
                  let cell_bottom = data[bd_r_bottom][bd_c]

                  let mc_b = cfg['merge'][cell_bottom.mc.r + '_' + cell_bottom.mc.c]

                  if (mc_b.r == bd_r_bottom) {
                    borderInfoCompute[bd_r_bottom + '_' + bd_c].t = {
                      color: value.b.color,
                      style: value.b.style
                    }
                  }
                } else {
                  borderInfoCompute[bd_r_bottom + '_' + bd_c].t = {
                    color: value.b.color,
                    style: value.b.style
                  }
                }
              }
            } else {
              borderInfoCompute[bd_r + '_' + bd_c].b = null
            }
          } else {
            if (value.l != null) {
              //左边框
              borderInfoCompute[bd_r + '_' + bd_c].l = {
                color: value.l.color,
                style: value.l.style
              }

              let bd_c_left = bd_c - 1

              if (bd_c_left >= 0 && borderInfoCompute[bd_r + '_' + bd_c_left]) {
                if (
                  data[bd_r] != null &&
                  getObjType(data[bd_r][bd_c_left]) == 'object' &&
                  data[bd_r][bd_c_left].mc != null
                ) {
                  let cell_left = data[bd_r][bd_c_left]

                  let mc_l = cfg['merge'][cell_left.mc.r + '_' + cell_left.mc.c]

                  if (mc_l.c + mc_l.cs - 1 == bd_c_left) {
                    borderInfoCompute[bd_r + '_' + bd_c_left].r = {
                      color: value.l.color,
                      style: value.l.style
                    }
                  }
                } else {
                  borderInfoCompute[bd_r + '_' + bd_c_left].r = {
                    color: value.l.color,
                    style: value.l.style
                  }
                }
              }
            } else {
              borderInfoCompute[bd_r + '_' + bd_c].l = null
            }

            if (value.r != null) {
              //右边框
              borderInfoCompute[bd_r + '_' + bd_c].r = {
                color: value.r.color,
                style: value.r.style
              }

              let bd_c_right = bd_c + 1

              if (bd_c_right < data[0].length && borderInfoCompute[bd_r + '_' + bd_c_right]) {
                if (
                  data[bd_r] != null &&
                  getObjType(data[bd_r][bd_c_right]) == 'object' &&
                  data[bd_r][bd_c_right].mc != null
                ) {
                  let cell_right = data[bd_r][bd_c_right]

                  let mc_r = cfg['merge'][cell_right.mc.r + '_' + cell_right.mc.c]

                  if (mc_r.c == bd_c_right) {
                    borderInfoCompute[bd_r + '_' + bd_c_right].l = {
                      color: value.r.color,
                      style: value.r.style
                    }
                  }
                } else {
                  borderInfoCompute[bd_r + '_' + bd_c_right].l = {
                    color: value.r.color,
                    style: value.r.style
                  }
                }
              }
            } else {
              borderInfoCompute[bd_r + '_' + bd_c].r = null
            }

            if (value.t != null) {
              //上边框
              borderInfoCompute[bd_r + '_' + bd_c].t = {
                color: value.t.color,
                style: value.t.style
              }

              let bd_r_top = bd_r - 1

              if (bd_r_top >= 0 && borderInfoCompute[bd_r_top + '_' + bd_c]) {
                if (
                  data[bd_r_top] != null &&
                  getObjType(data[bd_r_top][bd_c]) == 'object' &&
                  data[bd_r_top][bd_c].mc != null
                ) {
                  let cell_top = data[bd_r_top][bd_c]

                  let mc_t = cfg['merge'][cell_top.mc.r + '_' + cell_top.mc.c]

                  if (mc_t.r + mc_t.rs - 1 == bd_r_top) {
                    borderInfoCompute[bd_r_top + '_' + bd_c].b = {
                      color: value.t.color,
                      style: value.t.style
                    }
                  }
                } else {
                  borderInfoCompute[bd_r_top + '_' + bd_c].b = {
                    color: value.t.color,
                    style: value.t.style
                  }
                }
              }
            } else {
              borderInfoCompute[bd_r + '_' + bd_c].t = null
            }

            if (value.b != null) {
              //下边框
              borderInfoCompute[bd_r + '_' + bd_c].b = {
                color: value.b.color,
                style: value.b.style
              }

              let bd_r_bottom = bd_r + 1

              if (bd_r_bottom < data.length && borderInfoCompute[bd_r_bottom + '_' + bd_c]) {
                if (
                  data[bd_r_bottom] != null &&
                  getObjType(data[bd_r_bottom][bd_c]) == 'object' &&
                  data[bd_r_bottom][bd_c].mc != null
                ) {
                  let cell_bottom = data[bd_r_bottom][bd_c]

                  let mc_b = cfg['merge'][cell_bottom.mc.r + '_' + cell_bottom.mc.c]

                  if (mc_b.r == bd_r_bottom) {
                    borderInfoCompute[bd_r_bottom + '_' + bd_c].t = {
                      color: value.b.color,
                      style: value.b.style
                    }
                  }
                } else {
                  borderInfoCompute[bd_r_bottom + '_' + bd_c].t = {
                    color: value.b.color,
                    style: value.b.style
                  }
                }
              }
            } else {
              borderInfoCompute[bd_r + '_' + bd_c].b = null
            }
          }
        } else {
          delete borderInfoCompute[bd_r + '_' + bd_c]
        }
      }
    }
  }
  return borderInfoCompute
}

//获取数据类型
const getObjType = function (obj) {
  let toString = Object.prototype.toString

  let map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  return map[toString.call(obj)]
}

const setStyleAndValue = function (cellArr, worksheet) {
  if (!Array.isArray(cellArr)) return

  cellArr.forEach(function (row, rowid) {
    const dbrow = worksheet.getRow(rowid + 1)
    //设置单元格行高,默认乘以1.2倍
    dbrow.height = luckysheet.getRowHeight([rowid])[rowid] * 1.2
    row.every(function (cell, columnid) {
      if (!cell) return true
      if (rowid == 0) {
        const dobCol = worksheet.getColumn(columnid + 1)
        //设置单元格列宽除以8
        dobCol.width = luckysheet.getColumnWidth([columnid])[columnid] / 8
      }
      let fill = fillConvert(cell.bg)
      let font = fontConvert(cell.ff, cell.fc, cell.bl, cell.it, cell.fs, cell.cl, cell.ul)
      let alignment = alignmentConvert(cell.vt, cell.ht, cell.tb, cell.tr)
      let value

      let v = ''
      if (cell.ct && cell.ct.t == 'inlineStr') {
        const s = cell.ct.s
        s.forEach(function (val, num) {
          v += val.v
        })
      } else {
        v = cell.v
      }
      if (cell.f) {
        value = { formula: cell.f, result: v }
      } else {
        value = v
      }
      let target = worksheet.getCell(rowid + 1, columnid + 1)
      target.fill = fill
      target.font = font
      target.alignment = alignment
      target.value = value
      return true
    })
  })
}

//转换颜色
const rgb2hex = function (rgb) {
  if (rgb.charAt(0) == '#') {
    return rgb
  }

  const ds = rgb.split(/\D+/)
  const decimal = Number(ds[1]) * 65536 + Number(ds[2]) * 256 + Number(ds[3])
  return '#' + zero_fill_hex(decimal, 6)

  function zero_fill_hex(num, digits) {
    let s = num.toString(16)
    while (s.length < digits) s = '0' + s
    return s
  }
}

const fillConvert = function (bg) {
  if (!bg) {
    return null
    // return {
    // 	type: 'pattern',
    // 	pattern: 'solid',
    // 	fgColor:{argb:'#ffffff'.replace('#','')}
    // }
  }
  bg = bg.indexOf('rgb') > -1 ? rgb2hex(bg) : bg
  let fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: bg.replace('#', '') }
  }
  return fill
}

const fontConvert = function (ff = 0, fc = '#000000', bl = 0, it = 0, fs = 10, cl = 0, ul = 0) {
  // luckysheet：ff(样式), fc(颜色), bl(粗体), it(斜体), fs(大小), cl(删除线), ul(下划线)
  const luckyToExcel = {
    0: '微软雅黑',
    1: '宋体（Song）',
    2: '黑体（ST Heiti）',
    3: '楷体（ST Kaiti）',
    4: '仿宋（ST FangSong）',
    5: '新宋体（ST Song）',
    6: '华文新魏',
    7: '华文行楷',
    8: '华文隶书',
    9: 'Arial',
    10: 'Times New Roman ',
    11: 'Tahoma ',
    12: 'Verdana',
    num2bl: function (num) {
      return num === 0 ? false : true
    }
  }
  let color = fc ? '' : (fc + '').indexOf('rgb') > -1 ? util.rgb2hex(fc) : fc

  let font = {
    name: ff,
    family: 1,
    size: fs,
    color: { argb: color.replace('#', '') },
    bold: luckyToExcel.num2bl(bl),
    italic: luckyToExcel.num2bl(it),
    underline: luckyToExcel.num2bl(ul),
    strike: luckyToExcel.num2bl(cl)
  }

  return font
}

const alignmentConvert = function (vt = 'default', ht = 'default', tb = 'default', tr = 'default') {
  // luckysheet:vt(垂直), ht(水平), tb(换行), tr(旋转)
  const luckyToExcel = {
    vertical: {
      0: 'middle',
      1: 'top',
      2: 'bottom',
      default: 'top'
    },
    horizontal: {
      0: 'center',
      1: 'left',
      2: 'right',
      default: 'left'
    },
    wrapText: {
      0: false,
      1: false,
      2: true,
      default: false
    },
    textRotation: {
      0: 0,
      1: 45,
      2: -45,
      3: 'vertical',
      4: 90,
      5: -90,
      default: 0
    }
  }

  let alignment = {
    vertical: luckyToExcel.vertical[vt],
    horizontal: luckyToExcel.horizontal[ht],
    wrapText: luckyToExcel.wrapText[tb],
    textRotation: luckyToExcel.textRotation[tr]
  }
  return alignment
}
```
