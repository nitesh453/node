const http = require('http');
const fs = require('fs');
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
    else if(req.url == '/api') {
        fs.readFile('userapi.json','utf-8',(err,data) =>{
            const orgdata = JSON.parse(data);
            
           res.end(data);
           console.log(orgdata);
        }
        );
        
    }
    else{
        res.writeHead(404,{"content-type": "text/html"});
        res.end("<h1> 404 error page </h1>");

    }
});
server.listen('8000','127.0.0.1', ()=>{
    console.log('iam listening');
});