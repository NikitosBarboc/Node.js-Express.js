import { createReadStream } from 'fs';

const stream = createReadStream('./content/subfolder/big-text-file.txt', {highWaterMark: 1024 * 90});

stream.on('data', (result) => {
  console.log(result)
});

stream.on('error', (err) => console.log(err));
