const http = require('http');

const courses = [
    {name: 'HTML'},
    {name: 'CSS'},
    {name: 'JS'},
    {name: 'Node'}
];

const server = http.createServer((req, res) => {
    const url = req.url; //which data?
    const method = req.method; // how? action?

    res.setHeader('Content-Type','text/html');

    if(url === '/') {
    } else if (url === '/courses') {
        if(method === 'GET') {
            res.writeHead(200, {'Contend-Type':'application/json'});
            res.end(JSON.stringify(courses));
        } 
        
        else if (method === 'POST') {
            const body = [];
            req.on('data', chunk => {
                console.log(chunk);
                body.push(chunk);
            });

            req.on('end', ()=> {
                const bodyStr = Buffer.concat(body).toString();
                const course = JSON.parse(bodyStr);
                courses.push(course);
                console.log(course);
                res.writeHead(201);
                res.end();
            })
        }

    } else {
    }
});

server.listen(8080); // 8080 port number