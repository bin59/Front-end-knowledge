## enter换行

### 代码示例

```html
<!-- name  标识字段 -->
   <a-input
   name = "name1"
   @focus="$event.currentTarget.select()"
   @keyup.enter=" enterKey(index, $event)">
   </a-input>
```

```js
enterKey ( idx, e) {
// 使用了idx,e

      // 获取input列表
      let inputTrs = document.querySelectorAll(".ant-table-tbody > tr"),
        inputs = inputTrs[idx].querySelectorAll("td .ant-input"),
        index = -1
      console.log(inputTrs, 'inputTrs');
      console.log(inputs, 'inputs');

      inputs = [...inputs].filter(ele => !ele.disabled && ele.name && ele.name != 'tax_rate')
      let len = inputs.length
      console.log(inputs, "inputs 当前行input数组", "长度", len);
      // 判断当前位置
      for (let i = 0; i < len; i++) {
        if (e.target.name == inputs[i].name) {
          index = i + 1;
          break;
        }
      }
      console.log(index, '第几个input');
      // 当前行最后一个
      if (index == len) {
        console.log("当前行最后一个");
        index = 0;
        // inputTrs = document.querySelectorAll(".ant-table-tbody > tr");
        inputs = inputTrs[idx].querySelectorAll("td .ant-input");
        inputs = [...inputs].filter(ele => ele.name)
      }
      inputs[index].focus();
      // 一行的最后一个

    },

```

## vue表格实现shift多选

methods中
```js   
  //键盘按键判断:左箭头-37;上箭头-38；右箭头-39;下箭头-40  回车：13   ctrl：17   shift：16
    keyevent() {
      const that = this;
      // 按下键盘 会连续一直执行下面方法
      document.onkeydown = function (e) {
        const keyCode = e.keyCode;
        if (keyCode == 16) {
          that.isshift = true;
          return;
        } else if (keyCode == 17) {
          that.isctrl = true;
          return;
        }
      };
      // 放弃键盘
      document.onkeyup = function (e) {
        const keyCode = e.keyCode;
        if (keyCode == 16) {
          that.isshift = false;
          return;
        } else if (keyCode == 17) {
          that.isctrl == false;
          return;
        }
      };
    },
```

mounted
```js
  mounted() {
    this.keyevent();
  }
```


<!-- 点击行 -->

```js

tableClick(record,index){
  
        // 是否shift多选
        if (this.isshift) {
          // 是第一此点击
          if (this.gwongRowId == -1) {
            this.shiftSelectedIndex = index;
            console.log(this.shiftSelectedIndex, "first click");
          } else {
            this.shiftSelectedIndex == -1 && (this.shiftSelectedIndex = index);
            const firstNum =
              this.shiftSelectedIndex > index ? index : this.shiftSelectedIndex;
            const secondNum =
              this.shiftSelectedIndex > index ? this.shiftSelectedIndex : index;
            this.selectedRows = [];
            this.selectedRowKeys = [];
            let arr = new Array(secondNum - firstNum + 1).fill(0);
            arr.forEach((item, idx) => {
              this.selectedRowKeys.push(firstNum + idx);
            });
            console.log(this.productColList, "this.productColList");
            this.selectedRows = this.productColList.slice(
              firstNum,
              secondNum + 1
            );
            console.log(this.selectedRows, this.selectedRowKeys);
          }
        } else {
          this.shiftSelectedIndex = index;
        }
}

 this.gwongRowId = index;
```

