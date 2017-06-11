const fs = require('fs');
const http = require('http');

let server = http.createServer((request, response) => {
    let url = request.url;
    console.log(url);

    if (url === '/') {
        fs.readFile('router.html', ((err, data) => {
            response.end(data);
        }))
    } else if (url.includes('jpg')) {
        fs.readFile(url.slice(1), ((err, data) => {
            response.end(data);
        }))
    } else if (url.includes('js')) {
        fs.readFile(url.slice(1), ((err, data) => {
            response.end(data);
        }))
    }
}).listen(3000, 'localhost', () => console.log('Server is running at localhost:3000'))