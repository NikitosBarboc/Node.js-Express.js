import { readFile, writeFile } from 'fs/promises';

const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8')
    const second = await readFile('./content/second.txt', 'utf8')
    await writeFile('./content/result-promisify.txt',
      `${first}\n${second}`,
      { flag: 'a' }
    );

  } catch (e) {
    console.log(e)
  }
} 
