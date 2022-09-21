const express = require('express');

const app = express();

app.get('/', function(req, res) {
  res.send('Hello from express');
});
app.get('/oi', function(req, res) {
  res.json({ message: 'Hello from express' });
});
app.get('/hello/:name', function(req, res) {
  res.json({ message: 'This is my param: ' + req.params.name })
});

app.listen(3000, function() {
  console.log('Server listening port 3000');
});