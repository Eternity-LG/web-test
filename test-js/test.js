var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'Application/json'});
    res.write('{"test":"aaaa"}');
    res.end();

});
server.listen(1000);
console.log('this is a test server');