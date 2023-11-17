/*
    Map是一组键值对的结构，具有极快的查找速度
    js Map对象的用法:https://blog.csdn.net/weixin_41646716/article/details/91509295

    Set 和 Map 数据结构:https://es6.ruanyifeng.com/#docs/set-map
*/
{   
     //声明 Map
    let m = new Map();

    //添加元素
    m.set('name','小黑');
    m.set('change', function(){
        console.log("我是小黄");
    });
    let key = {
        color : '黑色'
    };
    m.set(key, ['黑','白','灰']);

    //size
    console.log(m.size);

    //删除
    // m.delete('name')

    //获取
    // console.log(m.get('change'));
    // console.log(m.get(key));

    //清空
    // m.clear();

    //遍历
    for(let v of m){
        // console.log(v);
    }

    // console.log(m);

    
}