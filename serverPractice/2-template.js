const http = require('http');
const http2 = require('http2'); //https, 개발할 때 힘드므로 배포하기 전에는 http1 사용
const fs = require('fs');
const ejs = require('ejs');

const name = 'Choi';
const courses = [
    {name: 'HTML'},
    {name: 'CSS'},
    {name: 'JS'},
    {name: 'Node'}
];
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
        ejs.renderFile('./template/index.ejs',{name})
        .then((data) => res.end(data))
        .catch(console.error);
        
    } else if (url === '/courses') {
        ejs.renderFile('./template/courses.ejs',{courses})
        .then((data) => res.end(data))
        .catch(console.error);
    } else {
        ejs.renderFile('./template/not-found.ejs',{name})
        .then((data) => res.end(data))
        .catch(console.error);
    }
});

server.listen(8080); // 8080 port number