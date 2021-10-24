const http = require('http');
const http2 = require('http2'); //https, 개발할 때 힘드므로 배포하기 전에는 http1 사용
const fs = require('fs');

console.log(http.STATUS_CODES);
console.log(http.METHODS);

const server = http.createServer((req, res) => {
    console.log('incoming....');
    console.log(req.headers);
    console.log(req.httpVersion);
    console.log(req.method);
    console.log(req.url);
    const url = req.url;
    res.setHeader('Content-Type','text/html');

    if(url === '/') {
        const read = fs.createReadStream('./html/index.html').pipe(res);
        
    } else if (url === '/courses') {
        const read = fs.createReadStream('./html/courses.html').pipe(res);
        
    } else {
        const read = fs.createReadStream('./html/not-found.html').pipe(res);
        
    }
});

server.listen(8080); // 8080 port number