import {readFile, readFileSync} from 'fs';

// package.json 파일의 바이너리 내용
const buffer: Buffer = readFileSync('./package.json');
const content: string = buffer.toString();
console.log(content);