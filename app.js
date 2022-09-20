const http = require('http');
const handle = require('./handle');
const name = require('./name');

console.log(name);

const server = http.createServer(handle);
server.listen(3000, function() {
  console.log('server is listening at port 3000')
});