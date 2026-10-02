// const fs= require('fs');
// console.log(fs);

// const content=fs.readFileSync('notes.txt','utf-8');
// console.log(content);
const fs=require('node:fs');
const content=fs.readFileSync('notes.txt','utf-8');
// console.log(content);
// fs.writeFileSync('copy.txt','I want to write this','utf-8');
// fs.appendFileSync('copy.txt','Append in Copy.txt','utf-8');
// fs.mkdirSync('games/xyz/a',{recursive:true});
// fs.rmdirSync('games',{recursive:true});
// fs.unlinkSync('copy.txt');