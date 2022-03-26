const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url == '/') {
        res.end('home page');
    }
    else if(req.url == '/about') {
        res.end('about page');
    }
    else if(req.url == '/contact') {
        res.end('contact page');
    }
    else{
        res.writeHead(404,{"content-type": "text/html"});
        res.end("<h1> 404 error page </h1>");

    }
});
server.listen('8000','127.0.0.1', ()=>{
    console.log('iam listening');
});