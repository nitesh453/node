const http = require('http');

const server = http.createServer((req,res) => {
    res.end('hello fromthe other side nitesh ji.');
});
server.listen('8000','127.0.0.1', () => {
    console.log("this listening port 8000");
});