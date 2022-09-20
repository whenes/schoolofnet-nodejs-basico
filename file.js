const fs = require('fs');

fs.writeFile('data.txt', 'Hello world from SON', function(err) {
  if (err) {
    throw err;
  }
});

fs.readFile('data.txt', function(err, data) {
  if (err) {
    throw err;
  }

  console.log(data.toString('utf-8'));
});

fs.readdir('.', function(err, files) {
  if (err) {
    throw err;
  }
  for (let index in files) {
    console.log(files[index]);
  }
});

fs.readdirSync('.')
  .filter(function(file) {
    return (file.endsWith('.txt'));
  })
  .forEach(function(file) {
    console.log(file);
  });