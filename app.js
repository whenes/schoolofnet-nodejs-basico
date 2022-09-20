const http = require('http');
const handle = require('./handle');
const name = require('./name');

const events = require('events');
const emiter = new events.EventEmitter();

emiter.on('say12', say);

function say() {
  console.log('saying...');
}

emiter.emit('say12');

console.log(name);

const server = http.createServer(handle);
server.listen(3000, function() {
  console.log('server is listening at port 3000')
});