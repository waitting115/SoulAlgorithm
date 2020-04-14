function _axios ({ method = 'GET', url, data = {} }) {
    return new Promise ((resolve, reject) => {
        method = method.toUpperCase();
		
        //处理数据
        let dataStr = '';
        Object.keys(data).forEach((item) => {
            dataStr += `${item}=${data[item]}&`;
        })
        if(dataStr) {
            //去掉末尾&
            dataStr = dataStr.subString(0, dataStr.length - 1);
            url = url + '?' + dataStr;
        }

        //执行ajax
        const xhr = new XMLHttpRequest();//创建对象

        xhr.open(method, url, true);//打开连接

        if(method === 'GET' || method === 'DELETE') {//发出请求
            xhr.send();
        } else if (method === 'POST' || method === 'PUT') {
            //发送json格式数据，添加相应请求头，告诉请求体格式为json
            xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
            xhr.send(JSON.stringify(data));
        } else {
        	throw new Error('未知的method！')
        }

        //绑定状态改变监听
        xhr.onreadystatechange = function () {
        	//若请求未完成，则直接返回
            if(xhr.readyState !== 4) {
                return;
            }

            const { status, statusText } = xhr;//解构赋值
            if(status >= 200 && status < 300) {
                //准备结果对象
                const response = {
                    data: JSON.parse(xhr.response),
                    status,
                    statusText,
                };
                resolve(response);
            } else {
                reject(new Error('request error status is ' + status));
            }
        }
    });
}
_axios.get = function get(url, data = {}) {
	return new Promise ((resolve, reject) => {
		let dataStr = '';
		Object.keys(data).forEach((key) => {
			dataStr += `${key}=${data[key]}`;
		})
		if(dataStr) {
			dataStr = dataStr.subString(0, dataStr.length - 1);
			url + '?' + dataStr;
		}

		const xhr = new XMLHttpRequest();
		xhr.open("GET", url, true);
		xhr.send();

		xhr.onreadystatechange = function () {
			if(xhr.readyState !== 4) return;
			
			const { status, statusText } = xhr;			
			if(xhr.status >= 200 && xhr.status < 300) {
				const response = {
					data : JSON.parse(xhr.response),
					status,
					statusText,
				}
				resolve(response);
			} else {
				reject(new Error('request error status is ' + status))
			}
		}
	})
}
_axios.post = function ...