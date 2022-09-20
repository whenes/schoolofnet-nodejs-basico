function handle(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write('<!DOCTYPE "HTML">');
  res.write('<html>');
  res.write('<head>');
  res.write('<title>');
  res.write('Testando http');
  res.write('</title>');
  res.write('</head>');
  res.write('<body>');
  res.write('<h1>Hello from http module SON</h1>');
  res.write('</body>');
  res.write('</html>');
  res.end();
}

module.exports = handle;