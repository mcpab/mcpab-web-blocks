import { readFile, writeFile } from 'node:fs/promises';

const clientOutputFiles = ['dist/client.js', 'dist/client.cjs'];
const directive = "'use client';";

for (const filePath of clientOutputFiles) {
  const source = await readFile(filePath, 'utf8');

  if (source.startsWith(directive)) {
    continue;
  }

  await writeFile(filePath, `${directive}\n${source}`);
}
