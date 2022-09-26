const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err: Error, data: string) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = data;
  readFile('./content/second.txt', 'utf8', (err: Error, data: string) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = data;
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      { flag: 'a' },
      (err: Error, result: string) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});