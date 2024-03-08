const http = require('http');
const server = http.createServer();
const fs = require('fs');
server.listen(64333, () => {
    console.log('service run: http://127.0.0.1:64333');
});

server.on('request', (req, res) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Content-Type', 'application/json');

	const urls = req.url.split('?');
	const requestAddress = urls[0];
        console.log(`请求地址：${ requestAddress }`);

        const callback = {
          '/test': () => {
            console.log(`查询字符串：${urls[1]}`);

            if (req.method === 'POST') {
            // post请求，获取json格式的请求体参数
              let data = '';
              
              // req对象是一个流（参考Stream API），可以监听它的data事件来获取数据块。
              req.on('data', (chunk) => {
                // 这里假设收到的数据是字符串，隐式转换：二进制数据 => 字符串
                data += chunk;
              });
              
              // 在获取数据结束时，调用end事件
              req.on('end', () => {
                data = JSON.parse(data);
                console.log('请求体：', data);
              });
            }

        
            res.statusCode = 200;
            res.end(JSON.stringify({text: '通过测试'}));
          },
          '/': () => {
            console.log(`查询字符串：${urls[1]}`);
            if (req.method === 'POST') {
              // post请求，获取json格式的请求体参数
                let data = '';
                
                // req对象是一个流（参考Stream API），可以监听它的data事件来获取数据块。
                req.on('data', (chunk) => {
                  // 这里假设收到的数据是字符串，隐式转换：二进制数据 => 字符串
                  data += chunk;
                });
                
                // 在获取数据结束时，调用end事件
                req.on('end', () => {
                  jData = JSON.parse(data);
                  console.log('请求体：', jData);
                  fsName = `./daocloud-${new Date()}.json`
                  fs.writeFile(fsName, data, err => {
                    if (err) {
                      console.error(err);
                    }
                    // file written successfully
                  });
                });
              }
            res.statusCode = 200;
            res.end(JSON.stringify({text: 'hello world'}));
          }
        }
		
        if (callback[requestAddress] instanceof Function) {
          return callback[requestAddress]()
        }

        res.writeHead(200, '响应成功');
        res.end('成功收到请求');
    } catch (ex) {
	console.error(ex.message);
	res.statusCode = 500;
	res.end('service error');
    }
});