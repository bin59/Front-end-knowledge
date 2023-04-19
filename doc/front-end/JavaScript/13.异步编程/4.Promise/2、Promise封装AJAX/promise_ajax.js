// 使用Promise封装ajax
function ajax(_url, _data, _method) {
    // GET请求为默认请求
    let method = _method || "GET";
    // GET请求就直接默认是null
    let data = _data || null;
    // 返回Prmoise对象
    return new Promise((resolve, reject) => {
        // 实例化一个XMLHttpRequest对象
        let xhr = new XMLHttpRequest();

        if (method.toUpperCase() == "GET") {
            let str = "?";
            // 处理get请求的参数
            for (let k in data) {
                str += `${k}=${data[k]}&`;
            };
            str = str.slice(0, -1);
            xhr.open(method, _url + str);
        } else {
            xhr.open(method, _url);
        }
        // 设置默认请求头
        // 设置请求头格式为json格式
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(data));

        xhr.addEventListener("readystatechange", () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    // 返回解析成功结果
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    // 拒绝
                    reject(JSON.parse(xhr.responseText));
                }
            }
        })
    })
}