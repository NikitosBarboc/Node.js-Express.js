import { writeFile } from "fs/promises";

const writeText = async () => {
  for (let i = 0; i < 100000; i++) {
    await writeFile(
      './content/subfolder/big-text-file.txt',
      "info info info info info info info info info info info info info info info info info info info info\n",
      { flag: 'a' }
      )
  }
}
writeText();