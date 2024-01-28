import fs from 'fs';
import path from 'path';

export default function handler() {
  const filePath = path.join(process.cwd(), '/lib/chat.txt');
  return fs.readFileSync(filePath, { encoding: "utf-8", flag: "r" });
}