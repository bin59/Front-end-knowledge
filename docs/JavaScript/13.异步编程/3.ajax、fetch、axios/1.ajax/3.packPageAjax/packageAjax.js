function ajax(_method, _url, _callBack, _data) {
    let xhr = new XMLHttpRequest();
    let result; // 获取异步数据

    // console.log(_data);
    //_data = {imgs_id:1,id:1}

    // get请求   url的后面加  ?imgs_id=1&id=1

    //  处理get请求，参数放置请求头
    let str = "?";
    // 如果有传入数据就进行处理
    if (_data) {
        for (let key in _data) {
            str += `${key}=${_data[key]}&`;
        };
    }
    // console.log(_url+str.slice(0,-1));
    // ?name=hy&id=1

    // 判断是否是get请求
    if (_method.toUpperCase() == "GET") {
        // console.log("这是一个get请求");
        xhr.open(_method, _url + str.slice(0, -1));
        xhr.send();
    } else {
        // post及其他请求
        // console.log("这是一个post请求");
        xhr.open(_method, _url);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(_data));
    }

    xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                result = JSON.parse(xhr.responseText);
            } else {
                result = JSON.parse(xhr.responseText);
            }
            // 将结果通过函数的参数返回出去
            _callBack(result);
        }
    });
}