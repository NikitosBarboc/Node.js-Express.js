import http = require('http');
import fs = require('fs');

http
  .createServer((req, res) => {
    const fileStream = fs.createReadStream('./content/subfolder/big-text-file.txt', 'utf8');
    fileStream.on('open', () => {
      fileStream.pipe(res);
    })
    fileStream.on('error', (err) => {
      console.log(err)
    })
  })
  .listen(5000, () => console.log('Local host at 5000'))
